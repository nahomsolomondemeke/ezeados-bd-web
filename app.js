// ===== MAIN JAVASCRIPT APPLICATION =====
// This file handles all the dynamic functionality of the website
// It uses the content from content.js to render everything dynamically

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== INITIALIZE WEBSITE =====
function initializeWebsite() {
    // Hide all sections initially
    document.querySelector('.photo-gallery').style.display = 'none';
    document.querySelector('.letters-section').style.display = 'none';
    document.querySelector('.music-playlist-section').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    
    // Load background watermark
    loadBackgroundWatermark();
    
    // Setup multiple text watermarks
    setupMultipleTextWatermarks();
    
    // Load photo categories
    loadPhotoCategories();
    
    // Load letters section
    loadLettersSection();
    
    // Load music playlist
    loadMusicPlaylist();
    
    // Setup popup functionality
    setupPopup();
    
    // Add fade-in animation to elements
    addFadeInAnimations();
}

// ===== BACKGROUND WATERMARK =====
function loadBackgroundWatermark() {
    const backgroundElement = document.getElementById('backgroundWatermark');
    const watermarkPhotos = window.WebsiteContent.watermarkPhotos;
    
    if (watermarkPhotos && watermarkPhotos.length > 0) {
        // Select a random photo from the array
        const randomPhoto = watermarkPhotos[Math.floor(Math.random() * watermarkPhotos.length)];
        backgroundElement.style.backgroundImage = `url(${randomPhoto})`;
    }
}

// ===== MULTIPLE TEXT WATERMARKS =====
function setupMultipleTextWatermarks() {
    const watermarkSettings = window.WebsiteContent.textWatermark;
    
    if (!watermarkSettings) return;
    
    // Remove old single watermark if it exists
    const oldWatermark = document.getElementById('textWatermark');
    if (oldWatermark) {
        oldWatermark.remove();
    }
    
    // Create watermark container
    const watermarkContainer = document.createElement('div');
    watermarkContainer.className = 'watermark-container';
    
    // Generate multiple watermarks
    const count = watermarkSettings.count || 15;
    
    for (let i = 0; i < count; i++) {
        const watermark = createSingleWatermark(watermarkSettings, i);
        watermarkContainer.appendChild(watermark);
    }
    
    // Add container to body
    document.body.appendChild(watermarkContainer);
}

// ===== CREATE SINGLE WATERMARK =====
function createSingleWatermark(settings, index) {
    const watermark = document.createElement('div');
    watermark.className = 'watermark-item';
    watermark.textContent = settings.text || 'NA ZI';
    
    // Random positioning
    const positions = generateRandomPositions(index);
    watermark.style.left = positions.x;
    watermark.style.top = positions.y;
    
    // Random rotation variations
    const rotationVariation = settings.rotation + (Math.random() - 0.5) * 30;
    watermark.style.transform = `rotate(${rotationVariation}deg)`;
    
    // Apply settings
    watermark.style.fontSize = settings.fontSize || '6rem';
    watermark.style.opacity = settings.opacity || 0.06;
    watermark.style.color = settings.color || '#64748b';
    watermark.style.letterSpacing = '1rem';
    
    // Random animation delay for staggered appearance
    watermark.style.animationDelay = `${index * 0.1}s`;
    watermark.classList.add('watermark-fade-in');
    
    return watermark;
}

// ===== GENERATE RANDOM POSITIONS =====
function generateRandomPositions(index) {
    const positions = [
        { x: '10%', y: '15%' },
        { x: '85%', y: '20%' },
        { x: '25%', y: '40%' },
        { x: '70%', y: '35%' },
        { x: '15%', y: '60%' },
        { x: '80%', y: '70%' },
        { x: '35%', y: '80%' },
        { x: '60%', y: '85%' },
        { x: '5%', y: '90%' },
        { x: '90%', y: '10%' },
        { x: '45%', y: '25%' },
        { x: '55%', y: '55%' },
        { x: '20%', y: '75%' },
        { x: '75%', y: '45%' },
        { x: '40%', y: '10%' }
    ];
    
    // Use predefined positions or random if index is out of range
    if (index < positions.length) {
        return positions[index];
    } else {
        return {
            x: Math.random() * 80 + 10 + '%',
            y: Math.random() * 80 + 10 + '%'
        };
    }
}

