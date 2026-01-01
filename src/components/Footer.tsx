'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-5 sm:py-6 bg-black border-t border-gray-800/50">
      <div className="site-container">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Vikash Singhal. All Rights Reserved.
          </p>

          <div className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and coffee</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
