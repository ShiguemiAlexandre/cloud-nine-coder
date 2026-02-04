import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UkiyoeBackground from '@/components/UkiyoeBackground';
import FullWidthScroll from '@/components/FullWidthScroll';
import ParchmentContent from '@/components/ParchmentContent';
import PortfolioSections from '@/components/PortfolioSections';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <UkiyoeBackground />
      
      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header scroll - fixed positioning when closed, static when open */}
        <motion.div
          className="w-full flex justify-center"
          animate={{
            paddingTop: isOpen ? '2rem' : '30vh',
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <FullWidthScroll onClick={toggleScroll} isOpen={isOpen} />
        </motion.div>

        {/* Parchment content panel */}
        <ParchmentContent isOpen={isOpen}>
          <PortfolioSections />
        </ParchmentContent>

        {/* Footer when closed */}
        <motion.footer
          className="fixed bottom-6 left-0 right-0 text-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-slate-500 font-light tracking-wide">
            © 2025 Alexandre Shiguemi Ito
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
