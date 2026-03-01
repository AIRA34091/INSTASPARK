/**
 * InstaSpark - Professional Multi-Tool Website
 * Complete JavaScript Logic for All Tools
 */

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Copy text to clipboard with visual feedback
 */
function copyToClipboard(text, button) {
    if (!text) return;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<span>✓</span>';
        button.classList.add('btn-success');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('btn-success');
        }, 2000);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const originalText = button.innerHTML;
        button.innerHTML = '<span>✓</span>';
        setTimeout(() => button.innerHTML = originalText, 2000);
    });
}

/**
 * Show error message
 */
function showError(message) {
    const existingError = document.querySelector('.message-error');
    if (existingError) existingError.remove();
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'message message-error';
    errorDiv.innerHTML = `<span>⚠️</span> ${message}`;
    
    const container = document.querySelector('.tool-container');
    if (container) {
        container.insertBefore(errorDiv, container.firstChild);
        setTimeout(() => errorDiv.remove(), 5000);
    }
}

/**
 * Show success message
 */
function showSuccess(message) {
    const existingSuccess = document.querySelector('.message-success');
    if (existingSuccess) existingSuccess.remove();
    
    const successDiv = document.createElement('div');
    successDiv.className = 'message message-success';
    successDiv.innerHTML = `<span>✓</span> ${message}`;
    
    const container = document.querySelector('.tool-container');
    if (container) {
        container.insertBefore(successDiv, container.firstChild);
        setTimeout(() => successDiv.remove(), 3000);
    }
}

// ========================================
// INSTAGRAM BIO GENERATOR
// ========================================

const bioTemplates = {
    creative: [
        "✨ Creating magic through {niche} | Dreamer & Doer | Making the ordinary extraordinary 🎨",
        "🌟 {niche} enthusiast | Spreading creativity one post at a time | Life is my canvas 🎭",
        "💫 Passionate {niche} creator | Turning imagination into reality | Join my journey 🚀",
        "🎨 {niche} lover | Art is my escape | Creating beauty in chaos ✨",
        "✨ Living creatively through {niche} | Inspiring others to dream big 🌈"
    ],
    professional: [
        "📊 {niche} specialist | Helping brands grow | Results-driven professional 💼",
        "🎯 {niche} expert | Strategic solutions for modern businesses | Let's connect 🤝",
        "💡 {niche} consultant | Transforming ideas into success | DM for collaborations",
        "📈 Professional {niche} advisor | Building brands that matter | Book a call 👆",
        "🎓 {niche} professional | Years of expertise | Delivering excellence always ✓"
    ],
    casual: [
        "😊 Just a {niche} lover sharing my journey | Coffee addict ☕ | Dog parent 🐕",
        "🌸 {niche} enthusiast | Living life one day at a time | Good vibes only ✌️",
        "🎵 {niche} + Music = My life | Weekend explorer | Foodie at heart 🍕",
        "☕ {niche} and chill | Sarcasm is my second language | Here for a good time 😎",
        "🌿 {niche} lover | Nature enthusiast | Finding joy in little things 🦋"
    ],
    funny: [
        "🤪 Professional {niche} addict | I put the 'pro' in procrastination | Send help (or snacks)",
        "😂 {niche} enthusiast | My life is a comedy show | Laugh with me 🎭",
        "🍕 {niche} + Pizza = Happiness | Professional napper | Part-time adulting expert",
        "🤷 {niche} lover | Making mistakes so you don't have to | Certified weirdo ✌️",
        "😅 {niche} fanatic | Warning: May contain excessive sarcasm | Enter at own risk ⚠️"
    ],
    minimal: [
        "{niche} | Less is more",
        "Creating {niche} ✨",
        "{niche} enthusiast",
        "Simply {niche}",
        "{niche} | Stay curious"
    ]
};

