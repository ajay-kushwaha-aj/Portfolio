# Ajay Kushwaha - Professional Portfolio Website

A modern, colorful, and professional portfolio website for Ajay Kushwaha, Biomedical Science Graduate specializing in Research & HealthTech Development.

## 🌟 Features

- **Modern Colorful Design**: Beautiful gradient backgrounds and vibrant color schemes
- **Profile Photo Integration**: Professional photo display in Hero section
- **Visual Achievement Cards**: Image backgrounds with overlay effects
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO-Friendly**: Comprehensive meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Easy to Customize**: Well-structured, maintainable codebase
- **Fallback Support**: Graceful fallbacks when images aren't available

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
cd ajay-portfolio
npm install
```

### 2. Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

### 4. Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📝 Customization Guide

### Personal Information

Update the following files with your actual information:

#### 1. Add Your Images (Important!)
See `IMAGE_SETUP_GUIDE.md` for detailed instructions.

**Quick Setup:**
```bash
# Add these files to /public/ folder:
public/
├── profile.jpg          # Your profile photo (400x400px)
├── resume.pdf          # Your resume
└── achievements/       # Create this folder
    ├── hackathon.jpg   # Hackathon image (800x600px)
    ├── research.jpg    # Research image (800x600px)
    ├── academic.jpg    # Academic image (800x600px)
    └── innovation.jpg  # Innovation image (800x600px)
```

**Don't have images yet?** The website uses beautiful gradient fallbacks automatically!

#### 2. Contact Information (`src/components/Contact.jsx`)
```javascript
// Update email, LinkedIn, and GitHub URLs
<a href="mailto:your.email@example.com">
<a href="https://linkedin.com/in/yourprofile">
<a href="https://github.com/yourusername">
```

#### 3. Footer (`src/components/Footer.jsx`)
```javascript
// Update social media links
```

#### 4. Education (`src/components/Education.jsx`)
```javascript
// Update university name, dates, and details
const educationData = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    period: 'Start Year - End Year',
    // ...
  }
];
```

#### 5. Projects (`src/components/Projects.jsx`)
```javascript
// Update project links from '#' to actual URLs
links: {
  github: 'https://github.com/yourusername/project',
  demo: 'https://project-demo.com',
  docs: 'https://project-docs.com'
}
```

### Resume PDF

1. Create your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download buttons will automatically link to it

### Color Scheme

The website uses a professional blue accent color. To change it:

Edit `tailwind.config.js`:
```javascript
colors: {
  accent: {
    // Update these color values
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    // ...
  },
},
```

### Content Updates

#### Skills
Edit `src/components/Skills.jsx` to add/remove skills in each category.

#### Projects
Edit `src/components/Projects.jsx` to add new projects or update existing ones.

#### Achievements
Edit `src/components/Achievements.jsx` to add your achievements.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure settings
6. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ...
})
```

4. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
ajay-portfolio/
├── public/
│   └── resume.pdf              # Your resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section
│   │   ├── Achievements.jsx    # Achievements section
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Education.jsx       # Education section
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── Navigation.jsx      # Navigation bar
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Resume.jsx          # Resume download section
│   │   └── Skills.jsx          # Skills grid
│   ├── hooks/
│   │   └── useInView.js        # Intersection Observer hook
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # App entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎨 Design Philosophy

- **Professional over Flashy**: Clean, credible design suitable for job applications
- **Content First**: Strong typographic hierarchy and readability
- **Minimal Animations**: Subtle, purposeful motion that doesn't distract
- **High Contrast**: Accessible color combinations for all users
- **Whitespace**: Generous spacing for clarity and focus

## 🔧 Performance Optimization

- Lazy loading for images
- Code splitting with Vite
- Minified production builds
- Optimized font loading
- Semantic HTML for better SEO

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

This is a personal portfolio project. If you find any bugs or have suggestions, feel free to open an issue.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For any questions or support, reach out via:
- Email: ajay.kushwaha@example.com
- LinkedIn: [linkedin.com/in/ajaykushwaha](https://linkedin.com/in/ajaykushwaha)
- GitHub: [github.com/ajaykushwaha](https://github.com/ajaykushwaha)

---

Built with ❤️ using React, Vite, and Tailwind CSS
