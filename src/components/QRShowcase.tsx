'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { QrCode, Smartphone, Zap, CheckCircle } from 'lucide-react';

export default function QRShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Animated Background Decoration */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
      >
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border-4 border-blue-500 rounded-lg"
          animate={{
            rotate: [12, 17, 12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 border-4 border-purple-500 rounded-lg"
          animate={{
            rotate: [-12, -17, -12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Quick Demo</span>
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
            className="relative group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300"
            />
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
              {/* Phone Mockup */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="flex items-center justify-center mb-6"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-blue-600" />
                  </div>
                </motion.div>

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

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3"
                >
                  {[
                    "Contact Information",
                    "Company Details",
                    "Product Catalog"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </motion.div>
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

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
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
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
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg"
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
            {[
              { num: "1", title: "Open Your App", desc: "Launch TradeConnect on your smartphone and access your unique QR code instantly.", color: "from-blue-100 to-blue-50", textColor: "text-blue-600" },
              { num: "2", title: "Scan QR Code", desc: "Point your camera at the other person's QR code. The app will automatically detect and scan it.", color: "from-indigo-100 to-indigo-50", textColor: "text-indigo-600" },
              { num: "3", title: "Save Contact", desc: "All contact information is saved automatically to your account with timestamps and notes.", color: "from-purple-100 to-purple-50", textColor: "text-purple-600" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex gap-4 group"
              >
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <span className={`text-2xl font-bold ${step.textColor}`}>{step.num}</span>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
            >
              <motion.div
                className="flex items-center gap-3 mb-3"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Zap className="w-6 h-6 text-green-600 group-hover:rotate-12 transition-transform" />
                <h4 className="text-lg font-bold text-gray-900">Lightning Fast</h4>
              </motion.div>
              <p className="text-gray-700 group-hover:text-gray-800 transition-colors">
                Complete contact exchange in under 3 seconds. That's 95% faster than traditional methods!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
