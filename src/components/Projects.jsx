import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { projects } from '../data';

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer w-10 h-10 rounded-full bg-primary/30 hover:bg-primary/50 flex items-center justify-center transition-colors shadow-lg"
    onClick={onClick}
  >
    <FiChevronRight className="text-white text-xl" />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer w-10 h-10 rounded-full bg-primary/30 hover:bg-primary/50 flex items-center justify-center transition-colors shadow-lg"
    onClick={onClick}
  >
    <FiChevronLeft className="text-white text-xl" />
  </div>
);

// Project Detail Modal
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-secondary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-primary/30">
            <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
            >
              <FiX className="text-primary text-xl" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Image */}
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden border border-primary/30">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {project.award && (
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🏆 {project.award}
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xl font-bold mb-3 text-white">Description</h4>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xl font-bold mb-3 text-white">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-primary/20 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Section - ONLY show if available */}
            {project.testimonial && (
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/30 mt-6">
                <div className="flex items-start gap-4">
                  {/* Quote Icon */}
                  <div className="text-accent text-4xl flex-shrink-0">"</div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1">
                    <p className="text-gray-300 italic text-lg leading-relaxed mb-4 border-l-4 border-primary pl-4 py-2">
                      "{project.testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-3 mt-2">
                      {/* Author Avatar (optional) */}
                      {project.testimonial.image ? (
                        <img 
                          src={project.testimonial.image} 
                          alt={project.testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                          {project.testimonial.author.charAt(0)}
                        </div>
                      )}
                      
                      <div>
                        <div className="font-bold text-white">{project.testimonial.author}</div>
                        <div className="text-primary text-sm">
                          {project.testimonial.title} @ {project.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-primary/30">
              <a
                href={project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-primary hover:bg-indigo-700 text-white rounded-lg font-medium text-center transition-colors flex items-center justify-center gap-2"
              >
                <FiGithub /> View Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-secondary hover:bg-gray-800 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-primary/30"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto sliding enabled
    autoplaySpeed: 2000, // Change slide every 5 seconds
    pauseOnHover: true,
    afterChange: (current) => setActiveIndex(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div className="mt-6">
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`w-3 h-3 rounded-full transition-all ${
        i === activeIndex ? 'bg-primary w-6' : 'bg-primary/50'
      }`} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="bg-secondary/30 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A collection of innovative projects showcasing my expertise in AI, Machine Learning, and Software Development
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto relative">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/30 shadow-xl"
                >
                  {/* Project Image */}
                  <div className="relative h-72 md:h-96 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {project.award && (
                      <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        🏆 Winner
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openModal(project)}
                      className="px-8 py-3 bg-primary hover:bg-indigo-700 text-white rounded-lg font-bold transition-colors flex items-center justify-center mx-auto gap-2"
                    >
                      <FiExternalLink /> View Details
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Project Counter */}
        <div className="mt-6 text-center text-gray-400">
          <p className="text-sm">
            Project {activeIndex + 1} of {projects.length}
          </p>
        </div>

        {/* Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      </div>
    </section>
  );
};

export default Projects;