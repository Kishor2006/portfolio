import { motion } from 'framer-motion';
import { Code2, GraduationCap, Layers, MapPin } from 'lucide-react';
import { stats } from '../data/portfolio';

const iconMap = {
  code: Code2,
  graduation: GraduationCap,
  layers: Layers,
  map: MapPin
};

export default function StatsBar() {
  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 lg:p-8 shadow-glass"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20 blur transition-opacity" />
                      <Icon className="w-7 h-7 text-neon-blue relative z-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>

                  {/* Separator - Hidden on mobile and last item */}
                  {index < stats.length - 1 && (
                    <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
