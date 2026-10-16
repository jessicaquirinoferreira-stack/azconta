import React from 'react';
import { MessageCircle, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const FinalCtaSection: React.FC = () => {
  const trackConversion = (type: 'whatsapp' | 'email') => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', `conversion_${type}_final_cta`, {
        event_category: 'Conversion',
        event_label: `Final CTA ${type}`
      });
    }
  };

  return (
    <section
      className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#14120B] to-[#0A0A0A] relative overflow-hidden border-t border-[#C9A227]/30"
      aria-label="Chamada para Ação Final"
    >
      {/* Background Animated Shimmer & Ambient Radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A227]/15 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C9A227]/10 blur-[140px] pointer-events-none" />

      {/* Decorative Gold Shimmer Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent animate-shimmer-sweep" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Official Brand Logo */}
        <div className="flex justify-center mb-6">
          <Logo size="lg" glow={true} />
        </div>

        {/* Big Title Requested */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
          Pronto para ter mais segurança e organização no seu negócio?
        </h2>

        {/* Subtitle Requested */}
        <p className="text-neutral-300 text-base sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
          Fale agora com a equipe AZCON e descubra como transformar sua contabilidade em uma vantagem competitiva.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          
          {/* Giant Pulsing Primary WhatsApp CTA */}
          <a
            href="https://wa.me/5543984815243?text=Ol%C3%A1%20Bruna%2C%20quero%20falar%20com%20a%20equipe%20AZCON%20e%20transformar%20minha%20contabilidade."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion('whatsapp')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl gold-gradient-bg text-neutral-950 font-extrabold text-base sm:text-lg tracking-wider uppercase transition-all duration-300 hover:scale-105 animate-pulse-glow shadow-[0_0_35px_rgba(201,162,39,0.5)] group"
          >
            <MessageCircle className="w-6 h-6 fill-neutral-950 transition-transform group-hover:rotate-12" />
            <span>Quero Falar no WhatsApp Agora</span>
          </a>

          {/* Secondary Email Button */}
          <a
            href="mailto:almeida.mota255@gmail.com?subject=Contato%20via%20Site%20AZCON%20Contabilidade"
            onClick={() => trackConversion('email')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-2xl border border-[#C9A227]/50 text-neutral-200 hover:text-white hover:border-[#C9A227] hover:bg-[#1A1A1A] transition-all text-sm uppercase tracking-wider font-semibold"
          >
            <Mail className="w-5 h-5 text-[#C9A227]" />
            <span>Enviar E-mail</span>
          </a>

        </div>

        {/* Confidence Assurance */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
            <span>Atendimento Direto com Bruna Almeida</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Abertura em 1 Dia Útil</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
            <span>Sem Taxas Ocultas</span>
          </div>
        </div>

      </div>
    </section>
  );
};
