import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Trophy, Target, Award, Star } from 'lucide-react';

const achievementsData = [
  {
    icon: Trophy,
    title: 'National One Health Hackathon',
    description: 'Grand Finale participant in prestigious national-level competition, presenting RaktSetu - a comprehensive HealthTech solution addressing blood donation challenges.',
    year: '2025',
    highlight: true,
    image: '/achievements/hackathon.jpg',
    color: 'from-amber-500 to-orange-600'
  },
  {
    icon: Target,
    title: 'Research Publication',
    description: 'Contributed to biomedical research projects with focus on clinical applications and evidence-based methodology.',
    year: '2024',
    highlight: false,
    image: '/achievements/research.jpg',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Recognition for outstanding performance in biomedical sciences curriculum and laboratory coursework.',
    year: '2024',
    highlight: false,
    image: '/achievements/academic.jpg',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Star,
    title: 'HealthTech Innovation',
    description: 'Developed multiple technology-driven solutions aimed at improving healthcare delivery and patient outcomes.',
    year: '2026',
    highlight: false,
    image: '/achievements/innovation.jpg',
    color: 'from-purple-500 to-violet-600'
  }
];

const Achievements = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="achievements" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Achievements & Highlights
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Recognition and milestones demonstrating commitment to excellence in 
            biomedical research and HealthTech innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievementsData.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    achievement.highlight
                      ? 'shadow-2xl hover:shadow-3xl'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback gradient if image doesn't exist
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${achievement.color}"></div>`;
                      }}
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 ${
                      achievement.highlight 
                        ? 'bg-gradient-to-br from-amber-900/85 via-orange-900/85 to-amber-900/85' 
                        : 'bg-gradient-to-br from-gray-900/80 via-gray-900/75 to-gray-900/80'
                    } group-hover:opacity-90 transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${
                        achievement.highlight 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : 'bg-white/10 backdrop-blur-sm'
                      } shadow-lg`}>
                        <IconComponent size={32} />
                      </div>
                      <span className={`text-sm font-bold px-4 py-2 rounded-full ${
                        achievement.highlight 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : 'bg-white/10 backdrop-blur-sm'
                      }`}>
                        {achievement.year}
                      </span>
                    </div>
                    
                    {achievement.highlight && (
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex-1 h-px bg-white/30"></div>
                        <span className="text-amber-200 font-bold text-xs uppercase tracking-wider">
                          Featured Achievement
                        </span>
                        <div className="flex-1 h-px bg-white/30"></div>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-3">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${
                      achievement.highlight ? 'from-white/10' : 'from-white/5'
                    } to-transparent rounded-tl-full`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
