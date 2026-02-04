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
          className="w-full max-w-4xl mx-auto mt-10"
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
          {/* Parchment-style container */}
          <motion.div 
            className="relative overflow-hidden rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(40, 30%, 96%) 0%, hsl(35, 25%, 93%) 50%, hsl(38, 28%, 91%) 100%)',
              boxShadow: '0 20px 50px -12px rgba(60, 50, 40, 0.15), 0 8px 20px -8px rgba(60, 50, 40, 0.1), inset 0 1px 0 rgba(255,255,255,0.8)',
            }}
            initial={{ y: 24, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Subtle parchment texture overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
            
            {/* Top edge highlight */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
            
            {/* Left decorative border */}
            <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-amber-300/20 to-transparent" />
            
            {/* Right decorative border */}
            <div className="absolute right-0 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-amber-300/20 to-transparent" />
            
            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-14">
              {children}
            </div>
            
            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-amber-200/40 to-transparent" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentPanel;
