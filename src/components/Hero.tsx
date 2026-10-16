import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Award, Users, CheckCircle2, Building2 } from 'lucide-react';
import { Logo } from './Logo.tsx';
import heroImage from '../assets/images/bruna_almeida_hero_1792151600801.jpg';

export const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#servicos');
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

  const trackWhatsAppConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_click_whatsapp_hero', {
        event_category: 'Lead',
        event_label: 'WhatsApp Hero Button'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0A0A0A]"
      aria-label="Apresentação AZCON Contabilidade com Bruna Almeida"
    >
      {/* Background Luxury Ambient Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none luxury-noise opacity-30" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#C9A227]/8 blur-[100px] pointer-events-none" />

      {/* Luxury Golden Sparkles / Floating Dust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#F5D77F]/60 animate-ping duration-1000" />
        <span className="absolute top-[45%] left-[28%] w-1 h-1 rounded-full bg-[#C9A227]/70 animate-pulse duration-700" />
        <span className="absolute top-[75%] left-[18%] w-2 h-2 rounded-full bg-[#C9A227]/40 blur-xs animate-pulse duration-1000" />
        <span className="absolute top-[25%] right-[35%] w-1.5 h-1.5 rounded-full bg-[#F5D77F]/60 animate-pulse duration-500" />
        <span className="absolute top-[68%] right-[8%] w-2 h-2 rounded-full bg-[#C9A227]/50 blur-xs animate-ping duration-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Content & Direct CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Micro-Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A]/90 border border-[#C9A227]/40 w-fit mb-6 shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5D77F]">
                Assessoria Contábil & Estratégica Premium
              </span>
            </div>

            {/* Main Founder Headline with Golden Sheen on Hover */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold tracking-tight text-white mb-3 group cursor-default">
              <span className="inline-block relative">
                Bruna Almeida
                <span className="absolute -bottom-1 left-0 w-24 h-1 gold-gradient-bg rounded-full transition-all duration-500 group-hover:w-full" />
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-serif-luxury font-normal text-[#C9A227] mb-6 tracking-wide">
              Contadora e fundadora da AZCON Contabilidade
            </h2>

            {/* Core Supporting Text 1 & 2 */}
            <div className="space-y-3 mb-8 max-w-xl">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <p className="text-base sm:text-lg text-neutral-200 font-medium leading-relaxed">
                  12 anos de experiência em contabilidade e assessoria financeira.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                  Soluções estratégicas para empresas, MEIs, empreendedores e produtores rurais.
                </p>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="https://wa.me/5543984815243?text=Ol%C3%A1%20Bruna%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20AZCON%20Contabilidade."
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl gold-gradient-bg text-neutral-950 font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] animate-pulse-glow hover:shadow-[0_0_30px_rgba(201,162,39,0.7)] group text-center"
              >
                <MessageCircle className="w-5 h-5 fill-neutral-950 transition-transform group-hover:rotate-12" />
                <span>Falar com um especialista no WhatsApp</span>
              </a>

              <a
                href="#servicos"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#C9A227]/60 text-neutral-200 hover:text-white hover:border-[#C9A227] hover:bg-[#C9A227]/10 transition-all duration-300 font-semibold text-sm tracking-wider uppercase group text-center"
              >
                <span>Conheça nossos serviços</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Authority Trust Badges in Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800/80 max-w-xl">
              <div className="luxury-card p-3 rounded-lg flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#C9A227]/10 text-[#C9A227] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-white leading-none">12 Anos</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">de experiência</div>
                </div>
              </div>

              <div className="luxury-card p-3 rounded-lg flex items-center gap-3">
                <div className="p-2 rounded-md bg-[#C9A227]/10 text-[#C9A227] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-white leading-none">+1000</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">empresas atendidas</div>
                </div>
              </div>

              <div className="luxury-card p-3 rounded-lg flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-md bg-[#C9A227]/10 text-[#C9A227] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-bold text-[#F5D77F] leading-none">1 Dia Útil</div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">abertura rápida</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Bruna Almeida Photographic Showcase with Diagonal Wave Divider & Gold Foil */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Elegant Outer Glow & Gradient Rings */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Golden Diagonal Backdrop Curve */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#8C6D15]/40 via-[#C9A227]/30 to-transparent rounded-3xl blur-xl transform rotate-1 opacity-70" />
              
              {/* Photo Frame Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C9A227]/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#121212] group">
                <img
                  src={heroImage}
                  alt="Bruna Almeida, contadora e fundadora da AZCON Contabilidade segurando o cartão executivo"
                  className="w-full h-auto object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Gold Metallic Glass Overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                {/* Diagonal Accent Wave Line in SVG */}
                <svg
                  className="absolute bottom-0 left-0 w-full h-16 pointer-events-none text-[#0A0A0A]"
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,0 C150,50 250,10 400,45 L400,60 L0,60 Z" />
                </svg>

                {/* Floating Micro-Card Over Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0A0A0A]/90 backdrop-blur-md border border-[#C9A227]/40 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Logo size="sm" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    CRC Ativo
                  </span>
                </div>

              </div>

              {/* Floating Quality Seal */}
              <div className="absolute -top-4 -right-4 bg-[#121212] border border-[#C9A227] p-2.5 rounded-2xl shadow-xl flex items-center gap-2 transform rotate-3 hover:rotate-0 transition-transform">
                <Award className="w-5 h-5 text-[#F5D77F]" />
                <div className="leading-tight pr-1">
                  <div className="text-[9px] uppercase tracking-wider text-neutral-400">Padrão Ouro</div>
                  <div className="text-xs font-bold text-[#F5D77F]">Assessoria Premium</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
