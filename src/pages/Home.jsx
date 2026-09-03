import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import InnovativeSolutions from '../components/InnovativeSolutions';
import WhatWeDoSection from '../components/WhatWeDoSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
import MapLocationSection from '../components/MapLocationSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <InnovativeSolutions />
      <WhatWeDoSection /> 
      <NewsletterSection />
      <ContactSection />
      <MapLocationSection />
    </div>
  );
};

export default Home;