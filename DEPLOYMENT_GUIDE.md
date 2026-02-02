# Deployment Guide

This guide provides detailed instructions for deploying your portfolio website to various platforms.

## Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All personal information is updated
- [ ] Resume PDF is added to `/public` folder
- [ ] All placeholder links are replaced with real URLs
- [ ] Contact information is correct
- [ ] Website tested locally (`npm run build` && `npm run preview`)
- [ ] All images are optimized
- [ ] SEO meta tags are updated

## Option 1: Vercel (Recommended)

Vercel offers the easiest deployment with automatic builds and excellent performance.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Automatic Deployments
Every push to your main branch will automatically trigger a new deployment.

---

## Option 2: Netlify

Netlify is another excellent option with similar features to Vercel.

### Steps:

1. **Push to GitHub** (if not done already)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain**
   - Go to Site settings → Domain management
   - Add custom domain
   - Configure DNS records as instructed

### Netlify Forms (Optional)
To enable the contact form with Netlify Forms:

Update `src/components/Contact.jsx`:
```javascript
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form */}
</form>
```

---

## Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/repository-name/', // Add this line
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages, /(root)
   - Save

Your site will be live at: `https://yourusername.github.io/repository-name`

### Updating Deployment
```bash
npm run deploy
```

---

## Option 4: Custom Server (VPS/Cloud)

For deployment on your own server.

### Requirements:
- Node.js installed on server
- Web server (Nginx/Apache)
- SSL certificate (Let's Encrypt)

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload dist folder**
   ```bash
   scp -r dist/* user@yourserver.com:/var/www/html/
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Enable SSL with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Post-Deployment Tasks

### 1. Test Your Site
- [ ] Check all pages load correctly
- [ ] Test resume download
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Test in different browsers

### 2. Set Up Analytics (Optional)

**Google Analytics:**
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID
3. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap (if created)

**Bing Webmaster Tools:**
1. Visit [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership

### 4. Create a Sitemap (Optional)

For better SEO, create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Continuous Integration/Deployment

### GitHub Actions (for automated builds)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 16+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for syntax errors in code

### 404 Errors After Deployment
- Ensure `base` is set correctly in `vite.config.js`
- Check server configuration for SPA routing
- Verify files are in correct directory

### Slow Loading
- Compress images (use tools like TinyPNG)
- Enable CDN (Vercel/Netlify provide this automatically)
- Check browser console for issues

### Resume Not Downloading
- Ensure `resume.pdf` is in `public` folder
- Check file permissions
- Verify path in download links

---

## Updating Your Live Site

### For Vercel/Netlify (Git-based):
```bash
git add .
git commit -m "Update content"
git push
```
Deployment happens automatically!

### For GitHub Pages:
```bash
npm run deploy
```

### For Custom Server:
```bash
npm run build
scp -r dist/* user@yourserver.com:/var/www/html/
```

---

## Performance Optimization

### After Deployment:

1. **Test Performance**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: 90+ score

2. **Enable Compression**
   - Vercel/Netlify: Automatic
   - Custom server: Enable gzip in Nginx/Apache

3. **Add Caching Headers**
   ```nginx
   # Nginx example
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

4. **Use a CDN**
   - Vercel/Netlify: Built-in
   - Custom: CloudFlare, AWS CloudFront

---

## Security Best Practices

- [ ] Use HTTPS (SSL certificate)
- [ ] Set security headers
- [ ] Keep dependencies updated
- [ ] Don't commit sensitive information
- [ ] Use environment variables for API keys

---

## Support

If you encounter deployment issues:
- Check platform documentation (Vercel, Netlify, etc.)
- Review build logs for errors
- Ensure all environment-specific configurations are correct
- Test locally with production build first

---

**Your portfolio is now live! 🎉**

Share it with:
- Potential employers
- Research collaborators
- Professional networks (LinkedIn, Twitter)
- Include in your email signature
