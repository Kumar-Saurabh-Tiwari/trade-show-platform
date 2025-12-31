'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { QrCode, Smartphone, Zap, CheckCircle } from 'lucide-react';

export default function QRShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-blue-500 rounded-lg rotate-12" />
        <div className="absolute bottom-20 right-20 w-64 h-64 border-4 border-purple-500 rounded-lg -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Scan, Connect, Done in 3 Seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skip the business card shuffle. Exchange complete contact details with a single scan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
              {/* Phone Mockup */}
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                {/* Simulated QR Code */}
                <div className="bg-white border-4 border-gray-200 rounded-xl p-4 mb-6">
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: Math.random() > 0.5 ? 1 : 0 }}
                        transition={{ duration: 0.3, delay: i * 0.01 }}
                        className="w-full aspect-square bg-gray-900 rounded-sm"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Contact Information</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Company Details</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Product Catalog</span>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Open Your App</h3>
                <p className="text-gray-600">
                  Launch TradeConnect on your smartphone and access your unique QR code instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scan QR Code</h3>
                <p className="text-gray-600">
                  Point your camera at the other person's QR code. The app will automatically detect and scan it.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Save Contact</h3>
                <p className="text-gray-600">
                  All contact information is saved automatically to your account with timestamps and notes.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-bold text-gray-900">Lightning Fast</h4>
              </div>
              <p className="text-gray-700">
                Complete contact exchange in under 3 seconds. That's 95% faster than traditional methods!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
