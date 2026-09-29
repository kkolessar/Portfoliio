const channels = [
    {
        id: 'about',
        content: `
            <!-- Left Sidebar Icons -->
            <div class="mii-sidebar left">
                <button class="mii-circle-btn" onclick="alert('Welcome to my Plaza!')">🏠</button>
                <button class="mii-circle-btn" onclick="alert('Status: Coding & Creating!')">😊</button>
                <button class="mii-circle-btn dashed-ring" onclick="alert('More stats coming soon!')"></button>
                <button class="mii-circle-btn help-icon" onclick="alert('Click around to explore my profile!')">?</button>
            </div>

            <!-- Center Stage: Plaza Bio Card -->
            <div class="mii-stage-center">
                <div class="wii-mii-profile-card">
                    <div class="mii-avatar-box">
                        <div class="mii-avatar-icon">👤</div>
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
                <button class="mii-pill-btn" onclick="window.open('https://github.com', '_blank')">📂</button>
                <button class="mii-pill-btn" onclick="alert('Send me a message!')">✉️</button>
                <button class="mii-whistle-btn" onclick="alert('📢 Peep!')">📢</button>
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