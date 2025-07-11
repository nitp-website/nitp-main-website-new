# 🔌 NITP Website - Required Ports

## 📋 **Ports You MUST Keep Free on Your Server:**

### 🎯 **Essential Ports (Always Required):**

```bash
Port 3002 - LIVE WEBSITE PORT
Port 3102 - TEMPORARY TESTING PORT
```

---

## 📊 **Port Usage Breakdown:**

### **Port 3002** - 🌐 **LIVE WEBSITE**
- **Purpose:** Your actual website that users visit
- **Used by:** Live Docker container (`nitp-main-website`)
- **When:** Always running (24/7)
- **Access:** `http://your-server-ip:3002`
- **Critical:** ⚠️ **Never use this port for anything else!**

### **Port 3102** - 🧪 **TESTING PORT**
- **Purpose:** Testing new versions before going live
- **Used by:** Temporary container during deployments
- **When:** Only during deployments (5-10 minutes)
- **Access:** Internal testing only
- **Note:** Automatically freed after successful deployment

---

## 🔍 **How to Check if Ports are Free:**

### Before First Deployment:
```bash
# Check if ports are available
sudo netstat -tulpn | grep :3002
sudo netstat -tulpn | grep :3102

# If nothing shows up, ports are FREE ✅
# If something shows up, ports are BUSY ❌
```

### If Ports are Busy:
```bash
# Find what's using the port
sudo lsof -i :3002
sudo lsof -i :3102

# Kill the process (replace PID with actual number)
sudo kill -9 <PID>

# Or stop the service
sudo systemctl stop <service-name>
```

---

## 🚨 **Important Notes:**

### ✅ **Safe Ports (You CAN use these):**
- Port 80 (HTTP) - if you have a reverse proxy
- Port 443 (HTTPS) - if you have SSL setup
- Port 22 (SSH) - for server access
- Any other ports except 3002 and 3102

### ❌ **DON'T Use These Ports:**
- **Port 3002** - Reserved for live website
- **Port 3102** - Reserved for deployment testing
- Any port already used by system services

---

## 🔧 **Reverse Proxy Setup (Optional):**

If you want users to access your site without specifying port 3002:

### **Nginx Example:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3002;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### **Apache Example:**
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    ProxyPass / http://localhost:3002/
    ProxyPassReverse / http://localhost:3002/
</VirtualHost>
```

---

## 🎯 **Quick Summary:**

```bash
# Required FREE ports on your server:
✅ Port 3002 - Live website (always)
✅ Port 3102 - Testing (during deployments)

# Your website will be accessible at:
🌐 http://your-server-ip:3002
🌐 http://your-domain.com:3002

# With reverse proxy (optional):
🌐 http://your-domain.com (no port needed)
```

---

## 🆘 **Port Conflict Solutions:**

### **Problem:** Port 3002 already in use
```bash
# Find what's using it
sudo lsof -i :3002

# Common solutions:
sudo systemctl stop apache2    # If Apache is on 3002
sudo systemctl stop nginx     # If Nginx is on 3002
sudo pkill -f "node.*3002"    # If another Node.js app
sudo docker stop $(docker ps -q) # If other Docker containers
```

### **Problem:** Port 3102 already in use
```bash
# Usually less common, but same process:
sudo lsof -i :3102
sudo kill -9 <PID>
```

---

## ✅ **Pre-Deployment Checklist:**

```bash
# 1. Check ports are free
sudo netstat -tulpn | grep -E ':(3002|3102)'

# 2. If nothing returned, you're good! ✅

# 3. If something returned, free the ports:
#    - Identify the service
#    - Stop the service
#    - Verify ports are now free

# 4. Proceed with deployment! 🚀
```

That's it! Just keep ports 3002 and 3102 free on your server! 🎉
