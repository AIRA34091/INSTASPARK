# InstaSpark - AI-Powered Social Media Toolkit

A fully functional, production-ready multi-tool website for social media content creation and utility tools.

## 🚀 Live Demo

Open `index.html` in any web browser or deploy to your web hosting service.

## ✨ Features

### Social Media Tools
- **Instagram Bio Generator** - Create bios in 5 tones (Creative, Professional, Casual, Funny, Minimal)
- **Hashtag Generator** - Generate trending hashtags with customizable count (5-30)
- **Username Generator** - Create unique usernames in 5 styles (Classic, Creative, Professional, Fun, Minimal)
- **Caption Generator** - AI-powered captions with 5 tones (Inspirational, Funny, Promotional, Storytelling, Engaging)

### Utility Tools
- **Word & Character Counter** - Real-time counting with reading time estimation
- **Case Converter** - 8 conversion types (UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case, alternating)
- **Password Generator** - Secure passwords with strength indicator and customizable options
- **QR Code Generator** - Create downloadable QR codes for URLs, text, and contact info

### Static Pages
- About Us
- Contact Us (with contact form)
- Privacy Policy
- Terms of Service
- Disclaimer

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** Inter (Google Fonts)
- **QR Code Library:** QRCode.js (CDN)
- **No Framework Required:** Pure HTML/CSS/JS for instant deployment

## 📁 Project Structure

```
Instaspark/
├── index.html                  # Homepage
├── css/
│   └── style.css              # Main stylesheet
├── js/
│   └── tools.js               # All tool logic
├── about/
│   └── index.html             # About page
├── contact/
│   └── index.html             # Contact page
├── privacy/
│   └── index.html             # Privacy policy
├── terms/
│   └── index.html             # Terms of service
├── disclaimer/
│   └── index.html             # Disclaimer
├── tools/
│   ├── social-media/
│   │   ├── instagram-bio/
│   │   ├── hashtag-generator/
│   │   └── username-generator/
│   ├── ai-content/
│   │   └── caption-generator/
│   └── utility/
│       ├── word-counter/
│       ├── case-converter/
│       ├── password-generator/
│       └── qr-generator/
├── sitemap.xml                # SEO sitemap
└── robots.txt                 # Search engine instructions
```

## 🚀 Deployment Guide

### Option 1: cPanel/FTP (Traditional Hosting)
1. Compress all files into a ZIP archive
2. Log in to your hosting cPanel
3. Go to File Manager → public_html
4. Upload and extract the ZIP file
5. Your site will be live at your domain

### Option 2: Netlify (Recommended for Free Hosting)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the entire project folder to the deploy area
3. Your site will be live instantly with a free `.netlify.app` domain
4. To use custom domain: Go to Site settings → Domain management → Add custom domain

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy

### Option 4: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main/master)
4. Your site will be live at `username.github.io/repo-name`

### Option 5: Local Testing
```bash
# Python 3
python -m http.server 8080

# PHP
php -S localhost:8080

# Node.js (if you have http-server installed)
npx http-server -p 8080
```
Then open `http://localhost:8080` in your browser.

## 📝 Contact Information

- **Name:** Dilshad Ahmed
- **Phone:** 0309-4032646
- **Email:** instaspark@gmail.com

## 🔒 SEO & Legal

- Sitemap.xml included for search engines
- Robots.txt for crawler instructions
- Privacy Policy, Terms, and Disclaimer pages included
- Meta tags on all pages for better SEO

## 🎨 Customization

### Change Logo
Replace the logo URL in all HTML files:
```html
<img src="https://i.ibb.co/2YRg18bc/instaspark-logo.png" alt="InstaSpark Logo">
```

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    /* ... */
}
```

## 📄 License

All rights reserved. © 2026 InstaSpark.

## 🤝 Support

For support or inquiries, contact: instaspark@gmail.com
