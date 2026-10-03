import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';

// Import project images
import driveHubImage from '../assets/projects/drivehub.jpg';
import productLifecycleImage from '../assets/projects/product-lifecycle.jpg';
import helpdeskImage from '../assets/projects/helpdesk.jpg';
import keyloggerDetectionImage from '../assets/projects/keylogger-detection.jpg';

// Map project IDs to images
const projectImages = {
  1: driveHubImage,
  2: productLifecycleImage,
  3: helpdeskImage,
  4: keyloggerDetectionImage,
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass rounded-2xl overflow-hidden hover:shadow-neon-blue transition-all duration-500 hover:-translate-y-2"
    >
      {/* Arrow Button */}
      <Link
        to={`/project/${project.id}`}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-900/80 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neon-blue/20 hover:border-neon-blue/50"
      >
        <ArrowUpRight className="w-5 h-5 text-neon-blue" />
      </Link>

      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900">
        {/* Real Project Image */}
        <img 
          src={projectImages[project.id]} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            // Fallback to gradient if image fails to load
            e.target.style.display = 'none';
          }}
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-dark-900/20" />
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-blue rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-neon-purple rounded-full animate-ping animation-delay-500" />
          <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-neon-cyan rounded-full animate-ping animation-delay-1000" />
        </div>

        {/* Hover overlay with glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all duration-500" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/30 text-sm text-gray-300 hover:text-neon-blue transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 hover:from-neon-blue/30 hover:to-neon-purple/30 border border-neon-blue/30 text-sm text-neon-blue transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/5 to-neon-purple/5" />
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20">
                <span className="text-sm text-neon-blue font-medium">Real World Projects</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Featured <span className="gradient-text">Projects</span>
              </h2>

              {/* Description */}
              <p className="text-gray-400 max-w-2xl">
                Here are some of my recent projects. Each project is built with real-world use cases and modern technologies.
              </p>
            </div>

            {/* View All Button */}
            <motion.a
              href="https://github.com/Kishor2006"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 rounded-full glass glass-hover border border-white/10 text-white font-medium self-start lg:self-center"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
