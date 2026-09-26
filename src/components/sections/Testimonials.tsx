import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../data/billiardsData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 sm:py-36 bg-[#090c0a] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              Client Commendations
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight mb-4">
            Trusted by Players &amp;{' '}
            <span className="italic font-editorial text-[#e8d7b8]">Game Rooms</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 text-[#c5a059]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-serif tracking-wider text-ivory-200 ml-2">
              4.9/5 Master Rating
            </span>
          </div>
        </div>

        {/* Testimonial Showcase Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#111513] border border-[#c5a059]/30 rounded-sm p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden">
            {/* Ambient Watermark Quote Icon */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-white/[0.03] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-col justify-between"
              >
                {/* Review Text */}
                <p className="text-lg sm:text-2xl md:text-3xl font-serif text-ivory-100 font-normal leading-relaxed mb-8 italic">
                  &quot;{current.quote}&quot;
                </p>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-white/10 gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-12 h-12 rounded-full object-cover border border-[#c5a059]/40"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-serif font-bold text-ivory-100">
                          {current.author}
                        </h4>
                        {current.verifiedPurchase && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-[#c5a059] bg-[#16382a] px-2 py-0.5 rounded-sm border border-[#c5a059]/20 font-sans">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified Owner
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ivory-muted mt-0.5">
                        {current.role} · <span className="text-ivory-200">{current.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={prevReview}
                      className="p-2.5 rounded-sm bg-[#171c19] hover:bg-[#1f2622] text-ivory-300 hover:text-white border border-white/10 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-xs text-ivory-muted px-2">
                      0{currentIndex + 1} / 0{TESTIMONIALS.length}
                    </span>
                    <button
                      onClick={nextReview}
                      className="p-2.5 rounded-sm bg-[#171c19] hover:bg-[#1f2622] text-ivory-300 hover:text-white border border-white/10 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 transition-all rounded-full ${
                  currentIndex === i ? 'w-8 bg-[#c5a059]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
