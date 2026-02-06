import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { ScrollReveal } from './ParchmentContent';
import OrigamiIllustration from './OrigamiIllustration';

const technologies = [
  // 🔥 Core (principal stack)
  '🐍 Python',
  '⚡ FastAPI',
  '🔗 Flask',
  '🎨 Streamlit',

  // 📊 Dados & Processamento
  '📈 Pandas',
  '🗃️ SQL',
  '📦 NoSQL',
  '🕸️ Web Scraping',
  
  // ☁️ Cloud & Infraestrutura
  '🔥 Firestore',
  '☁️ Google Cloud',
  '🚀 Cloud Run',
  '🖥️ Compute Engine',
  '⏰ Cloud Scheduler',
  '📨 Cloud Tasks',
  '🐳 Docker',

  // 🧪 Qualidade & Boas Práticas
  '🔧 Git',
  '🧫 Pytest',
  '📐 Clean Code',
  '🧱 SOLID',

  // ✉️ Integrações & Automação
  '📧 Automação de E-mails',
  '🗂️ Jira (Gestão de Tarefas)',
  '🔄 Automação de Processos',
  '🧩 Integração de Sistemas',
  '⏱️ Jobs Agendados',

  // 📌 Metodologias
  '🧭 Metodologias Ágeis',
  '🔁 Scrum',
  '📊 Kanban',

  // 🧠 Aprendizado & Estilo
  '🧠 Machine Learning (em formação)',
  '✨ Vibe Coding',
  '💜 Lovable'
];

const projects = [
  {
    name: 'Summary Publication – Automação de Publicações Jurídicas',
    description: 'Sistema de automação para coleta (Astrea), sumarização inteligente e envio automático de publicações jurídicas. A pipeline executa coletas 3x ao dia, processa os dados com IA e realiza o envio estruturado por e-mail, totalmente integrado ao ecossistema Google Cloud.',
    tech: [
      'Python 3.13',
      'FastAPI',
      'Google Cloud Run',
      'Cloud Scheduler',
      'Cloud Tasks',
      'Firestore',
      'Docker',
      'Gemini API',
      'OpenAI',
      'Pandas',
      'Astrea'
    ],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7358265930025439232/'
  },
  {
    name: 'Sistema Jurídico',
    description: 'Sistema personalizado desenvolvido para um escritório de advocacia, focado em gestão de processos judiciais, automação de tarefas e organização de dados jurídicos. A solução inclui aplicações web interativas com Streamlit, APIs REST desenvolvidas em FastAPI hospedadas em máquinas virtuais, integração com bancos de dados NoSql/Firestore, além do uso de Firebase para autenticação, armazenamento e gerenciamento de dados. O sistema também realiza extração automática de informações dos tribunais via web scraping.',
    tech: [
      'Python',
      'FastAPI',
      'Streamlit',
      'Firebase',
      'Google Compute Engine (VM)',
      'Web Scraping',
    ],
  },
];

const formations = [
  { period: '2026 – Atual', course: 'Pós Machine Learning Engineer', institution: 'FIAP' , link: 'https://postech.fiap.com.br/curso/machine-learning-engineering/'},
  { period: '2022 – 2024', course: 'Análise e Desenvolvimento de Sistemas', institution: 'UNIP' , link: 'https://www.unip.br/cursos/graduacao/tecnologicos/analise_desenvolvimento_sistemas.aspx'},
];


