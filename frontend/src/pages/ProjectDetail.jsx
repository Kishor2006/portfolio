import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useEffect } from 'react';

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

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 lg:p-12 mb-8"
        >
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20">
              <span className="text-sm text-neon-blue font-medium">{project.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300">{project.subtitle}</p>

            {/* Long Description */}
            <p className="text-lg text-gray-400 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 rounded-full glass glass-hover border border-white/10 text-white font-medium"
              >
                <Github className="w-5 h-5" />
                <span>View Source</span>
              </a>
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:shadow-neon-blue transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-3xl overflow-hidden mb-8 h-[500px] relative"
        >
          <div className="w-full h-full relative">
            {/* Real Project Image */}
            <img 
              src={projectImages[project.id]} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient if image fails to load
                e.target.style.display = 'none';
              }}
            />
            
            {/* Dark overlay for content readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-dark-900/40" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5" />
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="gradient-text">Problem</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.problem}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="gradient-text">Solution</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass rounded-2xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture & Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="gradient-text">Architecture</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.architecture}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
