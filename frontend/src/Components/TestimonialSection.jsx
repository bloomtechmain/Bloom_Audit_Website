import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Lilly Mitchell',
      role: 'Founder Makko',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Cameron Mcdonald',
      role: 'Business Manager MoxPay',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      name: 'Brandon Reynolds',
      role: 'CEO Lokamart',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];

  return (
    <div className="relative bg-white pb-20">
      {/* Green Header Section with Network Background */}
      <div className="bg-[#26d4b5] pt-24 pb-48 relative overflow-hidden">
        {/* Network Pattern SVG Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="white" />
                <path d="M2 2 L100 100 M2 100 L100 2" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-pattern)" />
            {/* Random large circles for the constellation effect */}
            <circle cx="10%" cy="20%" r="5" fill="white" opacity="0.5" />
            <circle cx="20%" cy="80%" r="4" fill="white" opacity="0.5" />
            <circle cx="80%" cy="10%" r="6" fill="white" opacity="0.5" />
            <circle cx="90%" cy="60%" r="3" fill="white" opacity="0.5" />
            <path d="M10% 20% L20% 80% L90% 60% L80% 10% Z" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-sm font-bold mb-4 opacity-90"
          >
            TESTIMONIAL
          </motion.h5>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What they say about us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
        </div>
      </div>

      {/* Cards Section - Overlapping the green background */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded shadow-lg text-center flex flex-col items-center"
            >
              <p className="text-gray-500 italic text-lg mb-8 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-[#0b2441] text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs font-semibold uppercase">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
