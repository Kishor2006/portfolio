import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Kishor <span className="gradient-text">Kumar</span>
              </h3>
              <p className="text-gray-400">{personalInfo.role}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern web applications with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-neon-blue transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Kishor Kumar. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-neon-pink fill-neon-pink animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
