import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../icons/SocialIcons';
import { useShop } from '../../context/ShopContext';

export const Footer: React.FC = () => {
  const { showToast } = useShop();

  const handleLinkClick = (title: string) => {
    showToast(`Navigating to ${title} documentation...`);
  };

  return (
    <footer className="bg-[#050706] border-t border-[#c5a059]/20 text-ivory-300 text-xs font-sans pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Presentation & Showrooms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#16382a] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" stroke="none">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="1" strokeDasharray="1 1" />
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" opacity="0.9" />
                  </svg>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold tracking-[0.25em] text-[#faf9f6] uppercase block">
                    Vandenberg
                  </span>
                  <span className="text-[9px] font-sans tracking-[0.3em] text-[#c5a059] uppercase block">
                    Atelier du Billard · Est. 1894
                  </span>
                </div>
              </div>

              <p className="text-ivory-muted leading-relaxed max-w-sm mb-6">
                Engineered for serious players who respect the game. Handcrafted tournament slate tables, aerospace carbon cues, and bespoke accessories.
              </p>
            </div>

            {/* Direct Concierge Contact */}
            <div className="space-y-2 pt-4 border-t border-white/5">
              <a
                href="tel:+911149882000"
                className="flex items-center gap-2.5 text-ivory-200 hover:text-[#c5a059] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>+91 (0) 11 4988 2000 (VIP Desk)</span>
              </a>
              <a
                href="mailto:concierge@vandenbergbilliards.com"
                className="flex items-center gap-2.5 text-ivory-200 hover:text-[#c5a059] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>concierge@vandenbergbilliards.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: SHOP */}
            <div>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-[#faf9f6] font-bold mb-4">
                Shop
              </h4>
              <ul className="space-y-2.5">
                {[
                  'Pool Tables',
                  'Tournament Cues',
                  'Billiard Balls',
                  'Felt & Table Cloth',
                  'Cases & Accessories',
                  'Architectural Lighting'
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleLinkClick(item)}
                      className="text-ivory-muted hover:text-[#c5a059] transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: CUSTOMER CARE */}
            <div>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-[#faf9f6] font-bold mb-4">
                Customer Care
              </h4>
              <ul className="space-y-2.5">
                {[
                  'Private Concierge',
                  'White-Glove Delivery',
                  'Slate Precision Installation',
                  '10-Year Warranty Registry',
                  'Table Leveling Care',
                  'Frequently Asked Questions'
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleLinkClick(item)}
                      className="text-ivory-muted hover:text-[#c5a059] transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: ABOUT */}
            <div>
              <h4 className="font-serif text-xs uppercase tracking-[0.2em] text-[#faf9f6] font-bold mb-4">
                About Atelier
              </h4>
              <ul className="space-y-2.5">
                {[
                  'Our 1894 Story',
                  'The Billiards Journal',
                  'Trade & Commercial Architects',
                  'Bespoke Commissions',
                  'Flagship Showrooms',
                  'Sustainability & Slate Quarry'
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleLinkClick(item)}
                      className="text-ivory-muted hover:text-[#c5a059] transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Global Showrooms Banner */}
        <div className="py-8 border-b border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-6 text-ivory-muted text-[11px]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="text-ivory-100 font-serif font-semibold uppercase tracking-wider">
                Mumbai Atelier
              </p>
              <p>Maker Maxity, Bandra Kurla Complex</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="text-ivory-100 font-serif font-semibold uppercase tracking-wider">
                London Salon
              </p>
              <p>24 Mount Street, Mayfair, London</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
            <div>
              <p className="text-ivory-100 font-serif font-semibold uppercase tracking-wider">
                New York Showroom
              </p>
              <p>740 Fifth Avenue, Manhattan, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Social, Payment Badges & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-[#121614] border border-white/10 hover:border-[#c5a059] flex items-center justify-center text-ivory-muted hover:text-[#c5a059] transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#121614] border border-white/10 hover:border-[#c5a059] flex items-center justify-center text-ivory-muted hover:text-[#c5a059] transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-[#121614] border border-white/10 hover:border-[#c5a059] flex items-center justify-center text-ivory-muted hover:text-[#c5a059] transition-colors"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-ivory-muted uppercase">
            <span className="px-2.5 py-1 rounded bg-[#121614] border border-white/5">Visa</span>
            <span className="px-2.5 py-1 rounded bg-[#121614] border border-white/5">Mastercard</span>
            <span className="px-2.5 py-1 rounded bg-[#121614] border border-white/5">Amex</span>
            <span className="px-2.5 py-1 rounded bg-[#121614] border border-white/5">Apple Pay</span>
            <span className="px-2.5 py-1 rounded bg-[#121614] border border-white/5">UPI</span>
            <span className="px-2.5 py-1 rounded bg-[#121614] border border-white/5">Wire Transfer</span>
          </div>

          {/* Legal */}
          <div className="text-[11px] text-ivory-muted text-center md:text-right">
            <p>© 2026 Vandenberg &amp; Co. All rights reserved.</p>
            <div className="flex items-center justify-center md:justify-end gap-3 mt-1 text-[10px]">
              <a href="#" className="hover:text-ivory-100 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-ivory-100 transition-colors">Terms of Service</a>
              <span>·</span>
              <a href="#" className="hover:text-ivory-100 transition-colors">WPA Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
