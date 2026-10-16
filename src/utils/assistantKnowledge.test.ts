import test from 'node:test';
import assert from 'node:assert/strict';
import { getAssistantReply } from './assistantKnowledge.ts';

test('assistant handles empty query with helpful prompt and WhatsApp suggestion', () => {
  const reply = getAssistantReply('');
  assert.ok(reply.suggestWhatsApp);
  assert.ok(reply.answer.includes('Como posso ajudar'));
});

test('assistant identifies company opening questions and includes WhatsApp referral', () => {
  const reply = getAssistantReply('quanto tempo leva para abrir empresa?');
  assert.ok(reply.answer.includes('1 dia útil'));
  assert.ok(reply.suggestWhatsApp);
  assert.ok(reply.suggestInstagram);
  assert.equal(reply.topic, 'Abertura de Empresa');
});

test('assistant identifies MEI questions', () => {
  const reply = getAssistantReply('Vocês ajudam com DAS atrasado do MEI?');
  assert.ok(reply.answer.includes('MEI'));
  assert.equal(reply.topic, 'Contabilidade para MEI');
});

test('assistant identifies credit rating questions', () => {
  const reply = getAssistantReply('Como funciona o rating bancario?');
  assert.ok(reply.answer.includes('Rating Bancário'));
  assert.equal(reply.topic, 'Rating & Crédito PJ');
});

test('assistant identifies Instagram questions', () => {
  const reply = getAssistantReply('qual o instagram de vocês?');
  assert.ok(reply.suggestInstagram);
  assert.ok(reply.answer.includes('@azconcontabilidade'));
});
