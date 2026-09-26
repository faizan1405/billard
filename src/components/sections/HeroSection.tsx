import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Compass, Award, Shield, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#070908]">
      {/* Background Image Container with Parallax & Cinematic Vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.22}px) scale(${1 + scrollY * 0.0003})`,
          transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
        }}
      >
        {/* LCP Candidate Image with fetchpriority="high" and no loading="lazy" */}
        <img
          src="/images/hero_billiards.jpg"
          alt="Luxury tournament billiards table with emerald green felt under dramatic spotlight"
          fetchPriority="high"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
        />

        {/* Cinematic Multi-Layer Lighting Overlays */}
        {/* Top gradient for navbar transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060807]/90 via-[#070908]/40 to-[#070908]" />
        
        {/* Radial spotlight effect centered over felt */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(22,56,42,0.25)_0%,rgba(7,9,8,0.85)_70%,rgba(6,8,7,0.98)_100%)]" />

        {/* Subtle horizontal luxury bar grid line */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-28 md:py-32 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121915]/80 border border-[#c5a059]/30 backdrop-blur-md mb-6 shadow-lg"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
          <span className="text-[10px] sm:text-xs font-serif tracking-[0.25em] text-[#e8d7b8] uppercase font-semibold">
            Crafted For The Perfect Game
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#faf9f6] leading-[1.08] max-w-4xl mb-6"
        >
          Elevate Your Game.{' '}
          <span className="block italic font-editorial text-[#e8d7b8] font-normal">
            Own the Table.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-ivory-300/90 font-sans font-light max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide"
        >
          Premium billiards tables, cues and accessories engineered for players who take every shot seriously.
        </motion.p>

        {/* Dual Call-To-Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="#tables"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#143829] hover:bg-[#1b4a37] text-[#f4f2ec] rounded-sm border border-[#c5a059]/50 shadow-[0_10px_30px_rgba(20,56,41,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.2em] font-bold text-ivory-100">
              Shop Pool Tables
            </span>
            <ArrowRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#collections"
            className="w-full sm:w-auto px-8 py-4 bg-[#111413]/70 hover:bg-[#191e1c]/80 text-[#e7e4d8] hover:text-white rounded-sm border border-white/15 hover:border-[#c5a059]/40 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.2em] font-medium">
              Explore Collection
            </span>
          </a>
        </motion.div>

        {/* Micro Specs Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-14 sm:mt-16 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
        >
          <div className="flex items-center gap-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <div>
              <p className="text-[11px] font-serif uppercase tracking-wider text-ivory-100 font-semibold">1&quot; Italian Slate</p>
              <p className="text-[10px] text-ivory-muted">Diamond-Honed 3-Piece</p>
            </div>
          </div>

          <div className="flex items-center gap-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <div>
              <p className="text-[11px] font-serif uppercase tracking-wider text-ivory-100 font-semibold">Simonis 860 Felt</p>
              <p className="text-[10px] text-ivory-muted">Belgian Worsted Wool</p>
            </div>
          </div>

          <div className="flex items-center gap-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <div>
              <p className="text-[11px] font-serif uppercase tracking-wider text-ivory-100 font-semibold">Precision Rails</p>
              <p className="text-[10px] text-ivory-muted">K-66 True Bounce Gum</p>
            </div>
          </div>

          <div className="flex items-center gap-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <div>
              <p className="text-[11px] font-serif uppercase tracking-wider text-ivory-100 font-semibold">White-Glove Setup</p>
              <p className="text-[10px] text-ivory-muted">Laser Millimeter Leveling</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#categories"
          aria-label="Scroll down to explore categories"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2.2, ease: 'easeInOut' }
          }}
          className="mt-8 flex flex-col items-center gap-1.5 text-ivory-muted hover:text-[#c5a059] transition-colors cursor-pointer group"
        >
          <span className="text-[9px] font-mono tracking-widest uppercase opacity-75">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#c5a059]" />
        </motion.a>
      </div>
    </section>
  );
};
