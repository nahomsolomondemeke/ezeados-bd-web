# 🌸 Friendship Birthday Website 🌸

A beautiful, static birthday website for your best friend - created with love and memories.

## 🎂 Features

- **Dreamy Background**: Soft photo watermark with "NA ZI" text overlay
- **Photo Gallery**: 10+ customizable categories with unlimited photos
- **"Open When..." Letters**: Heartfelt letters that reveal on click
- **Pastel Theme**: Pink, lavender, and cream colors with handwritten fonts
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **100% Editable**: All content managed through one simple file

## 📁 Project Structure

```
friendship-birthday-website/
├── index.html          # Main HTML structure
├── style.css           # All styling and design
├── content.js          # ALL EDITABLE CONTENT HERE
├── app.js              # Website functionality
├── images/             # Your photo collection
│   └── README.md       # Photo instructions
└── README.md           # This file
```

## 🚀 Quick Start

1. **Open the website**: Double-click `index.html` to open in your browser
2. **Add your photos**: Place your images in the `images/` folder
3. **Customize content**: Edit `content.js` to add your photos, categories, and letters

## ✏️ How to Edit Everything

### 📸 Add/Remove Watermark Photos

Edit the `watermarkPhotos` array in `content.js`:

```javascript
const watermarkPhotos = [
    'images/your-favorite-photo1.jpg',
    'images/your-favorite-photo2.jpg',
    'images/your-favorite-photo3.jpg'
];
```

### 🎨 Customize "NA ZI" Text Watermark

Edit the `textWatermark` object in `content.js`:

```javascript
const textWatermark = {
    text: 'NA ZI',           // Change the text
    fontSize: '8rem',        // Adjust size
    opacity: 0.08,          // Adjust transparency (0.0-1.0)
    color: '#d4a5d4',       // Change color
    rotation: -45           // Adjust rotation angle
};
```

### 🖼️ Add/Remove Photo Categories

Edit the `photoCategories` array in `content.js`:

```javascript
const photoCategories = [
    {
        title: 'Your Category Name',
        photos: [
            'images/photo1.jpg',
            'images/photo2.jpg',
            'images/photo3.jpg'
        ]
    },
    // Add more categories...
];
```

**To add a new category**: Simply add a new object to the array
**To add photos**: Add filenames to the `photos` array
**To remove photos**: Remove filenames from the `photos` array

### 💌 Add/Remove "Open When..." Letters

Edit the `openWhenLetters` array in `content.js`:

```javascript
const openWhenLetters = [
    {
        title: 'Open when you miss me',
        content: [
            'Your first line of text here...',
            'Your second line of text here...',
            'Add as many lines as you want...'
        ]
    },
    // Add more letters...
];
```

**Each line** in the `content` array becomes a separate paragraph.

## 📱 Photo Guidelines

### For Background Watermarks:
- Use 5-10 high-quality photos
- Soft, dreamy, or romantic in nature
- Good contrast for text visibility
- Recommended size: 1920x1080px or similar

### For Category Photos:
- Any size works (automatically resized)
- JPG, PNG, GIF, or WEBP formats
- Keep files under 2MB for faster loading
- Use descriptive names for easy organization

## 🎨 Design Features

- **Handwritten Font**: Dancing Script for personal touch
- **Pastel Colors**: Pink (#d63384), Lavender (#a855a7), Cream (#fff5f7)
- **Smooth Animations**: Fade-in effects and hover interactions
- **Rounded Design**: Soft corners and gentle shadows
- **Mobile Responsive**: Adapts beautifully to all screen sizes

## 🌟 Special Effects

- **Dynamic Background**: Random watermark photo on each page load
- **Text Watermark**: Subtle "NA ZI" overlay behind all content
- **Hover Effects**: Photos lift up on hover
- **Smooth Scrolling**: Letters scroll into view when opened
- **Lazy Loading**: Images load as needed for better performance

## 💝 Emotional Touch

The website is designed to feel:
- **Cozy and intimate**: Like a digital scrapbook
- **Heartfelt and personal**: With handwritten fonts and soft colors
- **Warm and inviting**: Gentle animations and thoughtful interactions
- **Timeless**: Classic design that won't feel dated

## 🎯 Perfect For

- Best friend's birthday (February 12th)
- Anniversary celebrations
- Friendship appreciation
- Long-distance friendship gifts
- Memory preservation

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks required
- **Beginner-friendly**: Simple, well-commented code
- **Offline Compatible**: Works without internet connection
- **Cross-browser**: Works on all modern browsers
- **SEO Friendly**: Proper semantic HTML structure

## 📞 Need Help?

1. **Photos not showing?**: Check that filenames in `content.js` match actual files in `images/` folder
2. **Text watermark issues?**: Adjust opacity and color in `textWatermark` object
3. **Layout problems?**: Ensure all photos have reasonable file sizes
4. **Mobile issues?**: The design is fully responsive - test by resizing your browser

## 🎈 Final Touch

This website is a gift of memories, created with love for your best friend. Every photo, every word, every design choice was made to celebrate your beautiful friendship.

Happy Birthday to your dearest friend! 🎂💕

---

*Created with ❤️ for celebrating friendship*
