#!/bin/bash
# Quick redeploy script to update environment variables

echo "🔄 Redeploying application with updated environment variables"

# Check if running as root
if [ "$(id -u)" -ne 0 ]; then
  echo "⚠️ This script should be run with sudo or as root."
  exit 1
fi

# Check if .env.local exists
if [ ! -f .env.local ]; then
  echo "❌ .env.local file not found. Please create it first."
  exit 1
fi

# Load environment variables
echo "🔍 Loading environment variables from .env.local"
export $(grep -v '^#' .env.local | sed 's/\r$//' | xargs)

# Login to Docker Hub using the stored token
if [ -f .docker_token ]; then
  DOCKER_TOKEN=$(cat .docker_token)
  echo "🔑 Logging in to Docker Hub..."
  echo "$DOCKER_TOKEN" | docker login -u nitpatnagithub --password-stdin
fi

# Stop and remove existing container
echo "🛑 Stopping existing container..."
docker stop nitp-main-website 2>/dev/null || true
docker rm nitp-main-website 2>/dev/null || true

# Start container with the updated environment variables
echo "🚀 Starting container with updated environment variables..."
docker-compose up -d

echo "✅ Redeployment complete!"
echo "📋 Check container status with: docker ps"
echo "📋 Check logs with: docker logs nitp-main-website"
