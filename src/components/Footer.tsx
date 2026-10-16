import React from 'react';
import { Logo } from './Logo.tsx';
import { MessageCircle, Mail, Instagram, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] border-t border-[#C9A227]/25 text-neutral-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm mb-6">
              Cuidamos da sua empresa hoje para construir um futuro mais sólido amanhã. Assessoria contábil, tributária e financeira estratégica sob a liderança de Bruna Almeida.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/azconcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141414] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-all"
                aria-label="Instagram da AZCON Contabilidade"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5543984815243"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#141414] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500 transition-all"
                aria-label="WhatsApp da AZCON"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="mailto:almeida.mota255@gmail.com"
                className="w-10 h-10 rounded-full bg-[#141414] border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-all"
                aria-label="E-mail da AZCON"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif-luxury font-bold text-base mb-4 tracking-wider">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#sobre" className="hover:text-[#C9A227] transition-colors">
                  Sobre Bruna Almeida
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C9A227] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#C9A227] transition-colors">
                  Simulador Tributário & Rating
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#C9A227] transition-colors">
                  Por que Escolher a AZCON
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#C9A227] transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C9A227] transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C9A227] transition-colors">
                  Diagnóstico Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Official Contacts Column */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-serif-luxury font-bold text-base mb-4 tracking-wider">
              Canais Oficiais
            </h4>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block">
                  WhatsApp Oficial
                </span>
                <a
                  href="https://wa.me/5543984815243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C9A227] font-semibold transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  (43) 98481-5243
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block">
                  E-mail Corporativo
                </span>
                <a
                  href="mailto:almeida.mota255@gmail.com"
                  className="text-white hover:text-[#C9A227] transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-4 h-4 text-[#C9A227]" />
                  almeida.mota255@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Inscrição Cadastral
                </span>
                <span className="text-white font-mono text-xs flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  CNPJ: 69.480.748/0001-35
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block">
                  Responsável Técnica
                </span>
                <span className="text-[#F5D77F] font-medium text-xs">
                  Bruna Almeida — Contadora (12 anos de experiência)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p className="text-center sm:text-left">
            &copy; 2025 AZCON Contabilidade - Assessoria Empresarial. Todos os direitos reservados. CNPJ: 69.480.748/0001-35
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#C9A227] transition-colors cursor-pointer group"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
};
