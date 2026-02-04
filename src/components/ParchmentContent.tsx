import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};

interface ParchmentContentProps {
  isOpen: boolean;
  children: ReactNode;
}

const ParchmentContent = ({ isOpen, children }: ParchmentContentProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="w-screen overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: 'auto', 
            opacity: 1,
            transition: {
              height: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.5, delay: 0.2, ease: "easeOut" },
            }
          }}
          exit={{ 
            height: 0, 
            opacity: 0,
            transition: {
              height: { duration: 0.6, delay: 0.1, ease: [0.4, 0, 1, 1] },
              opacity: { duration: 0.3, ease: "easeIn" },
            }
          }}
        >
          {/* Parchment container with realistic texture */}
          <motion.div 
            className="relative w-full"
            style={{
              background: 'linear-gradient(180deg, hsl(40, 35%, 94%) 0%, hsl(38, 30%, 91%) 50%, hsl(35, 28%, 88%) 100%)',
              boxShadow: 'inset 0 20px 60px -20px rgba(60, 50, 40, 0.15), 0 -10px 30px -10px rgba(0,0,0,0.1)',
            }}
            initial={{ filter: 'blur(8px)' }}
            animate={{ filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Paper texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
            
            {/* Left decorative border */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-2"
              style={{
                background: 'linear-gradient(90deg, hsl(35, 25%, 82%) 0%, hsl(38, 30%, 88%) 100%)',
              }}
            />
            
            {/* Right decorative border */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-2"
              style={{
                background: 'linear-gradient(90deg, hsl(38, 30%, 88%) 0%, hsl(35, 25%, 82%) 100%)',
              }}
            />
            
            {/* Content wrapper */}
            <div className="relative max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
              {children}
            </div>
            
            {/* Bottom edge shadow for depth */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-4"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, hsl(35, 25%, 85%, 0.5) 100%)',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ParchmentContent;
