#!/bin/bash

# Initial Docker Image Build & Push Script
# This script builds and pushes the initial Docker image to Docker Hub

set -e

echo "🚀 Building and pushing initial Docker image to Docker Hub"
echo "=========================================================="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
  echo "⚠️ Docker is not installed. Please install Docker first."
  exit 1
fi

# Check if .env.local exists and load Docker Hub credentials
if [ -f .env.local ]; then
  echo "🔍 Loading Docker Hub credentials from .env.local..."
  export $(grep -v '^#' .env.local | xargs)
else
  echo "⚠️ .env.local not found. Using default credentials."
  export DOCKER_HUB_USERNAME="nitpatnagithub"
  # Prompt for token if not set
  if [ -z "$DOCKER_HUB_TOKEN" ]; then
    echo "⚠️ DOCKER_HUB_TOKEN not set."
    read -s -p "Enter Docker Hub token: " DOCKER_HUB_TOKEN
    echo ""
  fi
fi

# Login to Docker Hub
echo "🔑 Logging in to Docker Hub as $DOCKER_HUB_USERNAME..."
echo "$DOCKER_HUB_TOKEN" | docker login -u "$DOCKER_HUB_USERNAME" --password-stdin

# Build Docker image
echo "🔨 Building Docker image..."
docker build -t "$DOCKER_HUB_USERNAME/nitp-website:latest" .

# Push to Docker Hub
echo "📤 Pushing image to Docker Hub..."
docker push "$DOCKER_HUB_USERNAME/nitp-website:latest"

echo "✅ Initial Docker image built and pushed successfully!"
echo "✅ Now you can run the auto-deployment setup script."
