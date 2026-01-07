'use client';

import { motion } from 'framer-motion';
import { Building2, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-slate-900 text-gray-300 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 20, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Building2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">leadRecall</h3>
            </div>
            <p className="text-gray-400 mb-6 hover:text-gray-300 transition-colors">
              Empowering professional networking at trade shows and events worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" }
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4 hover:text-blue-400 transition-colors">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Features", "Pricing", "Blog", "Careers"].map((link) => (
                <motion.li key={link} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4 hover:text-blue-400 transition-colors">Resources</h4>
            <ul className="space-y-3">
              {["Help Center", "Documentation", "API Reference", "Tutorials", "Community"].map((link) => (
                <motion.li key={link} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4 hover:text-blue-400 transition-colors">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@leadRecall.com" className="hover:underline">
                  info@leadRecall.com
                </a>
              </li>
              <li className="flex items-start gap-3 group hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3 group hover:text-blue-400 transition-colors">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hover:underline">123 Business Ave<br />New York, NY 10001</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors">
            © {currentYear} leadRecall. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ textDecoration: "underline", color: "#60a5fa" }}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
