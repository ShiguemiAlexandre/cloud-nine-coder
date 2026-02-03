import { motion } from 'framer-motion';

interface ScrollBrandProps {
  onClick: () => void;
  isOpen: boolean;
}

const ScrollBrand = ({ onClick, isOpen }: ScrollBrandProps) => {
  return (
    <motion.div
      className="relative cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      {/* Main scroll container */}
      <div className="relative">
        {/* Left roll */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-6 h-20 scroll-edge rounded-full z-10" />
        
        {/* Right roll */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-6 h-20 scroll-edge rounded-full z-10" />
        
        {/* Parchment body */}
        <motion.div 
          className="relative px-16 py-6 parchment-texture rounded-sm"
          style={{
            boxShadow: '0 4px 20px -4px hsl(30, 30%, 50%, 0.2)',
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: '0 8px 30px -4px hsl(30, 30%, 50%, 0.25)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative lines */}
          <div className="absolute top-2 left-8 right-8 h-px bg-gradient-to-r from-transparent via-parchment-edge to-transparent opacity-50" />
          <div className="absolute bottom-2 left-8 right-8 h-px bg-gradient-to-r from-transparent via-parchment-edge to-transparent opacity-50" />
          
          {/* ITO text */}
          <h1 className="ito-brand text-4xl md:text-5xl text-center tracking-[0.4em] select-none">
            ITO
          </h1>
        </motion.div>
      </div>
      
      {/* Hint text */}
      <motion.p
        className="text-center mt-4 text-ink-light text-sm font-light tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        Click to {isOpen ? 'close' : 'open'}
      </motion.p>
    </motion.div>
  );
};

export default ScrollBrand;
