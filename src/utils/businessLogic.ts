/**
 * Pure business logic for AZCON Contabilidade
 * Decoupled from UI for deterministic testing and rock-solid reliability.
 */

export interface UtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

export interface TaxDiagnosticInput {
  regime: 'mei' | 'simples' | 'presumido' | 'rural';
  monthlyRevenue: number;
  hasCreditRestrictions: boolean;
  currentAccountingStatus: 'irregular' | 'regular' | 'starting';
}

export interface TaxDiagnosticResult {
  estimatedMonthlyTax: number;
  estimatedAnnualSavings: number;
  creditRatingTier: 'A (Excelente)' | 'B (Bom)' | 'C (Em Recuperação)' | 'D (Crítico)';
  recommendedAction: string;
  scorePotential: number; // 0 to 1000
}

/**
 * Generates an official WhatsApp click-to-chat URL with encoded text and optional UTM source tracking.
 */
export function generateWhatsAppUrl(
  phone: string,
  message: string,
  utm?: UtmParams
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  let fullMessage = message.trim();

  if (utm?.source || utm?.campaign) {
    const trackingTag = ` [Origem: ${utm.source || 'direto'}${utm.campaign ? ` / Campanha: ${utm.campaign}` : ''}]`;
    fullMessage += trackingTag;
  }

  const encoded = encodeURIComponent(fullMessage);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}

/**
 * Extracts UTM parameters from a browser URL query string
 */
export function parseUtmParams(queryString: string): UtmParams {
  if (!queryString) return {};
  const cleanQuery = queryString.startsWith('?') ? queryString.slice(1) : queryString;
  const params = new URLSearchParams(cleanQuery);
  const utm: UtmParams = {};

  if (params.get('utm_source')) utm.source = params.get('utm_source')!;
  if (params.get('utm_medium')) utm.medium = params.get('utm_medium')!;
  if (params.get('utm_campaign')) utm.campaign = params.get('utm_campaign')!;
  if (params.get('utm_term')) utm.term = params.get('utm_term')!;
  if (params.get('utm_content')) utm.content = params.get('utm_content')!;

  return utm;
}

/**
 * Calculates tax estimation and credit rating diagnostics for business owners
 */
export function calculateTaxDiagnostic(input: TaxDiagnosticInput): TaxDiagnosticResult {
  const { regime, monthlyRevenue, hasCreditRestrictions, currentAccountingStatus } = input;
  let taxRate = 0.06; // default Simples Nacional initial
  let savingsMultiplier = 0.18; // average overpayment/optimization found by AZCON

  switch (regime) {
    case 'mei':
      // MEI pays flat DAS ~ R$ 75 to R$ 85
      const fixedDas = 82;
      return {
        estimatedMonthlyTax: fixedDas,
        estimatedAnnualSavings: Math.min(1200, Math.round(monthlyRevenue * 0.05)),
        creditRatingTier: hasCreditRestrictions ? 'C (Em Recuperação)' : 'B (Bom)',
        recommendedAction: monthlyRevenue > 6750 
          ? 'Desenquadramento estratégico de MEI para ME evitando multas retroativas.' 
          : 'Manutenção de regularidade fiscal e emissão de notas para liberação de crédito PJ.',
        scorePotential: hasCreditRestrictions ? 520 : 780
      };

    case 'simples':
      taxRate = monthlyRevenue > 30000 ? 0.095 : 0.06;
      savingsMultiplier = 0.22; // segregation of monofasicos / ICMS-ST
      break;

    case 'presumido':
      taxRate = 0.1333; // ~13.33% to 16.33%
      savingsMultiplier = 0.25;
      break;

    case 'rural':
      taxRate = 0.021; // Funrural / Produtor Pessoa Física vs Jurídica
      savingsMultiplier = 0.30;
      break;
  }

  const estimatedMonthlyTax = Math.round(monthlyRevenue * taxRate);
  const estimatedAnnualSavings = Math.round(estimatedMonthlyTax * savingsMultiplier * 12);

  let creditRatingTier: TaxDiagnosticResult['creditRatingTier'] = 'A (Excelente)';
  let scorePotential = 890;

  if (hasCreditRestrictions) {
    creditRatingTier = currentAccountingStatus === 'irregular' ? 'D (Crítico)' : 'C (Em Recuperação)';
    scorePotential = 490;
  } else if (currentAccountingStatus === 'irregular') {
    creditRatingTier = 'B (Bom)';
    scorePotential = 690;
  }

  let recommendedAction = 'Revisão tributária e segregação de receitas para redução imediata da guia mensal.';
  if (hasCreditRestrictions) {
    recommendedAction = 'Limpeza de restrições bancárias, alinhamento de balanço e elevação de Rating PJ.';
  } else if (regime === 'rural') {
    recommendedAction = 'Estruturação do CNPJ Rural e blindagem patrimonial com incentivos fiscais do agro.';
  }

  return {
    estimatedMonthlyTax,
    estimatedAnnualSavings,
    creditRatingTier,
    recommendedAction,
    scorePotential
  };
}

/**
 * Validates lead contact form
 */
export function validateContactForm(data: {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'Por favor, informe seu nome completo.';
  }

  const cleanPhone = data.phone.replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phone = 'Informe um telefone/WhatsApp válido com DDD (ex: 43 98481-5243).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Informe um e-mail corporativo ou pessoal válido.';
  }

  if (!data.serviceType) {
    errors.serviceType = 'Selecione a área de seu interesse.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
