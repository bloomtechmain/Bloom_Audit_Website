import React from 'react';
import Navbar from '../Components/Navbar';
import ProblemSection from '../Components/ProblemSection';
import PlatformScores from '../Components/PlatformScores';
import FeatureComparison from '../Components/FeatureComparison';
import CategoryScores from '../Components/CategoryScores';
import Differentiators from '../Components/Differentiators';
import Footer from '../Components/Footer';

const WhyChooseUs = () => {
  return (
    <div>
      <Navbar solid />
      <div className="pt-20">
        <ProblemSection />
        <PlatformScores />
        <FeatureComparison />
        <CategoryScores />
        <Differentiators />
      </div>
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
