import { useState } from 'react';
import { motion } from 'framer-motion';
import CloudBackground from '@/components/CloudBackground';
import ScrollBrand from '@/components/ScrollBrand';
import ParchmentScroll from '@/components/ParchmentScroll';
import PortfolioContent from '@/components/PortfolioContent';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <CloudBackground />
      
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-12 md:py-16">
        {/* Header brand scroll */}
        <motion.div
          className="w-full flex justify-center"
          animate={{
            y: isOpen ? 0 : '30vh',
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <ScrollBrand onClick={toggleScroll} isOpen={isOpen} />
        </motion.div>

        {/* Main parchment content */}
        <div className="w-full px-4 md:px-8">
          <ParchmentScroll isOpen={isOpen}>
            <PortfolioContent />
          </ParchmentScroll>
        </div>

        {/* Footer - visible when closed */}
        <motion.footer
          className="fixed bottom-4 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-ink-light font-light">
            © 2024 ITO
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
