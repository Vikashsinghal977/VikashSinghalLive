'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer | MERN | Next.js | TypeScript';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="site-container w-full z-10">
        <div className="text-center px-2 sm:px-0 py-16 sm:py-20 md:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Name with Star Animation */}
            <div className="relative inline-block mb-4 sm:mb-6">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Vikash Singhal
                </span>
              </motion.h1>
              
              {/* Star Animation on the right */}
              <motion.div
                className="absolute -top-2 -right-6 sm:-top-3 sm:-right-8 md:-top-4 md:-right-10 text-cyan-400"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1, 1.1, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </motion.div>
              
              {/* Secondary sparkle */}
              <motion.div
                className="absolute -top-1 -right-3 sm:-top-1 sm:-right-4 md:-top-2 md:-right-5 text-purple-400"
                animate={{ 
                  rotate: [0, -20, 20, 0],
                  scale: [0.8, 1, 0.8],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </motion.div>
            </div>

            {/* Typing animation */}
            <motion.div
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 sm:mb-10 h-6 sm:h-7 md:h-8 lg:h-10 font-medium flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span className="truncate">{text}</span>
              <motion.span
                className="text-cyan-400 ml-1 flex-shrink-0"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <Button href="#projects" size="lg" variant="primary" className="w-full sm:w-[155px]">
              <Sparkles className="w-4 h-4" />
              View Projects
            </Button>
            
            <Button href="#contact" size="lg" variant="outline" className="w-full sm:w-[155px]">
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <span className="text-xs font-medium hidden sm:block">Scroll</span>
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative shapes - hidden on mobile */}
      <motion.div
        className="absolute top-20 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 border border-purple-500/20 rotate-45 hidden sm:block"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-24 sm:bottom-32 right-6 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full hidden sm:block"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Hero;
