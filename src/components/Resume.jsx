import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ajay_Kushwaha_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex p-4 bg-accent-50 rounded-full mb-6">
            <FileText className="text-accent-700" size={48} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resume
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Download my comprehensive resume for detailed information about my education, 
            experience, skills, and achievements in biomedical science and HealthTech development.
          </p>
          
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-3 bg-accent-700 hover:bg-accent-800 text-white px-10 py-5 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            aria-label="Download Full Resume"
          >
            <Download size={24} />
            Download Resume (PDF)
          </button>
          
          <p className="text-sm text-gray-500 mt-6">
            Updated regularly with latest projects and achievements
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
