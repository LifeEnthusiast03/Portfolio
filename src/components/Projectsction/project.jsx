import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Download, Menu, X, Code, Palette, Database, Globe, Star, GitBranch, Eye } from 'lucide-react';

// Projects Component
const ProjectsSection = ({ isVisible = true }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Real-Time Chat Application",
      description: "A modern real-time chat application with authentication, multiple rooms, file sharing, and sleek UI built for seamless communication.",
      longDescription: "Building a comprehensive chat platform with real-time messaging, user authentication, and file sharing capabilities using modern web technologies.",
      technologies: ["Node.js", "Express", "Socket.io", "MongoDB", "React", "Socket.io-client"],
      category: "Full Stack",
      status: "In Progress",
      github: "https://github.com",
      live: "https://demo.com",
      image: "/api/placeholder/600/400",
      features: ["Real-time Messaging", "Multiple Rooms", "File Sharing", "User Authentication"],
      stats: { stars: 32, forks: 12, views: 1800 },
      timeline: "4-6 weeks",
      commitment: "1-2 hours daily"
    },
    {
      id: 2,
      title: "AI-Powered Knowledge Base",
      description: "An intelligent knowledge base with RAG implementation, vector search, real-time features, and enterprise-grade security for enhanced information retrieval.",
      longDescription: "Developing an advanced AI-powered knowledge management system with RAG implementation and vector search capabilities for efficient information retrieval.",
      technologies: ["React", "Node.js", "MongoDB", "Pinecone", "OpenAI API"],
      category: "Gen AI",
      status: "In Progress",
      github: "https://github.com",
      live: "https://demo.com",
      image: "/api/placeholder/600/400",
      features: ["RAG Implementation", "Vector Search", "Real-time Features", "Enterprise Security"],
      stats: { stars: 45, forks: 18, views: 2400 },
      timeline: "Ongoing",
      commitment: "2-3 hours daily"
    },
    {
      id: 3,
      title: "Expense Tracker",
      description: "A modern expense tracking application built with React and Material UI, featuring analytics, dark mode, and upcoming voice support for hands-free tracking.",
      longDescription: "Built a comprehensive expense tracking solution with modern UI, data visualization, and upcoming voice recognition capabilities for enhanced user experience.",
      technologies: ["React", "Material UI", "Chart.js", "React-Chartjs-2", "UUID"],
      category: "Frontend",
      status: "Completed",
      github: "https://github.com",
      live: "https://demo.com",
      image: "/api/placeholder/600/400",
      features: ["Expense Tracking", "Charts & Analytics", "Dark Mode", "Voice Support (Coming Soon)"],
      stats: { stars: 28, forks: 9, views: 1600 }
    },
    {
      id: 4,
      title: "SkyFlect - Weather App",
      description: "A modern and responsive weather application built with React, featuring real-time weather data, dynamic backgrounds, and glassmorphism design.",
      longDescription: "A sophisticated weather application showcasing advanced UI patterns with dynamic weather-based backgrounds, smooth animations, and a beautiful glassmorphism interface. Features real-time weather data with detailed metrics and responsive design across all devices.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "OpenWeather API", "Lucide React"],
      category: "Frontend",
      status: "Completed",
      github: "https://github.com/LifeEnthusiast03/weather_app",
      live: "https://skyflect.vercel.app/",
      image: "/skyfleat.png",
      features: [
        "Real-time Weather Data",
        "Dynamic Weather Backgrounds", 
        "Glassmorphism UI Design",
        "Responsive Design",
        "Location Search",
        "Weather Animations",
        "Detailed Weather Metrics",
        "Modern React Architecture"
      ],
      stats: { stars: 15, forks: 6, views: 950 }
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Gen AI"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      "Full Stack": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Frontend": "bg-green-500/20 text-green-300 border-green-500/30",
      "Gen AI": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "AI/ML": "bg-purple-500/20 text-purple-300 border-purple-500/30"
    };
    return colors[category] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  const getStatusColor = (status) => {
    const statusColors = {
      "Completed": "bg-green-500/20 text-green-300 border-green-500/30",
      "In Progress": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Planning": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
    };
    return statusColors[status] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  return (
    <section id="Projects" className="min-h-screen py-20 px-4 bg-[#0a0a0a] relative">
      {/* Dotted Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/5 via-transparent to-purple-950/5"></div>
        
        {/* Ripple Effects */}
        <div className="ripple top-1/3 right-1/4 w-40 h-40 bg-blue-500/8" style={{animationDelay: '0.5s'}}></div>
        <div className="ripple bottom-1/3 left-1/3 w-36 h-36 bg-purple-500/10" style={{animationDelay: '2s'}}></div>
        <div className="ripple top-2/3 left-2/3 w-32 h-32 bg-cyan-500/8" style={{animationDelay: '3.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing my latest work in web development, mobile apps, and data science. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 backdrop-blur-xl ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent shadow-[0_8px_32px_0_rgba(59,130,246,0.4)]'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_8px_60px_0_rgba(59,130,246,0.3)] hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {/* Actual Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>

                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getCategoryColor(project.category)}`}>
                  {project.category}
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/10"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-4 h-4" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {project.stats.views}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] border border-white/10 hover:border-white/20"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-lg transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.3)] border border-blue-500/30 hover:border-blue-400/50"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.4)] hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;