import React from 'react';
import { motion } from 'framer-motion';

const pillarCards = [
  {
    id: '01',
    category: 'SAFETY',
    headline: 'Core Value & Culture',
    image: '/images/gallary-2.webp',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <div>
          <h5 className="font-bold text-slate-900 mb-1">1. Prioritizing Well-Being</h5>
          <p className="leading-relaxed">
            At <strong className="text-slate-900">Jibarco</strong>, the well-being of our people is paramount. We foster a culture where health and safety are at the forefront of daily work.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-1">2. Beyond Compliance</h5>
          <p className="leading-relaxed">
            Our dedication to a secure workplace extends well beyond standard regulations—it shapes our core operations and decision-making.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: '02',
    category: 'COMMITMENT',
    headline: 'Safety First & Training',
    image: '/images/gallary-3.webp',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <div>
          <h5 className="font-bold text-slate-900 mb-1">1. Safety First, Always</h5>
          <p className="leading-relaxed">
            We believe in putting safety first in every task, ensuring clients, partners, and team members trust that their health is our top priority.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-1">2. Comprehensive Programs</h5>
          <p className="leading-relaxed">
            We invest in thorough training programs from onboarding to ongoing professional development to create a safety-conscious team.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: '03',
    category: 'ACTIONS',
    headline: 'Proactive Risk Management',
    image: '/images/gallary-4.webp',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <div>
          <h5 className="font-bold text-slate-900 mb-1">1. Proactive Mitigation</h5>
          <p className="leading-relaxed">
            We actively identify potential risks and implement preventive measures to address hazards before they become operational issues.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-1">2. Empowering Our Team</h5>
          <p className="leading-relaxed">
            Through open communication channels and accountability, we empower every individual to take an active role in workplace safety.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: '04',
    category: 'PROMISE',
    headline: 'Continuous Improvement',
    image: '/images/gallary-5.webp',
    content: (
      <div className="space-y-4 text-sm text-slate-600">
        <div>
          <h5 className="font-bold text-slate-900 mb-1">1. Ongoing Enhancement</h5>
          <p className="leading-relaxed">
            Our commitment is ongoing. We regularly review policies and practices to adapt to emerging industry standards and best practices.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 mb-1">2. Swift Reporting</h5>
          <p className="leading-relaxed">
            Our structured reporting systems facilitate swift responses, ensuring safety concerns are handled promptly and effectively.
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

              {/* Body Content Area - Perfectly Balanced */}
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