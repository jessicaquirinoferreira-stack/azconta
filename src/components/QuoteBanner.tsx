import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteBanner: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0A0A0A] via-[#12110D] to-[#0A0A0A] border-y border-[#C9A227]/25 overflow-hidden">
      {/* Subtle Glow Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-24 bg-[#C9A227]/10 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 text-[#C9A227] mb-6 shadow-md">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        <blockquote className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-neutral-100 italic leading-relaxed tracking-wide">
          &ldquo;O sucesso de um <span className="gold-gradient-text font-semibold not-italic">CNPJ</span> é o sonho de um <span className="gold-gradient-text font-semibold not-italic">CPF</span> que teve coragem de continuar.&rdquo;
        </blockquote>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A227]" />
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#C9A227] font-semibold">
            AZCON Contabilidade • Bruna Almeida
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A227]" />
        </div>
      </div>
    </section>
  );
};
