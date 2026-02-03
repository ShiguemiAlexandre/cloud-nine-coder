import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentPanelProps {
  isOpen: boolean;
  children: ReactNode;
}

const ContentPanel = ({ isOpen, children }: ContentPanelProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="w-full max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, height: 0, filter: 'blur(8px)' }}
          animate={{ 
            opacity: 1, 
            height: 'auto', 
            filter: 'blur(0px)',
            transition: {
              height: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.4, delay: 0.1, ease: "easeOut" },
              filter: { duration: 0.4, delay: 0.1, ease: "easeOut" },
            }
          }}
          exit={{ 
            opacity: 0, 
            height: 0, 
            filter: 'blur(8px)',
            transition: {
              height: { duration: 0.4, delay: 0.1, ease: [0.4, 0, 1, 1] },
              opacity: { duration: 0.3, ease: "easeIn" },
              filter: { duration: 0.3, ease: "easeIn" },
            }
          }}
        >
          {/* Glassmorphism container */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl border border-white/40"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 20px 60px -15px rgba(100, 120, 140, 0.15), 0 8px 24px -8px rgba(100, 120, 140, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top edge highlight */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            
            {/* Content */}
            <div className="p-8 md:p-12">
              {children}
            </div>
            
            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-slate-200/50 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentPanel;
