'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import SectionBackground from '@/components/ui/SectionBackground';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-xs font-semibold">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="hidden sm:inline">Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className={`h-32 sm:h-36 lg:h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                
                {/* Hover overlay */}
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

              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-md sm:rounded-lg border border-gray-600/50 font-medium"
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
      </div>
    </section>
  );
};

export default Projects;
