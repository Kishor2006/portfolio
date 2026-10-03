import { motion } from 'framer-motion';

// Static Hero Visual Component - Same Height as AI Assistant
export default function HeroVisual() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full glass rounded-3xl border border-white/10 p-5 flex items-center justify-center"
      style={{
        background: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px 0 rgba(0, 212, 255, 0.1)',
      }}
    >
      {/* Main Hero Image - COMPLETE, NO CROPPING */}
      <img
        src="/hero-developer.png"
        alt="Full Stack Developer Workspace"
        className="w-full h-full object-contain rounded-2xl"
        onError={(e) => {
          // Fallback to placeholder if image not found
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      
      {/* Fallback placeholder (shows if image not found) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-2xl hidden items-center justify-center"
        style={{ display: 'none' }}
      >
        <div className="text-center space-y-4 p-8">
          <div className="text-6xl mb-4">💻</div>
          <p className="text-cyan-400 text-lg font-semibold">Full Stack Developer Workspace</p>
          <p className="text-gray-400 text-sm max-w-md">
            Image not found. Please add:<br/>
            <code className="text-cyan-300 text-xs">frontend/public/hero-developer.png</code>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
