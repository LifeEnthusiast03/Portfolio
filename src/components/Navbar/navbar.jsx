import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Navbar Component
function Navbar({ activeSection, onSectionClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSectionClick = (sectionId) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('Home');
      const heroHeight = heroSection ? heroSection.offsetHeight : 800;
      
      // Check if user has scrolled past the hero section
      setIsScrolled(scrollY > heroHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
      isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    } ${isScrolled ? 'scale-90' : 'scale-100'}`}>
      <div className={`bg-black/80 backdrop-blur-lg border border-gray-700/50 rounded-full shadow-2xl transition-all duration-500 ease-out ${
        isScrolled ? 'px-4 py-2' : 'px-6 py-3'
      }`}>
        <div className="flex justify-between items-center">

          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'Projects', 'Skills', 'Education', 'Contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`capitalize transition-all duration-300 font-medium rounded-full ${
                  isScrolled ? 'px-2 py-1 text-sm' : 'px-3 py-1 text-base'
                } ${
                  activeSection === section 
                    ? 'text-blue-400 bg-blue-400/10' 
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-white hover:text-blue-400 transition-all duration-300 ${
              isScrolled ? 'p-1.5' : 'p-2'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={isScrolled ? 18 : 20} /> : <Menu size={isScrolled ? 18 : 20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden mt-2 bg-black/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isScrolled ? 'scale-90' : 'scale-100'
        }`}>
          <div className="px-4 py-3 space-y-1">
            {['Home', 'Projects', 'Skills', 'Education', 'Contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`block w-full text-left rounded-lg capitalize transition-all duration-200 ${
                  isScrolled ? 'px-2 py-1.5 text-sm' : 'px-3 py-2 text-base'
                } ${
                  activeSection === section
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;