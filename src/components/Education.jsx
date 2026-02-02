import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const educationData = [
  {
    degree: 'Senior Secondary Education (Class 6-12)',
    institution: 'Jawahar Navodaya Vidyalaya',
    location: 'Kushinagar, Uttar Pradesh',
    period: '2013 - 2020',
    description: 'Comprehensive secondary education with strong foundation in science subjects, developing analytical thinking and research aptitude.',
    highlights: [
      'Biology',
      'Physics',
      'Chemistry',
      'Hindi',
      'English'
    ],
    icon: School,
    iconColor: 'blue'
  },
  {
    degree: 'Bachelor of Science (Honors) in Biomedical Science',
    institution: 'Bhaskaracharya College of Applied Sciences',
    university: 'University of Delhi',
    period: '2023 - 2027',
    description: 'Research-focused curriculum covering molecular biology, genetics, pathology, pharmacology, and clinical laboratory techniques. Emphasis on scientific methodology, data analysis, and evidence-based practice.',
    highlights: [
      'Advanced Laboratory Techniques',
      'Clinical Research Methods',
      'Biomedical Data Analysis',
      'Healthcare Systems & Policy'
    ],
    icon: GraduationCap,
    iconColor: 'accent'
  }
];

const Education = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const iconBgColor = edu.iconColor === 'accent' ? 'bg-accent-50' : 'bg-blue-50';
              const iconTextColor = edu.iconColor === 'accent' ? 'text-accent-700' : 'text-blue-700';
              const dotColor = edu.iconColor === 'accent' ? 'bg-accent-600' : 'bg-blue-600';
              const bookIconColor = edu.iconColor === 'accent' ? 'text-accent-600' : 'text-blue-600';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`p-3 ${iconBgColor} rounded-lg`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.6,
                        delay: index * 0.2 + 0.2,
                        ease: [0.34, 1.56, 0.64, 1]
                      }}
                    >
                      <Icon className={iconTextColor} size={28} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6,
                          delay: index * 0.2 + 0.3,
                        }}
                      >
                        {edu.degree}
                      </motion.h3>
                      
                      <motion.div 
                        className="flex flex-col gap-1 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6,
                          delay: index * 0.2 + 0.4,
                        }}
                      >
                        <p className="text-gray-600 font-medium">
                          {edu.institution}
                        </p>
                        {edu.university && (
                          <p className="text-gray-500 text-sm">
                            {edu.university}
                          </p>
                        )}
                        {edu.location && (
                          <p className="text-gray-500 text-sm">
                            {edu.location}
                          </p>
                        )}
                        <p className="text-gray-500 font-medium mt-1">
                          {edu.period}
                        </p>
                      </motion.div>
                      
                      <motion.p 
                        className="text-gray-700 leading-relaxed mb-6"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ 
                          duration: 0.6,
                          delay: index * 0.2 + 0.5,
                        }}
                      >
                        {edu.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                          duration: 0.6,
                          delay: index * 0.2 + 0.6,
                        }}
                      >
                        <BookOpen className={`${bookIconColor} mt-1 flex-shrink-0`} size={20} />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {index === 0 ? 'Subjects' : 'Key Areas of Study'}
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {edu.highlights.map((highlight, hIndex) => (
                              <motion.div 
                                key={highlight} 
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ 
                                  duration: 0.4,
                                  delay: index * 0.2 + 0.7 + hIndex * 0.1,
                                }}
                              >
                                <div className={`w-1.5 h-1.5 ${dotColor} rounded-full`}></div>
                                <span className="text-gray-700 text-sm">
                                  {highlight}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
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

export default Education;
