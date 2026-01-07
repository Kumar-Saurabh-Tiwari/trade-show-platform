'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Check, Users, UserCheck, Zap, Loader, TrendingUp, Award } from 'lucide-react';

type PricingTier = 'exhibitor' | 'attendee' | 'exhibitor_support' | 'attendee_support';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: { text: string; icon?: boolean }[];
  cta: string;
  highlight?: boolean;
  savings?: string;
}

const pricingPlans: Record<PricingTier, PricingPlan> = {
  exhibitor: {
    name: 'Independent Exhibitor',
    description: 'Perfect for individual exhibitors',
    price: '$49',
    period: 'per event',
    features: [
      { text: 'Unique QR Code for contacts', icon: true },
      { text: 'Business card scanner access', icon: true },
      { text: 'Contact management dashboard', icon: true },
      { text: 'Basic analytics', icon: true },
      { text: 'Email support', icon: true },
      { text: 'Up to 500 contact syncs', icon: true },
      { text: 'Event attendee tracking', icon: true },
    ],
    cta: 'Get Started'
  },
  attendee: {
    name: 'Independent Attendee',
    description: 'For individual event attendees',
    price: '$19',
    period: 'per event',
    features: [
      { text: 'Personal QR code', icon: true },
      { text: 'Exhibitor contact saving', icon: true },
      { text: 'Contact organization', icon: true },
      { text: 'Event directory access', icon: true },
      { text: 'Basic networking tools', icon: true },
      { text: 'Email support', icon: true },
      { text: 'Contact export', icon: true },
    ],
    cta: 'Get Started'
  },
  exhibitor_support: {
    name: 'Trade Show Support Exhibitor',
    description: 'Full support for exhibitors',
    price: '$199',
    period: 'per event',
    highlight: true,
    savings: 'Save 30% vs. monthly',
    features: [
      { text: 'Everything in Independent Exhibitor', icon: true },
      { text: 'Priority support (phone + email)', icon: true },
      { text: 'Advanced analytics & reports', icon: true },
      { text: 'Team member accounts (up to 5)', icon: true },
      { text: 'Custom branding options', icon: true },
      { text: 'Unlimited contact syncs', icon: true },
      { text: 'Lead scoring & qualification', icon: true },
      { text: 'CRM integration', icon: true },
      { text: 'Dedicated account manager', icon: true },
      { text: 'Pre-event planning consultation', icon: true },
    ],
    cta: 'Get Started'
  },
  attendee_support: {
    name: 'Trade Show Support Attendee',
    description: 'Enhanced experience for attendees',
    price: '$79',
    period: 'per event',
    features: [
      { text: 'Everything in Independent Attendee', icon: true },
      { text: 'Priority support (phone + email)', icon: true },
      { text: 'Advanced contact filtering', icon: true },
      { text: 'Meeting scheduler with exhibitors', icon: true },
      { text: 'Personalized event schedule', icon: true },
      { text: 'Networking insights', icon: true },
      { text: 'Follow-up reminders', icon: true },
      { text: 'Contact enrichment', icon: true },
      { text: 'Post-event analytics', icon: true },
    ],
    cta: 'Get Started'
  }
};

