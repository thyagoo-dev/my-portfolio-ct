import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        services: "Services",
        certificates: "Certificates",
        contact: "Contact",
        downloadCV: "Download CV"
      },
      hero: {
        role: "Developer",
        tech: "Python",
        subtech: "APIs & Django",
        description: "Focus on performance and maintenance. I deliver reliable software for critical processes, from business rules to production deployment.",
        cta: "Meet my journey"
      },
      about: {
        title: "About",
        subtitle: "Full Stack Developer",
        intro: "I am a developer focused on backend and web systems, with a degree in Systems Development and currently studying for a degree in Information Technology Management. I work on the development of APIs, business rules, data modeling, web interface and deployment, always focusing on clean architecture, security and business value. I currently work at NTIDI creating solutions for the company's web systems, using Django and MySQL, with a results-oriented approach.",
        highlights: {
          title: "Differentiators",
          backend: "Specialized Backend",
          backendDesc: "Building consistent business rules, secure authentication and scale-oriented data modeling.",
          api: "Scalable APIs",
          apiDesc: "Development of REST APIs with a focus on performance, integration between systems and long-term maintenance.",
          enterprise: "Enterprise Systems",
          enterpriseDesc: "Experience in real projects with end-to-end delivery, from planning to deployment in a production environment."
        }
      },
      common: {
        viewProjects: "View my projects",
        viewAll: "View all",
        send: "Send",
        email: "Email",
        location: "Location"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        services: "Serviços",
        certificates: "Certificados",
        contact: "Contato",
        downloadCV: "Baixar CV"
      },
      hero: {
        role: "Desenvolvedor",
        tech: "Python",
        subtech: "APIs & Django",
        description: "Foco em performance e manutenção. Entrego software confiável para processos críticos, da regra de negócio ao deploy em produção.",
        cta: "Conheça minha jornada"
      },
      about: {
        title: "Sobre",
        subtitle: "Desenvolvedor Full Stack",
        intro: "Sou desenvolvedor com foco em backend e sistemas web, formado em Desenvolvimento de Sistemas e atualmente graduando em Gestão da Tecnologia da Informação. Atuo no desenvolvimento de APIs, regras de negócio, modelagem de dados, interface web e deploy, sempre com foco em arquitetura limpa, segurança e valor de negócio. Atualmente trabalho na NTIDI criando soluções para os sistemas web da empresa, utilizando Django e MySQL, com uma abordagem orientada a resultados.",
        highlights: {
          title: "Diferenciais",
          backend: "Backend Especializado",
          backendDesc: "Construção de regras de negócio consistentes, autenticação segura e modelagem de dados orientada a escala.",
          api: "APIs Escaláveis",
          apiDesc: "Desenvolvimento de APIs REST com foco em performance, integração entre sistemas e manutenção de longo prazo.",
          enterprise: "Sistemas Empresariais",
          enterpriseDesc: "Experiência em projetos reais com entrega ponta a ponta, do planejamento ao deploy em ambiente de produção."
        }
      },
      common: {
        viewProjects: "Ver meus projetos",
        viewAll: "Ver todos",
        send: "Enviar",
        email: "E-mail",
        location: "Localização"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
