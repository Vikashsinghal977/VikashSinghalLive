'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ],
      color: 'cyan'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects using MERN stack. Collaborated with design teams to create responsive and user-friendly interfaces.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced bug reports by 60%',
        'Improved code quality standards'
      ],
      color: 'purple'
    },
    {
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      location: 'San Francisco, CA',
      period: '2021 - 2022',
      description: 'Focused on creating engaging user interfaces with React and modern CSS frameworks. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Built responsive web applications',
        'Optimized loading times by 50%',
        'Implemented modern UI/UX patterns'
      ],
      color: 'blue'
    },
    {
      title: 'Junior Developer',
      company: 'Code Academy',
      location: 'Remote',
      period: '2020 - 2021',
      description: 'Started my journey as a developer, learning and contributing to various projects. Gained experience in JavaScript, React, and backend technologies.',
      achievements: [
        'Completed 10+ learning projects',
        'Contributed to open source',
        'Built strong foundation in web development'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500',
        bg: 'bg-cyan-500',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/30'
      },
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-500',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/30'
      },
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/30'
      },
      green: {
        border: 'border-green-500',
        bg: 'bg-green-500',
        text: 'text-green-400',
        glow: 'shadow-green-500/30'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="section-spacing bg-black" ref={ref}>
      <div className="site-container">
        <div className="content-container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Experience</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              My professional journey in software development, building innovative solutions and growing as a developer through diverse challenges and opportunities.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Enhanced timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-blue-500 rounded-full"></div>

            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const colorClasses = getColorClasses(exp.color);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Enhanced timeline dot */}
                    <motion.div
                      className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 ${colorClasses.bg} rounded-full border-4 border-gray-900 z-10 shadow-lg ${colorClasses.glow}`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3, type: "spring" }}
                      whileHover={{ scale: 1.3 }}
                    />

                    {/* Enhanced content card */}
                    <motion.div
                      className={`ml-16 md:ml-0 ${isEven ? 'md:mr-12 md:text-right' : 'md:ml-12'} md:w-5/12 premium-card p-6 lg:p-8 group`}
                      whileHover={{ 
                        y: -8, 
                        boxShadow: `0 25px 50px ${colorClasses.glow}`,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <Calendar className={`w-5 h-5 ${colorClasses.text}`} />
                        <span className={`text-base ${colorClasses.text} font-bold`}>
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>

                      <div className={`flex items-center gap-3 mb-6 ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="text-gray-200 font-semibold text-base lg:text-lg">{exp.company}</span>
                        <span className="text-gray-500">•</span>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-500 text-base">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed text-base lg:text-lg">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <div className={`flex items-center gap-2 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                          <Award className={`w-4 h-4 ${colorClasses.text}`} />
                          <h4 className="text-base font-bold text-gray-200">Key Achievements</h4>
                        </div>
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className={`flex items-center gap-3 ${isEven ? 'md:justify-end' : ''}`}
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 + i * 0.1 }}
                          >
                            <div className={`w-2 h-2 ${colorClasses.bg} rounded-full ${isEven ? 'md:order-2' : ''}`}></div>
                            <span className="text-gray-300 text-base">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
