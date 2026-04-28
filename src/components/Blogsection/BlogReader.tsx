import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Clock, Calendar, Eye, Heart, Tag, ChevronRight
} from 'lucide-react';
import type { BlogPost } from './blogData';

export interface BlogSection {
  type: 'h2' | 'h3' | 'p' | 'code' | 'ul' | 'ol' | 'callout';
  text?: string;
  items?: string[];
  lang?: string;
  variant?: 'info' | 'warning' | 'tip';
}

const CATEGORY_COLORS: Record<string, string> = {
  'Gen AI':  'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Frontend:  'bg-blue-500/20   text-blue-300   border-blue-500/30',
  Backend:   'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
};

const CALLOUT_STYLES = {
  info:    { bg: 'bg-blue-500/10 border-blue-500/30',    text: 'text-blue-300',    label: '💡 Note' },
  warning: { bg: 'bg-yellow-500/10 border-yellow-500/30', text: 'text-yellow-300', label: '⚠️ Warning' },
  tip:     { bg: 'bg-emerald-500/10 border-emerald-500/30', text: 'text-emerald-300', label: '✅ Tip' },
};

function renderSection(sec: BlogSection, idx: number) {
  switch (sec.type) {
    case 'h2':
      return <h2 key={idx} className="text-2xl font-bold text-white mt-10 mb-4">{sec.text}</h2>;
    case 'h3':
      return <h3 key={idx} className="text-lg font-semibold text-gray-100 mt-7 mb-3">{sec.text}</h3>;
    case 'p':
      return <p key={idx} className="text-gray-400 leading-relaxed mb-4">{sec.text}</p>;
    case 'ul':
      return (
        <ul key={idx} className="space-y-2 mb-5 ml-2">
          {sec.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-400">
              <ChevronRight size={14} className="mt-1 shrink-0 text-blue-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={idx} className="space-y-2 mb-5 ml-2 list-decimal list-inside">
          {sec.items?.map((item, i) => (
            <li key={i} className="text-gray-400 marker:text-blue-400">{item}</li>
          ))}
        </ol>
      );
    case 'code':
      return (
        <div key={idx} className="relative mb-5">
          {sec.lang && (
            <span className="absolute top-3 right-3 text-xs text-gray-600 font-mono">{sec.lang}</span>
          )}
          <pre className="bg-gray-950/80 border border-gray-800/60 rounded-xl p-5 overflow-x-auto text-sm text-gray-300 font-mono leading-relaxed">
            <code>{sec.text}</code>
          </pre>
        </div>
      );
    case 'callout': {
      const v = sec.variant ?? 'info';
      const s = CALLOUT_STYLES[v];
      return (
        <div key={idx} className={`border rounded-xl p-4 mb-5 ${s.bg}`}>
          <p className={`text-sm font-semibold mb-1 ${s.text}`}>{s.label}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{sec.text}</p>
        </div>
      );
    }
    default:
      return null;
  }
}

interface BlogReaderProps {
  post: BlogPost | null;
  onClose: () => void;
}

const BlogReader = ({ post, onClose }: BlogReaderProps) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [post]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {post && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-3xl mx-4 my-6 max-h-[92vh] flex flex-col rounded-2xl bg-[#080c14] border border-gray-800/60 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top accent bar */}
            <div className={`h-1 w-full bg-gradient-to-r ${post.color.replace('/20', '')}`} />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-8 pt-7 pb-5 border-b border-gray-800/60 shrink-0">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${CATEGORY_COLORS[post.category] || 'bg-gray-800/50 text-gray-400 border-gray-700'}`}>
                    {post.category}
                  </span>
                  {post.tags.map(t => (
                    <span key={t} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-800/40 border border-gray-700/40 px-2 py-0.5 rounded-md">
                      <Tag size={9} />{t}
                    </span>
                  ))}
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  <span className="flex items-center gap-1"><Eye size={11} />{post.views.toLocaleString()} views</span>
                  <span className="flex items-center gap-1"><Heart size={11} />{post.likes} likes</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 mt-1 w-9 h-9 rounded-full flex items-center justify-center border border-gray-700/60 text-gray-500 hover:text-white hover:border-gray-500 transition-all"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 px-8 py-7" style={{ scrollbarWidth: 'thin', scrollbarColor: '#1f2937 transparent' }}>
              <p className="text-gray-300 text-base leading-relaxed mb-8 border-l-2 border-blue-500/40 pl-4 italic">
                {post.excerpt}
              </p>
              <div>
                {post.content.map((sec, i) => renderSection(sec, i))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogReader;
