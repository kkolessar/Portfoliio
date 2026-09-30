const channels = [
    {
        id: 'about',
        content: `
            <!-- Left Sidebar Icons -->
            <div class="mii-sidebar left">
                <button class="mii-circle-btn" onclick="openModal('Education', 'I have a Bachelor of Science in Digital Marketing, a Bachelor of Arts in Advertising Art and a Masters of Science in Graphic Information Technology.', 'images/edu.jpg')">📜</button>
                <button class="mii-circle-btn" onclick="openModal('Hobbies', 'My current favorite hobby is reading! I am currently reading Fall Shook Up by Piper Sheldon', 'images/book.jpg')">📖</button>
                <button class="mii-circle-btn" onclick="openModal('My Cat', 'I have a cat named Crunchwrap (yes, like the Taco Bell item).', 'images/cat.jpg')">🐈</button>
                <button class="mii-circle-btn help-icon" onclick="openModal('Current Binge Show', 'My  favorite current show is Gilmore Girls. (Team Jess)', 'images/gg.jpg')">📽</button>
            </div>

            <!-- Center Stage: Plaza Bio Card -->
            <div class="mii-stage-center">
                <div class="wii-mii-profile-card">
                    <div class="mii-avatar-box" style="cursor: pointer;" onclick="openModal('My Profile', 'Here is a closer look at my profile picture!', 'images/profile.jpg')">
                        <img src="images/profile.jpg" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
                    </div>
                    <div class="mii-info-box">
                        <h2>About Me</h2>
                        <p class="mii-creator-name">Creator: <strong>Kristen Kolessar</strong></p>
                        <p class="mii-bio-text">Hi! My name is K! I am a graphic designer, UX/UI Developer, and Marketing Specialist. I enjoy art and photography and have a huge passion for creating engaging digital experiences. Click the buttons to learn more about me!</p>
                        <div class="mii-badge-row">
                            <span class="wii-tag">Designer</span>
                            <span class="wii-tag">Developer</span>
                            <span class="wii-tag">Professor</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Sidebar Icons -->
            <div class="mii-sidebar right">
                <button class="mii-pill-btn" onclick="openConnectModal()"><img src="images/ln.png" alt="LinkedIn" style="width: 32px; height: 32px; object-fit: contain; pointer-events: none;"></button>
                <button class="mii-pill-btn" onclick="openContactModal()">✉️</button>
                <button class="mii-pill-btn" onclick="openModal('Current Job/Volunteer Opportunities', 'I currently work as an adjunct professor teaching digital marketing and graphic design. I am also a volunteer Social Media Manager for a non-profit organization.', 'images/work.jpg')">💼</button>
            </div>
            <!-- Bottom Wii Menu Toolbar -->
            <div class="wii-bottom-toolbar">
                <button class="wii-menu-pill-btn" onclick="window.location.href='index.html'">Menu</button>
            </div>
        `
    }
];

function loadChannel(id) {
    const channel = channels.find(c => c.id === id);
    if (channel) {
        document.getElementById('channelContainer').innerHTML = channel.content;
    }
}

// --- Custom Cursor Movement and Hover Logic ---
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('customCursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        document.getElementById('customCursor')?.classList.add('hover-state');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        document.getElementById('customCursor')?.classList.remove('hover-state');
    }
});

window.onload = function() {
    loadChannel('about');
};

// --- Modal Popup Control Functions ---
function openModal(title, description, imageSrc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    
    const imgElement = document.getElementById('modalImage');
    const placeholder = document.getElementById('modalImagePlaceholder');
    const imageBox = document.querySelector('.mii-modal-image-box');
    
    if (imageSrc && imageSrc.trim() !== '') {
        imgElement.src = imageSrc;
        imgElement.style.display = 'block';
        placeholder.style.display = 'none';
        if (imageBox) imageBox.style.display = 'flex'; // Ensures the box shows for images
    } else {
        imgElement.src = '';
        imgElement.style.display = 'none';
        placeholder.style.display = 'none';
        if (imageBox) imageBox.style.display = 'none'; // Hides the box if there's no image
    }
    
    document.getElementById('miiModal').style.display = 'flex';
}
function openConnectModal() {
    document.getElementById('modalTitle').innerText = "Connect With Me";
    document.getElementById('modalDescription').innerHTML = `
        <p style="color:#cc3382; font-family:'Varela Round'; margin-bottom:20px; font-size:15px;">
           <a href="https://www.linkedin.com/in/kristen-kolessar-3351261bb/" target="_blank" style="color:#cc3382; font-weight:bold; text-decoration:underline;">Visit my LinkedIn Profile</a>
        </p>
    `;
    
    const imgElement = document.getElementById('modalImage');
    const placeholder = document.getElementById('modalImagePlaceholder');
    imgElement.src = '';
    imgElement.style.display = 'none';
    placeholder.style.display = 'none';
    
    document.getElementById('miiModal').style.display = 'flex';
}

function openContactModal() {
    document.getElementById('modalTitle').innerText = "Get in Touch";
    document.getElementById('modalDescription').innerHTML = `
        <p style="color:#cc3382; font-family:'Varela Round'; margin-bottom:20px; font-size:15px;">
            Want to send an email? Reach out to me directly at:
        </p>
        <div style="background:#fff0f6; padding:12px 20px; border-radius:12px; border:2px dashed #cc3382; display:inline-block; margin-bottom:15px;">
            <a href="mailto:kolessarkristen@gmail.com" style="color:#cc3382; font-weight:bold; font-size:16px; text-decoration:none;">kolessarkristen@gmail.com</a>
        </div>
    `;
    
    const imgElement = document.getElementById('modalImage');
    const placeholder = document.getElementById('modalImagePlaceholder');
    imgElement.src = '';
    imgElement.style.display = 'none';
    placeholder.style.display = 'none'; 
    
    document.getElementById('miiModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('miiModal').style.display = 'none';
}