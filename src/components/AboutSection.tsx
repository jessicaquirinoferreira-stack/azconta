import React, { useState } from 'react';
import { Quote, CheckCircle, ShieldCheck, Award, HeartHandshake } from 'lucide-react';
import brunaAboutImg from '../assets/images/bruna_almeida_sobre.png';

export const AboutSection: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12; // -6deg to +6deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="sobre"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
      aria-label="Sobre Bruna Almeida e AZCON Contabilidade"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#C9A227]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive 3D Tilt Image with Moving Gradient Border */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className="relative p-1 rounded-3xl bg-gradient-to-tr from-[#8C6D15] via-[#C9A227] to-[#F5D77F] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Glow Behind */}
              <div className="absolute -inset-1 rounded-3xl bg-[#C9A227]/30 blur-md -z-10 animate-pulse" />

              <div className="relative rounded-[22px] overflow-hidden bg-[#121212] flex flex-col justify-end">
                {/* Complete & Perfectly Adjusted Portrait */}
                <img
                  src={brunaAboutImg}
                  alt="Bruna Almeida, contadora e fundadora da AZCON Contabilidade em seu escritório moderno"
                  className="w-full h-auto max-h-[560px] object-contain sm:object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />

                {/* Bottom Overlay Gradient for elegant readability */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent pointer-events-none" />

                {/* Floating Tag Bottom */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-3.5 rounded-xl bg-[#0A0A0A]/90 backdrop-blur-md border border-[#C9A227]/40 shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#C9A227]/20 text-[#C9A227] shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                          Bruna Almeida
                        </h4>
                        <p className="text-[11px] text-[#C9A227]">
                          Contadora &bull; 12 anos de atuação estratégica
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                      CRC Ativo
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Micro-stats under photo */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-3.5 rounded-xl border border-neutral-800 bg-[#121212]/80 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C9A227]" />
                <span className="text-xs text-neutral-300 font-medium">
                  Segurança Fiscal e Jurídica
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-neutral-800 bg-[#121212]/80 flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C9A227]" />
                <span className="text-xs text-neutral-300 font-medium">
                  Atendimento Próximo & Humanizado
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Quote */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
              <span className="w-2 h-2 rounded-full gold-gradient-bg animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
                Sobre a Fundadora & A AZCON
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-8 tracking-tight">
              Quem cuida da contabilidade da sua empresa?
            </h2>

            {/* Exact Paragraphs requested */}
            <div className="space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                À frente da <strong className="text-white font-semibold">AZCON Contabilidade</strong>, <strong className="text-[#F5D77F] font-semibold">Bruna Almeida</strong> construiu sua trajetória com dedicação, conhecimento e compromisso com cada cliente. Com <strong className="text-white font-semibold">12 anos de experiência</strong> na área contábil, atua auxiliando empresas, empreendedores, MEIs e produtores rurais a manterem suas obrigações em dia, organizarem sua vida financeira e tomarem decisões mais seguras para o futuro dos seus negócios.
              </p>

              <p>
                Hoje, a AZCON é referência em contabilidade e assessoria financeira, oferecendo um atendimento próximo, estratégico e personalizado, sempre buscando as melhores soluções para cada realidade empresarial.
              </p>

              <p>
                Mais do que cuidar de números e impostos, Bruna acredita que uma contabilidade de qualidade é essencial para quem deseja crescer com organização, segurança e tranquilidade.
              </p>
            </div>

            {/* Prominent Golden Quote */}
            <div className="mt-8 p-6 rounded-2xl bg-[#14130F] border-l-4 border-[#C9A227] relative shadow-lg">
              <div className="absolute -top-3 left-4 bg-[#C9A227] text-neutral-950 p-1.5 rounded-md shadow-md">
                <Quote className="w-4 h-4" />
              </div>
              <p className="font-serif-luxury text-xl sm:text-2xl text-[#F5D77F] italic leading-snug pt-1">
                &ldquo;Na hora da crise, o contador é o médico do seu negócio.&rdquo;
              </p>
              <div className="mt-2 text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                — Bruna Almeida, Fundadora
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5543984815243?text=Ol%C3%A1%20Bruna%2C%20gostaria%20de%20conversar%20sobre%20a%20contabilidade%20da%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl gold-gradient-bg text-neutral-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md"
              >
                Conversar com a Bruna no WhatsApp
              </a>

              <span className="text-xs text-neutral-400">
                Resposta rápida no horário comercial
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
