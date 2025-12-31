'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCircle, Building2, QrCode, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const exhibitorSteps = [
    {
      icon: Building2,
      title: "Create Your Booth Profile",
      description: "Set up your exhibitor profile with company details, products, and services you're showcasing."
    },
    {
      icon: QrCode,
      title: "Generate Your QR Code",
      description: "Get a unique QR code that contains all your booth information and contact details."
    },
    {
      icon: UserCircle,
      title: "Scan Attendee QR Codes",
      description: "Scan visiting attendees' QR codes to instantly save their contact information and preferences."
    },
    {
      icon: CheckCircle,
      title: "Manage & Follow Up",
      description: "Organize contacts, add notes, and schedule follow-ups directly from your dashboard."
    }
  ];

  const attendeeSteps = [
    {
      icon: UserCircle,
      title: "Create Your Profile",
      description: "Sign up and create your attendee profile with your professional information and interests."
    },
    {
      icon: QrCode,
      title: "Get Your QR Code",
      description: "Receive a unique QR code that exhibitors can scan to connect with you instantly."
    },
    {
      icon: Building2,
      title: "Scan Exhibitor Booths",
      description: "Visit exhibitor booths and scan their QR codes to save their contact info and materials."
    },
    {
      icon: CheckCircle,
      title: "Stay Connected",
      description: "Access all collected information, schedule meetings, and maintain connections after the event."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Process, Maximum Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four easy steps to transform your trade show experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Exhibitors Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-3xl shadow-xl mb-8">
              <Building2 className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-2">For Exhibitors</h3>
              <p className="text-blue-100">Showcase your products and capture leads effortlessly</p>
            </div>

            <div className="space-y-6">
              {exhibitorSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.15, ease: "easeOut" }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Attendees Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white p-8 rounded-3xl shadow-xl mb-8">
              <UserCircle className="w-12 h-12 mb-4" />
              <h3 className="text-3xl font-bold mb-2">For Attendees</h3>
              <p className="text-purple-100">Discover exhibitors and build meaningful connections</p>
            </div>

            <div className="space-y-6">
              {attendeeSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.15, ease: "easeOut" }}
                    whileHover={{ x: -8, scale: 1.02 }}
                    className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {index + 1}. {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
