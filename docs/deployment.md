# Deployment Guide

This guide covers different deployment strategies for the Movie Ticket Booking System.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Docker Deployment](#docker-deployment)
- [Cloud Deployment](#cloud-deployment)
- [Production Considerations](#production-considerations)

## Prerequisites

- Node.js 16+ and npm
- MongoDB 4.4+
- Docker and Docker Compose (for containerized deployment)
- Domain name and SSL certificate (for production)

## Environment Variables

### Backend (.env)

```env
# Server Configuration
NODE_ENV=production
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/movie-booking

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d

# File Upload
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5000000

# CORS
CORS_ORIGIN=https://yourdomain.com

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

# Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Frontend (.env)

```env
# API Configuration
REACT_APP_API_URL=https://api.yourdomain.com

# App Configuration
REACT_APP_NAME=MovieBooker
REACT_APP_VERSION=1.0.0

# Payment Gateway
REACT_APP_RAZORPAY_KEY=your_razorpay_key_id
REACT_APP_STRIPE_KEY=your_stripe_publishable_key

# External APIs
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_GOOGLE_MAPS_API=your_google_maps_api_key
```

## Local Development

### Using npm

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env file with your configurations
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env file with your configurations
   npm start
   ```

### Using Docker Compose

```bash
# Clone the repository
git clone https://github.com/Smit2784/movie-ticket-booking-system.git
cd movie-ticket-booking-system

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Docker Deployment

### Build Images

```bash
# Build backend image
cd backend
docker build -t movie-booking-backend .

# Build frontend image
cd ../frontend
docker build -t movie-booking-frontend .
```

### Run with Docker Compose

```bash
# Production deployment
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Cloud Deployment

### AWS Deployment

#### Using EC2

1. **Launch EC2 Instance**
   - Choose Ubuntu 20.04 LTS
   - Configure security groups (ports 80, 443, 22)
   - Create and download key pair

2. **Install Dependencies**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install MongoDB
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   
   # Install Nginx
   sudo apt install nginx -y
   
   # Install PM2
   sudo npm install -g pm2
   ```

3. **Deploy Application**
   ```bash
   # Clone repository
   git clone https://github.com/Smit2784/movie-ticket-booking-system.git
   cd movie-ticket-booking-system
   
   # Setup backend
   cd backend
   npm install --production
   cp .env.example .env
   # Edit .env file
   pm2 start server.js --name "movie-booking-backend"
   
   # Setup frontend
   cd ../frontend
   npm install
   npm run build
   sudo cp -r build/* /var/www/html/
   ```

#### Using Docker on EC2

```bash
# Install Docker
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.12.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Deploy application
git clone https://github.com/Smit2784/movie-ticket-booking-system.git
cd movie-ticket-booking-system
docker-compose up -d
```

### Vercel Deployment (Frontend Only)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd frontend
   vercel --prod
   ```

### Heroku Deployment

#### Backend Deployment

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create app
heroku create movie-booking-api

# Add MongoDB addon
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_jwt_secret

# Deploy
git subtree push --prefix backend heroku main
```

#### Frontend Deployment

```bash
# Create app
heroku create movie-booking-frontend

# Add buildpack
heroku buildpacks:set mars/create-react-app

# Set environment variables
heroku config:set REACT_APP_API_URL=https://movie-booking-api.herokuapp.com/api

# Deploy
git subtree push --prefix frontend heroku main
```

## Production Considerations

### Security

1. **Environment Variables**
   - Use strong, unique JWT secrets
   - Never commit .env files
   - Use environment-specific configurations

2. **HTTPS**
   - Always use HTTPS in production
   - Implement HSTS headers
   - Use proper SSL certificates

3. **Database Security**
   - Enable MongoDB authentication
   - Use connection string with credentials
   - Implement database backups

### Performance

1. **Caching**
   - Implement Redis for session storage
   - Use CDN for static assets
   - Enable Gzip compression

2. **Database Optimization**
   - Create proper indexes
   - Implement connection pooling
   - Monitor query performance

### Monitoring

1. **Application Monitoring**
   - Use PM2 for process management
   - Implement health checks
   - Set up error tracking (Sentry)

2. **Infrastructure Monitoring**
   - Monitor server resources
   - Set up alerts for critical issues
   - Implement log aggregation

### Backup Strategy

1. **Database Backups**
   ```bash
   # Daily MongoDB backup
   mongodump --uri="mongodb://username:password@host:port/database" --out=/backup/$(date +%Y%m%d)
   ```

2. **File Backups**
   - Backup uploaded files to cloud storage
   - Implement versioning for critical files

### Scaling

1. **Horizontal Scaling**
   - Use load balancers
   - Implement stateless architecture
   - Use container orchestration (Kubernetes)

2. **Database Scaling**
   - Implement read replicas
   - Consider sharding for large datasets
   - Use database clustering

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Find process using port
   lsof -i :5000
   # Kill process
   kill -9 <PID>
   ```

2. **MongoDB Connection Issues**
   - Check MongoDB service status
   - Verify connection string
   - Check firewall settings

3. **Build Failures**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall
   - Check Node.js version compatibility

### Logs

```bash
# View application logs
pm2 logs movie-booking-backend

# View Docker logs
docker-compose logs -f backend
docker-compose logs -f frontend

# View system logs
sudo journalctl -u nginx
sudo journalctl -u mongod
```
