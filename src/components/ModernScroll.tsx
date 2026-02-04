import { motion } from 'framer-motion';

interface ModernScrollProps {
  onClick: () => void;
  isOpen: boolean;
}

const ModernScroll = ({ onClick, isOpen }: ModernScrollProps) => {
  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Main scroll container */}
      <motion.div 
        className="relative flex items-center"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Left scroll roller cap */}
        <div 
          className="relative z-10 w-6 md:w-8 h-20 md:h-24 rounded-l-full flex-shrink-0"
          style={{
            background: 'linear-gradient(180deg, hsl(215, 35%, 35%) 0%, hsl(215, 40%, 25%) 50%, hsl(215, 35%, 30%) 100%)',
            boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2), -2px 4px 8px rgba(0,0,0,0.15)',
          }}
        >
          {/* Roller detail */}
          <div className="absolute inset-y-2 left-1 right-2 rounded-l-full" 
            style={{
              background: 'linear-gradient(90deg, hsl(215, 30%, 40%) 0%, hsl(215, 35%, 30%) 100%)',
            }}
          />
        </div>

        {/* Center navy scroll body */}
        <div 
          className="relative px-8 md:px-16 lg:px-24 py-5 md:py-6 flex-shrink-0"
          style={{
            background: 'linear-gradient(180deg, hsl(215, 45%, 28%) 0%, hsl(220, 50%, 20%) 50%, hsl(215, 45%, 25%) 100%)',
            boxShadow: '0 8px 24px -4px rgba(30, 41, 59, 0.4), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2)',
          }}
        >
          {/* Top highlight line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
          
          {/* Bottom shadow line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/20" />
          
          {/* Japanese characters - ITO 伊藤 */}
          <div className="text-center select-none">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.4em] text-white/95"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              伊藤
            </h1>
            <p className="mt-1 text-xs md:text-sm tracking-[0.5em] text-slate-300/80 font-light uppercase">
              ITO
            </p>
          </div>
        </div>

        {/* Right scroll roller cap */}
        <div 
          className="relative z-10 w-6 md:w-8 h-20 md:h-24 rounded-r-full flex-shrink-0"
          style={{
            background: 'linear-gradient(180deg, hsl(215, 35%, 35%) 0%, hsl(215, 40%, 25%) 50%, hsl(215, 35%, 30%) 100%)',
            boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.2), 2px 4px 8px rgba(0,0,0,0.15)',
          }}
        >
          {/* Roller detail */}
          <div className="absolute inset-y-2 right-1 left-2 rounded-r-full" 
            style={{
              background: 'linear-gradient(90deg, hsl(215, 35%, 30%) 0%, hsl(215, 30%, 40%) 100%)',
            }}
          />
        </div>
      </motion.div>
      
      {/* Hint text */}
      <motion.p
        className="text-center mt-6 text-slate-500 text-sm font-light tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? '' : 'Click to explore'}
      </motion.p>
    </motion.div>
  );
};

export default ModernScroll;
