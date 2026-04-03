/**
 * Victor Kauê Portfolio - Main Application Script
 * GSAP Animations + Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // ========================================
    // 1. NAVBAR SCROLL EFFECT
    // ========================================
    const navbar = document.querySelector('.navbar-custom');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ========================================
    // 2. GSAP SCROLL ANIMATIONS
    // ========================================
    function initGSAPAnimations() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            // Show all elements without animation
            document.querySelectorAll('.gs-reveal').forEach(el => {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            });
            return;
        }

        // Hero animations - staggered entrance
        const heroElements = document.querySelectorAll('.hero-section .gs-reveal');
        if (heroElements.length) {
            gsap.fromTo(heroElements,
                {
                    opacity: 0,
                    y: 40,
                    visibility: 'hidden'
                },
                {
                    opacity: 1,
                    y: 0,
                    visibility: 'visible',
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );
        }

        // Scroll-triggered animations for all other sections
        const revealElements = document.querySelectorAll('.gs-reveal:not(.hero-section .gs-reveal)');

        revealElements.forEach((el) => {
            gsap.fromTo(el,
                {
                    opacity: 0,
                    y: 30,
                    visibility: 'hidden'
                },
                {
                    opacity: 1,
                    y: 0,
                    visibility: 'visible',
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        toggleActions: 'play none none none',
                        once: true
                    }
                }
            );
        });

        // Stagger animations for grid items
        const staggerContainers = document.querySelectorAll('.row');
        staggerContainers.forEach((container) => {
            const items = container.querySelectorAll('.gs-reveal');
            if (items.length <= 1) return;

            ScrollTrigger.create({
                trigger: container,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    gsap.fromTo(items,
                        {
                            opacity: 0,
                            y: 30,
                            visibility: 'hidden'
                        },
                        {
                            opacity: 1,
                            y: 0,
                            visibility: 'visible',
                            duration: 0.6,
                            stagger: 0.1,
                            ease: 'power2.out'
                        }
                    );
                }
            });
        });
    }

    initGSAPAnimations();

    // ========================================
    // 3. BACK TO TOP BUTTON
    // ========================================
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // 4. PROJECT FILTER (projetos.html)
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const projectSections = document.querySelectorAll('#profissionais, #pessoais');

    if (filterBtns.length && projectItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                if (filter === 'all') {
                    // Show all sections and items
                    projectSections.forEach(section => {
                        section.style.display = '';
                    });
                    projectItems.forEach(item => {
                        item.style.display = '';
                        gsap.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
                    });
                } else {
                    // Show/hide sections based on filter
                    projectSections.forEach(section => {
                        const sectionId = section.id;
                        if (
                            (filter === 'profissional' && sectionId === 'profissionais') ||
                            (filter === 'pessoal' && sectionId === 'pessoais')
                        ) {
                            section.style.display = '';
                        } else {
                            section.style.display = 'none';
                        }
                    });

                    projectItems.forEach(item => {
                        if (item.dataset.category === filter) {
                            item.style.display = '';
                            gsap.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
                        } else {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    }

    // ========================================
    // 5. SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu after clicking
            const navCollapse = document.querySelector('.navbar-collapse.show');
            if (navCollapse) {
                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });

    // ========================================
    // 6. IMAGE FALLBACK
    // ========================================
    document.querySelectorAll('.project-img img').forEach(img => {
        img.addEventListener('error', function () {
            this.style.display = 'none';
            const parent = this.closest('.project-img');
            if (parent) {
                parent.style.background = 'linear-gradient(135deg, var(--vk-bg-card) 0%, var(--vk-surface) 100%)';
                parent.style.display = 'flex';
                parent.style.alignItems = 'center';
                parent.style.justifyContent = 'center';
                parent.innerHTML += '<span style="color:var(--vk-text-muted);font-size:3rem;"><i data-lucide="image-off"></i></span>';
                lucide.createIcons();
            }
        });
    });

    // ========================================
    // 7. NAVBAR ACTIVE LINK BY PAGE
    // ========================================
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navbar-custom .nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    setActiveNavLink();
});
