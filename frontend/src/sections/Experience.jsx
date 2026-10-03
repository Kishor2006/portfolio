import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Trophy } from 'lucide-react';
import { experience, certifications, achievements } from '../data/portfolio';

function TimelineItem({ item, index, isLast }) {
  const Icon = item.type === 'Education' ? GraduationCap : item.type === 'Training' ? Briefcase : Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start space-x-4 lg:space-x-8"
    >
      {/* Timeline Dot and Line */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="w-4 h-4 rounded-full bg-neon-blue relative z-10"
          >
            <div className="absolute inset-0 rounded-full bg-neon-blue animate-ping opacity-75" />
          </motion.div>
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-neon-blue to-transparent mt-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass rounded-2xl p-6 hover:shadow-neon-blue transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                <p className="text-neon-blue font-medium">{item.company}</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-sm text-neon-blue whitespace-nowrap">
              {item.type}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Responsibilities */}
          {item.responsibilities && item.responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-400">
                    <span className="text-neon-blue mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {item.technologies && item.technologies.length > 0 && (
            <div>
              <h4 className="text-white font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 mb-4">
            <span className="text-sm text-neon-blue font-medium">Professional Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background and training in software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-8 h-8 text-neon-blue" />
            <h3 className="text-2xl font-bold text-white">
              Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-neon-blue transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                    <p className="text-neon-blue text-sm font-medium mb-2">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                    {cert.description && (
                      <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Trophy className="w-8 h-8 text-neon-purple" />
            <h3 className="text-2xl font-bold text-white">
              Achievements
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-neon-purple transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-6 h-6 text-neon-purple" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                    <p className="text-neon-purple text-sm font-medium mb-2">{achievement.organization}</p>
                    <p className="text-gray-400 text-sm mb-2">{achievement.date}</p>
                    {achievement.description && (
                      <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
