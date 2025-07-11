# 🔐 GitHub Secrets Setup Guide

## 🚨 **Current Error:** 
```
Error: can't connect without a private SSH key or password
```

## ✅ **Fix: Add GitHub Repository Secrets**

### **Step 1: Go to GitHub Settings**
1. Go to your repository: `https://github.com/ashishkr375/nitp-main-website-new`
2. Click **Settings** tab
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**

### **Step 2: Add These 3 Secrets**

#### **Secret 1: SERVER_HOST**
```
Name: SERVER_HOST
Value: YOUR_SERVER_IP_ADDRESS
Example: 192.168.1.100 or your-domain.com
```

#### **Secret 2: SERVER_SSH_KEY**
```
Name: SERVER_SSH_KEY
Value: YOUR_PRIVATE_SSH_KEY
```

**How to get your SSH key:**
```bash
# On your local machine or server
cat ~/.ssh/id_rsa

# Copy the ENTIRE output including:
# -----BEGIN OPENSSH PRIVATE KEY-----
# (all the key content)
# -----END OPENSSH PRIVATE KEY-----
```

#### **Secret 3: SERVER_PORT (Optional)**
```
Name: SERVER_PORT
Value: 22
(Only add if your SSH port is different from 22)
```

---

## 🔑 **If You Don't Have SSH Keys Setup:**

### **Option 1: Generate SSH Key Pair**
```bash
# On your local machine
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# This creates:
# ~/.ssh/id_rsa (private key - for GitHub secret)
# ~/.ssh/id_rsa.pub (public key - for server)
```

### **Option 2: Add Public Key to Server**
```bash
# Copy public key to server
ssh-copy-id root@YOUR_SERVER_IP

# Or manually:
cat ~/.ssh/id_rsa.pub | ssh root@YOUR_SERVER_IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

---

## 🎯 **Quick Setup Commands:**

### **1. Generate Keys (if needed):**
```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/nitp_deploy_key
```

### **2. Copy Public Key to Server:**
```bash
ssh-copy-id -i ~/.ssh/nitp_deploy_key.pub root@YOUR_SERVER_IP
```

### **3. Get Private Key for GitHub:**
```bash
cat ~/.ssh/nitp_deploy_key
# Copy this entire output to GitHub SECRET: SERVER_SSH_KEY
```

### **4. Test Connection:**
```bash
ssh -i ~/.ssh/nitp_deploy_key root@YOUR_SERVER_IP
```

---

## 📋 **GitHub Secrets Summary:**

After adding secrets, you should have:

```
✅ SERVER_HOST = your.server.ip.address
✅ SERVER_SSH_KEY = -----BEGIN OPENSSH PRIVATE KEY-----...
✅ SERVER_PORT = 22 (optional)
```

---

## 🔄 **After Adding Secrets:**

1. Go to **Actions** tab in GitHub
2. Click **Re-run failed jobs** 
3. Or push a new commit to trigger deployment

---

## 🆘 **Troubleshooting:**

### **Still getting connection errors?**
```bash
# Test SSH connection manually
ssh root@YOUR_SERVER_IP

# Check if Docker is installed on server
docker --version

# Check if ports are free
sudo netstat -tulpn | grep :3002
```

### **Permission denied errors?**
```bash
# Fix SSH key permissions
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 700 ~/.ssh
```

---

## 🎉 **Once Fixed:**

Your deployment will work automatically when you:
```bash
git add .
git commit -m "Fix deployment"
git push origin main
```

The GitHub Actions will:
✅ Connect to your server
✅ Upload your code  
✅ Build Docker image
✅ Deploy with zero downtime
✅ Run health checks
✅ Clean up automatically
