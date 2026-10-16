/**
 * Knowledge base & query matcher for AZCON Virtual Assistant
 */

export interface AssistantResponse {
  answer: string;
  suggestWhatsApp: boolean;
  suggestInstagram: boolean;
  whatsappMessage?: string;
  topic?: string;
}

export function getAssistantReply(userQuery: string): AssistantResponse {
  const query = userQuery.toLowerCase().trim();

  if (!query) {
    return {
      answer: 'Como posso ajudar você hoje? Você pode escolher uma das perguntas rápidas abaixo ou me perguntar sobre abertura de empresa, MEI, produtor rural ou rating de crédito!',
      suggestWhatsApp: true,
      suggestInstagram: false,
      whatsappMessage: 'Olá Bruna! Gostaria de uma assessoria da AZCON Contabilidade.'
    };
  }

  // Abertura de empresa
  if (query.includes('abrir') || query.includes('abertura') || query.includes('dia útil') || query.includes('prazo') || query.includes('tempo para abrir')) {
    return {
      answer: 'Na AZCON, abrimos sua empresa em até 1 dia útil! Cuidamos de todo o processo digital na Junta Comercial, CNPJ, Inscrição Estadual e escolha dos CNAEs ideais para você pagar o menor imposto possível.',
      suggestWhatsApp: true,
      suggestInstagram: true,
      whatsappMessage: 'Olá Bruna! Gostaria de abrir minha empresa em até 1 dia útil com a AZCON.',
      topic: 'Abertura de Empresa'
    };
  }

  // MEI
  if (query.includes('mei') || query.includes('microempreendedor') || query.includes('das') || query.includes('dasn')) {
    return {
      answer: 'Oferecemos assessoria completa para MEI: regularização de guias DAS atrasadas, declaração anual DASN, desenquadramento seguro para Microempresa (ME) e orientação para abertura de conta jurídica com crédito bancário.',
      suggestWhatsApp: true,
      suggestInstagram: true,
      whatsappMessage: 'Olá Bruna! Preciso de assessoria contábil para o meu MEI.',
      topic: 'Contabilidade para MEI'
    };
  }

  // Produtor Rural / Agro
  if (query.includes('rural') || query.includes('agro') || query.includes('produtor') || query.includes('funrural') || query.includes('fazenda') || query.includes('lcdpr')) {
    return {
      answer: 'A AZCON é especialista no agronegócio! Cuidamos da Inscrição Estadual do Produtor Rural, emissão de NF-e, apuração do Funrural, Livro Caixa Digital (LCDPR) e planejamento para reduzir o imposto sobre a colheita com segurança jurídica.',
      suggestWhatsApp: true,
      suggestInstagram: true,
      whatsappMessage: 'Olá Bruna! Tenho interesse na Assessoria para Produtor Rural da AZCON.',
      topic: 'Produtor Rural'
    };
  }

  // Rating, Crédito, Nome Limpo, Score
  if (query.includes('rating') || query.includes('crédito') || query.includes('score') || query.includes('nome limpo') || query.includes('empréstimo') || query.includes('banco') || query.includes('financiamento')) {
    return {
      answer: 'Ajudamos sua empresa a conquistar Rating Bancário alto e destravar limites de crédito! Alinhamos demonstrativos contábeis (DRE e Balanço) para apresentar solidez perante os bancos e higienizar restrições cadastrais.',
      suggestWhatsApp: true,
      suggestInstagram: true,
      whatsappMessage: 'Olá Bruna! Preciso melhorar o Rating e o Score de Crédito da minha empresa.',
      topic: 'Rating & Crédito PJ'
    };
  }

  // Planejamento Tributário / Economia de Impostos
  if (query.includes('tribut') || query.includes('imposto') || query.includes('simples') || query.includes('lucro') || query.includes('presumido') || query.includes('economia')) {
    return {
      answer: 'Nosso Planejamento Tributário analisa os regimes Simples Nacional, Lucro Presumido e Lucro Real, além da segregação de monofásicos e ICMS-ST, gerando uma redução lícita e imediata da sua guia mensal.',
      suggestWhatsApp: true,
      suggestInstagram: true,
      whatsappMessage: 'Olá Bruna! Gostaria de um Planejamento Tributário para reduzir os impostos da minha empresa.',
      topic: 'Planejamento Tributário'
    };
  }

  // Preço / Honorários / Custo
  if (query.includes('preço') || query.includes('preco') || query.includes('valor') || query.includes('quanto custa') || query.includes('honorário') || query.includes('orçamento') || query.includes('orcamento')) {
    return {
      answer: 'Nossos planos de assessoria são personalizados de acordo com o porte e o volume de notas da sua empresa, garantindo o melhor custo-benefício. Solicite um diagnóstico e proposta sem compromisso no WhatsApp da Bruna Almeida!',
      suggestWhatsApp: true,
      suggestInstagram: false,
      whatsappMessage: 'Olá Bruna! Gostaria de solicitar um orçamento de assessoria contábil para minha empresa.',
      topic: 'Honorários e Orçamento'
    };
  }

  // Instagram
  if (query.includes('instagram') || query.includes('rede') || query.includes('social') || query.includes('post') || query.includes('conteúdo')) {
    return {
      answer: 'No nosso Instagram @azconcontabilidade publicamos diariamente novidades sobre Reforma Tributária, dicas de gestão para MEIs e produtores rurais, e estratégias para manter seu CNPJ protegido!',
      suggestWhatsApp: false,
      suggestInstagram: true,
      topic: 'Instagram Oficial'
    };
  }

  // Contato / Telefone / WhatsApp / Endereço
  if (query.includes('contato') || query.includes('telefone') || query.includes('whatsapp') || query.includes('falar') || query.includes('bruna')) {
    return {
      answer: 'Você pode falar diretamente com a contadora Bruna Almeida pelo WhatsApp (43) 98481-5243 ou pelo e-mail almeida.mota255@gmail.com. Atendemos todo o Brasil de forma digital e próxima!',
      suggestWhatsApp: true,
      suggestInstagram: true,
      whatsappMessage: 'Olá Bruna! Estou em contato através do assistente virtual da AZCON.',
      topic: 'Canais Oficiais'
    };
  }

  // Resposta padrão inteligente
  return {
    answer: 'Excelente pergunta! Como cada negócio possui particularidades fiscais e cadastrais específicas, nossa contadora Bruna Almeida pode analisar seu caso detalhadamente agora pelo WhatsApp oficial, ou você pode acompanhar nossas publicações no Instagram.',
    suggestWhatsApp: true,
    suggestInstagram: true,
    whatsappMessage: `Olá Bruna! Gostaria de tirar uma dúvida com a AZCON: "${userQuery.slice(0, 80)}"`,
    topic: 'Assessoria Especializada'
  };
}
