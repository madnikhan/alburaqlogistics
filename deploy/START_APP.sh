#!/bin/bash

# Quick start script for Fasthosts server
# Run this after uploading files

echo "🚀 Starting Al Buraq Logistics..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found"
    echo "   Make sure you're in the website directory"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --production
fi

# Check environment file
if [ ! -f ".env.local" ]; then
    echo "⚠️  WARNING: .env.local not found"
    echo "   Creating from .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env.local
        echo "   ✅ Created .env.local"
        echo "   ⚠️  IMPORTANT: Edit .env.local and add your actual values!"
        echo "   Then run this script again."
        exit 1
    else
        echo "   ❌ .env.example not found either"
        echo "   Please create .env.local manually"
        exit 1
    fi
fi

# Start the application
echo "✅ Starting application..."
echo ""
npm start

