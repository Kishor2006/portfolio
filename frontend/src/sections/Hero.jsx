import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroVisual from '../components/HeroVisual';
import AIAssistant from '../components/AIAssistant';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open(personalInfo.resume, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-12 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.4fr_1fr] gap-6 items-start">
          {/* Left: Premium Glassmorphism Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
            style={{ height: '550px' }}
          >
            <HeroVisual />
          </motion.div>

          {/* Center: Hero Content */}
          <div className="flex items-center" style={{ minHeight: '550px' }}>
            <div className="space-y-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10">
                  <span className="text-sm text-gray-300">{personalInfo.tagline}</span>
                </div>

                {/* Main Heading - Kishor Kumar on ONE LINE */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text text-shadow whitespace-nowrap inline-block">
                    {personalInfo.name}
                  </span>
                </h1>

                {/* Role */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
                  {personalInfo.role}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {personalInfo.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleViewProjects}
                    className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium shadow-neon-blue hover:shadow-neon-purple transition-all duration-300"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownloadResume}
                    className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass glass-hover border border-white/10 text-white font-medium"
                  >
                    <span>Download Resume</span>
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: AI Assistant - SAME HEIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
            style={{ height: '550px' }}
          >
            <AIAssistant />
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
    </section>
  );
}
