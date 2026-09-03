import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#104068]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            Stay Connected
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Subscribe to Our <span className="text-blue-400">Newsletter</span>
          </h2>

          {/* Offer Subtitle */}
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Get <span className="text-white font-semibold">10% off</span> your first purchase when you sign up for our newsletter!
          </p>

          {/* Form Area */}
          <form 
            onSubmit={handleSubmit}
            className="pt-6 max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3"
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-5 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#104068] focus:ring-2 focus:ring-[#104068]/50 transition-all duration-300 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#104068] hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#104068]/30 hover:shadow-blue-600/40 shrink-0 hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign up
            </button>
          </form>

          <p className="text-xs text-slate-500 pt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default NewsletterSection;