'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Award, Coffee } from 'lucide-react';
import Button from '@/components/ui/Button';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { icon: Code, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Projects Completed', value: '25+' },
    { icon: Award, label: 'Technologies', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  ];

  return (
    <section id="about" className="section-spacing bg-gray-900/30" ref={ref}>
      <div className="site-container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle px-2">
            Passionate about creating innovative web solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              Passionate Full Stack Developer
            </h3>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              <p>
                I'm a dedicated Full Stack Developer with expertise in the MERN stack, Next.js, and TypeScript. 
                I love creating innovative web applications that solve real-world problems.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I bring ideas to life through 
                clean, efficient code and modern development practices.
              </p>
            </div>
            
            <div className="pt-2 sm:pt-4">
              <Button href="#contact" variant="primary" size="md" className="w-full sm:w-[155px]">
                Let's Work Together
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="premium-card p-4 sm:p-5 lg:p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-400 mb-2 sm:mb-3 mx-auto" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
