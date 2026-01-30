import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaBook, FaMoneyBillWave, FaCheck, FaCalculator, FaFileInvoice, FaArrowRight, FaSyncAlt, FaChartPie, FaMobileAlt, FaLock, FaUserClock, FaCloudDownloadAlt, FaFileExport, FaQuestionCircle, FaQuoteRight } from 'react-icons/fa';

const BloomCashbookLedger = () => {
  const [activeTab, setActiveTab] = useState('cashbook');

  const features = {
    cashbook: [
      { title: "Bank Feeds", desc: "Automatic import of bank transactions.", icon: <FaSyncAlt /> },
      { title: "GST/VAT Tracking", desc: "Simple cash-basis tax tracking.", icon: <FaCalculator /> },
      { title: "No Invoicing Needed", desc: "Perfect for retail or cash businesses.", icon: <FaMoneyBillWave /> },
      { title: "Easy Reconciliation", desc: "One-click coding rules.", icon: <FaCheck /> }
    ],
    ledger: [
      { title: "Year-End Compliance", desc: "Full general ledger for annual accounts.", icon: <FaBook /> },
      { title: "Asset Register", desc: "Track fixed assets and depreciation.", icon: <FaFileInvoice /> },
      { title: "Manual Journals", desc: "Full control for adjustments.", icon: <FaCalculator /> },
      { title: "Financial Reporting", desc: "Balance sheet & P&L generation.", icon: <FaChartPie /> }
    ]
  };

  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <Navbar solid={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e3b5e] pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
            alt="Accounting Ledger Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e3b5e] via-[#0e3b5e]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#00cba9]/20 text-[#00cba9] font-bold text-sm mb-6 border border-[#00cba9]/30">
              For Your Smaller Clients
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Simple Needs, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">Smart Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Not every client needs a full ERP. Manage your cash-based clients and year-end compliance jobs efficiently with Bloom Cashbook and Ledger.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="px-8 py-4 bg-[#00cba9] text-white font-bold rounded-xl shadow-lg hover:bg-[#00b596] transition-all hover:-translate-y-1">
                Get started
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Animated Ledger/Notebook Graphic */}
            <div className="relative w-[500px] h-[600px] perspective-1000">
              <motion.div
                animate={{ rotateY: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-3xl shadow-2xl border-l-[12px] border-[#0e3b5e] overflow-hidden"
              >
                <div className="h-full w-full p-8 flex flex-col relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <FaBook size={200} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">General Ledger</div>
                  <div className="space-y-4 font-mono text-sm text-gray-600">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.5, repeat: Infinity, repeatDelay: 3 }}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <span>INV-{202400 + i}</span>
                        <span className={i % 2 === 0 ? "text-green-600" : "text-red-500"}>
                          {i % 2 === 0 ? "+" : "-"}${Math.floor(Math.random() * 500)}.00
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-auto p-4 bg-[#0e3b5e] text-white rounded-xl flex justify-between items-center">
                    <span>Total Balance</span>
                    <span className="font-bold text-xl">$12,450.00</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-10 top-20 bg-[#00cba9] text-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
              >
                <FaCheck className="text-3xl mb-2" />
                <div className="font-bold">Bank Reconciled</div>
                <div className="text-sm opacity-90">Just now</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Toggle Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-4">Choose the Right Tool</h2>
            <p className="text-xl text-gray-600">Toggle to see how Bloom adapts to your client's needs.</p>

            <div className="flex justify-center mt-8">
              <div className="bg-white p-1 rounded-full shadow-md inline-flex">
                <button
                  onClick={() => setActiveTab('cashbook')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'cashbook'
                    ? 'bg-[#00cba9] text-white shadow-sm'
                    : 'text-gray-500 hover:text-[#0e3b5e]'
                    }`}
                >
                  Bloom Cashbook
                </button>
                <button
                  onClick={() => setActiveTab('ledger')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'ledger'
                    ? 'bg-[#0e3b5e] text-white shadow-sm'
                    : 'text-gray-500 hover:text-[#0e3b5e]'
                    }`}
                >
                  Bloom Ledger
                </button>
              </div>
            </div>
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {features[activeTab].map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-transparent hover:border-[#00cba9] transition-all group">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl text-[#0e3b5e] mb-6 group-hover:bg-[#00cba9] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0e3b5e] mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-16 text-center">Which one fits?</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0e3b5e] text-white">
                  <th className="p-6 text-lg font-bold">Feature</th>
                  <th className="p-6 text-lg font-bold bg-[#00cba9] text-[#0e3b5e]">Cashbook</th>
                  <th className="p-6 text-lg font-bold">Ledger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Bank Feeds", cash: true, ledger: true },
                  { name: "GST/VAT Return", cash: true, ledger: true },
                  { name: "Invoicing", cash: false, ledger: false },
                  { name: "Fixed Assets", cash: false, ledger: true },
                  { name: "Budgeting", cash: false, ledger: true },
                  { name: "Document Storage", cash: true, ledger: true }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium text-gray-700">{row.name}</td>
                    <td className="p-6 bg-gray-50/50">
                      {row.cash ? <FaCheck className="text-green-500" /> : <span className="text-gray-300">-</span>}
                    </td>
                    <td className="p-6">
                      {row.ledger ? <FaCheck className="text-green-500" /> : <span className="text-gray-300">-</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Content: Use Cases */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-4">Perfect For...</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for specific client types that don't need the complexity of full business accounting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6">
                <FaUserClock />
              </div>
              <h3 className="text-xl font-bold text-[#0e3b5e] mb-3">Sole Traders</h3>
              <p className="text-gray-600">
                Contractors, freelancers, and tradies who just need to track income and expenses for tax time.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#00cba9]"
            >
              <div className="w-14 h-14 rounded-full bg-[#00cba9]/20 text-[#00cba9] flex items-center justify-center text-2xl mb-6">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-bold text-[#0e3b5e] mb-3">Rental Properties</h3>
              <p className="text-gray-600">
                Landlords managing multiple properties. Track rental income and maintenance costs effortlessly.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500"
            >
              <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-6">
                <FaLock />
              </div>
              <h3 className="text-xl font-bold text-[#0e3b5e] mb-3">Trusts & Estates</h3>
              <p className="text-gray-600">
                Keep accurate records for family trusts and deceased estates without unnecessary features.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Banner */}
      <section className="py-20 bg-[#0e3b5e] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Export to Tax Software</h2>
            <p className="text-blue-200 text-lg mb-8">
              Seamlessly push year-end data to your preferred tax compliance software. No manual data entry required.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <FaCloudDownloadAlt /> One-Click Export
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
                <FaFileExport /> PDF & Excel
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center gap-8 opacity-80">
            {/* Abstract representations of tax software logos */}
            <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center font-bold text-2xl">X</div>
            <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center font-bold text-2xl">MYOB</div>
            <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center font-bold text-2xl">APS</div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FaQuoteRight className="text-5xl text-[#00cba9]/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b5e] mb-8 leading-tight">
            "Bloom Cashbook is a game-changer for my smaller clients. They don't get overwhelmed, and I get the clean data I need for their tax returns."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div className="font-bold text-[#0e3b5e]">Rebecca Smith</div>
              <div className="text-sm text-gray-500">Chartered Accountant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#00cba9] to-[#00b596] text-white text-center px-6 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-[100px] border-white/10 rounded-full pointer-events-none"
        ></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-8 text-[#0e3b5e]">Start streamlining your compliance today</h2>
          <p className="text-xl text-[#0e3b5e]/80 mb-10 font-medium">
            Join the practice management revolution. Simple, powerful, and affordable.
          </p>
          <Link to="/register" className="px-12 py-5 bg-[#0e3b5e] text-white font-bold rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto inline-flex">
            Get started <FaArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomCashbookLedger;
