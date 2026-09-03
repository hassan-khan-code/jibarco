import React, { useState } from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setNotified(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-slate-50 min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl text-center space-y-6"
        >
          {/* Animated Icon */}
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#104068] mx-auto flex items-center justify-center shadow-inner">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>

          {/* Clean Message */}
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#104068] text-[11px] font-bold uppercase tracking-wider">
              News & Updates
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-2">
              New products are coming soon!
            </h1>
            <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
              We are currently preparing new product catalogs and updates. Leave your email below to get notified as soon as they launch.
            </p>
          </div>

          {/* Optional Direct Notification Form */}
          <div className="pt-2 max-w-md mx-auto">
            {notified ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                ✓ Thank you! We'll notify you when new products arrive.
              </div>
            ) : (
              <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#104068]"
                />
                <button 
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-[#104068] hover:bg-slate-900 text-white font-bold text-xs transition-all duration-300 shadow-md shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default News;