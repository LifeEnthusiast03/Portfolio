import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, LucideIcon } from 'lucide-react';
import Particles from '../Particles';

interface AccentStyle {
  border: string;
  glow: string;
  badge: string;
  dot: string;
}

type AccentKey = 'blue' | 'violet' | 'emerald' | 'cyan';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string | string[];
  status: string;
  github: string;
  live: string;
  image: string;
  emoji: string;
  accent: AccentKey;
}

const projects: Project[] = [
  { id: 1, title: 'Real-Time Chat App', description: 'Full-stack chat platform with real-time messaging, multiple rooms, file sharing, and JWT authentication.', technologies: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'Express'], category: 'Full Stack', status: 'In Progress', github: 'https://github.com/LifeEnthusiast03/My_chat_app', live: 'https://github.com/LifeEnthusiast03/My_chat_app', image: '/chat.png', emoji: '🗨️', accent: 'blue' },
  { id: 2, title: 'Readwise', description: 'AI-powered knowledge base with RAG pipeline, Pinecone vector search, and OpenAI for intelligent retrieval.', technologies: ['React', 'Node.js', 'MongoDB', 'Pinecone', 'OpenAI API'], category: ['Full Stack', 'Gen AI'], status: 'In Progress', github: 'https://github.com/LifeEnthusiast03/rag_backend', live: 'https://readwise-virid.vercel.app/login', image: '/readwise.png', emoji: '📚', accent: 'violet' },
  { id: 3, title: 'Spendwise', description: 'Expense tracker with budget goals, analytics dashboards, dark mode, and an Express + PostgreSQL backend.', technologies: ['React', 'Express', 'PostgreSQL', 'Prisma', 'Chart.js'], category: 'Full Stack', status: 'Completed', github: 'https://github.com/LifeEnthusiast03/Spendwisee', live: 'https://spendwisee-beige.vercel.app/', image: '/spendwise.png', emoji: '💸', accent: 'emerald' },
  { id: 4, title: 'SkyFlect', description: 'Weather app with real-time data, dynamic weather-based backgrounds, and a glassmorphism UI.', technologies: ['React', 'Tailwind CSS', 'OpenWeather API', 'JavaScript'], category: 'Frontend', status: 'Completed', github: 'https://github.com/LifeEnthusiast03/weather_app', live: 'https://skyflect.vercel.app/', image: '/skyfleat.png', emoji: '🌤️', accent: 'cyan' },
];

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Gen AI'];

const ACCENT: Record<AccentKey, AccentStyle> = {
  blue:    { border: 'hover:border-blue-500/40',    glow: 'hover:shadow-[0_0_32px_rgba(59,130,246,0.18)]',   badge: 'bg-blue-500/15 text-blue-300 border-blue-500/25',       dot: 'bg-blue-400' },
  violet:  { border: 'hover:border-violet-500/40',  glow: 'hover:shadow-[0_0_32px_rgba(139,92,246,0.18)]',  badge: 'bg-violet-500/15 text-violet-300 border-violet-500/25', dot: 'bg-violet-400' },
  emerald: { border: 'hover:border-emerald-500/40', glow: 'hover:shadow-[0_0_32px_rgba(52,211,153,0.18)]',  badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25', dot: 'bg-emerald-400' },
  cyan:    { border: 'hover:border-cyan-500/40',    glow: 'hover:shadow-[0_0_32px_rgba(34,211,238,0.18)]',  badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',       dot: 'bg-cyan-400' },
};

const CAT_COLORS: Record<string, string> = {
  'Full Stack': 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  Frontend:     'bg-green-500/15 text-green-300 border-green-500/25',
  'Gen AI':     'bg-purple-500/15 text-purple-300 border-purple-500/25',
};

const STATUS_COLORS: Record<string, string> = {
  Completed:   'text-emerald-400',
  'In Progress': 'text-amber-400',
};

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filtered = selectedCategory === 'All'
    ? projects
    : projects.filter(p => {
        const cats = Array.isArray(p.category) ? p.category : [p.category];
        return cats.includes(selectedCategory);
      });

  return (
    <section className="min-h-screen py-28 px-4 bg-transparent relative">
      <Particles />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest mb-5 shadow-[0_0_30px_rgba(37,99,235,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Featured Projects
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
            Things I've Built
          </h1>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            A collection of projects spanning full-stack development, real-time systems, and GenAI.
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-2 mb-10" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-all duration-250 ${
                selectedCategory === cat
                  ? 'bg-blue-600 border-transparent text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]'
                  : 'bg-black/40 border-gray-800 text-gray-400 hover:border-blue-500/30 hover:text-white backdrop-blur-xl'
              }`}>{cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={selectedCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            {filtered.map((project, i) => {
              const a = ACCENT[project.accent];
              const cats = Array.isArray(project.category) ? project.category : [project.category];
              return (
                <motion.div key={project.id}
                  className={`group relative bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800/70 overflow-hidden transition-all duration-300 ${a.border} ${a.glow}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }}>
                  <div className="relative h-32 overflow-hidden bg-gray-900">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex'; }} />
                    <div className="absolute inset-0 hidden items-center justify-center text-4xl bg-gradient-to-br from-gray-900 to-gray-800">{project.emoji}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-2.5 right-2.5 flex flex-col gap-1 items-end">
                      {cats.map(cat => (
                        <span key={cat} className={`text-[9px] font-semibold px-2 py-0.5 rounded-md border backdrop-blur-sm ${CAT_COLORS[cat] || 'bg-gray-800/70 text-gray-400 border-gray-700/40'}`}>{cat}</span>
                      ))}
                    </div>
                    <span className={`absolute bottom-2 left-3 text-[10px] font-medium ${STATUS_COLORS[project.status] || 'text-gray-500'}`}>● {project.status}</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-lg leading-none">{project.emoji}</span>
                        <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">{project.title}</h3>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg border border-gray-700/60 text-gray-500 hover:text-white hover:border-gray-500 transition-all" title="View Code"><Github size={13} /></a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg border border-gray-700/60 text-gray-500 hover:text-blue-400 hover:border-blue-500/40 transition-all" title="Live Demo"><ArrowUpRight size={13} /></a>
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-3.5 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-[10px] text-gray-500 bg-gray-800/50 border border-gray-700/40 px-2 py-0.5 rounded-md">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}>
          <a href="https://github.com/LifeEnthusiast03" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:shadow-[0_0_36px_rgba(59,130,246,0.45)]">
            <Github size={15} />View all on GitHub<ExternalLink size={12} className="opacity-70" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
