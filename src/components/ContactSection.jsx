import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const weeklyHours = [
  { day: 'Mon', hours: '08:00 am – 05:00 pm', isOpen: true },
  { day: 'Tue', hours: '08:00 am – 05:00 pm', isOpen: true },
  { day: 'Wed', hours: '08:00 am – 05:00 pm', isOpen: true },
  { day: 'Thu', hours: '08:00 am – 05:00 pm', isOpen: true },
  { day: 'Fri', hours: 'Closed', isClosed: true },
  { day: 'Sat', hours: 'By Appointment', isAppointment: true },
  { day: 'Sun', hours: '08:00 am – 05:00 pm', isOpen: true },
];

const ContactSection = () => {
  const [showHours, setShowHours] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 border border-blue-200 text-[#104068] text-xs font-semibold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact <span className="text-[#104068]">Us</span>
          </h2>
        </motion.div>

        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Detail Cards Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Title & Intro */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Better yet, see us in person!
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                We love our customers, so feel free to visit during normal business hours.
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/966500000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-lg shadow-green-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Message us on WhatsApp
              </a>

              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#104068] hover:bg-slate-900 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-[#104068]/20 hover:-translate-y-0.5"
              >
                Drop us a line!
              </button>
            </div>

            {/* Information Cards Stack */}
            <div className="space-y-4 pt-2">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#104068] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
                  <a href="mailto:faisal.salem@jibarco.com" className="text-slate-900 font-bold hover:text-[#104068] text-base transition-colors">
                    faisal.salem@jibarco.com
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 transition-all flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#104068] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Office Location</p>
                  <p className="text-slate-900 font-bold text-sm leading-relaxed mt-0.5" dir="rtl">
                    شارع الامير سلطان تقاطع، الشارع العاشر، حي الخبر الشمالية، الخبر 34428، السعودية
                  </p>
                </div>
              </div>

              {/* Operating Hours Card with Expandable Schedule */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all">
                <button 
                  onClick={() => setShowHours(!showHours)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#104068] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Working Hours</p>
                      <p className="text-slate-900 font-bold text-sm">
                        Sun - Thu: <span className="text-[#104068]">08:00 am – 05:00 pm</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                      {showHours ? 'Hide Schedule' : 'View All'}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showHours ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Expanded Full Schedule Grid */}
                <AnimatePresence>
                  {showHours && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-slate-100 divide-y divide-slate-100"
                    >
                      {weeklyHours.map((item) => (
                        <div key={item.day} className="py-2 flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-700 w-12">{item.day}</span>
                          <span className={`font-semibold ${
                            item.isClosed 
                              ? 'text-rose-500 font-bold' 
                              : item.isAppointment 
                              ? 'text-amber-600 font-bold' 
                              : 'text-slate-600'
                          }`}>
                            {item.hours}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

          {/* Right Side: High-End Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex"
          >
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 min-h-[420px] flex flex-col justify-end">
              <img
                src="/images/contact-img.webp"
                alt="Engineering Professional"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="relative z-10 p-6 sm:p-8 m-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
                <span className="px-2.5 py-1 rounded-md bg-[#104068] text-white text-[10px] font-black uppercase tracking-wider">
                  Official Office
                </span>
                <h4 className="text-xl font-bold mt-2">Jibarco Engineering</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Visits during normal business hours are highly welcomed. Our team is ready to assist with project consultation.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* "Drop us a line!" Pop-up Modal Form */}
 {/* "Drop us a line!" Pop-up Modal Form */}
<AnimatePresence>
  {isFormOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative"
      >
        <h4 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">Drop us a line!</h4>

        <form onSubmit={(e) => { e.preventDefault(); setIsFormOpen(false); }} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#104068]" 
            />
          </div>

          <div>
            <input 
              type="email" 
              required 
              placeholder="Email*" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#104068]" 
            />
          </div>

          <div>
            <textarea 
              rows="4" 
              placeholder="Message" 
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#104068] resize-y"
            ></textarea>
          </div>

          {/* Attach Files section */}
          <div className="flex items-center justify-between text-xs text-slate-500 py-1">
            <label className="flex items-center gap-1.5 cursor-pointer hover:text-slate-800 transition-colors font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span>Attach Files</span>
              <input type="file" multiple className="hidden" />
            </label>
            <span className="text-slate-400">Attachments (0)</span>
          </div>

          {/* reCAPTCHA disclaimer */}
          <p className="text-[11px] text-slate-400 text-center leading-relaxed pt-2">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button 
              type="submit" 
              className="px-8 py-3 rounded-full bg-[#104068] hover:bg-slate-900 text-white font-bold text-sm transition-all shadow-md"
            >
              Send
            </button>
            <button 
              type="button" 
              onClick={() => setIsFormOpen(false)}
              className="text-slate-600 hover:text-slate-900 text-sm font-semibold underline underline-offset-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )}
</AnimatePresence>
    </section>
  );
};

export default ContactSection;