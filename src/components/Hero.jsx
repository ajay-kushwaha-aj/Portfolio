import { motion } from 'framer-motion';
import { Download, Mail, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    // Link to resume PDF in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ajay_Kushwaha_Resume.pdf';
    link.click();
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-blue-100/40 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 relative"
          >
            <div className="relative">
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 to-cyan-400 animate-pulse opacity-20 blur-xl"></div>
              
              {/* Profile image container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-accent-100 to-cyan-100">
                <img
                  src="/profile.jpg"
                  alt="Ajay Kushwaha"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist - show initials
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-5xl font-bold text-accent-700 bg-gradient-to-br from-accent-100 to-cyan-100">AK</div>';
                  }}
                />
              </div>
              
              {/* Decorative badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-accent-600 to-cyan-600 text-white p-2 rounded-full shadow-lg">
                <Sparkles size={20} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-accent-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Ajay Kushwaha
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-6 font-medium"
          >
            Biomedical Science Graduate | Research & HealthTech Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Bridging biomedical research and technology to develop innovative healthcare solutions 
            with a focus on scalable impact and evidence-based outcomes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Download Resume"
            >
              <Download size={20} />
              Download Resume
            </button>
            
            <button
              onClick={handleContact}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-200 border-2 border-gray-200 hover:border-accent-300 shadow-md hover:shadow-lg transform hover:scale-105"
              aria-label="Contact Me"
            >
              <Mail size={20} />
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
