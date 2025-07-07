import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Download, Menu, X, Code, Palette, Database, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Chatbot",
      description: "Intelligent customer service bot with natural language processing capabilities",
      tech: ["Python", "TensorFlow", "React", "Flask"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "E-Learning Platform",
      description: "Interactive online learning platform with video streaming and progress tracking",
      tech: ["Next.js", "AWS", "MongoDB", "Socket.io"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Finance Tracker",
      description: "Personal finance management app with budget planning and expense tracking",
      tech: ["React Native", "Firebase", "Chart.js"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    { icon: <Code size={40} />, title: "Frontend Development", desc: "Modern web applications using React, Vue, and Angular" },
    { icon: <Database size={40} />, title: "Backend Development", desc: "Scalable server-side solutions with Node.js and Python" },
    { icon: <Palette size={40} />, title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces and experiences" },
    { icon: <Globe size={40} />, title: "Full Stack Solutions", desc: "Complete web applications from concept to deployment" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Creating Digital Solutions That Matter
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  I'm a dedicated full-stack developer with 4+ years of experience building 
                  scalable web applications. My journey began with a curiosity about how 
                  things work, and it has evolved into a passion for creating meaningful 
                  digital experiences.
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date 
                  with the latest technologies. When I'm not coding, you'll find me 
                  contributing to open-source projects or mentoring aspiring developers.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full font-medium border border-gray-700 hover:bg-gray-700 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <h4 className="text-xl font-bold text-white mb-4">Experience</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h5 className="font-semibold text-white">Senior Developer</h5>
                      <p className="text-blue-400">Tech Company • 2022 - Present</p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h5 className="font-semibold text-white">Full Stack Developer</h5>
                      <p className="text-gray-400">Startup Inc • 2020 - 2022</p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h5 className="font-semibold text-white">Frontend Developer</h5>
                      <p className="text-gray-400">Agency • 2019 - 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What I Do</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className={`bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:transform hover:-translate-y-2 group ${
                    isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-blue-400 mb-4 flex justify-center group-hover:text-blue-300 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className={`bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group ${
                    isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="text-white text-center relative z-10">
                      <div className="text-6xl mb-4">💻</div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
                        <Github size={16} />
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Ready to start your project?</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  I'm always excited to work on new projects and bring innovative ideas to life. 
                  Let's discuss how we can create something amazing together.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-300">john.dev@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <button className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 text-gray-300 hover:text-white">
                    <Github size={20} />
                  </button>
                  <button className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 text-gray-300 hover:text-white">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 text-gray-300 hover:text-white">
                    <Twitter size={20} />
                  </button>
                </div>
              </div>
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 John Developer. Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;