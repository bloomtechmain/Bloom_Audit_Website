import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaStar, FaPaperPlane, FaRocket, FaGem } from 'react-icons/fa';
import { plans, addOns } from '../config/pricingData';
import EnterpriseInquiryModal from '../Components/EnterpriseInquiryModal';
import UpgradeConfirmationModal from '../Components/UpgradeConfirmationModal';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Upgrade Modal State
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [selectedUpgradePlan, setSelectedUpgradePlan] = useState(null);
  const [isSubmittingUpgrade, setIsSubmittingUpgrade] = useState(false);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  const handlePlanClick = (plan) => {
    if (!user) {
      // Logic handled by Link to register if not logged in
      return;
    }

    if (plan.name === "Enterprise") {
      setIsModalOpen(true);
    } else {
      setSelectedUpgradePlan(plan.name);
      setIsUpgradeModalOpen(true);
    }
  };

  const handleUpgradeConfirm = async () => {
    if (!selectedUpgradePlan || !user) return;

    setIsSubmittingUpgrade(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/upgrades/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          userId: user.id,
          userName: user.name,
          userEmail: user.email,
          currentPlan: user.package_name || 'None',
          requestedPlan: selectedUpgradePlan
        })
      });

      if (response.ok) {
        alert('Upgrade request submitted successfully!');
        setIsUpgradeModalOpen(false);
      } else {
        alert('Failed to submit request.');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting request.');
    } finally {
      setIsSubmittingUpgrade(false);
    }
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <EnterpriseInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} />
      <UpgradeConfirmationModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onConfirm={handleUpgradeConfirm}
        planName={selectedUpgradePlan}
        isSubmitting={isSubmittingUpgrade}
      />

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 md:pb-20 overflow-hidden bg-[#0e3b5e]">
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
          {user && user.package_name && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-md w-full text-left relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20">
                <FaGem className="text-5xl text-white" />
              </div>
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-1">Your Current Plan</p>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">{user.package_name}</h2>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${user.package_status === 'active' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
                    {user.package_status}
                  </span>
                </div>
                {user.package_end_date && (
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    Expires: <span className="font-mono bg-white/10 px-1 rounded">{new Date(user.package_end_date).toLocaleDateString()}</span>
                  </p>
                )}
              </div>
            </motion.div>
          )}

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
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
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
            className="flex items-center justify-center gap-4 md:gap-6 mb-12 bg-white/10 backdrop-blur-md p-2 rounded-full inline-flex border border-white/20"
          >
            <span className={`text-base md:text-lg font-bold transition-colors ${!isYearly ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
            <div
              onClick={() => setIsYearly(!isYearly)}
              className={`w-16 h-8 md:w-20 md:h-10 bg-[#00cba9] rounded-full p-1 cursor-pointer flex items-center shadow-inner transition-colors duration-300 ${isYearly ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div
                layout
                className="bg-white w-6 h-6 md:w-8 md:h-8 rounded-full shadow-lg"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={`text-base md:text-lg font-bold transition-colors ${isYearly ? 'text-white' : 'text-blue-200'}`}>
              Yearly
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm md:text-base text-[#00cba9] font-bold mt-[-30px] mb-12"
          >
            If you pay for the yearly subscription you pay 10% less through the whole price range
          </motion.p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-8 lg:px-12 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -20 }}
                className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(20%-2rem)] min-w-[300px] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative transition-all duration-300 ${plan.recommended
                  ? 'bg-white ring-4 ring-[#00cba9]/30 transform md:-translate-y-4 z-10'
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

                {/* Current Plan Badge */}
                {user && user.package_name === plan.name && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider z-20">
                    Current Plan
                  </div>
                )}

                {/* Best Value Badge (only if not current plan) */}
                {!user?.package_name?.includes(plan.name) && plan.recommended && (
                  <div className="absolute top-4 right-4 bg-[#00cba9] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider animate-pulse">
                    Best Value
                  </div>
                )}

                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-[#0e3b5e] mb-2 text-center">{plan.name}</h3>
                  <p className="text-gray-500 text-sm text-center mb-6 h-10">{plan.tagline}</p>

                  <div className="flex flex-col mb-8 pb-8 border-b border-gray-100 min-h-[140px] justify-center">
                    <div className="flex justify-center items-baseline">
                      {!plan.displayPrice && <span className="text-sm font-semibold text-gray-400 mr-1 self-start mt-2">LKR</span>}
                      <span className="text-4xl font-extrabold text-[#0e3b5e]">
                        {plan.displayPrice ? plan.displayPrice : (
                          isYearly
                            ? (plan.price * 12 * 0.9).toLocaleString(undefined, { maximumFractionDigits: 0 })
                            : (plan.promoPrice ? plan.promoPrice.toLocaleString() : plan.price.toLocaleString())
                        )}
                      </span>
                      {!plan.displayPrice && <span className="text-gray-400 ml-2 font-medium">/{isYearly ? 'year' : 'mo'}</span>}
                    </div>

                    {/* Monthly Promo Text */}
                    {!isYearly && plan.promoPrice && !plan.displayPrice && (
                      <div className="mt-2 text-center">
                        <p className="text-xs text-[#00cba9] font-bold uppercase tracking-wide">{plan.promoText}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Regular: LKR {plan.price.toLocaleString()}</p>
                      </div>
                    )}

                    {/* Yearly Savings */}
                    {isYearly && !plan.displayPrice && (
                      <div className="mt-2 text-xs text-[#00cba9] font-bold flex items-center justify-center gap-1">
                        <FaCheck /> Save {(plan.price * 12 * 0.1).toLocaleString(undefined, { maximumFractionDigits: 0 })} LKR/yr
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
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

                  {plan.name === "Enterprise" ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 block text-center mt-auto ${plan.recommended
                        ? 'bg-gradient-to-r from-[#00cba9] to-[#00b596] text-white shadow-lg hover:shadow-[#00cba9]/40'
                        : 'bg-white text-[#0e3b5e] hover:bg-gray-50 border border-gray-200'
                        }`}
                    >
                      {user ? 'Upgrade Plan' : plan.cta}
                    </button>
                  ) : user ? (
                    <button
                      onClick={() => handlePlanClick(plan)}
                      disabled={user.package_name === plan.name}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform block text-center mt-auto ${user.package_name === plan.name
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                        : `hover:scale-105 ${plan.recommended
                          ? 'bg-gradient-to-r from-[#00cba9] to-[#00b596] text-white shadow-lg hover:shadow-[#00cba9]/40'
                          : 'bg-white text-[#0e3b5e] hover:bg-gray-50 border border-gray-200'}`
                        }`}
                    >
                      {user.package_name === plan.name ? 'Current Plan' : 'Select Plan'}
                    </button>
                  ) : (
                    <Link to="/register" className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 block text-center mt-auto ${plan.recommended
                      ? 'bg-gradient-to-r from-[#00cba9] to-[#00b596] text-white shadow-lg hover:shadow-[#00cba9]/40'
                      : 'bg-white text-[#0e3b5e] hover:bg-gray-50 border border-gray-200'
                      }`}>
                      {plan.cta}
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add On Modules Section */}
          <div className="mt-24 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] mb-4">Powerful Add-On Modules</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Customize your experience with these specialized modules designed for specific business needs.</p>
              <p className="text-sm text-[#00cba9] font-bold mt-4 uppercase tracking-wider">Call for pricing for custom implementation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#e5f9f6] rounded-xl flex items-center justify-center text-[#00cba9] text-2xl mb-4 group-hover:scale-110 transition-transform">
                    {addon.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0e3b5e] mb-2">{addon.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 min-h-[40px]">{addon.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${addon.availability.includes("All Plans") ? "bg-green-100 text-green-700" :
                      addon.availability.includes("Call") ? "bg-blue-100 text-blue-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                      {addon.availability}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
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

export default Pricing;
