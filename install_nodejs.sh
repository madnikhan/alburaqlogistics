#!/bin/bash
# Complete Node.js Installation Script for Fasthosts
# Copy and paste this entire script into your SSH session

echo "🚀 Starting Node.js installation..."

# Step 1: Install NVM
echo "📦 Installing NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Step 2: Load NVM
echo "🔄 Loading NVM..."
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Step 3: Install Node.js 18
echo "📥 Installing Node.js 18..."
nvm install 18
nvm use 18
nvm alias default 18

# Step 4: Verify installation
echo "✅ Verifying installation..."
node --version
npm --version

# Step 5: Navigate to website directory
echo "📁 Navigating to website directory..."
cd ~/htdocs || cd ~/public_html || cd ~/www

# Step 6: Install dependencies
echo "📦 Installing project dependencies (this may take a few minutes)..."
npm install --production

# Step 7: Create .env.local
echo "📝 Creating .env.local file..."
cat > .env.local << 'EOF'
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDa1YU9LKzv2rVmp6-ONHrFbQwrSpjehmM
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=alburaqlogistics-76788.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=alburaqlogistics-76788
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=alburaqlogistics-76788.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1038841940420
NEXT_PUBLIC_FIREBASE_APP_ID=1:1038841940420:web:5386e4368fdb13a7ad3c91
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-J6PBRQELME
NEXT_PUBLIC_BASE_URL=https://alburaqlogistics.co.uk
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
PORT=3000
HOSTNAME=0.0.0.0
NODE_ENV=production
EOF

# Step 8: Install PM2
echo "📦 Installing PM2..."
npm install -g pm2

# Step 9: Start application
echo "🚀 Starting application..."
pm2 start npm --name "alburaq-logistics" -- start
pm2 save

# Step 10: Check status
echo "📊 Checking application status..."
pm2 status

echo ""
echo "✅ Installation complete!"
echo "📋 Next steps:"
echo "1. Run: pm2 logs alburaq-logistics (to view logs)"
echo "2. Run: pm2 startup (to start on server reboot)"
echo "3. Visit: https://alburaqlogistics.co.uk"

