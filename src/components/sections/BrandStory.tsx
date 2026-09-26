import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Compass, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const BrandStory: React.FC = () => {
  const { showToast } = useShop();

  return (
    <section id="story" className="py-24 sm:py-36 bg-[#0a0d0b] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Inset Detail */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Player Image */}
            <div className="relative rounded-sm overflow-hidden bg-[#161a18] border border-white/10 shadow-2xl aspect-[4/5] sm:aspect-[3/4]">
              <img
                src="/images/brand_player.svg"
                alt="Professional billiards player preparing for a precision shot"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d0b] via-transparent to-transparent opacity-80" />

              {/* Floating Monogram Wax Seal */}
              <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-[#16382a]/90 backdrop-blur-md border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shadow-xl">
                <span className="font-serif text-lg font-bold tracking-widest">VB</span>
              </div>
            </div>

            {/* Overlapping Inset Detail Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-56 aspect-square rounded-sm overflow-hidden border-2 border-[#c5a059]/30 shadow-2xl bg-[#121614]">
              <img
                src="/images/carbon_cue.jpg"
                alt="Precision cue joint and carbon shaft"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]"
              />
              <div className="absolute bottom-2 left-2 right-2 text-center bg-black/60 backdrop-blur-sm py-1 rounded text-[9px] font-mono uppercase tracking-widest text-[#c5a059]">
                Zero-Tolerance Cue
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Milestones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
                Atelier Heritage · Est. 1894
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight leading-tight mb-6">
              Built for Players Who{' '}
              <span className="italic font-editorial text-[#e8d7b8]">Respect the Game.</span>
            </h2>

            <p className="text-base sm:text-lg text-ivory-200 font-serif leading-relaxed mb-6">
              &quot;We believe great billiards equipment should combine precision, craftsmanship and timeless design. From your first break to your final shot, every detail matters.&quot;
            </p>

            <p className="text-xs sm:text-sm text-ivory-muted font-sans leading-relaxed mb-10">
              Founded over a century ago, Vandenberg began with a solitary mission: to hand-grind Brazilian and Italian slate to absolute flatness so that no ball would ever veer off true trajectory. Today, we fuse heirloom timber carving with aerospace carbon composites, delivering playing instruments worthy of world tournaments and private estates.
            </p>

            {/* Heritage Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-white/10 mb-8">
              <div>
                <span className="text-2xl font-serif font-bold text-[#c5a059] block">130+</span>
                <span className="text-xs font-serif text-ivory-100 uppercase tracking-wider block mt-1">Years Heritage</span>
                <span className="text-[11px] text-ivory-muted block mt-0.5">Continuous craftsmanship</span>
              </div>

              <div>
                <span className="text-2xl font-serif font-bold text-[#c5a059] block">0.001&quot;</span>
                <span className="text-xs font-serif text-ivory-100 uppercase tracking-wider block mt-1">Slate Tolerance</span>
                <span className="text-[11px] text-ivory-muted block mt-0.5">Laser-honed planar bed</span>
              </div>

              <div>
                <span className="text-2xl font-serif font-bold text-[#c5a059] block">WPA</span>
                <span className="text-xs font-serif text-ivory-100 uppercase tracking-wider block mt-1">Certified Specs</span>
                <span className="text-[11px] text-ivory-muted block mt-0.5">Championship regulation</span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => showToast('Opening Vandenberg Heritage Archives & Storybook...')}
                className="px-8 py-3.5 bg-[#16382a] hover:bg-[#1f4937] text-white text-xs font-serif uppercase tracking-[0.2em] font-bold rounded-sm border border-[#c5a059]/40 shadow-lg inline-flex items-center gap-2.5 transition-all transform hover:-translate-y-0.5"
              >
                <span>Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#c5a059]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
