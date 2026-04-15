import { useState, useEffect } from 'react';
import { FiSend, FiUser, FiMail, FiFileText, FiMessageSquare, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from '../../components/ui/Button/Button';
import { socialLinks } from '../../data/social';
import type { ContactFormData } from '../../types';
import './Contato.css';

const WHATSAPP_PHONE = '5587981677005';

function buildWhatsAppUrl(data: ContactFormData): string {
  const message = encodeURIComponent(
    `🟡 *Nova mensagem do Portfólio*\n\n` +
    `*Nome:* ${data.nome}\n` +
    `*Email:* ${data.email}\n` +
    `*Assunto:* ${data.assunto}\n\n` +
    `*Mensagem:*\n${data.mensagem}`
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
}

export default function Contato() {
  const [form, setForm] = useState<ContactFormData>({ nome: '', email: '', assunto: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Contato — Victor Kauê';
  }, []);

  const filledFields = [form.nome, form.email, form.assunto, form.mensagem].filter(Boolean).length;
  const progress = (filledFields / 4) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(form);
    window.open(url, '_blank');
    setSent(true);
    setForm({ nome: '', email: '', assunto: '', mensagem: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const socialIconMap = {
    mail: FiMail,
    linkedin: FiLinkedin,
    github: FiGithub,
    whatsapp: FaWhatsapp,
  } as const;

  return (
    <main className="page-contato">
      <section className="contact-hero content-section">
        <div className="container">
          <h1 className="section-title" style={{ justifyContent: 'center' }}>
            <FiSend size={28} />
            Entre em Contato
          </h1>
          <p className="section-subtitle text-center">
            Envie uma mensagem que ela vai direto pro meu WhatsApp.
          </p>

          <div className="contact-layout">
            {/* FORM */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-progress">
                <div className="form-progress-bar" style={{ width: `${progress}%` }} />
              </div>

              <div className="form-group">
                <label htmlFor="nome"><FiUser size={16} /> Nome</label>
                <input
                  id="nome"
                  type="text"
                  value={form.nome}
                  onChange={handleChange('nome')}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"><FiMail size={16} /> Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="assunto"><FiFileText size={16} /> Assunto</label>
                <input
                  id="assunto"
                  type="text"
                  value={form.assunto}
                  onChange={handleChange('assunto')}
                  required
                  placeholder="Qual o assunto?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem"><FiMessageSquare size={16} /> Mensagem</label>
                <textarea
                  id="mensagem"
                  value={form.mensagem}
                  onChange={handleChange('mensagem')}
                  required
                  rows={5}
                  maxLength={1000}
                  placeholder="Descreva seu projeto ou ideia..."
                />
                <span className="char-counter">{form.mensagem.length}/1000</span>
              </div>

              <Button type="submit" variant="primary" className="submit-btn">
                <FiSend size={18} />
                Enviar via WhatsApp
              </Button>

              {sent && (
                <div className="form-success">
                  ✅ Mensagem encaminhada para o WhatsApp!
                </div>
              )}
            </form>

            {/* SIDEBAR */}
            <aside className="contact-sidebar">
              <h3>Outras formas de contato</h3>
              <div className="contact-cards">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.url} className={`contact-card ${s.name.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                    {(() => {
                      const Icon = socialIconMap[s.icon as keyof typeof socialIconMap] || FiMail;
                      return <Icon size={20} aria-hidden="true" />;
                    })()}
                    <div>
                      <strong>{s.name}</strong>
                      <span>{s.detail}</span>
                    </div>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
