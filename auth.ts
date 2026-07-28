import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { authConfig } from "./auth.config";
import { db } from "./db";
import { users } from "./db/schema";
import {
  clearFailedLogins,
  getLockoutRemaining,
  recordFailedLogin,
} from "./lib/login-rate-limit";

class RateLimitedError extends CredentialsSignin {
  code = "rate_limited";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        if (getLockoutRemaining(email) !== null) {
          throw new RateLimitedError();
        }

        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, email));
        if (!user) {
          recordFailedLogin(email);
          return null;
        }

        const passwordMatches = await bcrypt.compare(
          password,
          user.passwordHash
        );
        if (!passwordMatches) {
          recordFailedLogin(email);
          return null;
        }

        clearFailedLogins(email);
        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    session({ session, token }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },
});
