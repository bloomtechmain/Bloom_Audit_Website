import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import JaxSection from '../Components/JaxSection';
import BusinessTypes from '../Components/BusinessTypes';
import PricingPlans from '../Components/PricingPlans';
import AccountantSection from '../Components/AccountantSection';
import TestimonialSection from '../Components/TestimonialSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <JaxSection />
      <BusinessTypes />
      <PricingPlans />
      <AccountantSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default Home;
