#!/bin/bash
# Script to create .env.production from .env.local

echo "🔄 Creating .env.production from .env.local"

if [ ! -f .env.local ]; then
  echo "❌ .env.local file not found!"
  exit 1
fi

# Copy .env.local to .env.production
cp .env.local .env.production
echo "✅ Created .env.production file"

# Ensure that both Docker-related env vars are not in .env.production (they're not needed for the app)
sed -i '/DOCKER_HUB_USERNAME/d' .env.production
sed -i '/DOCKER_HUB_TOKEN/d' .env.production

echo "🔍 Environment variables in .env.production:"
cat .env.production

echo "✅ Done! .env.production is ready for your Next.js build"
echo "📝 Remember to include this file in your Git repository so it's available during the build process"
