import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
];

const techStack = ['Python', 'FastAPI', 'REST APIs', 'Automation', 'Cloud', 'CI/CD'];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
};

const ModernContent = () => {
  return (
    <motion.div
      className="space-y-8 md:space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Greeting */}
      <motion.p 
        variants={itemVariants}
        className="text-sm tracking-widest text-slate-400 font-light uppercase"
      >
        Welcome
      </motion.p>

      {/* Name & Title */}
      <motion.div variants={itemVariants} className="space-y-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 tracking-wide">
          Alexandre Shiguemi Ito
        </h2>
        <p className="text-base md:text-lg text-slate-500 font-light">
          Backend Developer <span className="text-slate-300 mx-2">|</span> Python & APIs
        </p>
      </motion.div>

      {/* Decorative line */}
      <motion.div variants={itemVariants} className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
        <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent" />
      </motion.div>

      {/* About */}
      <motion.section variants={itemVariants}>
        <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4 font-medium">
          About
        </h3>
        <p className="text-slate-600 leading-relaxed text-base md:text-lg font-light max-w-2xl">
          I am a backend developer focused on building scalable and maintainable systems 
          using Python and API-driven architectures. I work with automation, clean code 
          principles, and cloud-based solutions, always prioritizing performance, clarity, 
          and real-world impact.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section variants={itemVariants}>
        <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4 font-medium">
          Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-4 py-2 text-sm font-light text-slate-600 rounded-lg border border-slate-200/80 bg-white/50 hover:bg-white hover:border-slate-300 transition-all duration-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.03, y: -1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.section variants={itemVariants}>
        <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4 font-medium">
          Connect
        </h3>
        <div className="flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-xl border border-slate-200/80 bg-white/50 hover:bg-white hover:border-slate-300 transition-all duration-200"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors" />
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Abstract geometric decoration */}
      <motion.div 
        variants={itemVariants}
        className="pt-6 flex justify-center"
      >
        <svg width="60" height="40" viewBox="0 0 60 40" className="opacity-20">
          <path 
            d="M5,35 L30,5 L55,35" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1" 
            className="text-slate-400"
          />
          <path 
            d="M15,35 L30,12 L45,35" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            className="text-slate-400"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ModernContent;
