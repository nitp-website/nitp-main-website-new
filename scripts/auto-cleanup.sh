#!/bin/bash

# Automated Docker Cleanup Scheduler for NITP Website
# Runs automatic cleanup based on system resources

echo "🧹 NITP Website Automated Cleanup Scheduler"
echo "==========================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
LOG_FILE="/var/log/nitp-cleanup.log"
DISK_THRESHOLD=75  # Cleanup when disk usage > 75%
DOCKER_THRESHOLD=10  # Cleanup when Docker uses > 10GB

# Function to log with timestamp
log() {
    local message="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
    echo -e "${BLUE}$message${NC}"
    echo "$message" >> "$LOG_FILE"
}

# Function to check disk usage
check_disk_usage() {
    local usage=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
    echo $usage
}

# Function to check Docker space usage
check_docker_usage() {
    local docker_size=$(sudo docker system df --format "table {{.Size}}" 2>/dev/null | tail -n +2 | head -1 | awk '{print $1}')
    if [[ $docker_size =~ ([0-9.]+)GB ]]; then
        echo ${BASH_REMATCH[1]} | cut -d. -f1
    elif [[ $docker_size =~ ([0-9.]+)MB ]]; then
        echo "0"
    else
        echo "0"
    fi
}

# Function to perform safe cleanup
safe_cleanup() {
    log "🧹 Performing safe cleanup..."
    
    # Remove stopped containers
    stopped_containers=$(sudo docker ps -a -q --filter "status=exited" 2>/dev/null)
    if [ -n "$stopped_containers" ]; then
        echo "$stopped_containers" | xargs sudo docker rm 2>/dev/null || true
        log "✅ Removed stopped containers"
    fi
    
    # Remove dangling images
    sudo docker image prune -f 2>/dev/null || true
    log "✅ Removed dangling images"
    
    # Remove unused volumes (but keep named volumes)
    sudo docker volume prune -f 2>/dev/null || true
    log "✅ Removed unused volumes"
    
    # Remove unused networks
    sudo docker network prune -f 2>/dev/null || true
    log "✅ Removed unused networks"
}

# Function to perform aggressive cleanup
aggressive_cleanup() {
    log "🧹 Performing aggressive cleanup..."
    
    # Safe cleanup first
    safe_cleanup
    
    # Remove old NITP images (keep last 2)
    old_nitp_images=$(sudo docker images --filter "reference=*nitp*" --format "{{.ID}} {{.CreatedAt}}" | \
                     sort -k2 -r | tail -n +3 | awk '{print $1}')
    if [ -n "$old_nitp_images" ]; then
        echo "$old_nitp_images" | xargs sudo docker rmi 2>/dev/null || true
        log "✅ Removed old NITP images"
    fi
    
    # Remove unused images (keep Node.js 20)
    sudo docker images --filter "dangling=false" --format "{{.ID}} {{.Repository}} {{.Tag}}" | \
    grep -v -E "(nitp|node.*20)" | awk '{print $1}' | head -5 | \
    xargs -r sudo docker rmi 2>/dev/null || true
    log "✅ Removed unused images"
    
    # System-wide cleanup
    sudo docker system prune -a -f 2>/dev/null || true
    log "✅ Performed system-wide cleanup"
}

# Function to cleanup logs
cleanup_logs() {
    # Rotate application logs if they exist
    if [ -f "/var/log/nitp-health.log" ] && [ $(wc -l < "/var/log/nitp-health.log") -gt 5000 ]; then
        tail -2000 "/var/log/nitp-health.log" > "/var/log/nitp-health.log.tmp"
        mv "/var/log/nitp-health.log.tmp" "/var/log/nitp-health.log"
        log "✅ Rotated health logs"
    fi
    
    # Clean up Docker logs for NITP containers
    if sudo docker ps | grep -q "nitp-main-website"; then
        sudo docker exec nitp-main-website sh -c 'echo "" > /proc/1/fd/1' 2>/dev/null || true
        log "✅ Cleaned container logs"
    fi
}

# Main cleanup logic
main() {
    log "🚀 Starting automated cleanup check"
    
    # Check system resources
    disk_usage=$(check_disk_usage)
    docker_usage=$(check_docker_usage)
    
    log "📊 System Status:"
    log "  Disk usage: ${disk_usage}%"
    log "  Docker usage: ${docker_usage}GB"
    
    # Determine cleanup level needed
    if [ "$disk_usage" -gt 90 ] || [ "$docker_usage" -gt 20 ]; then
        log "⚠️ Critical resource usage detected - performing aggressive cleanup"
        aggressive_cleanup
        cleanup_logs
        
    elif [ "$disk_usage" -gt "$DISK_THRESHOLD" ] || [ "$docker_usage" -gt "$DOCKER_THRESHOLD" ]; then
        log "⚠️ High resource usage detected - performing safe cleanup"
        safe_cleanup
        
    else
        log "✅ Resource usage normal - no cleanup needed"
        
        # Still do minimal maintenance
        sudo docker system prune -f 2>/dev/null || true
    fi
    
    # Show final status
    final_disk=$(check_disk_usage)
    final_docker=$(check_docker_usage)
    
    log "📊 After Cleanup:"
    log "  Disk usage: ${final_disk}% (was ${disk_usage}%)"
    log "  Docker usage: ${final_docker}GB (was ${docker_usage}GB)"
    
    # Check if main application is still healthy
    if curl -f -s --max-time 5 "http://localhost:3002/api/health" > /dev/null 2>&1; then
        log "✅ Application health verified after cleanup"
    else
        log "⚠️ Application health check failed after cleanup"
    fi
    
    log "🎉 Cleanup check completed"
}

# Ensure log directory exists
mkdir -p $(dirname "$LOG_FILE")

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ This script must be run as root or with sudo"
    echo "Please run: sudo $0"
    exit 1
fi

# Run cleanup
main
