# Server Deployment Script
# This script pulls the latest Docker image from Docker Hub and deploys it

# Configuration
APP_NAME="nitp-website"
APP_PORT="3002"
# Hardcoded Docker Hub username
DOCKER_HUB_USERNAME="nitpatnagithub"
# Check if we have a token file
if [ -f .docker_token ]; then
  DOCKER_HUB_TOKEN=$(cat .docker_token)
fi
IMAGE_NAME="$DOCKER_HUB_USERNAME/nitp-website:latest"

echo "🔄 Pulling latest Docker image..."
# Login to Docker Hub if token is provided
if [ -n "$DOCKER_HUB_TOKEN" ]; then
  echo "🔑 Logging in to Docker Hub..."
  echo "$DOCKER_HUB_TOKEN" | sudo docker login -u "$DOCKER_HUB_USERNAME" --password-stdin
fi

sudo docker pull $IMAGE_NAME

echo "🛑 Stopping old container if exists..."
sudo docker stop $APP_NAME 2>/dev/null || true
sudo docker rm $APP_NAME 2>/dev/null || true

echo "🚀 Starting new container..."

# Load environment variables from .env.local if it exists
ENV_VARS=""
if [ -f .env.local ]; then
  echo "📄 Loading environment variables from .env.local"
  while IFS= read -r line || [ -n "$line" ]; do
    # Skip comments and empty lines
    [[ $line =~ ^#.*$ || -z $line ]] && continue
    
    # Get the variable name and value
    var_name=$(echo "$line" | cut -d= -f1)
    var_value=$(echo "$line" | cut -d= -f2-)
    
    # Add to environment variables string
    ENV_VARS="$ENV_VARS -e $var_name=$var_value"
  done < .env.local
fi

# Run the container with environment variables
sudo docker run -d --restart=always -p $APP_PORT:3002 $ENV_VARS --name $APP_NAME $IMAGE_NAME

echo "🧹 Cleaning up old images..."
sudo docker system prune -f

echo "✅ Deployment complete!"
