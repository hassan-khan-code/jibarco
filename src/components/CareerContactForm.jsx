import React, { useState } from 'react';

const CareerContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Contact Us / Apply Now
          </h2>
          <div className="w-16 h-1 bg-[#104068] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Form */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-slate-900">Drop us a line!</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#104068]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email*" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#104068]"
                />
              </div>
              <div>
                <textarea 
                  rows={5} 
                  placeholder="Message / Position Interested In" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:border-[#104068]"
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#104068] hover:bg-slate-900 text-white font-bold text-xs transition-all duration-300 shadow-md"
              >
                Send Application
              </button>
            </form>

            <p className="text-[10px] text-slate-400">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>

          {/* Direct Details */}
          <div className="space-y-6 lg:pl-8 lg:border-l border-slate-200">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Better yet, see us in person!</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We love our candidates and partners, so feel free to visit during normal business hours.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900">Jibarco</h4>
              <p className="text-xs text-slate-600 leading-relaxed" dir="rtl">
                الامير طلال بن عبد العزيز، 3511، حي الخبر الشمالية، الخبر 34427، السعودية
              </p>
              <a 
                href="mailto:Faisal.Salem@jibarco.com" 
                className="inline-block text-xs font-bold text-[#104068] hover:underline"
              >
                Faisal.Salem@jibarco.com
              </a>
            </div>

            <div className="space-y-1.5 pt-2">
              <h4 className="text-sm font-bold text-slate-900">Hours</h4>
              <p className="text-xs text-slate-600">Open today 09:00 am – 05:00 pm</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerContactForm;