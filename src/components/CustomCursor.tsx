import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for precise pointers (mouse/trackpad on desktop)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if cursor is over interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glow Ring */}
      <div
        className={`fixed rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-150 ease-out border ${
          isHovering
            ? 'w-10 h-10 border-[#F5D77F] bg-[#C9A227]/15 shadow-[0_0_20px_rgba(201,162,39,0.4)]'
            : 'w-6 h-6 border-[#C9A227]/60 bg-transparent'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      />

      {/* Central Tiny Gold Dot */}
      <div
        className="fixed w-1.5 h-1.5 rounded-full bg-[#F5D77F] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 shadow-xs"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`
        }}
      />
    </div>
  );
};
