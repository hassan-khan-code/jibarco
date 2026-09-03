import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactFormSection from '../components/ContactFormSection';
import ContactFaq from '../components/ContactFaq';

const ContactPage = () => {
  return (
    <main className="bg-slate-50 min-h-screen pt-20">
      <ContactHero />
      <ContactFormSection />
      <ContactFaq />
    </main>
  );
};

export default ContactPage;