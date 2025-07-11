#!/bin/bash

# SSH Key Setup Script for NITP Website Deployment
# Run this script on your LOCAL machine (not the server)

echo "🔑 SSH Key Setup for NITP Website Deployment"
echo "=========================================="

# Check if SSH key already exists
if [ -f ~/.ssh/id_rsa ]; then
    echo "✅ SSH key already exists at ~/.ssh/id_rsa"
    echo ""
    echo "📋 Your PUBLIC key (copy this to your server):"
    echo "================================================"
    cat ~/.ssh/id_rsa.pub
    echo "================================================"
    echo ""
    echo "🔐 Your PRIVATE key (copy this to GitHub SECRET: SERVER_SSH_KEY):"
    echo "================================================"
    cat ~/.ssh/id_rsa
    echo "================================================"
    echo ""
else
    echo "🔄 Generating new SSH key..."
    read -p "Enter your email: " email
    ssh-keygen -t rsa -b 4096 -C "$email" -f ~/.ssh/id_rsa -N ""
    echo "✅ SSH key generated successfully!"
    echo ""
    echo "📋 Your PUBLIC key (copy this to your server):"
    echo "================================================"
    cat ~/.ssh/id_rsa.pub
    echo "================================================"
    echo ""
    echo "🔐 Your PRIVATE key (copy this to GitHub SECRET: SERVER_SSH_KEY):"
    echo "================================================"
    cat ~/.ssh/id_rsa
    echo "================================================"
    echo ""
fi

echo "📝 Next Steps:"
echo "1. Copy the PUBLIC key to your server: ssh-copy-id root@YOUR_SERVER_IP"
echo "2. Copy the PRIVATE key to GitHub secret: SERVER_SSH_KEY"
echo "3. Test SSH connection: ssh root@YOUR_SERVER_IP"
echo ""
echo "🚀 Once SSH is set up, your deployment will work automatically!"
