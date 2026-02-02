import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Microscope, Code, Heart } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-cyan-600 mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-center md:text-left">
                I am a Biomedical Science graduate with a strong foundation in research methodologies 
                and a passion for leveraging technology to solve critical healthcare challenges. My 
                academic training has equipped me with analytical rigor and scientific inquiry skills, 
                which I apply to develop practical, evidence-based solutions in the HealthTech domain.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-center md:text-left font-medium text-lg">
                My primary areas of interest include:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Microscope className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Research Excellence
                  </h3>
                  <p className="text-gray-600">
                    Conducting systematic investigations to advance biomedical knowledge and inform 
                    clinical practice through rigorous scientific methods.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-xl border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Code className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    HealthTech Innovation
                  </h3>
                  <p className="text-gray-600">
                    Developing technology-driven healthcare solutions that improve accessibility, 
                    efficiency, and patient outcomes at scale.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Heart className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Digital Health Systems
                  </h3>
                  <p className="text-gray-600">
                    Designing and implementing integrated digital platforms for healthcare delivery, 
                    data management, and clinical decision support.
                  </p>
                </motion.div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-center md:text-left">
                I am committed to contributing to initiatives that bridge the gap between scientific 
                research and practical healthcare applications, with a focus on creating measurable 
                impact in underserved communities and advancing public health outcomes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
