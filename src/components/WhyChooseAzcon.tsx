import React, { useEffect, useState, useRef } from 'react';
import { Award, Zap, HeartHandshake, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseAzcon: React.FC = () => {
  const [counts, setCounts] = useState({
    years: 0,
    days: 0,
    satisfaction: 0,
    companies: 0,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers smoothly
          const duration = 2000;
          const steps = 40;
          const intervalTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
              years: Math.round(progress * 12),
              days: 1,
              satisfaction: Math.round(progress * 100),
              companies: Math.round(progress * 1000),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounts({
                years: 12,
                days: 1,
                satisfaction: 100,
                companies: 1000,
              });
            }
          }, intervalTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const metrics = [
    {
      icon: Award,
      value: `${counts.years}+`,
      label: 'Anos de experiência',
      description: 'Liderança sólida e conhecimento aprofundado na legislação contábil e tributária brasileira.'
    },
    {
      icon: Zap,
      value: `${counts.days} Dia`,
      label: 'Útil para abrir sua empresa',
      description: 'Processos desburocratizados para que seu CNPJ comece a faturar imediatamente.'
    },
    {
      icon: HeartHandshake,
      value: `${counts.satisfaction}%`,
      label: 'Atendimento personalizado',
      description: 'Contato direto com contadores de verdade, sem robôs confusos ou filas infinitas.'
    },
    {
      icon: Building2,
      value: `+${counts.companies}`,
      label: 'Empresas impactadas',
      description: 'De MEIs a grandes produtores rurais com finanças organizadas e impostos reduzidos.'
    }
  ];

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-neutral-900"
      aria-label="Por que escolher a AZCON Contabilidade"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
              Nossos Diferenciais
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-6">
            Por que Escolher a AZCON?
          </h2>

          <p className="font-serif-luxury text-xl sm:text-2xl text-[#C9A227] italic mb-4">
            &ldquo;AZCON é solução, é parceria, é resultado.&rdquo;
          </p>

          <p className="text-neutral-400 text-base sm:text-lg">
            Nascemos para quebrar a frieza dos escritórios contábeis tradicionais, entregando uma consultoria de alto nível focada no lucro, no rating e na proteção jurídica do seu negócio.
          </p>
        </div>

        {/* Counter Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="luxury-card rounded-2xl p-6 text-center group transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1A1812] border border-[#C9A227]/30 flex items-center justify-center text-[#F5D77F] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="font-serif-luxury text-3xl sm:text-4xl font-extrabold gold-gradient-text mb-1">
                  {item.value}
                </div>

                <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-2">
                  {item.label}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-neutral-800">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#C9A227]/10 text-[#C9A227] shrink-0 mt-1">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Sem Surpresas Fiscais</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Monitoramos constantemente alterações na legislação tributária para que sua empresa nunca caia na malha fina ou sofra autuações.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#C9A227]/10 text-[#C9A227] shrink-0 mt-1">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Foco em Crédito & Rating</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Alinhamos balanços e certidões para que os bancos e fornecedores aprovem limites de crédito mais altos com juros menores.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#C9A227]/10 text-[#C9A227] shrink-0 mt-1">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">Acesso Direto à Contadora</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Você tem o WhatsApp de quem entende o seu caso a fundo, garantindo agilidade imediata nas decisões do dia a dia.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
