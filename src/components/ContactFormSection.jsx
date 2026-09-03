import React, { useState } from 'react';

const workingHours = [
  { day: 'Mon', hours: '08:00 am – 05:00 pm' },
  { day: 'Tue', hours: '08:00 am – 05:00 pm' },
  { day: 'Wed', hours: '08:00 am – 05:00 pm' },
  { day: 'Thu', hours: '08:00 am – 05:00 pm' },
  { day: 'Fri', hours: 'By Appointment', highlight: true },
  { day: 'Sat', hours: 'By Appointment', highlight: true },
  { day: 'Sun', hours: '08:00 am – 05:00 pm' },
];

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Drop us a line!</h2>
              <p className="text-xs text-slate-500 mt-1">Fill in the fields below and our team will get back to you promptly.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#104068]"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email*" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#104068]"
                />
              </div>

              <div>
                <textarea 
                  rows={5} 
                  placeholder="Message" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-[#104068]"
                />
              </div>

              <div className="text-center sm:text-left pt-2">
                <button 
                  type="submit"
                  className="px-10 py-3.5 rounded-full bg-[#104068] hover:bg-slate-900 text-white font-bold text-xs transition-all duration-300 shadow-md"
                >
                  Send
                </button>
              </div>
            </form>

            <p className="text-[10px] text-slate-400 text-center sm:text-left">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </div>

          {/* Right Column: Direct Info, WhatsApp & Business Hours */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6 lg:border-l border-slate-200">
            
            {/* Visit Section & WhatsApp CTA */}
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900">Better yet, see us in person!</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We love our customers, so feel free to visit during normal business hours.
              </p>

              <a
                href="https://wa.me/966500000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#3D5256] hover:bg-[#2c3d40] text-white font-bold text-xs transition-all duration-300 shadow-md w-full sm:w-auto"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Message us on WhatsApp
              </a>
            </div>

            {/* Email Contact */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Email</p>
              <a href="mailto:Faisal.Salem@jibarco.com" className="text-slate-900 font-extrabold hover:text-[#104068] text-base transition-colors">
                Faisal.Salem@jibarco.com
              </a>
            </div>

            {/* Business Hours Table */}
            <div className="pt-2 space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Hours</h4>
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                {workingHours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 w-12">{item.day}</span>
                    <span className={`font-semibold ${item.highlight ? 'text-slate-900 font-bold' : 'text-slate-500'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;