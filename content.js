// ===== WEBSITE CONTENT - EDIT EVERYTHING HERE =====
// This file contains all the content for your friendship birthday website
// Edit this file to customize photos, categories, letters, and watermarks

// ===== BACKGROUND WATERMARK PHOTOS =====
// Add photo filenames here. These will be randomly selected as background watermarks
const watermarkPhotos = [
    'images/watermark1.jpg',
    'images/watermark2.jpg', 
    'images/watermark3.jpg',
    'images/watermark4.jpg',
    'images/watermark5.jpg'
];

// ===== TEXT WATERMARK SETTINGS =====
const textWatermark = {
    text: 'NA ZI',           // The watermark text
    fontSize: '6rem',        // Font size (use CSS units like rem, px, em)
    opacity: 0.06,          // Opacity (0.0 to 1.0, lower is more transparent)
    color: '#64748b',       // Text color (hex, rgb, or CSS color names)
    rotation: -45,          // Rotation angle in degrees
    count: 15,              // Number of watermarks to generate
    spread: 'full'          // How to spread: 'full' (entire page) or 'section' (within sections)
};

// ===== PHOTO CATEGORIES =====
// Add as many categories as you want. Each category can have 3 images and 3 videos.
// To add media, just add the filename and optional caption to the appropriate array.
// For videos: use { src: 'filename.mp4', caption: 'Your caption here' } format
// For images: use { src: 'filename.jpg', caption: 'Your caption here' } format
const photoCategories = [
    {
        title: 'The beginning of our brotherhood',
       images: [
            { src: 'images/day-we-met-1.jpg', caption: 'Remember when u asked me "who is ur bestfriend?" and I said you and now u have become my brother' },
            { src: 'images/day-we-met-2.jpg', caption: 'When we started meeting frequently after u came back from the US' },
            { src: 'images/day-we-met-3.jpg', caption: 'how zesty i looked, the end of grade 11' }
        ],
       videos: [
            { src: 'images/day-we-met-video1.mp4', caption: 'one of the days you came to 4 kilo and we went to get a haircut for me #KEROBIBEX' },
            { src: 'images/day-we-met-video2.mp4', caption: 'first night at FBE' },
            { src: 'images/day-we-met-video3.mp4', caption: 'first day at ur dorm, the day NAZI began for real, the enkbkabe u gave me W' }
        ]
    },
    {
        title: 'Freshman memories',
        videos: [
            { src: 'images/first-photos-video1.mp4', caption: 'Out of time, last day of freshman' },
            { src: 'images/first-photos-video2.mp4', caption: 'Swag moments' },
            { src: 'images/first-photos-video3.mp4', caption: 'The day you stayed at dorm when i had emerging test benegataw' }
        ]
    },
    {
        title: 'Random Chaos Days',
        images: [
            { src: 'images/chaos-1.jpg', caption: 'two sides of NAZI' },
            { src: 'images/chaos-2.jpg', caption: '4 kilo spot' },
            { src: 'images/chaos-3.jpg', caption: 'nap after having fun with u' }
        ],
        videos: [
            { src: 'images/chaos-video1.mp4', caption: 'Ezexos Signature dance' },
            { src: 'images/chaos-video2.mp4', caption: 'Zesty Moments' },
            { src: 'images/chaos-video3.mp4', caption: 'Pure unfiltered brotherhood chaos' }
        ]
    },
    {
        title: 'The Funniest Memories',
        images: [
            { src: 'images/funny-1.jpg', caption: 'kehuala sitegn new mimeslew lol' },
            { src: 'images/funny-2.jpg', caption: 'ere side eye' },
            { src: 'images/funny-3.jpg', caption: '' }
        ],
        videos: [
            { src: 'images/funny-video1.mp4', caption: 'Enkisikasewoch hulu dance nachew' },
            { src: 'images/funny-video2.mp4', caption: 'Bibexos Got talent' },
            { src: 'images/funny-video3.mp4', caption: 'Me mekbeting moments' }
        ]
    },
    {
        title: 'Random Selfies and Snaps',
        images: [
            { src: 'images/sad-1.jpg', caption: 'Random selfie moment' },
            { src: 'images/sad-2.jpg', caption: 'Casual snap together' },
            { src: 'images/sad-3.jpg', caption: 'Just being ourselves' }
        ],
        videos: [
            { src: 'images/sad-video1.mp4', caption: 'Random video moment' },
            { src: 'images/sad-video2.mp4', caption: 'Spontaneous capture' },
            { src: 'images/sad-video3.mp4', caption: 'This is so funny lol' }
        ]
    },
    {
        title: 'Favorite Meet Up days',
        images: [
            { src: 'images/celebration-1.jpg', caption: 'Gerji walks' },
            { src: 'images/celebration-2.jpg', caption: 'Bole to Goro walk marathon' },
            { src: 'images/celebration-3.jpg', caption: 'Stranger Things Finale at Century' }
        ],
        videos: [
            { src: 'images/celebration-video1.mp4', caption: 'First summer meet up at Akoo' },
            { src: 'images/celebration-video2.mp4', caption: 'Yebabe mrkat' },
            { src: 'images/celebration-video3.mp4', caption: 'W day at boraa' }
        ]
    },
    {
        title: 'AICC memories',
        images: [
            { src: 'images/small-moments-1.jpg', caption: 'favoriteAICCpic1' },
            { src: 'images/small-moments-2.jpg', caption: 'favoriteAICCpic2' },
            { src: 'images/small-moments-3.jpg', caption: 'favoriteAICCpic3' }
        ],
        videos: [
            { src: 'images/small-moments-video1.mp4', caption: 'The best summer i ever had #thesummeriturnedatAICC' },
            { src: 'images/small-moments-video2.mp4', caption: 'Tayegn tayegn ye awdamet chisu, smoke smoke nigga' },
            { src: 'images/small-moments-video3.mp4', caption: 'jerusalema' }
        ]
    },
    {
        title: 'Favorite pictures and Videos',
        images: [
            { src: 'images/inside-jokes-1.jpg', caption: 'Our favorite picture together' },
            { src: 'images/inside-jokes-2.jpg', caption: 'WWWWWWWWWWWW' },
            { src: 'images/inside-jokes-3.jpg', caption: 'when we were chuches eventho u still are' }
        ],
        videos: [
            { src: 'images/inside-jokes-video1.mp4', caption: 'Sleepover at your house' },
            { src: 'images/inside-jokes-video2.mp4', caption: 'Main Campus Kennedy Moment' },
            { src: 'images/inside-jokes-video3.mp4', caption: 'Our music soundtrack' }
        ]
    },
    {
        title: 'Sad but important days',
        images: [
            { src: 'images/ffavorites-1.jpg', caption: 'life was sad the first week without u' },
            { src: 'images/ffavorites-2.jpg', caption: 'weyne my cheguara yezin ken' },
            { src: 'images/ffavorites-3.jpg', caption: 'Enatshnigna' }
        ],
        videos: [
            { src: 'images/ffavorites-video1.mp4', caption: 'so special' },
            { src: 'images/ffavorites-video2.mp4', caption: 'mtsm' },
            { src: 'images/ffavorites-video3.mp4', caption: 'AICC sad moment' }
        ]
    },
    {
        title: 'Special Memory',
        videos: [
            { src: 'images/special-video.MOV', caption: 'Nothing can beat this edit' }
        ]
    },
    {
        title: 'kiremt vid calls',
        videos: [
            { src: 'images/favorites-video1.mp4', caption: 'Kiremt video call diaries' },
            { src: 'images/favorites-video2.mp4', caption: 'ferche lelit lol' },
            { src: 'images/favorites-video3.mp4', caption: 'Virtual brotherhood in full effect' }
        ]
    }
];

