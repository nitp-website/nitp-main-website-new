#!/bin/bash

# Setup Automated Services for NITP Website
# This script creates systemd services for monitoring and cleanup

echo "⚙️ NITP Website Automated Services Setup"
echo "========================================"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ This script must be run as root"
    echo "Please run: sudo $0"
    exit 1
fi

echo "🔧 Creating systemd services for automation..."

# 1. Create monitoring service
cat > /etc/systemd/system/nitp-monitor.service << 'EOF'
[Unit]
Description=NITP Website Health Monitor
After=docker.service
Requires=docker.service
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=10
User=root
ExecStart=/root/scripts/auto-monitor.sh
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
EOF

# 2. Create cleanup timer service
cat > /etc/systemd/system/nitp-cleanup.service << 'EOF'
[Unit]
Description=NITP Website Docker Cleanup
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
User=root
ExecStart=/root/scripts/auto-cleanup.sh
StandardOutput=journal
StandardError=journal
EOF

# 3. Create cleanup timer
cat > /etc/systemd/system/nitp-cleanup.timer << 'EOF'
[Unit]
Description=Run NITP cleanup every 6 hours
Requires=nitp-cleanup.service

[Timer]
OnCalendar=*-*-* 00,06,12,18:00:00
Persistent=true

[Install]
WantedBy=timers.target
EOF

# 4. Create log rotation config
cat > /etc/logrotate.d/nitp-website << 'EOF'
/var/log/nitp-*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    copytruncate
}
EOF

# 5. Create cron jobs for additional monitoring
cat > /etc/cron.d/nitp-website << 'EOF'
# NITP Website Maintenance Jobs
SHELL=/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

# Health check every 5 minutes (backup to systemd service)
*/5 * * * * root /usr/bin/curl -f -s --max-time 5 http://localhost:3002/api/health > /dev/null || echo "$(date): Health check failed" >> /var/log/nitp-alerts.log

# Disk usage check every hour
0 * * * * root [ $(df / | awk 'NR==2 {print $5}' | tr -d '%') -gt 90 ] && echo "$(date): Disk usage critical: $(df -h / | awk 'NR==2 {print $5}')" >> /var/log/nitp-alerts.log

# Container resource check every 30 minutes
*/30 * * * * root docker stats --no-stream nitp-main-website 2>/dev/null | tail -1 | awk '{if($3+0 > 80 || $7+0 > 80) print strftime("%Y-%m-%d %H:%M:%S") ": High resource usage - CPU:" $3 " MEM:" $7}' >> /var/log/nitp-alerts.log
EOF

echo "✅ Services created successfully!"
echo ""

# Reload systemd and enable services
echo "🔄 Enabling and starting services..."

systemctl daemon-reload

# Enable and start monitoring service
systemctl enable nitp-monitor.service
systemctl start nitp-monitor.service

# Enable and start cleanup timer
systemctl enable nitp-cleanup.timer
systemctl start nitp-cleanup.timer

echo "✅ Services enabled and started!"
echo ""

# Show service status
echo "📊 Service Status:"
echo "=================="
systemctl status nitp-monitor.service --no-pager -l
echo ""
systemctl status nitp-cleanup.timer --no-pager -l
echo ""

# Show what's running
echo "🔍 Active Services:"
echo "==================="
systemctl list-timers nitp-* --no-pager
echo ""

echo "📝 Service Management Commands:"
echo "=============================="
echo "Monitor service:"
echo "  Status: systemctl status nitp-monitor"
echo "  Logs:   journalctl -u nitp-monitor -f"
echo "  Stop:   systemctl stop nitp-monitor"
echo "  Start:  systemctl start nitp-monitor"
echo ""
echo "Cleanup timer:"
echo "  Status: systemctl status nitp-cleanup.timer"
echo "  Logs:   journalctl -u nitp-cleanup -f"
echo "  Run now: systemctl start nitp-cleanup"
echo ""
echo "View all logs:"
echo "  Health: tail -f /var/log/nitp-health.log"
echo "  Cleanup: tail -f /var/log/nitp-cleanup.log"
echo "  Alerts: tail -f /var/log/nitp-alerts.log"
echo ""

echo "🎉 Automation setup completed!"
echo ""
echo "Your NITP website now has:"
echo "✅ Continuous health monitoring (every 30 seconds)"
echo "✅ Automatic recovery on failures"
echo "✅ Scheduled cleanup (every 6 hours)"
echo "✅ Log rotation and management"
echo "✅ Resource usage alerts"
echo "✅ Cron-based backup monitoring"
echo ""
echo "🚀 Your website is now fully automated!"
