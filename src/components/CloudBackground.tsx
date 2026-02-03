import { motion } from 'framer-motion';

const CloudBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Sky gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(210, 50%, 98%) 0%, hsl(205, 45%, 96%) 40%, hsl(200, 40%, 94%) 100%)'
        }}
      />
      
      {/* Large soft cloud - top left */}
      <motion.div
        className="absolute -top-20 -left-20 w-[500px] h-[300px] rounded-full cloud-shape"
        animate={{
          x: [0, 30, 0],
          y: [0, -15, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Medium cloud - top right */}
      <motion.div
        className="absolute top-10 right-10 w-[350px] h-[200px] rounded-full cloud-shape opacity-50"
        animate={{
          x: [0, -20, 0],
          y: [0, -10, 0],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      {/* Small accent cloud - center left */}
      <motion.div
        className="absolute top-1/3 -left-10 w-[250px] h-[150px] rounded-full cloud-shape opacity-40"
        animate={{
          x: [0, 25, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      
      {/* Bottom right cloud */}
      <motion.div
        className="absolute bottom-20 right-20 w-[400px] h-[220px] rounded-full cloud-shape opacity-45"
        animate={{
          x: [0, -15, 0],
          y: [0, -12, 0],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Bottom left cloud */}
      <motion.div
        className="absolute bottom-10 -left-20 w-[300px] h-[180px] rounded-full cloud-shape opacity-35"
        animate={{
          x: [0, 20, 0],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* Center accent - very subtle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(ellipse, hsl(210, 45%, 92%) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Grain overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default CloudBackground;
