// --- Channel Data Configuration Page 1---
const channelPages = [
    [
        { id: 'disc', title: '', type: 'disc', content: `
            <div class="wii-photo-intro">
                <div class="photo-header"><h2 style="color:#cc3382;">Game Channel</h2></div>
                <div class="photo-corkboard">
                    <div class="polaroid-row"><div class="polaroid"><img src="images/disc.png" alt="Disc"></div></div>
                    <p class="photo-tagline" style="color:#cc3382;">This is currently under development.</p>
                </div>
                <div class="photo-footer">
                    <button class="wii-btn" onclick="closeModal()">Menu</button>
                    <button class="wii-btn primary" onclick="window.location.href='game.html'">Start</button>
                </div>
            </div>` 
        },
        { id: 'mii', title: 'All About Mii', type: 'mii', content: `
            <div class="wii-photo-intro">
                <div class="photo-header"><h2 style="color:#cc3382;">About Mii Channel</h2></div>
                <div class="photo-corkboard">
                    <div class="polaroid-row"><div class="polaroid"><img src="images/avatar.png" alt="Mii"></div></div>
                    <p class="photo-tagline" style="color:#cc3382;">Get to know mii!</p>
                </div>
                <div class="photo-footer">
                    <button class="wii-btn" onclick="closeModal()">Menu</button>
                    <button class="wii-btn primary" onclick="window.location.href='about.html'">Start</button>
                </div>
            </div>` 
        },
        { id: 'photo', title: 'Photo Channel', type: 'photo', content: `
            <div class="wii-photo-intro">
                <div class="photo-header">
                    <h2 style="color:#cc3382;">Photo Channel</h2>
                </div>
                <div class="photo-corkboard">
                    <div class="polaroid-row">
                        <div class="polaroid p-left"><img src="images/photo-banner.png" alt="Cat"></div>
                    </div>
                    <p class="photo-tagline" style="color:#cc3382;">Photos of my finished projects.</p>
                </div>
                <div class="photo-footer">
                    <button class="wii-btn" onclick="closeModal()">Menu</button>
                    <button class="wii-btn primary" onclick="window.location.href='photo.html'">Start</button>
                </div>
            </div>
        ` },
        { id: 'shop', title: 'Shop Channel', type: 'shop', content: `
            <div class="wii-photo-intro">
                <div class="photo-header"><h2 style="color:#cc3382;">Shop Channel</h2></div>
                <div class="photo-corkboard">
                    <div class="polaroid-row"><div class="polaroid"><img src="images/shop.png" alt="Shop"></div></div>
                    <p class="photo-tagline" style="color:#cc3382;">This channel is under development.</p>
                </div>
                <div class="photo-footer">
                    <button class="wii-btn" onclick="closeModal()">Menu</button>
                    <button class="wii-btn primary" onclick="window.location.href='shop.html'">Start</button>
                </div>
            </div>` 
        },
        { id: 'forecast', title: 'Forecast Channel', type: 'forecast', content: `
            <div class="wii-photo-intro">
                <div class="photo-header"><h2 style="color:#cc3382;">Forecast Channel</h2></div>
                <div class="photo-corkboard">
                    <div class="polaroid-row"><div class="polaroid"><img src="images/forecast.png" alt="Forecast"></div></div>
                    <p class="photo-tagline" style="color:#cc3382;">This channel is under development.Current projects and updates.</p>
                </div>
                <div class="photo-footer">
                    <button class="wii-btn" onclick="closeModal()">Menu</button>
                    <button class="wii-btn primary" onclick="window.location.href='forecast.html'">Start</button>
                </div>
            </div>` 
        },
        { id: 'news', title: 'News Channel', type: 'news', content: `
            <div class="wii-photo-intro">
                <div class="photo-header"><h2 style="color:#cc3382;">News Channel</h2></div>
                <div class="photo-corkboard">
                    <div class="polaroid-row"><div class="polaroid"><img src="images/news.png" alt="News"></div></div>
                    <p class="photo-tagline" style="color:#cc3382;">Global Headlines & network updates.</p>
                </div>
                <div class="photo-footer">
                    <button class="wii-btn" onclick="closeModal()">Menu</button>
                    <button class="wii-btn primary" onclick="window.location.href='news.html'">Start</button>
                </div>
            </div>` 
        },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' }
    ],
    // Page 2 Channels
    [
        { id: 'extras', title: 'Extras', type: 'extras', content: `
            <div class="wii-photo-intro">
                <div class="photo-header"><h2 style="color:#cc3382;">Extras</h2></div>
                <div class="photo-corkboard">
                    <div class="polaroid-row"><div class="polaroid"><img src="images/avatar.png" alt="Extras"></div></div>
                    <p class="photo-tagline" style="color:#cc3382;">Bonus developer tools and settings.</p>
                </div>
                <div class="photo-footer">
                    <button class="wii-btn" onclick="closeModal()">Menu</button>
                    <button class="wii-btn primary" onclick="window.location.href='extras.html'">Start</button>
                </div>
            </div>` 
        },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' },
        { id: 'empty', title: '', type: 'empty' }
    ]
];

