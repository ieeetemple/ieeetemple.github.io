/* =====================================================
   Temple IEEE - Main JavaScript
   ===================================================== */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', async function() {
    initSiteFooter();
    initNavigation();
    initPillNavigation();
    initDropdowns();
    await initUpcomingEvents();
    initAnimations();
    initFilterTabs();
    initCarousel();
});

/* =====================================================
   Shared Site Footer
   ===================================================== */
async function initSiteFooter() {
    const footer = document.querySelector('[data-site-footer]');
    if (!footer) return;

    footer.setAttribute('aria-busy', 'true');

    try {
        const response = await fetch('/assets/data/footer.json');
        if (!response.ok) throw new Error('Unable to load footer (' + response.status + ')');

        const data = await response.json();
        if (!data.primaryText || !data.creditText) {
            throw new Error('Footer data is incomplete');
        }

        const primaryText = document.createElement('p');
        primaryText.textContent = data.primaryText;

        const creditText = document.createElement('p');
        creditText.className = 'credit';
        creditText.textContent = data.creditText;

        footer.replaceChildren(primaryText, creditText);
    } catch (error) {
        console.error('Unable to load site footer:', error);
    } finally {
        footer.removeAttribute('aria-busy');
    }
}

/* =====================================================
   Pill Navigation
   Shared-page adaptation of React Bits PillNav.
   ===================================================== */
function initPillNavigation() {
    const nav = document.querySelector('nav');
    const logo = nav?.querySelector('.logo');
    const navLinks = nav?.querySelector('.nav-links');
    if (!nav || !logo || !navLinks) return;

    nav.classList.add('pill-nav-shell');
    navLinks.classList.add('pill-nav-list');
    logo.classList.add('pill-nav-logo');

    const icon = document.createElement('img');
    icon.src = '/favicon.png';
    icon.alt = '';
    icon.draggable = false;

    const mark = document.createElement('span');
    mark.className = 'pill-nav-mark';
    mark.appendChild(icon);
    logo.replaceChildren(mark);

    navLinks.querySelectorAll(':scope > li > a').forEach(function(link) {
        const labelNode = Array.from(link.childNodes).find(function(node) {
            return node.nodeType === Node.TEXT_NODE && node.textContent.trim();
        });
        if (!labelNode) return;

        const label = labelNode.textContent.trim();
        const stack = document.createElement('span');
        stack.className = 'pill-nav-label';

        const face = document.createElement('span');
        face.className = 'pill-nav-face';
        face.textContent = label;

        const alternateFace = document.createElement('span');
        alternateFace.className = 'pill-nav-face pill-nav-face-alt';
        alternateFace.textContent = label;
        alternateFace.setAttribute('aria-hidden', 'true');

        stack.append(face, alternateFace);
        labelNode.replaceWith(stack);
    });

    requestAnimationFrame(function() {
        nav.classList.add('pill-nav-ready');
    });
}

/* =====================================================
   Shared Upcoming Events Data
   ===================================================== */
async function initUpcomingEvents() {
    const track = document.querySelector('[data-upcoming-events]');
    if (!track) return;

    try {
        const response = await fetch('/assets/data/upcomingevent.json');
        if (!response.ok) throw new Error('Unable to load events (' + response.status + ')');
        const data = await response.json();
        const upcoming = Array.isArray(data.upcoming) ? data.upcoming : [];

        if (upcoming.length === 0) {
            track.innerHTML = '<p class="carousel-status">No upcoming events have been announced yet.</p>';
            return;
        }

        upcoming.forEach(function(event) {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';

            const image = document.createElement('img');
            image.src = event.image;
            image.alt = event.alt || event.title || 'Temple IEEE event';

            const content = document.createElement('div');
            content.className = 'carousel-slide-content';

            const dateTag = document.createElement('span');
            dateTag.className = 'event-date-tag';
            dateTag.textContent = event.dateLabel || event.date || 'Date to be announced';

            const title = document.createElement('h3');
            title.textContent = event.title || 'Upcoming Event';

            const details = document.createElement('p');
            const detailLines = [
                event.description,
                event.date ? '\ud83d\udcc5 ' + event.date : '',
                event.time ? '\u23f0 ' + event.time : '',
                event.location ? '\ud83d\udccd ' + event.location : '',
                event.closing
            ].filter(Boolean);
            detailLines.forEach(function(line, index) {
                if (index > 0) details.appendChild(document.createElement('br'));
                if (index === 1 || index === detailLines.length - 1) details.appendChild(document.createElement('br'));
                details.appendChild(document.createTextNode(line));
            });

            content.append(dateTag, title, details);
            slide.append(image, content);
            track.appendChild(slide);
        });
    } catch (error) {
        console.error('Unable to load upcoming events:', error);
        track.innerHTML = '<p class="carousel-status">Upcoming events are temporarily unavailable.</p>';
    }
}

