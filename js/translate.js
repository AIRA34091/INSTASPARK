// Google Translate Widget for InstaSpark
// This file adds translation capability to all pages

(function() {
    // Check if Google Translate is already loaded
    if (typeof google !== 'undefined' && google.translate) {
        return;
    }

    // Add Google Translate script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=initGoogleTranslate';
    document.head.appendChild(script);

    // Initialize function
    window.initGoogleTranslate = function() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de,it,pt,ru,zh-CN,ja,ko,ar,hi,bn,ur,tr,pl,nl,id,vi,th,ms,fa,ta,te,ml,gu,mr,kn,pa,sd,ne,si,my,km,lo,ceb,ha,ig,yo,zu,af,st,xh,sw,rw,mg,ny,so,am,ti,sw,uz,kk,ky,tg,mn,ps,ku',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true
        }, 'google_translate_element');
    };

    // Add styles
    var style = document.createElement('style');
    style.textContent = `
        /* Google Translate Widget Styles */
        .translate-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            background: var(--bg-card, #ffffff);
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            padding: 10px 15px;
            border: 1px solid var(--border-color, #e5e7eb);
            transition: all 0.3s ease;
        }
        
        .translate-container:hover {
            box-shadow: 0 6px 25px rgba(0,0,0,0.2);
        }
        
        .translate-toggle {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            color: var(--text-primary, #1f2937);
            user-select: none;
        }
        
        .translate-toggle svg {
            width: 20px;
            height: 20px;
            flex-shrink: 0;
        }
        
        .translate-dropdown {
            display: none;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid var(--border-color, #e5e7eb);
            max-height: 300px;
            overflow-y: auto;
        }
        
        .translate-dropdown.active {
            display: block;
            animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Google Translate Element Styling */
        .goog-te-gadget {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
            font-size: 14px !important;
        }
        
        .goog-te-gadget-simple {
            background-color: transparent !important;
            border: none !important;
            padding: 0 !important;
            font-size: 14px !important;
        }
        
        .goog-te-menu-value {
            color: var(--text-primary, #1f2937) !important;
            text-decoration: none !important;
        }
        
        .goog-te-menu-value span {
            color: var(--text-primary, #1f2937) !important;
            border: none !important;
        }
        
        .goog-te-menu-value span:first-child {
            font-weight: 500;
        }
        
        .goog-te-menu-value:hover {
            text-decoration: none !important;
        }
        
        /* Language dropdown styling */
        .goog-te-menu2 {
            max-height: 250px !important;
            overflow-y: auto !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
            border: 1px solid var(--border-color, #e5e7eb) !important;
        }
        
        .goog-te-menu2-item {
            padding: 8px 12px !important;
        }
        
        .goog-te-menu2-item:hover {
            background-color: var(--bg-secondary, #f3f4f6) !important;
        }
        
        /* Hide Google Translate banner */
        .goog-te-banner-frame {
            display: none !important;
        }
        
        body {
            top: 0 !important;
        }
        
        /* Skip translate */
        .skiptranslate {
            display: none !important;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
            .translate-container {
                bottom: 15px;
                right: 15px;
                padding: 8px 12px;
                border-radius: 10px;
            }
            
            .translate-toggle {
                font-size: 13px;
            }
            
            .translate-toggle svg {
                width: 18px;
                height: 18px;
            }
            
            .translate-dropdown {
                max-height: 250px;
            }
        }
        
        /* Dark mode support */
        [data-theme="dark"] .translate-container {
            background: #1f2937;
            border-color: #374151;
        }
        
        [data-theme="dark"] .translate-toggle {
            color: #f9fafb;
        }
        
        [data-theme="dark"] .goog-te-menu-value {
            color: #f9fafb !important;
        }
        
        [data-theme="dark"] .goog-te-menu-value span {
            color: #f9fafb !important;
        }
        
        [data-theme="dark"] .translate-dropdown {
            border-color: #374151;
        }
    `;
    document.head.appendChild(style);

    // Create widget HTML
    function createTranslateWidget() {
        // Check if widget already exists
        if (document.getElementById('google_translate_element')) {
            return;
        }

        var container = document.createElement('div');
        container.className = 'translate-container';
        container.innerHTML = `
            <div class="translate-toggle" onclick="this.nextElementSibling.classList.toggle('active')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                <span>Translate</span>
            </div>
            <div class="translate-dropdown">
                <div id="google_translate_element"></div>
            </div>
        `;

        // Insert before closing body tag
        document.body.appendChild(container);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createTranslateWidget);
    } else {
        createTranslateWidget();
    }
})();
