# Paragon CRM Frontend - Pre-built Version

This is a pre-built version of the Paragon CRM frontend, configured to connect to your Heroku backend at `https://paragon-crm-api.herokuapp.com`.

## Deployment Instructions

### Option 1: Deploy to Netlify

1. Sign up or log in at [netlify.com](https://www.netlify.com/)
2. Click "Add new site" > "Deploy manually"
3. Drag and drop this entire folder into the upload area
4. Wait for the upload and deployment to complete
5. Your site will be assigned a random URL (e.g., random-name-123abc.netlify.app)
6. You can customize this URL in the site settings

### Option 2: Deploy to Vercel

1. Sign up or log in at [vercel.com](https://vercel.com/)
2. Click "Add New" > "Project"
3. Import this folder from your local machine
4. Follow the prompts to deploy
5. Your site will be assigned a URL (e.g., your-project-name.vercel.app)

## Environment Variables

The frontend is already configured to use your Heroku backend URL. If you need to change this in the future, you'll need to set the following environment variable in your hosting platform:

```
REACT_APP_API_BASE_URL=https://paragon-crm-api.herokuapp.com
```

## Features Included

- Contact Management
- Interaction Logging
- Task and Reminder Management
- Pipeline Management
- Referral Tracking
- Dashboard
- Microsoft Outlook Integration
- WhatsApp Messaging UI (requires Meta setup)

## Next Steps After Deployment

1. Test all functionality on the deployed frontend
2. Complete the Meta Developer Account setup for WhatsApp integration
3. Configure webhook URLs for Outlook and WhatsApp to point to your deployed backend

## Support

If you encounter any issues or have questions about the deployment, please reach out for assistance.
