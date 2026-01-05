'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import SectionBackground from '@/components/ui/SectionBackground';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Coming Soon...';

  useEffect(() => {
    if (isInView) {
      let index = 0;
      let isPaused = false;

      const timer = setInterval(() => {
        if (isPaused) return;

        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          // Pause at the end before resetting
          isPaused = true;
          setTimeout(() => {
            setDisplayText('');
            index = 0;
            isPaused = false;
          }, 2000);
        }
      }, 150);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  /* Commented out projects list - to be restored later
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features user auth, payments, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      gradient: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with Next.js and TypeScript. Real-time updates with Socket.io.',
      tech: ['Next.js', 'TypeScript', 'Socket.io', 'Prisma'],
      github: '#',
      live: '#',
      gradient: 'from-green-500 to-teal-600',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media with data visualization and performance tracking.',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
      gradient: 'from-pink-500 to-rose-600',
      featured: false
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather app with location-based forecasts and interactive maps.',
      tech: ['React Native', 'API', 'Maps'],
      github: '#',
      live: '#',
      gradient: 'from-cyan-500 to-blue-600',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio with modern animations and optimized performance.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind'],
      github: '#',
      live: '#',
      gradient: 'from-purple-500 to-indigo-600',
      featured: true
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat with rooms, file sharing, and emoji reactions.',
      tech: ['Socket.io', 'React', 'Node.js', 'Redis'],
      github: '#',
      live: '#',
      gradient: 'from-orange-500 to-red-600',
      featured: false
    },
  ];
  */

  return (
    <section id="projects" className="section-spacing section-gradient relative overflow-hidden" ref={ref}>
      <SectionBackground particleCount={12} variant="subtle" />

      <div className="site-container relative z-10">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle px-2">
            Recent projects showcasing my skills and passion for web development.
          </p>
        </motion.div>

        {/* Coming Soon Placeholder */}
        <motion.div
          className="flex flex-col items-center justify-center py-20 sm:py-28 lg:py-32"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="p-6 sm:p-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-8 border border-cyan-500/30"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
          </motion.div>

          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem]">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                className="text-cyan-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </h3>
            <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto px-4">
              Exciting projects are in the works. Stay tuned for updates!
            </p>
          </div>

          <motion.div
            className="flex gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Commented out projects grid - to be restored later
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="premium-card group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-xs font-semibold">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="hidden sm:inline">Featured</span>
                  </div>
                </div>
              )}

              <div className={`h-32 sm:h-36 lg:h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                
                <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <motion.a
                    href={project.github}
                    className="p-2.5 sm:p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="p-2.5 sm:p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.a>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 sm:py-1.5 bg-gray-700/50 text-cyan-400 text-xs rounded-md sm:rounded-lg border border-gray-600/50 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="ghost" size="sm" className="w-full text-xs sm:text-sm">
                  View Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default Projects;
