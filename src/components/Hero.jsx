import React from 'react';
import { FiMail, FiPhone, FiChevronDown,FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Info */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full mb-6 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              B.Tech AI & DS | Full Stack Developer
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-primary">Maharaj P S</span>
              <span className="text-accent">.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              A results-driven and enthusiastic B.Tech candidate specializing in Artificial Intelligence and Data Science, with practical experience in software development, data visualization, and machine learning.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-10"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary hover:bg-indigo-700 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <FiMail /> Contact Me
              </motion.button>
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-secondary hover:bg-gray-800 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                View Projects <FiChevronDown className="ml-1" />
              </motion.button>
                {/* ✅ NEW: Download Resume Button */}
                <motion.a
                  href="/maharaj_resume.pdf"
                  download="Maharaj_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-accent hover:bg-emerald-600 rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  <FiDownload /> Download Resume
                </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-6 text-gray-400 text-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <FiPhone /> +91 80566 83899
              </div>
              <div className="flex items-center gap-2">
                <FiMail /> maharajpsd@gmail.com
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Decorative Circles */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/20 rounded-full animate-pulse"></div>
              
              {/* Main Card with Profile Image */}
              <div className="relative bg-secondary/50 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-primary/30 shadow-2xl">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="relative inline-block mb-6">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-xl animate-pulse"></div>
                    
                    {/* Image Container */}
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
                      <img
                        src='/maharaj.jpeg'  // Path to your image in public folder
                        alt="Maharaj P S"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.target.onerror = null;
                          e.target.src = "https://ui-avatars.com/api/?name=Maharaj+P+S&background=6366f1&color=fff&size=200";
                        }}
                      />
                    </div>
                    
                    {/* Online Status Badge */}
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-secondary"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Maharaj P S</h3>
                  <p className="text-gray-400 mb-4">AI & Data Science Engineer</p>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <a href="https://linkedin.com/in/maharaj-p-s" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors">
                      <i className="fab fa-linkedin-in text-primary"></i>
                    </a>
                    <a href="https://github.com/MaharajPS" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors">
                      <i className="fab fa-github text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;