const experiences = [
  {
    period: 'Jan 2025 – Presente',
    role: 'Desenvolvedor Back-End Júnior',
    company: 'Juristec',
    description:
      'Atuação no desenvolvimento e manutenção de aplicações em Python, com foco em automação de tarefas, integração de sistemas via APIs e melhoria contínua de processos internos. Implementação de rotinas para automação de envio de e-mails e suporte à manutenção de sistemas de captura e tratamento de dados jurídicos. Manipulação e modelagem de dados em PostgreSQL. Extração e tratamento de informações da web utilizando Requests, BeautifulSoup, Playwright e Selenium.',
  },
  {
    period: 'Out 2024 – Abr 2025',
    role: 'Desenvolvedor de Software',
    company: 'Autônomo',
    description:
    'Desenvolvimento de APIs RESTful com FastAPI para sistema de PDV integrado a ERP de manutenção de motocicletas. Automação de estoque, financeiro e ordens de serviço com autenticação via Firebase. Deploy em VMs do Google Compute Engine, utilizando Docker e Nginx como reverse proxy, com atenção à disponibilidade e performance.',
  },
  {
    period: 'Jan 2024 – Ago 2025',
    role: 'Desenvolvedor de Software',
    company: 'Autônomo',
    description:
      'Criação de sistemas jurídicos personalizados em Python com interfaces web interativas em Streamlit. Automação da coleta e análise de publicações processuais via XPath e web scraping. Uso do Firebase para autenticação, armazenamento e gerenciamento de dados em tempo real, garantindo organização e eficiência no fluxo de trabalho.',
  },
  {
    period: 'Ago 2023 – Ago 2024',
    role: 'Desenvolvedor Backend | UI',
    company: 'Freelance',
    description:
      'Desenvolvimento de crawlers personalizados e interfaces web com Streamlit. Criação de sistemas ERP sob medida, integração com Firebase e serviços em Google Cloud. Aplicação de conceitos de UI/UX e design de telas no Figma para melhorar a experiência do usuário.',
  },
  {
    period: 'Mar 2023 – Jun 2024',
    role: 'Desenvolvedor Python (Estágio)',
    company: 'Juristec Plus',
    description:
      'Desenvolvimento e manutenção de aplicações Python para automação de tarefas jurídicas e captura de dados de tribunais. Implementação de web scraping com BeautifulSoup, Requests e Selenium, automação de envio de e-mails e pipelines de dados. Uso de Firebase para autenticação e armazenamento, testes unitários e versionamento com Git, garantindo sistemas eficientes, seguros e confiáveis.',
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
              Desenvolvedor backend especializado em Python, FastAPI e APIs REST, com experiência 
              em automação, integração de sistemas, bancos de dados SQL e NoSQL e deploy em cloud.
               Atuo no desenvolvimento de soluções backend voltadas a aplicações reais.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4"
            >
              {/* GitHub */}
              <motion.a
                href="https://github.com/ShiguemiAlexandre"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 w-full"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5 text-slate-600 group-hover:text-slate-800" />
                <span className="text-sm font-normal text-slate-600 group-hover:text-slate-800">GitHub</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/alexandreshiguemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 w-full"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-slate-800" />
                <span className="text-sm font-normal text-slate-600 group-hover:text-slate-800">LinkedIn</span>
              </motion.a>

              {/* Cover Letter */}
              <motion.a
                href="/pdf/CoverLetter.pdf"
                download
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 w-full"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-5 h-5 flex items-center justify-center text-slate-600 group-hover:text-slate-800">📝</span>
                <span className="text-sm font-normal text-slate-600 group-hover:text-slate-800">Cover Letter</span>
              </motion.a>

              {/* Currículo */}
              <motion.a
                href="/pdf/AlexandreShiguemiIto.pdf"
                download
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 w-full"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-5 h-5 flex items-center justify-center text-slate-600 group-hover:text-slate-800">📄</span>
                <span className="text-sm font-normal text-slate-600 group-hover:text-slate-800">Currículo</span>
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
      <ScrollReveal delay={0.3}>
        <section className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
            Tecnologias
          </h3>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white/80 text-slate-700 border border-slate-200 shadow-sm transition-all duration-300 cursor-pointer select-none"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2 + index * 0.12, type: 'spring', stiffness: 120, damping: 12 }}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                  rotate: 2,
                  backgroundColor: 'rgba(255,255,255,1)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3, type: 'spring', stiffness: 150 },
                }}
                whileTap={{ scale: 0.95, rotate: -1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Section 3: Projetos */}
      <ScrollReveal delay={0.3}>
        <section className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
            Principais projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.link}
                className="p-6 rounded-xl bg-white/70 border border-slate-200 shadow-sm hover:shadow-lg hover:bg-white transition-all duration-200"
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
              </motion.a>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Section: Formação */}
      <ScrollReveal delay={0.5}>
      <motion.div className="space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
          Formação
        </h3>

        <div className="flex flex-col md:flex-row md:gap-6 gap-4">
          {formations.map((form, index) => (
            <motion.a
              key={form.course}
              className="flex-1 bg-white/80 border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              href={form.link}
              target="_blank"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 120 }}
              whileHover={{ y: -4, scale: 1.02, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.98 }}
            >
              <p className="text-sm text-slate-500 font-light">{form.period}</p>
              <h4 className="text-lg font-medium text-slate-800">{form.course}</h4>
              <p className="text-sm text-slate-600 mt-1">{form.institution}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </ScrollReveal>

      {/* Section: Experiência */}
      <ScrollReveal delay={0.3}>
        <section className="space-y-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight">
            Experiência Profissional
          </h3>

          <div className="relative pl-6 border-l border-[##D8C3A5] space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                className="relative"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {/* Card */}
                <div
                  className="
                    p-6 rounded-2xl
                    bg-white/80 backdrop-blur
                    border border-slate-200/70
                    shadow-sm
                    hover:shadow-lg
                    hover:bg-white
                    transition-all duration-300
                  "
                >
                  <span className="inline-block mb-2 text-xs font-medium tracking-wide text-slate-500">
                    {exp.period}
                  </span>

                  <h4 className="text-lg md:text-xl font-semibold text-slate-800">
                    {exp.role}
                  </h4>

                  {exp.company && (
                    <p className="text-sm text-slate-500 mt-1">
                      {exp.company}
                    </p>
                  )}

                  <p className="text-sm md:text-base text-slate-600 mt-4 leading-relaxed max-w-3xl">
                    {exp.description}
                  </p>
                </div>
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
              href="mailto:shiguemialexandre@gmail.com"
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/70 border border-slate-200 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <Mail className="w-5 h-5 text-slate-600" />
              <span className="text-slate-700">Email</span>
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
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        {/* Nome com efeito sutil */}
        <motion.p
          className="font-signature text-4xl text-slate-800/70 m-0"
          whileHover={{ scale: 1.5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Alexandre Shiguemi Ito
        </motion.p>

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500 font-light">
            © 2026 Alexandre Shiguemi Ito.
          </p>

        </footer>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioSections;
