#!/bin/bash
# Script to update Dockerfile with environment variables

echo "🔄 Creating updated Dockerfile with environment variables"

if [ ! -f Dockerfile ]; then
  echo "❌ Dockerfile not found!"
  exit 1
fi

# Create a backup of the original Dockerfile
cp Dockerfile Dockerfile.backup
echo "✅ Created backup of original Dockerfile as Dockerfile.backup"

# Create a new Dockerfile with environment variables
cat > Dockerfile.new << 'EOL'
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

# Set environment variables for runtime
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
EOL

# Replace the old Dockerfile with the new one
mv Dockerfile.new Dockerfile
echo "✅ Updated Dockerfile with environment variables"

echo "📝 Next steps:"
echo "1. Commit the updated Dockerfile"
echo "2. Push to GitHub to trigger a new build with environment variables"
echo "3. Watchtower will automatically deploy the new image"