// ===== PHOTO CATEGORIES =====
function loadPhotoCategories() {
    const categoriesContainer = document.getElementById('categoriesContainer');
    const categories = window.WebsiteContent.photoCategories;
    
    if (!categories || categories.length === 0) {
        categoriesContainer.innerHTML = '<p class="no-content">No photo categories yet. Add some in content.js!</p>';
        return;
    }
    
    // Filter out categories that have no images AND no videos
    const categoriesWithContent = categories.filter(category => 
        (category.images && category.images.length > 0) || 
        (category.videos && category.videos.length > 0)
    );
    
    if (categoriesWithContent.length === 0) {
        categoriesContainer.innerHTML = '<p class="no-content">No photo categories with content yet. Add some photos or videos in content.js!</p>';
        return;
    }
    
    categoriesContainer.innerHTML = '';
    
    categoriesWithContent.forEach((category, index) => {
        const categoryCard = createCategoryCard(category, index);
        categoriesContainer.appendChild(categoryCard);
    });
}

// ===== CREATE CATEGORY CARD =====
function createCategoryCard(category, index) {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = category.title;
    
    const mediaGrid = document.createElement('div');
    mediaGrid.className = 'media-grid';
    
    // Add images section
    if (category.images && category.images.length > 0) {
        const imagesSection = document.createElement('div');
        imagesSection.className = 'media-section';
        
        const imagesTitle = document.createElement('h4');
        imagesTitle.className = 'media-section-title';
        imagesTitle.textContent = 'Photos';
        
        const imagesGrid = document.createElement('div');
        imagesGrid.className = 'photos-grid';
        
        category.images.forEach((imageData, imageIndex) => {
            const photoItem = createPhotoItem(imageData, imageIndex);
            imagesGrid.appendChild(photoItem);
        });
        
        imagesSection.appendChild(imagesTitle);
        imagesSection.appendChild(imagesGrid);
        mediaGrid.appendChild(imagesSection);
    }
    
    // Add videos section
    if (category.videos && category.videos.length > 0) {
        const videosSection = document.createElement('div');
        videosSection.className = 'media-section';
        
        const videosTitle = document.createElement('h4');
        videosTitle.className = 'media-section-title';
        videosTitle.textContent = 'Videos';
        
        const videosGrid = document.createElement('div');
        videosGrid.className = 'videos-grid';
        
        category.videos.forEach((videoData, videoIndex) => {
            const videoItem = createVideoItem(videoData, videoIndex);
            videosGrid.appendChild(videoItem);
        });
        
        videosSection.appendChild(videosTitle);
        videosSection.appendChild(videosGrid);
        mediaGrid.appendChild(videosSection);
    }
    
    // Show message if no media
    if ((!category.images || category.images.length === 0) && (!category.videos || category.videos.length === 0)) {
        mediaGrid.innerHTML = '<p class="no-media">No photos or videos in this category yet.</p>';
    }
    
    card.appendChild(title);
    card.appendChild(mediaGrid);
    
    return card;
}

// ===== CREATE VIDEO ITEM =====
function createVideoItem(videoData, index) {
    const videoItem = document.createElement('div');
    videoItem.className = 'video-item';
    videoItem.style.animationDelay = `${index * 0.05}s`;
    
    // Handle both string (old format) and object (new format) video data
    const videoSrc = typeof videoData === 'string' ? videoData : videoData.src;
    const videoCaption = typeof videoData === 'object' ? videoData.caption : '';
    
    const video = document.createElement('video');
    video.src = videoSrc;
    video.alt = 'Memory video';
    video.controls = true;
    video.muted = true;
    video.loading = 'lazy';
    video.playsInline = true;
    
    // Add error handling for missing videos
    video.onerror = function() {
        this.style.display = 'none';
        const errorMsg = document.createElement('div');
        errorMsg.className = 'media-error';
        errorMsg.textContent = 'Video not found';
        videoItem.appendChild(errorMsg);
    };
    
    videoItem.appendChild(video);
    
    // Add click handler for popup
    videoItem.addEventListener('click', function() {
        openPopup(videoSrc, videoCaption, 'video');
    });
    
    // Add caption if it exists
    if (videoCaption) {
        const caption = document.createElement('div');
        caption.className = 'media-caption';
        caption.textContent = videoCaption;
        videoItem.appendChild(caption);
    }
    
    return videoItem;
}

