#!/bin/bash

# Quick connection script for your Fasthosts server
# Usage: ./connect-server.sh [username]

SERVER="ssh.alburaqlogistics.co.uk"
IP="77.68.64.22"
PORT="22"

if [ -z "$1" ]; then
    echo "Usage: ./connect-server.sh [your-username]"
    echo ""
    echo "Your server details:"
    echo "  Host: $SERVER"
    echo "  IP: $IP"
    echo "  Port: $PORT"
    echo ""
    echo "Example: ./connect-server.sh myusername"
    exit 1
fi

USERNAME=$1

echo "Connecting to Fasthosts server..."
echo "Host: $SERVER"
echo "Username: $USERNAME"
echo ""
echo "After connecting, run these commands:"
echo "  cd ~/public_html  # (or your website directory)"
echo "  npm install --production"
echo "  cp .env.example .env.local"
echo "  nano .env.local  # Add your environment variables"
echo "  npm start"
echo ""

ssh -p $PORT $USERNAME@$SERVER

