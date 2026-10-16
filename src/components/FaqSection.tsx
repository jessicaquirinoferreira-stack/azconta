import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '../utils/businessLogic.ts';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: 'Um empréstimo com garantia e sem garantia vocês fazem?',
      answer:
        'A AZCON atua na consultoria e estruturação contábil necessária para a liberação de crédito PJ. Nós organizamos todo o dossiê contábil (balanço patrimonial, DRE, certidões negativas e faturamento fiscal auditado) para que os bancos concedam as melhores linhas de crédito — tanto com garantia (imóveis, recebíveis, veículos com taxas reduzidas) quanto sem garantia (capital de giro rotativo e antecipação). Um balanço bem feito é a chave mestra para abrir portas nos bancos.'
    },
    {
      id: 2,
      question: 'Minha empresa é MEI, consigo abrir conta/crédito também?',
      answer:
        'Com certeza! O MEI tem direito pleno a abrir contas bancárias de pessoa jurídica (PJ) e solicitar limites de crédito, cheque especial e máquinas de cartão com taxas empresariais. A AZCON auxilia na regularização do DASN-SIMEI, na emissão de declarações de faturamento oficiais e na orientação contábil para que seu MEI tenha um Score saudável e credibilidade perante as instituições financeiras.'
    },
    {
      id: 3,
      question: 'Quanto tempo leva para abrir minha empresa?',
      answer:
        'Na AZCON, realizamos a abertura ágil da sua empresa em até 1 dia útil! Através de processos 100% digitais com certificado, emitimos seu CNPJ, elaboramos o Contrato Social sob medida, enquadramos os CNAEs corretos para pagar o menor imposto possível e protocolamos tudo na Junta Comercial com máxima rapidez e segurança jurídica.'
    },
    {
      id: 4,
      question: 'Vocês atendem produtor rural?',
      answer:
        'Sim! O agronegócio é uma das nossas grandes especialidades. Atendemos produtores rurais pessoas físicas e empresas agrícolas, cuidando da Inscrição Estadual, emissão de NF-e do Produtor, apuração do Funrural, Livro Caixa Digital do Produtor Rural (LCDPR) e planejamento tributário para que a safra gere o maior lucro líquido com total conformidade fiscal.'
    },
    {
      id: 5,
      question: 'O que é Rating de Crédito e como isso afeta minha empresa?',
      answer:
        'O Rating é a nota de risco (de AA e A até H) que os bancos atribuem ao seu CNPJ com base no histórico do Banco Central (SCR), pontualidade de pagamentos e solidez dos demonstrativos contábeis. Uma empresa com Rating A consegue empréstimos com taxas de juros até 4 vezes menores e limites muito superiores. Na AZCON, implementamos a estratégia contábil exata para higienizar restrições e elevar o seu rating bancário.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#0D0D0D] relative overflow-hidden"
      aria-label="Perguntas Frequentes sobre Contabilidade e Assessoria AZCON"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#F5D77F]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
              Tire suas Dúvidas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white mb-6">
            Perguntas Frequentes
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            Transparência e clareza para você tomar as melhores decisões empresariais.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#151410] border-[#C9A227]/60 shadow-[0_4px_25px_rgba(201,162,39,0.15)]'
                    : 'bg-[#111111] border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'border-[#C9A227] text-[#C9A227] rotate-180 bg-[#C9A227]/10'
                        : 'border-neutral-700 text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-neutral-800/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141414] border border-neutral-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Sua dúvida não está aqui?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              Fale diretamente com nossa equipe no WhatsApp para um esclarecimento imediato.
            </p>
          </div>
          <a
            href={generateWhatsAppUrl('5543984815243', 'Olá Bruna! Gostaria de tirar uma dúvida sobre contabilidade empresarial.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl gold-gradient-bg text-black font-bold text-xs uppercase tracking-wider shrink-0 hover:scale-105 transition-transform shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            Tirar Dúvida no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
