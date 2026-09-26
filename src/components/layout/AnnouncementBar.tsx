import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Truck, Sparkles, MapPin, ChevronRight } from 'lucide-react';

const MESSAGES = [
  {
    icon: Truck,
    text: 'Free Delivery on Selected Pool Tables | Professional Installation Available',
    action: 'Learn More'
  },
  {
    icon: ShieldCheck,
    text: 'Engineered to WPA Standards | 10-Year Diamond-Honed Slate Guarantee',
    action: 'Warranty'
  },
  {
    icon: Sparkles,
    text: 'Private Showroom Consultations in London, New York & Mumbai',
    action: 'Book Visit'
  }
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const current = MESSAGES[index];
  const Icon = current.icon;

  return (
    <aside aria-label="Announcement" className="relative z-40 bg-[#070908] border-b border-[#c5a059]/15 text-[#e7e4d8] py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Private Concierge */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] text-ivory-muted tracking-wider uppercase font-serif">
          <MapPin className="w-3 h-3 text-[#c5a059]" />
          <span>Atelier Concierge: Mumbai · London · New York</span>
        </div>

        {/* Center: Dynamic Announcement */}
        <div className="flex-1 flex justify-center items-center overflow-hidden h-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex items-center gap-2 text-center"
            >
              <Icon className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
              <span className="font-sans text-[11px] md:text-xs text-ivory-200 tracking-wide">
                {current.text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Currency & VIP Service */}
        <div className="hidden sm:flex items-center gap-3 text-[11px] text-ivory-muted tracking-wider uppercase font-serif">
          <span className="text-[#c5a059] font-medium">IN / INR (₹)</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="hover:text-ivory-100 cursor-pointer transition-colors">VIP Service</span>
        </div>
      </div>
    </aside>
  );
};
