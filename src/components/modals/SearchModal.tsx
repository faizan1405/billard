import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/billiardsData';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct, addToCart } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  const trendingTags = ['9ft Tournament Slate', 'Carbon X Cue', 'Aramith Phenolic', 'Leather Cases', 'Simonis Cloth'];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            className="relative w-full max-w-2xl bg-[#111413] border border-[#c5a059]/30 rounded-lg shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="p-4 md:p-5 border-b border-white/10 flex items-center gap-3 bg-[#151917]">
              <Search className="w-5 h-5 text-[#c5a059]" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tables, cues, Aramith balls, accessories..."
                className="w-full bg-transparent text-ivory-100 placeholder:text-ivory-muted text-base focus:outline-none font-sans"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-ivory-muted hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="text-xs font-mono uppercase tracking-wider text-ivory-muted px-2 py-1 rounded bg-white/5 hover:bg-white/10"
              >
                ESC
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 max-h-[60vh] overflow-y-auto no-scrollbar space-y-5">
              {/* Trending suggestions if no query */}
              {!query.trim() && (
                <div>
                  <span className="text-[11px] font-serif uppercase tracking-widest text-[#c5a059] block mb-2.5">
                    Trending Curations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {trendingTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1.5 rounded-full bg-[#181d1a] hover:bg-[#1f2723] text-xs text-ivory-200 border border-white/5 hover:border-[#c5a059]/30 transition-colors flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3 text-[#c5a059]" />
                        <span>{tag}</span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5">
                    <span className="text-[11px] font-serif uppercase tracking-widest text-ivory-muted block mb-3">
                      Popular Masterpieces
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PRODUCTS.slice(0, 2).map((p) => (
                        <div
                          key={p.id}
                          onClick={() => {
                            setQuickViewProduct(p);
                            setIsSearchOpen(false);
                          }}
                          className="p-2.5 rounded bg-[#161a18] hover:bg-[#1c221f] border border-white/5 hover:border-[#c5a059]/40 cursor-pointer flex items-center gap-3 transition-colors"
                        >
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-12 h-12 object-cover rounded-sm"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-medium text-ivory-100 truncate">{p.name}</p>
                            <p className="text-[11px] text-[#c5a059] font-serif">{formatPrice(p.price)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Search results */}
              {query.trim() && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-serif uppercase tracking-widest text-[#c5a059]">
                      Results for &quot;{query}&quot;
                    </span>
                    <span className="text-xs text-ivory-muted font-mono">
                      {filteredProducts.length} items found
                    </span>
                  </div>

                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-sm font-serif text-ivory-200 mb-1">No matching equipment found</p>
                      <p className="text-xs text-ivory-muted">Try searching &quot;slate&quot;, &quot;cue&quot;, or &quot;balls&quot;</p>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {filteredProducts.map((p) => (
                        <div
                          key={p.id}
                          className="p-3 rounded bg-[#161a18] hover:bg-[#1a201d] border border-white/5 hover:border-[#c5a059]/40 flex items-center justify-between gap-4 transition-all"
                        >
                          <div
                            onClick={() => {
                              setQuickViewProduct(p);
                              setIsSearchOpen(false);
                            }}
                            className="flex items-center gap-3.5 cursor-pointer min-w-0 flex-1"
                          >
                            <img
                              src={p.image}
                              alt={p.name}
                              className="w-14 h-14 object-cover rounded-sm shrink-0 border border-white/10"
                            />
                            <div className="min-w-0">
                              <h4 className="text-xs font-semibold text-ivory-100 truncate">{p.name}</h4>
                              <p className="text-[11px] text-ivory-muted truncate">{p.type}</p>
                              <p className="text-xs font-serif font-bold text-[#c5a059] mt-0.5">
                                {formatPrice(p.price)}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => {
                                addToCart(p);
                                setIsSearchOpen(false);
                              }}
                              className="px-3 py-1.5 bg-[#16382a] hover:bg-[#1f4937] text-[11px] font-serif uppercase tracking-wider text-ivory-100 rounded-sm border border-[#c5a059]/30 transition-colors"
                            >
                              Add
                            </button>
                            <button
                              onClick={() => {
                                setQuickViewProduct(p);
                                setIsSearchOpen(false);
                              }}
                              className="p-1.5 text-ivory-muted hover:text-white"
                              title="Quick View"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
