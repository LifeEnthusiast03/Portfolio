import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Clock, Tag, ArrowUpRight, Search,
  Calendar, Eye, Heart, Rss, ChevronRight, Code2,
  Brain, Globe, Cpu, Layers, Zap
} from 'lucide-react';
import Particles from '../Particles';

/* ─── Blog data ─────────────────────────────────────── */
const BLOGS = [
  {
    id: 1,
    title: "Building a RAG Pipeline with LangChain and Pinecone",
    excerpt: "A deep-dive into retrieval-augmented generation — how to combine vector search with large language models to build intelligent, context-aware applications.",
    tags: ["Gen AI", "LangChain", "Pinecone"],
    category: "Gen AI",
    date: "Apr 2025",
    readTime: "8 min read",
    views: 1240,
    likes: 89,
    icon: Brain,
    color: "from-purple-600/20 to-pink-600/20",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
    glow: "rgba(168,85,247,0.15)",
    status: "published",
  },
  {
    id: 2,
    title: "WebSockets vs Server-Sent Events: When to Use Which",
    excerpt: "A practical comparison of real-time communication protocols — exploring use cases, trade-offs, and implementation patterns for modern web applications.",
    tags: ["Node.js", "WebSockets", "Backend"],
    category: "Backend",
    date: "Mar 2025",
    readTime: "6 min read",
    views: 870,
    likes: 62,
    icon: Globe,
    color: "from-blue-600/20 to-cyan-600/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    glow: "rgba(59,130,246,0.15)",
    status: "published",
  },
  {
    id: 3,
    title: "Mastering React Performance: Memoization Deep Dive",
    excerpt: "Understanding useMemo, useCallback, and React.memo — when they help, when they hurt, and how to profile your app to make data-driven decisions.",
    tags: ["React", "Performance", "Frontend"],
    category: "Frontend",
    date: "Feb 2025",
    readTime: "7 min read",
    views: 1530,
    likes: 114,
    icon: Zap,
    color: "from-yellow-600/20 to-orange-600/20",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
    glow: "rgba(234,179,8,0.15)",
    status: "published",
  },
  {
    id: 4,
    title: "Designing a Scalable REST API with Express & PostgreSQL",
    excerpt: "From schema design to middleware patterns — a step-by-step walkthrough for building production-ready REST APIs with proper authentication and error handling.",
    tags: ["Node.js", "PostgreSQL", "API"],
    category: "Backend",
    date: "Jan 2025",
    readTime: "10 min read",
    views: 960,
    likes: 77,
    icon: Code2,
    color: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    glow: "rgba(52,211,153,0.15)",
    status: "published",
  },
  {
    id: 5,
    title: "Vector Databases Explained: Faiss vs Pinecone vs ChromaDB",
    excerpt: "A practical guide to understanding vector databases — comparing the top options for embedding storage and similarity search in production AI systems.",
    tags: ["Gen AI", "Vector DB", "Machine Learning"],
    category: "Gen AI",
    date: "Dec 2024",
    readTime: "9 min read",
    views: 2100,
    likes: 158,
    icon: Cpu,
    color: "from-violet-600/20 to-indigo-600/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    glow: "rgba(139,92,246,0.15)",
    status: "published",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox: A Complete Visual Guide",
    excerpt: "Stop guessing which layout model to use. A visual, example-driven comparison of CSS Grid and Flexbox with real-world layout patterns.",
    tags: ["CSS", "Frontend", "Design"],
    category: "Frontend",
    date: "Nov 2024",
    readTime: "5 min read",
    views: 3400,
    likes: 231,
    icon: Layers,
    color: "from-pink-600/20 to-rose-600/20",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
    glow: "rgba(236,72,153,0.15)",
    status: "published",
  },
];

const CATEGORIES = ["All", "Gen AI", "Frontend", "Backend"];

