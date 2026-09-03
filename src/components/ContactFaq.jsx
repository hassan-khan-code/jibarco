import React, { useState } from 'react';

const faqs = [
  {
    q: "How quickly does Jibarco respond to inquiries?",
    a: "Our team typically responds to email inquiries and form submissions within 24 business hours."
  },
  {
    q: "Can I schedule a meeting outside normal business hours?",
    a: "Yes, consultations on Fridays and Saturdays can be arranged by prior appointment."
  },
  {
    q: "Where is the main office located?",
    a: "Our office is located in Al Khobar Al Shamalia, Saudi Arabia."
  }
];

const ContactFaq = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <div className="text-center mb-8 space-y-2">
        <h3 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
        <p className="text-xs text-slate-500">Quick answers to common inquiries before reaching out.</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all shadow-sm"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between"
            >
              <span>{faq.q}</span>
              <span className="text-slate-400 ml-2">{openIdx === idx ? '−' : '+'}</span>
            </button>
            {openIdx === idx && (
              <div className="px-5 pb-5 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactFaq;