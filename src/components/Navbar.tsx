'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled
          ? 'bg-white/80 shadow-lg border-b border-white/20'
          : 'bg-gradient-to-b from-slate-900/20 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
              }`}
            >
              <Building2 className="w-8 h-8" />
            </motion.div>
            <span className={`text-2xl font-black transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]'
            }`}>
              leadRecall
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`font-semibold transition-all duration-300 relative group text-sm tracking-wide ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] hover:text-blue-100'
                }`}
              >
                {item.label}
                <motion.span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-gradient-to-r from-blue-600 to-blue-400 w-0' : 'bg-gradient-to-r from-blue-300 to-blue-100 w-0'
                  }`}
                  layoutId="underline"
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  : 'text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] hover:text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white rounded-lg font-bold shadow-lg hover:shadow-2xl transition-all drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)] text-sm"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/30 shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="block text-gray-700 font-semibold hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-600 transition-colors"
                >
                  Sign In
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (navItems.length + 1) * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md"
                >
                  Get Started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
