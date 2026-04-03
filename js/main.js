document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os icones do Lucide
    lucide.createIcons();

    // Fallback para imagens de projetos quebradas
    document.querySelectorAll('.project-image .project-logo').forEach((logo) => {
        const imageWrapper = logo.closest('.project-image');
        if (!imageWrapper) return;

        const applyFallback = () => {
            imageWrapper.classList.add('has-fallback');
            logo.setAttribute('aria-hidden', 'true');
        };

        logo.addEventListener('error', applyFallback);

        if (logo.complete && logo.naturalWidth === 0) {
            applyFallback();
        }
    });

    // Injeta tags de tecnologias em cards de projetos para aumentar clareza tecnica
    const projectTechMap = {
        'Meu Portfólio': ['HTML', 'CSS', 'JavaScript'],
        'AgendeAqui': ['Django', 'PostgreSQL', 'Bootstrap'],
        'Oliveira Kids': ['Python', 'Django', 'MySQL'],
        'Transcritor de Entrevistas': ['Python', 'IA', 'Automacao'],
        'Saberes Interculturais de Itaparica': ['Django', 'SQLite', 'Responsivo'],
        'SIGREF': ['Django', 'MySQL', 'SaaS'],
        'NTIDI': ['Django', 'Bootstrap', 'SEO'],
        'MaratonaTech': ['Python', 'Django', 'Eventos'],
        'VA Suplementos': ['Python', 'Sistema Web', 'Controle de Estoque'],
        'Queelvra': ['Landing Page', 'Front-end', 'Conversao'],
        'VK Software': ['Web App', 'Design System', 'Escalabilidade']
    };

    document.querySelectorAll('.project-card, .project-card-gildacio').forEach((card) => {
        const title = card.querySelector('h3, .project-title')?.textContent?.trim();
        if (!title || card.querySelector('.project-tech-tags')) return;

        const technologies = projectTechMap[title];
        if (!technologies || !technologies.length) return;

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'project-tech-tags';

        technologies.forEach((tech) => {
            const tag = document.createElement('span');
            tag.className = 'project-tech-tag';
            tag.textContent = tech;
            tagsContainer.appendChild(tag);
        });

        const contentTarget = card.querySelector('.project-body') || card.querySelector('.project-description')?.parentElement;
        if (contentTarget) {
            contentTarget.appendChild(tagsContainer);
        }
    });

    // 1. Animacao de digitacao com Typed.js (somente se o alvo existir)
    const typedElement = document.querySelector('#typed-text');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Python',
                'Django',
                'JavaScript',
                'React',
                'HTML & CSS',
                'Java',
                'Flutter',
                'MySQL',
                'PostgreSQL',
                'Docker',
                'Git & GitHub'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            smartBackspace: true,
            cursorChar: '|'
        });
    }

    // 2. Interacoes de scroll para todas as secoes e blocos principais
    function initScrollReveal() {
        const supportsObserver = 'IntersectionObserver' in window;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!supportsObserver || prefersReducedMotion) return;

        const revealTargets = new Set();
        const addTargets = (selector) => {
            document.querySelectorAll(selector).forEach((element) => revealTargets.add(element));
        };

        addTargets('main section');
        addTargets('.hero-photo, .hero-content');
        addTargets('.section-title, .section-subtitle');
        addTargets('.about-card, .service-card, .tech-card, .project-card, .experience-item, .contact-card');
        addTargets('.github-summary-card, .github-visual-card, .gallery-post, .certificate-card, .paper-section, .paper-box, .category-section');

        const nodes = [...revealTargets];
        if (!nodes.length) return;

        document.documentElement.classList.add('has-scroll-reveal');
        nodes.forEach((node) => node.classList.add('reveal-on-scroll'));

        const staggerGroups = [
            '.about-grid',
            '.services-grid',
            '.tech-grid',
            '.projects-marquee .marquee-track',
            '.experience-timeline',
            '.contact-cards',
            '.certificate-grid',
            '.github-metrics'
        ];

        staggerGroups.forEach((groupSelector) => {
            document.querySelectorAll(groupSelector).forEach((group) => {
                const groupChildren = [...group.children].filter((child) => child.classList.contains('reveal-on-scroll'));
                groupChildren.forEach((child, index) => {
                    child.style.setProperty('--reveal-delay', `${Math.min(index, 8) * 70}ms`);
                });
            });
        });

        const revealObserver = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observerInstance.unobserve(entry.target);
            });
        }, {
            threshold: 0.16,
            rootMargin: '0px 0px -8% 0px'
        });

        const viewportRevealOffset = window.innerHeight * 0.88;
        nodes.forEach((node) => {
            const rect = node.getBoundingClientRect();
            if (rect.top <= viewportRevealOffset) {
                node.classList.add('is-visible');
                return;
            }

            revealObserver.observe(node);
        });
    }

    // 3. Navbar scroll effects e link ativo
    const navbar = document.querySelector('.navbar');
    const scrollDownButton = document.querySelector('.scroll-down');
    const navLinks = [...document.querySelectorAll('.nav-menu a')];
    const navSections = navLinks
        .map((link) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return null;

            const section = document.querySelector(href);
            if (!section) return null;

            return { id: href.slice(1), section };
        })
        .filter(Boolean);
    const hasSectionLinks = navSections.length > 0;

    function setActiveLinkByPath() {
        if (!navLinks.length) return;

        const baseUrl = window.location.href;
        const getPageName = (url) => {
            try {
                const pathname = new URL(url, baseUrl).pathname;
                const parts = pathname.split('/').filter(Boolean);
                return parts[parts.length - 1] || 'index.html';
            } catch (error) {
                return '';
            }
        };

        const currentPage = getPageName(window.location.href);
        if (!currentPage) return;

        let matched = false;
        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (!href || href.startsWith('#')) return;

            const linkPage = getPageName(href);
            if (linkPage && linkPage === currentPage) {
                matched = true;
                navLinks.forEach((item) => item.classList.remove('active'));
                link.classList.add('active');
            }
        });

        if (!matched) {
            return;
        }
    }

    function updateActiveLink() {
        if (!hasSectionLinks) return;

        const navHeight = navbar ? navbar.offsetHeight : 0;
        const markerY = navHeight + 24;
        let current = navSections[0].id;
        const viewportBottom = window.innerHeight + window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const isNearPageBottom = viewportBottom >= documentHeight - 8;

        if (isNearPageBottom) {
            current = navSections[navSections.length - 1].id;
        }

        for (const { id, section } of navSections) {
            const top = section.getBoundingClientRect().top;
            if (!isNearPageBottom && top <= markerY) {
                current = id;
            }
        }

        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    function updateScrollDownVisibility(scrollTop) {
        if (!scrollDownButton) return;
        scrollDownButton.classList.toggle('is-hidden', scrollTop > 10);
    }

    function getNextSectionAfterHero() {
        const heroSection = document.querySelector('#inicio');
        if (!heroSection) return document.querySelector('#sobre');

        let nextElement = heroSection.nextElementSibling;
        while (nextElement && nextElement.tagName !== 'SECTION') {
            nextElement = nextElement.nextElementSibling;
        }

        return nextElement || document.querySelector('#sobre');
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navbar && scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }

        updateActiveLink();
        updateScrollDownVisibility(scrollTop);
    });

    // Chama uma vez no carregamento para definir o link inicial
    updateActiveLink();
    updateScrollDownVisibility(window.pageYOffset || document.documentElement.scrollTop);

    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', (event) => {
            event.preventDefault();

            const nextSection = getNextSectionAfterHero();
            if (!nextSection) return;

            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    if (!hasSectionLinks) {
        setActiveLinkByPath();
    }

    // 3.1 Animacao da CTA da home com GSAP ao entrar na viewport
    const ctaContent = document.querySelector('.cta-content');
    const ctaCards = document.querySelector('#contato .contact-cards');
    if (ctaContent && typeof gsap !== 'undefined') {
        const triggerCtaAnimation = () => {
            gsap.fromTo(ctaContent,
                { autoAlpha: 0, y: 44 },
                { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out' }
            );

            if (ctaCards) {
                gsap.fromTo(ctaCards,
                    { autoAlpha: 0, y: 26 },
                    { autoAlpha: 1, y: 0, duration: 0.85, delay: 0.15, ease: 'power2.out' }
                );
            }
        };

        const ctaObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                triggerCtaAnimation();
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.28
        });

        ctaObserver.observe(ctaContent);
    }

    // 4. Smooth scroll para links de navegacao
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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

            // Fecha menu mobile apos clicar
            const menuWrapper = document.querySelector('.nav-menu-wrapper');
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            if (menuWrapper && menuToggle) {
                menuWrapper.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // 4.1 Marquee infinito dos projetos (duplica itens para loop suave)
    const marqueeSections = document.querySelectorAll('[data-marquee]');
    marqueeSections.forEach((marquee) => {
        const track = marquee.querySelector('.marquee-track');
        if (!track || track.dataset.marqueeApplied === 'true') return;
        track.dataset.marqueeApplied = 'true';
        track.innerHTML += track.innerHTML;
    });

    // 4.1.1 Controles manuais das setas (complementa o auto-scroll)
    marqueeSections.forEach((marquee) => {
        const track = marquee.querySelector('.marquee-track');
        const prevButton = marquee.querySelector('.marquee-control-prev');
        const nextButton = marquee.querySelector('.marquee-control-next');

        if (!track || !prevButton || !nextButton) return;

        const parseDurationToMs = (value) => {
            const raw = (value || '').toString().trim();
            if (!raw) return 0;
            if (raw.endsWith('ms')) return parseFloat(raw);
            if (raw.endsWith('s')) return parseFloat(raw) * 1000;
            return parseFloat(raw);
        };

        const getAnimationDurationMs = () => {
            const style = window.getComputedStyle(track);
            const durations = (style.animationDuration || '')
                .split(',')
                .map((entry) => parseDurationToMs(entry))
                .filter((entry) => Number.isFinite(entry) && entry > 0);

            return durations[0] || 0;
        };

        const getScrollStep = () => {
            const firstCard = marquee.querySelector('.project-card');
            if (!firstCard) return Math.max(marquee.clientWidth * 0.8, 280);

            const trackStyles = window.getComputedStyle(track);
            const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || '0') || 0;
            return firstCard.getBoundingClientRect().width + gap;
        };

        const scrollByDirection = (direction) => {
            const animations = typeof track.getAnimations === 'function' ? track.getAnimations() : [];
            const marqueeAnimation = animations.find((animation) => {
                const timing = animation.effect?.getComputedTiming?.();
                return timing && Number.isFinite(timing.duration) && timing.duration > 0;
            });

            const stepDistance = getScrollStep();
            const cycleDistance = track.scrollWidth / 2;
            const cycleDuration = marqueeAnimation?.effect?.getComputedTiming?.().duration || getAnimationDurationMs();

            if (marqueeAnimation && cycleDistance > 0 && cycleDuration > 0) {
                const stepTime = (stepDistance / cycleDistance) * cycleDuration;
                const currentTime = Number.isFinite(marqueeAnimation.currentTime) ? marqueeAnimation.currentTime : 0;
                const nextTime = currentTime + (stepTime * direction);
                const normalizedTime = ((nextTime % cycleDuration) + cycleDuration) % cycleDuration;
                marqueeAnimation.currentTime = normalizedTime;
                return;
            }

            // Fallback suave caso a animação não esteja disponível no browser
            marquee.scrollBy({
                left: stepDistance * direction,
                behavior: 'smooth'
            });
        };

        prevButton.addEventListener('click', () => {
            scrollByDirection(-1);
        });

        nextButton.addEventListener('click', () => {
            scrollByDirection(1);
        });
    });

    initScrollReveal();
    // 4.2 Download do CV: link direto no .btn-cv
    // 5. Menu hamburger mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

    if (mobileMenuToggle && navMenuWrapper) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenuWrapper.classList.toggle('active');
        });

        // Fecha menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                mobileMenuToggle.classList.remove('active');
                navMenuWrapper.classList.remove('active');
            }
        });
    }

    // 6. Carrossel de fotos (galeria)
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach((carousel) => {
        const track = carousel.querySelector('.carousel-track');
        const slides = [...carousel.querySelectorAll('.carousel-slide')];
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        const dotsContainer = carousel.querySelector('.carousel-dots');

        if (!track || slides.length === 0) return;

        let index = 0;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${index * 100}%)`;
            slides.forEach((slide, i) => {
                slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
            });

            if (dotsContainer) {
                dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }
        };

        const buildDots = () => {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'carousel-dot';
                dot.setAttribute('aria-label', `Ir para foto ${i + 1}`);
                dot.addEventListener('click', () => {
                    index = i;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            });
        };

        if (slides.length <= 1) {
            carousel.classList.add('is-single');
        } else {
            buildDots();
        }

        const goPrev = () => {
            index = (index - 1 + slides.length) % slides.length;
            updateCarousel();
        };

        const goNext = () => {
            index = (index + 1) % slides.length;
            updateCarousel();
        };

        if (prevButton) {
            prevButton.addEventListener('click', goPrev);
        }

        if (nextButton) {
            nextButton.addEventListener('click', goNext);
        }

        carousel.setAttribute('tabindex', '0');
        carousel.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                goPrev();
            }
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                goNext();
            }
        });

        updateCarousel();
    });

    // Lightbox simples para imagens da galeria
    const galleryImages = document.querySelectorAll('.page-galeria .carousel-slide img');
    if (galleryImages.length) {
        const lightbox = document.createElement('div');
        lightbox.className = 'gallery-lightbox';
        lightbox.innerHTML = '<button type="button" class="gallery-lightbox-close" aria-label="Fechar imagem">x</button><img alt="Imagem ampliada da galeria">';
        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector('img');
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.classList.remove('modal-open');
        };

        galleryImages.forEach((image) => {
            image.addEventListener('click', () => {
                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt || 'Imagem da galeria';
                lightbox.classList.add('active');
                document.body.classList.add('modal-open');
            });
        });

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox || event.target.closest('.gallery-lightbox-close')) {
                closeLightbox();
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // 7. Botao voltar ao topo
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (!backToTopButton) return;

        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    if (backToTopButton) {
        backToTopButton.setAttribute('type', 'button');
        backToTopButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            if (window.location.hash) {
                history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
            }
        });
    }

    // 8. Scroll-spy para sidebar da página Sobre
    const aboutNav = document.querySelector('.sidebar-nav');
    if (aboutNav) {
        const aboutLinks = [...aboutNav.querySelectorAll('a[href^="#"]')];
        const aboutSections = aboutLinks
            .map((link) => {
                const target = document.querySelector(link.getAttribute('href'));
                return target ? { link, section: target } : null;
            })
            .filter(Boolean);

        if (aboutSections.length) {
            const updateAboutActiveLink = () => {
                const scrollY = window.scrollY;
                const offset = 120;
                let current = aboutSections[0];

                for (const item of aboutSections) {
                    if (item.section.offsetTop - offset <= scrollY) {
                        current = item;
                    }
                }

                aboutLinks.forEach((l) => l.classList.remove('active'));
                current.link.classList.add('active');
            };

            window.addEventListener('scroll', updateAboutActiveLink, { passive: true });
            updateAboutActiveLink();
        }
    }

    // =============================================
    // CONTACT FORM UX ENHANCEMENTS
    // =============================================
    const contactForm = document.getElementById('contactForm');
    const msgTextarea = document.getElementById('mensagem');
    const charCounter = document.getElementById('charCounter');
    const formProgressBar = document.getElementById('formProgressBar');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');

    // Character counter for textarea
    if (msgTextarea && charCounter) {
        const updateCharCounter = () => {
            const currentLength = msgTextarea.value.length;
            const maxLength = msgTextarea.getAttribute('maxlength') || 1000;
            charCounter.textContent = `${currentLength} / ${maxLength}`;

            // Color coding
            charCounter.classList.remove('warning', 'danger');
            const percentage = (currentLength / maxLength) * 100;
            
            if (percentage >= 90) {
                charCounter.classList.add('danger');
            } else if (percentage >= 75) {
                charCounter.classList.add('warning');
            }
        };

        msgTextarea.addEventListener('input', updateCharCounter);
        updateCharCounter(); // Initial call
    }

    // Form progress bar
    if (contactForm && formProgressBar) {
        const updateFormProgress = () => {
            const requiredFields = contactForm.querySelectorAll('[required]');
            let filledFields = 0;

            requiredFields.forEach(field => {
                if (field.type === 'checkbox' || field.type === 'radio') {
                    if (field.checked) filledFields++;
                } else if (field.tagName === 'SELECT') {
                    if (field.selectedIndex > 0) filledFields++;
                } else {
                    if (field.value.trim().length > 0) filledFields++;
                }
            });

            const progress = (filledFields / requiredFields.length) * 100;
            formProgressBar.style.width = `${progress}%`;
        };

        // Add listeners to all form inputs
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', updateFormProgress);
            input.addEventListener('change', updateFormProgress);
        });

        updateFormProgress(); // Initial call
    }

    // Form submission handling
    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', function(e) {
            // Show loading state
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            if (btnText && btnLoading) {
                btnText.classList.add('is-hidden');
                btnLoading.classList.remove('is-hidden');
                submitBtn.disabled = true;
            }

            // Re-initialize Lucide icons for the loading spinner
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // Note: The form will actually submit after this
            // The loading state will show until page redirects
        });
    }

    // Check for success message in URL
    if (formSuccess) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('status') === 'success') {
            formSuccess.classList.remove('is-hidden');
            if (contactForm) contactForm.classList.add('is-hidden');
            
            // Re-initialize Lucide icons for success icon
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            // Scroll to message
            setTimeout(() => {
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);

            // Remove status parameter from URL after displaying message
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    // Real-time validation feedback
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                // Only validate if user has started typing
                if (this.value.length > 0) {
                    if (this.validity.valid) {
                        this.classList.remove('invalid');
                        this.classList.add('valid');
                    } else {
                        this.classList.remove('valid');
                        this.classList.add('invalid');
                    }
                }
            });

            input.addEventListener('input', function() {
                // Clear invalid state as soon as user starts correcting
                if (this.classList.contains('invalid')) {
                    this.classList.remove('invalid');
                }
            });
        });
    }
});
