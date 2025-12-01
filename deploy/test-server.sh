#!/bin/bash

# Quick test script to run on Fasthosts server
# Run this to diagnose issues

echo "=========================================="
echo "  AL BURAQ LOGISTICS - SERVER DIAGNOSTIC"
echo "=========================================="
echo ""

# Check Node.js
echo "1. Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "   ✅ Node.js installed: $NODE_VERSION"
    if [[ $(echo "$NODE_VERSION" | cut -d'v' -f2 | cut -d'.' -f1) -lt 18 ]]; then
        echo "   ⚠️  WARNING: Node.js version should be 18 or higher"
    fi
else
    echo "   ❌ Node.js NOT installed"
    echo "   → Contact Fasthosts support to install Node.js 18+"
    exit 1
fi

# Check npm
echo ""
echo "2. Checking npm..."
if command -v npm &> /dev/null; then
    echo "   ✅ npm installed: $(npm --version)"
else
    echo "   ❌ npm NOT installed"
    exit 1
fi

# Check current directory
echo ""
echo "3. Current directory:"
pwd

# Check files
echo ""
echo "4. Checking required files..."
REQUIRED_FILES=("package.json" "next.config.ts" ".next" "public")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -e "$file" ]; then
        echo "   ✅ $file exists"
    else
        echo "   ❌ $file MISSING"
    fi
done

# Check node_modules
echo ""
echo "5. Checking dependencies..."
if [ -d "node_modules" ]; then
    MODULE_COUNT=$(ls node_modules | wc -l)
    echo "   ✅ node_modules exists ($MODULE_COUNT packages)"
else
    echo "   ❌ node_modules MISSING"
    echo "   → Run: npm install --production"
fi

# Check environment file
echo ""
echo "6. Checking environment variables..."
if [ -f ".env.local" ]; then
    echo "   ✅ .env.local exists"
    if grep -q "NEXT_PUBLIC_FIREBASE_API_KEY" .env.local; then
        echo "   ✅ Firebase variables found"
    else
        echo "   ⚠️  Firebase variables may be missing"
    fi
    if grep -q "NEXT_PUBLIC_BASE_URL" .env.local; then
        BASE_URL=$(grep "NEXT_PUBLIC_BASE_URL" .env.local | cut -d'=' -f2)
        echo "   ✅ Base URL: $BASE_URL"
    else
        echo "   ⚠️  NEXT_PUBLIC_BASE_URL not set"
    fi
else
    echo "   ❌ .env.local MISSING"
    echo "   → Create it with your environment variables"
fi

# Check port
echo ""
echo "7. Checking port availability..."
if command -v netstat &> /dev/null; then
    PORT_IN_USE=$(netstat -tuln 2>/dev/null | grep ":3000 " || echo "")
    if [ -z "$PORT_IN_USE" ]; then
        echo "   ✅ Port 3000 is available"
    else
        echo "   ⚠️  Port 3000 is in use"
        echo "   → Consider using PORT=3001 in .env.local"
    fi
fi

# Try to start
echo ""
echo "8. Testing application start..."
echo "   (This will attempt to start the app - press Ctrl+C to stop)"
echo ""
read -p "   Start test? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    npm start
fi

echo ""
echo "=========================================="
echo "  DIAGNOSTIC COMPLETE"
echo "=========================================="

