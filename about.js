{ id: 'about', title: 'About Channel', type: 'about', content: `
    <div class="mii-channel-container">
        <!-- Left Sidebar Icons -->
        <div class="mii-sidebar left">
            <button class="mii-circle-btn" onclick="alert('Welcome to my Mii Plaza!')"><span style="font-size:1.2rem;">🏠</span></button>
            <button class="mii-circle-btn" onclick="alert('Status: Coding & Creating!')"><span style="font-size:1.2rem;">😊</span></button>
            <button class="mii-circle-btn dashed-ring" onclick="alert('More stats coming soon!')"></button>
            <button class="mii-circle-btn help-icon" onclick="alert('Click around to explore my profile!')">?</button>
        </div>

        <!-- Center Stage: Mii Plaza Bio Card -->
        <div class="mii-stage-center">
            <div class="wii-mii-profile-card">
                <div class="mii-avatar-box">
                    <!-- Replace with your Mii image or avatar icon -->
                    <div class="mii-avatar-icon">👤</div>
                </div>
                <div class="mii-info-box">
                    <h2>About Me</h2>
                    <p class="mii-creator-name">Creator: <strong>Your Name</strong></p>
                    <p class="mii-bio-text">Welcome to my digital space! I love building retro web apps, capturing nostalgic aesthetics, and coding fun interactive projects.</p>
                    <div class="mii-badge-row">
                        <span class="wii-tag">HTML/JS</span>
                        <span class="wii-tag">Wii Retro</span>
                        <span class="wii-tag">Developer</span>
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

        <!-- Bottom Wii Menu Bar -->
        <div class="wii-bottom-toolbar">
            <button class="wii-tool-btn" onclick="alert('Settings')">⚙️</button>
            <button class="wii-tool-btn" onclick="alert('Files')">📁</button>
            <button class="wii-menu-pill-btn" onclick="closeModal()">Wii Menu</button>
            <button class="wii-tool-btn" onclick="alert('Notes')">💬</button>
            <button class="wii-tool-btn" onclick="alert('Sound')">📢</button>
        </div>
    </div>
` }