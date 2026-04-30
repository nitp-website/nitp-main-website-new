# ✅ Base image with Node.js 20
FROM node:20-alpine AS base

# ✅ Install system dependencies needed for some npm packages
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ✅ Copy lock files & install all dependencies (including dev for build)
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

# ✅ Copy app source and build it
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build time
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_BACKEND_API_URL=https://admin.nitp.ac.in
ENV NEXT_PUBLIC_YOUR_API_KEY="da63ce5f202fc08ca2f84ddf36e4c303"
ENV NEXT_PUBLIC_CURRENT_URL=localhost:3000/
ENV NEXT_PUBLIC_Home=https://web.nitp.ac.in
ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="NitpCloud"
ENV ANALYZE=true

RUN npm run build

# ✅ Create lightweight production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3002
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV NEXT_PUBLIC_BACKEND_API_URL=https://admin.nitp.ac.in
ENV NEXT_PUBLIC_YOUR_API_KEY="da63ce5f202fc08ca2f84ddf36e4c303"
ENV NEXT_PUBLIC_CURRENT_URL=localhost:3000/
ENV NEXT_PUBLIC_Home=https://web.nitp.ac.in
ENV NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="NitpCloud"
ENV ANALYZE=true

# 👤 Create non-root user for better security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# ✅ Copy only the necessary files for standalone output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# ✅ Set correct owner for Next.js cache directory
RUN chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 3002

# ✅ Start using the Next.js standalone server
CMD ["node", "server.js"]
