#!/bin/bash
# Direct environment variable setup script

echo "🔄 Setting up environment variables and redeploying container"

# Check if running as root
if [ "$(id -u)" -ne 0 ]; then
  echo "⚠️ This script should be run with sudo or as root."
  exit 1
fi

# Stop and remove existing containers
echo "🛑 Stopping existing containers..."
docker stop nitp-main-website watchtower 2>/dev/null || true
docker rm nitp-main-website watchtower 2>/dev/null || true

# Login to Docker Hub using the stored token
if [ -f .docker_token ]; then
  DOCKER_TOKEN=$(cat .docker_token)
  echo "🔑 Logging in to Docker Hub..."
  echo "$DOCKER_TOKEN" | docker login -u nitpatnagithub --password-stdin
fi

echo "🔄 Pulling latest image..."
docker pull nitpatnagithub/nitp-website:latest

echo "🚀 Starting nitp-website container with environment variables..."
docker run -d --restart=always --name nitp-main-website \
  -p 3002:3002 \
  -e NEXT_PUBLIC_BACKEND_API_URL=https://admin.nitp.ac.in \
  -e NEXT_PUBLIC_YOUR_API_KEY="da63ce5f202fc08ca2f84ddf36e4c303" \
  -e NEXT_PUBLIC_CURRENT_URL=localhost:3000/ \
  -e NEXT_PUBLIC_Home=https://web.nitp.ac.in \
  -e NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="NitpCloud" \
  -e ANALYZE=true \
  -e NODE_ENV=production \
  -e PORT=3002 \
  --network nitp-main-website-new_nitp-network \
  --label "com.centurylinklabs.watchtower.enable=true" \
  nitpatnagithub/nitp-website:latest

echo "🚀 Starting watchtower container..."
docker run -d --restart=always --name watchtower \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --network nitp-main-website-new_nitp-network \
  containrrr/watchtower \
  --interval 300 --cleanup --label-enable

echo "✅ Redeployment complete!"
echo "📋 Container status:"
docker ps

echo "📋 Container logs:"
docker logs nitp-main-website | tail -n 20
