import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Option 1: Using Formspree (Replace YOUR_FORM_ID with your actual Formspree form ID)
      const response = await fetch('https://formspree.io/f/mrelaakz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try emailing me directly at ajaykushwahaa.aj@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing research opportunities, HealthTech collaborations, 
            or potential roles in biomedical science and healthcare innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Connect With Me
              </h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:ajaykushwahaa.aj@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-5 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:from-blue-100 hover:to-blue-50 transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 shadow-md hover:shadow-xl group"
                  aria-label="Send Email"
                >
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-1">Email</p>
                    <p className="text-gray-900 font-semibold text-lg">Send me an email</p>
                    <p className="text-gray-500 text-sm mt-1">I'll respond within 24 hours</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/ajay-kushwaha-aj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-5 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:from-blue-100 hover:to-blue-50 transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 shadow-md hover:shadow-xl group"
                  aria-label="LinkedIn Profile"
                >
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                    <Linkedin className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-1">LinkedIn</p>
                    <p className="text-gray-900 font-semibold text-lg">Connect professionally</p>
                    <p className="text-gray-500 text-sm mt-1">Let's build our network</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://github.com/ajay-kushwaha-aj"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-5 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:from-gray-100 hover:to-gray-50 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl group"
                  aria-label="GitHub Profile"
                >
                  <div className="p-4 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                    <Github className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-1">GitHub</p>
                    <p className="text-gray-900 font-semibold text-lg">View my projects</p>
                    <p className="text-gray-500 text-sm mt-1">Check out my code</p>
                  </div>
                </motion.a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-white hover:border-gray-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-white hover:border-gray-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all resize-none bg-white hover:border-gray-300"
                    placeholder="Your message..."
                  />
                </div>
                
                {status.message && (
                  <div className={`flex items-start gap-3 p-4 rounded-xl ${
                    status.type === 'success' 
                      ? 'bg-green-50 border-2 border-green-200 text-green-800' 
                      : 'bg-red-50 border-2 border-red-200 text-red-800'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle className="flex-shrink-0 mt-0.5" size={20} />
                    ) : (
                      <AlertCircle className="flex-shrink-0 mt-0.5" size={20} />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:transform-none"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
