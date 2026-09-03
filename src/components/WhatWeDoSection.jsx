import React from 'react';
import { motion } from 'framer-motion';

const pillarCards = [
  {
    id: '01',
    category: 'SAFETY',
    headline: 'Core Value & Operations',
    image: '/images/gallary-2.webp',
    content: (
      <p className="text-slate-600 text-sm leading-relaxed">
        At <strong className="text-slate-900 font-bold">Jibarco</strong>, we recognize that the well-being of our people is of paramount importance, and we are committed to fostering a culture where health and safety are at the forefront of everything we do. Our dedication to maintaining a secure and healthy workplace extends beyond compliance - it's a core value that shapes our operations, decision-making, and daily work.
      </p>
    ),
  },
  {
    id: '02',
    category: 'COMMITMENT',
    headline: 'We are committed to the well-being of our people',
    image: '/images/gallary-3.webp',
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <div>
          <h5 className="font-bold text-slate-900">1. Safety First, Always</h5>
          <p className="leading-relaxed mt-0.5">
            At Jibarco, safety is not just a policy; it's a mindset. We believe in putting safety first in every task, ensuring that our people, suppliers, subcontractors, partners, and clients can trust that their health is our top priority.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900">2. Comprehensive Training Programs</h5>
          <p className="leading-relaxed mt-0.5">
            We invest in comprehensive training programs to equip our team with the knowledge and skills needed to perform their roles safely. From onboarding to ongoing professional development, we prioritize education to create a safety-conscious culture.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900">3. State-of-the-Art Facilities</h5>
          <p className="leading-relaxed mt-0.5">
            Our facilities are designed with safety in mind. We implement the latest technologies and adhere to industry standards to create work environments that minimize risks and promote well-being.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: '03',
    category: 'ACTIONS',
    headline: 'Health and Safety in Action',
    image: '/images/gallary-4.webp',
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <div>
          <h5 className="font-bold text-slate-900">4. Proactive Risk Management</h5>
          <p className="leading-relaxed mt-0.5">
            We actively identify and assess potential risks, implementing preventive measures to mitigate hazards before they become issues. Our goal is to create a workplace where everyone feels confident and secure in their tasks.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900">5. Empowering Our Team</h5>
          <p className="leading-relaxed mt-0.5">
            We empower our people to take an active role in their safety and the safety of those around them. Open communication channels, regular safety meetings, and a culture of accountability contribute to a collective effort in maintaining a secure work environment.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: '04',
    category: 'PROMISE',
    headline: 'Our Promise to You',
    image: '/images/gallary-5.webp',
    content: (
      <div className="space-y-3 text-sm text-slate-600">
        <div>
          <h5 className="font-bold text-slate-900">6. Continuous Improvement</h5>
          <p className="leading-relaxed mt-0.5">
            Our commitment to health and safety is ongoing. We regularly review and enhance our policies, procedures, and practices to adapt to emerging best practices and industry standards.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900">7. Reporting and Response</h5>
          <p className="leading-relaxed mt-0.5">
            We encourage open communication regarding safety concerns. Our reporting systems are designed to facilitate swift responses, ensuring that any potential issues are addressed promptly and effectively.
          </p>
        </div>
      </div>
    ),
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-24 bg-slate-50/50 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#104068] text-xs font-semibold uppercase tracking-wider">
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Health & Safety at the <span className="text-[#104068]">forefront of everything</span> we do
          </h2>
        </motion.div>

        {/* 2x2 Bento Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {pillarCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Top Banner Image with Glass Badge */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={card.image}
                  alt={card.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Category Badge & Number */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#104068] text-xs font-extrabold uppercase tracking-widest shadow-md">
                    {card.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold flex items-center justify-center">
                    {card.id}
                  </span>
                </div>

                {/* Card Main Headline */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug drop-shadow-sm">
                    {card.headline}
                  </h3>
                </div>
              </div>

              {/* Body Content Area */}
              <div className="p-6 sm:p-8 flex-1 bg-white border-t border-slate-100 flex flex-col justify-between">
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;