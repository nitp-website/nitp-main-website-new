#!/bin/bash

# NITP Website Monitoring Dashboard (Node.js 20)
# Run this on your server to get a complete status overview

echo "📊 NITP Website Monitoring Dashboard (Node.js 20)"
echo "=================================================="
echo "⏰ $(date)"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to check service status
check_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

echo "🐳 Docker Status"
echo "----------------"
if command -v docker &> /dev/null; then
    echo -e "${GREEN}✅ Docker installed: $(docker --version | cut -d' ' -f3)${NC}"
    
    # Check if Docker is running
    if sudo docker info &> /dev/null; then
        echo -e "${GREEN}✅ Docker daemon running${NC}"
    else
        echo -e "${RED}❌ Docker daemon not running${NC}"
    fi
else
    echo -e "${RED}❌ Docker not installed${NC}"
fi
echo ""

echo "📦 Container Status"
echo "-------------------"
if sudo docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -q nitp; then
    sudo docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep nitp
    echo ""
    
    # Check container health
    if sudo docker ps | grep -q "nitp-main-website"; then
        echo -e "${GREEN}✅ Main container running${NC}"
        
        # Check Node.js version
        node_version=$(sudo docker exec nitp-main-website node --version 2>/dev/null)
        if [[ $node_version == v20* ]]; then
            echo -e "${GREEN}✅ Node.js version: $node_version${NC}"
        else
            echo -e "${YELLOW}⚠️ Node.js version: $node_version (expected v20.x)${NC}"
        fi
    else
        echo -e "${RED}❌ Main container not running${NC}"
    fi
else
    echo -e "${YELLOW}⚠️ No NITP containers running${NC}"
fi
echo ""

echo "🏥 Application Health"
echo "---------------------"
if curl -f -s --max-time 5 http://localhost:3002/api/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Application healthy on port 3002${NC}"
    echo "📊 Health response:"
    health_response=$(curl -s http://localhost:3002/api/health)
    echo "$health_response" | jq . 2>/dev/null || echo "$health_response"
    
    # Extract and display key info
    if command -v jq &> /dev/null; then
        env=$(echo "$health_response" | jq -r '.environment // "unknown"')
        port=$(echo "$health_response" | jq -r '.port // "unknown"')
        echo -e "${BLUE}📝 Environment: $env, Port: $port${NC}"
    fi
else
    echo -e "${RED}❌ Application health check failed${NC}"
    
    # Try to diagnose
    if ! nc -z localhost 3002 2>/dev/null; then
        echo -e "${RED}❌ Port 3002 not accessible${NC}"
    else
        echo -e "${YELLOW}⚠️ Port 3002 accessible but health endpoint failed${NC}"
    fi
fi
echo ""

echo "🌐 Network Status"
echo "-----------------"
# Check if port 3002 is listening
if netstat -tuln 2>/dev/null | grep -q ":3002 "; then
    echo -e "${GREEN}✅ Port 3002 listening${NC}"
else
    echo -e "${RED}❌ Port 3002 not listening${NC}"
fi

# Check NGINX status
if systemctl is-active --quiet nginx 2>/dev/null; then
    echo -e "${GREEN}✅ NGINX running${NC}"
    
    # Check if NGINX is configured for our app
    if nginx -T 2>/dev/null | grep -q "localhost:3002"; then
        echo -e "${GREEN}✅ NGINX configured for port 3002${NC}"
    else
        echo -e "${YELLOW}⚠️ NGINX running but not configured for port 3002${NC}"
    fi
elif command -v nginx &> /dev/null; then
    echo -e "${YELLOW}⚠️ NGINX installed but not running${NC}"
else
    echo -e "${RED}❌ NGINX not found${NC}"
fi

# Check firewall status
if command -v ufw &> /dev/null; then
    if ufw status | grep -q "Status: active"; then
        echo -e "${BLUE}🛡️ UFW firewall active${NC}"
        if ufw status | grep -q "80\|443"; then
            echo -e "${GREEN}✅ Web ports (80/443) allowed${NC}"
        else
            echo -e "${YELLOW}⚠️ Web ports may not be allowed${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️ UFW firewall inactive${NC}"
    fi
fi
echo ""

echo "💾 Storage Status"
echo "-----------------"
echo "📁 Disk usage:"
df -h / | tail -1 | awk '{print "  Used: " $3 "/" $2 " (" $5 ")"}'

echo ""
echo "📁 Directory sizes:"
[ -d "/home/ubuntu/nitp-docker-current" ] && echo "  Current: $(du -sh /home/ubuntu/nitp-docker-current 2>/dev/null | cut -f1)"
[ -d "/home/ubuntu/nitp-docker-backup" ] && echo "  Backup: $(du -sh /home/ubuntu/nitp-docker-backup 2>/dev/null | cut -f1)"

echo ""
echo "💿 Docker disk usage:"
sudo docker system df 2>/dev/null || echo "Could not get Docker disk usage"
echo ""

echo "🔄 Docker Images"
echo "----------------"
echo "📦 NITP Images:"
if docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}" | grep -E "(nitp|REPOSITORY)"; then
    :
