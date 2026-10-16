import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateWhatsAppUrl,
  parseUtmParams,
  calculateTaxDiagnostic,
  validateContactForm
} from './businessLogic.ts';

test('generateWhatsAppUrl builds valid WhatsApp link with cleaned phone and encoded text', () => {
  const url = generateWhatsAppUrl('(43) 98481-5243', 'Olá, gostaria de falar com a Bruna Almeida');
  assert.ok(url.startsWith('https://wa.me/43984815243?text='));
  assert.ok(url.includes('Bruna%20Almeida') || url.includes('Bruna+Almeida'));
});

test('generateWhatsAppUrl includes UTM source when provided', () => {
  const url = generateWhatsAppUrl('5543984815243', 'Quero abrir empresa', {
    source: 'google-ads',
    campaign: 'abertura-mei'
  });
  assert.ok(url.includes('google-ads'));
  assert.ok(url.includes('abertura-mei'));
});

test('parseUtmParams correctly extracts parameters from query string', () => {
  const query = '?utm_source=facebook&utm_campaign=black_november&utm_medium=cpc';
  const utm = parseUtmParams(query);
  assert.equal(utm.source, 'facebook');
  assert.equal(utm.campaign, 'black_november');
  assert.equal(utm.medium, 'cpc');
});

test('calculateTaxDiagnostic produces reasonable estimates for MEI and Simples Nacional', () => {
  const meiResult = calculateTaxDiagnostic({
    regime: 'mei',
    monthlyRevenue: 5000,
    hasCreditRestrictions: false,
    currentAccountingStatus: 'regular'
  });
  assert.equal(meiResult.estimatedMonthlyTax, 82);
  assert.equal(meiResult.creditRatingTier, 'B (Bom)');
  assert.ok(meiResult.scorePotential > 700);

  const simplesResult = calculateTaxDiagnostic({
    regime: 'simples',
    monthlyRevenue: 50000,
    hasCreditRestrictions: false,
    currentAccountingStatus: 'regular'
  });
  assert.ok(simplesResult.estimatedMonthlyTax > 1000);
  assert.ok(simplesResult.estimatedAnnualSavings > 5000);
  assert.equal(simplesResult.creditRatingTier, 'A (Excelente)');
});

test('validateContactForm checks required fields correctly', () => {
  const invalid = validateContactForm({
    name: '',
    phone: '123',
    email: 'invalid-email',
    serviceType: ''
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.serviceType);

  const valid = validateContactForm({
    name: 'Carlos Mendes',
    phone: '(43) 98481-5243',
    email: 'carlos@minhaempresa.com.br',
    serviceType: 'abertura'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
