import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaCalendarCheck, FaFileInvoiceDollar, FaChartPie, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const EndOfFiscalYear = () => {
  const steps = [
    {
      id: 1,
      title: "Reconcile Accounts",
      desc: "Ensure all your bank and credit card transactions match your books perfectly.",
      icon: <FaFileInvoiceDollar />
    },
    {
      id: 2,
      title: "Review Financials",
      desc: "Analyze your Profit & Loss and Balance Sheet to understand your year's performance.",
      icon: <FaChartPie />
    },
    {
      id: 3,
      title: "Close the Books",
      desc: "Lock your data to prevent accidental changes and finalize your fiscal year.",
      icon: <FaCalendarCheck />
    }
  ];

  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <Navbar solid />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#0e3b5e] pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop")' }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
          
          {/* Animated Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-[100px]"
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00cba9]/20 rounded-full blur-[120px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-yellow-300 font-bold text-sm mb-8 backdrop-blur-md">
              <FaCalendarCheck /> FISCAL YEAR END
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
              Close Your Year <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#00cba9]">
                With Confidence.
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Wrap up your financial year seamlessly. From reconciliation to reporting, Bloom ERP guides you through a stress-free closing process.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#00cba9] text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(0,203,169,0.4)] hover:shadow-[0_0_30px_rgba(0,203,169,0.6)] hover:-translate-y-1 transition-all">
                Start Closing Process
              </button>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <h3 className="text-2xl font-bold text-white">Year-End Checklist</h3>
                <span className="bg-yellow-400 text-[#0e3b5e] px-3 py-1 rounded-full text-xs font-bold">
                  Priority
                </span>
              </div>
              
              <div className="space-y-6">
                {['Reconcile Bank Accounts', 'Review Outstanding Invoices', 'Verify Expense Claims', 'Run Final Reports'].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 text-blue-100"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#00cba9] flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-white/80 text-sm">
                  <span>Completion Status</span>
                  <span>0%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "35%" }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-gradient-to-r from-yellow-300 to-[#00cba9]"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-4">Simple 3-Step Closing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've simplified the complex accounting process into manageable steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 group hover:border-[#00cba9]/30 transition-all"
              >
                <div className="w-16 h-16 bg-[#0e3b5e]/5 rounded-2xl flex items-center justify-center text-3xl text-[#0e3b5e] mb-6 group-hover:bg-[#00cba9] group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.desc}
                </p>
                <div className="flex items-center gap-2 text-[#00cba9] font-bold group-hover:gap-3 transition-all cursor-pointer">
                  Learn More <FaArrowRight />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-[#0e3b5e] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00cba9]/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Close the Books?</h2>
          <p className="text-xl text-blue-200 mb-10">
            Don't wait until the last minute. Start your year-end process today with Bloom ERP's guided tools.
          </p>
          <button className="bg-white text-[#0e3b5e] font-bold py-4 px-12 rounded-full text-xl hover:bg-gray-100 transition-colors shadow-2xl">
            Go to Year-End Dashboard
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EndOfFiscalYear;
