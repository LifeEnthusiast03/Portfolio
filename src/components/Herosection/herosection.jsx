import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Particles from "../Particles";
import {
  Download, Code, Brain, Zap, Globe, Database,
  Rocket, Monitor, Sparkles, Github, Linkedin, Mail,
  Briefcase, GraduationCap, Layers, ArrowUpRight, Terminal,
  Cpu, Server, GitBranch
} from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";

/* ─── Data ─────────────────────────────────────────── */
const ROLES = [
  "Full-Stack Developer",
  "GenAI Engineer",
  "Software Engineer",
  "AI Enthusiast",
  "Web Developer",
];

const SOCIAL = [
  { name: "GitHub",      icon: Github,          url: "https://github.com/LifeEnthusiast03",                    color: "hover:text-white       hover:border-white/30       hover:shadow-white/10" },
  { name: "LinkedIn",   icon: Linkedin,         url: "https://www.linkedin.com/in/sougatasaha/",               color: "hover:text-blue-400    hover:border-blue-400/30    hover:shadow-blue-500/10" },
  { name: "Email",      icon: Mail,             url: "mailto:sahasougata820@gmail.com",                         color: "hover:text-cyan-400    hover:border-cyan-400/30    hover:shadow-cyan-500/10" },
  { name: "LeetCode",   icon: SiLeetcode,       url: "https://leetcode.com/u/sougata820/",                     color: "hover:text-orange-400  hover:border-orange-400/30  hover:shadow-orange-500/10" },
  { name: "GFG",        icon: SiGeeksforgeeks,  url: "https://www.geeksforgeeks.org/profile/sahasoug21zk",     color: "hover:text-green-400   hover:border-green-400/30   hover:shadow-green-500/10" },
  { name: "Codeforces", icon: SiCodeforces,     url: "https://codeforces.com/profile/Sougatasaha",             color: "hover:text-sky-400     hover:border-sky-400/30     hover:shadow-sky-400/10" },
];

const STATS = [
  { icon: Briefcase,     value: "4+",   label: "Projects",  color: "from-blue-500/20 to-cyan-500/20",    border: "border-blue-500/20",   text: "text-blue-400" },
  { icon: GraduationCap, value: "8.43", label: "SGPA",      color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/20", text: "text-violet-400" },
  { icon: Layers,        value: "30+",  label: "Skills",    color: "from-emerald-500/20 to-teal-500/20",  border: "border-emerald-500/20",text: "text-emerald-400" },
];

const TECH_CARDS = [
  { title: "Frontend",  desc: "React · Tailwind · shadcn",      icon: Monitor,  gradient: "from-blue-600/15 to-cyan-600/15",     border: "border-blue-500/20",    glow: "rgba(59,130,246,0.15)" },
  { title: "Backend",   desc: "Node.js · Express · FastAPI",    icon: Server,   gradient: "from-emerald-600/15 to-teal-600/15", border: "border-emerald-500/20", glow: "rgba(52,211,153,0.15)" },
  { title: "Database",  desc: "MongoDB · PostgreSQL · MySQL",   icon: Database, gradient: "from-orange-600/15 to-amber-600/15",  border: "border-orange-500/20",  glow: "rgba(251,146,60,0.15)" },
  { title: "GenAI",     desc: "LangChain · Pinecone · OpenAI",  icon: Cpu,      gradient: "from-purple-600/15 to-pink-600/15",   border: "border-purple-500/20",  glow: "rgba(168,85,247,0.15)" },
];

const FLOATING = [
  { icon: Code,      color: "#3b82f6", glow: "0 0 20px rgba(59,130,246,0.6)",   top: "18%", left: "-14%", delay: 0    },
  { icon: Brain,     color: "#a855f7", glow: "0 0 20px rgba(168,85,247,0.6)",   top: "45%", left: "115%", delay: 0.8  },
  { icon: Zap,       color: "#f59e0b", glow: "0 0 20px rgba(245,158,11,0.6)",   top: "72%", left: "-12%", delay: 1.6  },
  { icon: GitBranch, color: "#10b981", glow: "0 0 20px rgba(16,185,129,0.6)",   top: "25%", left: "112%", delay: 2.4  },
];

/* ─── Typewriter hook ───────────────────────────────── */
function useTypewriter(words, typingSpeed = 80, pauseMs = 1800, deleteSpeed = 45) {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor]     = useState(true);

  useEffect(() => {
    const cur = words[wordIdx];
    let timeout;
    if (!deleting && display === cur) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && display === "") {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplay(deleting ? cur.slice(0, display.length - 1) : cur.slice(0, display.length + 1));
      }, deleting ? deleteSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx, words, typingSpeed, pauseMs, deleteSpeed]);

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(t);
  }, []);

  return { display, cursor };
}



