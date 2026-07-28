# syntax=docker/dockerfile:1

FROM node:20-alpine AS base
WORKDIR /app

# ---- dependencies (full, incl. devDependencies for build & drizzle-kit) ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- production build ----
FROM deps AS builder
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- one-off migration runner (drizzle-kit needs devDependencies) ----
FROM base AS migrator
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY package.json drizzle.config.ts ./
COPY db/schema.ts ./db/schema.ts
COPY db/migrations ./db/migrations
CMD ["npx", "drizzle-kit", "migrate"]

# ---- runtime image (Next.js standalone output) ----
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
