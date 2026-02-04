import { motion, Variants } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import OrigamiIllustration from './OrigamiIllustration';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  },
};

const ModernContent = () => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left column - Text content */}
      <div className="lg:col-span-3 space-y-6">
        {/* Greeting */}
        <motion.p 
          variants={itemVariants}
          className="text-sm tracking-[0.2em] text-slate-500 font-light uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 tracking-tight leading-tight">
            Alexandre Shiguemi Ito
          </h2>
        </motion.div>

        {/* Role */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 font-light"
        >
          Backend Developer
        </motion.p>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="w-16 h-0.5 bg-gradient-to-r from-slate-300 to-transparent"
        />

        {/* About */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-600 leading-relaxed text-base md:text-lg font-light max-w-xl"
        >
          I am a backend developer focused on building scalable and maintainable systems 
          using Python and API-driven architectures. I work with automation, clean code 
          principles, and cloud-based solutions, always prioritizing performance, clarity, 
          and real-world impact.
        </motion.p>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-4 pt-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full border border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Right column - Origami illustration */}
      <div className="lg:col-span-2 flex items-center justify-center">
        <OrigamiIllustration />
      </div>
    </motion.div>
  );
};

export default ModernContent;
