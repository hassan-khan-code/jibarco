import React from 'react';
import { motion } from 'framer-motion';

const MapLocationSection = () => {
  // Encoded address for Al Khobar, Saudi Arabia
  const mapAddress = encodeURIComponent("Prince Sultan Rd, Al Khobar Al Shamalia, Al Khobar 34428, Saudi Arabia");
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapAddress}`;

  return (
    <section className="relative w-full bg-slate-900 pt-12 pb-24 overflow-hidden">
      
      {/* Background Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            Location Overview
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Find Us on the <span className="text-blue-400">Map</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Conveniently located in Khobar Al Shamalia, Saudi Arabia. Visit our office or get instant GPS directions.
          </p>
        </motion.div>
      </div>

      {/* Map Container with Floating Card Overlay */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative w-full h-[480px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 group">
          
          {/* Live Interactive Embedded Google Map */}
          <iframe
            title="Jibarco Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.4389104886915!2d50.2115!3d26.2882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e830e2f38d33%3A0xa646274e1d710892!2sAl%20Khobar%20Al%20Shamalia%2C%20Al%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            className="w-full h-full border-0 filter grayscale-[25%] opacity-90 contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Action Button - Get Directions Overlay */}
          <div className="absolute top-6 left-6 z-20">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/90 hover:bg-white text-slate-900 text-xs font-extrabold shadow-xl backdrop-blur-md border border-white/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <svg className="w-4 h-4 text-[#104068]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Get Directions</span>
            </a>
          </div>

          {/* Bottom Location Info Banner Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
              <div className="space-y-1">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Headquarter</p>
                <p className="text-sm sm:text-base font-bold text-slate-100" dir="rtl">
                  شارع الامير سلطان تقاطع، الشارع العاشر، حي الخبر الشمالية، الخبر 34428
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#104068] hover:bg-blue-600 text-white font-semibold text-xs transition-all duration-300 shadow-md shrink-0 w-full sm:w-auto text-center"
              >
                Open in Maps ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapLocationSection;