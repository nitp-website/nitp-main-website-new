# Server Setup for Auto-Deployment

This guide explains how to set up your server for automatic deployment of your NITP website using Docker Hub and Watchtower.

## Prerequisites

- A server running Ubuntu or similar Linux distribution
- Docker and Docker Compose installed
- Git installed
- SSH access to the server

## Initial Server Setup

1. **Connect to your server via SSH**:
   ```bash
   ssh username@your-server-ip
   ```

2. **Install Docker if not already installed**:
   ```bash
   # Update package index
   sudo apt update

   # Install required packages
   sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

   # Add Docker's official GPG key
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

   # Add the Docker repository
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

   # Install Docker
   sudo apt update
   sudo apt install -y docker-ce

   # Add your user to the docker group
   sudo usermod -aG docker $USER

   # Apply group changes (or log out and back in)
   newgrp docker
   ```

3. **Install Docker Compose**:
   ```bash
   # Download Docker Compose
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

   # Apply executable permissions
   sudo chmod +x /usr/local/bin/docker-compose
   ```

## Setup for Auto-Deployment

1. **Clone your repository**:
   ```bash
   git clone https://github.com/yourusername/nitp-main-website-new.git
   cd nitp-main-website-new
   ```

2. **Create your environment file**:
   ```bash
   cp .env.local.example .env.local
   nano .env.local  # Edit with your Docker Hub credentials
   ```

3. **Configure Auto-Deployment**:

   There are two options for auto-deployment:

   ### Option 1: Using Docker Compose with Watchtower (Recommended)

   1. **Start the services**:
      ```bash
      docker-compose up -d
      ```
   
   This will:
   - Pull your website image from Docker Hub
   - Start your website container
   - Start Watchtower to automatically check for updates every 5 minutes

   ### Option 2: Using a Cron Job with the Deployment Script

   1. **Make the deployment script executable**:
      ```bash
      chmod +x scripts/deploy-from-dockerhub.sh
      ```

   2. **Test the deployment script**:
      ```bash
      ./scripts/deploy-from-dockerhub.sh
      ```

   3. **Set up a cron job to check for updates**:
      ```bash
      crontab -e
      ```

   4. **Add this line to check every 5 minutes**:
      ```
      */5 * * * * cd /path/to/nitp-main-website-new && ./scripts/deploy-from-dockerhub.sh >> /var/log/nitp-deploy.log 2>&1
      ```

## Verifying the Setup

1. **Check if your containers are running**:
   ```bash
   docker ps
   ```

2. **View the website logs**:
   ```bash
   docker logs nitp-main-website
   ```

3. **Check Watchtower logs** (if using Option 1):
   ```bash
   docker logs watchtower
   ```

4. **Test the website in your browser**:
   ```
   http://your-server-ip:3002
   ```

## Updating the Website

With the auto-deployment set up, you simply:

1. Push changes to your GitHub repository
2. GitHub Actions builds and pushes a new image to Docker Hub
3. Watchtower (or your cron job) automatically detects the new image and updates your container

No manual intervention required!

## Troubleshooting

If you encounter any issues:

1. **Check container logs**:
   ```bash
   docker logs nitp-main-website
   docker logs watchtower
   ```

2. **Manually trigger a deployment**:
   ```bash
   docker-compose pull && docker-compose up -d
   ```
   
   Or if using the script:
   ```bash
   ./scripts/deploy-from-dockerhub.sh
   ```

3. **Check Docker Hub** to verify your image was pushed correctly:
   ```
   https://hub.docker.com/r/yourusername/nitp-website/tags
   ```
