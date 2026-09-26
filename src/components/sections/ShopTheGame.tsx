import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronLeft, ChevronRight, Sparkles, Check } from 'lucide-react';
import { SHOP_THE_GAME_TABS } from '../../data/billiardsData';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/billiardsData';

export const ShopTheGame: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<'play' | 'upgrade' | 'maintain'>('play');
  const { addToCart, showToast } = useShop();

  const currentTab = SHOP_THE_GAME_TABS.find((t) => t.id === activeTabId) || SHOP_THE_GAME_TABS[0];

  const handleQuickAdd = (itemName: string) => {
    // Match with product if possible or add fallback
    const matched = PRODUCTS.find((p) => p.name.toLowerCase().includes(itemName.toLowerCase())) || PRODUCTS[1];
    addToCart(matched);
  };

  return (
    <section id="collections" className="py-24 sm:py-36 bg-[#080b09] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                The Ritual of Billiards
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight">
              Shop the <span className="italic font-editorial text-[#e8d7b8]">Game</span>
            </h2>
          </div>

          {/* Three Stage Tabs: PLAY, UPGRADE, MAINTAIN */}
          <div className="inline-flex p-1.5 rounded-sm bg-[#121614] border border-white/10 self-start md:self-auto">
            {SHOP_THE_GAME_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id as any)}
                className={`px-6 py-2 rounded-sm text-xs font-serif uppercase tracking-[0.2em] font-semibold transition-all ${
                  activeTabId === tab.id
                    ? 'bg-[#16382a] text-[#f4f2ec] border border-[#c5a059]/40 shadow'
                    : 'text-ivory-muted hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Category Intro */}
        <div className="mb-10 p-6 rounded-sm bg-[#111413] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-serif text-ivory-100 font-bold mb-1">
              {currentTab.headline}
            </h3>
            <p className="text-xs text-ivory-muted max-w-xl">
              {currentTab.description}
            </p>
          </div>
          <span className="text-xs font-mono text-[#c5a059] self-start sm:self-auto">
            Phase 0{activeTabId === 'play' ? 1 : activeTabId === 'upgrade' ? 2 : 3} of 03
          </span>
        </div>

        {/* Lifestyle Product Cards Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {currentTab.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-sm overflow-hidden bg-[#111513] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#161a18]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.78] group-hover:scale-105 group-hover:brightness-[0.9] transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111513] via-transparent to-black/20 pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 bg-[#16382a]/90 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30 text-[10px] font-serif uppercase tracking-widest font-semibold rounded-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-[#c5a059] block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-serif text-ivory-100 group-hover:text-[#e8d7b8] transition-colors mb-2">
                      {item.name}
                    </h4>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
                    <span className="text-base font-serif font-bold text-ivory-100">
                      {item.price}
                    </span>

                    <button
                      onClick={() => handleQuickAdd(item.name)}
                      className="px-4 py-2 bg-[#16382a] hover:bg-[#1f4937] text-white text-xs font-serif uppercase tracking-wider font-semibold rounded-sm border border-[#c5a059]/30 flex items-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
