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
