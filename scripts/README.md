# 🛠️ NITP Website Deployment Scripts

This directory contains all the utility scripts for managing your NITP website deployment with Node.js 20.

## 📂 Available Scripts

### 🔐 SSH Setup
**`setup-ssh.sh`** - Generate and configure SSH keys for GitHub Actions
- Generates SSH keys if they don't exist
- Shows public key for server setup
- Shows private key for GitHub secrets
- **Usage**: Run on your local machine

### 🧪 Local Testing
**`test-docker-local.sh`** - Test Docker build locally before deployment
- Builds Docker image with Node.js 20
- Runs container on port 3003
- Tests health endpoint
- Verifies Node.js version
- **Usage**: `./scripts/test-docker-local.sh`

### 🖥️ Server Setup
**`server-setup.sh`** - Complete server setup and configuration
- Installs Docker
- Sets up deployment directories
- Creates NGINX config template
- Creates health check script
- Tests Node.js 20 compatibility
- **Usage**: Run on your server as root

### 📊 Monitoring
**`monitor.sh`** - Comprehensive monitoring dashboard
- Shows Docker status
- Displays container health
- Monitors Node.js version
- Shows system resources
- Network status check
- **Usage**: `/root/scripts/monitor.sh`

### 🔄 Emergency Rollback
**`rollback.sh`** - Manual rollback to previous version
- Safely rollback to backup version
- Health checks and validation
- Node.js version verification
- Detailed logging
- **Usage**: `sudo ./scripts/rollback.sh`

### 🧹 Docker Cleanup
**`docker-cleanup.sh`** - Docker resource management
- Remove stopped containers
- Clean unused images
- Safe system cleanup
- Full cleanup option
- Preserve important images
- **Usage**: `sudo ./scripts/docker-cleanup.sh`

### 🤖 Automated Monitoring
**`auto-monitor.sh`** - Continuous health monitoring
- 24/7 health monitoring
- Automatic recovery attempts
- Alert system integration
- Node.js version checks
- **Usage**: Runs as systemd service

### 🧹 Automated Cleanup
**`auto-cleanup.sh`** - Scheduled resource cleanup
- Disk usage monitoring
- Docker space optimization
- Log rotation
- Intelligent cleanup levels
- **Usage**: Runs via timer every 6 hours

### ⚙️ Automation Setup
**`setup-automation.sh`** - Complete automation setup
- Creates systemd services
- Sets up monitoring timers
- Configures log rotation
- Creates cron jobs
- **Usage**: `sudo ./scripts/setup-automation.sh`

---

## 🚀 Quick Commands

### Local Development
```bash
# Test your Docker build locally
chmod +x scripts/test-docker-local.sh
./scripts/test-docker-local.sh
```

### Server Management
```bash
# Check server health
sudo /root/scripts/monitor.sh

# Emergency rollback
sudo /root/scripts/rollback.sh

# Clean up Docker resources
sudo /root/scripts/docker-cleanup.sh
```

### SSH Setup
```bash
# Generate SSH keys for deployment
chmod +x scripts/setup-ssh.sh
./scripts/setup-ssh.sh
```

---

## 📋 Prerequisites

- **Docker**: Required for all container operations
- **curl**: For health checks and API testing
- **jq**: Optional, for JSON parsing (recommended)
- **Node.js 20**: Verified in Docker containers

---

## 🔧 Script Features

### ✅ All Scripts Include:
- **Colored output** for better readability
- **Error handling** with proper exit codes
- **Logging with timestamps**
- **Safety checks** before destructive operations
- **Node.js 20 compatibility** verification

### 🛡️ Safety Features:
- **Confirmation prompts** for destructive actions
- **Backup verification** before rollbacks
- **Health checks** before switching versions
- **Container existence checks**
- **Permission validation**

---

## 📞 Need Help?

1. **Each script has built-in help** - just run it to see options
2. **Check the main documentation** - `QUICK-SETUP.md` and `DEPLOYMENT.md`
3. **Monitor with the dashboard** - `./scripts/monitor.sh` shows everything
4. **Test locally first** - `./scripts/test-docker-local.sh` before deploying

---

## 🎯 Deployment Flow

```
Local Test → Server Setup → SSH Config → Deploy → Monitor
     ↓            ↓           ↓          ↓        ↓
test-docker → server-setup → setup-ssh → GitHub → monitor
```

**Emergency Path**: `rollback.sh` + `monitor.sh` + `docker-cleanup.sh`

---

Your production-grade deployment toolkit is ready! 🚀
