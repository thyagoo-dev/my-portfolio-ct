document.addEventListener('DOMContentLoaded', () => {

    // Inicializa os ícones do Lucide
    lucide.createIcons();

    // Fallback para imagens de projetos que não existem/estão quebradas
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

    // 1. ANIMAÇÃO DE DIGITAÇÃO COM TYPED.JS
    const typed = new Typed('#typed-text', {
        strings: [
            'Python 🐍', 
            'Django 🎯', 
            'JavaScript ⚡', 
            'React ⚛️', 
            'HTML & CSS 🎨', 
            'Java ☕', 
            'Flutter 📱', 
            'MySQL 🗄️', 
            'PostgreSQL 🐘',
            'Docker 🐳',
            'Git & GitHub 🚀'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        smartBackspace: true,
        cursorChar: '|'
    });

    // 2. LÓGICA PARA ANIMAÇÃO DE SCROLL (FADE-IN)
    const contentSections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    contentSections.forEach(section => observer.observe(section));

    // 3. NAVBAR SCROLL EFFECTS E ACTIVE LINK
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Cria um mapa das seções que têm links na navbar
    const navSections = {};
    navLinks.forEach(link => {
        const href = link.getAttribute('href').substring(1); // Remove o "#"
        const section = document.getElementById(href);
        if (section) {
            navSections[href] = section;
        }
    });
    
    // Função para atualizar link ativo
    function updateActiveLink() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        let current = 'inicio'; // Valor padrão
        
        // Se estiver no topo da página, manter "Início" ativo
        if (scrollPosition < 100) {
            current = 'inicio';
        } else {
            // Percorre apenas as seções que têm links na navbar em ordem reversa
            // para pegar sempre a seção mais atual
            const entries = Object.entries(navSections).reverse();
            
            for (const [id, section] of entries) {
                const sectionTop = section.offsetTop - 200; // Offset para compensar a navbar
                
                // Se o scroll passou desta seção
                if (scrollPosition >= sectionTop) {
                    current = id;
                    break; // Para no primeiro match
                }
            }
        }
        
        // Atualiza as classes dos links
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Adiciona classe scrolled à navbar e atualiza link ativo
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Adiciona classe scrolled quando rola
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Atualiza link ativo
        updateActiveLink();
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Chama uma vez no carregamento para definir o link inicial
    updateActiveLink();

    // 5. SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Fechar menu mobile após clicar
                const menuWrapper = document.querySelector('.nav-menu-wrapper');
                const menuToggle = document.querySelector('.mobile-menu-toggle');
                if (menuWrapper && menuToggle) {
                    menuWrapper.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // 6. MENU HAMBÚRGUER MOBILE
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

    if (mobileMenuToggle && navMenuWrapper) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenuWrapper.classList.toggle('active');
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                mobileMenuToggle.classList.remove('active');
                navMenuWrapper.classList.remove('active');
            }
        });
    }

    // 7. BOTÃO VOLTAR AO TOPO
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
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
