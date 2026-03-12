document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle (Removed as per request, guarded for safety)
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        if (menuBtn && nav) {
            menuBtn.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        }
    };

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav && nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Handle primary CTA button
    const navBtn = document.querySelector('.nav-btn');
    if (navBtn) {
        navBtn.addEventListener('click', () => {
            if (nav && nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    }

    // Sticky Header
    const header = document.getElementById('header');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));

    // Form submission handling
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input.value) {
                const btn = form.querySelector('button');
                const originalText = btn.textContent;
                btn.textContent = 'Відправлення...';
                btn.disabled = true;

                setTimeout(() => {
                    const ctaContent = document.querySelector('.cta-content');
                    const successDiv = document.createElement('div');
                    successDiv.style.color = '#00ff41';
                    successDiv.style.marginTop = '1rem';
                    successDiv.textContent = 'Заявку успішно відправлено!';

                    form.appendChild(successDiv);

                    input.value = '';
                    btn.textContent = originalText;
                    btn.disabled = false;

                    setTimeout(() => {
                        successDiv.remove();
                    }, 5000);
                }, 1000);
            }
        });
    }

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    const loadTabBg = (pane) => {
        const bg = pane.querySelector('.tab-bg');
        if (bg && !bg.classList.contains('loaded')) {
            bg.classList.add('loaded');
        }
    };

    const switchTab = (index) => {
        const targetBtn = tabBtns[index];
        if (!targetBtn) return;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        targetBtn.classList.add('active');
        const targetId = targetBtn.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        targetPane.classList.add('active');
        loadTabBg(targetPane);

        // Scroll tab button into view on mobile
        targetBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    tabBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            switchTab(index);
        });
    });

    // Swipe functionality for tab panes
    let touchStartX = 0;
    let touchEndX = 0;
    const tabsContent = document.querySelector('.tabs-content');

    if (tabsContent) {
        tabsContent.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        tabsContent.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const currentActiveIndex = Array.from(tabBtns).findIndex(btn => btn.classList.contains('active'));

        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe Left -> Next Tab
            if (currentActiveIndex < tabBtns.length - 1) {
                switchTab(currentActiveIndex + 1);
            }
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe Right -> Previous Tab
            if (currentActiveIndex > 0) {
                switchTab(currentActiveIndex - 1);
            }
        }
    };

    // Lazy load first tab bg
    loadTabBg(document.querySelector('.tab-pane.active'));

    // Scroll-based lazy loading for other non-tab images if they existed
    // For now, we'll just ensure the IntersectionObserver also triggers 'loaded' state if we want
    const lazyBgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bg = entry.target;
                if (bg.classList.contains('tab-bg')) {
                    bg.classList.add('loaded');
                }
                lazyBgObserver.unobserve(bg);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tab-bg').forEach(bg => lazyBgObserver.observe(bg));
});
