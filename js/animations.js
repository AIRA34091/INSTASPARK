// ========================================
// InstaSpark - Smooth Animations & Interactions
// Modern UI/UX JavaScript
// ========================================

(function() {
    'use strict';

    // ========================================
    // NAVBAR SCROLL EFFECT
    // ========================================
    function initNavbarScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        let lastScroll = 0;
        const scrollThreshold = 50;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // Add/remove scrolled class
            if (currentScroll > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Hide/show navbar on scroll direction (optional)
            if (currentScroll > lastScroll && currentScroll > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        }, { passive: true });

        // Smooth transition for navbar
        header.style.transition = 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease';
    }

    // ========================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ========================================
    function initScrollAnimations() {
        // Elements to animate
        const animatedElements = document.querySelectorAll(
            '.section, .tool-card, .blog-card, .scroll-animate, .fade-in-left, .fade-in-right, .fade-in-scale'
        );

        if (animatedElements.length === 0) return;

        // Intersection Observer options
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add show class with delay for stagger effect
                    const delay = entry.target.dataset.delay || 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, delay * 100);

                    // Unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe each element
        animatedElements.forEach((el, index) => {
            // Add stagger delay based on index
            el.dataset.delay = index % 6;
            observer.observe(el);
        });
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ========================================
    // PARALLAX EFFECT FOR HERO SECTION
    // ========================================
    function initParallax() {
        const heroSection = document.querySelector('.hero, .blog-header-section, .tools-dashboard');
        if (!heroSection) return;

        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * 0.3;
                    
                    heroSection.style.backgroundPositionY = rate + 'px';
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ========================================
    // TYPING EFFECT FOR HERO TEXT
    // ========================================
    function initTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-effect');
        
        typingElements.forEach(el => {
            const text = el.textContent;
            el.textContent = '';
            el.style.opacity = '1';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };

            // Start typing when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        typeWriter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(el);
        });
    }

    // ========================================
    // COUNTER ANIMATION FOR STATS
    // ========================================
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            // Start counting when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(counter);
        });
    }

    // ========================================
    // MAGNETIC BUTTON EFFECT
    // ========================================
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-magnetic');
        
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        buttons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }

    // ========================================
    // LAZY LOADING FOR IMAGES
    // ========================================
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px'
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    // ========================================
    // TOOLTIP ANIMATIONS
    // ========================================
    function initTooltips() {
        const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
        
        tooltipTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = this.getAttribute('data-tooltip');
                
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
                
                requestAnimationFrame(() => {
                    tooltip.classList.add('show');
                });
                
                this._tooltip = tooltip;
            });

            trigger.addEventListener('mouseleave', function() {
                if (this._tooltip) {
                    this._tooltip.classList.remove('show');
                    setTimeout(() => {
                        this._tooltip.remove();
                    }, 300);
                }
            });
        });
    }

    // ========================================
    // MOBILE MENU ANIMATION
    // ========================================
    function initMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileNav = document.getElementById('mobile-nav');
        
        if (!menuBtn || !mobileNav) return;

        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu on link click
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    // ========================================
    // PROGRESS BAR ANIMATION
    // ========================================
    function initProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => observer.observe(bar));
    }

    // ========================================
    // REVEAL ON SCROLL FOR TEXT ELEMENTS
    // ========================================
    function initTextReveal() {
        const textElements = document.querySelectorAll('.reveal-text');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        textElements.forEach(el => observer.observe(el));
    }

    // ========================================
    // INITIALIZE ALL ANIMATIONS
    // ========================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAnimations);
        } else {
            initAnimations();
        }
    }

    function initAnimations() {
        initNavbarScroll();
        initScrollAnimations();
        initSmoothScroll();
        initParallax();
        initTypingEffect();
        initCounterAnimation();
        initMagneticButtons();
        initLazyLoading();
        initTooltips();
        initMobileMenu();
        initProgressBars();
        initTextReveal();

        // Add loaded class to body for page load animation
        document.body.classList.add('loaded');

        console.log('InstaSpark animations initialized ✨');
    }

    // Start initialization
    init();

})();
