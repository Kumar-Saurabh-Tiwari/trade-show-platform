'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, TrendingUp, Clock, Globe, Award } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Instant Connections",
    description: "Exchange contact information in seconds with QR code scanning. No more lost business cards or manual data entry.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and secure. Control what information you share with each connection.",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Better Lead Quality",
    description: "Capture detailed attendee information and interests to qualify leads and improve follow-up effectiveness.",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate contact management and follow-ups. Spend more time networking and less time on admin tasks.",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    icon: Globe,
    title: "Global Networking",
    description: "Connect with professionals worldwide. Break language barriers with automatic translation features.",
    gradient: "from-indigo-400 to-blue-500"
  },
  {
    icon: Award,
    title: "Professional Image",
    description: "Showcase your brand professionally with digital business cards and customized booth profiles.",
    gradient: "from-red-400 to-pink-500"
  }
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Competitive Edge at Every Event
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real advantages that drive results and maximize your trade show investment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300`}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <div className="relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-white/40 transition-all h-full group-hover:bg-white/15">
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6`}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 10,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