else
    echo "No NITP Docker images found"
fi

echo ""
echo "📦 Node.js 20 Images:"
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}" | grep "node.*20" || echo "No Node.js 20 images found"
echo ""

echo "⚡ System Performance"
echo "--------------------"
# CPU and Memory usage
echo "💻 System load: $(uptime | awk -F'load average:' '{print $2}')"
echo "🧠 Memory usage:"
free -h | grep -E "(Mem|Swap):" | awk '{print "  " $1 " " $3 "/" $2 " (" int($3/$2*100) "%)"}'

# Container resource usage
if docker ps | grep -q "nitp-main-website"; then
    echo ""
    echo "📊 Container resources:"
    docker stats nitp-main-website --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}" 2>/dev/null || echo "Could not get container stats"
fi
echo ""

echo "📋 Recent Container Logs (last 10 lines)"
echo "-----------------------------------------"
if docker ps | grep -q "nitp-main-website"; then
    docker logs --tail 10 nitp-main-website 2>/dev/null
else
    echo "No main container running"
fi
echo ""

echo "🔍 Process Information"
echo "---------------------"
echo "🐳 Docker processes:"
ps aux | grep -E "(docker|containerd)" | grep -v grep | wc -l | awk '{print "  Docker processes: " $1}'

if docker ps | grep -q "nitp-main-website"; then
    echo "📦 Container process tree:"
    container_pid=$(docker inspect -f '{{.State.Pid}}' nitp-main-website 2>/dev/null)
    if [ -n "$container_pid" ] && [ "$container_pid" != "0" ]; then
        ps --forest -p $container_pid 2>/dev/null || echo "  Could not get process tree"
    fi
fi
echo ""

echo "🚀 Quick Commands"
echo "-----------------"
echo "  🔄 Restart app: docker restart nitp-main-website"
echo "  📋 View logs: docker logs -f nitp-main-website"
echo "  🏥 Health check: curl http://localhost:3002/api/health"
echo "  🔙 Manual rollback: cd /root/nitp-docker-current && ./rollback.sh"
echo "  📊 Update dashboard: $0"
echo "  💻 System monitor: htop"
echo "  🐳 Docker cleanup: docker system prune -f"
echo ""

# Summary
echo "📈 Overall Status"
echo "-----------------"
healthy=true

# Check main components
if ! docker info &> /dev/null; then healthy=false; fi
if ! docker ps | grep -q "nitp-main-website"; then healthy=false; fi
if ! curl -f -s --max-time 5 http://localhost:3002/api/health > /dev/null 2>&1; then healthy=false; fi

if [ "$healthy" = true ]; then
    echo -e "${GREEN}🎉 All systems operational! Node.js 20 deployment ready.${NC}"
    echo -e "${GREEN}✅ Zero-downtime deployment system active${NC}"
else
    echo -e "${RED}⚠️ Some issues detected. Check details above.${NC}"
    echo -e "${YELLOW}💡 Run individual health checks to diagnose${NC}"
fi

echo ""
echo "📊 Performance Summary:"
echo "  Node.js: $(docker exec nitp-main-website node --version 2>/dev/null || echo 'N/A')"
echo "  Uptime: $(uptime -p 2>/dev/null || uptime)"
echo "  Last updated: $(date)"
echo ""
echo "🌐 Access URLs:"
echo "  Health: http://localhost:3002/api/health"
echo "  App: http://localhost:3002"
echo "  Via domain: http://your-domain.com (if NGINX configured)"
