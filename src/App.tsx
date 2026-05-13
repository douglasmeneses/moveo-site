import { useEffect, useState } from 'react';
import { ArrowRight, Activity, Brain, Shield, ChevronRight } from 'lucide-react';
import logoImg from './assets/logo.png';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-grid"></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <img src={logoImg} alt="Moveo Logo" className="logo-icon" style={{ height: '32px', width: 'auto' }} />
            <span>MOVEO</span>
          </div>
          <div className="nav-links">
            <a href="#features">Recursos</a>
            <a href="#solutions">Soluções</a>
            <a href="#contact">Contato</a>
            <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Entrar
            </button>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              Começar
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <Activity size={16} />
              <span>Inovação em Saúde e Fenotipagem Digital</span>
            </div>
            <h1 className="animate-fade-in delay-100">
              Transformando a saúde com a <span className="text-gradient">Moveo Soluções Tecnológicas</span>
            </h1>
            <p className="animate-fade-in delay-200">
              Desbloqueie o poder dos dados clínicos com nosso software avançado de rastreio de fenótipo digital e insights guiados por IA. 
              Revolucione o cuidado com o paciente e a pesquisa médica.
            </p>
            <div className="hero-actions animate-fade-in delay-300">
              <button className="btn btn-primary">
                Iniciar Teste Grátis <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline glass">
                Ver Documentação
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient">Nossas Soluções em Saúde Digital</h2>
            <p>Tecnologia de ponta para análise, monitoramento contínuo e extração de biomarcadores digitais com precisão.</p>
          </div>
          <div className="features-grid">
            {[
              {
                icon: <Activity size={28} />,
                title: "Monitoramento Contínuo",
                desc: "Colete e processe sinais vitais e comportamentais em tempo real para uma visão holística e imediata do paciente."
              },
              {
                icon: <Brain size={28} />,
                title: "Rastreio de Fenótipo Digital",
                desc: "Extraia biomarcadores digitais de forma não invasiva usando IA, identificando padrões de saúde e progressão de doenças."
              },
              {
                icon: <Shield size={28} />,
                title: "Segurança de Dados de Saúde",
                desc: "Conformidade rigorosa com normas de proteção de dados. A privacidade do paciente e a segurança clínica em primeiro lugar."
              }
            ].map((feature, idx) => (
              <div className="feature-card glass" key={idx}>
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-box glass">
            <h2>Pronto para transformar o futuro da saúde?</h2>
            <p>Junte-se a instituições médicas visionárias e pesquisadores que estão inovando com a Moveo Soluções Tecnológicas.</p>
            <button className="btn btn-primary">
              Começar Agora <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient">Fale Conosco</h2>
            <p>Tem dúvidas ou quer agendar uma demonstração? Entre em contato com a nossa equipe.</p>
          </div>
          <div className="contact-form-wrapper glass">
            <form action="mailto:moveo.solucoes@gmail.com" method="post" encType="text/plain" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="Nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="Mensagem" rows={4} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="logo">
            <img src={logoImg} alt="Moveo Logo" className="logo-icon" style={{ height: '24px', width: 'auto' }} />
            <span style={{ fontSize: '1.25rem' }}>MOVEO</span>
          </div>
          <div className="footer-text">
            © 2026 Moveo Soluções Tecnológicas. Todos os direitos reservados.
          </div>
          <div className="footer-links">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
            <a href="#contact">Contato</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
