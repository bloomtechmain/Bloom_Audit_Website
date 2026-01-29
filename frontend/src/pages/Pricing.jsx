import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaStar, FaPaperPlane, FaRocket, FaGem } from 'react-icons/fa';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden bg-[#0e3b5e]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop")' }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00cba9]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#00cba9]/10 border border-[#00cba9] text-[#00cba9] font-bold text-sm tracking-wider mb-6 backdrop-blur-md"
          >
            PRICING PLANS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Choose the Right Plan for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#42e2b8]">Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light"
          >
            Transparent pricing. No hidden fees. Cancel anytime.
            <br />Try Bloom ERP risk-free for 30 days.
          </motion.p>

          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12 bg-white/10 backdrop-blur-md p-2 rounded-full inline-flex border border-white/20"
          >
            <span className={`text-lg font-bold transition-colors ${!isYearly ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
            <div
              onClick={() => setIsYearly(!isYearly)}
              className="w-20 h-10 bg-[#00cba9] rounded-full p-1 cursor-pointer flex items-center shadow-inner transition-colors duration-300 relative"
            >
              <motion.div
                layout
                className="bg-white w-8 h-8 rounded-full shadow-lg absolute"
                animate={{ left: isYearly ? "calc(100% - 36px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={`text-lg font-bold transition-colors ${isYearly ? 'text-white' : 'text-blue-200'}`}>
              Yearly <span className="text-[#0e3b5e] text-xs font-bold bg-[#00cba9] px-2 py-1 rounded-full ml-1">-20%</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-8 lg:px-12 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -20 }}
                className={`rounded-3xl overflow-hidden shadow-2xl flex flex-col relative transition-all duration-300 ${plan.recommended
                  ? 'bg-white ring-4 ring-[#00cba9]/30 transform md:-translate-y-8 z-10'
                  : 'bg-white border border-gray-100'
                  }`}
              >
                {/* Header Image/Icon Area */}
                <div
                  className={`h-40 ${plan.headerColor} flex items-center justify-center relative overflow-hidden group`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${plan.backgroundImage})` }}
                  ></div>

                  <div className="absolute inset-0 bg-black/10 z-0"></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-xl z-0"></div>
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-xl z-0"></div>

                  <div className="z-10 text-white p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 transform group-hover:scale-110 transition-transform duration-500">
                    {plan.icon}
                  </div>
                </div>

                {plan.recommended && (
                  <div className="absolute top-4 right-4 bg-[#00cba9] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider animate-pulse">
                    Best Value
                  </div>
                )}

                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-bold text-[#0e3b5e] mb-2 text-center">{plan.name}</h3>
                  <p className="text-gray-500 text-sm text-center mb-6 h-10">{plan.description}</p>

                  <div className="flex justify-center items-baseline mb-8 pb-8 border-b border-gray-100">
                    <span className="text-sm font-semibold text-gray-400 mr-1 self-start mt-2">LKR</span>
                    <span className="text-5xl font-extrabold text-[#0e3b5e]">
                      {isYearly ? (plan.price * 12 * 0.8).toLocaleString() : plan.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2 font-medium">/{isYearly ? 'year' : 'mo'}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-[#e5f9f6] p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                          <FaCheck className="text-[#00cba9]" size={10} />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                    {plan.unavailable?.map((feature, i) => (
                      <div key={i} className="flex items-start opacity-40 grayscale">
                        <div className="bg-gray-100 p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                          <FaTimes className="text-gray-400" size={10} />
                        </div>
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${plan.recommended
                    ? 'bg-gradient-to-r from-[#00cba9] to-[#00b596] text-white shadow-lg hover:shadow-[#00cba9]/40'
                    : 'bg-gray-50 text-[#0e3b5e] hover:bg-gray-100 border border-gray-200'
                    }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional "Why Choose" Section */}
          <div className="mt-32 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                alt="Team Meeting"
                className="rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b5e] mb-6">Why over 1000+ Sri Lankan businesses trust Bloom ERP</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#00cba9]">
                  <h4 className="font-bold text-lg mb-2">Local Support</h4>
                  <p className="text-sm text-gray-600">Dedicated support team based in Colombo available 24/7.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#1c3bd8]">
                  <h4 className="font-bold text-lg mb-2">LKR Billing</h4>
                  <p className="text-sm text-gray-600">No exchange rate fluctuations. Pay directly in LKR.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-2">Tax Compliant</h4>
                  <p className="text-sm text-gray-600">Fully compliant with latest Sri Lankan tax regulations.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-2">Secure Data</h4>
                  <p className="text-sm text-gray-600">Bank-grade encryption to keep your financial data safe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const plans = [
  {
    name: "Starter",
    price: 20000,
    description: "Essential tools for freelancers and solopreneurs.",
    buttonText: "Start Free Trial",
    headerColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    backgroundImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <FaPaperPlane size={24} />,
    features: [
      "Send invoices and quotes",
      "Enter bills",
      "Reconcile bank transactions",
      "Capture bills with Hubdoc",
      "Basic reports"
    ],
    unavailable: [
      "Bulk reconcile transactions",
      "Multi-currency",
      "Project tracking",
      "Advanced Analytics",
      "Payroll"
    ]
  },
  {
    name: "Standard",
    price: 40000,
    description: "Perfect for growing small businesses.",
    buttonText: "Start Free Trial",
    recommended: true,
    headerColor: "bg-gradient-to-br from-[#00cba9] to-[#008f7a]",
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <FaRocket size={24} />,
    features: [
      "Everything in Starter",
      "Bulk reconcile transactions",
      "Manage multiple currencies",
      "Short-term cash flow",
      "Business snapshot"
    ],
    unavailable: [
      "Project tracking",
      "Advanced Analytics",
      "Payroll"
    ]
  },
  {
    name: "Premium",
    price: 75000,
    description: "Advanced features for established companies.",
    buttonText: "Start Free Trial",
    headerColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    icon: <FaGem size={24} />,
    features: [
      "Everything in Standard",
      "Project tracking",
      "Advanced Analytics",
      "Payroll for 5 employees",
      "Expense claims",
      "Priority support"
    ]
  }
];

export default Pricing;
