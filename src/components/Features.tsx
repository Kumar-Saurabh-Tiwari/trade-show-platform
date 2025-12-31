'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { QrCode, UserPlus, Calendar, Scan, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description: "Exhibitors and attendees can instantly exchange contact information by scanning each other's unique QR codes. No manual entry needed.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Scan,
    title: "Business Card Scanner",
    description: "Digitize business cards in seconds. Our AI-powered scanner extracts contact details accurately and saves them automatically.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: UserPlus,
    title: "Manual Contact Creation",
    description: "Create contacts manually with our intuitive interface. Add notes, tags, and custom fields to organize your connections.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Attendee Management",
    description: "Exhibitors can add attendees to their contact list and track interactions. Attendees can save exhibitors they're interested in.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description: "Organize and manage all your events in one place. Get reminders, schedule meetings, and track important dates effortlessly.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Get detailed analytics on your connections, event participation, and networking effectiveness with comprehensive reports.",
    color: "from-cyan-500 to-cyan-600"
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ✨ Powerful Features
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need to <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Succeed at Trade Shows</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From instant QR scanning to comprehensive event management, we've got your networking covered with cutting-edge tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden h-full"
              >
                {/* Gradient background that appears on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-400 rounded-3xl`}
                />

                {/* Card with enhanced styling */}
                <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-8 md:p-10 rounded-3xl border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full flex flex-col shadow-2xl group-hover:shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  
                  {/* Icon with floating animation */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 w-fit group-hover:scale-125 transition-transform duration-300 shadow-lg`}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-pink-300 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 flex-grow">
                    {feature.description}
                  </p>

                  {/* Arrow icon that appears on hover */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -5 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-semibold">Learn more</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
