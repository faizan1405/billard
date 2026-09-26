import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, Heart, ShoppingBag, Menu, X, ChevronDown, Compass } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, wishlistIds, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen, showToast } = useShop();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pool Tables', href: '#tables' },
    { name: 'Cues', href: '#cues' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#story' }
  ];

  const handleAccountClick = () => {
    showToast('Member Concierge login demo. Access granted to VIP Showroom.');
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0e0c]/90 backdrop-blur-xl border-b border-[#c5a059]/20 shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#060807]/90 via-[#070908]/50 to-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram & Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-[#16382a] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-all transform group-hover:scale-105 shadow-md">
            {/* Custom Billiard Crest SVG */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" stroke="none">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
              <circle cx="12" cy="12" r="3.5" fill="currentColor" opacity="0.9" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-[0.25em] text-[#faf9f6] uppercase group-hover:text-[#c5a059] transition-colors leading-none">
              Vandenberg
            </span>
            <span className="text-[9px] font-sans tracking-[0.3em] text-[#c5a059] uppercase mt-1 opacity-80">
              Atelier du Billard · 1894
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-serif font-medium text-ivory-200/90 hover:text-[#c5a059] transition-colors relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-ivory-300 hover:text-[#c5a059] hover:bg-white/5 rounded-full transition-colors"
            aria-label="Search equipment"
            title="Search"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Account Icon */}
          <button
            onClick={handleAccountClick}
            className="hidden sm:flex p-2 text-ivory-300 hover:text-[#c5a059] hover:bg-white/5 rounded-full transition-colors"
            aria-label="Concierge account"
            title="Account"
          >
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Wishlist Icon */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="p-2 text-ivory-300 hover:text-[#c5a059] hover:bg-white/5 rounded-full transition-colors relative"
            aria-label="Wishlist"
            title="Wishlist"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
            {wishlistIds.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#1f4937] border border-[#c5a059] text-[9px] font-mono font-bold text-white rounded-full flex items-center justify-center">
                {wishlistIds.length}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-ivory-300 hover:text-[#c5a059] hover:bg-white/5 rounded-full transition-colors relative"
            aria-label="Shopping bag"
            title="Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#c5a059] text-[#0b0d0c] text-[9px] font-mono font-extrabold rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ivory-300 hover:text-white rounded-md transition-colors"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0e1110] border-b border-[#c5a059]/20 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-serif tracking-widest uppercase text-ivory-200 hover:text-[#c5a059] py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronDown className="w-4 h-4 -rotate-90 text-[#c5a059]" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleAccountClick();
                  }}
                  className="w-full py-2.5 px-4 bg-[#161a18] border border-white/10 text-xs font-serif uppercase tracking-wider text-ivory-200 rounded-sm text-center"
                >
                  Client Concierge Login
                </button>
                <div className="flex items-center justify-between text-xs text-ivory-muted pt-2">
                  <span>Currency: INR (₹)</span>
                  <span className="text-[#c5a059]">Direct Line: +91 (0) 11 4988 2000</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
