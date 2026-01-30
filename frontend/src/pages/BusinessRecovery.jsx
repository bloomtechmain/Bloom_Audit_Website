import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaHandHoldingUsd, FaLightbulb, FaArrowRight, FaHistory, FaServer, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BusinessRecovery = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      <Navbar solid={false} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#0e3b5e] pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop")' }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00cba9]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00cba9] font-bold text-sm mb-6 backdrop-blur-md">
              ✨ Business Continuity Suite
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              Turn Uncertainty <br />
              Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">Opportunity</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl leading-relaxed">
              Don't just survive the downturn. Master it. Bloom ERP gives you the real-time financial clarity to pivot faster than the market changes.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/register" className="px-8 py-4 bg-[#00cba9] text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(0,203,169,0.3)] hover:shadow-[0_0_30px_rgba(0,203,169,0.5)] hover:bg-[#00b596] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Get started <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side Visual - Glassmorphism Cards */}
          <div className="relative hidden lg:flex h-[600px] items-center justify-center perspective-1000">
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-[400px] h-[500px] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
            >
              {/* Mock UI Content */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <FaChartLine />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Recovery Index</div>
                    <div className="text-xl font-bold text-white">94.2%</div>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">+12.5%</div>
              </div>

              {/* Graph Area */}
              <div className="h-48 w-full bg-white/5 rounded-xl mb-6 relative overflow-hidden flex items-end px-2 pb-2 gap-2">
                {[40, 35, 30, 45, 60, 75, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className="flex-1 bg-gradient-to-t from-blue-500 to-teal-400 rounded-t-md opacity-80"
                  />
                ))}
              </div>

              {/* List Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs"><FaShieldAlt /></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Risk Audit</div>
                    <div className="text-xs text-gray-400">Completed 2 mins ago</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs"><FaLightbulb /></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Pivot Strategy</div>
                    <div className="text-xs text-gray-400">AI Generated</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, 30, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-20 right-10 w-48 p-4 bg-[#00cba9]/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 z-20"
            >
              <div className="text-xs font-bold text-[#0a192f] mb-1">Cash Flow</div>
              <div className="text-2xl font-bold text-white">Positive</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-32 left-0 w-40 p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 z-0"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-300">System Stable</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-green-400 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Wave */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-20">
          <svg className="relative block w-full h-[80px] md:h-[150px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#f9fafb" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#0e3b5e]">
                Resilience in a Changing Economy
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Economic fluctuations, currency devaluation, and market shifts can test even the strongest businesses. The key to survival isn't just cutting costs—it's strategic optimization.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bloom ERP helps you visualize your cash flow in real-time, identify waste, and pivot your strategy with data-backed confidence.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl shadow-md border-l-4 border-[#00cba9]">
                  <h4 className="font-bold text-xl mb-2">Stabilize</h4>
                  <p className="text-sm text-gray-500">Secure your cash flow and manage immediate risks.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-md border-l-4 border-[#1c3bd8]">
                  <h4 className="font-bold text-xl mb-2">Strategize</h4>
                  <p className="text-sm text-gray-500">Plan for multiple scenarios with predictive modeling.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Creative Graphic: Floating Elements */}
              <div
                className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-cover bg-center group"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'
                }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm transition-opacity duration-500 group-hover:bg-white/70"></div>

                <motion.div
                  className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.div
                  className="relative z-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-gray-100"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <FaChartLine size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">Cash Flow Positive</h5>
                      <p className="text-xs text-green-600">+15% vs Last Month</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                      <FaShieldAlt />
                    </div>
                    <span className="font-semibold text-sm">Risk Mitigated</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recovery Pillars */}
      <section className="py-20 bg-[#0e3b5e] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Bloom Recovery Framework</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">A comprehensive approach to rebuilding business health, designed for the modern challenges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandHoldingUsd />,
                title: "Liquidity Management",
                desc: "Real-time tracking of every rupee. Prioritize payments, manage receivables, and visualize your runway."
              },
              {
                icon: <FaLightbulb />,
                title: "Smart Pivot",
                desc: "Identify profitable lines of business and cut dead weight using our AI-driven profitability analysis."
              },
              {
                icon: <FaShieldAlt />,
                title: "Operational Resilience",
                desc: "Automate routine tasks to reduce overhead and free up your team to focus on high-value recovery activities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[#00cba9]/20 rounded-2xl flex items-center justify-center text-[#00cba9] text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-200 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 'Future' Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#0e3b5e] mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Rebuild. Reinvent. Recover.
          </motion.h2>

          <div className="relative max-w-4xl mx-auto h-[300px] flex items-center justify-center">
            {/* Central Circle */}
            <motion.div
              className="w-40 h-40 bg-[#0e3b5e] rounded-full flex items-center justify-center z-10 text-white font-bold text-xl shadow-xl"
              animate={{ boxShadow: ["0 0 0 0px rgba(14, 59, 94, 0.3)", "0 0 0 20px rgba(14, 59, 94, 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Your Business
            </motion.div>

            {/* Orbiting Elements */}
            <motion.div
              className="absolute w-full h-full animate-spin-slow"
              style={{ animation: "spin 20s linear infinite" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-[#1c3bd8] font-bold text-xs">Strategy</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-[#00cba9] font-bold text-xs">Growth</div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-orange-500 font-bold text-xs">Audit</div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-purple-500 font-bold text-xs">Legal</div>
            </motion.div>
          </div>

          <style>{`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>

          <p className="mt-16 text-xl text-gray-600">
            Everything connects when you have the right foundation.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00cba9] to-[#00b596] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Write Your Comeback Story?</h2>
          <Link to="/register" className="px-10 py-4 bg-white text-[#00cba9] rounded-full font-bold text-xl shadow-2xl hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 inline-flex">
            Get started <FaArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessRecovery;
