#!/bin/bash

# Manual Rollback Script for NITP Website (Node.js 20)
# Usage: ./rollback.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
APP_NAME="nitp-main-website"
LIVE_PORT="3002"
HEALTH_ENDPOINT="/api/health"

# Function to log with timestamp
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to check if container exists
container_exists() {
    sudo docker ps -a --format '{{.Names}}' | grep -q "^$1$"
}

# Function to stop and remove container safely
cleanup_container() {
    local container_name=$1
    if container_exists $container_name; then
        log "🛑 Stopping container: $container_name"
        sudo docker stop $container_name || true
        log "🗑️ Removing container: $container_name"
        sudo docker rm $container_name || true
    fi
}

# Function to check application health
check_health() {
    local port=$1
    local retries=0
    local max_retries=8
    
    log "🏥 Checking health on port $port..."
    
    while [ $retries -lt $max_retries ]; do
        if curl -f -s --max-time 5 "http://localhost:$port$HEALTH_ENDPOINT" > /dev/null 2>&1; then
            log "${GREEN}✅ Health check passed on port $port${NC}"
            
            # Check Node.js version
            response=$(curl -s "http://localhost:$port$HEALTH_ENDPOINT")
            log "📊 Health response: $response"
            
            return 0
        fi
        
        retries=$((retries + 1))
        log "${YELLOW}⏳ Health check attempt $retries/$max_retries failed, retrying in 3s...${NC}"
        sleep 3
    done
    
    log "${RED}❌ Health check failed after $max_retries attempts${NC}"
    return 1
}

# Function to check Node.js version
check_node_version() {
    local container_name=$1
    if container_exists $container_name && sudo docker ps | grep -q $container_name; then
        node_version=$(sudo docker exec $container_name node --version 2>/dev/null || echo "unknown")
        log "🔍 Node.js version in container: $node_version"
        
        if [[ $node_version == v20* ]]; then
            log "${GREEN}✅ Correct Node.js 20 version${NC}"
        else
            log "${YELLOW}⚠️ Unexpected Node.js version: $node_version${NC}"
        fi
    fi
}

# Main rollback function
rollback() {
    log "${YELLOW}🔄 INITIATING MANUAL ROLLBACK...${NC}"
    log "📅 Rollback Time: $(date)"
    
    # Check if backup exists
    if [ ! -d "/home/ubuntu/nitp-docker-backup" ]; then
        log "${RED}❌ No backup found at /home/ubuntu/nitp-docker-backup${NC}"
        log "${RED}❌ Cannot proceed with rollback${NC}"
        exit 1
    fi
    
    log "📁 Backup found, proceeding with rollback..."
    
    # Check current container status
    if container_exists $APP_NAME; then
        log "📊 Current container status:"
        sudo docker ps --filter "name=$APP_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" || true
        
        # Get current health status
        log "🏥 Current health status:"
        curl -s --max-time 3 "http://localhost:$LIVE_PORT$HEALTH_ENDPOINT" 2>/dev/null || log "Current version health check failed"
    fi
    
    # Stop current container
    cleanup_container $APP_NAME
    
    # Restore backup
    log "📁 Restoring from backup..."
    sudo rm -rf /home/ubuntu/nitp-docker-current
    sudo cp -r /home/ubuntu/nitp-docker-backup /home/ubuntu/nitp-docker-current
    cd /home/ubuntu/nitp-docker-current
    
    # Build rollback image
    log "🔨 Building rollback image with Node.js 20..."
    sudo docker build -t $APP_NAME-rollback . || {
        log "${RED}❌ Failed to build rollback image${NC}"
        exit 1
    }
    
    # Check the Node.js version in the rollback image
    log "🔍 Checking Node.js version in rollback image..."
    sudo docker run --rm $APP_NAME-rollback node --version || log "Could not check Node.js version"
    
    # Start rollback container
    log "🚀 Starting rollback container..."
    sudo docker run -d --restart=always -p $LIVE_PORT:3002 --name $APP_NAME $APP_NAME-rollback || {
        log "${RED}❌ Failed to start rollback container${NC}"
        exit 1
    }
    
    # Wait for container to initialize
    log "⏳ Waiting for container to initialize..."
    sleep 8
    
    # Check Node.js version in running container
    check_node_version $APP_NAME
    
    # Verify rollback health
    log "🔍 Verifying rollback health..."
    if check_health $LIVE_PORT; then
        log "${GREEN}✅ ROLLBACK SUCCESSFUL!${NC}"
        log "${GREEN}✅ Application is running on port $LIVE_PORT${NC}"
        
        # Clean up old images
        log "🧹 Cleaning up old Docker images..."
        sudo docker image prune -f || true
        
        # Show final status
        log "📊 Final container status:"
        sudo docker ps --filter "name=$APP_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
        
        log "${GREEN}🎉 Rollback completed successfully!${NC}"
    else
        log "${RED}❌ Rollback health check failed${NC}"
        log "${RED}❌ Manual intervention required${NC}"
        
        # Show container logs for debugging
        log "📋 Container logs for debugging:"
        sudo docker logs --tail 20 $APP_NAME 2>/dev/null || log "No logs available"
        
        exit 1
    fi
}

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    log "${RED}❌ Docker is not installed or not in PATH${NC}"
    exit 1
fi

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    log "${RED}❌ This script must be run as root${NC}"
    log "Please run: sudo $0"
    exit 1
fi

# Show current system status
log "📊 Current System Status:"
log "⏰ Time: $(date)"
log "💻 Load: $(uptime | awk -F'load average:' '{print $2}' | xargs)"
log "🧠 Memory: $(free -h | grep Mem | awk '{print $3 "/" $2}')"

# Show current deployment info
if [ -d "/home/ubuntu/nitp-docker-current" ]; then
    log "📁 Current deployment directory exists"
    if [ -f "/home/ubuntu/nitp-docker-current/package.json" ]; then
        app_version=$(grep '"version"' /home/ubuntu/nitp-docker-current/package.json | cut -d'"' -f4 2>/dev/null || echo "unknown")
        log "📦 Current app version: $app_version"
    fi
fi

if [ -d "/home/ubuntu/nitp-docker-backup" ]; then
    log "💾 Backup directory exists"
    if [ -f "/home/ubuntu/nitp-docker-backup/package.json" ]; then
        backup_version=$(grep '"version"' /home/ubuntu/nitp-docker-backup/package.json | cut -d'"' -f4 2>/dev/null || echo "unknown")
        log "📦 Backup app version: $backup_version"
    fi
fi

# Confirm rollback
log "${YELLOW}⚠️ WARNING: This will rollback to the previous version${NC}"
log "Current application will be stopped and replaced with backup version"
echo ""
read -p "Are you sure you want to proceed with rollback? (y/N): " confirm

if [[ $confirm != [yY] ]]; then
    log "Rollback cancelled by user"
    exit 0
fi

# Execute rollback
rollback

log "📊 Rollback Summary:"
log "⏰ Time: $(date)"
log "🚀 Status: SUCCESS"
log "🔍 Node.js: $(sudo docker exec $APP_NAME node --version 2>/dev/null || echo 'N/A')"
log "🌐 Application URL: http://localhost:$LIVE_PORT"
log "🏥 Health check: http://localhost:$LIVE_PORT$HEALTH_ENDPOINT"
log "📊 Monitor: /home/ubuntu/scripts/monitor.sh"
log ""
log "${GREEN}🎉 Rollback completed! Your website is now running the previous version.${NC}"
