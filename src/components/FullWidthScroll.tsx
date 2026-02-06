import { motion } from 'framer-motion';

interface FullWidthScrollProps {
  onClick: () => void;
  isOpen: boolean;
}

// Gradientes e sombras para fácil manutenção
const GRADIENTS = {
  rollerVertical: 'linear-gradient(180deg, hsl(0, 65%, 50%) 0%, hsl(0, 70%, 40%) 50%, hsl(0, 65%, 45%) 100%)',
  rollerHorizontalLeft: 'linear-gradient(90deg, hsl(0, 60%, 55%) 0%, hsl(0, 70%, 40%) 100%)',
  rollerHorizontalRight: 'linear-gradient(90deg, hsl(0, 70%, 40%) 0%, hsl(0, 60%, 55%) 100%)',
  scrollBody: 'linear-gradient(180deg, hsl(220, 50%, 22%) 0%, hsl(225, 55%, 15%) 50%, hsl(220, 50%, 18%) 100%)',
};

const SHADOWS = {
  roller: 'inset 3px 0 6px rgba(0,0,0,0.3), 3px 4px 12px rgba(0,0,0,0.2)',
  scroll: 'inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -2px 0 rgba(0,0,0,0.3), 0 10px 30px -5px rgba(0,0,0,0.3)',
};

// Componente para os rollers, evita repetição
const Roller = ({ side }: { side: 'left' | 'right' }) => (
  <div
    className={`relative z-20 w-10 md:w-14 lg:w-16 h-28 md:h-32 lg:h-36 flex-shrink-0 rounded-${side}-full`}
    style={{ background: GRADIENTS.rollerVertical, boxShadow: SHADOWS.roller }}
  >
    <div
      className={`absolute top-2 bottom-2 ${side === 'left' ? 'left-1 right-3 rounded-l' : 'right-1 left-3 rounded-r'}`}
      style={{ background: side === 'left' ? GRADIENTS.rollerHorizontalLeft : GRADIENTS.rollerHorizontalRight }}
    />
    <div
      className={`absolute top-0 bottom-0 ${side === 'left' ? 'right-0' : 'left-0'} w-1`}
      style={{
        background: 'linear-gradient(180deg, hsl(0, 50%, 25%) 0%, hsl(0, 60%, 20%) 50%, hsl(0, 50%, 25%) 100%)',
      }}
    />
  </div>
);

const FullWidthScroll = ({ onClick, isOpen }: FullWidthScrollProps) => {
  return (
    <motion.div
      className="relative cursor-pointer w-full max-w-7xl mx-auto px-4 md:px-1"
      onClick={onClick}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative flex items-center justify-center w-full">
        <Roller side="left" />

        {/* Scroll body */}
        <div
          className="relative flex-grow py-6 md:py-8 lg:py-10 min-h-[112px] md:min-h-[128px] lg:min-h-[144px] flex items-center justify-center rounded-md"
          style={{ background: GRADIENTS.scrollBody, boxShadow: SHADOWS.scroll }}
        >
          {/* Top & Bottom lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/40" />

          {/* Japanese characters */}
          <motion.div className="text-center select-none" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[0.3em] text-white/95"
              style={{ fontFamily: "'Noto Serif JP', serif", textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}
            >
              伊藤
            </h1>
            <p className="mt-2 text-sm md:text-base tracking-[0.6em] text-slate-300/70 font-light uppercase">ITO</p>
          </motion.div>
        </div>

        <Roller side="right" />
      </div>

      {/* Hint */}
      {!isOpen && (
        <motion.p
          className="text-center mt-6 text-slate-600 text-sm font-light tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          Clique no pergaminho
        </motion.p>
      )}
    </motion.div>
  );
};

export default FullWidthScroll;
