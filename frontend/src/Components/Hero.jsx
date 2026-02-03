import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaChartPie, FaFileInvoiceDollar, FaShieldAlt } from 'react-icons/fa';

const Hero = () => {
  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatAnimationDelayed = {
    animate: {
      y: [0, 20, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e3b5e] pt-20 pb-10 lg:pb-0">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00cba9]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-300">
                Financial Destiny
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop drowning in spreadsheets. Bloom ERP brings enterprise-grade clarity to your small business finances with AI-driven insights and automated workflows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/register"
                className="px-8 py-4 bg-[#00cba9] text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(0,203,169,0.4)] hover:shadow-[0_0_30px_rgba(0,203,169,0.6)] hover:bg-[#00b596] transition-all transform hover:-translate-y-1 flex items-center gap-2 group">
                Get started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>


          </motion.div>

          {/* Visual Content - Floating Dashboard */}
          <div className="lg:w-1/2 relative h-[450px] lg:h-[500px] w-full flex items-center justify-center perspective-1000 mt-10 lg:mt-0">
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl z-10"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00cba9] to-blue-500 rounded-xl flex items-center justify-center text-white">
                    <FaChartPie />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Financial Overview</h3>
                    <p className="text-blue-200 text-xs">Real-time Data</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold">
                  +24.5%
                </div>
              </div>

              {/* Chart Bars */}
              <div className="flex items-end justify-between h-48 gap-2 mb-6 px-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                    className="w-full bg-gradient-to-t from-blue-500/50 to-[#00cba9]/50 rounded-t-lg relative group hover:from-blue-500 hover:to-[#00cba9] transition-all"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-white text-xs bg-black/50 px-2 py-1 rounded transition-opacity">
                      ${h}k
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-3">
                <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-blue-200 text-xs mb-1">Income</p>
                  <p className="text-white font-bold">$124,500</p>
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-3 border border-white/10">
                  <p className="text-blue-200 text-xs mb-1">Expenses</p>
                  <p className="text-white font-bold">$42,300</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              variants={floatAnimation}
              animate="animate"
              className="absolute right-0 lg:-right-4 top-10 lg:top-20 bg-white p-4 rounded-2xl shadow-xl z-20 max-w-[160px] lg:max-w-[180px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 text-orange-500 rounded-lg">
                  <FaFileInvoiceDollar />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold">Invoice #1024</p>
                  <p className="text-gray-800 font-bold text-sm">$2,450.00</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div className="w-3/4 bg-orange-500 h-full rounded-full"></div>
              </div>
              <p className="text-right text-[10px] text-orange-500 font-bold mt-1">Pending</p>
            </motion.div>

            <motion.div
              variants={floatAnimationDelayed}
              animate="animate"
              className="absolute left-0 lg:-left-8 bottom-10 lg:bottom-32 bg-[#00cba9] p-4 rounded-2xl shadow-xl z-20 text-white max-w-[160px] lg:max-w-none"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <FaShieldAlt />
                </div>
                <div>
                  <p className="font-bold text-sm">Audit Secure</p>
                  <p className="text-white/80 text-xs">System Protected</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;