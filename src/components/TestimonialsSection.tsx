import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, CheckCircle, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  text: string;
  tag: string;
}

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Dr. Leonardo Silveira',
      role: 'Médico & Empreendedor Clínico',
      company: 'Clínica Integrada Silveira',
      avatarText: 'LS',
      rating: 5,
      text: 'A Bruna e a equipe da AZCON reduziram os impostos da nossa clínica em quase 28% no primeiro ano de planejamento tributário. O atendimento no WhatsApp é imediato, humanizado e cirúrgico.',
      tag: 'Economia Tributária'
    },
    {
      id: 2,
      name: 'Mariana Duarte',
      role: 'Sócia Fundadora',
      company: 'Duarte Import & Varejo',
      avatarText: 'MD',
      rating: 5,
      text: 'Minha empresa foi aberta em exatamente 1 dia útil! Em 24 horas já estávamos com o CNPJ gerado e conta jurídica aprovada no banco. O profissionalismo da AZCON é de outro planeta.',
      tag: 'Empresa Aberta em 1 Dia'
    },
    {
      id: 3,
      name: 'Rafael Guimarães',
      role: 'Produtor Rural & Pecuarista',
      company: 'Fazenda Santa Maria Agro',
      avatarText: 'RG',
      rating: 5,
      text: 'Poucos contadores entendem a fundo o agronegócio, o Funrural e o LCDPR como a Bruna Almeida. Ela organizou toda a contabilidade da fazenda e nos livrou de uma enorme dor de cabeça fiscal.',
      tag: 'Produtor Rural'
    },
    {
      id: 4,
      name: 'Lucas Barreto',
      role: 'CEO & Desenvolvedor',
      company: 'Nexus Tech Solutions',
      avatarText: 'LB',
      rating: 5,
      text: 'Estávamos com o score de crédito travado nos bancos. A AZCON auditou nosso balanço, alinhou as certidões e conseguimos um limite de crédito de R$ 350 mil para investimento em máquinas.',
      tag: 'Rating & Score Elevados'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="depoimentos"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
      aria-label="Depoimentos e Prova Social da AZCON Contabilidade"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
            <Star className="w-3.5 h-3.5 text-[#F5D77F] fill-[#F5D77F]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
              Prova Social & Credibilidade
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-6">
            O que Nossos Clientes Dizem
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            A verdadeira medida da nossa assessoria está na tranquilidade e nos resultados alcançados por quem confia seu CNPJ à AZCON.
          </p>
        </div>

        {/* 2-Column Social Proof: Carousel Left + Stylized Real WhatsApp Print Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Testimonial Carousel */}
          <div className="lg:col-span-7">
            <div className="luxury-card rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              
              {/* Rating stars */}
              <div className="flex items-center gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F5D77F] fill-[#F5D77F]" />
                ))}
                <span className="ml-2 text-xs font-semibold text-neutral-300">
                  5.0 / 5.0 Avaliações
                </span>
              </div>

              {/* Tag */}
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full border border-[#C9A227]/25 inline-block mb-4">
                {testimonials[currentIndex].tag}
              </span>

              {/* Text Quote */}
              <p className="font-serif-luxury text-xl sm:text-2xl text-neutral-100 italic leading-relaxed min-h-[120px] mb-8">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              {/* Author Info & Navigation Controls */}
              <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gold-gradient-bg text-black font-bold font-serif-luxury flex items-center justify-center text-sm shadow-md">
                    {testimonials[currentIndex].avatarText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-tight">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {testimonials[currentIndex].role} &bull; {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-colors"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2.5 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-[#C9A227] hover:border-[#C9A227] transition-colors"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Stylized Real WhatsApp Print Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Phone/Chat Card Container */}
            <div className="w-full max-w-sm rounded-3xl bg-[#111B21] border border-[#C9A227]/40 shadow-2xl overflow-hidden p-1 relative">
              
              {/* WhatsApp Chat Header */}
              <div className="bg-[#202C33] px-4 py-3 flex items-center justify-between text-white border-b border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <Logo variant="shield-only" size="sm" />
                  <div>
                    <div className="text-xs font-bold leading-tight flex items-center gap-1">
                      Bruna Almeida • AZCON
                      <CheckCircle className="w-3.5 h-3.5 text-[#53bdeb] fill-[#53bdeb]" />
                    </div>
                    <div className="text-[10px] text-emerald-400">online agora</div>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
                  WhatsApp VIP
                </span>
              </div>

              {/* Chat Body */}
              <div className="p-4 space-y-3 bg-[#0B141A] min-h-[220px] flex flex-col justify-end text-xs">
                
                {/* Client incoming message */}
                <div className="bg-[#202C33] text-neutral-200 p-3 rounded-2xl rounded-tl-none max-w-[85%] self-start shadow">
                  <p className="leading-relaxed">
                    Bruna, a alteração e regularização do nosso CNPJ saíram hoje! Já conseguimos assinar o contrato com o novo fornecedor.
                  </p>
                  <span className="text-[9px] text-neutral-400 block text-right mt-1">10:42</span>
                </div>

                {/* Second enthusiast client message matching prompt requirement */}
                <div className="bg-[#202C33] text-neutral-200 p-3 rounded-2xl rounded-tl-none max-w-[90%] self-start shadow border-l-2 border-[#C9A227]">
                  <p className="leading-relaxed font-medium">
                    &ldquo;Atendimento rápido, ágil e sem complicação. Simplesmente incrível!&rdquo; 🔥👏
                  </p>
                  <span className="text-[9px] text-neutral-400 block text-right mt-1">10:44</span>
                </div>

                {/* Bruna response message */}
                <div className="bg-[#005C4B] text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] self-end shadow">
                  <p className="leading-relaxed">
                    Que notícia maravilhosa! Conte sempre com a assessoria da AZCON para manter tudo 100% blindado. 🚀
                  </p>
                  <span className="text-[9px] text-emerald-200 block text-right mt-1">10:46 &bull; ✓✓</span>
                </div>

              </div>

              {/* Credibility Badge Bar */}
              <div className="bg-[#202C33] p-3 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span className="text-[11px] font-bold text-white">
                    Empresa aberta em 1 dia
                  </span>
                </div>
                <span className="text-[10px] text-[#F5D77F] font-semibold">
                  +1 cliente satisfeito
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
