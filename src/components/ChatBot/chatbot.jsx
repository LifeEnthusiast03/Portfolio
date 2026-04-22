import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ══════════════════════════════════════════════════════
   KNOWLEDGE BASE  — rich, factual, portfolio-specific
═══════════════════════════════════════════════════════ */
const KB = [
  /* ── Identity ── */
  {
    id: 'intro',
    keywords: ['who are you', 'about you', 'introduce', 'tell me about', 'yourself', 'sougata', 'who is'],
    response: `I'm **Sougata Saha** — a Full-Stack Developer & GenAI Engineer. I'm a B.E. student in Information Technology at **Jadavpur University** (2023–2027), passionate about building modern web apps and exploring Generative AI.\n\nCurrently maintaining a SGPA of **8.43** up to the 5th semester.`,
  },
  /* ── Skills / Tech ── */
  {
    id: 'skills',
    keywords: ['skill', 'tech stack', 'technology', 'language', 'framework', 'expertise', 'know', 'proficient', 'tools', 'what can you do'],
    response: `Here's my core tech stack:\n\n**Frontend:** React.js, Tailwind CSS, shadcn/ui, Aceternity UI, Bootstrap\n**Backend:** Node.js, Express.js, FastAPI, WebSocket\n**Databases:** MongoDB, PostgreSQL, MySQL\n**GenAI:** LangChain, Pinecone, Faiss, OpenAI API\n**Languages:** JavaScript, Python, Java, C/C++\n**Tools:** Git, GitHub, Docker, Postman, VS Code\n\nCheck the Skills page for the full breakdown!`,
  },
  /* ── Projects ── */
  {
    id: 'projects',
    keywords: ['project', 'built', 'created', 'developed', 'portfolio', 'work', 'apps', 'application'],
    response: `I've built **4 featured projects**:\n\n1. 🗨️ **Real-Time Chat App** — Node.js, Socket.io, MongoDB, React\n2. 📚 **Readwise** — RAG-based knowledge base (React, Node.js, Pinecone, OpenAI)\n3. 💸 **Spendwise** — Expense tracker with analytics (React, Material UI, Chart.js)\n4. 🌤️ **SkyFlect** — Weather app with glassmorphism UI (React, OpenWeather API)\n\nVisit the Projects page to see them live!`,
  },
  /* ── Readwise ── */
  {
    id: 'readwise',
    keywords: ['readwise', 'rag', 'knowledge base', 'pinecone', 'openai'],
    response: `**Readwise** is my most advanced project — an AI-powered knowledge base built with:\n- **RAG pipeline**: LangChain + Pinecone for vector search\n- **Backend**: Node.js + Express + MongoDB\n- **Frontend**: React\n- **AI**: OpenAI API for intelligent responses\n\nIt implements enterprise-grade authentication and real-time features. 🔗 [Live demo](https://readwise-virid.vercel.app/login)`,
  },
  /* ── Spendwise ── */
  {
    id: 'spendwise',
    keywords: ['spendwise', 'expense', 'budget', 'tracking', 'finance'],
    response: `**Spendwise** is a full-stack expense tracking app featuring:\n- Analytics dashboards with Chart.js\n- Dark mode UI with Material UI\n- Income & expense goal tracking\n- Upcoming voice support\n\nBuilt with React frontend and an Express + PostgreSQL + Prisma backend.`,
  },
  /* ── Chat App ── */
  {
    id: 'chatapp',
    keywords: ['chat app', 'real time', 'socket', 'websocket', 'messaging'],
    response: `My **Real-Time Chat Application** features:\n- Live messaging with Socket.io\n- Multiple chat rooms\n- File sharing capabilities\n- JWT-based user authentication\n\nBuilt with Node.js, Express, Socket.io, MongoDB, and React.`,
  },
  /* ── Education ── */
  {
    id: 'education',
    keywords: ['education', 'study', 'degree', 'university', 'college', 'academic', 'gpa', 'sgpa', 'jadavpur'],
    response: `🎓 **B.E. in Information Technology**\nJadavpur University, Kolkata (2023–2027)\nSGPA: **8.43** (up to 5th Semester)\n\nKey courses: DSA, DBMS, OOP, Computer Networks, Software Engineering\n\n📜 Also completed a **DSA certification** from Udemy.\n\nClass 12: **95%** from Ramakrishna Mission VidyaBhawan, Midnapore.`,
  },
  /* ── Contact ── */
  {
    id: 'contact',
    keywords: ['contact', 'email', 'hire', 'reach', 'connect', 'available', 'freelance', 'work together', 'collaborate'],
    response: `I'd love to connect! Here's how to reach me:\n\n📧 **Email:** sahasougata820@gmail.com\n💼 **LinkedIn:** linkedin.com/in/sougatasaha\n💻 **GitHub:** github.com/LifeEnthusiast03\n\nI'm **open to internships, freelance work, and collaborations**. Head to the Contact page to send me a message directly!`,
  },
  /* ── Coding Profiles ── */
  {
    id: 'coding',
    keywords: ['leetcode', 'codeforces', 'gfg', 'geeksforgeeks', 'competitive', 'coding profile', 'dsa', 'competitive programming', 'cp'],
    response: `Here are my competitive programming profiles:\n\n🟠 **LeetCode:** leetcode.com/u/sougata820\n🟢 **GeeksForGeeks:** geeksforgeeks.org/profile/sahasoug21zk\n🔵 **Codeforces:** codeforces.com/profile/Sougatasaha\n\nI regularly practice DSA and competitive programming!`,
  },
  /* ── GenAI / AI ── */
  {
    id: 'genai',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'llm', 'genai', 'langchain', 'vector', 'embedding', 'gpt', 'openai'],
    response: `I'm passionate about **Generative AI engineering**! My GenAI stack:\n\n- **LangChain** — LLM orchestration & chains\n- **Pinecone / Faiss** — vector similarity search\n- **OpenAI API** — GPT-4 integrations\n- **RAG pipelines** — retrieval-augmented generation\n\nMy Readwise project is the best example of this in action. I'm constantly exploring new AI tools and techniques!`,
  },
  /* ── Frontend ── */
  {
    id: 'frontend',
    keywords: ['frontend', 'react', 'ui', 'css', 'tailwind', 'design', 'interface'],
    response: `My frontend toolkit:\n\n- **React.js** — component architecture, hooks, Router, Redux Toolkit\n- **Tailwind CSS** — utility-first styling\n- **shadcn/ui & Aceternity UI** — premium components\n- **Framer Motion** — animations\n- **Chart.js** — data visualization\n\nI focus on building fast, accessible, and beautiful interfaces.`,
  },
  /* ── Backend ── */
  {
    id: 'backend',
    keywords: ['backend', 'node', 'express', 'server', 'api', 'rest', 'fastapi', 'python backend'],
    response: `My backend stack:\n\n- **Node.js + Express.js** — RESTful APIs, middleware, auth\n- **FastAPI (Python)** — high-performance async APIs\n- **WebSockets** — real-time bidirectional communication\n- **JWT + bcrypt** — secure authentication\n- **Prisma ORM** — type-safe database access\n- **Databases:** MongoDB, PostgreSQL, MySQL`,
  },
  /* ── Blogs ── */
  {
    id: 'blogs',
    keywords: ['blog', 'article', 'write', 'writing', 'post', 'read'],
    response: `I write about tech on my **Blogs** page! Topics include:\n\n📝 Building RAG pipelines with LangChain & Pinecone\n📝 WebSockets vs Server-Sent Events\n📝 React performance & memoization\n📝 Scalable REST API design\n📝 Vector databases compared\n📝 CSS Grid vs Flexbox guide\n\nCheck out the Blogs page for all articles!`,
  },
  /* ── Location ── */
  {
    id: 'location',
    keywords: ['location', 'where', 'city', 'india', 'bengal', 'kolkata', 'midnapore', 'based', 'from'],
    response: `I'm based in **Midnapore, West Bengal, India** 🇮🇳\n\nI study at Jadavpur University in Kolkata. I'm open to **remote work and collaborations** from anywhere in the world!`,
  },
  /* ── Hobbies ── */
  {
    id: 'hobbies',
    keywords: ['hobby', 'hobbies', 'interest', 'free time', 'passion', 'besides coding', 'when not coding'],
    response: `When I'm not coding, I enjoy:\n\n🏋️ Staying active and working out\n📖 Reading tech blogs and papers\n🎯 Competitive programming challenges\n🌐 Exploring new AI tools and frameworks\n🐾 Spending time outdoors\n\nI'm always curious and love learning new things!`,
  },
  /* ── Availability ── */
  {
    id: 'available',
    keywords: ['available', 'hire', 'internship', 'job', 'opportunity', 'open to work', 'looking for'],
    response: `Yes, I'm **currently available** for:\n\n✅ Software development internships\n✅ Freelance web development projects\n✅ Open-source collaborations\n✅ Part-time remote roles\n\nReach out at **sahasougata820@gmail.com** or connect on LinkedIn!`,
  },
];