const CATEGORY_COLORS = {
  "Gen AI":   "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Frontend:   "bg-blue-500/20   text-blue-300   border-blue-500/30",
  Backend:    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

/* ─── Component ─────────────────────────────────────── */
const BlogSection = () => {
  const [selected, setSelected] = useState("All");
  const [search, setSearch]     = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = BLOGS.filter(b => {
    const matchCat = selected === "All" || b.category === selected;
    const matchQ   = b.title.toLowerCase().includes(search.toLowerCase()) ||
                     b.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchQ;
  });

  const featured = BLOGS[0];

  return (
    <section className="min-h-screen py-28 px-4 sm:px-6 lg:px-8 bg-transparent relative">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-widest mb-6 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
            <Rss size={12} />
            <span>Latest Articles</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              My Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Thoughts on full-stack development, AI engineering, and the tools I use to build things.
          </p>
        </motion.div>

        {/* ── Featured Post ── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <div className="group relative rounded-2xl overflow-hidden border border-gray-800/70 hover:border-purple-500/30 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.12)]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />
            <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
              {/* Icon */}
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Brain size={28} className="text-purple-400" />
              </div>
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                    ⭐ Featured
                  </span>
                  {featured.tags.map(t => (
                    <span key={t} className="text-xs text-gray-500 bg-gray-800/50 border border-gray-700/50 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5"><Calendar size={13} />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={13} />{featured.readTime}</span>
                  <span className="flex items-center gap-1.5"><Eye size={13} />{featured.views.toLocaleString()} views</span>
                  <span className="flex items-center gap-1.5"><Heart size={13} />{featured.likes} likes</span>
                </div>
              </div>
              {/* Arrow */}
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 group-hover:border-purple-400/50 group-hover:text-purple-400 transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Search + Filter ── */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-gray-200 placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all backdrop-blur-xl"
            />
          </div>
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300 ${
                  selected === cat
                    ? "bg-blue-600 border-transparent text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    : "bg-black/40 border-gray-800 text-gray-400 hover:border-blue-500/30 hover:text-white backdrop-blur-xl"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Blog Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected + search}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-20 text-gray-500">
                <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
                <p>No articles found matching your search.</p>
              </div>
            ) : (
              filtered.map((blog, i) => {
                const Icon = blog.icon;
                return (
                  <motion.article
                    key={blog.id}
                    className="group relative flex flex-col bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800/70 overflow-hidden cursor-pointer transition-all duration-500 hover:border-gray-600/50 hover:-translate-y-1"
                    style={{ boxShadow: hoveredId === blog.id ? `0 20px 60px ${blog.glow}` : undefined }}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.45 }}
                    onMouseEnter={() => setHoveredId(blog.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Top color strip */}
                    <div className={`h-1 w-full bg-gradient-to-r ${blog.color.replace('/20', '')}`} />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Icon + category */}
                      <div className="flex items-start justify-between mb-5">
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${blog.color} border ${blog.border} flex items-center justify-center`}>
                          <Icon size={20} className={blog.iconColor} />
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${CATEGORY_COLORS[blog.category] || "bg-gray-800/50 text-gray-400 border-gray-700"}`}>
                          {blog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-white mb-2.5 leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {blog.tags.map(t => (
                          <span key={t} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-800/40 border border-gray-700/40 px-2 py-0.5 rounded-md">
                            <Tag size={9} />{t}
                          </span>
                        ))}
                      </div>

                      {/* Meta + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800/60">
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <span className="flex items-center gap-1"><Calendar size={11} />{blog.date}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{blog.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-600">
                          <Eye size={11} />{blog.views.toLocaleString()}
                          <span className="ml-1.5 flex items-center gap-1"><Heart size={11} />{blog.likes}</span>
                        </div>
                      </div>

                      {/* Read more */}
                      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-gray-500 group-hover:text-blue-400 transition-colors">
                        Read article
                        <ChevronRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </motion.article>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Subscribe CTA ── */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl bg-black/50 backdrop-blur-xl border border-gray-800/70 hover:border-blue-500/20 transition-all duration-300">
            <div className="text-left">
              <p className="text-white font-semibold text-sm">More articles coming soon</p>
              <p className="text-gray-500 text-xs mt-0.5">Follow me on LinkedIn or GitHub to stay updated.</p>
            </div>
            <a
              href="https://www.linkedin.com/in/sougatasaha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] whitespace-nowrap"
            >
              <Rss size={14} />
              Follow for Updates
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
