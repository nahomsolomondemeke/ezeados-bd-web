# 🎂 Friendship Birthday Website - GitHub Pages Setup

## 🚀 Quick Setup Guide

### 1. Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `friendship-birthday-website`
4. Set to Public (important for GitHub Pages)
5. Click "Create repository"

### 2. Upload Your Files
**Option A: GitHub Web Interface**
- Click "uploading an existing file"
- Drag and drop these files/folders:
  ```
  index.html
  style.css
  app.js
  content.js
  images/ (entire folder)
  music/ (entire folder)
  README.md
  ```

**Option B: Git Command Line**
```bash
git init
git add .
git commit -m "Initial birthday website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/friendship-birthday-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `main`
5. Click **Save**

### 4. Your Website Goes Live! 🎉
**URL**: `https://YOUR_USERNAME.github.io/friendship-birthday-website/`

Wait 2-5 minutes for initial deployment, then visit your URL!

## 📱 Testing Your Site
- **Desktop**: Works on all browsers
- **Mobile**: Responsive design tested
- **Features**: All photos, videos, music, letters working

## 🔄 Updating Your Website
Any changes you make:
1. Edit files locally
2. Commit and push to GitHub
3. Website updates automatically within minutes

## 🎯 Pro Tips
- **Keep file structure** exactly as shown
- **Test locally** before pushing
- **Use relative paths** (already done correctly)
- **Large files**: GitHub supports up to 100MB per file

## 🆘 Troubleshooting
- **404 errors**: Check file paths in content.js
- **Images not loading**: Verify files are in images/ folder
- **Music not playing**: Check music/ folder and file names
- **Styling issues**: CSS should load automatically

## 📞 Need Help?
- GitHub Pages documentation: https://docs.github.com/en/pages
- File an issue: Create issue in your repository

---

**Your friendship birthday website will be live and shareable with the world! 🌍**
