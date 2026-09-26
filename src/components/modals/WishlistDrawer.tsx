import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/billiardsData';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlistIds,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart
  } = useShop();

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsWishlistOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-[#0e1110] border-l border-[#c5a059]/20 shadow-2xl flex flex-col justify-between"
            >
              {/* Top Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#121614]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1e2321] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif tracking-wider text-ivory-100 uppercase">
                      Private Wishlist
                    </h2>
                    <p className="text-xs text-ivory-muted">
                      {wishlistProducts.length} saved {wishlistProducts.length === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-2 text-ivory-muted hover:text-white rounded-full hover:bg-white/5 transition-colors"
                  aria-label="Close wishlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 divide-y divide-white/5 no-scrollbar">
                {wishlistProducts.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#161a18] border border-white/10 flex items-center justify-center text-ivory-muted mb-4">
                      <Heart className="w-8 h-8 opacity-40" />
                    </div>
                    <p className="text-base font-serif text-ivory-200 mb-1">Your wishlist is empty</p>
                    <p className="text-xs text-ivory-muted max-w-xs mb-6">
                      Click the heart icon on any table, cue, or accessory to save it for your private collection.
                    </p>
                    <button
                      onClick={() => setIsWishlistOpen(false)}
                      className="px-6 py-2.5 rounded-sm bg-[#16382a] hover:bg-[#1f4937] text-[#f4f2ec] text-xs uppercase tracking-widest font-semibold border border-[#c5a059]/30 transition-colors"
                    >
                      Browse Featured Pieces
                    </button>
                  </div>
                ) : (
                  wishlistProducts.map((product) => (
                    <div key={product.id} className="pt-5 first:pt-0 flex gap-4">
                      <div className="w-20 h-20 bg-[#161a18] rounded-sm overflow-hidden shrink-0 border border-white/10">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-sm font-medium text-ivory-100 line-clamp-1">
                              {product.name}
                            </h3>
                            <button
                              onClick={() => toggleWishlist(product)}
                              className="text-ivory-muted hover:text-red-400 p-1 transition-colors"
                              title="Remove from wishlist"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs text-ivory-muted mt-0.5">{product.type}</p>
                          <p className="text-sm font-serif font-semibold text-[#c5a059] mt-1">
                            {formatPrice(product.price)}
                          </p>
                        </div>

                        <div className="mt-3">
                          <button
                            onClick={() => {
                              addToCart(product);
                              toggleWishlist(product);
                            }}
                            className="w-full py-1.5 px-3 bg-[#16382a] hover:bg-[#1f4937] text-[#f4f2ec] text-xs font-serif uppercase tracking-wider font-semibold rounded-sm border border-[#c5a059]/30 flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <ShoppingBag className="w-3 h-3 text-[#c5a059]" />
                            <span>Move to Bag</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Actions */}
              {wishlistProducts.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#121514]">
                  <button
                    onClick={() => {
                      wishlistProducts.forEach((p) => addToCart(p));
                      setIsWishlistOpen(false);
                    }}
                    className="w-full py-3 px-4 bg-gradient-to-r from-[#16382a] to-[#1f4937] hover:from-[#1b4433] hover:to-[#245741] text-[#f4f2ec] text-xs font-serif uppercase tracking-widest font-bold rounded-sm border border-[#c5a059]/40 shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Move All to Shopping Bag</span>
                    <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
