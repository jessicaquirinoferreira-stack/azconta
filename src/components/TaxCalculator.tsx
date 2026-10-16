import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldAlert, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react';
import { calculateTaxDiagnostic, generateWhatsAppUrl } from '../utils/businessLogic.ts';

export const TaxCalculator: React.FC = () => {
  const [regime, setRegime] = useState<'mei' | 'simples' | 'presumido' | 'rural'>('simples');
  const [revenue, setRevenue] = useState<number>(35000);
  const [hasRestrictions, setHasRestrictions] = useState<boolean>(false);
  const [accountingStatus, setAccountingStatus] = useState<'regular' | 'irregular' | 'starting'>('regular');

  const diagnostic = calculateTaxDiagnostic({
    regime,
    monthlyRevenue: revenue,
    hasCreditRestrictions: hasRestrictions,
    currentAccountingStatus: accountingStatus
  });

  const regimeLabels: Record<string, { title: string; subtitle: string }> = {
    mei: { title: 'MEI', subtitle: 'Até R$ 81 mil/ano' },
    simples: { title: 'Simples Nacional', subtitle: 'Comércio, Serviços ou Indústria' },
    presumido: { title: 'Lucro Presumido', subtitle: 'Médio Porte / Margens Altas' },
    rural: { title: 'Produtor Rural', subtitle: 'Pessoa Física ou CNPJ Agro' }
  };

  const getCustomWhatsAppMessage = () => {
    return `Olá Bruna! Fiz uma simulação na calculadora da AZCON:
- Regime: ${regimeLabels[regime].title}
- Faturamento estimado: R$ ${revenue.toLocaleString('pt-BR')}/mês
- Restrições no nome/score: ${hasRestrictions ? 'Sim, preciso limpar/melhorar' : 'Não'}
- Potencial de economia calculado: R$ ${diagnostic.estimatedAnnualSavings.toLocaleString('pt-BR')}/ano
Gostaria de agendar meu diagnóstico gratuito!`;
  };

  return (
    <section
      id="calculadora"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
      aria-label="Simulador de Economia Tributária e Rating AZCON"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
              Ferramenta Exclusiva AZCON
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-6">
            Simulador de Economia & Rating de Crédito
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            Descubra em segundos como um enquadramento tributário inteligente e uma gestão contábil estratégica podem reduzir impostos e elevar o crédito da sua empresa.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 luxury-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Step 1: Select Regime */}
              <div className="mb-8">
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                  1. Selecione o modelo atual ou desejado:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(['mei', 'simples', 'presumido', 'rural'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRegime(r)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        regime === r
                          ? 'border-[#C9A227] bg-[#C9A227]/15 shadow-[0_0_15px_rgba(201,162,39,0.25)]'
                          : 'border-neutral-800 bg-[#141414] hover:border-neutral-700'
                      }`}
                    >
                      <div className={`text-xs font-bold ${regime === r ? 'text-[#F5D77F]' : 'text-neutral-200'}`}>
                        {regimeLabels[r].title}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-0.5 line-clamp-1">
                        {regimeLabels[r].subtitle}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Monthly Revenue Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="revenue-range" className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    2. Faturamento médio mensal estimado:
                  </label>
                  <span className="font-mono text-lg font-bold text-[#F5D77F]">
                    R$ {revenue.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  id="revenue-range"
                  type="range"
                  min="2000"
                  max="300000"
                  step="2000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
                  aria-label="Faturamento médio mensal"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                  <span>R$ 2.000</span>
                  <span>R$ 150.000</span>
                  <span>R$ 300.000+</span>
                </div>
              </div>

              {/* Step 3: Credit & Restrictions Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                    Restrições de Crédito (Score/Protesto)?
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setHasRestrictions(false)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        !hasRestrictions
                          ? 'border-[#C9A227] bg-[#C9A227]/20 text-[#F5D77F]'
                          : 'border-neutral-800 bg-[#161616] text-neutral-400'
                      }`}
                    >
                      Nome Limpo
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasRestrictions(true)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        hasRestrictions
                          ? 'border-amber-600 bg-amber-600/20 text-amber-300'
                          : 'border-neutral-800 bg-[#161616] text-neutral-400'
                      }`}
                    >
                      Com Restrições
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                    Situação da Contabilidade:
                  </label>
                  <select
                    value={accountingStatus}
                    onChange={(e) => setAccountingStatus(e.target.value as any)}
                    className="w-full py-2 px-3 rounded-lg bg-[#161616] border border-neutral-800 text-xs text-neutral-200 focus:outline-none focus:border-[#C9A227]"
                    aria-label="Situação contábil atual"
                  >
                    <option value="regular">Em dia com impostos e guias</option>
                    <option value="irregular">Com pendências ou sem contador</option>
                    <option value="starting">Vou abrir empresa agora</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 text-xs text-neutral-500 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#C9A227] shrink-0" />
              <span>
                Cálculo com base nas alíquotas oficiais vigentes de 2025/2026 e histórico de otimização AZCON.
              </span>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#19160E] to-[#121212] border-2 border-[#C9A227]/50 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            {/* Ambient Shine Corner */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A227]/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs uppercase tracking-wider font-bold text-[#C9A227] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Diagnóstico Preliminar
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#C9A227]/20 text-[#F5D77F] text-[10px] font-mono font-bold">
                  Score Estimado: {diagnostic.scorePotential}/1000
                </span>
              </div>

              {/* Annual Savings Metric */}
              <div className="my-6">
                <div className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
                  Potencial de Economia Tributária Anual:
                </div>
                <div className="font-serif-luxury text-3xl sm:text-4xl font-extrabold gold-gradient-text tracking-tight">
                  R$ {diagnostic.estimatedAnnualSavings.toLocaleString('pt-BR')}*
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Através de recuperação, segregação de ICMS/PIS/COFINS e enquadramento ideal.
                </div>
              </div>

              {/* Credit Tier Metric */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#0D0D0D] border border-neutral-800 mb-6">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Rating Bancário PJ
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {diagnostic.creditRatingTier}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Guia Mensal Estimada
                  </div>
                  <div className="text-sm font-bold text-[#F5D77F] mt-0.5">
                    ~ R$ {diagnostic.estimatedMonthlyTax.toLocaleString('pt-BR')}/mês
                  </div>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="p-4 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 mb-6">
                <div className="text-xs font-bold text-[#F5D77F] mb-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" /> Recomendação AZCON:
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {diagnostic.recommendedAction}
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href={generateWhatsAppUrl('5543984815243', getCustomWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl gold-gradient-bg text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
              >
                <span>Solicitar Diagnóstico com Este Perfil</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[10px] text-neutral-500 mt-2">
                *Simulação ilustrativa. A assessoria individual confirma valores exatos.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
