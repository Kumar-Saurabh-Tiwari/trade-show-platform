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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed at Trade Shows
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From instant QR scanning to event management, we've got your networking covered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
