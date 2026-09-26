import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Disc, Sparkles, Check, ArrowRight, Download, SlidersHorizontal } from 'lucide-react';
import { TABLE_CUSTOMIZER_OPTIONS } from '../../data/billiardsData';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/billiardsData';

export const SignatureTableSection: React.FC = () => {
  const { setQuickViewProduct, showToast } = useShop();
  const [selectedColor, setSelectedColor] = useState(TABLE_CUSTOMIZER_OPTIONS.clothColors[0]);
  const [selectedWood, setSelectedWood] = useState(TABLE_CUSTOMIZER_OPTIONS.woodFinishes[0]);

  const specs = [
    {
      icon: Layers,
      title: 'Professional Slate',
      description: '1-inch three-piece Brazilian slate diamond-ground to 0.001-inch planar precision.'
    },
    {
      icon: Disc,
      title: 'Precision Leveling',
      description: 'Patented 22-point micro-adjust chassis engineered for laser millimeter calibration.'
    },
    {
      icon: Sparkles,
      title: 'Premium Cloth',
      description: 'Simonis 860 Belgian worsted wool for frictionless tournament ball response.'
    }
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#080b09] relative overflow-hidden border-b border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#16382a]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase & Interactive Color Switcher */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="relative rounded-sm overflow-hidden bg-[#121614] border border-[#c5a059]/30 shadow-2xl group">
              {/* Table Showcase Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src="/images/imperial_table.jpg"
                  alt="Vandenberg Sovereign Tournament Slate Table"
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dynamic Table Felt Tint Overlay based on selected color */}
                <div
                  className="absolute inset-0 mix-blend-color opacity-30 transition-colors duration-500 pointer-events-none"
                  style={{ backgroundColor: selectedColor.hex }}
                />

                {/* Lighting gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e0c] via-transparent to-transparent opacity-80" />

                {/* Active Customizer Tag */}
                <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedColor.hex }} />
                  <span className="text-ivory-100 font-serif text-[11px] tracking-wider uppercase">
                    Cloth: {selectedColor.name} · {selectedWood.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Customizer Bar */}
            <div className="p-5 rounded-sm bg-[#111413] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <SlidersHorizontal className="w-4 h-4 text-[#c5a059]" />
                <span className="text-xs font-serif uppercase tracking-wider text-ivory-200">
                  Cloth Selection:
                </span>
                <div className="flex gap-2">
                  {TABLE_CUSTOMIZER_OPTIONS.clothColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color);
                        showToast(`Selected felt cloth: ${color.name}`);
                      }}
                      className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor.name === color.name
                          ? 'border-[#c5a059] scale-110 shadow-lg ring-2 ring-[#c5a059]/30'
                          : 'border-white/20 hover:border-white/50'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && <Check className="w-3.5 h-3.5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-serif uppercase tracking-wider text-ivory-muted">
                  Wood:
                </span>
                <select
                  value={selectedWood.name}
                  onChange={(e) => {
                    const match = TABLE_CUSTOMIZER_OPTIONS.woodFinishes.find(
                      (f) => f.name === e.target.value
                    );
                    if (match) setSelectedWood(match);
                  }}
                  className="bg-[#171b19] border border-white/10 text-ivory-200 text-xs px-2.5 py-1.5 rounded-sm focus:outline-none focus:border-[#c5a059]"
                >
                  {TABLE_CUSTOMIZER_OPTIONS.woodFinishes.map((f) => (
                    <option key={f.name} value={f.name}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Signature Craftsmanship
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight leading-tight mb-6">
              Designed Around the{' '}
              <span className="italic font-editorial text-[#e8d7b8]">Game</span>
            </h2>

            <p className="text-sm sm:text-base text-ivory-300 font-sans leading-relaxed mb-8">
              Precision-level playing surfaces, premium materials and professional construction come together to create a table designed for years of competitive play.
            </p>

            {/* 3 Mini Specifications */}
            <div className="space-y-6 mb-10">
              {specs.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-sm bg-[#16382a] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-ivory-100 tracking-wide uppercase">
                        {item.title}
                      </h4>
                      <p className="text-xs text-ivory-muted leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setQuickViewProduct(PRODUCTS[0])}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#16382a] hover:bg-[#1f4937] text-white text-xs font-serif uppercase tracking-[0.2em] font-bold rounded-sm border border-[#c5a059]/40 shadow-lg flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
              >
                <span>Discover Our Tables</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </button>

              <button
                onClick={() => showToast('Downloading Architectural Spec Sheet (PDF)...')}
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-white/5 text-ivory-200 text-xs font-serif uppercase tracking-[0.2em] font-medium rounded-sm border border-white/15 flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#c5a059]" />
                <span>Spec Sheet</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
