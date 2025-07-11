#!/bin/bash

# Server Auto-Deployment Setup Script
# This script sets up the server for automatic deployment

set -e

echo "🚀 Setting up auto-deployment for NITP Website"
echo "=============================================="

# Check if running as root or with sudo
if [ "$(id -u)" -ne 0 ]; then
  echo "⚠️ This script should be run with sudo or as root."
  exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
  echo "🐳 Docker not found. Installing Docker..."
  apt update
  apt install -y apt-transport-https ca-certificates curl software-properties-common
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
  apt update
  apt install -y docker-ce
  usermod -aG docker $SUDO_USER
  echo "✅ Docker installed successfully"
else
  echo "✅ Docker is already installed"
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
  echo "🐙 Docker Compose not found. Installing Docker Compose..."
  curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
  echo "✅ Docker Compose installed successfully"
else
  echo "✅ Docker Compose is already installed"
fi

# Check for .env.local file
if [ -f .env.local ]; then
  echo "✅ .env.local file exists - using your existing credentials"
else
  echo "⚠️ No .env.local file found."
  echo "⚠️ Using environment variables directly from docker-compose.yml"
  echo "⚠️ If you need to customize credentials, create a .env.local file manually"
fi

# Make deployment script executable
if [ -f scripts/deploy-from-dockerhub.sh ]; then
  chmod +x scripts/deploy-from-dockerhub.sh
  echo "✅ Made deployment script executable"
else
  echo "⚠️ Deployment script not found at scripts/deploy-from-dockerhub.sh"
fi

# Setup options
echo "📋 Choose auto-deployment method:"
echo "  1) Docker Compose with Watchtower (recommended)"
echo "  2) Cron job with deployment script"
echo "  3) Both methods (for redundancy)"
read -p "Enter your choice (1-3): " choice

case $choice in
  1)
    echo "🔄 Setting up Docker Compose with Watchtower..."
    
    # Login to Docker Hub with hardcoded username
    echo "🔑 Docker Hub login required..."
    echo "Username: nitpatnagithub (hardcoded)"
    read -s -p "Enter your Docker Hub token (hidden, will be pasted): " DOCKER_TOKEN
    echo ""
    # Save token to file for future use (secure file with restricted permissions)
    echo "$DOCKER_TOKEN" > .docker_token
    chmod 600 .docker_token
    echo "$DOCKER_TOKEN" | docker login -u nitpatnagithub --password-stdin
    
    docker-compose up -d
    echo "✅ Docker Compose services are running"
    ;;
  2)
    echo "🔄 Setting up cron job..."
    (crontab -l 2>/dev/null || echo "") | grep -v "deploy-from-dockerhub.sh" > /tmp/crontab
    echo "*/5 * * * * cd $(pwd) && ./scripts/deploy-from-dockerhub.sh >> /var/log/nitp-deploy.log 2>&1" >> /tmp/crontab
    crontab /tmp/crontab
    rm /tmp/crontab
    touch /var/log/nitp-deploy.log
    chmod 666 /var/log/nitp-deploy.log
    echo "✅ Cron job set up to check for updates every 5 minutes"
    # Run the deployment script immediately
    ./scripts/deploy-from-dockerhub.sh
    ;;
  3)
    echo "🔄 Setting up both methods..."
    
    # Login to Docker Hub with hardcoded username
    echo "🔑 Docker Hub login required..."
    echo "Username: nitpatnagithub (hardcoded)"
    read -s -p "Enter your Docker Hub token (hidden, will be pasted): " DOCKER_TOKEN
    echo ""
    # Save token to file for future use (secure file with restricted permissions)
    echo "$DOCKER_TOKEN" > .docker_token
    chmod 600 .docker_token
    echo "$DOCKER_TOKEN" | docker login -u nitpatnagithub --password-stdin
    
    # Setup Docker Compose
    docker-compose up -d
    echo "✅ Docker Compose services are running"
    # Setup cron
    (crontab -l 2>/dev/null || echo "") | grep -v "deploy-from-dockerhub.sh" > /tmp/crontab
    echo "*/5 * * * * cd $(pwd) && ./scripts/deploy-from-dockerhub.sh >> /var/log/nitp-deploy.log 2>&1" >> /tmp/crontab
    crontab /tmp/crontab
    rm /tmp/crontab
    touch /var/log/nitp-deploy.log
    chmod 666 /var/log/nitp-deploy.log
    echo "✅ Cron job set up as backup method"
    ;;
  *)
    echo "⚠️ Invalid choice. Exiting without setting up auto-deployment."
    exit 1
    ;;
esac

echo ""
echo "🎉 Auto-deployment setup complete!"
echo "------------------------------"
echo "Your website should now automatically update whenever you push to GitHub."
echo ""
echo "📝 Note: Using your existing .env.local file for credentials"
echo ""
echo "📝 Next steps:"
echo "1. Check container status: docker ps"
echo "2. View logs: docker logs nitp-main-website"
echo "3. Access your website at http://your-server-ip:3002"
echo ""
echo "For troubleshooting, refer to SERVER-SETUP.md"