let currentPage = 0;

// Render Channel Grid
function renderChannels() {
    const grid = document.getElementById('channelsGrid');
    grid.innerHTML = '';
    
    channelPages[currentPage].forEach(channel => {
        const div = document.createElement('div');
        
        if (channel.type === 'empty') {
            div.className = 'menu-channel empty';
            div.innerHTML = '<div class="channel-watermark"> </div>';
        } else {
            div.className = `menu-channel ${channel.type}`;
            let innerHTML = `<div class="channel-inner">`;
            
            if (channel.type === 'disc') {
                innerHTML += `<div style="width:60px; height:60px; border-radius:50%; background:linear-gradient(135deg, #e0e0e0, #f5f5f5); border:4px solid #fff; box-shadow:0 2px 5px rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center;"><div style="width:20px; height:20px; border-radius:50%; background:#ccc; border:2px solid #fff;"></div></div>`;
            } else if (channel.type === 'mii') {
                innerHTML += `<div style="font-size:24px;"></div>`;
            } else if (channel.type === 'shop') {
                innerHTML += `<div style="font-size:24px; color:#00a4e4;"> </div>`;
            } else if (channel.type === 'forecast') {
                innerHTML += `<div style="font-size:24px;"></div>`;
            } else if (channel.type === 'news') {
                innerHTML += `<div style="font-size:24px;"></div>`;
            } else if (channel.type === 'photo') {
                innerHTML += `<div style="font-size:24px;"> </div>`;
            } else if (channel.type === 'internet') {
                innerHTML += `<div style="font-size:24px;">🌐</div>`;
            } else {
                innerHTML += `<div style="font-size:24px;">⭐</div>`;
            }

            if (channel.title) {
                innerHTML += `<div class="channel-title">${channel.title}</div>`;
            }
            innerHTML += `</div>`;
            div.innerHTML = innerHTML;

            div.onclick = () => {
                playClickSound();
                openModal(channel.content);
            };
            div.onmouseenter = () => playHoverSound();
        }
        grid.appendChild(div);
    });
}

function switchPage(direction) {
    playClickSound();
    currentPage = (currentPage + direction + channelPages.length) % channelPages.length;
    renderChannels();
}

// --- Modals ---
function openModal(htmlContent) {
    document.getElementById('modalBody').innerHTML = htmlContent;
    document.getElementById('channelModal').classList.add('active');
}

function closeModal() {
    playClickSound();
    document.getElementById('channelModal').classList.remove('active');
}

function openSystemOptions() {
    playClickSound();
    openModal(`<h2 style="color:#555; margin-bottom:10px;">System Settings</h2><p style="color:#666; margin-bottom:15px;">Configure system audio, sensors, and data management.</p><button onclick="alert('Settings saved!')" style="padding:8px 16px; background:#555; color:white; border:none; border-radius:6px; cursor:pointer;">System Update</button>`);
}

