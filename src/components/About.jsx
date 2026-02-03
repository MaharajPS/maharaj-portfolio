import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A results-driven and enthusiastic B.Tech candidate specializing in Artificial Intelligence and Data Science, with practical experience in software development, data visualization, and machine learning. Proven ability to work collaboratively on innovative projects and deliver effective, data-driven solutions.
            </p>
            
            <div className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
              <h4 className="text-xl font-bold mb-4 text-accent">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {['Tamil', 'English'].map((lang, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/20 text-primary rounded-full font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-primary">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 border-l-4 border-primary hover:border-accent transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <span className="text-primary font-semibold">{edu.year}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{edu.institution}</p>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {edu.score}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;