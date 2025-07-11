# 🚀 NITP Website Automation Guide

## 📊 What Happens Automatically vs Manually

### ✅ AUTOMATIC (When you push to GitHub)
```
You push code to GitHub
         ↓
GitHub Actions triggers
         ↓
Code uploaded to server
         ↓
Docker builds new image
         ↓
Health check on temp port
         ↓
If healthy: Switch to live
         ↓
Clean up old containers
         ↓
✅ DONE! Website updated
```

### 🔧 ONE-TIME SETUP (Run once on server)
```bash
# You need to run this ONCE on your server
sudo /root/scripts/setup-automation.sh
```

---

## 📋 Script Purpose Breakdown

### 🎯 **Scripts You Actually Need to Care About:**

#### 1. **GitHub Actions** (`.github/workflows/deploy.yml`)
- **What it does:** Automatically deploys when you push code
- **When it runs:** Every time you push to GitHub
- **Your action:** Just push code - it handles everything!

#### 2. **setup-automation.sh** 
- **What it does:** Sets up 24/7 monitoring and cleanup
- **When to run:** ONCE on your server after first deployment
- **Your action:** `sudo /root/scripts/setup-automation.sh`

---

## 🔄 Complete Automation Flow

### Phase 1: Deployment (Automatic)
```
Push to GitHub → Auto Deploy → Website Updated
```

### Phase 2: Monitoring (After setup-automation.sh)
```
Monitor every 30 seconds → If website down → Auto restart
Monitor every 6 hours → Clean up old Docker images
Monitor disk space → Alert if running low
```

---

## 🚀 **Simple 3-Step Process:**

### Step 1: First Deployment
```bash
# Just push your code to GitHub
git add .
git commit -m "Deploy website"
git push origin main
```
**Result:** Website deploys automatically ✅

### Step 2: Setup Automation (One-time)
```bash
# On your server, run once:
sudo /root/scripts/setup-automation.sh
```
**Result:** 24/7 monitoring starts ✅

### Step 3: Forever After
```bash
# Just keep pushing code:
git add .
git commit -m "Update website"
git push origin main
```
**Result:** Everything happens automatically ✅

---

## 📝 **What Each Script Does (FYI Only):**

| Script | Purpose | When It Runs |
|--------|---------|--------------|
| `deploy.yml` | Deploys your website | Every GitHub push |
| `setup-automation.sh` | Sets up monitoring | You run once |
| `auto-monitor.sh` | Monitors website health | Every 30 seconds (after setup) |
| `auto-cleanup.sh` | Cleans Docker images | Every 6 hours (after setup) |
| `rollback.sh` | Emergency rollback | If you need it manually |
| `monitor.sh` | Manual health check | If you want to check manually |
| `docker-cleanup.sh` | Manual cleanup | If you want to clean manually |

---

## 🎯 **Bottom Line:**

1. **Push code** → Website updates automatically
2. **Run setup-automation.sh once** → Gets 24/7 monitoring
3. **Never worry again** → Everything is automated!

---

## ⚡ **Quick Start Commands:**

```bash
# 1. Deploy (automatic when you push to GitHub)
git push origin main

# 2. Setup automation (run once on server)
sudo /root/scripts/setup-automation.sh

# 3. Check if everything is working
curl http://localhost:3002/api/health
systemctl status nitp-monitor
```

---

## 🆘 **If Something Goes Wrong:**

```bash
# Check deployment logs
journalctl -u nitp-monitor -f

# Manual rollback
sudo /root/scripts/rollback.sh

# Check website health
curl http://localhost:3002/api/health

# Restart monitoring
systemctl restart nitp-monitor
```

---

## 🎉 **After Setup, You Only Need:**

```bash
# Make changes to your code
git add .
git commit -m "My awesome changes"
git push origin main

# That's it! Everything else is automatic! 🚀
```