function openMessageBoard() {
    playClickSound();
    openModal(`<h2 style="color:#00a4e4; margin-bottom:10px;">Message Board</h2><p style="color:#666; margin-bottom:15px;">Today: No new messages recorded.</p><textarea placeholder="Leave a memo..." style="width:100%; height:80px; padding:8px; border-radius:6px; border:1px solid #ccc; font-family:'Varela Round';"></textarea>`);
}

// --- Custom Cursor Tracking & Hover States ---
const cursor = document.getElementById('customCursor');

window.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

document.addEventListener('mouseover', (e) => {
    const target = e.target.closest('button, .menu-channel:not(.empty), .clock-container, .sd-card-icon, .audio-toggle-btn');
    if (target && cursor) {
        cursor.classList.add('hover-state');
    }
});

document.addEventListener('mouseout', (e) => {
    const target = e.target.closest('button, .menu-channel:not(.empty), .clock-container, .sd-card-icon, .audio-toggle-btn');
    if (target && cursor) {
        cursor.classList.remove('hover-state');
    }
});

// --- Real-time Clock & Date Widget ---
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    
    document.getElementById('menuTime').innerHTML = `${hours}:${minutes} <span class="ampm">${ampm}</span>`;
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[now.getDay()];
    const month = now.getMonth() + 1;
    const dateNum = now.getDate();
    document.getElementById('menuDate').innerText = `${dayName} ${month}/${dateNum}`;
}
setInterval(updateClock, 1000);
updateClock();

// --- Web Audio API (Sound FX & Background Music Generator) ---
let audioCtx = null;
let audioEnabled = false;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function toggleAudio() {
    initAudio();
    audioEnabled = !audioEnabled;
    const btn = document.getElementById('audioToggle');
    if (audioEnabled) {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        btn.innerText = '🔊 Sound On';
        startBGM();
    } else {
        btn.innerText = '🔇 Sound Off';
        stopBGM();
    }
}

function playHoverSound() {
    if (!audioEnabled || !audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.08);
        
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    } catch(e) {}
}

function playClickSound() {
    if (!audioEnabled || !audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(220, audioCtx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    } catch(e) {}
}

let bgmInterval = null;
function startBGM() {
    const chords = [
        [261.63, 329.63, 392.00], 
        [220.00, 261.63, 329.63], 
        [174.61, 220.00, 261.63], 
        [196.00, 246.94, 293.66]  
    ];
    let index = 0;
    
    if (bgmInterval) clearInterval(bgmInterval);
    bgmInterval = setInterval(() => {
        if (!audioEnabled || !audioCtx) return;
        const chord = chords[index % chords.length];
        index++;
        
        chord.forEach(freq => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            
            gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 1.8);
        });
    }, 2000);
}

function stopBGM() {
    if (bgmInterval) {
        clearInterval(bgmInterval);
        bgmInterval = null;
    }
}

window.onload = () => {
    renderChannels();
};

function openMessageBoard() {
    playClickSound();
    openModal(`
        <div style="text-align:center; padding: 10px;">
            <h2 style="color:#cc3382; margin-bottom:15px;">Get in Touch</h2>
            <p style="color:#cc3382; font-family:'Varela Round'; margin-bottom:20px; font-size:15px;">
                Want to send an email? Reach out to me directly at:
            </p>
            <div style="background:#fff0f6; padding:12px 20px; border-radius:12px; border:2px dashed #cc3382; display:inline-block; margin-bottom:25px;">
                <a href="mailto:kolessarkristen@gmail.com" style="color:#cc3382; font-weight:bold; font-size:16px; text-decoration:none;">kolessarkristen@gmail.com</a>
            </div>
            <div>
                <button class="wii-btn" onclick="closeModal()">Close</button>
            </div>
        </div>
    `);
}