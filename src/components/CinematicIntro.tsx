import React, { useEffect, useState } from 'react';
import officialLogoImg from '../assets/images/logo-azcon.png';

interface CinematicIntroProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({
  onComplete,
  forceShow = false
}) => {
  const [phase, setPhase] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const autostart = urlParams.get('autostart') === '1' || urlParams.get('skipIntro') === '1';
    const hasSeen = sessionStorage.getItem('azcon_intro_seen') === 'true';

    if ((autostart || hasSeen) && !forceShow) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Phase 1: 0s - 1.2s (Pure black with drawing line)
    const timer1 = setTimeout(() => {
      setPhase(1); // Official Logo enters grand & free with glow (1.2s - 3.0s)
    }, 1200);

    // Phase 2: 3.0s (Metallic shimmer pass & peak presence)
    const timer2 = setTimeout(() => {
      setPhase(2);
    }, 3000);

    // Phase 3: 4.4s (Slogan fade-in below logo)
    const timer3 = setTimeout(() => {
      setPhase(3);
    }, 4400);

    // Phase 4: 5.5s (Curtains split open)
    const timer4 = setTimeout(() => {
      setIsExiting(true);
    }, 5500);

    // Complete at 6.2s
    const timer5 = setTimeout(() => {
      sessionStorage.setItem('azcon_intro_seen', 'true');
      setIsVisible(false);
      onComplete();
    }, 6200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [forceShow, onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('azcon_intro_seen', 'true');
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden pointer-events-auto transition-opacity duration-700 ${
        isExiting ? 'pointer-events-none' : ''
      }`}
      aria-label="Abertura cinematográfica AZCON Contabilidade"
    >
      {/* Left Curtain Panel */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-[#0A0A0A] border-r border-[#C9A227]/30 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] z-10 ${
          isExiting ? '-translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Right Curtain Panel */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-[#0A0A0A] border-l border-[#C9A227]/30 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] z-10 ${
          isExiting ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Content Canvas */}
      <div
        className={`relative z-20 w-full h-full flex flex-col items-center justify-center bg-black/50 transition-opacity duration-700 px-6 ${
          isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
        }`}
      >
        {/* Skip Intro Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 px-4 py-1.5 rounded-full border border-[#C9A227]/40 text-[#C9A227] text-xs font-semibold tracking-wider uppercase bg-black/70 backdrop-blur-md hover:bg-[#C9A227] hover:text-black transition-all cursor-pointer z-30 shadow-lg"
          aria-label="Pular introdução cinematográfica"
        >
          Pular Intro ✕
        </button>

        {/* Central Fine Gold Drawing Line (0s - 1.2s) */}
        <div className="absolute w-80 max-w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent animate-draw-line" />

        {/* Ambient Gold Radial Glow Behind Logo */}
        <div
          className={`absolute w-96 h-96 rounded-full bg-[#C9A227]/25 blur-[100px] pointer-events-none transition-opacity duration-1000 ${
            phase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Official Logo Container: Grande & Livre com Fundo Transparente */}
        <div
          className={`relative transition-all duration-1000 transform flex flex-col items-center max-w-4xl w-full ${
            phase >= 1
              ? 'opacity-100 scale-100 filter drop-shadow-[0_0_45px_rgba(201,162,39,0.7)]'
              : 'opacity-0 scale-85'
          }`}
        >
          {/* Logo Wrapper with Shimmer */}
          <div className="relative overflow-hidden p-4 sm:p-6 select-none">
            <img
              src={officialLogoImg}
              alt="Logo Oficial AZCON com Escudo Dourado"
              className="w-auto h-28 sm:h-40 md:h-52 lg:h-60 max-w-[90vw] object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              loading="eager"
            />

            {/* Shimmer metallic light streak sweeping across the official logo */}
            {phase >= 2 && (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
            )}
          </div>

          {/* Slogan Fade In */}
          <div
            className={`transition-all duration-1000 text-center max-w-xl px-4 mt-2 ${
              phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="h-[1px] w-28 mx-auto bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mb-3" />
            <p className="font-serif-luxury italic text-sm sm:text-base md:text-lg text-[#F5D77F] tracking-wide">
              &ldquo;Cuidamos da sua empresa hoje para construir um futuro mais sólido amanhã.&rdquo;
            </p>
          </div>
        </div>

        {/* Floating luxury gold dust particles */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-[28%] left-[22%] w-1.5 h-1.5 rounded-full bg-[#F5D77F] animate-ping" />
          <div className="absolute bottom-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
          <div className="absolute top-[48%] right-[28%] w-2 h-2 rounded-full bg-[#C9A227]/60 blur-xs animate-pulse" />
          <div className="absolute bottom-[22%] left-[32%] w-1 h-1 rounded-full bg-[#F5D77F] animate-ping" />
        </div>
      </div>
    </div>
  );
};
