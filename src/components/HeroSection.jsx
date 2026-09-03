import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Smooth scroll handler function
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100/60 min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden text-slate-800">
      
      {/* Light Blueprint Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#104068 0.75px, transparent 0.75px), radial-gradient(#104068 0.75px, #ffffff 0.75px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)'
        }}
      />

      {/* Soft Ambient Light Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 -left-20 w-[450px] h-[450px] bg-sky-200/50 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }} 
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 right-5 w-[400px] h-[400px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-14 items-center relative z-10">
        
        {/* Left Column Text */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start space-y-7"
        >
          
          {/* Shimmer Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200/90 shadow-sm backdrop-blur-md text-[#104068] text-xs font-semibold tracking-wider uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#104068] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#104068]"></span>
            </span>
            Innovative 
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Experience the future of{' '}
            <span className="relative inline-block text-[#104068]">
              project delivery
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#104068]/20" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 font-normal max-w-2xl leading-relaxed">
            Driving progress with advanced solutions for all sectors. Delivering precision, quality, and forward-thinking expertise across every phase.
          </p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <button
              onClick={() => handleScrollToSection('who-we-are')}
              className="px-8 py-4 rounded-xl bg-[#104068] hover:bg-[#0c3150] text-white font-semibold text-base transition-all duration-300 shadow-xl shadow-[#104068]/25 hover:shadow-[#104068]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Who We Are
            </button>

            <button
              onClick={() => handleScrollToSection('what-we-do')}
              className="px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 font-semibold text-base transition-all duration-300 shadow-sm hover:border-slate-400 hover:-translate-y-0.5 active:translate-y-0"
            >
              What We Do
            </button>
          </motion.div>

          {/* Metrics Card Bar */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-200/80 w-full max-w-lg">
            <div className="p-3 bg-white/60 rounded-xl border border-slate-200/60 shadow-sm backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#104068]">100%</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Precision Delivery</p>
            </div>
            <div className="p-3 bg-white/60 rounded-xl border border-slate-200/60 shadow-sm backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#104068]">Multi</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Sector Solutions</p>
            </div>
            <div className="p-3 bg-white/60 rounded-xl border border-slate-200/60 shadow-sm backdrop-blur-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#104068]">24/7</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Expert Support</p>
            </div>
          </div>

        </motion.div>

        {/* Right Column Frame */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Layered Decorative Backdrop Frames */}
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-[#104068]/30 rounded-3xl pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-blue-100/50 rounded-3xl pointer-events-none -z-10" />

          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white aspect-[4/3] lg:aspect-[5/6] group">
            <img
              src="/images/hero-img.jpg"
              alt="Project Delivery Team"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            {/* Soft Bottom Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-80" />
          </div>

          {/* Floating Glassmorphism Stat Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xl hidden sm:flex items-center gap-4 max-w-xs"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#104068] border border-blue-100 flex items-center justify-center shrink-0 shadow-inner">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Trusted Excellence</p>
              <p className="text-xs text-slate-500 mt-0.5">Advanced engineering standard</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;