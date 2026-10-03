import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiNodedotjs, 
  SiExpress,
  SiHtml5,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiBlender,
  SiUnity
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { Server, Key, Shield, Link2 } from 'lucide-react';
import { skills } from '../data/portfolio';

// Icon mapping for each technology
const techIcons = {
  // Languages
  'Java': FaJava,
  'Python': SiPython,
  'JavaScript': SiJavascript,
  
  // Web Technologies
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'HTML': SiHtml5,
  'CSS': FaCss3Alt,
  
  // Databases & Tools
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Blender': SiBlender,
  'Unity': SiUnity,
  
  // Backend & Development (concept icons)
  'RESTful APIs': Server,
  'JWT': Key,
  'Authentication': Shield,
  'API Integration': Link2
};

// Color schemes for each technology
const techColors = {
  'Java': '#007396',
  'Python': '#3776AB',
  'JavaScript': '#F7DF1E',
  'React.js': '#61DAFB',
  'Node.js': '#339933',
  'Express.js': '#000000',
  'HTML': '#E34F26',
  'CSS': '#1572B6',
  'PostgreSQL': '#4169E1',
  'MySQL': '#4479A1',
  'Git': '#F05032',
  'GitHub': '#181717',
  'Blender': '#F5792A',
  'Unity': '#000000',
  'RESTful APIs': '#00D9FF',
  'JWT': '#000000',
  'Authentication': '#00F0FF',
  'API Integration': '#B030FF'
};

function SkillCard({ skill, index }) {
  const Icon = techIcons[skill.name];
  const color = techColors[skill.name] || '#00f0ff';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass rounded-xl p-4 hover:shadow-neon-blue transition-all duration-300 group hover:scale-105 hover:-translate-y-1"
    >
      <div className="flex items-center space-x-3">
        {Icon && (
          <div 
            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${color}15, ${color}05)`
            }}
          >
            <Icon 
              className="w-6 h-6 group-hover:scale-110 transition-transform"
              style={{ color: color === '#000000' ? '#00f0ff' : color }}
            />
          </div>
        )}
        <span className="text-white font-medium group-hover:text-neon-blue transition-colors text-sm">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

function SkillCategory({ categoryName, categorySkills, index }) {
  const categoryTitles = {
    languages: 'Languages',
    webTechnologies: 'Web Technologies',
    databaseTools: 'Databases & Tools',
    backendDevelopment: 'Backend & Development'
  };

  const categoryIcons = {
    languages: '💻',
    webTechnologies: '🌐',
    databaseTools: '🗄️',
    backendDevelopment: '⚙️'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="text-2xl">{categoryIcons[categoryName]}</div>
        <h3 className="text-xl font-bold text-white">{categoryTitles[categoryName]}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {categorySkills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
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
            <span className="text-sm text-neon-blue font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <SkillCategory
              key={category}
              categoryName={category}
              categorySkills={categorySkills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
