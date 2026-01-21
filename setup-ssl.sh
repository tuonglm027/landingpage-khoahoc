#!/bin/bash

echo "=== SETTING UP SSL FOR gcc.khoahocai.pro ==="

# Install Certbot
apt update
apt install -y certbot python3-certbot-nginx

# Get SSL certificate
certbot --nginx -d gcc.khoahocai.pro --non-interactive --agree-tos --email admin@khoahocai.pro

# Setup auto-renewal
echo "0 12 * * * /usr/bin/certbot renew --quiet" | crontab -

# Copy certificates to container accessible location
mkdir -p /etc/letsencrypt/live/gcc.khoahocai.pro

echo "=== SSL SETUP COMPLETE ==="
echo "Certificates installed at: /etc/letsencrypt/live/gcc.khoahocai.pro/"
echo "Auto-renewal configured via cron"