/* ── Quick reply suggestions ── */
const QUICK_REPLIES = [
  'Tell me about yourself',
  'What are your skills?',
  'Show me your projects',
  'How to contact you?',
  'Coding profiles?',
];

/* ── Fuzzy match scorer ── */
function scoreMatch(query, keywords) {
  const q = query.toLowerCase();
  let score = 0;
  for (const kw of keywords) {
    if (q === kw) score += 10;
    else if (q.includes(kw)) score += 5;
    else if (kw.includes(q) && q.length > 3) score += 3;
    else {
      // word-level partial match
      const qWords = q.split(/\s+/);
      const kwWords = kw.split(/\s+/);
      for (const qw of qWords)
        for (const kw2 of kwWords)
          if (qw.length > 2 && (kw2.includes(qw) || qw.includes(kw2))) score += 2;
    }
  }
  return score;
}

function getBotResponse(userMessage) {
  const q = userMessage.toLowerCase().trim();

  // Greeting
  if (/^(hi|hello|hey|hii|yo|sup|good morning|good evening|good afternoon|howdy)\b/i.test(q)) {
    return `Hi there! 👋 I'm **Sougata's portfolio assistant**. I can tell you about his skills, projects, education, coding profiles, and more.\n\nWhat would you like to know?`;
  }

  // Thank you
  if (/^(thanks|thank you|thx|ty|great|awesome|cool|nice)\b/i.test(q)) {
    return `You're welcome! 😊 Feel free to ask anything else about Sougata's work or background!`;
  }

  // Farewell
  if (/^(bye|goodbye|see you|cya|later)\b/i.test(q)) {
    return `Goodbye! 👋 Feel free to come back anytime. Don't forget to check out the Projects and Contact pages!`;
  }

  // Score all KB entries
  const scored = KB.map(entry => ({ entry, score: scoreMatch(q, entry.keywords) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0) return scored[0].entry.response;

  // Fallback
  return `I'm not sure about that specific topic! 🤔 Here are things I can help with:\n\n• Skills & tech stack\n• Projects (Readwise, Spendwise, Chat app)\n• Education & CGPA\n• Contact information\n• Coding profiles (LeetCode, GFG, Codeforces)\n• GenAI & AI engineering\n• Blogs & articles\n\nTry asking something from the list above!`;
}

/* ── Markdown-ish renderer (bold + newlines) ── */
function renderText(text) {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((p, j) =>
          j % 2 === 1 ? <strong key={j} className="font-semibold text-white">{p}</strong> : p
        )}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    );
  });
}

