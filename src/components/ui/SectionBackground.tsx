'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface SectionBackgroundProps {
  particleCount?: number;
  variant?: 'default' | 'subtle' | 'intense';
}

const SectionBackground = ({ particleCount = 8, variant = 'default' }: SectionBackgroundProps) => {
  const particles = useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
      size: variant === 'intense' ? 'w-1.5 h-1.5' : 'w-1 h-1',
      opacity: variant === 'subtle' ? 0.4 : 0.6,
    })),
  [particleCount, variant]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.size} bg-cyan-400/50 rounded-full`}
          style={{ left: particle.left, top: particle.top }}
          animate={{
            y: [0, -80],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default SectionBackground;
