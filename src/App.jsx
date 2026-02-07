import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

import Navbar from './components/Navbar/navbar'
import HeroSection from './components/Herosection/herosection';
import ProjectsSection from './components/Projectsction/project';
import SkillsSection from './components/Skillsection/skills';
import EducationSection from './components/Educationsection/education';
import ContactSection from './components/Contactsection/contact';
import Footer from './components/Footer/footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isVisible, setIsVisible] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setActiveSection('Home');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id); // Set active section based on visibility
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Back to top visibility handler
  useEffect(() => {
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', toggleBackToTop);
    return () => window.removeEventListener('scroll', toggleBackToTop);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar activeSection={activeSection} onSectionClick={scrollToSection}/>
      <HeroSection onSectionClick={scrollToSection}/>
      <ProjectsSection isVisible={isVisible.Projects} />
      <SkillsSection isVisible={isVisible.Skills} />
      <EducationSection isVisible={isVisible.Education} />
      <ContactSection isVisible={isVisible.Contact} />
      <Footer/>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-800 text-white p-3 rounded-full shadow-[0_8px_32px_0_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group backdrop-blur-xl border border-blue-500/30"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </div>
  );
}