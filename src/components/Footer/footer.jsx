import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-800 hover:text-white",
      description: "Check out my code"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-blue-600 hover:text-white",
      description: "Connect professionally"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      color: "hover:bg-sky-500 hover:text-white",
      description: "Follow my thoughts"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      color: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white",
      description: "See my visual journey"
    }
  ];

  const quickLinks = [
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
    { name: "Education", href: "#Education" },
    { name: "Contact", href: "#Contact" }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "your.email@gmail.com",
      href: "mailto:your.email@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Durgapur, West Bengal",
      href: "#"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Your Name</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A passionate developer creating digital experiences that make a difference. 
              Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-3 bg-gray-800/50 border border-gray-700 rounded-xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.name}
                >
                  {social.icon}
                  
                  {/* Tooltip */}
                  {hoveredSocial === index && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-gray-700">
                      {social.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
              <span>© 2025 Your Name. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-sm mr-2">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </footer>
  );
};

export default Footer;