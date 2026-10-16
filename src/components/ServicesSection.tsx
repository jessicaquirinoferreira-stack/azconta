import React, { useState } from 'react';
import {
  Rocket,
  Briefcase,
  Tractor,
  TrendingUp,
  CreditCard,
  FileCheck2,
  FileText,
  Search,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/businessLogic.ts';

interface ServiceItem {
  id: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  message: string;
}

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'abertura',
      icon: Rocket,
      badge: 'Agilidade Máxima',
      title: 'Abertura de Empresa Rápida',
      description: 'Sua empresa aberta em até 1 dia útil, com total segurança jurídica e fiscal.',
      benefits: [
        'Registro na Junta Comercial sem burocracia',
        'CNPJ, Inscrição Estadual e Municipal liberados',
        'Definição da melhor atividade (CNAEs ideais)',
        'Suporte completo para alvarás e licenças'
      ],
      message: 'Olá Bruna! Gostaria de abrir minha empresa em até 1 dia útil com a AZCON.'
    },
    {
      id: 'mei',
      icon: Briefcase,
      badge: 'Empreendedores',
      title: 'Contabilidade para MEI',
      description: 'Abertura, alteração cadastral, baixa de MEI, emissão de nota fiscal e guia DAS.',
      benefits: [
        'Regularização e parcelamento de débitos na Receita',
        'Declaração Anual do MEI (DASN-SIMEI)',
        'Emissão correta de notas fiscais de serviço e venda',
        'Planejamento para desenquadramento no momento certo'
      ],
      message: 'Olá Bruna! Preciso de assessoria contábil para o meu MEI.'
    },
    {
      id: 'rural',
      icon: Tractor,
      badge: 'Agronegócio',
      title: 'Assessoria para Produtor Rural',
      description: 'Regularização de CNPJ, emissão de nota fiscal e enquadramento tributário rural.',
      benefits: [
        'Inscrição Estadual de Produtor Rural e CNPJ Agro',
        'Gestão de Livro Caixa Digital do Produtor Rural (LCDPR)',
        'Funrural e planejamento tributário para safras',
        'Assessoria para acesso a linhas de crédito agrícola'
      ],
      message: 'Olá Bruna! Tenho interesse na Assessoria para Produtor Rural da AZCON.'
    },
    {
      id: 'planejamento',
      icon: TrendingUp,
      badge: 'Economia Legal',
      title: 'Planejamento Tributário (Lucro Real / Presumido / Simples)',
      description: 'Reduza sua carga tributária com estratégias legais e personalizadas.',
      benefits: [
        'Estudo comparativo minucioso entre os 3 regimes',
        'Segregação correta de tributos monofásicos e ICMS-ST',
        'Redução lícita de impostos conforme a legislação vigente',
        'Recuperação de créditos tributários pagos a maior'
      ],
      message: 'Olá Bruna! Gostaria de um Planejamento Tributário estratégico para minha empresa.'
    },
    {
      id: 'score',
      icon: CreditCard,
      badge: 'Acesso a Crédito',
      title: 'Limpeza de Nome e Score de Crédito',
      description: 'Rating alto, nome limpo e mais acesso a crédito PJ.',
      benefits: [
        'Análise de restrições em birôs de crédito (Serasa, SPC, SCR)',
        'Estratégias contábeis para elevar o Rating bancário',
        'Demonstrações contábeis auditadas que impressionam gerentes',
        'Abertura de portas para capital de giro e financiamentos'
      ],
      message: 'Olá Bruna! Preciso melhorar o Rating e o Score de Crédito da minha empresa.'
    },
    {
      id: 'completa',
      icon: FileCheck2,
      badge: 'Gestão Total',
      title: 'Contabilidade Completa (Fiscal, Pessoal e Legalização)',
      description: 'Da folha de pagamento às obrigações fiscais, cuidamos de tudo para você focar em crescer.',
      benefits: [
        'Folha de pagamento, pró-labore, eSocial e benefícios',
        'Escrituração fiscal e apuração pontual de guias',
        'Balanço patrimonial, DRE e relatórios gerenciais',
        'Legalização completa e certidões negativas (CNDs)'
      ],
      message: 'Olá Bruna! Gostaria de contratar a Contabilidade Completa para minha empresa.'
    },
    {
      id: 'ir',
      icon: FileText,
      badge: 'Blindagem Pessoal',
      title: 'Declaração de Imposto de Renda',
      description: 'Evite a malha fina com declaração feita por especialistas.',
      benefits: [
        'Convergência correta entre pessoa física e jurídica',
        'Declaração de investimentos, imóveis, cripto e agronegócio',
        'Aproveitamento máximo de deduções legais',
        'Acompanhamento contínuo do processamento junto à Receita'
      ],
      message: 'Olá Bruna! Quero fazer minha Declaração de Imposto de Renda com a AZCON.'
    },
    {
      id: 'diagnostico',
      icon: Search,
      badge: 'Consultoria',
      title: 'Diagnóstico Financeiro Empresarial',
      description: 'Identificamos o que trava o crescimento e o crédito da sua empresa.',
      benefits: [
        'Raio-x detalhado do fluxo de caixa e margens operacionais',
        'Identificação de gargalos financeiros e despesas ocultas',
        'Projeção para expansão e controle de inadimplência',
        'Plano de ação claro para aumento de rentabilidade'
      ],
      message: 'Olá Bruna! Gostaria de solicitar um Diagnóstico Financeiro Empresarial gratuito.'
    }
  ];

  return (
    <section
      id="servicos"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
      aria-label="Serviços Especializados da AZCON Contabilidade"
    >
      {/* Background Decor */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#C9A227]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
              Soluções Especializadas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-6">
            Nossos Serviços Estratégicos
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Mais do que cumprir exigências legais, oferecemos a inteligência contábil e a assessoria necessária para proteger seu patrimônio e expandir seus negócios com segurança.
          </p>
        </div>

        {/* Services Grid with 3D Hover & Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227] hover:shadow-[0_15px_30px_rgba(201,162,39,0.18)]"
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-full border border-[#C9A227]/20">
                      {service.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E1B13] to-[#121212] border border-[#C9A227]/30 flex items-center justify-center text-[#F5D77F] mb-5 group-hover:scale-110 group-hover:border-[#C9A227] transition-all duration-300 shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-luxury font-bold text-xl text-white group-hover:text-[#F5D77F] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-[#C9A227] transition-colors flex items-center gap-1">
                    Ver detalhes
                  </span>
                  <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-400 group-hover:bg-[#C9A227] group-hover:text-black group-hover:border-[#C9A227] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Impact Statement below Grid */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#17150F] via-[#1E1A11] to-[#17150F] border border-[#C9A227]/40 text-center shadow-xl">
          <p className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-white font-medium">
            &ldquo;Na AZCON, a gente cuida de tudo isso.{' '}
            <span className="gold-gradient-text font-bold">
              De nome limpo a um rating alto.
            </span>
            &rdquo;
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href="https://wa.me/5543984815243?text=Ol%C3%A1%20Bruna%2C%20gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20da%20AZCON."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-md"
            >
              Consultar Condições para sua Empresa
            </a>
          </div>
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#121212] border border-[#C9A227]/60 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full border border-[#C9A227]/30 inline-block mb-3">
              {selectedService.badge}
            </span>

            <h3 className="font-serif-luxury text-2xl font-bold text-white mb-3">
              {selectedService.title}
            </h3>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#F5D77F] mb-3">
                O que inclui esta assessoria:
              </h4>
              <ul className="space-y-2.5">
                {selectedService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={generateWhatsAppUrl('5543984815243', selectedService.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider text-center shadow-lg hover:scale-[1.02] transition-transform"
              >
                Falar com Especialista no WhatsApp
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3.5 px-5 rounded-xl border border-neutral-700 text-neutral-300 text-xs uppercase font-semibold hover:bg-neutral-800 transition-colors"
              >
                Voltar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
