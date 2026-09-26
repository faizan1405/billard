import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/billiardsData';

export const CategorySection: React.FC = () => {
  return (
    <section id="categories" className="py-24 sm:py-32 bg-[#090c0a] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold block mb-3">
              Curated Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight leading-tight">
              Everything You Need to{' '}
              <span className="italic font-editorial text-[#e8d7b8]">Play Better</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ivory-muted max-w-md font-sans leading-relaxed">
            Every table, shaft, and ball set is calibrated to tournament-level tolerances. Explore the pinnacle of billiards engineering.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, index) => {
            const isWide = cat.spanCol.includes('col-span-8') || cat.spanCol.includes('col-span-7');

            return (
              <motion.a
                key={cat.id}
                href={`#${cat.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-sm overflow-hidden bg-[#121614] border border-white/10 hover:border-[#c5a059]/50 transition-all duration-500 shadow-xl cursor-pointer ${
                  cat.spanCol
                } ${isWide ? 'h-[360px] sm:h-[420px]' : 'h-[360px] sm:h-[420px]'}`}
              >
                {/* Background Image with slow hover zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.05] group-hover:scale-105 group-hover:brightness-[0.8] transition-all duration-700 ease-out"
                  />
                </div>

                {/* Dark Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070908] via-[#070908]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#070908]/20 to-[#070908]/70" />

                {/* Top Badge: Item count & Category Tag */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-ivory-200">
                    {cat.itemCount}
                  </span>
                  
                  {/* Circular Hover Arrow Button */}
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:border-[#c5a059] group-hover:bg-[#16382a] flex items-center justify-center text-ivory-100 group-hover:text-[#c5a059] transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content: Title & Tagline */}
                <div className="absolute bottom-6 left-6 right-6 z-10 transform transition-transform duration-300">
                  <p className="text-[11px] font-serif uppercase tracking-[0.2em] text-[#c5a059] font-medium mb-1">
                    Featured: {cat.featuredProduct}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#faf9f6] tracking-wide mb-2 group-hover:text-[#e8d7b8] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-ivory-300/80 font-sans max-w-md line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
