import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-secondary to-primary/20 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-8 border border-primary/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <FiMail className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-400">maharajpsd@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <FiPhone className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-gray-400">+91 80566 83899</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                  <FiMapPin className="text-2xl text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-gray-400">Vazhapadi, Salem, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-primary/30"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/maharaj-p-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
                >
                  <FiLinkedin className="text-2xl text-primary" />
                </a>
                <a
                  href="https://github.com/MaharajPS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
                >
                  <FiGithub className="text-2xl text-primary" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-8 border border-primary/30">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-primary hover:bg-indigo-700 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <FiMail /> Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;