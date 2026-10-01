// --- Custom Cursor Movement and Hover Logic ---
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('customCursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

document.addEventListener('mouseover', (e) => {
    const target = e.target;
    // Identify elements that should trigger the custom hover hand
    if (target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.classList.contains('news-row-btn') || 
        target.classList.contains('news-bottom-bar') ||
        target.classList.contains('modal-nav-btn')) { // Include gallery arrows
        document.getElementById('customCursor')?.classList.add('hover-state');
    }
});

document.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.classList.contains('news-row-btn') || 
        target.classList.contains('news-bottom-bar') ||
        target.classList.contains('modal-nav-btn')) {
        document.getElementById('customCursor')?.classList.remove('hover-state');
    }
});

// --- News Modal Gallery Functions ---

// Variable to track the current image index in a gallery
let currentGalleryIndex = 0;
// Variable to store the array of images for the currently open gallery
let currentImageArray = [];

/**
 * Opens the news modal, displaying either text or an image gallery.
 * @param {string} title - The title of the section.
 * @param {string|Array} content - Either a text description OR an array of image filenames.
 */
function openNewsSection(title, content) {
    const modalTitle = document.getElementById('newsModalTitle');
    const modalDesc = document.getElementById('newsModalDesc');
    const modal = document.getElementById('newsModal');

    modalTitle.innerText = title;
    
    // Reset state
    modalDesc.innerHTML = ''; // Clear previous content
    modalDesc.style.display = 'block'; // Ensure description area is visible
    
    // Hide gallery navigation by default
    let existingNav = document.querySelector('.modal-gallery-nav');
    if(existingNav) existingNav.remove();

    // Check if content is an array (meaning it's a gallery)
    if (Array.isArray(content) && content.length > 0) {
        currentImageArray = content; // Store the images
        currentGalleryIndex = 0; // Start at the first image

// Create the main image display inside openNewsSection
        const imgDisplay = document.createElement('img');
        imgDisplay.id = 'galleryDisplayImg';
        imgDisplay.src = `images/${currentImageArray[currentGalleryIndex]}`;
        imgDisplay.style.width = '100%';
        imgDisplay.style.maxHeight = '350px';
        imgDisplay.style.objectFit = 'contain';
        imgDisplay.style.borderRadius = '6px';
        imgDisplay.style.marginBottom = '10px';
        
        // --- NEW: Make image clickable for detail view ---
        imgDisplay.style.cursor = 'pointer';
        imgDisplay.title = "Click to view in full detail";
        imgDisplay.onclick = function() {
            openEocDetail(`images/${currentImageArray[currentGalleryIndex]}`);
        };
        // -------------------------------------------------

        modalDesc.appendChild(imgDisplay);

        // Create Navigation buttons if more than one image
        if (currentImageArray.length > 1) {
            const navContainer = document.createElement('div');
            navContainer.className = 'modal-gallery-nav';
            navContainer.style.display = 'flex';
            navContainer.style.justifyContent = 'space-between';
            navContainer.style.marginTop = '10px';

            const prevBtn = document.createElement('button');
            prevBtn.innerHTML = '&#9664; Prev'; // Left Arrow
            prevBtn.className = 'modal-nav-btn';
            prevBtn.onclick = prevImage;
            prevBtn.style.padding = '5px 15px';
            prevBtn.style.background = '#f0cce2';
            prevBtn.style.border = 'none';
            prevBtn.style.borderRadius = '4px';
            prevBtn.style.cursor = 'none !important'; // Keep custom cursor

            const nextBtn = document.createElement('button');
            nextBtn.innerHTML = 'Next &#9654;'; // Right Arrow
            nextBtn.className = 'modal-nav-btn';
            nextBtn.onclick = nextImage;
            nextBtn.style.padding = '5px 15px';
            nextBtn.style.background = '#f0cce2';
            nextBtn.style.border = 'none';
            nextBtn.style.borderRadius = '4px';
            nextBtn.style.cursor = 'none !important';

            navContainer.appendChild(prevBtn);
            navContainer.appendChild(nextBtn);
            modalDesc.appendChild(navContainer);
        }
        
        // Add a counter (e.g., 1 of 3)
        const counter = document.createElement('div');
        counter.id = 'galleryCounter';
        counter.style.fontSize = '12px';
        counter.style.color = '#784865';
        counter.style.marginTop = '5px';
        counter.innerText = `Image ${currentGalleryIndex + 1} of ${currentImageArray.length}`;
        modalDesc.appendChild(counter);

    } else if (typeof content === 'string') {
        // It's a regular text description
        modalDesc.innerHTML = content;
    }

    modal.style.display = 'flex';
}

function closeNewsModal() {
    document.getElementById('newsModal').style.display = 'none';
    // Reset gallery state on close
    currentImageArray = [];
    currentGalleryIndex = 0;
}

// Function to go to the next image in the gallery
function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % currentImageArray.length; // Loop back to 0 at end
    updateGalleryView();
}

// Function to go to the previous image in the gallery
function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + currentImageArray.length) % currentImageArray.length; // Loop back to last at start
    updateGalleryView();
}

// Helper to update the image source and counter without rebuilding the whole modal
function updateGalleryView() {
    const img = document.getElementById('galleryDisplayImg');
    const counter = document.getElementById('galleryCounter');
    
    if (img) {
        img.src = `images/${currentImageArray[currentGalleryIndex]}`;
    }
    if (counter) {
        counter.innerText = `Image ${currentGalleryIndex + 1} of ${currentImageArray.length}`;
    }
}

// --- Detailed Lightbox Functions ---
function openEocDetail(imageSrc) {
    const lightbox = document.getElementById('eocDetailLightbox');
    const detailImg = document.getElementById('eocDetailImg');
    if (lightbox && detailImg) {
        detailImg.src = imageSrc;
        lightbox.style.display = 'flex';
    }
}

function closeEocDetail() {
    const lightbox = document.getElementById('eocDetailLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}