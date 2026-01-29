import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const JaxSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-white mx-auto gap-16 relative overflow-hidden">

      {/* Decorative Dotted Pattern (Right side background) */}
      <div className="absolute bottom-10 right-10 grid grid-cols-6 gap-2 opacity-20 z-0">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#00cba9] rounded-full"></div>
        ))}
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-2xl relative z-10"
      >
        <span className="text-[#00cba9] font-bold tracking-widest text-sm uppercase mb-4 block">Who we are</span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2441] mb-6 leading-tight">
          Accounting by the Book.<br />
          Perform with Trust.
        </h2>

        <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <ul className="flex flex-col gap-8 mb-8">
          {[
            {
              title: "Audit & Assurance",
              desc: "Elementum facilisi ipsum eros elit odio ac ridiculus tincidunt egestas facilisis iaculis."
            },
            {
              title: "Advisory",
              desc: "Elementum facilisi ipsum eros elit odio ac ridiculus tincidunt egestas facilisis iaculis."
            },
            {
              title: "Managements",
              desc: "Elementum facilisi ipsum eros elit odio ac ridiculus tincidunt egestas facilisis iaculis."
            }
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="bg-[#e0f7f3] p-3 rounded-full flex-shrink-0 mt-1">
                <FaCheck size={16} className="text-[#00cba9]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#0b2441] mb-2">{item.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full flex justify-center items-center relative z-10"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
            alt="Team Meeting"
            className="w-full max-w-lg rounded-2xl shadow-2xl relative z-10"
          />

          {/* Experience Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-10 bg-white rounded-full w-48 h-48 flex flex-col justify-center items-center shadow-2xl z-20 border-4 border-white"
          >
            <span className="text-[#00cba9] text-6xl font-extrabold">15+</span>
            <span className="text-gray-500 text-sm font-medium mt-1">Years of Experience</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JaxSection;
