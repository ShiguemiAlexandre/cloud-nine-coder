import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { ScrollReveal } from './ParchmentContent';
import OrigamiIllustration from './OrigamiIllustration';

const technologies = [
  'Python', 'FastAPI', 'Streamlit', 'SQL', 'NoSQL', 'Firestore',
  'Docker', 'Git', 'Pytest', 'Google Cloud', 'Cloud Run', 
  'Compute Engine', 'Cloud Scheduler', 'APIs RESTful', 'Automação'
];

const projects = [
  {
    name: 'Sistema de Automação ETL',
    description: 'Pipeline automatizado para processamento e transformação de dados em larga escala com agendamento inteligente.',
    tech: ['Python', 'Cloud Run', 'BigQuery', 'Cloud Scheduler'],
  },
  {
    name: 'API Gateway Escalável',
    description: 'Gateway de APIs RESTful com rate limiting, cache distribuído e documentação automática.',
    tech: ['FastAPI', 'Redis', 'Docker', 'GCP'],
  },
  {
    name: 'Dashboard Analytics',
    description: 'Painel interativo de analytics em tempo real com visualizações customizadas.',
    tech: ['Streamlit', 'Python', 'Firestore', 'Plotly'],
  },
];

const experiences = [
  {
    period: '2023 - Presente',
    role: 'Desenvolvedor Backend Pleno',
    description: 'Arquitetura de microsserviços, automação de processos e otimização de performance em sistemas cloud-native.',
  },
  {
    period: '2021 - 2023',
    role: 'Desenvolvedor Backend Junior',
    description: 'Desenvolvimento de APIs RESTful, integração de sistemas e implementação de testes automatizados.',
  },
  {
    period: '2020 - 2021',
    role: 'Estágio em Desenvolvimento',
    description: 'Suporte ao desenvolvimento, automação de tarefas e manutenção de sistemas legados.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
};

const PortfolioSections = () => {
  return (
    <motion.div
      className="space-y-16 md:space-y-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section 1: Sobre Mim */}
      <ScrollReveal>
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-5">
            <motion.p 
              variants={itemVariants}
              className="text-sm tracking-[0.2em] text-slate-500 font-light uppercase"
            >
              Olá, me chamo
            </motion.p>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800 tracking-tight leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Alexandre Shiguemi Ito
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 font-light"
            >
              Desenvolvedor Backend
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="w-16 h-0.5 bg-gradient-to-r from-slate-400 to-transparent"
            />
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 leading-relaxed text-base md:text-lg font-light max-w-xl"
            >
              Sou um desenvolvedor backend focado em construir sistemas escaláveis e de fácil 
              manutenção, utilizando Python e arquiteturas orientadas a APIs. Trabalho com 
              automação, princípios de código limpo e soluções em cloud, sempre priorizando 
              performance, clareza e impacto real.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5 text-slate-600 group-hover:text-slate-800" />
                <span className="text-sm text-slate-600 group-hover:text-slate-800">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-slate-800" />
                <span className="text-sm text-slate-600 group-hover:text-slate-800">LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
          
          {/* Origami illustration */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <OrigamiIllustration />
          </div>
        </section>
      </ScrollReveal>

      {/* Section 2: Tecnologias */}
      <ScrollReveal delay={0.1}>
        <section className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
            Tecnologias
          </h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white/80 text-slate-700 border border-slate-200 shadow-sm hover:shadow-md hover:bg-white hover:border-slate-300 transition-all duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.03, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Section 3: Projetos */}
      <ScrollReveal delay={0.2}>
        <section className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
            Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="p-6 rounded-xl bg-white/70 border border-slate-200 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{project.name}</h4>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2 py-1 text-xs rounded bg-slate-100 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Section 4: Experiência */}
      <ScrollReveal delay={0.3}>
        <section className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
            Experiência
          </h3>
          <div className="relative pl-6 border-l-2 border-slate-200 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white border-2 border-slate-400" />
                
                <span className="text-sm text-slate-500 font-light">{exp.period}</span>
                <h4 className="text-lg font-semibold text-slate-800 mt-1">{exp.role}</h4>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed max-w-xl">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Section 5: Contato */}
      <ScrollReveal delay={0.4}>
        <section className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
            Contato
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <motion.a
              href="mailto:contato@alexandreito.dev"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/70 border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <Mail className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">contato@alexandreito.dev</span>
            </motion.a>
            
            <motion.div
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/70 border border-slate-200"
              whileHover={{ y: -2 }}
            >
              <MapPin className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">São Paulo, Brasil</span>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal delay={0.5}>
        <footer className="pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500 font-light">
            © 2025 Alexandre Shiguemi Ito. Todos os direitos reservados.
          </p>
        </footer>
      </ScrollReveal>
    </motion.div>
  );
};

export default PortfolioSections;