const tabs: { id: PricingTier; label: string; icon: React.ComponentType<any>; shortLabel: string }[] = [
  { id: 'exhibitor', label: 'Independent Exhibitor', shortLabel: 'Exhibitor', icon: Users },
  { id: 'attendee', label: 'Independent Attendee', shortLabel: 'Attendee', icon: UserCheck },
  { id: 'exhibitor_support', label: 'Trade Show Support Exhibitor', shortLabel: 'Support Exhibitor', icon: Award },
  { id: 'attendee_support', label: 'Trade Show Support Attendee', shortLabel: 'Support Attendee', icon: TrendingUp }
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<PricingTier>('exhibitor_support');
  const currentPlan = pricingPlans[activeTab];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-widest">
              💰 Transparent Pricing
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Simple, flexible pricing designed for every role at trade shows. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Tabs with Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-2xl w-fit mx-auto border border-blue-200/50">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 group text-sm sm:text-base ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/40'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {activeTab && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <motion.div
                  className={`relative rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                    currentPlan.highlight
                      ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20'
                      : 'bg-white border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-blue-300'
                  }`}
                >
                  {/* Highlight Badge */}
                  {currentPlan.highlight && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180, y: -20 }}
                      animate={{ scale: 1, rotate: 0, y: 0 }}
                      transition={{ type: "spring", bounce: 0.8, duration: 1 }}
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20"
                    >
                      <div style={{ marginTop: "35px" }} className="relative">
                        {/* Outer glow effect */}
                        <motion.div
                          className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-60"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.8, 0.4],
                          }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* Middle glow */}
                        <motion.div
                          className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50"
                          animate={{
                            scale: [1, 1.15, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Main badge */}
                        <motion.span
                          className="relative block bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white px-8 py-3 rounded-full text-base font-black shadow-2xl border-2 border-white/30 backdrop-blur-sm"
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          🏆 Most Popular
                        </motion.span>
                      </div>
                    </motion.div>
                  )}

                  <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                    {/* Left Side - Plan Info */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={currentPlan.highlight ? 'text-white' : 'text-slate-900'}
                    >
                      {/* Header */}
                      <motion.div variants={itemVariants}>
                        <h3 className="text-4xl md:text-5xl font-black mb-3">
                          {currentPlan.name}
                        </h3>
                        <p className={currentPlan.highlight ? 'text-blue-100 text-lg' : 'text-slate-600 text-lg'}>
                          {currentPlan.description}
                        </p>
                      </motion.div>

                      {/* Price Section */}
                      <motion.div
                        variants={itemVariants}
                        className="mt-8 mb-8 space-y-4"
                      >
                        <div>
                          <div className="flex items-baseline gap-3 mb-3">
                            <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
                              {currentPlan.price}
                            </span>
                            <span className={`text-xl font-semibold ${currentPlan.highlight ? 'text-blue-100' : 'text-slate-600'}`}>
                              {currentPlan.period}
                            </span>
                          </div>
                          {currentPlan.savings && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex items-center gap-2 text-green-400 font-semibold"
                            >
                              <TrendingUp className="w-4 h-4" />
                              {currentPlan.savings}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>

                      {/* CTA Buttons */}
                      <motion.div
                        variants={itemVariants}
                        className="space-y-3 mb-8"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                            currentPlan.highlight
                              ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-600/50 shadow-lg'
                              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                          }`}
                        >
                          <Zap className="w-5 h-5" />
                          {currentPlan.cta}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          className={`w-full py-3 rounded-xl font-semibold transition-all ${
                            currentPlan.highlight
                              ? 'bg-white/10 text-white border-2 border-white/20 hover:border-white/40'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          View Details
                        </motion.button>
                      </motion.div>
                    </motion.div>

                    {/* Right Side - Features List */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <p className={`font-bold text-sm uppercase tracking-widest mb-6 ${
                        currentPlan.highlight ? 'text-blue-200' : 'text-slate-600'
                      }`}>
                        ✨ What's Included
                      </p>
                      <div className="space-y-4">
                        {currentPlan.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-4 group"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className={`flex-shrink-0 mt-1 rounded-full p-1 ${
                                currentPlan.highlight
                                  ? 'bg-gradient-to-br from-blue-400 to-blue-500 text-white'
                                  : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                              }`}
                            >
                              <Check className="w-5 h-5" />
                            </motion.div>
                            <span className={`text-base font-medium leading-relaxed group-hover:translate-x-1 transition-transform ${
                              currentPlan.highlight ? 'text-blue-50' : 'text-slate-700'
                            }`}>
                              {feature.text}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Comparison Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 border-2 border-slate-200 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Feature</th>
                  {tabs.map((tab) => (
                    <th key={tab.id} className="text-center py-4 px-4 font-bold text-slate-900">
                      <span className="text-sm">{tab.shortLabel}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-700">QR Code Access</td>
                  {tabs.map((tab) => (
                    <td key={tab.id} className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-200 hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-700">Analytics</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-slate-400">Basic</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-slate-400">Basic</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-blue-50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-slate-700">Priority Support</td>
                  <td className="text-center py-4 px-4">
                    <span className="text-slate-400">✕</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-slate-400">✕</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">
            Not sure which plan is right for you?{' '}
            <a href="#contact" className="text-blue-600 font-bold hover:text-blue-700 underline">
              Contact our sales team
            </a>
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <p className="text-sm text-slate-500 font-semibold">
              ✓ All plans include 14-day free trial · No credit card required
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
