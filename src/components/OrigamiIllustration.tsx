import { motion } from 'framer-motion';

// Red origami crane matching the reference images

const OrigamiIllustration = () => {
  return (
    <motion.div 
      className="relative w-full h-full min-h-[200px] flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <svg 
        viewBox="0 0 200 200" 
        className="w-full max-w-[180px] md:max-w-[220px]"
        style={{ filter: 'drop-shadow(0 4px 12px rgba(180, 80, 80, 0.25))' }}
      >
        {/* Red origami crane - matching reference */}
        <defs>
          <linearGradient id="origami-red-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(5, 70%, 65%)" />
            <stop offset="100%" stopColor="hsl(0, 65%, 55%)" />
          </linearGradient>
          <linearGradient id="origami-red-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(0, 60%, 45%)" />
            <stop offset="100%" stopColor="hsl(5, 65%, 60%)" />
          </linearGradient>
          <linearGradient id="origami-red-3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(10, 75%, 72%)" />
            <stop offset="100%" stopColor="hsl(5, 70%, 60%)" />
          </linearGradient>
          <linearGradient id="origami-red-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 55%, 40%)" />
            <stop offset="100%" stopColor="hsl(355, 50%, 35%)" />
          </linearGradient>
        </defs>
        
        {/* Wing left - main body */}
        <motion.polygon
          points="30,90 100,60 100,140"
          fill="url(#origami-red-1)"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        {/* Wing right - main body */}
        <motion.polygon
          points="170,90 100,60 100,140"
          fill="url(#origami-red-3)"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        {/* Wing left shadow */}
        <motion.polygon
          points="30,90 100,100 100,140"
          fill="url(#origami-red-dark)"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Wing right bottom */}
        <motion.polygon
          points="170,90 100,100 100,140"
          fill="url(#origami-red-2)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Head / neck */}
        <motion.polygon
          points="100,60 130,30 120,70 100,80"
          fill="url(#origami-red-1)"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        
        {/* Head tip */}
        <motion.polygon
          points="130,30 145,35 125,50"
          fill="url(#origami-red-3)"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        
        {/* Tail */}
        <motion.polygon
          points="100,140 70,165 100,150 130,165"
          fill="url(#origami-red-2)"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        {/* Center fold line */}
        <motion.line
          x1="100" y1="60" x2="100" y2="140"
          stroke="hsl(0, 50%, 45%)"
          strokeWidth="0.8"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </svg>
    </motion.div>
  );
};

export default OrigamiIllustration;
