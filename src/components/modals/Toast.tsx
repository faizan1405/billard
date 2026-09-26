import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col gap-2 max-w-md w-full px-4">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto bg-[#131715]/95 backdrop-blur-xl border border-[#c5a059]/30 text-[#f4f2ec] p-4 rounded-lg shadow-2xl flex items-center gap-3.5"
          >
            <div className="w-8 h-8 rounded-full bg-[#16382a] flex items-center justify-center text-[#c5a059] shrink-0 border border-[#c5a059]/20">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <p className="text-sm font-sans text-ivory-200 flex-1 leading-snug">
              {toastMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
