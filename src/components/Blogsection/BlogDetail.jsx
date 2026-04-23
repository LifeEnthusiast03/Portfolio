import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Clock, Calendar, Eye, Heart, Tag, ChevronLeft } from 'lucide-react';

const CATEGORY_COLORS = {
  "Gen AI":   "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Frontend:   "bg-blue-500/20   text-blue-300   border-blue-500/30",
  Backend:    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

/* ── Simple markdown-like renderer ── */
const renderContent = (content) => {
  if (!content) return null;
  return content.split('\n').map((line, i) => {
    if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{line.slice(3)}</h2>;
    if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-semibold text-blue-300 mt-8 mb-3">{line.slice(4)}</h3>;
    if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold text-white my-2">{line.slice(2, -2)}</p>;
    if (line.startsWith('- ')) return <li key={i} className="text-gray-300 ml-4 my-1 list-disc">{line.slice(2)}</li>;
    if (line.startsWith('```')) return <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 my-4 font-mono text-sm text-green-400 overflow-x-auto" />;
    if (line.trim() === '') return <div key={i} className="h-2" />;
    return <p key={i} className="text-gray-300 leading-relaxed my-2">{line}</p>;
  });
};

const BlogDetail = ({ blog, onClose }) => {
  const Icon = blog.icon;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col bg-[#030712]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.08),transparent)]" />
        </div>

        {/* ── Top bar ── */}
        <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-800/60 bg-black/40 backdrop-blur-xl shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors group"
          >
            <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </button>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock size={12} />{blog.readTime}</span>
            <span className="flex items-center gap-1"><Eye size={12} />{blog.views.toLocaleString()}</span>
            <span className="flex items-center gap-1"><Heart size={12} />{blog.likes}</span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* ── Scrollable content ── */}
        <div className="relative z-10 flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

            {/* Hero block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-10"
            >
              {/* Icon + category */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${blog.color} border ${blog.border} flex items-center justify-center`}>
                  <Icon size={26} className={blog.iconColor} />
                </div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${CATEGORY_COLORS[blog.category] || "bg-gray-800/50 text-gray-400 border-gray-700"}`}>
                  {blog.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5">
                {blog.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5"><Calendar size={13} />{blog.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={13} />{blog.readTime}</span>
                <span className="flex items-center gap-1.5"><Eye size={13} />{blog.views.toLocaleString()} views</span>
                <span className="flex items-center gap-1.5"><Heart size={13} />{blog.likes} likes</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map(t => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-800/60 border border-gray-700/50 px-3 py-1 rounded-full">
                    <Tag size={10} />{t}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className={`h-px w-full bg-gradient-to-r ${blog.color.replace('/20','')}`} />
            </motion.div>

            {/* Article body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="prose-custom"
            >
              {renderContent(blog.fullContent)}
            </motion.div>

            {/* Bottom close */}
            <div className="mt-16 pt-8 border-t border-gray-800/60 text-center">
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_24px_rgba(37,99,235,0.4)]"
              >
                <ChevronLeft size={16} />
                Back to all articles
              </button>
            </div>
          </div>
        </div>
    </motion.div>
  );
};

export default BlogDetail;
