import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { sendContactMessage } from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendContactMessage(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@kishorkumar',
      href: personalInfo.github
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Kishor Kumar',
      href: personalInfo.linkedin
    },
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    }
  ];

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
            <span className="text-sm text-neon-blue font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400 flex items-center space-x-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:shadow-neon-blue transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again or email me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Links */}
            <div className="glass rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{link.label}</p>
                      <p className="text-white font-medium group-hover:text-neon-blue transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Location & Status */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Current Status</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-neon-blue" />
                  <span className="text-gray-300">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-green-500 rounded-full blur-sm"
                    />
                    <div className="relative w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-gray-300">{personalInfo.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
