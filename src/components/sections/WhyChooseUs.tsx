import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wrench, Truck, Headphones, Check } from 'lucide-react';

const BENEFITS = [
  {
    number: '01',
    icon: Shield,
    title: 'Professional Quality',
    subtitle: 'WPA Standards',
    description: 'Every table, shaft, and ball is curated specifically for players who demand tournament-grade tolerances and uncompromised ball roll.'
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Expert Installation',
    subtitle: 'Certified Master Guild',
    description: 'Factory-trained technicians handle delivery, seamless three-piece slate alignment, and precision micro-leveling on site.'
  },
  {
    number: '03',
    icon: Truck,
    title: 'Nationwide Delivery',
    subtitle: 'Insured White-Glove Transit',
    description: 'Custom climate-controlled crates and dedicated freight carriers ensure your heirloom investment arrives in flawless condition.'
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Dedicated Support',
    subtitle: 'Lifetime Concierge',
    description: 'Direct access to equipment specialists and table restorers before, during, and decades after your acquisition.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#080a09] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              The Vandenberg Standard
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight">
            Why Discerning Players{' '}
            <span className="italic font-editorial text-[#e8d7b8]">Choose Us</span>
          </h2>
        </div>

        {/* 4 Minimalist Pillars (Editorial layout, not rounded SaaS cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`pt-8 md:pt-0 ${idx > 0 ? 'md:pl-8 lg:pl-10' : ''} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-normal text-[#c5a059]/60">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#121614] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif text-ivory-100 tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-[#c5a059] block mb-3 font-medium">
                    {item.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-ivory-muted font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-[11px] text-ivory-300">
                  <Check className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Guaranteed by Vandenberg</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
