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

## 🚀 Deployment

### Option 1: Direct Upload
Upload all files to your web hosting service (cPanel, FTP, etc.)

### Option 2: Local Testing
```bash
# Python 3
python -m http.server 8080

# Or simply open index.html in your browser
```

### Option 3: Netlify/Vercel
Drag and drop the project folder to deploy instantly.

## 📝 Contact Information

- **Name:** Dilshad Ahmed
- **Phone:** 0345-6784432
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
