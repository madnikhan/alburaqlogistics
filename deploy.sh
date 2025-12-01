#!/bin/bash

# Deployment script for Fasthosts
# Run this script before uploading files

echo "🚀 Preparing Al Buraq Logistics for deployment..."

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Create deployment package
echo "📁 Creating deployment package..."

# Remove old deploy directory
rm -rf deploy

# Create deploy directory
mkdir -p deploy

# Copy necessary files
echo "Copying files..."
cp -r .next deploy/ 2>/dev/null || true
cp -r public deploy/ 2>/dev/null || true
cp package.json deploy/
cp package-lock.json deploy/
cp next.config.ts deploy/
cp tsconfig.json deploy/
cp server.js deploy/ 2>/dev/null || true
cp ecosystem.config.js deploy/ 2>/dev/null || true
cp .htaccess deploy/ 2>/dev/null || true

# Create .env.example for reference
cp .env.example deploy/.env.example 2>/dev/null || true

# Create README for deployment
cat > deploy/README.txt << 'EOF'
DEPLOYMENT INSTRUCTIONS
=======================

1. Upload all files in this folder to your Fasthosts server

2. On your server, run:
   npm install --production

3. Create .env.local file with your environment variables
   (See .env.example for reference)

4. Start the application:
   npm start
   
   OR use PM2 for production:
   pm2 start npm --name "alburaq-logistics" -- start
   pm2 save

5. Configure your domain to point to this application

For detailed instructions, see FASTHOSTS_DEPLOY.md
EOF

echo "✅ Deployment package created in 'deploy/' directory"
echo ""
echo "📋 Next steps:"
echo "1. Upload the 'deploy/' folder contents to your Fasthosts server"
echo "2. Create .env.local on the server with your environment variables"
echo "3. Run 'npm install --production' on the server"
echo "4. Start the application with 'npm start' or PM2"
echo ""
echo "📖 See FASTHOSTS_DEPLOY.md for detailed instructions"
