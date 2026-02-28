import React, { useState, useEffect } from "react";
import { ChevronDown, Download, Code, Brain, Zap, Globe, Database, Cpu, Rocket, Monitor, Sparkles, Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";
const HeroSection = ({ onSectionClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: "Full-Stack Developer",
      gradient: "from-blue-400 to-cyan-400",
      icon: Database
    },
    {
      text: "Aspiring Software Engineer",
      gradient: "from-green-400 to-teal-400",
      icon: Rocket
    },
    {
      text: "GenAI Developer",
      gradient: "from-purple-400 to-pink-400",
      icon: Sparkles
    },
    {
      text: "AI Enthusiast",
      gradient: "from-violet-400 to-indigo-400",
      icon: Brain
    },
    {
      text: "Web Developer",
      gradient: "from-orange-400 to-red-400",
      icon: Monitor
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/LifeEnthusiast03",
      color: "from-gray-400 to-gray-600",
      hoverColor: "hover:from-white hover:to-gray-200"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sougatasaha/",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-300 hover:to-blue-500"
    },
    {
      name: "Email",
      icon: Mail,
      url: "sahasougata820@gmail.com",
      color: "from-green-400 to-emerald-600",
      hoverColor: "hover:from-green-300 hover:to-emerald-500"
    }
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
  const link = document.createElement('a');
  link.href = '/cv.pdf'; 
  link.download = 'SOUGATA_SAHA.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-[#050505]"
    >
      {/* Dotted Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" style={{animationDuration: '4s'}}></div>
        
        {/* Ripple Effects */}
        <div className="ripple top-1/4 left-1/4 w-32 h-32 bg-blue-500/10" style={{animationDelay: '0s'}}></div>
        <div className="ripple top-2/3 right-1/3 w-40 h-40 bg-blue-600/10" style={{animationDelay: '1.5s'}}></div>
        <div className="ripple bottom-1/4 left-1/2 w-36 h-36 bg-blue-700/10" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagon */}
        <div className="absolute top-20 left-20 w-24 h-24 border border-blue-500/10 transform rotate-45 animate-spin" style={{ animationDuration: "20s", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
        
        {/* Triangle */}
        <div className="absolute top-40 right-32 w-16 h-16 border border-blue-600/10 animate-pulse" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}></div>
        
        {/* Morphing Circle */}
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-r from-blue-500/5 to-blue-700/5 rounded-full animate-ping"></div>
        
        {/* Floating Lines */}
        <div className="absolute top-1/3 right-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Floating Badge */}
            <div className="mb-8 relative">
              <div className="inline-flex items-center px-6 py-3 bg-black/70 backdrop-blur-xl border border-gray-800/70 rounded-full text-blue-400 text-sm font-medium relative overflow-hidden group shadow-[0_8px_32px_0_rgba(37,99,235,0.15)] hover:border-blue-600/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-700/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10">👋 Welcome To My Digital Realm</span>
              </div>
            </div>

            {/* Animated Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
              <div className="relative">
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  Hi, I'm{" "}
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient">
                    Sougata Saha
                  </span>
                  {/* Underline Animation */}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
                </span>
              </div>
            </h1>

            {/* Dynamic Slideshow */}
            <div className="relative mb-8 min-h-[80px] flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-2xl h-16 overflow-visible">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center gap-4 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-y-8'
                        : 'opacity-0 translate-y-8'
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
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => onSectionClick("Projects")}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white rounded-xl overflow-hidden group transform hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_0_rgba(37,99,235,0.4)] hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.5)] font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Zap size={20} />
                  Explore My Work
                </span>
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="relative px-8 py-4 border-2 border-gray-800 text-white rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] font-semibold group overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  <Download size={20} />
                  Download CV
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="relative">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1 max-w-[80px]"></div>
                <span className="text-sm text-gray-400 font-medium px-3">Let's Connect</span>
                <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent flex-1 max-w-[80px]"></div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-full bg-black/70 backdrop-blur-xl border border-gray-800/70 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.3)] ${social.hoverColor}`}
                  >
                    <social.icon 
                      size={18} 
                      className="relative z-10 text-gray-300 transition-all duration-300 group-hover:text-white group-hover:scale-110"
                    />
                    
                    {/* Enhanced Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-gray-800/90 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
                      <span className="font-medium">{social.name}</span>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Rotating Border with Multiple Layers */}
                <div className="absolute inset-0 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin p-1" style={{ animationDuration: "10s" }}>
                    <div className="w-full h-full bg-black rounded-full"></div>
                  </div>
                  <div className="absolute inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin p-1" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
                    <div className="w-full h-full bg-black rounded-full"></div>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <img
                    src="./sougata.jpg"
                    alt="Sougata Saha"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 mix-blend-overlay"></div>
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
                  <div className="absolute top-1/2 left-1/2 w-full h-full border border-blue-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute inset-8 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                  <div className="absolute top-1/2 left-1/2 w-full h-full border border-purple-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Glowing Particles */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: "2s",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3 animate-bounce">
            {/* Modern Mouse Icon */}
            <div className="relative w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-1 bg-gradient-to-b from-transparent to-blue-500/10">
              <div className="w-1 h-2 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-ping"></div>
            </div>

            <div className="text-center">
              <span className="text-gray-400 text-sm font-medium">Scroll Down</span>
              <ChevronDown size={24} className="text-blue-400 animate-pulse mt-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .ripple {
          position: absolute;
          border-radius: 50%;
          animation: ripple 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;