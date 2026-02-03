import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Proficient in a wide range of programming languages, tools, and frameworks for AI/ML development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary/50 backdrop-blur-sm rounded-xl p-8 border border-primary/30"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
              <i className="fas fa-code text-accent"></i>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.programming.map((skill, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-medium transition-colors cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/50 backdrop-blur-sm rounded-xl p-8 border border-primary/30"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
              <i className="fas fa-tools text-accent"></i>
              Tools & Frameworks
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-medium transition-colors cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Core Concepts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-secondary/50 backdrop-blur-sm rounded-xl p-8 border border-primary/30"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
              <i className="fas fa-brain text-accent"></i>
              Core Concepts
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.concepts.map((skill, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={skillVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg font-medium transition-colors cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;