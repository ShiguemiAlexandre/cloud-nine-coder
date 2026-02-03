import { motion } from 'framer-motion';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(210, 40%, 98%) 0%, hsl(200, 35%, 96%) 50%, hsl(195, 30%, 94%) 100%)'
        }}
      />
      
      {/* Abstract wave pattern - SVG */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="wave-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Seigaiha-inspired concentric arcs */}
            <g fill="none" stroke="hsl(210, 40%, 50%)" strokeWidth="1">
              {/* Bottom left arc set */}
              <path d="M0,60 Q30,30 60,60" />
              <path d="M0,70 Q35,35 70,70" />
              <path d="M0,80 Q40,40 80,80" />
              
              {/* Top right arc set */}
              <path d="M60,0 Q90,30 120,0" />
              <path d="M50,0 Q90,40 120,10" />
              
              {/* Center decorative element */}
              <circle cx="60" cy="60" r="8" />
              <circle cx="60" cy="60" r="16" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave-pattern)" />
      </svg>

      {/* Floating geometric accents */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-32 h-32"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <polygon 
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
            fill="none" 
            stroke="hsl(200, 50%, 60%)" 
            strokeWidth="1"
          />
          <polygon 
            points="50,20 80,35 80,65 50,80 20,65 20,35" 
            fill="none" 
            stroke="hsl(200, 50%, 60%)" 
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[10%] w-24 h-24"
        animate={{
          y: [0, 8, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(195, 40%, 55%)" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="hsl(195, 40%, 55%)" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(195, 40%, 55%)" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Subtle gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(200, 40%, 85%) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(195, 35%, 80%) 0%, transparent 70%)'
        }}
      />
      
      {/* Grain overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default GeometricBackground;
