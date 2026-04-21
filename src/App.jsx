import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/navbar';
import HeroSection from './components/Herosection/herosection';
import ProjectsSection from './components/Projectsction/project';
import SkillsSection from './components/Skillsection/skills';
import EducationSection from './components/Educationsection/education';
import ContactSection from './components/Contactsection/contact';
import Footer from './components/Footer/footer';
import ChatBot from './components/ChatBot/chatbot';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HeroSection />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <ProjectsSection />
              </PageTransition>
            }
          />
          <Route
            path="/skills"
            element={
              <PageTransition>
                <SkillsSection />
              </PageTransition>
            }
          />
          <Route
            path="/education"
            element={
              <PageTransition>
                <EducationSection />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactSection />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
      <ChatBot />
    </div>
  );
}