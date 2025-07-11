# ✅ Base image with Node.js 20
FROM node:20-alpine AS base

# ✅ Install system dependencies needed for some npm packages
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ✅ Copy lock files & install all dependencies (including dev for build)
COPY package.json package-lock.json* ./
RUN npm ci

# ✅ Copy app source and build it
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ✅ Create lightweight production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3002
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0

# 👤 Create non-root user for better security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# ✅ Copy only the necessary files for standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# ✅ Set correct owner for Next.js cache directory
RUN mkdir .next && chown nextjs:nodejs .next

USER nextjs

EXPOSE 3002

# ✅ Start using the Next.js standalone server
CMD ["node", "server.js"]
