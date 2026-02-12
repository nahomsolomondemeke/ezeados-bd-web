# Images Folder

This folder contains all the photos for your friendship birthday website.

## How to Add Photos:

1. **Add your photos to this folder** - Simply copy and paste your image files into this `images` folder
2. **Supported formats**: JPG, JPEG, PNG, GIF, WEBP
3. **Naming convention**: Use descriptive names (e.g., `day-we-met-1.jpg`, `funny-moment.jpg`)

## Photo Categories Setup:

After adding photos to this folder, update the `content.js` file to include your photo filenames:

```javascript
{
    title: 'Your Category Name',
    photos: [
        'images/your-photo-1.jpg',
        'images/your-photo-2.jpg',
        'images/your-photo-3.jpg'
    ]
}
```

## Background Watermark Photos:

Add 5-10 of your favorite photos to use as background watermarks. These should be:
- High quality
- Soft, dreamy, or romantic in nature
- Good contrast for the text watermark to be visible

Example watermark photos:
- `images/watermark1.jpg`
- `images/watermark2.jpg`
- etc.

## Tips:

- Keep image files reasonably sized (under 2MB each) for faster loading
- Use consistent aspect ratios within categories for better visual appeal
- Consider using a photo editing app to add soft filters for a dreamy look
- Make sure you have permission to use all photos

## Current Expected Files:

Based on the default content.js configuration, the following photo files are expected:

### Background Watermarks:
- images/watermark1.jpg
- images/watermark2.jpg  
- images/watermark3.jpg
- images/watermark4.jpg
- images/watermark5.jpg

### Category Photos:
- images/day-we-met-1.jpg, day-we-met-2.jpg, day-we-met-3.jpg
- images/first-photos-1.jpg through first-photos-4.jpg
- images/chaos-1.jpg through chaos-5.jpg
- images/late-night-1.jpg through late-night-3.jpg
- images/funny-1.jpg through funny-6.jpg
- images/sad-1.jpg, sad-2.jpg
- images/celebration-1.jpg through celebration-4.jpg
- images/small-moments-1.jpg through small-moments-3.jpg
- images/inside-jokes-1.jpg through inside-jokes-4.jpg
- images/favorites-1.jpg through favorites-5.jpg

Replace these with your actual photos, or update the filenames in content.js to match your photo names.
