import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code, Wrench, FlaskConical, Users } from 'lucide-react';

const skillsData = [
  {
    category: 'Technical Skills',
    icon: Code,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
    skills: [
      'Python Programming',
      'JavaScript/React',
      'Data Analysis & Visualization',
      'Statistical Computing (R)',
      'SQL & Database Management',
      'Web Development (HTML/CSS)',
      'API Development & Integration',
      'Version Control (Git)'
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: Wrench,
    color: 'from-cyan-500 to-teal-600',
    bgColor: 'from-cyan-50 to-teal-50',
    skills: [
      'Laboratory Information Systems',
      'Electronic Health Records (EHR)',
      'Bioinformatics Software',
      'SPSS & GraphPad Prism',
      'Microsoft Office Suite',
      'Jupyter Notebooks',
      'Docker & Containerization',
      'Cloud Platforms (AWS/Azure)'
    ]
  },
  {
    category: 'Research & Scientific Skills',
    icon: FlaskConical,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'from-purple-50 to-violet-50',
    skills: [
      'Research Design & Methodology',
      'Literature Review & Analysis',
      'Clinical Trial Protocol Development',
      'Data Collection & Management',
      'Statistical Analysis',
      'Scientific Writing',
      'Laboratory Techniques',
      'Quality Control & Compliance'
    ]
  },
  {
    category: 'Professional Skills',
    icon: Users,
    color: 'from-emerald-500 to-green-600',
    bgColor: 'from-emerald-50 to-green-50',
    skills: [
      'Project Management',
      'Team Collaboration',
      'Problem Solving',
      'Critical Thinking',
      'Communication & Presentation',
      'Stakeholder Engagement',
      'Adaptability',
      'Attention to Detail'
    ]
  }
];

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-16 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${category.bgColor} p-8 rounded-2xl border-2 border-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-gray-700 text-sm py-2 px-3 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100/50 hover:bg-white hover:shadow-md transition-all duration-200"
                      >
                        {skill}
                      </div>
                    ))}
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

export default Skills;
