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

    // 2. Logica para animacao de scroll (fade-in)
    const contentSections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    contentSections.forEach((section) => observer.observe(section));

    // 3. Navbar scroll effects e link ativo
    const navbar = document.querySelector('.navbar');
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
            navLinks.forEach((item) => item.classList.remove('active'));
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

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navbar && scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }

        updateActiveLink();
    });

    // Chama uma vez no carregamento para definir o link inicial
    updateActiveLink();

    if (!hasSectionLinks) {
        setActiveLinkByPath();
    }

    // 4. Smooth scroll para links de navegacao
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
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
            }
        });
    });

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

    // 6. Botao voltar ao topo
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
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
