import React from 'react';
import CareerHero from '../components/CareerHero';
import CareerBenefits from '../components/CareerBenefits';
import CareerContactForm from '../components/CareerContactForm';

const CareerPage = () => {
  return (
    <main className="bg-slate-50 min-h-screen pt-20">
      <CareerHero />
      <CareerBenefits />
      <CareerContactForm />
    </main>
  );
};

export default CareerPage;