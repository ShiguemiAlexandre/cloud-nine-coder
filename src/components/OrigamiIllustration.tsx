import { motion } from 'framer-motion';

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
        style={{ filter: 'drop-shadow(0 4px 12px rgba(100, 116, 139, 0.15))' }}
      >
        {/* Abstract origami crane - geometric, modern */}
        <defs>
          <linearGradient id="origami-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210, 50%, 88%)" />
            <stop offset="100%" stopColor="hsl(210, 45%, 78%)" />
          </linearGradient>
          <linearGradient id="origami-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(215, 40%, 75%)" />
            <stop offset="100%" stopColor="hsl(205, 50%, 85%)" />
          </linearGradient>
          <linearGradient id="origami-gradient-3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 55%, 92%)" />
            <stop offset="100%" stopColor="hsl(210, 45%, 82%)" />
          </linearGradient>
        </defs>
        
        {/* Main body - large triangle */}
        <motion.polygon
          points="100,30 160,130 40,130"
          fill="url(#origami-gradient-1)"
          stroke="hsl(215, 35%, 65%)"
          strokeWidth="1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        {/* Wing left */}
        <motion.polygon
          points="40,130 100,90 20,100"
          fill="url(#origami-gradient-2)"
          stroke="hsl(215, 35%, 65%)"
          strokeWidth="1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Wing right */}
        <motion.polygon
          points="160,130 100,90 180,100"
          fill="url(#origami-gradient-2)"
          stroke="hsl(215, 35%, 65%)"
          strokeWidth="1"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        
        {/* Head */}
        <motion.polygon
          points="100,30 120,60 80,60"
          fill="url(#origami-gradient-3)"
          stroke="hsl(215, 35%, 65%)"
          strokeWidth="1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        
        {/* Tail */}
        <motion.polygon
          points="100,130 120,170 80,170"
          fill="url(#origami-gradient-3)"
          stroke="hsl(215, 35%, 65%)"
          strokeWidth="1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        {/* Fold lines for origami effect */}
        <motion.line
          x1="100" y1="30" x2="100" y2="130"
          stroke="hsl(215, 30%, 70%)"
          strokeWidth="0.5"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <motion.line
          x1="40" y1="130" x2="160" y2="130"
          stroke="hsl(215, 30%, 70%)"
          strokeWidth="0.5"
          strokeDasharray="4,4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </svg>
    </motion.div>
  );
};

export default OrigamiIllustration;
