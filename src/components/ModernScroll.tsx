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
      {/* Main glassmorphism container */}
      <motion.div 
        className="relative overflow-hidden"
        whileHover={{
          scale: 1.02,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Glass background */}
        <div 
          className="relative px-12 md:px-20 py-6 md:py-8 rounded-2xl border border-white/30"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px -8px rgba(100, 120, 140, 0.15), 0 4px 16px -4px rgba(100, 120, 140, 0.1), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
          
          {/* Decorative side elements */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1 h-12 rounded-full bg-gradient-to-b from-slate-300/50 via-slate-400/30 to-slate-300/50" />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-12 rounded-full bg-gradient-to-b from-slate-300/50 via-slate-400/30 to-slate-300/50" />
          
          {/* Main text */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] select-none text-slate-800">
              ITO
            </h1>
            <p className="mt-1 text-xs md:text-sm tracking-[0.4em] text-slate-500 font-light uppercase">
              伊藤
            </p>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(100, 150, 200, 0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>
      
      {/* Hint text */}
      <motion.p
        className="text-center mt-5 text-slate-400 text-sm font-light tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? '' : 'Click to explore'}
      </motion.p>
    </motion.div>
  );
};

export default ModernScroll;
