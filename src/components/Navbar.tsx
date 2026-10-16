import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Phone, MessageCircle, Menu, X, Sparkles, Play } from 'lucide-react';

interface NavbarProps {
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Simulador', href: '#calculadora' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#C9A227]/20 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
            aria-label="Ir para o início AZCON Contabilidade"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-[#C9A227] tracking-wider transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A227] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                title="Rever abertura cinematográfica"
                className="p-2 rounded-full text-neutral-400 hover:text-[#C9A227] hover:bg-[#1A1A1A] transition-colors border border-neutral-800"
                aria-label="Rever animação de abertura"
              >
                <Play className="w-3.5 h-3.5" />
              </button>
            )}

            <a
              href="https://wa.me/5543984815243?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20assessoria%20com%20a%20AZCON%20Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-neutral-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,162,39,0.5)] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-neutral-950" />
              <span>Falar no WhatsApp</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/5543984815243"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full gold-gradient-bg text-black sm:hidden"
              aria-label="WhatsApp direto"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-200 hover:text-[#C9A227] hover:bg-neutral-900 border border-neutral-800 focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A]/98 border-b border-[#C9A227]/30 backdrop-blur-xl px-6 py-8 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col space-y-4" aria-label="Menu móvel">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-neutral-200 hover:text-[#C9A227] py-2 border-b border-neutral-800/60"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/5543984815243?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20AZCON."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full gold-gradient-bg text-neutral-950 font-bold text-sm tracking-wider uppercase shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-neutral-950" />
                Falar com Especialista
              </a>

              <a
                href="tel:5543984815243"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#C9A227]/40 text-[#C9A227] font-semibold text-xs tracking-wider uppercase"
              >
                <Phone className="w-4 h-4" />
                Ligar: (43) 98481-5243
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
