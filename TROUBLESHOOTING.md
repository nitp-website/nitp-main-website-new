# Docker Hub Deployment Troubleshooting

This document provides solutions for common issues with Docker Hub deployment.

## Issue: "Repository does not exist" Error

If you see: `Error: pull access denied for nitpatnagithub/nitp-website, repository does not exist or may require 'docker login'`

### Solution 1: First-Time Setup

If this is your first deployment, the Docker Hub repository hasn't been created yet. You have two options:

#### Option A: Create Repository Manually
1. Log in to [Docker Hub](https://hub.docker.com)
2. Create a new repository named `nitp-website`
3. Make it public

#### Option B: Build and Push the Initial Image
Use the provided script:
```bash
sudo bash scripts/build-initial-image.sh
```

This script will:
1. Log in to Docker Hub using your credentials
2. Build the Docker image locally
3. Push it to Docker Hub to create the repository

### Solution 2: Check GitHub Actions Setup

If you're using GitHub Actions to build and push the image:

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add these secrets:
   - `DOCKERHUB_USERNAME`: nitpatnagithub
   - `DOCKERHUB_TOKEN`: your-docker-hub-token

4. Run the "Create Docker Hub Repository" workflow:
   - Go to Actions tab
   - Select "Create Docker Hub Repository" workflow
   - Click "Run workflow"

## Issue: GitHub Workflow Error

If you see: `Unrecognized named-value: 'secrets'. Located at position 1 within expression: secrets.EC2_HOST != ''`

This has been fixed in the latest version. The workflow now uses a repository variable instead of checking the secret directly.

To enable server deployment:
1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions > Variables
3. Create a variable named `ENABLE_SERVER_DEPLOY` with value `true`

## Deployment Sequence

For a successful first deployment:

1. Create Docker Hub repository (manual or via script)
2. Set up GitHub secrets
3. Push code to trigger GitHub Actions workflow
4. On your server, run the auto-deployment setup script:
   ```bash
   sudo bash scripts/setup-auto-deploy.sh
   ```
