import React from 'react';
import { motion } from 'framer-motion';

const aboutCards = [
  {
    id: 1,
    title: 'Our Mission',
    text: 'We strive to provide the best possible service and experience to our customers by offering high quality products and exceptional customer support.',
    image: '/images/gallary-2.webp',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Our Team',
    text: 'Our team consists of experienced professionals who are passionate about what they do and dedicated to providing the best possible service to our customers.',
    image: '/images/gallary-3.webp',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Our Products',
    text: 'We offer a wide range of high quality products that are designed to meet the needs of our customers. From basic to advanced, we have something for everyone.',
    image: '/images/gallary-4.webp',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const AboutSection = () => {
  return (
    <section id="who-we-are" className="py-24 bg-slate-50 relative overflow-hidden">
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
            Who We Are
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-[#104068]">Jibarco</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Building trust through dedication, professional expertise, and top-tier solutions.
          </p>
        </motion.div>

        {/* 3-Column Modern Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Card Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md text-[#104068] border border-white flex items-center justify-center shadow-lg">
                  {card.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#104068] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;