/* ════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════ */
export default function ChatBot() {
  const [isOpen, setIsOpen]       = useState(false);
  const [messages, setMessages]   = useState([{
    type: 'bot',
    text: `Hi! 👋 I'm **Sougata's portfolio assistant**.\n\nAsk me anything about his skills, projects, education, or how to get in touch!`,
    timestamp: new Date(),
  }]);
  const [input, setInput]         = useState('');
  const [isTyping, setIsTyping]   = useState(false);
  const messagesEndRef             = useRef(null);
  const inputRef                   = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = useCallback((text) => {
    const msg = text || input;
    if (!msg.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: msg, timestamp: new Date() }]);
    setInput('');
    setIsTyping(true);

    const delay = 600 + Math.min(msg.length * 10, 800);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: getBotResponse(msg),
        timestamp: new Date(),
      }]);
    }, delay);
  }, [input]);

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* ── Toggle Button ── */}
      <motion.button
        onClick={() => setIsOpen(o => !o)}
        className="fixed bottom-8 left-8 z-50 p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-[0_8px_32px_rgba(37,99,235,0.45)] border border-blue-500/30 backdrop-blur-xl"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chat"
        id="chatbot-toggle"
      >
        <AnimatePresence mode="wait">
          {isOpen
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle size={22} /></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 left-8 z-50 w-[370px] sm:w-[400px] h-[560px] flex flex-col rounded-2xl overflow-hidden border border-gray-800/80 shadow-[0_24px_80px_rgba(0,0,0,0.6)] bg-[#0d1117]"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 to-violet-700 px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none">Portfolio Assistant</p>
                  <p className="text-[11px] text-blue-200 mt-0.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                    Online · Knows everything about Sougata
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-800">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex gap-2.5 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.type === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={13} className="text-blue-400" />
                    </div>
                  )}
                  <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-br-sm'
                      : 'bg-gray-800/80 text-gray-200 rounded-bl-sm border border-gray-700/50'
                  }`}>
                    <div className="whitespace-pre-wrap">{renderText(msg.text)}</div>
                    <span className="text-[10px] opacity-40 mt-1.5 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {msg.type === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0 mt-0.5">
                      <User size={13} className="text-violet-400" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div className="flex gap-2.5 justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Bot size={13} className="text-blue-400" />
                  </div>
                  <div className="bg-gray-800/80 border border-gray-700/50 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map(i => (
                      <motion.div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 1 && !isTyping && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {QUICK_REPLIES.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="flex items-center gap-1 text-xs text-blue-300 bg-blue-950/50 border border-blue-500/20 px-3 py-1.5 rounded-full hover:bg-blue-900/50 hover:border-blue-400/30 transition-all"
                  >
                    {q} <ChevronRight size={10} />
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-800/60 bg-[#0d1117] shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-800/60 text-gray-200 placeholder-gray-600 text-sm px-4 py-2.5 rounded-xl border border-gray-700/60 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 focus:outline-none transition-all"
                  id="chatbot-input"
                />
                <motion.button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-br from-blue-600 to-violet-600 text-white p-2.5 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="chatbot-send"
                >
                  <Send size={16} />
                </motion.button>
              </div>
              <p className="text-[10px] text-gray-600 mt-2 text-center">Powered by Sougata's portfolio data</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
