#!/bin/bash

# Automated Health Monitor for NITP Website
# This script runs continuously and alerts on issues

echo "🏥 NITP Website Automated Health Monitor"
echo "========================================"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
HEALTH_URL="http://localhost:3002/api/health"
LOG_FILE="/var/log/nitp-health.log"
ALERT_FILE="/tmp/nitp-alerts.log"
MAX_FAILURES=3
FAILURE_COUNT=0

# Function to log with timestamp
log() {
    local message="[$(date '+%Y-%m-%d %H:%M:%S')] $1"
    echo -e "${BLUE}$message${NC}"
    echo "$message" >> "$LOG_FILE"
}

# Function to send alert (you can customize this)
send_alert() {
    local message="$1"
    local severity="$2"
    
    log "🚨 ALERT [$severity]: $message"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ALERT [$severity]: $message" >> "$ALERT_FILE"
    
    # Optional: Send to external monitoring (uncomment and configure)
    # curl -X POST "YOUR_WEBHOOK_URL" -H "Content-Type: application/json" \
    #      -d "{\"text\":\"🚨 NITP Website Alert: $message\"}" 2>/dev/null || true
    
    # Optional: Email alert (uncomment and configure)
    # echo "$message" | mail -s "NITP Website Alert" admin@your-domain.com 2>/dev/null || true
}

# Function to check application health
check_health() {
    local response
    local http_code
    
    # Make health check request
    response=$(curl -s -w "%{http_code}" --max-time 10 "$HEALTH_URL" 2>/dev/null)
    http_code="${response: -3}"
    response_body="${response%???}"
    
    if [ "$http_code" = "200" ]; then
        # Parse response for additional checks
        if echo "$response_body" | grep -q '"status":"ok"'; then
            # Check Node.js version if possible
            node_version=$(echo "$response_body" | grep -o '"port":"[^"]*"' | cut -d'"' -f4)
            log "✅ Health check passed (Port: $node_version)"
            
            # Reset failure count on success
            FAILURE_COUNT=0
            return 0
        else
            log "❌ Health endpoint returned invalid response: $response_body"
            return 1
        fi
    else
        log "❌ Health check failed (HTTP: $http_code)"
        return 1
    fi
}

# Function to check container status
check_container() {
    if sudo docker ps | grep -q "nitp-main-website"; then
        local container_status=$(sudo docker ps --filter "name=nitp-main-website" --format "{{.Status}}")
        log "📦 Container status: $container_status"
        
        # Check if container has been running for a reasonable time
        local uptime=$(sudo docker ps --filter "name=nitp-main-website" --format "{{.Status}}" | grep -o "[0-9]* minutes\|[0-9]* hours\|[0-9]* days")
        if [ -n "$uptime" ]; then
            log "⏱️ Container uptime: $uptime"
        fi
        
        return 0
    else
        log "❌ Main container not running"
        return 1
    fi
}

# Function to perform automatic recovery
auto_recovery() {
    log "🔄 Attempting automatic recovery..."
    
    # Try to restart the container first
    if sudo docker ps -a | grep -q "nitp-main-website"; then
        log "🔄 Restarting existing container..."
        sudo docker restart nitp-main-website
        sleep 10
        
        if check_health; then
            log "✅ Recovery successful via container restart"
            send_alert "Recovery successful via container restart" "INFO"
            return 0
        fi
    fi
    
    # If restart fails, try rollback
    log "🔄 Container restart failed, attempting rollback..."
    if [ -f "/home/ubuntu/scripts/rollback.sh" ]; then
        cd /home/ubuntu/nitp-docker-current
        sudo /home/ubuntu/scripts/rollback.sh
        sleep 15
        
        if check_health; then
            log "✅ Recovery successful via rollback"
            send_alert "Recovery successful via automatic rollback" "WARNING"
            return 0
        fi
    fi
    
    log "❌ Automatic recovery failed"
    send_alert "Automatic recovery failed - manual intervention required" "CRITICAL"
    return 1
}

# Function to cleanup if needed
auto_cleanup() {
    # Check disk usage
    disk_usage=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
    
    if [ "$disk_usage" -gt 80 ]; then
        log "⚠️ Disk usage high ($disk_usage%), performing cleanup..."
        
        # Run safe Docker cleanup
        sudo docker system prune -f 2>/dev/null || true
        
        # Remove old log entries (keep last 1000 lines)
        if [ -f "$LOG_FILE" ]; then
            tail -1000 "$LOG_FILE" > "${LOG_FILE}.tmp" && mv "${LOG_FILE}.tmp" "$LOG_FILE"
        fi
        
        log "🧹 Cleanup completed"
    fi
}

# Main monitoring loop
main() {
    log "🚀 Starting NITP Website Health Monitor"
    
    while true; do
        # Perform health check
        if check_health && check_container; then
            # Health check passed
            if [ $FAILURE_COUNT -gt 0 ]; then
                log "✅ Service recovered after $FAILURE_COUNT failures"
                send_alert "Service recovered after $FAILURE_COUNT failures" "INFO"
                FAILURE_COUNT=0
            fi
            
            # Perform periodic cleanup
            auto_cleanup
            
        else
            # Health check failed
            FAILURE_COUNT=$((FAILURE_COUNT + 1))
            log "❌ Health check failed (Failure $FAILURE_COUNT/$MAX_FAILURES)"
            
            if [ $FAILURE_COUNT -ge $MAX_FAILURES ]; then
                send_alert "Health check failed $FAILURE_COUNT times consecutively" "CRITICAL"
                
                # Attempt automatic recovery
                if auto_recovery; then
                    FAILURE_COUNT=0
                else
                    # Recovery failed, wait longer before next attempt
                    log "😴 Waiting 5 minutes before next recovery attempt..."
                    sleep 300
                fi
            fi
        fi
        
        # Wait before next check (30 seconds)
        sleep 30
    done
}

# Ensure log directory exists
mkdir -p $(dirname "$LOG_FILE")

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ This script must be run as root or with sudo"
    echo "Please run: sudo $0"
    exit 1
fi

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not in PATH"
    exit 1
fi

# Run main monitoring loop
main
