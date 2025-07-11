# 🚀 NITP Website - Zero Downtime Docker Deployment

This repository contains the complete CI/CD setup for deploying the NITP website with **zero downtime** using Docker.

## 🎯 Features

- ✅ **Zero Downtime Deployment** - Website never goes offline during updates
- ✅ **Automatic Rollback** - If health checks fail, automatically reverts to previous version
- ✅ **Health Monitoring** - Built-in health endpoint for monitoring
- ✅ **Docker Containerization** - Consistent environment across all deployments
- ✅ **GitHub Actions CI/CD** - Automated deployment on every push to main
- ✅ **Manual Rollback** - Emergency rollback script available

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│ GitHub Actions   │───▶│   Your Server   │
│                 │    │                  │    │                 │
│ Push to main    │    │ Build & Deploy   │    │ Docker Runtime  │
│                 │    │ Health Check     │    │ Port 3002       │
│                 │    │ Auto Rollback    │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 🔧 Initial Server Setup

### 1. Install Docker on your server

```bash
# For Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to docker group (optional)
sudo usermod -aG docker $USER
```

### 2. Update NGINX configuration

Ensure your NGINX config points to port 3002:

```nginx
# /etc/nginx/sites-available/your-domain
server {
    listen 80;
    server_name your-domain.com;
    
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
    }
    
    # Health check endpoint
    location /api/health {
        proxy_pass http://localhost:3002;
        access_log off;
    }
}
```

## 🔐 GitHub Secrets Setup

Go to **GitHub → Your Repository → Settings → Secrets and Variables → Actions** and add:

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `SERVER_HOST` | Your server IP or domain | `123.45.67.89` or `nitp.ac.in` |
| `SERVER_SSH_KEY` | Private SSH key for root access | Contents of `~/.ssh/id_rsa` |
| `SERVER_PORT` | SSH port (optional, defaults to 22) | `22` |

### Generate SSH Key (if needed)

```bash
# On your local machine
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy public key to server
ssh-copy-id root@your-server-ip

# Copy private key content for GitHub secret
cat ~/.ssh/id_rsa
```

## 🚀 Deployment Process

### Automatic Deployment

1. Push code to `main` branch
2. GitHub Actions automatically:
   - Uploads code to server
   - Builds Docker image
   - Tests on temporary port (3102)
   - Health checks the new version
   - If healthy: Switches to live port (3002)
   - If unhealthy: Automatically rolls back

### Manual Deployment

```bash
# On your server
cd /root/nitp-docker-current
git pull origin main
docker build -t nitp-main-website .
docker stop nitp-main-website || true
docker rm nitp-main-website || true
docker run -d --restart=always -p 3002:3002 --name nitp-main-website nitp-main-website
```

## 🔄 Rollback Procedures

### Automatic Rollback
- Triggered automatically if health checks fail during deployment
- No manual intervention required

### Manual Rollback

```bash
# Method 1: Use the rollback script
cd /root/nitp-docker-current
chmod +x rollback.sh
sudo ./rollback.sh

# Method 2: Manual steps
cd /root/nitp-docker-backup
docker build -t nitp-main-website-rollback .
docker stop nitp-main-website
docker rm nitp-main-website
docker run -d --restart=always -p 3002:3002 --name nitp-main-website nitp-main-website-rollback
```

## 🏥 Health Monitoring

### Health Check Endpoint
```
GET /api/health
```

**Response (Healthy):**
```json
{
  "status": "ok",
  "timestamp": "2025-01-10T10:30:00.000Z",
  "environment": "production",
  "port": "3002"
}
```

### Manual Health Check

```bash
# Check application health
curl http://localhost:3002/api/health

# Check container status
docker ps | grep nitp-main-website

# Check container logs
docker logs nitp-main-website
```

## 📁 Server Directory Structure

```
/root/
├── nitp-docker-current/     ← 🟢 Active application source
├── nitp-docker-backup/      ← 🟡 Previous working version  
├── nitp-main-website-new/   ← 📦 Temporary upload from GitHub
└── rollback.sh              ← 🔄 Manual rollback script
```

## 🐳 Docker Commands Reference

```bash
# View running containers
docker ps

# View all containers
docker ps -a

# Check container logs
docker logs nitp-main-website

# Enter container shell
docker exec -it nitp-main-website sh

# Stop container
docker stop nitp-main-website

# Remove container
docker rm nitp-main-website

# View images
docker images

# Remove unused images
docker image prune -f

# Build image
docker build -t nitp-main-website .

# Run container
docker run -d --restart=always -p 3002:3002 --name nitp-main-website nitp-main-website
```

## 🚨 Troubleshooting

### Common Issues

**1. Deployment fails with "Health check failed"**
```bash
# Check application logs
docker logs nitp-main-website

# Check if port is accessible
curl http://localhost:3002/api/health

# Check if container is running
docker ps | grep nitp
```

**2. Container won't start**
```bash
# Check Docker build logs
docker build -t nitp-main-website .

# Check if port 3002 is already in use
sudo netstat -tulpn | grep 3002

# Kill process using port 3002
sudo kill $(sudo lsof -t -i:3002)
```

**3. GitHub Actions deployment fails**
```bash
# Check SSH connection
ssh root@your-server-ip

# Check Docker is installed
docker --version

# Check available disk space
df -h
```

### Emergency Recovery

**If everything fails:**

```bash
# Stop all containers
docker stop $(docker ps -q)

# Remove all containers
docker rm $(docker ps -aq)

# Start fresh from backup
cd /root/nitp-docker-backup
docker build -t nitp-main-website .
docker run -d --restart=always -p 3002:3002 --name nitp-main-website nitp-main-website
```

## 📊 Monitoring & Logs

### View Deployment Logs
- GitHub Actions: Go to **Actions** tab in your repository
- Server logs: `docker logs nitp-main-website`
- System logs: `journalctl -u docker`

### Set Up Monitoring (Optional)

Add external monitoring:
- UptimeRobot: Monitor `http://your-domain/api/health`
- StatusCake: HTTP monitoring
- Custom monitoring: Ping health endpoint every minute

## 🔧 Customization

### Environment Variables

Add to `docker run` command:
```bash
docker run -d --restart=always \
  -p 3002:3002 \
  -e NODE_ENV=production \
  -e CUSTOM_VAR=value \
  --name nitp-main-website \
  nitp-main-website
```

### Custom Health Checks

Edit `src/app/api/health/route.js`:
```javascript
export async function GET() {
  try {
    // Add custom checks here
    // - Database connectivity
    // - External API checks
    // - File system checks
    
    return Response.json({ status: 'ok' });
  } catch (error) {
    return Response.json({ status: 'error' }, { status: 500 });
  }
}
```

## 📝 Development

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Test health endpoint
curl http://localhost:3000/api/health
```

### Testing Docker Build Locally

```bash
# Build image
docker build -t nitp-test .

# Run container
docker run -d -p 3003:3002 --name nitp-test nitp-test

# Test health
curl http://localhost:3003/api/health

# Clean up
docker stop nitp-test && docker rm nitp-test
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

## 📞 Support

- **GitHub Issues**: For bugs and feature requests
- **Documentation**: This README and code comments
- **Emergency**: Use manual rollback procedures

---

## 🎉 You're All Set!

Your NITP website now has:
- ✅ Zero downtime deployments
- ✅ Automatic rollbacks
- ✅ Health monitoring
- ✅ Production-ready Docker setup

Push to `main` branch and watch the magic happen! 🚀
