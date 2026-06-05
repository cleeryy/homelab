FROM node:22-alpine AS base
# libc6-compat is required for native Node.js modules (e.g. @tailwindcss/oxide)
# to load correctly on Alpine Linux (musl libc).
RUN apk add --no-cache libc6-compat

FROM base AS deps
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
COPY package.json pnpm-lock.yaml source.config.ts next.config.ts tsconfig.json ./
RUN pnpm install --frozen-lockfile

FROM deps AS builder
COPY . .
RUN pnpm build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# public/ is tracked via .gitkeep (git doesn't track empty dirs).
# If static files are added to public/, uncomment the line below:
# COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.source ./.source
USER nextjs
EXPOSE 3545
ENV PORT=3545
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
