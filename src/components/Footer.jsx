import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Ajay Kushwaha</h3>
            <p className="text-gray-400 text-sm">
              Biomedical Science Graduate | Research & HealthTech Developer
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="mailto:ajaykushwahaa.aj@gmail.com"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-kushwaha-aj/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/ajay-kushwaha-aj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ajay Kushwaha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
