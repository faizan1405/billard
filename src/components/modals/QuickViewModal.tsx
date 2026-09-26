import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Shield, Check, ShoppingBag, Heart, Truck, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { TABLE_CUSTOMIZER_OPTIONS } from '../../data/billiardsData';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useShop();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(TABLE_CUSTOMIZER_OPTIONS.clothColors[0].name);
  const [selectedFinish, setSelectedFinish] = useState(TABLE_CUSTOMIZER_OPTIONS.woodFinishes[0].name);
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const currentImg = selectedImage || quickViewProduct.image;
  const isWish = isInWishlist(quickViewProduct.id);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleClose = () => {
    setQuickViewProduct(null);
    setSelectedImage(null);
    setQuantity(1);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0e1110] border border-[#c5a059]/25 rounded-md shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-ivory-muted hover:text-white flex items-center justify-center border border-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Column: Visuals */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between bg-[#121614] border-b md:border-b-0 md:border-r border-white/5">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-black/40 border border-white/5 mb-4 group">
              <img
                src={currentImg}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {quickViewProduct.badge && (
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#16382a]/90 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30 text-[10px] font-serif uppercase tracking-widest font-semibold rounded-sm">
                  {quickViewProduct.badge}
                </div>
              )}
            </div>

            {/* Thumbnail switcher */}
            <div className="flex gap-2.5">
              <button
                onClick={() => setSelectedImage(quickViewProduct.image)}
                className={`w-16 h-14 rounded-sm overflow-hidden border transition-all ${
                  currentImg === quickViewProduct.image
                    ? 'border-[#c5a059] ring-1 ring-[#c5a059]/40'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={quickViewProduct.image}
                  alt="Angle 1"
                  className="w-full h-full object-cover"
                />
              </button>
              {quickViewProduct.secondaryImage && (
                <button
                  onClick={() => setSelectedImage(quickViewProduct.secondaryImage)}
                  className={`w-16 h-14 rounded-sm overflow-hidden border transition-all ${
                    currentImg === quickViewProduct.secondaryImage
                      ? 'border-[#c5a059] ring-1 ring-[#c5a059]/40'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={quickViewProduct.secondaryImage}
                    alt="Angle 2"
                    className="w-full h-full object-cover"
                  />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto no-scrollbar">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#c5a059]">
                  {quickViewProduct.type}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-semibold text-ivory-100">{quickViewProduct.rating}</span>
                  <span className="text-ivory-muted text-[11px]">({quickViewProduct.reviewsCount})</span>
                </div>
              </div>

              <h2 className="text-2xl font-serif text-ivory-100 tracking-wide mb-3">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-serif font-bold text-[#c5a059]">
                  {formatPrice(quickViewProduct.price)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm font-sans line-through text-ivory-muted">
                    {formatPrice(quickViewProduct.originalPrice)}
                  </span>
                )}
                {quickViewProduct.originalPrice && (
                  <span className="text-[11px] font-sans font-medium text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-sm border border-emerald-800/40">
                    Save {Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)}%
                  </span>
                )}
              </div>

              <p className="text-xs text-ivory-300 leading-relaxed mb-5">
                {quickViewProduct.description}
              </p>

              {/* Table / Finish Configurator if table */}
              {quickViewProduct.category === 'tables' && (
                <div className="space-y-4 py-4 border-y border-white/5 mb-5">
                  <div>
                    <label className="text-[11px] font-serif uppercase tracking-wider text-ivory-muted block mb-2">
                      Felt Cloth Color: <span className="text-ivory-100">{selectedColor}</span>
                    </label>
                    <div className="flex gap-2">
                      {TABLE_CUSTOMIZER_OPTIONS.clothColors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                            selectedColor === color.name
                              ? 'border-[#c5a059] scale-110 shadow-md'
                              : 'border-white/20 hover:border-white/50'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        >
                          {selectedColor === color.name && <Check className="w-3.5 h-3.5 text-white" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-serif uppercase tracking-wider text-ivory-muted block mb-1.5">
                      Artisan Wood Finish:
                    </label>
                    <select
                      value={selectedFinish}
                      onChange={(e) => setSelectedFinish(e.target.value)}
                      className="w-full text-xs bg-[#161a18] border border-white/10 text-ivory-200 px-3 py-2 rounded-sm focus:outline-none focus:border-[#c5a059]"
                    >
                      {TABLE_CUSTOMIZER_OPTIONS.woodFinishes.map((f) => (
                        <option key={f.name} value={f.name}>
                          {f.name} — {f.description}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Key Specs */}
              <div className="mb-6">
                <span className="text-[11px] font-serif uppercase tracking-wider text-ivory-muted block mb-2">
                  Engineered Specifications
                </span>
                <ul className="space-y-1.5 text-xs text-ivory-300">
                  {quickViewProduct.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, quantity, selectedColor, selectedFinish);
                    handleClose();
                  }}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#16382a] to-[#1f4937] hover:from-[#1b4433] hover:to-[#245741] text-[#f4f2ec] text-xs font-serif uppercase tracking-widest font-bold rounded-sm border border-[#c5a059]/40 shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-[#c5a059]" />
                  <span>Add to Shopping Bag</span>
                </button>

                <button
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`px-3.5 rounded-sm border transition-colors flex items-center justify-center ${
                    isWish
                      ? 'bg-rose-950/40 border-rose-500/40 text-rose-400'
                      : 'border-white/10 text-ivory-muted hover:text-white hover:bg-white/5'
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWish ? 'fill-current' : ''}`} />
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-ivory-muted">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#c5a059]" />
                  {quickViewProduct.leadTime || 'Express Courier Dispatched in 24h'}
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
                  WPA Approved
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