function generateInstagramBio() {
    const niche = document.getElementById('bio-niche')?.value.trim();
    const tone = document.querySelector('input[name="bio-tone"]:checked')?.value;
    const resultsContainer = document.getElementById('bio-results');
    
    if (!niche) {
        showError('Please enter your niche or interest');
        return;
    }
    
    if (!resultsContainer) return;
    
    const templates = bioTemplates[tone] || bioTemplates.creative;
    let html = '';
    
    templates.forEach((template, index) => {
        const bio = template.replace(/{niche}/g, niche);
        html += `
            <div class="result-item fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="result-text">${bio}</div>
                <div class="result-actions">
                    <button class="btn-icon" onclick="copyToClipboard('${bio.replace(/'/g, "\\'")}', this)" title="Copy to clipboard">
                        📋
                    </button>
                </div>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
    document.getElementById('results-section')?.classList.remove('hidden');
    showSuccess('Bio generated successfully!');
}

// ========================================
// HASHTAG GENERATOR
// ========================================

const hashtagDatabase = {
    general: ['instagood', 'photooftheday', 'beautiful', 'happy', 'love', 'picoftheday', 'instadaily', 'follow', 'followme', 'like4like'],
    business: ['entrepreneur', 'business', 'success', 'marketing', 'branding', 'startup', 'smallbusiness', 'digitalmarketing', 'socialmedia', 'contentmarketing'],
    fitness: ['fitness', 'gym', 'workout', 'fit', 'health', 'training', 'bodybuilding', 'lifestyle', 'motivation', 'fitnessmotivation'],
    food: ['foodie', 'foodporn', 'instafood', 'yummy', 'delicious', 'foodphotography', 'homemade', 'cooking', 'chef', 'foodstagram'],
    travel: ['travel', 'wanderlust', 'adventure', 'travelphotography', 'explore', 'vacation', 'instatravel', 'trip', 'travelgram', 'nature'],
    fashion: ['fashion', 'style', 'ootd', 'instafashion', 'fashionista', 'fashionblogger', 'outfit', 'trendy', 'stylish', 'lookbook'],
    photography: ['photography', 'photographer', 'photo', 'photooftheday', 'portrait', 'landscape', 'canon', 'nikon', 'camera', 'art'],
    art: ['art', 'artist', 'artwork', 'drawing', 'illustration', 'design', 'sketch', 'painting', 'digitalart', 'creative'],
    music: ['music', 'musician', 'singer', 'song', 'artist', 'hiphop', 'rap', 'guitar', 'piano', 'concert'],
    tech: ['technology', 'tech', 'innovation', 'gadgets', 'coding', 'programming', 'developer', 'software', 'ai', 'digital']
};

function generateHashtags() {
    const keyword = document.getElementById('hashtag-keyword')?.value.trim().toLowerCase();
    const count = parseInt(document.getElementById('hashtag-count')?.value) || 15;
    const resultsContainer = document.getElementById('hashtag-results');
    
    if (!keyword) {
        showError('Please enter a keyword or topic');
        return;
    }
    
    if (!resultsContainer) return;
    
    // Generate hashtags
    let hashtags = [];
    
    // Add keyword-based hashtags
    hashtags.push(keyword, keyword + 's', keyword + 'lover', keyword + 'life', keyword + 'daily');
    
    // Add related hashtags from database
    Object.values(hashtagDatabase).forEach(category => {
        hashtags = hashtags.concat(category);
    });
    
    // Add random variations
    const variations = ['insta', 'daily', 'love', 'official', 'world', 'hub', 'community', 'addict'];
    variations.forEach(v => hashtags.push(keyword + v, v + keyword));
    
    // Shuffle and select
    hashtags = hashtags.sort(() => 0.5 - Math.random()).slice(0, count);
    
    // Format with #
    const formattedHashtags = hashtags.map(h => '#' + h.replace(/\s+/g, ''));
    
    // Display in groups of 5
    let html = '';
    for (let i = 0; i < formattedHashtags.length; i += 5) {
        const group = formattedHashtags.slice(i, i + 5).join(' ');
        html += `
            <div class="result-item fade-in" style="animation-delay: ${i * 0.05}s">
                <div class="result-text">${group}</div>
                <div class="result-actions">
                    <button class="btn-icon" onclick="copyToClipboard('${group.replace(/'/g, "\\'")}', this)" title="Copy to clipboard">
                        📋
                    </button>
                </div>
            </div>
        `;
    }
    
    resultsContainer.innerHTML = html;
    document.getElementById('results-section')?.classList.remove('hidden');
    showSuccess(`${count} hashtags generated!`);
}

// ========================================
// CAPTION GENERATOR
// ========================================

const captionTemplates = {
    inspirational: [
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. ✨\n\n#{keyword} #motivation #inspiration",
        "The only way to do great work is to love what you do. Passion fuels purpose! 🔥\n\n#{keyword} #passion #success",
        "Don't watch the clock; do what it does. Keep going! ⏰💪\n\n#{keyword} #hustle #grind",
        "Your limitation—it's only your imagination. Dream big! 🌟\n\n#{keyword} #dreambig #goals",
        "Push yourself, because no one else is going to do it for you. Let's go! 🚀\n\n#{keyword} #pushyourself #growth"
    ],
    funny: [
        "I'm not lazy, I'm on energy-saving mode. 😴⚡\n\n#{keyword} #relatable #mood",
        "My bed is a magical place where I suddenly remember everything I forgot to do. 🛏️✨\n\n#{keyword} #sleepy #procrastination",
        "I put the 'pro' in procrastinate. Who's with me? 😅\n\n#{keyword} #funny #relatable",
        "Adulting is soup and I am a fork. Send help! 🍴😂\n\n#{keyword} #adulting #struggle",
        "I'm not arguing, I'm just explaining why I'm right. Obviously. 🤷‍♀️\n\n#{keyword} #sassy #truth"
    ],
    promotional: [
        "🚨 NEW DROP ALERT! 🚨\n\nCheck out our latest {keyword} collection! Limited time offer - don't miss out! 🔥\n\nLink in bio! 👆\n\n#{keyword} #newarrival #sale",
        "✨ FLASH SALE ✨\n\nGet 20% off all {keyword} items! Use code: INSTA20\n\nValid for 24 hours only! ⏰\n\nShop now! Link in bio 🛍️\n\n#{keyword} #sale #discount",
        "Transform your {keyword} game with our premium collection! 💎\n\nQuality you can trust, style you'll love! ❤️\n\nDM us for orders! 📩\n\n#{keyword} #premium #quality",
        "🎉 GIVEAWAY TIME! 🎉\n\nWin amazing {keyword} prizes!\n\nTo enter:\n1️⃣ Follow us\n2️⃣ Like this post\n3️⃣ Tag 3 friends\n\nGood luck! 🍀\n\n#{keyword} #giveaway #contest",
        "Looking for the perfect {keyword}? Look no further! 🎯\n\nWe've got exactly what you need. DM us for exclusive deals! 💬\n\n#{keyword} #perfect #exclusive"
    ],
    storytelling: [
        "Three years ago, I started my {keyword} journey with nothing but a dream. Today, I'm living that dream. Here's to everyone who's supported me along the way! 🙏❤️\n\n#{keyword} #journey #grateful",
        "The story behind this {keyword} moment is one I'll never forget. Sometimes the best things happen when you least expect them. ✨\n\nWhat's your unexpected moment? Share below! 👇\n\n#{keyword} #storytime #memories",
        "From {keyword} beginner to where I am today—it's been quite the ride! 🎢\n\nNever give up on what sets your soul on fire. 🔥\n\n#{keyword} #growth #nevergiveup",
        "This {keyword} represents so much more than meets the eye. It's a symbol of perseverance, late nights, and unwavering belief. 💪\n\nWhat's your symbol of strength?\n\n#{keyword} #strength #perseverance",
        "Let me tell you about the time {keyword} changed everything... 📝\n\nSometimes one decision can alter your entire path. Choose wisely. 🌟\n\n#{keyword} #choices #lifechanging"
    ],
    engaging: [
        "Drop a 💯 if you agree!\n\n{keyword} is everything right now! Who's with me? 👇\n\n#{keyword} #agree #trending",
        "THIS or THAT? 🤔\n\nOption A: {keyword} classic style\nOption B: {keyword} modern twist\n\nComment A or B below! 👇\n\n#{keyword} #thisorthat #poll",
        "Tag someone who needs to see this! 👇\n\n{keyword} vibes for everyone! ✨\n\nDouble tap if you love it! ❤️\n\n#{keyword} #tagafriend #share",
        "Fill in the blank: {keyword} makes me feel _______! 📝\n\nI'll start: ALIVE! 🎉\n\nYour turn! Comment below! 👇\n\n#{keyword} #fillintheblank #interactive",
        "Rate this {keyword} from 1-10! 🔢\n\nI'm giving it a solid 11/10! 😍\n\nWhat's your rating? Comment below! 👇\n\n#{keyword} #rate #opinion"
    ]
};

function generateCaption() {
    const keyword = document.getElementById('caption-keyword')?.value.trim();
    const tone = document.querySelector('input[name="caption-tone"]:checked')?.value;
    const resultsContainer = document.getElementById('caption-results');
    
    if (!keyword) {
        showError('Please enter a keyword or topic');
        return;
    }
    
    if (!resultsContainer) return;
    
    const templates = captionTemplates[tone] || captionTemplates.inspirational;
    let html = '';
    
    templates.forEach((template, index) => {
        const caption = template.replace(/{keyword}/g, keyword).replace(/{Keyword}/g, keyword.charAt(0).toUpperCase() + keyword.slice(1));
        const captionEscaped = caption.replace(/'/g, "\\'").replace(/\n/g, '\\n');
        html += `
            <div class="result-item fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="result-text" style="white-space: pre-line">${caption}</div>
                <div class="result-actions">
                    <button class="btn-icon" onclick="copyToClipboard('${captionEscaped}', this)" title="Copy to clipboard">
                        📋
                    </button>
                </div>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
    document.getElementById('results-section')?.classList.remove('hidden');
    showSuccess('Captions generated successfully!');
}

// ========================================
// USERNAME GENERATOR
// ========================================

const usernamePrefixes = ['the', 'mr', 'ms', 'its', 'im', 'real', 'official', 'hey', 'hello', 'hi'];
const usernameSuffixes = ['hq', 'lab', 'co', 'inc', 'hub', 'spot', 'zone', 'base', 'pro', 'plus'];
const usernameAdjectives = ['cool', 'super', 'mega', 'ultra', 'hyper', 'epic', 'awesome', 'crazy', 'wild', 'bright'];

function generateUsername() {
    const name = document.getElementById('username-name')?.value.trim().toLowerCase();
    const style = document.querySelector('input[name="username-style"]:checked')?.value;
    const resultsContainer = document.getElementById('username-results');
    
    if (!name) {
        showError('Please enter your name or keyword');
        return;
    }
    
    if (!resultsContainer) return;
    
    const usernames = new Set();
    
    // Generate various username styles
    while (usernames.size < 10) {
        let username = '';
        const randomNum = Math.floor(Math.random() * 999) + 1;
        const prefix = usernamePrefixes[Math.floor(Math.random() * usernamePrefixes.length)];
        const suffix = usernameSuffixes[Math.floor(Math.random() * usernameSuffixes.length)];
        const adj = usernameAdjectives[Math.floor(Math.random() * usernameAdjectives.length)];
        
        switch(style) {
            case 'classic':
                username = name + randomNum;
                break;
            case 'creative':
                username = prefix + name + suffix;
                break;
            case 'professional':
                username = name + '.' + suffix + randomNum;
                break;
            case 'fun':
                username = adj + '_' + name + randomNum;
                break;
            case 'minimal':
                username = name.slice(0, 4) + randomNum;
                break;
            default:
                username = name + randomNum;
        }
        
        usernames.add(username);
    }
    
    let html = '';
    Array.from(usernames).forEach((username, index) => {
        html += `
            <div class="result-item fade-in" style="animation-delay: ${index * 0.05}s">
                <div class="result-text">@${username}</div>
                <div class="result-actions">
                    <button class="btn-icon" onclick="copyToClipboard('@${username.replace(/'/g, "\\'")}', this)" title="Copy to clipboard">
                        📋
                    </button>
                </div>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
    document.getElementById('results-section')?.classList.remove('hidden');
    showSuccess('10 usernames generated!');
}

// ========================================
// WORD & CHARACTER COUNTER
// ========================================

function countWords() {
    const text = document.getElementById('counter-text')?.value || '';
    
    // Character counts
    const charCount = text.length;
    const charNoSpaces = text.replace(/\s/g, '').length;
    
    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Sentence count
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;
    
    // Paragraph count
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
    const paragraphCount = paragraphs.length;
    
    // Reading time (average 200 words per minute)
    const readingTime = Math.ceil(wordCount / 200);
    
    // Update display
    document.getElementById('stat-chars').textContent = charCount.toLocaleString();
    document.getElementById('stat-words').textContent = wordCount.toLocaleString();
    document.getElementById('stat-sentences').textContent = sentenceCount.toLocaleString();
    document.getElementById('stat-paragraphs').textContent = paragraphCount.toLocaleString();
    document.getElementById('stat-no-spaces').textContent = charNoSpaces.toLocaleString();
    document.getElementById('stat-reading').textContent = readingTime + ' min';
}

// ========================================
// CASE CONVERTER
// ========================================

function convertCase(type) {
    const input = document.getElementById('case-input')?.value || '';
    const outputEl = document.getElementById('case-output');
    
    if (!input) {
        showError('Please enter some text to convert');
        return;
    }
    
    let result = '';
    
    switch(type) {
        case 'upper':
            result = input.toUpperCase();
            break;
        case 'lower':
            result = input.toLowerCase();
            break;
        case 'title':
            result = input.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
            break;
        case 'sentence':
            result = input.toLowerCase().replace(/(^")|\.\s+./g, match => match.toUpperCase());
            break;
        case 'camel':
            result = input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
            break;
        case 'snake':
            result = input.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
            break;
        case 'kebab':
            result = input.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            break;
        case 'alternating':
            result = input.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
            break;
    }
    
    outputEl.value = result;
    showSuccess('Text converted successfully!');
}

function copyCaseOutput() {
    const output = document.getElementById('case-output')?.value;
    if (output) {
        navigator.clipboard.writeText(output);
        showSuccess('Copied to clipboard!');
    }
}

// ========================================
// PASSWORD GENERATOR
// ========================================

function generatePassword() {
    const length = parseInt(document.getElementById('password-length')?.value) || 16;
    const includeUpper = document.getElementById('include-upper')?.checked ?? true;
    const includeLower = document.getElementById('include-lower')?.checked ?? true;
    const includeNumbers = document.getElementById('include-numbers')?.checked ?? true;
    const includeSymbols = document.getElementById('include-symbols')?.checked ?? true;
    
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let chars = '';
    if (includeUpper) chars += upperChars;
    if (includeLower) chars += lowerChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;
    
    if (chars === '') {
        showError('Please select at least one character type');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById('password-output').value = password;
    updatePasswordStrength(password);
}

function updatePasswordStrength(password) {
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    strengthFill.className = 'strength-fill';
    
    if (strength <= 2) {
        strengthFill.classList.add('weak');
        strengthText.textContent = 'Weak Password';
        strengthText.className = 'strength-text weak';
    } else if (strength <= 4) {
        strengthFill.classList.add('medium');
        strengthText.textContent = 'Medium Strength';
        strengthText.className = 'strength-text medium';
    } else {
        strengthFill.classList.add('strong');
        strengthText.textContent = 'Strong Password';
        strengthText.className = 'strength-text strong';
    }
}

function copyPassword() {
    const password = document.getElementById('password-output')?.value;
    if (password) {
        navigator.clipboard.writeText(password);
        showSuccess('Password copied to clipboard!');
    }
}

// ========================================
// QR CODE GENERATOR
// ========================================

function generateQR() {
    const text = document.getElementById('qr-text')?.value.trim();
    const qrContainer = document.getElementById('qrcode');
    
    if (!text) {
        showError('Please enter text or URL for QR code');
        return;
    }
    
    if (!qrContainer) return;
    
    // Clear previous QR code
    qrContainer.innerHTML = '';
    
    // Generate new QR code using QRCode.js
    try {
        new QRCode(qrContainer, {
            text: text,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
        
        document.getElementById('qr-download')?.classList.remove('hidden');
        showSuccess('QR Code generated successfully!');
    } catch (error) {
        showError('Failed to generate QR code. Please try again.');
    }
}

function downloadQR() {
    const qrCanvas = document.querySelector('#qrcode canvas');
    if (qrCanvas) {
        const link = document.createElement('a');
        link.download = 'instaspark-qr-code.png';
        link.href = qrCanvas.toDataURL('image/png');
        link.click();
        showSuccess('QR Code downloaded!');
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize range sliders
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        const valueDisplay = input.parentElement?.querySelector('.range-value');
        if (valueDisplay) {
            valueDisplay.textContent = input.value;
            input.addEventListener('input', () => {
                valueDisplay.textContent = input.value;
            });
        }
    });
    
    // Auto-resize textareas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.max(this.scrollHeight, 120) + 'px';
        });
    });
});
