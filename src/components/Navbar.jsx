import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-bold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-primary">M</span>
            <span className="text-accent">A</span>
            <span className="text-primary">H</span>
            <span className="text-accent">A</span>
            <span className="text-primary">R</span>
            <span className="text-accent">A</span>
            <span className="text-primary">J</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-primary transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 bg-secondary/95 backdrop-blur-md rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary transition-colors font-medium text-left py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="hover:text-primary transition-colors font-medium text-left py-2"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-primary transition-colors font-medium text-left py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="hover:text-primary transition-colors font-medium text-left py-2"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary transition-colors font-medium text-left py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;