import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, Instagram } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/businessLogic.ts';
import { Logo } from './Logo.tsx';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendQuick = (e: React.FormEvent) => {
    e.preventDefault();
    const message = quickMsg.trim() || 'Olá Bruna! Gostaria de uma assessoria com a AZCON Contabilidade.';
    window.open(generateWhatsAppUrl('5543984815243', message), '_blank');
    setIsOpen(false);
    setQuickMsg('');
  };

  const trackFloatingClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_click_whatsapp_floating', {
        event_category: 'Floating Widget',
        event_label: 'WhatsApp Floating Pulse'
      });
    }
  };

  const trackInstagramClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_click_instagram_floating', {
        event_category: 'Floating Widget',
        event_label: 'Instagram Floating Button'
      });
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        hasScrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
      aria-label="Canais Rápidos Flutuantes"
    >
      {/* Quick WhatsApp Popover Window */}
      {isOpen && (
        <div className="mb-4 w-72 sm:w-80 rounded-2xl bg-[#111B21] border border-[#C9A227]/50 shadow-[0_10px_40px_rgba(0,0,0,0.85)] overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="bg-[#202C33] p-4 text-white flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <Logo variant="shield-only" size="sm" />
              <div>
                <h4 className="text-xs font-bold leading-tight text-white">
                  Bruna Almeida • AZCON
                </h4>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online no WhatsApp
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1"
              aria-label="Fechar janela"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#0B141A]">
            <div className="bg-[#202C33] text-neutral-200 text-xs p-3 rounded-2xl rounded-tl-none shadow mb-3">
              Olá! Como posso ajudar você e sua empresa hoje? Envie sua mensagem para iniciarmos o atendimento.
            </div>

            <form onSubmit={handleSendQuick} className="flex gap-2">
              <input
                type="text"
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="flex-1 px-3 py-2 rounded-xl bg-[#202C33] border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#C9A227]"
              />
              <button
                type="submit"
                className="p-2.5 rounded-xl gold-gradient-bg text-black hover:scale-105 transition-transform"
                aria-label="Enviar para WhatsApp"
              >
                <Send className="w-3.5 h-3.5 fill-black" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Buttons Stack (Instagram on top, WhatsApp on bottom) */}
      <div className="flex flex-col items-center gap-3">
        
        {/* Official Instagram Button (Above WhatsApp) */}
        <div className="relative group">
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#141414] border border-[#C9A227]/40 text-[#F5D77F] text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Siga @azconcontabilidade
          </div>

          {/* Subtle Outer Glow */}
          <div className="absolute -inset-1 rounded-full bg-pink-600/30 blur-sm group-hover:opacity-100 opacity-60 transition-opacity" />

          <a
            href="https://www.instagram.com/azconcontabilidade"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagramClick}
            className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(220,39,67,0.35)] border border-[#C9A227]/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Instagram oficial da AZCON Contabilidade"
          >
            <Instagram className="w-6 h-6 stroke-[1.8]" />
          </a>
        </div>

        {/* WhatsApp Main Floating Pulse Button */}
        <div className="relative group">
          
          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-xl bg-[#141414] border border-[#C9A227]/40 text-[#F5D77F] text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
              Fale conosco no WhatsApp
            </div>
          )}

          {/* Pulse Waves */}
          <div className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-ping" />
          <div className="absolute -inset-2 rounded-full bg-[#C9A227]/30 blur-md animate-pulse" />

          <button
            onClick={() => {
              trackFloatingClick();
              setIsOpen(!isOpen);
            }}
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] border-2 border-white/20 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Abrir conversa no WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-white" />
            
            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-600 border-2 border-[#0A0A0A] flex items-center justify-center text-[9px] font-bold text-white">
              1
            </span>
          </button>

        </div>

      </div>
    </div>
  );
};
