import { motion } from 'framer-motion';
import { Code2, Database, Server, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React and modern CSS frameworks.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Creating scalable server-side applications with Node.js, Express and RESTful APIs.'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Designing efficient database schemas with PostgreSQL and MongoDB for optimal performance.'
  },
  {
    icon: Sparkles,
    title: 'Problem Solving',
    description: 'Turning complex requirements into clean, maintainable code with attention to detail.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-20">
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
            <span className="text-sm text-neon-blue font-medium">Get to Know Me</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {personalInfo.description}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Kishor Kumar is a Computer Science and Engineering graduate and Full Stack Developer focused on building practical, user-focused software solutions. With a strong foundation in both frontend and backend technologies, he creates applications that solve real-world problems with clean code and intuitive user interfaces.
              </p>
              <p>
                He specializes in building full-stack applications using React.js, Node.js, Express.js, and PostgreSQL. His projects demonstrate practical problem-solving skills, from developing car rental booking systems to product lifecycle management platforms and AI-based security monitoring tools.
              </p>
              <p>
                With certifications in MERN Stack, Cloud Computing, SAP Analytics Cloud, and Ethical Hacking, along with strong proficiency in Java, Python, and JavaScript, he is passionate about learning new technologies and applying them to create innovative solutions.
              </p>
            </div>

            {/* Tech Stack Quick View */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-3">Primary Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'Java', 'Python', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 hover:shadow-neon-blue transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm currently {personalInfo.status.toLowerCase()} and available for freelance projects or full-time positions. 
            Let's connect and discuss how we can work together!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:shadow-neon-blue transition-all"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
