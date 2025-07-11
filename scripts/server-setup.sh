#!/bin/bash

# Server Setup Script for NITP Website Docker Deployment
# Run this script ON YOUR SERVER as root

echo "🚀 NITP Website Server Setup (Node.js 20 Ready)"
echo "================================================"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ This script must be run as root"
    echo "Please run: sudo $0"
    exit 1
fi

echo "✅ Running as root"
echo ""

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Docker if not installed
if ! command -v docker &> /dev/null; then
    echo "🐳 Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl start docker
    systemctl enable docker
    echo "✅ Docker installed successfully!"
else
    echo "✅ Docker already installed: $(docker --version)"
fi

# Install curl if not installed
if ! command -v curl &> /dev/null; then
    echo "📡 Installing curl..."
    apt install -y curl
fi

# Install jq for JSON parsing (optional but useful)
if ! command -v jq &> /dev/null; then
    echo "🔧 Installing jq for JSON parsing..."
    apt install -y jq
fi

# Install htop for monitoring (optional)
if ! command -v htop &> /dev/null; then
    echo "📊 Installing htop for system monitoring..."
    apt install -y htop
fi

# Create directories
echo "📁 Creating deployment directories..."
mkdir -p /root/nitp-docker-current
mkdir -p /root/nitp-docker-backup
mkdir -p /root/nitp-main-website-new

# Check NGINX configuration
echo "🌐 Checking NGINX configuration..."
if [ -f /etc/nginx/sites-available/default ] || [ -f /etc/nginx/nginx.conf ]; then
    echo "✅ NGINX found"
    echo "⚠️  Make sure your NGINX config points to port 3002:"
    echo "   proxy_pass http://localhost:3002;"
    echo ""
else
    echo "⚠️  NGINX not found. You may need to install and configure it."
    echo "   Install: apt install nginx"
    echo "   Configure proxy to port 3002"
    echo ""
fi

# Create a comprehensive NGINX config template
echo "📝 Creating NGINX config template..."
cat > /root/nginx-nitp-template.conf << 'EOF'
# NGINX Configuration Template for NITP Website (Node.js 20)
# Copy this to /etc/nginx/sites-available/your-domain

server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    
    # Main application proxy
    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeout settings for Node.js 20
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffer settings
        proxy_buffering on;
        proxy_buffer_size 128k;
        proxy_buffers 4 256k;
        proxy_busy_buffers_size 256k;
    }
    
    # Health check endpoint (exclude from logs)
    location /api/health {
        proxy_pass http://localhost:3002;
        access_log off;
    }
    
    # Static files optimization
    location /_next/static/ {
        proxy_pass http://localhost:3002;
        proxy_cache_valid 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Favicon
    location = /favicon.ico {
        proxy_pass http://localhost:3002;
        access_log off;
    }
}

# Optional: SSL/HTTPS configuration (uncomment when ready)
# server {
#     listen 443 ssl http2;
#     server_name your-domain.com www.your-domain.com;
#     
#     ssl_certificate /path/to/your/certificate.crt;
#     ssl_certificate_key /path/to/your/private.key;
#     
#     # Include the same location blocks as above
# }
EOF

echo "✅ NGINX template created at /root/nginx-nitp-template.conf"
echo ""

# Create health check script
echo "🏥 Creating health check script..."
cat > /root/health-check.sh << 'EOF'
#!/bin/bash
# NITP Website Health Check Script

echo "🏥 NITP Website Health Check (Node.js 20)"
echo "=========================================="
echo "⏰ $(date)"
echo ""

# Test health endpoint
if curl -f -s http://localhost:3002/api/health > /dev/null 2>&1; then
    echo "✅ Website is healthy!"
    echo "📊 Health Response:"
    response=$(curl -s http://localhost:3002/api/health)
    echo "$response" | jq . 2>/dev/null || echo "$response"
    echo ""
    
    # Check Node.js version in container
    echo "🔍 Node.js version in container:"
    docker exec nitp-main-website node --version 2>/dev/null || echo "Could not check Node.js version"
    echo ""
    
    # Container uptime
    echo "📊 Container Info:"
    docker ps --filter "name=nitp-main-website" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
else
    echo "❌ Website health check failed!"
    echo ""
    echo "🔍 Checking container status..."
    docker ps | grep nitp-main-website || echo "❌ No NITP container running"
    echo ""
    echo "📋 Recent container logs:"
    docker logs --tail 20 nitp-main-website 2>/dev/null || echo "No logs available"
    echo ""
    echo "🌐 Port 3002 status:"
    netstat -tuln | grep :3002 || echo "Port 3002 not listening"
fi

echo ""
echo "🔧 Quick Commands:"
echo "  Restart: docker restart nitp-main-website"
echo "  Logs: docker logs -f nitp-main-website" 
echo "  Monitor: htop"
echo "  Rollback: cd /root/nitp-docker-current && ./rollback.sh"
EOF

chmod +x /root/health-check.sh
echo "✅ Health check script created at /root/health-check.sh"
echo ""

# Test Docker with Node.js 20
echo "🧪 Testing Docker installation with Node.js 20..."
if docker run --rm node:20-alpine node --version > /dev/null 2>&1; then
    echo "✅ Docker test successful with Node.js 20!"
    echo "📊 Node.js version: $(docker run --rm node:20-alpine node --version)"
else
    echo "❌ Docker test failed"
    exit 1
fi

echo ""
echo "🎉 Server setup completed successfully!"
echo ""
echo "📝 Summary:"
echo "✅ Docker installed and tested with Node.js 20"
echo "✅ Directories created for deployment"
echo "✅ Health check script available"
echo "✅ NGINX template ready"
echo ""
echo "📋 Next Steps:"
echo "1. Configure SSH key access for GitHub Actions"
echo "2. Set up NGINX configuration (template at /root/nginx-nitp-template.conf)"
echo "3. Add GitHub secrets: SERVER_HOST, SERVER_SSH_KEY"
echo "4. Push to main branch to trigger deployment"
echo ""
echo "🔧 Useful commands:"
echo "  Health check: /root/health-check.sh"
echo "  View logs: docker logs nitp-main-website"
echo "  Container status: docker ps"
echo "  System monitor: htop"
echo "  Rollback: cd /root/nitp-docker-current && ./rollback.sh"
echo ""
echo "🌐 Your application will be available at:"
echo "  Direct: http://your-server-ip:3002"
echo "  Via NGINX: http://your-domain.com (after NGINX setup)"
echo "  Health: http://your-domain.com/api/health"
