import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, Calendar, MapPin, Award } from 'lucide-react';

const projectsData = [
  {
    title: 'RaktSetu',
    featured: true,
    description: 'National-level HealthTech initiative addressing critical challenges in blood donation and distribution systems. Developed as part of the National One Health Hackathon, this project reached the Grand Finale, demonstrating scalable solutions for improving healthcare accessibility and emergency response capabilities.',
    impact: 'Grand Finale Participant - National One Health Hackathon',
    date: 'November 20, 2025',
    venue: 'Bharat Mandapam, New Delhi',
    techStack: ['National Digital Blood Donation And Management System','HealthTech', 'Digital Health', 'Public Health Systems', 'Emergency Response'],
    links: {
      github: '#',
      demo: '#',
      docs: '#'
    }
  },
  {
    title: 'Biomedical Research Database',
    description: 'Comprehensive database system for managing biomedical research data, integrating clinical trial information, patient demographics, and research outcomes with advanced query capabilities.',
    techStack: ['Python', 'SQL', 'Data Management', 'Research Analytics'],
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'Clinical Data Analysis Platform',
    description: 'Statistical analysis platform for processing clinical trial data, generating automated reports, and visualizing complex biomedical datasets with emphasis on reproducibility and compliance.',
    techStack: ['R', 'Python', 'Statistical Analysis', 'Data Visualization'],
    links: {
      github: '#'
    }
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Real-time monitoring dashboard for healthcare metrics, patient flow analytics, and resource allocation optimization in clinical settings.',
    techStack: ['React', 'JavaScript', 'Data Visualization', 'Healthcare IT'],
    links: {
      github: '#',
      demo: '#'
    }
  }
];

const Projects = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Experience & Projects
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Key initiatives and technical projects demonstrating research capabilities, 
            problem-solving skills, and impact in biomedical science and HealthTech.
          </p>
          
          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-lg border-2 p-8 transition-all duration-300 ${
                  project.featured
                    ? 'border-accent-600 shadow-lg hover:shadow-xl bg-gradient-to-br from-accent-50/30 to-white'
                    : 'border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                }`}
              >
                {project.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="text-accent-700" size={20} />
                    <span className="text-accent-700 font-semibold text-sm uppercase tracking-wide">
                      Featured Project
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                {project.featured && (
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{project.venue}</span>
                    </div>
                  </div>
                )}
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {project.impact && (
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 mb-4">
                    <p className="text-accent-900 font-semibold">
                      {project.impact}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-accent-700 transition-colors"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-2 text-gray-700 hover:text-accent-700 transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      className="flex items-center gap-2 text-gray-700 hover:text-accent-700 transition-colors"
                      aria-label={`${project.title} Documentation`}
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Documentation</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
