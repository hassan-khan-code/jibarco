import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12 text-center pt-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-3"
      >
        <span className="px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#104068] text-xs font-semibold uppercase tracking-wider">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Contact <span className="text-[#104068]">Jibarco</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Have a project inquiry, partnership proposal, or question? We are here to help and welcome your direct correspondence.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;