import { motion } from 'framer-motion';

const UkiyoeBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient - soft cream to light blue */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(40, 30%, 97%) 0%, hsl(200, 35%, 95%) 50%, hsl(205, 40%, 93%) 100%)'
        }}
      />
      
      {/* Seigaiha wave pattern - bold and prominent like reference */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.95 }}
      >
        <defs>
          <pattern 
            id="seigaiha-main" 
            x="0" 
            y="0" 
            width="100" 
            height="50" 
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="hsl(200, 75%, 55%)" strokeWidth="2.5">
              <path d="M0,50 a50,50 0 0,1 50,-50" />
              <path d="M0,50 a40,40 0 0,1 40,-40" />
              <path d="M0,50 a30,30 0 0,1 30,-30" />
              <path d="M0,50 a20,20 0 0,1 20,-20" />
              
              <path d="M100,50 a50,50 0 0,0 -50,-50" />
              <path d="M100,50 a40,40 0 0,0 -40,-40" />
              <path d="M100,50 a30,30 0 0,0 -30,-30" />
              <path d="M100,50 a20,20 0 0,0 -20,-20" />
            </g>
          </pattern>
          
          <pattern 
            id="seigaiha-offset" 
            x="50" 
            y="0" 
            width="100" 
            height="50" 
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="hsl(200, 75%, 55%)" strokeWidth="2.5">
              <path d="M0,50 a50,50 0 0,1 50,-50" />
              <path d="M0,50 a40,40 0 0,1 40,-40" />
              <path d="M0,50 a30,30 0 0,1 30,-30" />
              <path d="M0,50 a20,20 0 0,1 20,-20" />
              
              <path d="M100,50 a50,50 0 0,0 -50,-50" />
              <path d="M100,50 a40,40 0 0,0 -40,-40" />
              <path d="M100,50 a30,30 0 0,0 -30,-30" />
              <path d="M100,50 a20,20 0 0,0 -20,-20" />
            </g>
          </pattern>
          
          <pattern 
            id="seigaiha-combined" 
            x="0" 
            y="0" 
            width="100" 
            height="100" 
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="100" height="50" fill="url(#seigaiha-main)" />
            <rect x="-50" y="50" width="200" height="50" fill="url(#seigaiha-offset)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="white" />
        <rect width="100%" height="100%" fill="url(#seigaiha-combined)" />
      </svg>

      {/* Floating ukiyo-e style clouds with slow animation */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[300px] h-[100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 300 100" className="w-full h-full opacity-70">
          <defs>
            <linearGradient id="cloud1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 50%, 92%)" />
              <stop offset="100%" stopColor="hsl(200, 40%, 85%)" />
            </linearGradient>
          </defs>
          <ellipse cx="150" cy="60" rx="140" ry="35" fill="url(#cloud1)" />
          <ellipse cx="100" cy="50" rx="70" ry="30" fill="url(#cloud1)" />
          <ellipse cx="200" cy="50" rx="80" ry="28" fill="url(#cloud1)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[20%] right-[10%] w-[250px] h-[80px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <svg viewBox="0 0 250 80" className="w-full h-full opacity-60">
          <defs>
            <linearGradient id="cloud2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(205, 45%, 94%)" />
              <stop offset="100%" stopColor="hsl(205, 35%, 88%)" />
            </linearGradient>
          </defs>
          <ellipse cx="125" cy="50" rx="110" ry="28" fill="url(#cloud2)" />
          <ellipse cx="80" cy="40" rx="55" ry="22" fill="url(#cloud2)" />
          <ellipse cx="170" cy="42" rx="60" ry="24" fill="url(#cloud2)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] left-[15%] w-[280px] h-[90px]"
        animate={{
          x: [0, 35, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      >
        <svg viewBox="0 0 280 90" className="w-full h-full opacity-55">
          <defs>
            <linearGradient id="cloud3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(195, 40%, 93%)" />
              <stop offset="100%" stopColor="hsl(195, 35%, 86%)" />
            </linearGradient>
          </defs>
          <ellipse cx="140" cy="55" rx="125" ry="32" fill="url(#cloud3)" />
          <ellipse cx="90" cy="45" rx="60" ry="25" fill="url(#cloud3)" />
          <ellipse cx="190" cy="48" rx="70" ry="26" fill="url(#cloud3)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[5%] w-[220px] h-[70px]"
        animate={{
          x: [0, -25, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      >
        <svg viewBox="0 0 220 70" className="w-full h-full opacity-50">
          <defs>
            <linearGradient id="cloud4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(200, 45%, 95%)" />
              <stop offset="100%" stopColor="hsl(200, 38%, 89%)" />
            </linearGradient>
          </defs>
          <ellipse cx="110" cy="45" rx="100" ry="24" fill="url(#cloud4)" />
          <ellipse cx="70" cy="38" rx="50" ry="20" fill="url(#cloud4)" />
          <ellipse cx="150" cy="40" rx="55" ry="18" fill="url(#cloud4)" />
        </svg>
      </motion.div>

      {/* Subtle grain overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default UkiyoeBackground;
