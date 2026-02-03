import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });

  // ✅ Your Google Form ID
  const GOOGLE_FORM_ID = '1FAIpQLSedUf9dbq_0rbfkSg004aBzpjy__ElD_6LwADjPsWfdVuky9A';

  // ✅ Your field IDs (extracted from your URL)
  const FORM_FIELDS = {
    name: 'entry.228617226',    // Name field
    email: 'entry.187649481',   // Email field
    message: 'entry.787035842'  // Message field
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Prepare form data
      const formResponse = {
        [FORM_FIELDS.name]: formData.name,
        [FORM_FIELDS.email]: formData.email,
        [FORM_FIELDS.message]: formData.message
      };

      // Submit to Google Forms
      await fetch(
        `https://docs.google.com/forms/u/0/d/e/${GOOGLE_FORM_ID}/formResponse`,
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formResponse)
        }
      );

      // Success after delay (no-cors doesn't return response)
      setTimeout(() => {
        setStatus({
          type: 'success',
          message: '✅ Message sent successfully! Thank you for reaching out.'
        });
        setFormData({ name: '', email: '', message: '' });
      }, 1000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again later.'
      });
    }
  };

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
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-secondary border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                {/* Status Message */}
                {status.type && (
                  <div className={`p-3 rounded-lg text-sm font-medium ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : status.type === 'error'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : 'bg-primary/20 text-primary border border-primary/30'
                  }`}>
                    {status.message}
                  </div>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={`w-full px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 ${
                    status.type === 'loading'
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-primary hover:bg-indigo-700'
                  }`}
                >
                  {status.type === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiMail /> Send Message
                    </>
                  )}
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