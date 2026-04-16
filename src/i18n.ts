import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        sobre: 'About',
        projects: 'Projects',
        projetos: 'Projects',
        services: 'Services',
        servicos: 'Services',
        certificates: 'Certificates',
        certificados: 'Certificates',
        contact: 'Contact',
        contato: 'Contact',
        downloadCV: 'Download CV',
      },
      hero: {
        role: 'Developer',
        tech: 'Python',
        subtech: 'APIs & Django',
        description:
          'Focus on performance and maintenance. I deliver reliable software for critical processes, from business rules to production deployment.',
        cta: 'Meet my journey',
      },
      about: {
        title: 'About',
        subtitle: 'Full Stack Developer',
        intro:
          "I am a developer focused on backend and web systems, with a degree in Systems Development and currently studying Information Technology Management. I build APIs, business rules, data modeling, web interfaces and deployment with focus on clean architecture, security and business value.",
        highlights: {
          title: 'Differentiators',
          backend: 'Specialized Backend',
          backendDesc: 'Consistent business rules, secure authentication and scale-oriented data modeling.',
          api: 'Scalable APIs',
          apiDesc: 'REST API development focused on performance, integration and long-term maintenance.',
          enterprise: 'Enterprise Systems',
          enterpriseDesc: 'Experience in real projects with end-to-end delivery, from planning to production.',
        },
      },
      projects: {
        title: 'My Projects',
        subtitle: 'Personal and professional projects developed from scratch to deployment.',
        categories: {
          all: 'All',
          personal: 'Personal',
          real: 'Professional',
        },
        noFound: 'No projects found in this category.',
      },
      certs: {
        title: 'Certifications',
        subtitle: 'Technical development and continuous improvement.',
      },
      expertise: {
        title: 'Technical Expertise',
        subtitle: 'My technical stack and competencies.',
      },
      common: {
        viewProjects: 'View my projects',
        viewAll: 'View all',
        send: 'Send',
        email: 'Email',
        location: 'Location',
        at: 'at',
      },
    },
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        sobre: 'Sobre',
        projects: 'Projetos',
        projetos: 'Projetos',
        services: 'Serviços',
        servicos: 'Serviços',
        certificates: 'Certificados',
        certificados: 'Certificados',
        contact: 'Contato',
        contato: 'Contato',
        downloadCV: 'Baixar CV',
      },
      hero: {
        role: 'Desenvolvedor',
        tech: 'Python',
        subtech: 'APIs & Django',
        description:
          'Foco em performance e manutenção. Entrego software confiável para processos críticos, da regra de negócio ao deploy em produção.',
        cta: 'Conheça minha jornada',
      },
      about: {
        title: 'Sobre',
        subtitle: 'Desenvolvedor Full Stack',
        intro:
          'Sou desenvolvedor com foco em backend e sistemas web, formado em Desenvolvimento de Sistemas e graduando em Gestão da Tecnologia da Informação. Atuo no desenvolvimento de APIs, regras de negócio, modelagem de dados, interface web e deploy, com foco em arquitetura limpa, segurança e valor de negócio.',
        highlights: {
          title: 'Diferenciais',
          backend: 'Backend Especializado',
          backendDesc: 'Regras de negócio consistentes, autenticação segura e modelagem de dados orientada à escala.',
          api: 'APIs Escaláveis',
          apiDesc: 'Desenvolvimento de APIs REST com foco em performance, integração e manutenção de longo prazo.',
          enterprise: 'Sistemas Empresariais',
          enterpriseDesc: 'Experiência em projetos reais com entrega ponta a ponta, do planejamento ao deploy em produção.',
        },
      },
      projects: {
        title: 'Meus Projetos',
        subtitle: 'Projetos pessoais e profissionais desenvolvidos do zero ao deploy.',
        categories: {
          all: 'Todos',
          personal: 'Pessoais',
          real: 'Profissionais',
        },
        noFound: 'Nenhum projeto encontrado nessa categoria.',
      },
      certs: {
        title: 'Certificações',
        subtitle: 'Aprimoramento técnico e aprendizado contínuo.',
      },
      expertise: {
        title: 'Expertise técnica',
        subtitle: 'Minha stack técnica e competências.',
      },
      common: {
        viewProjects: 'Ver meus projetos',
        viewAll: 'Ver todos',
        send: 'Enviar',
        email: 'E-mail',
        location: 'Localização',
        at: 'em',
      },
    },
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  supportedLngs: ['pt', 'en'],
  fallbackLng: 'pt',
  load: 'languageOnly',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    lookupLocalStorage: 'portfolio-lang',
    caches: ['localStorage'],
    convertDetectedLanguage: (lng) => (lng?.toLowerCase().startsWith('en') ? 'en' : 'pt'),
  },
});

export default i18n;
