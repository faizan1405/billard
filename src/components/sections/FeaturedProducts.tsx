import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/billiardsData';
import { Product } from '../../types';
import { useShop } from '../../context/ShopContext';

export const FeaturedProducts: React.FC = () => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [activeTab, setActiveTab] = useState<'all' | 'tables' | 'cues' | 'accessories'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const tabs = [
    { id: 'all', label: 'All Equipment' },
    { id: 'tables', label: 'Pool Tables' },
    { id: 'cues', label: 'Precision Cues' },
    { id: 'accessories', label: 'Balls & Cases' }
  ];

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'tables') return p.category === 'tables';
    if (activeTab === 'cues') return p.category === 'cues';
    if (activeTab === 'accessories') return p.category === 'balls' || p.category === 'accessories';
    return true;
  });

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="tables" className="py-24 sm:py-32 bg-[#0b0e0c] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Tournament Grade
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight">
              Featured Equipment
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-white/10 md:border-b-0 pb-3 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-serif uppercase tracking-wider rounded-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#16382a] text-[#f4f2ec] border border-[#c5a059]/40 shadow-sm font-semibold'
                    : 'text-ivory-muted hover:text-white bg-transparent hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.slice(0, 4).map((product, idx) => {
            const isWish = isInWishlist(product.id);
            const isHovered = hoveredCard === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col justify-between bg-[#111513]/70 rounded-sm overflow-hidden border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300"
              >
                {/* Image Container with secondary crossfade */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#161a18]">
                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                      isHovered && product.secondaryImage ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Secondary Image (reveals on hover if available) */}
                  {product.secondaryImage && (
                    <img
                      src={product.secondaryImage}
                      alt={`${product.name} alternate view`}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1110]/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Badges: Top Left */}
                  {product.badge && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-2.5 py-1 bg-[#16382a]/95 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30 text-[10px] font-serif uppercase tracking-widest font-semibold rounded-sm shadow">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist Button: Top Right */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isWish
                        ? 'bg-rose-950/80 text-rose-400 border border-rose-500/40'
                        : 'bg-black/40 text-ivory-300 hover:text-white border border-white/10 hover:bg-black/70'
                    }`}
                    aria-label={`Save ${product.name} to wishlist`}
                  >
                    <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
                  </button>

                  {/* Quick Action Floating Bar (Slide up on hover) */}
                  <div className="absolute inset-x-3 bottom-3 z-10 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 py-2.5 px-3 bg-[#16382a] hover:bg-[#1f4937] text-white text-[11px] font-serif uppercase tracking-wider font-semibold rounded-sm border border-[#c5a059]/40 shadow-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>Quick Add</span>
                    </button>

                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="w-10 h-10 bg-[#1e2320]/90 hover:bg-[#252c28] text-ivory-100 rounded-sm border border-white/15 flex items-center justify-center transition-colors"
                      title="Quick View Specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Metadata Area */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-serif uppercase tracking-widest text-[#c5a059]">
                        {product.type}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-amber-400">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-ivory-200">{product.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="text-base font-serif text-ivory-100 group-hover:text-[#e8d7b8] transition-colors cursor-pointer line-clamp-1 mb-2"
                    >
                      {product.name}
                    </h3>
                  </div>

                  {/* Price display */}
                  <div className="pt-2 border-t border-white/5 flex items-baseline justify-between mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-serif font-bold text-ivory-100">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs font-sans line-through text-ivory-muted">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">In Stock</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner strip */}
        <div className="mt-14 p-6 rounded-sm bg-[#121614] border border-[#c5a059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#16382a] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="text-sm font-serif text-ivory-100 tracking-wide uppercase">
                Custom Architectural Pool Table Commissions
              </h4>
              <p className="text-xs text-ivory-muted">
                Looking for bespoke slate sizes, exotic timber finishes, or embedded brass inlays?
              </p>
            </div>
          </div>
          <a
            href="#story"
            className="px-6 py-2.5 bg-transparent hover:bg-white/5 text-ivory-100 text-xs font-serif uppercase tracking-widest border border-white/20 hover:border-[#c5a059] rounded-sm transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Consult Atelier</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
          </a>
        </div>
      </div>
    </section>
  );
};