// ===== CREATE PHOTO ITEM =====
function createPhotoItem(imageData, index) {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.style.animationDelay = `${index * 0.05}s`;
    
    // Handle both string (old format) and object (new format) image data
    const imageSrc = typeof imageData === 'string' ? imageData : imageData.src;
    const imageCaption = typeof imageData === 'object' ? imageData.caption : '';
    
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Memory photo';
    img.loading = 'lazy';
    
    // Handle image orientation correction
    img.onload = function() {
        // Check if image is in portrait mode and rotate it correctly
        if (this.naturalHeight > this.naturalWidth) {
            this.style.transform = 'rotate(-90deg)';
            this.style.width = 'auto';
            this.style.height = '200px';
            this.style.margin = '0 auto'; // Center the rotated image
        }
    };
    
    // Add error handling for missing images
    img.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNUZGIi8+CjxwYXRoIGQ9Ik04NSA3NUgxMTVWMTI1SDg1Vjc1WiIgZmlsbD0iI0Q0QTVENCIvPgo8cGF0aCBkPSJNMTAwIDkwSDEwMFYxMTBIMTAwVjkwWiIgZmlsbD0iI0YzRjVGRiIvPgo8dGV4dCB4PSIxMDAiIHk9IjE0MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0Q0QTVENCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0Ij5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPgo=';
        this.alt = 'Image not found';
    };
    
    photoItem.appendChild(img);
    
    // Add click handler for popup
    photoItem.addEventListener('click', function() {
        openPopup(imageSrc, imageCaption, 'image');
    });
    
    // Add caption if it exists
    if (imageCaption) {
        const caption = document.createElement('div');
        caption.className = 'media-caption';
        caption.textContent = imageCaption;
        photoItem.appendChild(caption);
    }
    
    return photoItem;
}

// ===== LETTERS SECTION =====
function loadLettersSection() {
    const lettersButtons = document.getElementById('lettersButtons');
    const letters = window.WebsiteContent.openWhenLetters;
    
    if (!letters || letters.length === 0) {
        lettersButtons.innerHTML = '<p class="no-content">No letters yet. Add some in content.js!</p>';
        return;
    }
    
    lettersButtons.innerHTML = '';
    
    letters.forEach((letter, index) => {
        const button = createLetterButton(letter, index);
        lettersButtons.appendChild(button);
    });
}

// ===== CREATE LETTER BUTTON =====
function createLetterButton(letter, index) {
    const button = document.createElement('button');
    button.className = 'letter-button';
    button.textContent = letter.title;
    button.style.animationDelay = `${index * 0.1}s`;
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        showLetter(letter, this);
    });
    
    // Add touch events for mobile
    button.addEventListener('touchstart', function(e) {
        e.preventDefault();
        showLetter(letter, this);
    });
    
    return button;
}

