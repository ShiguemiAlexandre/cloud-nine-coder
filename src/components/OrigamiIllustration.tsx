import { motion } from "framer-motion";

export default function OrigamiIllustration() {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <svg viewBox="0 0 200 160" className="w-[220px]">
        <defs>
          <linearGradient id="paperMain" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60d6c9" />
            <stop offset="100%" stopColor="#2fb3a4" />
          </linearGradient>

          <linearGradient id="paperFold" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#24988c" />
            <stop offset="100%" stopColor="#4fd1c5" />
          </linearGradient>
        </defs>

        {/* Base */}
        <polygon
          points="30,100 100,40 170,100 100,130"
          fill="url(#paperMain)"
        />

        {/* Dobra esquerda */}
        <polygon
          points="30,100 100,40 100,100"
          fill="url(#paperFold)"
          opacity="0.6"
        />

        {/* Dobra direita */}
        <polygon
          points="170,100 100,40 100,100"
          fill="url(#paperFold)"
          opacity="0.35"
        />

        {/* Topo / dobra central */}
        <polygon
          points="80,80 120,80 100,130"
          fill="#1f8f86"
          opacity="0.5"
        />

        {/* Linha de dobra */}
        <line
          x1="100"
          y1="40"
          x2="100"
          y2="130"
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  );
}
