# 🚀 Quick Setup Guide - NITP Website Zero Downtime Deployment

Follow these steps in order to set up your zero-downtime Docker deployment.

## 📋 Checklist

- [ ] **Server Setup**: Run server setup script
- [ ] **SSH Access**: Configure SSH key access
- [ ] **GitHub Secrets**: Add required secrets
- [ ] **Test Locally**: Verify Docker build works
- [ ] **Deploy**: Push to main branch
- [ ] **Monitor**: Set up monitoring

---

## 🖥️ Step 1: Server Setup

SSH into your server and run:

```bash
# Download and run server setup
wget https://raw.githubusercontent.com/ashishkr375/nitp-main-website-new/main/server-setup.sh
sudo bash server-setup.sh
```

Or copy the `server-setup.sh` file to your server and run it.

---

## 🔑 Step 2: SSH Key Setup

### On your local machine:

```bash
# If you don't have SSH keys, generate them:
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Copy public key to your server:
ssh-copy-id root@YOUR_SERVER_IP

# Test SSH connection:
ssh root@YOUR_SERVER_IP
```

### Get your private key for GitHub:

```bash
# Copy this entire output to GitHub secret SERVER_SSH_KEY:
cat ~/.ssh/id_rsa
```

---

## 🔐 Step 3: Add GitHub Secrets

Go to: `https://github.com/ashishkr375/nitp-main-website-new/settings/secrets/actions`

Click **"New repository secret"** and add:

| Secret Name | Value |
|-------------|-------|
| `SERVER_HOST` | Your server IP (e.g., `123.45.67.89`) |
| `SERVER_SSH_KEY` | Your SSH private key (from `cat ~/.ssh/id_rsa`) |

---

## 🧪 Step 4: Test Docker Build Locally

```bash
# In your project directory:
chmod +x scripts/test-docker-local.sh
./scripts/test-docker-local.sh
```

This will:
- Build your Docker image with Node.js 20
- Run it on port 3003
- Test the health endpoint
- Verify Node.js version
- Show you the results

---

## 🚀 Step 5: Deploy

```bash
# Commit your changes and push:
git add .
git commit -m "Add zero-downtime Docker deployment"
git push origin main
```

Watch the deployment in GitHub Actions:
`https://github.com/ashishkr375/nitp-main-website-new/actions`

---

## 📊 Step 6: Monitor Your Deployment

### On your server, create monitoring dashboard:

```bash
# Copy scripts to your server and run:
chmod +x /root/scripts/monitor.sh
/root/scripts/monitor.sh
```

### Quick health check:

```bash
curl http://YOUR_SERVER_IP:3002/api/health
# or
curl http://your-domain.com/api/health
```

---

## 🔧 Step 7: Configure NGINX (if needed)

If you're using NGINX, update your config:

```nginx
# /etc/nginx/sites-available/your-domain
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3002;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Then:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🚨 Emergency Commands

### If something goes wrong:

```bash
# Manual rollback:
cd /root/nitp-docker-current
sudo ./scripts/rollback.sh

# Check status:
sudo /root/scripts/monitor.sh

# View logs:
docker logs nitp-main-website

# Restart container:
docker restart nitp-main-website

# Docker cleanup:
sudo ./scripts/docker-cleanup.sh
```

---

## ✅ Success Indicators

You'll know everything is working when:

1. ✅ GitHub Actions shows green checkmark
2. ✅ `curl http://your-domain/api/health` returns `{"status":"ok"}`
3. ✅ Your website loads at your domain
4. ✅ Monitor script shows all green checkmarks

---

## 🆘 Troubleshooting

### Common Issues:

**❌ GitHub Actions fails with "Permission denied"**
- Check SSH key is correct in GitHub secrets
- Test: `ssh root@YOUR_SERVER_IP` should work without password

**❌ Health check fails**
- Check container is running: `docker ps`
- Check logs: `docker logs nitp-main-website`
- Check port: `curl http://localhost:3002/api/health`

**❌ Website not accessible**
- Check NGINX config points to port 3002
- Check firewall allows port 80/443
- Check DNS points to your server

**❌ Docker build fails**
- Test locally first: `./scripts/test-docker-local.sh`
- Check Dockerfile syntax
- Verify Node.js 20 compatibility
- Check package.json dependencies

---

## 📞 Need Help?

1. **Check monitor dashboard**: `sudo /root/scripts/monitor.sh`
2. **View deployment logs**: GitHub Actions tab
3. **Check container logs**: `docker logs nitp-main-website`
4. **Test health endpoint**: `curl http://localhost:3002/api/health`
5. **Docker cleanup**: `sudo /root/scripts/docker-cleanup.sh`

---

## 🎉 You're Done!

Your website now has:
- ✅ **Zero downtime deployments**
- ✅ **Automatic rollbacks on failure**
- ✅ **Health monitoring**
- ✅ **Docker containerization with Node.js 20**
- ✅ **Production-ready CI/CD**
- ✅ **Complete monitoring and cleanup tools**

Every push to `main` will automatically deploy your changes with zero downtime! 🚀
