import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';

interface InstagramPost {
  id: number;
  category: string;
  headline: string;
  sub: string;
  likes: number;
  comments: number;
}

export const InstagramFeed: React.FC = () => {
  const posts: InstagramPost[] = [
    {
      id: 1,
      category: 'Reforma Tributária 2026',
      headline: 'O que muda no IVA dual e na CBS/IBS para prestadores de serviço?',
      sub: 'Guia prático para não pagar tributo a mais.',
      likes: 248,
      comments: 32
    },
    {
      id: 2,
      category: 'Score & Crédito PJ',
      headline: 'Como sair do Rating C para Rating A nos bancos em 90 dias',
      sub: 'Ajuste contábil estratégico de balanço.',
      likes: 312,
      comments: 45
    },
    {
      id: 3,
      category: 'MEI vs ME',
      headline: 'Ultrapassou R$ 81 mil de faturamento? Veja o risco de desenquadramento retroativo',
      sub: 'Evite multas de até 20% da Receita Federal.',
      likes: 195,
      comments: 28
    },
    {
      id: 4,
      category: 'Agronegócio',
      headline: 'Funrural e Livro Caixa Digital do Produtor: 4 erros comuns',
      sub: 'Segurança jurídica para a safra 2025/2026.',
      likes: 420,
      comments: 54
    },
    {
      id: 5,
      category: 'Holding Familiar & PJ',
      headline: 'Proteção patrimonial: como blindar seus bens imóveis legalmente',
      sub: 'Sucessão sem inventário demorado e caro.',
      likes: 388,
      comments: 61
    },
    {
      id: 6,
      category: 'Simples Nacional',
      headline: 'Segregação de Monofásicos: como farmácias, autopeças e bares recuperam impostos',
      sub: 'Restituição direta em dinheiro na conta PJ.',
      likes: 275,
      comments: 39
    }
  ];

  return (
    <section
      className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-neutral-900"
      aria-label="Feed de Conteúdo Instagram da AZCON Contabilidade"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#C9A227]/40 mb-4">
              <Instagram className="w-3.5 h-3.5 text-[#F5D77F]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5D77F]">
                @azconcontabilidade
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white">
              Conteúdo que te mantém por dentro das regras
            </h2>
          </div>

          <a
            href="https://www.instagram.com/azconcontabilidade"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A227]/60 text-[#F5D77F] hover:bg-[#C9A227] hover:text-black transition-all text-xs uppercase tracking-wider font-bold w-fit group"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir no Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 6 Grid Instagram Post Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/azconcontabilidade"
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden aspect-square border border-neutral-800 hover:border-[#C9A227] transition-all duration-300"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-full blur-2xl group-hover:bg-[#C9A227]/20 transition-all" />

              {/* Top Meta */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] bg-[#C9A227]/10 px-2.5 py-1 rounded-md border border-[#C9A227]/20">
                  {post.category}
                </span>
                <Instagram className="w-4 h-4 text-neutral-500 group-hover:text-[#F5D77F] transition-colors" />
              </div>

              {/* Main Headline */}
              <div className="z-10 my-auto py-4">
                <div className="w-8 h-1 gold-gradient-bg mb-3 rounded-full" />
                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white group-hover:text-[#F5D77F] transition-colors leading-snug mb-2">
                  {post.headline}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {post.sub}
                </p>
              </div>

              {/* Bottom Likes & Engagement */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-neutral-400 text-xs z-10">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 group-hover:text-rose-400 transition-colors">
                    <Heart className="w-3.5 h-3.5 fill-neutral-600 group-hover:fill-rose-400 text-transparent" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#C9A227] flex items-center gap-1">
                  Ler post <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
