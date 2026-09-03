import React from 'react';
import { motion } from 'framer-motion';

const CareerHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4 pt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <span className="px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#104068] text-xs font-semibold uppercase tracking-wider">
          Career Opportunities
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Build Your Career with <span className="text-[#104068]">Jibarco</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We are always looking for passionate talent to drive innovation, quality, and operational excellence across our engineering projects in Saudi Arabia.
        </p>
      </motion.div>
    </section>
  );
};

export default CareerHero;