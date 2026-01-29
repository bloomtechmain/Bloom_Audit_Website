import React from 'react';
import { motion } from 'framer-motion';

const PricingPlans = () => {
  const features = [
    {
      title: 'Free Consultations',
      description: 'Elit accumsan tristique ipsum vel natoque vestibulum taciti eu posuere.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Certified Expert',
      description: 'Elit accumsan tristique ipsum vel natoque vestibulum taciti eu posuere.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Growing & Scale Up Businesses',
      description: 'Elit accumsan tristique ipsum vel natoque vestibulum taciti eu posuere.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: '24/7 Premium Support',
      description: 'Elit accumsan tristique ipsum vel natoque vestibulum taciti eu posuere.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white py-20 overflow-hidden relative">
      {/* Background Dots */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20" style={{ backgroundImage: 'radial-gradient(#00cba9 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20" style={{ backgroundImage: 'radial-gradient(#00cba9 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#00cba9] font-bold tracking-widest text-sm uppercase mb-2 block"
          >
            WHY CHOOSE US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0b2441] mb-6 leading-tight"
          >
            Accounting by the Book. Perform<br />with Trust.
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-8 flex-1">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start gap-6"
              >
                <div className="bg-[#00cba9] p-4 rounded-md shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b2441] mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex-1 flex justify-center items-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                alt="Business professional with thumbs up"
                className="w-full max-w-md object-contain mask-image-bottom"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />
            </motion.div>
            {/* Decorative dots behind image */}
            <div className="absolute top-1/4 -right-10 w-40 h-40 opacity-30 z-0" style={{ backgroundImage: 'radial-gradient(#00cba9 2px, transparent 2px)', backgroundSize: '15px 15px' }}></div>
            <div className="absolute bottom-1/4 -left-10 w-40 h-40 opacity-30 z-0" style={{ backgroundImage: 'radial-gradient(#00cba9 2px, transparent 2px)', backgroundSize: '15px 15px' }}></div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 flex-1">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start gap-6"
              >
                <div className="bg-[#00cba9] p-4 rounded-md shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0b2441] mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
