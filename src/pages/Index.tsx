import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PromoBanner from '../components/PromoBanner';
import OffersSection from '../components/OffersSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PromoBanner />
        <OffersSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
