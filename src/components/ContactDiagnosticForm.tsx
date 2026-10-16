import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, Sparkles } from 'lucide-react';
import { validateContactForm, generateWhatsAppUrl, parseUtmParams, UtmParams } from '../utils/businessLogic.ts';

export const ContactDiagnosticForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'abertura',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [utm, setUtm] = useState<UtmParams>({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parsed = parseUtmParams(window.location.search);
      setUtm(parsed);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      serviceType: formData.serviceType
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Google Ads conversion event trigger
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_lead_form_submitted', {
        event_category: 'Lead',
        event_label: `Service: ${formData.serviceType}`,
        value: 1.0
      });
    }

    // Format message and redirect to WhatsApp for instant lead handling
    const serviceLabels: Record<string, string> = {
      abertura: 'Abertura de Empresa em 1 Dia Útil',
      mei: 'Contabilidade para MEI',
      rural: 'Assessoria para Produtor Rural',
      planejamento: 'Planejamento Tributário',
      score: 'Score e Rating Bancário',
      completa: 'Contabilidade Completa Mensal',
      ir: 'Imposto de Renda sem Malha Fina'
    };

    const text = `Olá Bruna! Solicitei um Diagnóstico Gratuito pelo site da AZCON:
- Nome: ${formData.name}
- Telefone: ${formData.phone}
- E-mail: ${formData.email}
- Área de Interesse: ${serviceLabels[formData.serviceType] || formData.serviceType}
${formData.message ? `- Observação: ${formData.message}` : ''}`;

    const waUrl = generateWhatsAppUrl('5543984815243', text, utm);
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section
      id="contato"
      className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-neutral-900"
      aria-label="Formulário de Diagnóstico Gratuito AZCON"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
              Primeiro Passo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-4">
            Solicite seu Diagnóstico Gratuito
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            Preencha seus dados abaixo para receber uma análise preliminar da situação tributária e cadastral do seu negócio.
          </p>
        </div>

        {/* Form Container */}
        <div className="luxury-card rounded-3xl p-8 sm:p-10 border border-[#C9A227]/40 shadow-2xl relative">
          {isSubmitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                Solicitação Recebida com Sucesso!
              </h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto mb-6">
                Estamos abrindo a conversa no WhatsApp para conectar você imediatamente com a contadora <strong className="text-[#F5D77F]">Bruna Almeida</strong>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs uppercase tracking-wider text-[#C9A227] hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label htmlFor="form-name" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome ou da sua empresa"
                    className={`w-full px-4 py-3 rounded-xl bg-[#141414] border text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A227] transition-all ${
                      errors.name ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="form-phone" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    WhatsApp com DDD *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(43) 98481-5243"
                    className={`w-full px-4 py-3 rounded-xl bg-[#141414] border text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A227] transition-all ${
                      errors.phone ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* E-mail */}
                <div>
                  <label htmlFor="form-email" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    E-mail Corporativo ou Pessoal *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@empresa.com.br"
                    className={`w-full px-4 py-3 rounded-xl bg-[#141414] border text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A227] transition-all ${
                      errors.email ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Área de Interesse */}
                <div>
                  <label htmlFor="form-service" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                    Principal Interesse *
                  </label>
                  <select
                    id="form-service"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-neutral-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A227] transition-all"
                  >
                    <option value="abertura">Abertura de Empresa (1 Dia Útil)</option>
                    <option value="mei">Contabilidade para MEI & Regularização</option>
                    <option value="rural">Assessoria para Produtor Rural / Agro</option>
                    <option value="planejamento">Planejamento Tributário / Redução de Guia</option>
                    <option value="score">Limpeza de Nome & Elevação de Score/Rating PJ</option>
                    <option value="completa">Contabilidade Mensal Completa</option>
                    <option value="ir">Declaração de Imposto de Renda</option>
                  </select>
                </div>
              </div>

              {/* Mensagem Opcional */}
              <div>
                <label htmlFor="form-message" className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                  Detalhes adicionais (Opcional)
                </label>
                <textarea
                  id="form-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte brevemente sobre o seu faturamento atual ou principal desafio..."
                  className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-neutral-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#C9A227] transition-all"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 px-8 rounded-xl gold-gradient-bg text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] active:scale-98 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 fill-black" />
                <span>Quero um Diagnóstico Gratuito</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>Seus dados são 100% confidenciais e protegidos pela LGPD.</span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
