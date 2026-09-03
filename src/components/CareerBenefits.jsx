import React from 'react';

const benefits = [
  { 
    title: "Professional Growth", 
    desc: "Continuous learning and career advancement opportunities across major infrastructure projects." 
  },
  { 
    title: "Inclusive Work Culture", 
    desc: "Work alongside experienced industry experts in a supportive, collaborative environment." 
  },
  { 
    title: "Health & Safety Priority", 
    desc: "Uncompromised safety standards and health protocols implemented for every team member." 
  }
];

const CareerBenefits = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 hover:shadow-md transition-shadow"
          >
            <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerBenefits;