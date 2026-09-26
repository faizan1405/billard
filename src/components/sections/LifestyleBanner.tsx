import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const LifestyleBanner: React.FC = () => {
  const { showToast } = useShop();

  return (
    <section className="relative py-32 sm:py-44 overflow-hidden bg-[#070908] border-b border-white/5">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_billiards.jpg"
          alt="Bespoke luxury penthouse billiards room with panoramic night views"
          loading="lazy"
          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.1] scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Ambient Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070908]/95 via-[#070908]/70 to-[#070908]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070908]/40 to-[#070908]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16382a]/80 border border-[#c5a059]/40 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#e8d7b8] font-semibold">
            Architectural Centerpiece
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#faf9f6] tracking-tight leading-[1.1] mb-6 max-w-3xl"
        >
          Build the Room{' '}
          <span className="italic font-editorial text-[#e8d7b8]">Everyone Remembers.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-ivory-200/90 font-sans max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide"
        >
          Premium tables designed to become the centerpiece of your space. Handcrafted slate, acoustically dampened pockets, and bespoke wood finishes for distinguished homes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#tables"
            className="w-full sm:w-auto px-8 py-4 bg-[#143829] hover:bg-[#1b4a37] text-white text-xs sm:text-sm font-serif uppercase tracking-[0.2em] font-bold rounded-sm border border-[#c5a059]/50 shadow-[0_10px_30px_rgba(20,56,41,0.5)] flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Pool Tables</span>
            <ArrowRight className="w-4 h-4 text-[#c5a059]" />
          </a>

          <button
            onClick={() => showToast('Opening Private Game Room Design Consultation calendar...')}
            className="w-full sm:w-auto px-8 py-4 bg-[#111413]/80 hover:bg-[#181d1a] text-ivory-200 hover:text-white text-xs sm:text-sm font-serif uppercase tracking-[0.2em] font-medium rounded-sm border border-white/20 hover:border-[#c5a059]/40 backdrop-blur-md flex items-center justify-center gap-2.5 transition-colors"
          >
            <Calendar className="w-4 h-4 text-[#c5a059]" />
            <span>Consult Design Studio</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
