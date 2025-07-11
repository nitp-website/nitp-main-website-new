#!/bin/bash

# Docker Cleanup Utility for NITP Website
# Safely cleans up Docker resources while preserving important images

echo "🧹 NITP Website Docker Cleanup Utility"
echo "======================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to log with timestamp
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    log "${RED}❌ This script should be run as root${NC}"
    log "Please run: sudo $0"
    exit 1
fi

log "📊 Current Docker Usage:"
docker system df 2>/dev/null || log "Could not get Docker disk usage"
echo ""

log "🔍 NITP Containers:"
docker ps -a --filter "name=nitp" --format "table {{.Names}}\t{{.Status}}\t{{.Image}}\t{{.Size}}" || log "No NITP containers found"
echo ""

log "📦 NITP Images:"
docker images --filter "reference=*nitp*" --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}" || log "No NITP images found"
echo ""

# Ask what to clean
echo "🗂️ What would you like to clean?"
echo "1. Remove stopped containers only"
echo "2. Remove unused images (keep current and backup)"
echo "3. Remove all unused Docker resources (safe cleanup)"
echo "4. Full cleanup (removes everything except running containers)"
echo "5. Show detailed usage and exit"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        log "🧹 Removing stopped containers..."
        stopped_containers=$(docker ps -a -q --filter "status=exited")
        if [ -n "$stopped_containers" ]; then
            docker rm $stopped_containers
            log "${GREEN}✅ Stopped containers removed${NC}"
        else
            log "${YELLOW}⚠️ No stopped containers found${NC}"
        fi
        ;;
    
    2)
        log "🧹 Removing unused images (keeping NITP images)..."
        # Remove dangling images
        docker image prune -f
        
        # Remove unused images but keep Node.js 20 and recent NITP images
        log "Keeping Node.js 20 and recent NITP images..."
        docker images --filter "dangling=false" --format "{{.ID}} {{.Repository}} {{.Tag}} {{.CreatedAt}}" | \
        grep -v -E "(nitp|node.*20)" | \
        awk '{if (NF>=4) print $1}' | \
        head -10 | \
        xargs -r docker rmi 2>/dev/null || log "No additional images to remove"
        
        log "${GREEN}✅ Unused images cleaned (NITP images preserved)${NC}"
        ;;
    
    3)
        log "🧹 Safe cleanup of all unused Docker resources..."
        docker system prune -f
        log "${GREEN}✅ Safe cleanup completed${NC}"
        ;;
    
    4)
        log "${YELLOW}⚠️ WARNING: Full cleanup will remove ALL unused images and containers${NC}"
        read -p "Are you sure? This cannot be undone (y/N): " confirm
        if [[ $confirm == [yY] ]]; then
            log "🧹 Performing full cleanup..."
            
            # Stop non-essential containers (keep main app running)
            docker ps --filter "name=nitp-temp" -q | xargs -r docker stop
            docker ps --filter "name=nitp-test" -q | xargs -r docker stop
            
            # Remove stopped containers
            docker container prune -f
            
            # Remove unused images (keep running container images)
            docker image prune -a -f
            
            # Remove unused volumes
            docker volume prune -f
            
            # Remove unused networks
            docker network prune -f
            
            log "${GREEN}✅ Full cleanup completed${NC}"
        else
            log "Full cleanup cancelled"
        fi
        ;;
    
    5)
        log "📊 Detailed Docker Usage:"
        echo ""
        echo "🔍 All Containers:"
        docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Image}}\t{{.Ports}}\t{{.Size}}"
        echo ""
        echo "📦 All Images:"
        docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"
        echo ""
        echo "💿 Volume Usage:"
        docker volume ls
        echo ""
        echo "🌐 Network Usage:"
        docker network ls
        echo ""
        echo "📊 System Usage:"
        docker system df
        echo ""
        echo "🔧 To run cleanup, execute this script again with options 1-4"
        exit 0
        ;;
    
    *)
        log "${RED}❌ Invalid choice${NC}"
        exit 1
        ;;
esac

echo ""
log "📊 Docker Usage After Cleanup:"
docker system df 2>/dev/null || log "Could not get Docker disk usage"

echo ""
log "🔍 Remaining NITP Resources:"
echo "Containers:"
docker ps -a --filter "name=nitp" --format "  {{.Names}}: {{.Status}}" || echo "  None"
echo "Images:"
docker images --filter "reference=*nitp*" --format "  {{.Repository}}:{{.Tag}} ({{.Size}})" || echo "  None"

echo ""
log "${GREEN}🎉 Cleanup completed!${NC}"
log "💡 Tips:"
log "  - Run this script regularly to maintain disk space"
log "  - Option 3 (safe cleanup) is recommended for regular maintenance"
log "  - Always ensure main application is running before full cleanup"
log "  - Monitor disk usage with: docker system df"
