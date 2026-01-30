import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BusinessTypes = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay - matching the blue/teal theme */}
        <div className="absolute inset-0 bg-[#0e3b5e]/80 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Think about all the time and effort that goes into getting your accounting statements in order.
          </h2>

          <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-2xl">
            Focus on growing your business while we handle the complexities of your financial data. Our automated tools save you time and ensure precision.
          </p>

          <Link
            to="/register"
            className="bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-10 rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-sm tracking-wider uppercase inline-block">
            GET STARTED
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessTypes;
