import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'AI/ML', 'Computer Vision', 'Web Development'];
//   const filteredProjects = filter === 'all' 
//     ? projects 
//     : projects.filter(p => p.category === filter);

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                filter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-secondary/50 text-gray-300 hover:bg-primary/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)' }}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/30"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.award && (
                  <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    🏆
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                
                {project.award && (
                  <p className="text-accent text-sm font-semibold mb-3">{project.award}</p>
                )}
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary hover:bg-indigo-700 text-white rounded-lg font-medium text-center transition-colors text-sm"
                  >
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                  <button className="px-4 py-2 bg-secondary hover:bg-gray-800 text-white rounded-lg font-medium transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;