// ===== SPECIAL MEMOIR =====
// Add your special memoir content here
const openWhenLetters = [
    {
        title: 'A birthday letter...',
        content: [
            'Hello Ezexo,',
            '',
            'On your 19th birthday, I wanted to write you this letter as a little memoir—something you can always come back to and remember how loved you are.',
            '',
            'First of all, I need you to know how incredibly special you are to me. You are truly the best gift God has ever given me in the form of a friend. A friend I had been wishing for, for years. And then, in Grade 11, God finally gave me *you*.',
            '',
            'I know I\'m a weird person—you probably noticed that very early on—but you still loved me like a brother anyway. You cared for me, you stood by me, and you showed me that I am valued. You taught me what real patience looks like, even when I wasn\'t always the best friend to you. You showed me real brotherhood, and for that, I am endlessly thankful—to you and to God.',
            '',
            'Ezexo, so many of my favorite memories in life are with you. The dorm days, our late-night talks, movie nights, secrets we shared, and all those little "us" things that only we understand. Those moments are memories I\'ll cherish forever.',
            '',
            'The sadness I felt when school ended last year still surprises me. But even then, distance didn\'t weaken us—it strengthened us. Summer break couldn\'t stop us from meeting; instead, it gave us even more memories. Gerji, AICC… those moments are etched into my heart. Playing PlayStation, me whining and crying every time I lost—poor Bibex 😭—yet you always stayed patient with me.',
            '',
            'Thank you, Ezexo, for giving me memories I cherish most. Thank you for giving me a brother, for your pure soul, and for giving me "Ezeadoo."',
            '',
            'On your birthday, I wish I am the friend you always wished for. I hope you\'re always happy—especially knowing you have me as your friend, because your happiness is my happiness too. May all your wishes come true. May this year be one where you succeed, smile more, and live your life to your fullest.',
            '',
            'You will always be my brother, and I will forever be yours.',
            '',
            'Happy Birthday 🤍',
            '',
            'With all my love,',
            'Bibex',
            'February 12, 2026'
        ]
    }
];

// ===== FAVORITE MUSIC PLAYLIST =====
// Add your favorite music files here. Use .mp3, .wav, or other audio formats.
const favoritePlaylist = [
    { src: 'music/song1.mp3', title: 'Snooze', artist: 'SZA', thumbnail: 'music/song1.webp' },
    { src: 'music/song2.mp3', title: 'Girlfriend', artist: 'Ruger', thumbnail: 'music/song2.webp' },
    { src: 'music/song3.mp3', title: 'Cheri Cheri lady', artist: 'Modern Talking', thumbnail: 'music/song3.webp' },
    { src: 'music/song4.mp3', title: 'i saw the holiday smoke', artist: 'yegna', thumbnail: 'music/song4.webp' },
    { src: 'music/song5.mp3', title: 'out of time', artist: 'The weeknd', thumbnail: 'music/song5.webp' }
];

// ===== EXPORT CONTENT FOR USE IN APP.JS =====
// Don't edit below this line - this makes the content available to the website
window.WebsiteContent = {
    watermarkPhotos,
    textWatermark,
    photoCategories,
    openWhenLetters,
    favoritePlaylist
};
