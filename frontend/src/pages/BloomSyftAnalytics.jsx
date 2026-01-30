import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaChartLine, FaChartPie, FaGlobe, FaRocket, FaFileExport, FaBrain, FaArrowRight, FaLayerGroup } from 'react-icons/fa';

const BloomSyftAnalytics = () => {
  const features = [
    {
      icon: <FaChartPie />,
      title: "Beautiful Visualizations",
      desc: "Transform boring spreadsheets into interactive, easy-to-understand graphs and charts."
    },
    {
      icon: <FaBrain />,
      title: "AI-Powered Insights",
      desc: "Uncover hidden trends and anomalies in your financial data automatically."
    },
    {
      icon: <FaLayerGroup />,
      title: "Consolidations",
      desc: "Combine data from multiple entities with a single click. Handle multi-currency effortlessly."
    },
    {
      icon: <FaFileExport />,
      title: "Automated Reporting",
      desc: "Schedule report packs to be sent to stakeholders automatically. Never miss a deadline."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="font-sans overflow-x-hidden bg-[#f8fafc]">
      <Navbar solid={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e3b5e] pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00cba9] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#00cba9] font-bold text-sm mb-6 border border-white/20 backdrop-blur-sm">
              <FaRocket /> Powered by Syft Analytics
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Data storytelling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">reimagined</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
              Go beyond the numbers. Create beautiful, interactive reports that your clients will actually understand and love.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/register" className="px-8 py-4 bg-[#00cba9] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(0,203,169,0.4)] hover:shadow-[0_0_30px_rgba(0,203,169,0.6)] hover:bg-[#00b596] transition-all hover:-translate-y-1 flex items-center gap-2">
                Get started <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative hidden lg:block perspective-1000"
          >
            {/* Animated Dashboard Mockup */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transform transition-transform hover:scale-105 duration-500">
              {/* Header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white/50 text-sm font-mono">Executive Summary.pdf</div>
              </div>

              {/* Chart Area */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/20 p-4 rounded-xl">
                  <div className="text-xs text-white/70 mb-2">Revenue Growth</div>
                  <div className="h-32 flex items-end gap-2">
                    {[40, 65, 50, 80, 75, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-full bg-gradient-to-t from-[#00cba9] to-blue-500 rounded-t-sm opacity-80"
                      ></motion.div>
                    ))}
                  </div>
                </div>
                <div className="bg-black/20 p-4 rounded-xl">
                  <div className="text-xs text-white/70 mb-2">Expense Breakdown</div>
                  <div className="h-32 relative flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
                      <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
                      <motion.circle
                        cx="50" cy="50" r="40"
                        stroke="#00cba9"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset="251.2"
                        animate={{ strokeDashoffset: 60 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </svg>
                    <div className="absolute text-white font-bold text-xl">76%</div>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {[
                  { label: "Net Profit", val: "$124k", change: "+12%" },
                  { label: "Gross Margin", val: "45%", change: "+5%" },
                  { label: "Cash Flow", val: "$82k", change: "+8%" }
                ].map((stat, i) => (
                  <div key={i} className="bg-black/20 p-3 rounded-lg">
                    <div className="text-xs text-white/50">{stat.label}</div>
                    <div className="text-lg font-bold text-white">{stat.val}</div>
                    <div className="text-xs text-green-400">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-600"><FaChartLine /></div>
                <div>
                  <div className="text-xs text-gray-500">Forecast Accuracy</div>
                  <div className="font-bold text-[#0e3b5e]">98.5%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-4">Why Top Firms Choose Syft</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Powerful features designed to help you advise your clients with confidence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className="w-14 h-14 bg-white text-[#00cba9] rounded-xl flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:bg-[#00cba9] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0e3b5e] mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Visualization Section */}
      <section className="py-24 px-6 bg-[#0e3b5e] overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-white mb-6">Global Consolidations</h2>
            <p className="text-xl text-blue-200 mb-8">
              Managing multi-entity groups? Syft handles currency conversions and eliminations automatically.
            </p>
            <ul className="space-y-4">
              {["170+ Currencies Supported", "Auto-Eliminations", "Fractional Ownership", "Cross-Border Tax Views"].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white font-medium"
                >
                  <div className="w-6 h-6 rounded-full bg-[#00cba9] flex items-center justify-center text-[#0e3b5e] text-xs"><FaGlobe /></div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <motion.img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Global Analytics"
              referrerPolicy="no-referrer"
              className="rounded-2xl shadow-2xl border-4 border-white/10"
              initial={{ opacity: 0, rotate: 5 }}
              whileInView={{ opacity: 1, rotate: 3 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-8 -left-8 bg-white text-[#0e3b5e] p-6 rounded-xl shadow-2xl max-w-xs"
            >
              <div className="font-bold text-lg mb-2">Consolidated View</div>
              <div className="h-2 bg-gray-200 rounded-full mb-2 overflow-hidden">
                <div className="h-full bg-[#00cba9] w-3/4"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Group A</span>
                <span>75%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#00cba9] to-[#00b596] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white mb-8">Ready to visualize your success?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-[#00cba9] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
              Get started <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomSyftAnalytics;