/* =====================================================
   Navigation
   ===================================================== */
function initNavigation() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Navbar scroll effect
    const nav = document.querySelector('nav');

    if (nav) {
        const updateNavState = function() {
            nav.classList.toggle('is-scrolled', window.pageYOffset > 24);
        };

        updateNavState();
        window.addEventListener('scroll', updateNavState, { passive: true });
    }
}

/* =====================================================
    Dropdown Navigation
    ===================================================== */
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    if (dropdowns.length === 0) return;
    
    dropdowns.forEach(function(dropdown) {
        const trigger = dropdown.querySelector(':scope > a');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!trigger || !menu) return;
        
        // Mobile: toggle on click
        trigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dropdown.classList.toggle('open');
            }
        });
        
        // Close dropdown when clicking a menu item
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                dropdown.classList.remove('open');
                // Also close mobile nav
                const navLinks = document.querySelector('.nav-links');
                if (navLinks) {
                    navLinks.classList.remove('active');
                    const icon = document.querySelector('.mobile-toggle i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });
    });
}

/* =====================================================
    Scroll Animations
    ===================================================== */
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally stop observing after animation
                // fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(function(el) {
        fadeObserver.observe(el);
    });

    // Staggered animations for cards
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                // Add delay based on data attribute or index
                const delay = entry.target.dataset.delay || 0;
                setTimeout(function() {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * 100);
            }
        });
    }, observerOptions);

    // Apply to cards, board cards, event cards
    const animatedCards = document.querySelectorAll('.card, .board-card, .event-card, .card-dark');
    
    animatedCards.forEach(function(card, index) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease ' + (index % 4) * 0.1 + 's';
        card.dataset.delay = index % 4;
        cardObserver.observe(card);
    });

    // Floating animation for hero cards
    document.querySelectorAll('.floating-card').forEach(function(card, index) {
        card.classList.add('float-animation');
        card.classList.add('delay-' + ((index % 3) + 1));
    });

    // Hero content animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const heroElements = heroContent.children;
        Array.from(heroElements).forEach(function(el, index) {
            el.style.opacity = '0';
            el.style.animation = 'fadeInUp 0.8s ease ' + (index * 0.1) + 's forwards';
        });
    }
}

/* =====================================================
   Filter Tabs (Events Page)
   ===================================================== */
function initFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const eventCards = document.querySelectorAll('.event-card');

    if (filterTabs.length === 0 || eventCards.length === 0) return;

    filterTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Update active tab
            filterTabs.forEach(function(t) {
                t.classList.remove('active');
            });
            this.classList.add('active');

            // Get filter value
            const filter = this.dataset.filter || 'all';

            // Filter cards
            eventCards.forEach(function(card) {
                const cardType = card.dataset.type || '';

                if (filter === 'all') {
                    card.classList.remove('hidden');
                    card.style.display = '';
                    // Re-trigger animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(function() {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else if (cardType === filter) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(function() {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* =====================================================
   Carousel
   ===================================================== */
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;

    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const dotsContainer = carousel.parentElement.querySelector('.carousel-dots');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoPlayInterval;
    const autoPlayDelay = 5000; // 5 seconds

    // Create dots
    if (dotsContainer) {
        slides.forEach(function(_, index) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', 'Go to slide ' + (index + 1));
            dot.addEventListener('click', function() {
                goToSlide(index);
                resetAutoPlay();
            });
            dotsContainer.appendChild(dot);
        });
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.carousel-dot') : [];

    function updateDots() {
        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = slides.length - 1;
        } else if (index >= slides.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
        updateDots();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetAutoPlay();
        });
    }

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoPlay();
        }
    }

    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoPlay();
        }
    });

    // Pause on hover
    carousel.addEventListener('mouseenter', function() {
        clearInterval(autoPlayInterval);
    });

    carousel.addEventListener('mouseleave', function() {
        startAutoPlay();
    });

    // Start autoplay
    startAutoPlay();
}

/* =====================================================
   Utility Functions
   ===================================================== */

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.dataset.originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        button.disabled = true;
    } else {
        button.innerHTML = button.dataset.originalText;
        button.disabled = false;
    }
}

/* =====================================================
   Touch/Mobile Optimizations
   ===================================================== */

// Detect touch device
function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

// Add touch class to body
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// Prevent 300ms delay on touch devices
document.addEventListener('touchstart', function() {}, { passive: true });

/* =====================================================
   Performance: Lazy load images (if needed)
   ===================================================== */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(function(img) {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading if there are lazy images
if (document.querySelectorAll('img[data-src]').length > 0) {
    lazyLoadImages();
}
