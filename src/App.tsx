import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/navbar';
import HeroSection from './components/Herosection/herosection';
import ProjectsSection from './components/Projectsction/project';
import SkillsSection from './components/Skillsection/skills';
import EducationSection from './components/Educationsection/education';
import ContactSection from './components/Contactsection/contact';
import BlogSection from './components/Blogsection/blog';
import Footer from './components/Footer/footer';
import ChatBot from './components/ChatBot/chatbot';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#030712] text-white relative">
      <CustomCursor />
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* fine grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:44px_44px]" />
        {/* radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.08),transparent)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <ScrollToTop />

        <main className="flex-grow">
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
              <Route
                path="/blogs"
                element={
                  <PageTransition>
                    <BlogSection />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <ChatBot />
      </div>
    </div>
  );
}
