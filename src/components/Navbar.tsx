'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            VS
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="relative px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm rounded-lg hover:bg-white/5 block"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -1 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-white/5"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav className="py-3 sm:py-4 border-t border-gray-800/50">
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="block px-3 sm:px-4 py-2.5 sm:py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200 font-medium text-sm sm:text-base rounded-lg"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: isOpen ? 1 : 0, 
                      x: isOpen ? 0 : -10 
                    }}
                    transition={{ delay: isOpen ? index * 0.05 : 0, duration: 0.2 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
