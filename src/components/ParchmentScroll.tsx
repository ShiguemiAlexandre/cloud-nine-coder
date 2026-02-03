import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ParchmentScrollProps {
  isOpen: boolean;
  children: ReactNode;
}

const ParchmentScroll = ({ isOpen, children }: ParchmentScrollProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="relative w-full max-w-3xl mx-auto mt-8"
          initial="closed"
          animate="open"
          exit="closed"
          variants={{
            closed: { 
              scaleY: 0,
              opacity: 0,
              originY: 0,
            },
            open: { 
              scaleY: 1,
              opacity: 1,
              originY: 0,
            },
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {/* Main parchment container */}
          <div className="relative">
            {/* Top roll decoration */}
            <div className="relative w-full h-6 scroll-edge rounded-t-lg z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/40" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/40" />
            </div>
            
            {/* Parchment body */}
            <motion.div
              className="parchment-texture px-6 md:px-10 py-8 md:py-12 relative overflow-hidden"
              style={{
                boxShadow: 'var(--shadow-parchment)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {/* Side decorative borders */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-parchment-edge/50 via-parchment-dark/30 to-parchment-edge/50" />
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-parchment-edge/50 via-parchment-dark/30 to-parchment-edge/50" />
              
              {/* Content with staggered animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {children}
              </motion.div>
            </motion.div>
            
            {/* Bottom roll decoration */}
            <div className="relative w-full h-6 scroll-edge rounded-b-lg z-10">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/40" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/40" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ParchmentScroll;
