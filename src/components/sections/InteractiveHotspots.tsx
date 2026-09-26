import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Info, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { HOTSPOTS } from '../../data/billiardsData';
import { Hotspot } from '../../types';

export const InteractiveHotspots: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <section className="py-24 sm:py-36 bg-[#0a0d0b] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Anatomy of Perfection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight mb-4">
            Interactive Engineering{' '}
            <span className="italic font-editorial text-[#e8d7b8]">Hotspots</span>
          </h2>
          <p className="text-xs sm:text-sm text-ivory-muted font-sans leading-relaxed">
            Select any interactive component across the playing field to inspect the microscopic materials and mechanical tolerances.
          </p>
        </div>

        {/* Hotspot Interactive Stage */}
        <div className="relative rounded-sm overflow-hidden bg-[#111413] border border-[#c5a059]/30 shadow-2xl">
          {/* Main Visual Asset */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[460px] overflow-hidden">
            <img
              src="/images/hero_billiards.jpg"
              alt="Macro view of tournament billiard table with cue ball and felt"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.1]"
            />

            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070908]/90 via-transparent to-black/30 pointer-events-none" />

            {/* Hotspot Pins */}
            {HOTSPOTS.map((hotspot, idx) => {
              const isActive = activeHotspot.id === hotspot.id;

              return (
                <div
                  key={hotspot.id}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  <button
                    onClick={() => setActiveHotspot(hotspot)}
                    aria-label={`Inspect ${hotspot.title}`}
                    className="relative group p-2 focus:outline-none"
                  >
                    {/* Outer Pulsing Ring */}
                    <span
                      className={`absolute inset-0 rounded-full bg-[#c5a059] opacity-75 ${
                        isActive ? 'animate-ping' : 'group-hover:animate-ping opacity-40'
                      }`}
                    />

                    {/* Outer Aura */}
                    <span
                      className={`block w-8 h-8 rounded-full border border-[#c5a059]/60 backdrop-blur-md transition-all duration-300 ${
                        isActive
                          ? 'bg-[#16382a] scale-110 shadow-[0_0_20px_rgba(197,160,89,0.6)]'
                          : 'bg-black/60 group-hover:bg-[#16382a]/80'
                      }`}
                    />

                    {/* Center Core Dot */}
                    <span className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-[#c5a059] shadow-sm flex items-center justify-center text-[8px] font-bold text-black" />
                  </button>
                </div>
              );
            })}

            {/* Floating Glassmorphic Hotspot Detail Card (Desktop Overlay) */}
            <div className="hidden lg:block absolute bottom-8 right-8 z-30 max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, y: 15, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#0e1210]/95 backdrop-blur-xl border border-[#c5a059]/40 p-6 rounded-sm shadow-2xl"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-serif uppercase tracking-widest text-[#c5a059]">
                        {activeHotspot.subtitle}
                      </span>
                      <h3 className="text-xl font-serif text-ivory-100 font-bold">
                        {activeHotspot.title}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#16382a] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className="text-xs text-ivory-300 leading-relaxed mb-4">
                    {activeHotspot.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                    {activeHotspot.metrics.map((m, i) => (
                      <div key={i} className="text-center p-2 rounded bg-black/40 border border-white/5">
                        <span className="text-[9px] uppercase tracking-wider text-ivory-muted block">
                          {m.label}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#c5a059] mt-0.5 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Interactive Hotspot Bar / Cards */}
        <div className="mt-8 lg:hidden">
          <div className="bg-[#111413] border border-[#c5a059]/30 p-6 rounded-sm">
            <span className="text-[10px] font-serif uppercase tracking-widest text-[#c5a059] block mb-1">
              {activeHotspot.subtitle}
            </span>
            <h3 className="text-lg font-serif text-ivory-100 font-bold mb-2">
              {activeHotspot.title}
            </h3>
            <p className="text-xs text-ivory-300 leading-relaxed mb-4">
              {activeHotspot.description}
            </p>
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
              {activeHotspot.metrics.map((m, i) => (
                <div key={i} className="text-center p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-[9px] uppercase tracking-wider text-ivory-muted block">
                    {m.label}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#c5a059] mt-0.5 block">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hotspot Quick Select Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
          {HOTSPOTS.map((h) => (
            <button
              key={h.id}
              onClick={() => setActiveHotspot(h)}
              className={`px-4 py-2 rounded-sm text-xs font-serif uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeHotspot.id === h.id
                  ? 'bg-[#16382a] text-white border border-[#c5a059]/60 shadow-md font-semibold'
                  : 'bg-[#111413] text-ivory-muted hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  activeHotspot.id === h.id ? 'bg-[#c5a059]' : 'bg-white/30'
                }`}
              />
              <span>{h.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
