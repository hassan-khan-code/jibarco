import React from 'react';
import { motion } from 'framer-motion';

const InnovativeSolutions = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200/80 shadow-xl shadow-slate-200/50 text-center relative overflow-hidden"
        >
          {/* Subtle Accent Glow Line Top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-300 via-[#104068] to-blue-300" />

          {/* Icon Badge */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="w-16 h-16 rounded-2xl bg-blue-50 text-[#104068] border border-blue-100 flex items-center justify-center mx-auto mb-6 shadow-sm"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>

          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#104068] text-xs font-semibold uppercase tracking-wider mb-4">
            Strategic Value
          </div>

          {/* Exact Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Innovative Solutions
          </h2>

          {/* Exact Paragraph Content */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            At <span className="font-extrabold text-[#104068]">JIBARCO</span>, we are dedicated to providing innovative solutions that meet the demands of today's market. Our focus is on delivering exceptional value through cutting-edge technology and strategic insights.
          </p>

        </motion.div>
      </div>

    </section>
  );
};

export default InnovativeSolutions;