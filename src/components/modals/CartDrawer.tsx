import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ShieldCheck, ArrowRight, Truck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartCount,
    cartSubtotal,
    showToast
  } = useShop();

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const freeDeliveryThreshold = 50000;
  const progressPercent = Math.min(100, (cartSubtotal / freeDeliveryThreshold) * 100);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer panel */}
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
                  <div className="w-9 h-9 rounded-full bg-[#16382a] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif tracking-wider text-ivory-100 uppercase">
                      Shopping Bag
                    </h2>
                    <p className="text-xs text-ivory-muted">
                      {cartCount} {cartCount === 1 ? 'curated item' : 'curated items'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-ivory-muted hover:text-white rounded-full hover:bg-white/5 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* White Glove Delivery Meter */}
              <div className="px-6 py-3.5 bg-[#141a17] border-b border-white/5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="flex items-center gap-1.5 text-ivory-300">
                    <Truck className="w-3.5 h-3.5 text-[#c5a059]" />
                    {cartSubtotal >= freeDeliveryThreshold ? (
                      <span className="text-[#c5a059] font-medium">Complimentary White-Glove Installation Unlocked</span>
                    ) : (
                      <span>Add {formatPrice(freeDeliveryThreshold - cartSubtotal)} more for free white-glove setup</span>
                    )}
                  </span>
                  <span className="font-mono text-ivory-muted text-[11px]">{Math.round(progressPercent)}%</span>
                </div>
                <div className="w-full bg-[#1f2622] h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#1f4937] via-[#2d6a50] to-[#c5a059]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 divide-y divide-white/5 no-scrollbar">
                {cart.length === 0 ? (
                  <div className="py-20 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#161a18] border border-white/10 flex items-center justify-center text-ivory-muted mb-4">
                      <ShoppingBag className="w-8 h-8 opacity-40" />
                    </div>
                    <p className="text-base font-serif text-ivory-200 mb-1">Your bag is currently empty</p>
                    <p className="text-xs text-ivory-muted max-w-xs mb-6">
                      Explore our tournament-honed slate tables, carbon shafts, and bespoke accessories.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="px-6 py-2.5 rounded-sm bg-[#16382a] hover:bg-[#1f4937] text-[#f4f2ec] text-xs uppercase tracking-widest font-semibold border border-[#c5a059]/30 transition-colors"
                    >
                      Explore Collection
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.product.id} className="pt-5 first:pt-0 flex gap-4">
                      {/* Thumbnail */}
                      <div className="w-20 h-20 bg-[#161a18] rounded-sm overflow-hidden shrink-0 border border-white/10 relative group">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-sm font-medium text-ivory-100 line-clamp-1">
                              {item.product.name}
                            </h3>
                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-ivory-muted hover:text-red-400 p-1 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-xs text-ivory-muted mt-0.5">{item.product.type}</p>
                          {item.selectedFinish && (
                            <p className="text-[11px] text-[#c5a059] mt-0.5">Finish: {item.selectedFinish}</p>
                          )}
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-white/10 rounded-sm bg-[#141716]">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 text-ivory-muted hover:text-white transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-mono text-ivory-100 font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 text-ivory-muted hover:text-white transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-sm font-serif font-semibold text-[#c5a059]">
                              {formatPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Bottom Footer & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-[#121514] space-y-4">
                  <div className="space-y-1.5 text-xs text-ivory-muted">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-mono text-ivory-100">{formatPrice(cartSubtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>White-Glove Delivery &amp; Setup</span>
                      <span className="text-[#c5a059]">Complimentary</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Applicable Taxes &amp; GST</span>
                      <span className="text-ivory-300">Included</span>
                    </div>
                    <div className="pt-2 border-t border-white/5 flex justify-between text-base font-serif font-bold text-ivory-100">
                      <span>Total</span>
                      <span className="text-[#c5a059]">{formatPrice(cartSubtotal)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      showToast('Proceeding to VIP Checkout demo...');
                    }}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-[#16382a] to-[#1f4937] hover:from-[#1b4433] hover:to-[#245741] text-[#f4f2ec] text-xs font-serif uppercase tracking-widest font-bold rounded-sm border border-[#c5a059]/40 shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Proceed to VIP Checkout</span>
                    <ArrowRight className="w-4 h-4 text-[#c5a059]" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-ivory-muted">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Insured White-Glove Transit · 10-Yr Structural Warranty</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
