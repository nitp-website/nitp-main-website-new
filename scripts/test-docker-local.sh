#!/bin/bash

# Local Docker Test Script for NITP Website
# This tests your Docker build locally before deploying

echo "🐳 Testing Docker Build Locally with Node.js 20"
echo "==============================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Download from: https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo "✅ Docker found: $(docker --version)"
echo ""

# Build the image
echo "🔨 Building Docker image with Node.js 20..."
docker build -t nitp-test-local . || {
    echo "❌ Docker build failed!"
    exit 1
}

echo "✅ Docker image built successfully!"
echo ""

# Check the Node.js version in the image
echo "🔍 Checking Node.js version in image..."
docker run --rm nitp-test-local node --version

echo ""

# Run the container
echo "🚀 Starting test container on port 3003..."
docker stop nitp-test-local 2>/dev/null || true
docker rm nitp-test-local 2>/dev/null || true

docker run -d -p 3003:3002 --name nitp-test-local nitp-test-local || {
    echo "❌ Failed to start container!"
    exit 1
}

echo "✅ Container started successfully!"
echo ""

# Wait for container to start
echo "⏳ Waiting for container to initialize..."
sleep 8

# Test health endpoint
echo "🏥 Testing health endpoint..."
for i in {1..12}; do
    if curl -f -s http://localhost:3003/api/health > /dev/null 2>&1; then
        echo "✅ Health check passed!"
        echo ""
        echo "📊 Health endpoint response:"
        curl -s http://localhost:3003/api/health | jq . 2>/dev/null || curl -s http://localhost:3003/api/health
        echo ""
        echo ""
        echo "🌐 Test your application:"
        echo "  Application: http://localhost:3003"
        echo "  Health check: http://localhost:3003/api/health"
        echo ""
        echo "🧹 To clean up when done testing:"
        echo "  docker stop nitp-test-local"
        echo "  docker rm nitp-test-local"
        echo "  docker rmi nitp-test-local"
        echo ""
        echo "🎉 Local Docker test successful! Your app is ready for deployment."
        exit 0
    fi
    echo "⏳ Attempt $i/12: Waiting for health check..."
    sleep 3
done

echo "❌ Health check failed after 12 attempts"
echo "📋 Container logs:"
docker logs nitp-test-local
echo ""
echo "🧹 Cleaning up failed test..."
docker stop nitp-test-local
docker rm nitp-test-local
docker rmi nitp-test-local
exit 1
