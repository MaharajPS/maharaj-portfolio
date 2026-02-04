import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400 mb-2">
            Developed by <span className="text-primary font-bold">Maharaj P S</span>
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Maharaj P S. All rights reserved.
          </p>
          
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://linkedin.com/in/maharaj-p-s" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com/MaharajPS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="mailto:maharajpsd@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;