import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

import { db } from "./index";
import { users } from "./schema";

async function main() {
  const [, , email, password] = process.argv;

  if (!email || !password) {
    console.error(
      "Usage: npm run db:set-password -- <email> <new-password>"
    );
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const [updated] = await db
    .update(users)
    .set({ passwordHash, updatedAt: new Date() })
    .where(eq(users.email, email))
    .returning({ id: users.id });

  if (!updated) {
    console.error(`No user found with email ${email}.`);
    process.exit(1);
  }

  console.log(`Password updated for ${email}.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
