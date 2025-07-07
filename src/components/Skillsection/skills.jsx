import React, { useState, useEffect } from 'react';
import { Code, Palette, Database, Globe, Terminal, GitBranch, Monitor, Wrench, Star, Zap, Award, Target, Package, Shield, Wifi, TestTube, Server, Lock, Plug, Layers, Box, Cpu, Network, Settings, FileText, Folder, Github, Rocket, Paintbrush, Layout, Smartphone } from 'lucide-react';

const SkillsSection = ({ isVisible }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "C/C++", level: 85, icon: <Cpu className="w-6 h-6" />, description: "System programming & algorithms" },
        { name: "C", level: 80, icon: <Wrench className="w-6 h-6" />, description: "Low-level programming" },
        { name: "Java", level: 80, icon: <Code className="w-6 h-6" />, description: "Object-oriented programming" },
        { name: "JavaScript", level: 90, icon: <Zap className="w-6 h-6" />, description: "Modern web development" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "HTML", level: 95, icon: <Globe className="w-6 h-6" />, description: "Semantic markup language" },
        { name: "CSS", level: 90, icon: <Paintbrush className="w-6 h-6" />, description: "Styling & animations" },
        { name: "React.js", level: 85, icon: <Layers className="w-6 h-6" />, description: "Component-based architecture" },
        { name: "Tailwind CSS", level: 90, icon: <Layout className="w-6 h-6" />, description: "Utility-first CSS framework" },
        { name: "Bootstrap", level: 85, icon: <Smartphone className="w-6 h-6" />, description: "Responsive UI framework" },
        { name: "Context API", level: 75, icon: <Settings className="w-6 h-6" />, description: "State management" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "Node.js", level: 80, icon: <Terminal className="w-6 h-6" />, description: "Server-side JavaScript" },
        { name: "Express.js", level: 85, icon: <Rocket className="w-6 h-6" />, description: "Web application framework" },
        { name: "JWT", level: 75, icon: <Shield className="w-6 h-6" />, description: "JSON Web Token authentication" },
        { name: "WebSocket", level: 70, icon: <Wifi className="w-6 h-6" />, description: "Real-time communication" }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "MySQL", level: 75, icon: <Database className="w-6 h-6" />, description: "Relational database" },
        { name: "MongoDB", level: 70, icon: <Folder className="w-6 h-6" />, description: "NoSQL database" }
      ]
    },
    {
      title: "CS Fundamentals",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-500/10",
      skills: [
        { name: "DBMS", level: 80, icon: <FileText className="w-6 h-6" />, description: "Database management systems" },
        { name: "OOP", level: 85, icon: <Box className="w-6 h-6" />, description: "Object-oriented programming" },
        { name: "Computer Networks", level: 75, icon: <Network className="w-6 h-6" />, description: "Network protocols & architecture" },
        { name: "Operating Systems", level: 80, icon: <Monitor className="w-6 h-6" />, description: "OS concepts & management" }
      ]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      skills: [
        { name: "Git", level: 85, icon: <GitBranch className="w-6 h-6" />, description: "Version control system" },
        { name: "GitHub", level: 80, icon: <Github className="w-6 h-6" />, description: "Code collaboration platform" },
        { name: "NPM", level: 85, icon: <Package className="w-6 h-6" />, description: "Package manager" },
        { name: "React Vite", level: 80, icon: <Zap className="w-6 h-6" />, description: "Fast build tool" },
        { name: "Postman", level: 80, icon: <TestTube className="w-6 h-6" />, description: "API development & testing" }
      ]
    },
    {
      title: "OS & Development Environment",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      skills: [
        { name: "Linux", level: 70, icon: <Terminal className="w-6 h-6" />, description: "Unix-based operating system" },
        { name: "VS Code", level: 90, icon: <Code className="w-6 h-6" />, description: "Code editor & debugging" }
      ]
    }
  ];

  const getSkillLevel = (level) => {
    if (level >= 90) return { text: "Expert", icon: <Award className="w-4 h-4" />, color: "text-yellow-400" };
    if (level >= 80) return { text: "Advanced", icon: <Star className="w-4 h-4" />, color: "text-blue-400" };
    if (level >= 70) return { text: "Intermediate", icon: <Target className="w-4 h-4" />, color: "text-green-400" };
    return { text: "Beginner", icon: <Zap className="w-4 h-4" />, color: "text-gray-400" };
  };

  const SkillCard = ({ skill, index, categoryColor }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const skillLevel = getSkillLevel(skill.level);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setIsAnimated(true);
        }, index * 200);
        return () => clearTimeout(timer);
      }
    }, [isVisible, index]);

    return (
      <div
        className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
          isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Skill Icon & Name */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
              {skill.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors">
                {skill.name}
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {skill.description}
              </p>
            </div>
          </div>
          
          {/* Skill Level Badge */}
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 ${skillLevel.color}`}>
            {skillLevel.icon}
            <span className="text-xs font-medium">{skillLevel.text}</span>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="relative flex items-center justify-center mb-4">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-800"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - (isAnimated ? skill.level / 100 : 0))}`}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className={`stop-color-blue-500`} />
                  <stop offset="100%" className={`stop-color-purple-500`} />
                </linearGradient>
              </defs>
            </svg>
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-white">{skill.level}%</span>
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
      </div>
    );
  };

  return (
    <section id="Skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Crafting digital experiences with modern technologies and tools
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                  : 'bg-gray-900/50 text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-300'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillCard
              key={`${activeCategory}-${skill.name}`}
              skill={skill}
              index={index}
              categoryColor={skillCategories[activeCategory].color}
            />
          ))}
        </div>
        {/* Bottom tagline */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/20">
            <Terminal className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300">Continuously evolving, always innovating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;