import React from 'react';
import officialLogoImg from '../assets/images/logo-azcon.png';

interface LogoProps {
  variant?: 'full' | 'shield-only' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'intro';
  className?: string;
  glow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  glow = false
}) => {
  // Height sizing for the official 1280x591 logo (aspect ratio ~2.16 : 1)
  const heightMap = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    hero: 'h-16 sm:h-20',
    intro: 'h-28 sm:h-36 md:h-44'
  };

  const shieldHeightMap = {
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
    hero: 'h-20 w-20',
    intro: 'h-36 w-36 md:h-48 md:w-48'
  };

  // If shield-only is requested, we crop the left shield portion of the official logo
  if (variant === 'shield-only') {
    return (
      <div
        className={`inline-flex items-center justify-start select-none overflow-hidden relative shrink-0 rounded-lg ${shieldHeightMap[size]} ${className}`}
        aria-label="Escudo AZCON Contabilidade"
      >
        <img
          src={officialLogoImg}
          alt="Escudo Oficial AZCON"
          className={`h-full w-auto max-w-none object-cover filter ${
            glow ? 'drop-shadow-[0_0_20px_rgba(201,162,39,0.7)]' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
          } transition-transform duration-300 hover:scale-105`}
          style={{ width: '305%', maxWidth: 'none', objectPosition: '0% 50%' }}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
      <img
        src={officialLogoImg}
        alt="AZCON Contabilidade - Assessoria Empresarial"
        className={`w-auto ${heightMap[size]} object-contain filter ${
          glow
            ? 'drop-shadow-[0_0_30px_rgba(201,162,39,0.55)]'
            : 'drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]'
        } transition-transform duration-300 hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};
