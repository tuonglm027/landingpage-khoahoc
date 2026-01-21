#!/bin/bash

# SuperbAI Frontend Deployment Script
echo "🚀 Starting SuperbAI Frontend deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main

# Build and start of application
echo "🔨 Building and starting application..."
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# Wait for the application to start
echo "⏳ Waiting for the application to start..."
sleep 10

# Check if the application is running
if curl -f http://localhost:3002 > /dev/null 2>&1; then
    echo "✅ Application is running successfully!"
    echo "🌐 Frontend is available at: http://localhost:3002"
else
    echo "❌ Application failed to start. Checking logs..."
    docker-compose logs frontend
    exit 1
fi

echo "🎉 Deployment completed successfully!"
