import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronDown, Download, Code, Brain, Zap, Globe, Database,
  Rocket, Monitor, Sparkles, Github, Linkedin, Mail,
  Briefcase, GraduationCap, Layers
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { text: "Full-Stack Developer", gradient: "from-blue-400 to-cyan-400", icon: Database },
    { text: "Aspiring Software Engineer", gradient: "from-green-400 to-teal-400", icon: Rocket },
    { text: "GenAI Developer", gradient: "from-purple-400 to-pink-400", icon: Sparkles },
    { text: "AI Enthusiast", gradient: "from-violet-400 to-indigo-400", icon: Brain },
    { text: "Web Developer", gradient: "from-orange-400 to-red-400", icon: Monitor },
  ];

  const socialLinks = [
    {
      name: "GitHub", icon: Github,
      url: "https://github.com/LifeEnthusiast03",
    },
    {
      name: "LinkedIn", icon: Linkedin,
      url: "https://www.linkedin.com/in/sougatasaha/",
    },
    {
      name: "Email", icon: Mail,
      url: "mailto:sahasougata820@gmail.com",
    },
  ];

  const stats = [
    { icon: Briefcase, value: "4+", label: "Projects" },
    { icon: GraduationCap, value: "8.44", label: "SGPA" },
    { icon: Layers, value: "30+", label: "Skills" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const floatingIcons = [
    { icon: Code, color: "from-blue-500 to-cyan-500", delay: "0s" },
    { icon: Brain, color: "from-purple-500 to-pink-500", delay: "1s" },
    { icon: Zap, color: "from-yellow-500 to-orange-500", delay: "2s" },
    { icon: Globe, color: "from-green-500 to-teal-500", delay: "3s" },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Sougata_Saha.pdf";
    link.download = "Sougata_Saha.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stagger children animation
  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    animate: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#050505] pt-24"
      >
        {/* Dotted Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" style={{ animationDuration: "4s" }} />

          {/* Ripple Effects */}
          <div className="ripple top-1/4 left-1/4 w-32 h-32 bg-blue-500/10" style={{ animationDelay: "0s" }} />
          <div className="ripple top-2/3 right-1/3 w-40 h-40 bg-blue-600/10" style={{ animationDelay: "1.5s" }} />
          <div className="ripple bottom-1/4 left-1/2 w-36 h-36 bg-blue-700/10" style={{ animationDelay: "3s" }} />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-24 h-24 border border-blue-500/10 transform rotate-45 animate-spin" style={{ animationDuration: "20s", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          <div className="absolute top-40 right-32 w-16 h-16 border border-blue-600/10 animate-pulse" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-r from-blue-500/5 to-blue-700/5 rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent animate-pulse delay-1000" />
        </div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Floating Badge */}
              <motion.div variants={itemVariants} className="mb-8 relative">
                <div className="inline-flex items-center px-6 py-3 bg-black/70 backdrop-blur-xl border border-gray-800/70 rounded-full text-blue-400 text-sm font-medium relative overflow-hidden group shadow-[0_8px_32px_0_rgba(37,99,235,0.15)] hover:border-blue-600/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-700/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10">👋 Welcome To My Digital Realm</span>
                </div>
              </motion.div>

              {/* Animated Title */}
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                <div className="relative">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                    Hi, I'm{" "}
                  </span>
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
                      Sougata Saha
                    </span>
                  </span>
                </div>
              </motion.h1>

              {/* Dynamic Slideshow */}
              <motion.div variants={itemVariants} className="relative mb-8 min-h-[80px] flex items-center justify-center lg:justify-start">
                <div className="relative w-full max-w-2xl h-16 overflow-visible">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center gap-4 transition-all duration-700 ease-in-out ${
                        index === currentSlide
                          ? "opacity-100 translate-y-0"
                          : index < currentSlide
                          ? "opacity-0 -translate-y-8"
                          : "opacity-0 translate-y-8"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm animate-pulse">
                          <slide.icon size={32} className="text-white" />
                        </div>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent whitespace-nowrap`}>
                          {slide.text}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/projects"
                  className="relative px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl overflow-hidden group transform hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_0_rgba(37,99,235,0.4)] hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.5)] font-semibold text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap size={20} />
                    Explore My Work
                  </span>
                </Link>

                <button
                  onClick={handleDownloadCV}
                  className="relative px-8 py-4 border-2 border-gray-800 text-white rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] font-semibold group overflow-hidden backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                    <Download size={20} />
                    Download CV
                  </span>
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="relative">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1 max-w-[80px]" />
                  <span className="text-sm text-gray-400 font-medium px-3">Let's Connect</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1 max-w-[80px]" />
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 rounded-full bg-black/70 backdrop-blur-xl border border-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.3)]"
                    >
                      <social.icon
                        size={18}
                        className="relative z-10 text-gray-300 transition-all duration-300 group-hover:text-white group-hover:scale-110"
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-gray-800/90 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                        <span className="font-medium">{social.name}</span>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="relative">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                  {/* Rotating Border Layers */}
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin p-1" style={{ animationDuration: "10s" }}>
                      <div className="w-full h-full bg-black rounded-full" />
                    </div>
                    <div className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin p-1" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
                      <div className="w-full h-full bg-black rounded-full" />
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                    <img
                      src="./sougata.jpg"
                      alt="Sougata Saha"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 mix-blend-overlay" />
                  </div>

                  {/* Floating Tech Icons */}
                  {floatingIcons.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className={`absolute w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-lg animate-float`}
                        style={{
                          top: `${20 + index * 20}%`,
                          left: `${-10 + (index % 2) * 120}%`,
                          animationDelay: item.delay,
                          animationDuration: "3s",
                        }}
                      >
                        <Icon size={24} />
                      </div>
                    );
                  })}

                  {/* Orbital Rings */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: "30s" }}>
                    <div className="absolute top-1/2 left-1/2 w-full h-full border border-blue-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="absolute inset-8 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                    <div className="absolute top-1/2 left-1/2 w-full h-full border border-purple-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Particles */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                        style={{
                          top: `${15 + i * 15}%`,
                          left: `${10 + (i * 17) % 80}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: "2s",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-3 animate-bounce">
              <div className="relative w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-1 bg-gradient-to-b from-transparent to-blue-500/10">
                <div className="w-1 h-2 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-ping" />
              </div>
              <div className="text-center">
                <span className="text-gray-400 text-sm font-medium">Scroll Down</span>
                <ChevronDown size={24} className="text-blue-400 animate-pulse mt-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Inline styles for custom animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-gradient { animation: gradient 3s ease infinite; }
          .bg-300\\% { background-size: 300% 300%; }
        `}</style>
      </section>

      {/* ─── ABOUT ME MINI SECTION ─── */}
      <section className="relative py-24 px-4 bg-[#050505]">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        </div>

        <motion.div
          className="max-w-5xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-6 py-4 bg-black/50 backdrop-blur-xl rounded-2xl border border-gray-800/60 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.15)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <stat.icon className="w-5 h-5 text-blue-400" />
                <div>
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-400 ml-2">{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate <span className="text-blue-400 font-medium">Full-Stack Developer</span> and{" "}
                <span className="text-blue-400 font-medium">B.E. student at Jadavpur University</span> pursuing
                Information Technology. I love building modern web applications and exploring
                Generative AI technologies.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                My focus is on crafting clean, scalable code and creating intuitive user experiences.
                From real-time chat apps to AI-powered knowledge bases, I enjoy tackling challenges
                that push the boundaries of what's possible on the web.
              </p>
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-gray-800/60 rounded-xl text-white hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 font-medium"
              >
                <Code size={18} />
                View My Skills
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Frontend", desc: "React, Tailwind, shadcn", gradient: "from-blue-600/20 to-cyan-600/20", border: "border-blue-500/20" },
                { title: "Backend", desc: "Node.js, Express, FastAPI", gradient: "from-green-600/20 to-emerald-600/20", border: "border-green-500/20" },
                { title: "Database", desc: "MongoDB, PostgreSQL, MySQL", gradient: "from-orange-600/20 to-red-600/20", border: "border-orange-500/20" },
                { title: "GenAI", desc: "LangChain, Pinecone, OpenAI", gradient: "from-purple-600/20 to-pink-600/20", border: "border-purple-500/20" },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${card.gradient} border ${card.border} backdrop-blur-xl hover:scale-105 transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;