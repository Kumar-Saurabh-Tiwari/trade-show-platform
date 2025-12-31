'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Building2, Calendar, TrendingUp } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}

function StatItem({ icon: Icon, value, suffix = '', label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
          setCount(Math.floor(value * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 10 }}
        className="inline-flex p-4 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
      >
        <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Active Users',
      delay: 0.1
    },
    {
      icon: Building2,
      value: 5000,
      suffix: '+',
      label: 'Exhibitors',
      delay: 0.2
    },
    {
      icon: Calendar,
      value: 1200,
      suffix: '+',
      label: 'Events Hosted',
      delay: 0.3
    },
    {
      icon: TrendingUp,
      value: 95,
      suffix: '%',
      label: 'Success Rate',
      delay: 0.4
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Proven Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powering Connections Across the Globe
          </h2>
          <p className="text-lg text-gray-600">
            Real numbers from real trade shows and events
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
