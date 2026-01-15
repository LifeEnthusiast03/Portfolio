import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/LifeEnthusiast03",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sougatasaha/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://instagram.com/pet_pawli_cious",
      color: "hover:text-pink-400"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "sahasougata@gmail.com",
      href: "mailto:sahasougata@gmail.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+91 6296824383",
      href: "tel:+91 6296824383"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Midnapore, West Bengal",
      href: "#"
    }
  ];



  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 backdrop-blur-xl">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Sougata Saha
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Full Stack Developer crafting digital experiences with passion and precision.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-white/5`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Projects", "Skills", "Education", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Contact
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="mr-2">
                      {info.icon}
                    </span>
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm flex items-center">
              <span>© 2025 Sougata Saha. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
              <span>and code</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;