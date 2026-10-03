import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import StatsBar from './sections/StatsBar';
import FeaturedProjects from './sections/FeaturedProjects';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
