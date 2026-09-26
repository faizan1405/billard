import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setIsSubscribed(true);
    showToast('Welcome to the Vandenberg Dispatch. You will receive private collection previews.');
  };

  return (
    <section className="py-24 sm:py-32 bg-[#090c0a] relative border-b border-white/5 overflow-hidden">
      {/* Subtle emerald ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#16382a]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#c5a059] font-semibold">
              The Vandenberg Gazette
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#faf9f6] tracking-tight mb-4">
            Stay Ahead of the{' '}
            <span className="italic font-editorial text-[#e8d7b8]">Game</span>
          </h2>

          <p className="text-sm sm:text-base text-ivory-300 font-sans max-w-xl mx-auto leading-relaxed mb-8">
            New arrivals, billiards tips and exclusive collections — delivered occasionally.
          </p>

          {isSubscribed ? (
            <div className="inline-flex items-center gap-3 p-4 rounded-sm bg-[#16382a]/80 border border-[#c5a059]/40 text-ivory-100 max-w-md mx-auto">
              <CheckCircle2 className="w-5 h-5 text-[#c5a059]" />
              <span className="text-xs font-serif uppercase tracking-wider text-left">
                Thank you for subscribing. Your private access invitation has been dispatched.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your private email..."
                    className="w-full bg-[#121614] border border-white/15 focus:border-[#c5a059] text-ivory-100 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-sm focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#16382a] hover:bg-[#1f4937] text-white text-xs font-serif uppercase tracking-[0.2em] font-bold rounded-sm border border-[#c5a059]/40 transition-all flex items-center justify-center gap-2 shrink-0 shadow-md"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
                </button>
              </div>

              <p className="text-[11px] text-ivory-muted mt-3">
                Respecting your inbox since 1894. Never shared, unsubscribe at any time.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
