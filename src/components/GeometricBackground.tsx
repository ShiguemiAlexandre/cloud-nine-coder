const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient - soft blue to white */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(205, 45%, 96%) 0%, hsl(200, 40%, 98%) 100%)'
        }}
      />
      
      {/* Clean Seigaiha wave pattern */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.12 }}
      >
        <defs>
          <pattern 
            id="seigaiha-pattern" 
            x="0" 
            y="0" 
            width="80" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            {/* Row 1 - full circles */}
            <g fill="none" stroke="hsl(210, 50%, 55%)" strokeWidth="1">
              <path d="M0,40 a40,40 0 0,1 40,-40" />
              <path d="M0,40 a32,32 0 0,1 32,-32" />
              <path d="M0,40 a24,24 0 0,1 24,-24" />
              <path d="M0,40 a16,16 0 0,1 16,-16" />
              
              <path d="M80,40 a40,40 0 0,0 -40,-40" />
              <path d="M80,40 a32,32 0 0,0 -32,-32" />
              <path d="M80,40 a24,24 0 0,0 -24,-24" />
              <path d="M80,40 a16,16 0 0,0 -16,-16" />
            </g>
          </pattern>
          
          <pattern 
            id="seigaiha-offset" 
            x="40" 
            y="0" 
            width="80" 
            height="40" 
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="hsl(210, 50%, 55%)" strokeWidth="1">
              <path d="M0,40 a40,40 0 0,1 40,-40" />
              <path d="M0,40 a32,32 0 0,1 32,-32" />
              <path d="M0,40 a24,24 0 0,1 24,-24" />
              <path d="M0,40 a16,16 0 0,1 16,-16" />
              
              <path d="M80,40 a40,40 0 0,0 -40,-40" />
              <path d="M80,40 a32,32 0 0,0 -32,-32" />
              <path d="M80,40 a24,24 0 0,0 -24,-24" />
              <path d="M80,40 a16,16 0 0,0 -16,-16" />
            </g>
          </pattern>
          
          {/* Combined pattern for proper seigaiha */}
          <pattern 
            id="seigaiha-full" 
            x="0" 
            y="0" 
            width="80" 
            height="80" 
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="80" height="40" fill="url(#seigaiha-pattern)" />
            <rect x="-40" y="40" width="160" height="40" fill="url(#seigaiha-offset)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seigaiha-full)" />
      </svg>

      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, transparent 0%, hsl(200, 30%, 95%, 0.4) 100%)'
        }}
      />
    </div>
  );
};

export default GeometricBackground;
