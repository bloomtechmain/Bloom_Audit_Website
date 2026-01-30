import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AccountantSection = () => {
  const navigate = useNavigate();
  const steps = [
    {
      title: 'Consultations',
      description: 'Schedule a one-on-one meeting to analyze your current financial status and requirements.',
      buttonText: 'GET STARTED',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: 'Choose Package',
      description: 'Select the service package that perfectly aligns with your business size and goals.',
      buttonText: 'GET STARTED',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Get Your Services',
      description: 'Sit back as our experts handle your accounting, audits, and compliance needs efficiently.',
      buttonText: 'GET STARTED',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#f3f4f6] py-20 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-black mb-6"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Our streamlined process ensures you get the best financial services with minimal hassle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-sm shadow-sm flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-20 h-20 bg-[#26d4b5] rounded-full flex items-center justify-center mb-8 shadow-md">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>

              <p className="text-gray-500 mb-10 leading-relaxed">
                {step.description}
              </p>

              <button
                onClick={() => navigate('/register')}
                className="mt-auto bg-[#26d4b5] hover:bg-[#1fbfa1] text-white font-bold py-3 px-8 rounded shadow transition-colors duration-300 text-sm tracking-wider uppercase">
                {step.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountantSection;
