# Image Setup Guide

This guide explains how to add your profile photo and achievement images to your portfolio website.

## 📸 Required Images

### 1. Profile Photo
- **Location**: `/public/profile.jpg`
- **Recommended Size**: 400x400 pixels (square)
- **Format**: JPG, PNG, or WebP
- **File Size**: Under 500KB (optimize for web)

### 2. Achievement Images
Place these in `/public/achievements/` folder:

- `hackathon.jpg` - National One Health Hackathon image
- `research.jpg` - Research publication/work image
- `academic.jpg` - Academic excellence/graduation image
- `innovation.jpg` - HealthTech innovation project image

**Recommended Specs:**
- Size: 800x600 pixels (4:3 ratio)
- Format: JPG or WebP
- File Size: Under 300KB each

## 🎨 Image Preparation Tips

### For Profile Photo:
1. Use a professional, high-quality headshot
2. Plain or blurred background works best
3. Good lighting and clear face visibility
4. Crop to square format (1:1 ratio)
5. Optimize using tools like TinyPNG or Squoosh

**Free Online Tools:**
- **Remove Background**: remove.bg
- **Compress**: tinypng.com, squoosh.app
- **Resize**: resizeimage.net, iloveimg.com
- **Crop to Square**: cropimagesonline.com

### For Achievement Images:
1. Use relevant photos from the events/achievements
2. High quality, well-lit images
3. Can include certificates, event photos, or related imagery
4. Maintain 4:3 aspect ratio for consistency

**Image Ideas:**
- **Hackathon**: Event photo, team photo, presentation moment, certificate
- **Research**: Lab work, publication cover, research poster
- **Academic**: Graduation photo, award ceremony, university campus
- **Innovation**: Product screenshot, demo, development process

## 📂 Folder Structure

```
public/
├── profile.jpg              ← Your profile photo
├── resume.pdf              ← Your resume
└── achievements/           ← Create this folder
    ├── hackathon.jpg       ← Hackathon image
    ├── research.jpg        ← Research image
    ├── academic.jpg        ← Academic image
    └── innovation.jpg      ← Innovation image
```

## 🚀 Step-by-Step Setup

### Step 1: Create Folders
```bash
cd ajay-portfolio/public
mkdir achievements
```

### Step 2: Add Profile Photo
1. Prepare your profile photo (400x400px)
2. Name it `profile.jpg`
3. Place it in `/public/` folder

### Step 3: Add Achievement Images
1. Prepare 4 achievement images (800x600px each)
2. Name them exactly as listed above
3. Place them in `/public/achievements/` folder

### Step 4: Verify
Run the development server and check:
```bash
npm run dev
```
- Profile photo appears in Hero section
- Achievement cards show images as backgrounds
- All images load without errors

## 🎨 Fallback Behavior

**Don't have images yet?** No problem!

The website has built-in fallbacks:

### Profile Photo Fallback:
If `profile.jpg` is missing, it shows:
- Your initials "AK" in a gradient circle
- Looks professional and clean

### Achievement Images Fallback:
If achievement images are missing, they show:
- Beautiful gradient backgrounds
- Each card has a unique color scheme
- Still looks great!

**You can deploy without images and add them later.**

## 🖼️ Alternative: Use Placeholder Services

While preparing your actual images, use placeholders:

### For Profile:
```
https://ui-avatars.com/api/?name=Ajay+Kushwaha&size=400&background=0369a1&color=fff
```

### For Achievements:
```
https://images.unsplash.com/photo-[id]?w=800&h=600
```

Download these and use as temporary placeholders.

## 📝 Recommended Free Image Sources

If you need stock images temporarily:

**Professional Photos:**
- Unsplash.com (free high-quality photos)
- Pexels.com (free stock photos)
- Pixabay.com (free images)

**Search Terms:**
- "medical research laboratory"
- "healthcare technology"
- "data science coding"
- "academic graduation"
- "team presentation"
- "innovation technology"

## 🔄 Updating Images Later

To update images after deployment:

1. Replace the image files in `/public/`
2. Keep the same filenames
3. Rebuild and redeploy:
```bash
npm run build
# Then deploy to your hosting
```

## ⚡ Image Optimization

Before adding images, optimize them:

### Online Tools:
1. **TinyPNG** (tinypng.com)
   - Compress JPG/PNG by 50-80%
   - Maintains quality

2. **Squoosh** (squoosh.app)
   - Google's image optimizer
   - Convert to WebP for better compression

3. **ImageOptim** (imageoptim.com/mac)
   - Mac app for batch optimization

### Command Line (Advanced):
```bash
# Install ImageMagick
brew install imagemagick  # Mac
sudo apt install imagemagick  # Linux

# Resize and optimize
convert profile.png -resize 400x400^ -gravity center -extent 400x400 -quality 85 profile.jpg

# Batch process achievements
for img in achievements/*.jpg; do
  convert "$img" -resize 800x600^ -gravity center -extent 800x600 -quality 85 "optimized_$img"
done
```

## 🎯 Best Practices

1. **Consistency**: Use similar style/tone across all images
2. **Quality**: Better to have no image than a low-quality one
3. **Relevance**: Images should be authentic and relevant
4. **Optimization**: Always compress before uploading
5. **Format**: JPG for photos, PNG for graphics/logos
6. **Naming**: Use exact filenames as specified
7. **Testing**: Test locally before deploying

## 🆘 Troubleshooting

### Image Not Showing?

**Check:**
1. ✅ File is in correct folder (`/public/`)
2. ✅ Filename matches exactly (case-sensitive)
3. ✅ File format is JPG, PNG, or WebP
4. ✅ Image isn't corrupted (try opening it)
5. ✅ Clear browser cache (Ctrl+Shift+R)

### Image Too Large?

**Solution:**
```bash
# Resize using online tool or ImageMagick
convert large-image.jpg -resize 800x600 -quality 85 optimized-image.jpg
```

### Image Looks Blurry?

**Solution:**
- Use higher resolution source image
- Ensure 2x size for retina displays
- Profile: 800x800px → display at 400x400px
- Achievements: 1600x1200px → display at 800x600px

## 📱 Mobile Considerations

Images are automatically optimized for mobile:
- Responsive sizing
- Lazy loading
- Proper aspect ratios maintained

## ✅ Final Checklist

Before deploying:
- [ ] Profile photo added and looks good
- [ ] All 4 achievement images added
- [ ] Images are optimized (small file sizes)
- [ ] Tested on development server
- [ ] Images load quickly
- [ ] Mobile view looks good
- [ ] No broken image icons

---

**Remember**: You can always deploy first and add/update images later. The website looks great even with the gradient fallbacks!
