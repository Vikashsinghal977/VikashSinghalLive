'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionBackground from '@/components/ui/SectionBackground';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: 'Next.js', level: 90, color: 'from-gray-400 to-gray-600' },
    { name: 'React.js', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Express.js', level: 88, color: 'from-yellow-400 to-yellow-600' },
    { name: 'MongoDB', level: 82, color: 'from-green-500 to-green-700' },
    { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
    { name: 'Tailwind CSS', level: 93, color: 'from-cyan-400 to-cyan-600' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-500 to-yellow-700' },
  ];

  return (
    <section id="skills" className="section-spacing section-gradient-alt relative overflow-hidden" ref={ref}>
      <SectionBackground particleCount={10} variant="default" />
      
      <div className="site-container relative z-10">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle px-2">
            Proficient in modern web technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="premium-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-cyan-400 font-bold text-xs sm:text-sm">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700/50 rounded-full h-2 sm:h-2.5 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.08, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
