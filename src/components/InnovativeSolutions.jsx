import React from 'react';
import { motion } from 'framer-motion';

const InnovativeSolutions = () => {
  return (
    <section className="py-24 bg-slate-200 border-y border-slate-200/60 relative overflow-hidden">
      
      {/* Background Grid Pattern & Glow Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-white text-[#104068] border border-slate-200/80 shadow-sm flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-[#104068] text-xs font-semibold uppercase tracking-wider mb-5 shadow-sm">
            Strategic Value
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Innovative Solutions
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
            At <span className="font-bold text-[#104068]">JIBARCO</span>, we are dedicated to providing innovative solutions that meet the demands of today's market. Our focus is on delivering exceptional value through cutting-edge technology and strategic insights.
          </p>

        </motion.div>
      </div>

    </section>
  );
};

export default InnovativeSolutions;