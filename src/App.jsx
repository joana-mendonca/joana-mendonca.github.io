import './App.css';
import React from 'react';
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="bg-img"></div>
      <div className="main">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