// ===== SHOW LETTER CONTENT =====
function showLetter(letter, clickedButton) {
    const letterContent = document.getElementById('letterContent');
    const allButtons = document.querySelectorAll('.letter-button');
    
    // Remove active class from all buttons
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    clickedButton.classList.add('active');
    
    // Clear previous content
    letterContent.innerHTML = '';
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'letter-close-button';
    closeButton.textContent = '✕ Close';
    closeButton.addEventListener('click', function() {
        closeLetter();
    });
    
    // Create letter title
    const title = document.createElement('h3');
    title.textContent = letter.title;
    
    // Add close button and title to content
    letterContent.appendChild(closeButton);
    letterContent.appendChild(title);
    
    // Create letter paragraphs
    letter.content.forEach((line, index) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = line;
        paragraph.style.animationDelay = `${index * 0.1}s`;
        letterContent.appendChild(paragraph);
    });
    
    // Show letter content
    letterContent.classList.remove('hidden');
    
    // Scroll to letter content
    setTimeout(() => {
        letterContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// ===== CLOSE LETTER FUNCTION =====
function closeLetter() {
    const letterContent = document.getElementById('letterContent');
    const allButtons = document.querySelectorAll('.letter-button');
    
    // Hide letter content
    letterContent.classList.add('hidden');
    
    // Remove active class from all buttons
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // Scroll back to letters section
    setTimeout(() => {
        document.querySelector('.letters-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// ===== FADE IN ANIMATIONS =====
function addFadeInAnimations() {
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all category cards and letter buttons
    document.querySelectorAll('.category-card, .letter-button').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ===== CONFETTI FIREWORKS =====
function createConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#eab308', '#f59e0b', '#ffeb3b', '#ff9800'];
    
    // Mobile-optimized particle count
    const particleCount = window.innerWidth <= 480 ? 75 : 150;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 50,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 3 + 2,
            life: 1
        });
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.3; // gravity
            particle.life -= 0.01;
            
            if (particle.life > 0) {
                ctx.globalAlpha = particle.life;
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            }
        });
        
        // Remove dead particles
        particles.forEach((particle, index) => {
            if (particle.life <= 0) {
                particles.splice(index, 1);
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Remove canvas after animation
    setTimeout(() => {
        if (canvas) {
            canvas.remove();
        }
    }, 5000);
}

// ===== REVEAL ALL FUNCTION =====
function revealAll() {
    // Hide all sections first
    document.querySelector('.photo-gallery').style.display = 'none';
    document.querySelector('.letters-section').style.display = 'none';
    document.querySelector('.music-playlist-section').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    
    // Create celebration message
    const celebration = document.createElement('div');
    celebration.className = 'celebration-reveal';
    celebration.innerHTML = `
        <div class="celebration-content">
            <h1>🎉 Happy Birthday Ezexo! 🎂</h1>
            <button class="celebration-close" onclick="hideCelebration()">Continue Exploring</button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(celebration);
    
    // Start confetti fireworks
    createConfetti();
    
    // Show all content with animation
    setTimeout(() => {
        document.querySelector('.photo-gallery').style.display = 'block';
        document.querySelector('.letters-section').style.display = 'block';
        document.querySelector('.music-playlist-section').style.display = 'block';
        document.querySelector('.footer').style.display = 'block';
    }, 1000);
}

// ===== HIDE CELEBRATION =====
function hideCelebration() {
    const celebration = document.querySelector('.celebration-reveal');
    if (celebration) {
        celebration.remove();
    }
}
// Function to shuffle array (for random watermark selection)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ===== POPUP FUNCTIONALITY =====
function setupPopup() {
    const popup = document.getElementById('mediaPopup');
    const closeBtn = popup.querySelector('.popup-close');
    
    // Close popup when clicking close button
    closeBtn.addEventListener('click', closePopup);
    
    // Close popup when clicking outside content
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
}

function openPopup(src, caption, type) {
    const popup = document.getElementById('mediaPopup');
    const mediaContainer = popup.querySelector('.popup-media-container');
    const captionElement = popup.querySelector('.popup-caption');
    
    // Clear previous content
    mediaContainer.innerHTML = '';
    
    // Create media element based on type
    let mediaElement;
    if (type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.src = src;
        mediaElement.controls = true;
        mediaElement.autoplay = true;
        mediaElement.playsInline = true;
    } else {
        mediaElement = document.createElement('img');
        mediaElement.src = src;
        mediaElement.alt = caption || 'Memory photo';
        
        // Handle orientation for popup images
        mediaElement.onload = function() {
            // Check if image is in portrait mode and rotate correctly
            if (this.naturalHeight > this.naturalWidth) {
                this.style.transform = 'rotate(-90deg)';
                this.style.maxWidth = '90vh';
                this.style.maxHeight = '90vw';
            } else {
                this.style.maxWidth = '90vw';
                this.style.maxHeight = '90vh';
            }
        };
    }
    
    mediaContainer.appendChild(mediaElement);
    
    // Set caption
    captionElement.textContent = caption || '';
    
    // Show popup
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePopup() {
    const popup = document.getElementById('mediaPopup');
    const mediaContainer = popup.querySelector('.popup-media-container');
    
    // Stop video if playing
    const video = mediaContainer.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
    
    // Hide popup
    popup.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
    
    // Clear content after a short delay to prevent flash
    setTimeout(() => {
        mediaContainer.innerHTML = '';
    }, 300);
}

// Function to handle window resize for responsive watermark
window.addEventListener('resize', function() {
    // Adjust text watermark size for mobile
    const textWatermark = document.getElementById('textWatermark');
    if (window.innerWidth < 768) {
        textWatermark.style.fontSize = '4rem';
    } else if (window.innerWidth < 480) {
        textWatermark.style.fontSize = '3rem';
    } else {
        const watermarkSettings = window.WebsiteContent.textWatermark;
        textWatermark.style.fontSize = watermarkSettings.fontSize || '8rem';
    }
});

// ===== MUSIC PLAYLIST SECTION =====
function loadMusicPlaylist() {
    const playlistContainer = document.getElementById('playlistContainer');
    const playlist = window.WebsiteContent.favoritePlaylist;
    
    if (!playlist || playlist.length === 0) {
        playlistContainer.innerHTML = '<p class="no-content">No music in playlist yet. Add some songs in content.js!</p>';
        return;
    }
    
    playlistContainer.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const songElement = createSongElement(song, index);
        playlistContainer.appendChild(songElement);
    });
}

// ===== CREATE SONG ELEMENT =====
function createSongElement(song, index) {
    const songDiv = document.createElement('div');
    songDiv.className = 'song-item';
    songDiv.style.animationDelay = `${index * 0.1}s`;
    
    // Create thumbnail container
    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.className = 'song-thumbnail';
    
    const thumbnail = document.createElement('img');
    thumbnail.src = song.thumbnail || 'music/default-album.jpg';
    thumbnail.alt = `${song.title} album art`;
    thumbnail.className = 'album-art';
    
    // Handle thumbnail loading error
    thumbnail.onerror = function() {
        this.src = 'music/default-album.jpg';
    };
    
    thumbnailContainer.appendChild(thumbnail);
    
    const songInfo = document.createElement('div');
    songInfo.className = 'song-info';
    songInfo.innerHTML = `
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
    `;
    
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = song.src;
    audio.className = 'audio-player';
    
    songDiv.appendChild(thumbnailContainer);
    songDiv.appendChild(songInfo);
    songDiv.appendChild(audio);
    
    return songDiv;
}
