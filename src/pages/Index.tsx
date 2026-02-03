import { useState } from 'react';
import { motion } from 'framer-motion';
import GeometricBackground from '@/components/GeometricBackground';
import ModernScroll from '@/components/ModernScroll';
import ContentPanel from '@/components/ContentPanel';
import ModernContent from '@/components/ModernContent';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleScroll = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <GeometricBackground />
      
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-start px-4 py-12 md:py-20">
        {/* Header scroll */}
        <motion.div
          className="w-full flex justify-center"
          animate={{
            y: isOpen ? 0 : '25vh',
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <ModernScroll onClick={toggleScroll} isOpen={isOpen} />
        </motion.div>

        {/* Content panel */}
        <ContentPanel isOpen={isOpen}>
          <ModernContent />
        </ContentPanel>

        {/* Footer */}
        <motion.footer
          className="fixed bottom-6 left-0 right-0 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-slate-400 font-light tracking-wider">
            © 2024 Alexandre Shiguemi Ito
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
