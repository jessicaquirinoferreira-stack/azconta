import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, MessageCircle, Instagram, Bot, ArrowRight, RotateCcw } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { getAssistantReply, AssistantResponse } from '../utils/assistantKnowledge.ts';
import { generateWhatsAppUrl } from '../utils/businessLogic.ts';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  responseMeta?: AssistantResponse;
  timestamp: string;
}

export const VirtualAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Olá! Sou a Assistente Virtual da AZCON Contabilidade. Estou aqui para tirar suas dúvidas rápidas sobre abertura de empresa, MEI, agronegócio e crédito PJ, ou conectar você com a contadora Bruna Almeida!',
      timestamp: 'Agora'
    }
  ]);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const quickQuestions = [
    'Como abrir empresa em 1 dia útil?',
    'Atendimento para MEI e DAS',
    'Assessoria para Produtor Rural',
    'Como melhorar meu Rating de Crédito?',
    'Quero um orçamento de contabilidade'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: time
    };

    const replyData = getAssistantReply(query);

    const botMsg: Message = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: replyData.answer,
      responseMeta: replyData,
      timestamp: time
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputText('');
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'Conversa reiniciada! Como posso ajudar você e sua empresa neste momento?',
        timestamp: 'Agora'
      }
    ]);
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
        hasScrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
      aria-label="Assistente Virtual AZCON"
    >
      {/* Chat Popover Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[520px] max-h-[80vh] rounded-3xl bg-[#111111] border border-[#C9A227]/50 shadow-[0_15px_50px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden animate-fadeIn backdrop-blur-xl">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#17150F] via-[#1E1A11] to-[#17150F] p-4 border-b border-[#C9A227]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Logo variant="shield-only" size="sm" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#0A0A0A]"></span>
              </div>
              <div>
                <h3 className="font-serif-luxury font-bold text-sm text-white flex items-center gap-1.5 leading-tight">
                  Assistente AZCON
                  <Sparkles className="w-3 h-3 text-[#F5D77F]" />
                </h3>
                <span className="text-[10px] text-[#C9A227]">Tire dúvidas & fale no WhatsApp</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Limpar conversa"
                className="p-1.5 text-neutral-400 hover:text-[#C9A227] rounded-lg transition-colors"
                aria-label="Reiniciar conversa"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors"
                aria-label="Fechar assistente"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-[#0A0A0A]/95">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl shadow-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#C9A227] text-neutral-950 font-medium rounded-tr-none'
                      : 'bg-[#181818] border border-[#C9A227]/25 text-neutral-200 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Actions Referral Buttons inside bot message */}
                  {msg.responseMeta && (
                    <div className="mt-3 pt-2.5 border-t border-neutral-700/60 flex flex-col gap-2">
                      {msg.responseMeta.suggestWhatsApp && (
                        <a
                          href={generateWhatsAppUrl(
                            '5543984815243',
                            msg.responseMeta.whatsappMessage || 'Olá Bruna! Gostaria de uma assessoria da AZCON Contabilidade.'
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] uppercase tracking-wider transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Falar no WhatsApp com Bruna</span>
                        </a>
                      )}

                      {msg.responseMeta.suggestInstagram && (
                        <a
                          href="https://www.instagram.com/azconcontabilidade"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-[11px] uppercase tracking-wider transition-opacity hover:opacity-90 shadow-sm"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                          <span>Ver Dicas no Instagram</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <span className="text-[9px] text-neutral-500 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Pills */}
          <div className="p-2.5 bg-[#121212] border-t border-neutral-800/80 overflow-x-auto flex gap-1.5 scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#C9A227]/20 border border-neutral-800 hover:border-[#C9A227]/60 text-[10px] text-neutral-300 hover:text-[#F5D77F] transition-all shrink-0 cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#161616] border-t border-neutral-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite sua dúvida aqui..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#202020] border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:border-[#C9A227]"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl gold-gradient-bg text-black hover:scale-105 transition-transform cursor-pointer shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4 fill-black" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Trigger Button (Left) */}
      <div className="relative group">
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 rounded-xl bg-[#141414] border border-[#C9A227]/40 text-[#F5D77F] text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Tire dúvidas com a Assistente AZCON
          </div>
        )}

        {/* Golden Glow Rings */}
        <div className="absolute -inset-1 rounded-full bg-[#C9A227]/30 blur-sm animate-pulse" />
        <div className="absolute -inset-2 rounded-full bg-[#C9A227]/15 blur-md animate-ping" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1C180E] via-[#241E12] to-[#0A0A0A] border-2 border-[#C9A227] flex items-center justify-center shadow-[0_8px_25px_rgba(201,162,39,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden p-1.5"
          aria-label="Abrir assistente virtual AZCON"
        >
          <Logo variant="shield-only" size="sm" glow={true} />

          {/* Unread indicator */}
          {hasUnread && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#F5D77F] border-2 border-[#0A0A0A] animate-bounce"></span>
          )}
        </button>

      </div>
    </div>
  );
};
