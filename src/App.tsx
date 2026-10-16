/**
 * AZCON Contabilidade — Assessoria Empresarial
 * Founder: Bruna Almeida
 */

import React, { useState, useEffect } from 'react';
import { CinematicIntro } from './components/CinematicIntro.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { QuoteBanner } from './components/QuoteBanner.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { TaxCalculator } from './components/TaxCalculator.tsx';
import { WhyChooseAzcon } from './components/WhyChooseAzcon.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { InstagramFeed } from './components/InstagramFeed.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactDiagnosticForm } from './components/ContactDiagnosticForm.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { VirtualAssistant } from './components/VirtualAssistant.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';

export default function App() {
  const [introCompleted, setIntroCompleted] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1' || urlParams.get('skipIntro') === '1') {
      return true;
    }
    return sessionStorage.getItem('azcon_intro_seen') === 'true';
  });

  const [replayIntro, setReplayIntro] = useState<boolean>(false);

  // Engagement tracking: 75% scroll depth tracking for Google Analytics/Ads
  useEffect(() => {
    let triggered = false;
    const handleScroll = () => {
      if (triggered) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrolled = (window.scrollY / scrollHeight) * 100;
        if (scrolled >= 75) {
          triggered = true;
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'scroll_75_percent_engagement', {
              event_category: 'Engagement',
              event_label: 'Page Depth 75%'
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIntroComplete = () => {
    setIntroCompleted(true);
    setReplayIntro(false);
  };

  const handleReplayIntro = () => {
    setReplayIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] relative selection:bg-[#C9A227]/30 selection:text-[#F3E5AB]">
      {/* Cinematic 6-second Intro Overlay */}
      {(!introCompleted || replayIntro) && (
        <CinematicIntro
          onComplete={handleIntroComplete}
          forceShow={replayIntro}
        />
      )}

      {/* Luxury Custom Magnetic Cursor for Desktop */}
      <CustomCursor />

      {/* Sticky Luxury Navbar */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Page Layout */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* Impact Quote Banner */}
        <QuoteBanner />

        {/* About Section: Bruna Almeida & AZCON */}
        <AboutSection />

        {/* 8 Services Grid with 3D Hover & Details Modal */}
        <ServicesSection />

        {/* Interactive Tax Savings & Credit Rating Simulator */}
        <TaxCalculator />

        {/* Why Choose AZCON: Animated Count-up Numbers & Pillars */}
        <WhyChooseAzcon />

        {/* Social Proof: 5-Star Reviews & WhatsApp Real Print */}
        <TestimonialsSection />

        {/* Instagram Grid Feed @azconcontabilidade */}
        <InstagramFeed />

        {/* Strategic FAQ Accordion */}
        <FaqSection />

        {/* Contact & Free Business Diagnostic Lead Form */}
        <ContactDiagnosticForm />

        {/* Final Conversion CTA with Shimmer Effect */}
        <FinalCtaSection />
      </main>

      {/* Luxury Footer with CNPJ 69.480.748/0001-35 */}
      <Footer />

      {/* Floating Animated WhatsApp & Instagram Widget (Right) */}
      <FloatingWhatsApp />

      {/* Virtual Assistant Widget with Official Logo (Left) */}
      <VirtualAssistant />
    </div>
  );
}
