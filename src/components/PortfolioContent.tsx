import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Database, Cloud, GitBranch, Workflow, Code2 } from 'lucide-react';

const techStack = [
  { name: 'Python', icon: Code2 },
  { name: 'FastAPI', icon: Terminal },
  { name: 'REST APIs', icon: Workflow },
  { name: 'Automation & ETL', icon: GitBranch },
  { name: 'Cloud & Databases', icon: Database },
  { name: 'Git & CI/CD', icon: Cloud },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/ShiguemiAlexandre' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/alexandreshiguemi/' },
  { name: 'Contact', icon: Mail, href: 'shiguemialexandre@gmail.com' },
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
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
};

const PortfolioContent = () => {
  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="font-display text-3xl md:text-4xl text-ink font-semibold tracking-wide">
          伊藤
        </h2>
        <p className="mt-2 text-lg md:text-xl text-ink-light font-light">
          Backend Developer <span className="text-gold">|</span> Python <span className="text-gold">|</span> APIs & Automation
        </p>
      </motion.div>

      {/* Decorative divider */}
      <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-parchment-edge" />
        <div className="w-2 h-2 rounded-full bg-gold/50" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-parchment-edge" />
      </motion.div>

      {/* About Me */}
      <motion.section variants={itemVariants}>
        <h3 className="text-sm uppercase tracking-[0.2em] text-ink-light mb-3 font-medium">
          About Me
        </h3>
        <p className="text-ink leading-relaxed text-base md:text-lg">
          I am a mid-level backend developer specialized in Python and API-driven systems. 
          I focus on building scalable, clean, and maintainable solutions, with strong experience 
          in automation, RESTful APIs, and cloud-based architectures. I value well-structured code, 
          clear system design, and solutions that solve real-world problems efficiently.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section variants={itemVariants}>
        <h3 className="text-sm uppercase tracking-[0.2em] text-ink-light mb-4 font-medium">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-badge flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <tech.icon className="w-4 h-4 text-ink-light" />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Social Links */}
      <motion.section variants={itemVariants}>
        <h3 className="text-sm uppercase tracking-[0.2em] text-ink-light mb-4 font-medium">
          Connect
        </h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary/50 hover:bg-accent transition-all duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 4px 12px -2px hsl(220, 20%, 80%, 0.3)',
              }}
            >
              <link.icon className="w-5 h-5 text-ink-light group-hover:text-ink transition-colors" />
              <span className="text-ink font-medium">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Footer note */}
      <motion.div 
        variants={itemVariants}
        className="pt-4 text-center"
      >
        <p className="text-sm text-ink-light/60 font-light italic">
          Building elegant solutions, one API at a time.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioContent;
