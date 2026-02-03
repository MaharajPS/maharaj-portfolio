import React from 'react';
import { motion } from 'framer-motion';
import { experience, certifications } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>
            
            <div className="relative pl-6 border-l-2 border-primary/30">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="mb-10 relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 w-3 h-3 bg-primary rounded-full border-4 border-secondary top-2 group-hover:scale-125 transition-transform"></div>
                  
                  <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <span className="text-primary font-semibold text-sm">{exp.period}</span>
                    </div>
                    <p className="text-accent font-bold mb-3">{exp.company}</p>
                    
                    <ul className="space-y-2 text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Certifications</h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20 hover:border-accent transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-certificate text-primary text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{cert}</h4>
                      <p className="text-gray-400 text-sm">NPTEL Certification</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;