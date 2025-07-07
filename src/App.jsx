import { useState, useEffect } from 'react';

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar activeSection={activeSection} onSectionClick={scrollToSection}/>
      <HeroSection onSectionClick={scrollToSection}/>
      <ProjectsSection isVisible={isVisible.Projects} />
      <SkillsSection isVisible={isVisible.Skills} />
      <EducationSection isVisible={isVisible.Education} />
      <ContactSection isVisible={isVisible.Contact} />
      <Footer/>
    </div>
  );
}