# 🚀 Deploy Landing Page Khoahoc AI

## 📋 Thông tin VPS
- **IP**: 36.50.55.209
- **User**: root
- **Port**: 22
- **Password**: dcltkP1!

## 🛠️ Cách deploy

### Cách 1: Sử dụng script tự động
```bash
# Tải script về máy local
scp deploy.sh root@36.50.55.209:/root/

# Chạy script
chmod +x deploy.sh
./deploy.sh
```

### Cách 2: Deploy thủ công
```bash
# 1. SSH vào VPS
ssh root@36.50.55.209

# 2. Cài đặt
apt update && apt install git docker docker-compose -y

# 3. Kéo code
cd /var/www/
git clone https://github.com/tuonglm027/landingpage-khoahoc.git

# 4. Chạy Docker
cd /var/www/landingpage-khoahoc
docker-compose up --build -d

# 5. Cấu hình Nginx
# Tạo file config
nano /etc/nginx/sites-available/landingpage-khoahoc

# Enable site
ln -s /etc/nginx/sites-available/landingpage-khoahoc /etc/nginx/sites-enabled/
systemctl restart nginx
```

## ⚙️ Cấu hình Nginx

File: `/etc/nginx/sites-available/landingpage-khoahoc`
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $scheme;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🔍 Kiểm tra deployment

```bash
# Kiểm tra container
docker ps

# Kiểm tra logs
docker-compose logs -f app

# Kiểm tra Nginx
systemctl status nginx

# Test kết nối
curl -I http://localhost
```

## 🌐 Truy cập

Sau khi deploy hoàn tất, truy cập:
- **Local**: http://localhost
- **Production**: http://your-domain.com

## 📝 Quản lý

```bash
# Dừng container
docker-compose down

# Khởi động lại
docker-compose up -d

# Xem logs
docker-compose logs -f app

# Update code
git pull origin main
docker-compose up --build -d
```

## 🔥 Lưu ý quan trọng

1. **Thay `your-domain.com** bằng domain thực tế
2. **Mở port 80 trên firewall**: `sudo ufw allow 80`
3. **Backup dữ liệu**: `docker volume ls`
4. **SSL**: Có thể cài Let's Encrypt miễn phí

## 🎯 Kết quả

- ✅ Landing page online trên VPS
- ✅ Docker container tự động restart
- ✅ Nginx reverse proxy
- ✅ Code luôn được update từ GitHub
