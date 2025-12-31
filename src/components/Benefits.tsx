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
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-full">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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