/* ─── Spotlight orb follows cursor ─────────────────── */
function SpotlightOrb() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 25 });
  const sy = useSpring(my, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const onMove = e => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at ${sx.get() * 100}% ${sy.get() * 100}%, rgba(37,99,235,0.08) 0%, transparent 70%)`,
      }}
      animate={{ opacity: 1 }}
    />
  );
}

/* ─── Component ─────────────────────────────────────── */
const HeroSection = () => {
  const { display: role, cursor } = useTypewriter(ROLES);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Sougata_Saha.pdf";
    link.download = "Sougata_Saha.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* ════════════════ HERO ════════════════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-[#030712] pt-24">

        {/* — Layered background — */}
        <div className="absolute inset-0 z-0">
          {/* fine grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
          {/* radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />
          {/* bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
        </div>

        {/* — Particle field — */}
        <Particles />

        {/* — Spotlight orb — */}
        <SpotlightOrb />

        {/* — Ambient glows — */}
        <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px]" />

        {/* ── Main grid ── */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto w-full"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── LEFT ── */}
            <div className="text-center lg:text-left order-2 lg:order-1">

              {/* Status badge */}
              <motion.div variants={item} className="mb-7">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/60 backdrop-blur-xl border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-widest uppercase shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                  </span>
                  Available for opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-black mb-4 leading-[1.05] tracking-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                    Sougata
                  </span>
                  {/* underline accent */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 opacity-70" />
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Saha
                </span>
              </motion.h1>

              {/* Typewriter role */}
              <motion.div variants={item} className="mb-8 flex items-center justify-center lg:justify-start gap-2 h-10">
                <Terminal size={16} className="text-blue-400 shrink-0" />
                <span className="font-mono text-lg sm:text-xl text-gray-200 tracking-tight">
                  {role}
                  <span className={`ml-0.5 inline-block w-[2px] h-5 align-middle bg-blue-400 ${cursor ? "opacity-100" : "opacity-0"} transition-opacity`} />
                </span>
              </motion.div>

              {/* Bio */}
              <motion.p variants={item} className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                B.E. Information Technology student at{" "}
                <span className="text-blue-400 font-medium">Jadavpur University</span> — building
                modern web apps and exploring the frontier of{" "}
                <span className="text-cyan-400 font-medium">Generative AI</span>.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.55)]"
                >
                  <Rocket size={18} />
                  View Projects
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <button
                  onClick={handleDownloadCV}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-blue-950/40 hover:shadow-[0_0_24px_rgba(37,99,235,0.2)]"
                >
                  <Download size={18} />
                  Download CV
                </button>
              </motion.div>

              {/* Social links */}
              <motion.div variants={item} className="flex items-center justify-center lg:justify-start gap-3">
                {SOCIAL.map(s => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-800 bg-black/40 backdrop-blur-xl text-gray-400 text-sm font-medium transition-all duration-300 shadow-lg ${s.color}`}
                  >
                    <s.icon size={16} />
                    <span className="hidden sm:inline">{s.name}</span>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — profile ── */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* outer glow ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-violet-600/20 blur-2xl animate-pulse" style={{ animationDuration: "3s" }} />

                {/* spinning conic border */}
                <div className="relative w-72 h-72 sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px]">
                  <div
                    className="absolute inset-0 rounded-full animate-spin"
                    style={{
                      animationDuration: "8s",
                      background: "conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
                      padding: "2px",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#030712]" />
                  </div>

                  {/* static inner ring */}
                  <div className="absolute inset-[3px] rounded-full border border-gray-800/60" />

                  {/* photo */}
                  <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                    <img
                      src="./sougata.jpg"
                      alt="Sougata Saha"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />
                  </div>

                  {/* floating tech icons */}
                  {FLOATING.map(({ icon: Icon, color, glow, top, left, delay }, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 rounded-2xl flex items-center justify-center bg-[#030712] border border-gray-800"
                      style={{ top, left, boxShadow: glow }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                      transition={{
                        opacity:  { delay: 0.6 + delay, duration: 0.5 },
                        scale:    { delay: 0.6 + delay, duration: 0.5 },
                        y:        { delay: 0.6 + delay, duration: 3, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <Icon size={20} style={{ color }} />
                    </motion.div>
                  ))}

                  {/* name chip */}
                  <motion.div
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2 rounded-full bg-[#030712] border border-blue-500/30 text-sm font-semibold text-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] backdrop-blur-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    Sougata Saha
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <style>{`
          @keyframes gradient { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
          .animate-gradient { animation: gradient 4s ease infinite; }
        `}</style>
      </section>

      {/* ════════════════ ABOUT ════════════════ */}
      <section className="relative py-28 px-4 sm:px-6 bg-[#030712]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ── Stats row ── */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-20">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-br ${s.color} border ${s.border} backdrop-blur-xl`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.1 }}
                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              >
                <s.icon className={`w-5 h-5 ${s.text}`} />
                <div>
                  <span className="text-2xl font-black text-white">{s.value}</span>
                  <span className="text-sm text-gray-400 ml-2">{s.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── About content ── */}
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Text side */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/50 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider mb-5">
                <span className="text-blue-500">$</span> whoami
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-5 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-5">
                I'm a passionate{" "}
                <span className="text-blue-400 font-semibold">Full-Stack Developer</span> and{" "}
                <span className="text-blue-400 font-semibold">B.E. student at Jadavpur University</span>{" "}
                pursuing Information Technology. I love building modern web applications and exploring
                Generative AI technologies.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                My focus is on crafting clean, scalable code and creating intuitive user experiences.
                From real-time chat apps to AI-powered knowledge bases, I enjoy tackling challenges
                that push the boundaries of what's possible on the web.
              </p>
              <Link
                to="/skills"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-blue-950/50 border border-blue-500/25 text-blue-300 rounded-xl hover:bg-blue-900/50 hover:border-blue-400/40 hover:text-white transition-all duration-300 font-medium text-sm"
              >
                <Code size={16} />
                View My Skills
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Bento tech cards */}
            <motion.div
              className="lg:col-span-3 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {TECH_CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  className={`group relative p-5 rounded-2xl bg-gradient-to-br ${card.gradient} border ${card.border} backdrop-blur-xl overflow-hidden cursor-default`}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  {/* hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ boxShadow: `inset 0 0 40px ${card.glow}` }}
                  />
                  <card.icon size={22} className="text-gray-300 mb-3 relative z-10" />
                  <h3 className="text-white font-bold text-base mb-1 relative z-10">{card.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed relative z-10">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;