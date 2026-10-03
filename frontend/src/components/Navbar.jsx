import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleLetsTalk = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass glow-blue py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-neon-purple rounded-full blur-md opacity-50"
              />
              <div className="relative w-2 h-2 bg-neon-purple rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
                Kishor <span className="gradient-text">Kumar</span>
              </h1>
              <p className="text-xs text-gray-400">Full Stack Developer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  link.name === 'Home'
                    ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30 glow-blue'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass glass-hover"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-neon-blue" />
              ) : (
                <Moon className="w-5 h-5 text-neon-purple" />
              )}
            </button>

            {/* Let's Talk Button - Desktop */}
            <button
              onClick={handleLetsTalk}
              className="hidden lg:flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:shadow-neon-blue transition-all duration-300 hover:scale-105"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full glass glass-hover"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10 mt-3"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    link.name === 'Home'
                      ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handleLetsTalk();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
