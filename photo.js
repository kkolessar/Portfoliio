// Switch views functions for opening specific galleries dynamically
function openGallery(viewId) {
    document.getElementById('selectionView').classList.remove('active-view');
    document.getElementById(viewId).classList.add('active-view');
}

function closeGallery() {
    document.getElementById('psGalleryView1').classList.remove('active-view');
    document.getElementById('psGalleryView2').classList.remove('active-view');
    document.getElementById('lrGalleryView1').classList.remove('active-view');
    document.getElementById('lrGalleryView2').classList.remove('active-view');
    document.getElementById('selectionView').classList.add('active-view');
}

// Function to switch between Photoshop pages
function switchPsPage(pageNumber) {
    document.getElementById('psGalleryView1').classList.remove('active-view');
    document.getElementById('psGalleryView2').classList.remove('active-view');
    
    if (pageNumber === 1) {
        document.getElementById('psGalleryView1').classList.add('active-view');
    } else if (pageNumber === 2) {
        document.getElementById('psGalleryView2').classList.add('active-view');
    }
}

// Function to switch between Lightroom pages
function switchLrPage(pageNumber) {
    document.getElementById('lrGalleryView1').classList.remove('active-view');
    document.getElementById('lrGalleryView2').classList.remove('active-view');
    
    if (pageNumber === 1) {
        document.getElementById('lrGalleryView1').classList.add('active-view');
    } else if (pageNumber === 2) {
        document.getElementById('lrGalleryView2').classList.add('active-view');
    }
}

// Lightbox Functions for Enriched Photo Display & Description
function openLightbox(imageSrc, title, description) {
    document.getElementById('lightboxImg').src = imageSrc;
    document.getElementById('lightboxTitle').innerText = title;
    document.getElementById('lightboxDesc').innerText = description;
    document.getElementById('photoLightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('photoLightbox').style.display = 'none';
}

// Custom Cursor Tracking Logic
const cursor = document.getElementById('customCursor');

window.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('.photo-card, .photo-bottom-bar, .gallery-card, .lightbox-close');
    if (target && cursor) {
        cursor.classList.add('hover-state');
    }
});

document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('.photo-card, .photo-bottom-bar, .gallery-card, .lightbox-close');
    if (target && cursor) {
        cursor.classList.remove('hover-state');
    }
});