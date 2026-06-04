import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaGem, FaPhoneAlt } from 'react-icons/fa';
import { plans, addOns } from '../config/pricingData';
import EnterpriseInquiryModal from '../Components/EnterpriseInquiryModal';
import UpgradeConfirmationModal from '../Components/UpgradeConfirmationModal';
import API_URL from '../api';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

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
    if (!user) return;
    if (plan.isEnterprise) {
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
      const response = await fetch(`${API_URL}/api/upgrades/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: user.id,
          userName: user.name,
          userEmail: user.email,
          currentPlan: user.package_name || 'None',
          requestedPlan: selectedUpgradePlan,
        }),
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

  const getPrice = (plan) => {
    if (plan.isEnterprise) return null;
    return isYearly ? plan.priceYearly : plan.priceMonthly;
  };

  const isCurrent = (plan) => user && user.package_name === plan.name;

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

      {/* Hero */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 md:pb-20 overflow-hidden bg-[#0e3b5e]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop")' }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00cba9]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-4xl mx-auto z-10 relative">
          {user && user.package_name && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="mb-8 mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl max-w-md w-full text-left relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 p-3 opacity-20"><FaGem className="text-5xl text-white" /></div>
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-1">Your Current Plan</p>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-white">{user.package_name}</h2>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${user.package_status === 'active' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'}`}>
                    {user.package_status}
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#00cba9]/10 border border-[#00cba9] text-[#00cba9] font-bold text-sm tracking-wider mb-6 backdrop-blur-md">
            PRICING PLANS
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Choose the Right Plan for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#42e2b8]">Growth</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Transparent pricing. No hidden fees. Cancel anytime.
            <br />Try Bloom ERP risk-free for 30 days.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-4 md:gap-6 mb-4 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 inline-flex">
            <span className={`text-base md:text-lg font-bold transition-colors ${!isYearly ? 'text-white' : 'text-blue-200'}`}>Monthly</span>
            <div onClick={() => setIsYearly(!isYearly)}
              className={`w-16 h-8 md:w-20 md:h-10 bg-[#00cba9] rounded-full p-1 cursor-pointer flex items-center shadow-inner transition-colors duration-300 ${isYearly ? 'justify-end' : 'justify-start'}`}>
              <motion.div layout className="bg-white w-6 h-6 md:w-8 md:h-8 rounded-full shadow-lg"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
            </div>
            <span className={`text-base md:text-lg font-bold transition-colors ${isYearly ? 'text-white' : 'text-blue-200'}`}>
              Yearly <span className="text-[#00cba9] text-sm font-extrabold ml-1">Save 17%</span>
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-sm md:text-base text-[#00cba9] font-bold mb-12">
            Pay annually and save ~17% — that's 2 months free every year.
          </motion.p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-8 lg:px-12 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -20 }}
                className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-2rem)] min-w-[280px] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white ring-4 ring-[#00cba9]/40 transform md:-translate-y-4 z-10'
                    : plan.isEnterprise
                    ? 'bg-[#0e3b5e] border border-gray-700'
                    : 'bg-white border border-gray-100'
                }`}>

                {/* Plan Header */}
                <div className={`h-44 ${plan.headerColor} flex flex-col items-center justify-center relative overflow-hidden group px-6`}>
                  <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center"
                    style={{ backgroundImage: `url(${plan.backgroundImage})` }}></div>
                  <div className="absolute inset-0 bg-black/10 z-0"></div>
                  <div className="z-10 text-white p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 mb-3">
                    {plan.icon}
                  </div>
                  <div className="z-10 text-center">
                    <p className="text-white/80 text-xs font-medium">{plan.maxUsersLabel}</p>
                  </div>

                  {/* Badges */}
                  {!isCurrent(plan) && plan.popular && (
                    <div className="absolute top-3 right-3 bg-[#00cba9] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow uppercase tracking-wider animate-pulse z-20">
                      Most Popular
                    </div>
                  )}
                  {isCurrent(plan) && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow uppercase tracking-wider z-20">
                      Current Plan
                    </div>
                  )}
                </div>

                <div className={`p-6 flex-grow flex flex-col ${plan.isEnterprise ? 'text-white' : ''}`}>
                  <h3 className={`text-2xl font-bold mb-1 text-center ${plan.isEnterprise ? 'text-white' : 'text-[#0e3b5e]'}`}>{plan.name}</h3>
                  <p className={`text-xs text-center mb-4 ${plan.isEnterprise ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>

                  {/* Price */}
                  <div className="flex flex-col items-center mb-6 pb-6 border-b border-gray-100/20 min-h-[100px] justify-center">
                    {plan.isEnterprise ? (
                      <div className="text-center">
                        <div className="text-3xl font-extrabold text-white">
                          {isYearly ? '$2,990' : '$299'}
                          <span className="text-gray-300 text-sm font-normal ml-1">/{isYearly ? 'yr' : 'mo'}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {isYearly ? 'billed annually' : 'billed monthly'}
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="flex items-baseline justify-center">
                          <span className="text-sm font-semibold text-gray-400 mr-1">$</span>
                          <span className="text-4xl font-extrabold text-[#0e3b5e]">{getPrice(plan)}</span>
                          <span className="text-gray-400 ml-1 font-medium text-sm">/{isYearly ? 'yr' : 'mo'}</span>
                        </div>
                        {isYearly ? (
                          <p className="text-xs text-[#00cba9] font-bold mt-1">
                            Save 17% — billed annually
                          </p>
                        ) : (
                          <p className="text-xs text-gray-400 mt-1">
                            ${plan.priceYearly}/yr billed annually
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {plan.prevPlanName && (
                      <p className={`text-xs font-bold mb-3 ${plan.isEnterprise ? 'text-gray-300' : 'text-gray-500'}`}>
                        Everything in {plan.prevPlanName}, plus:
                      </p>
                    )}
                    {plan.tierFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className={`p-1 rounded-full mr-2 flex-shrink-0 mt-0.5 ${plan.isEnterprise ? 'bg-white/10' : 'bg-[#e5f9f6]'}`}>
                          <FaCheck className={plan.isEnterprise ? 'text-[#00cba9]' : 'text-[#00cba9]'} size={9} />
                        </div>
                        <span className={`text-xs font-medium ${plan.isEnterprise ? 'text-gray-200' : 'text-gray-700'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {plan.isEnterprise ? (
                    <div className="space-y-2 mt-auto">
                      {user ? (
                        <button onClick={() => setIsModalOpen(true)}
                          className="w-full py-3 rounded-xl font-bold text-sm bg-white text-[#0e3b5e] hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                          Request Upgrade
                        </button>
                      ) : (
                        <>
                          <Link to={`/register?plan=enterprise`}
                            className="w-full py-3 rounded-xl font-bold text-sm bg-[#00cba9] text-white hover:bg-[#00b596] transition-all duration-300 flex items-center justify-center gap-2 text-center">
                            Get Started
                          </Link>
                          <button onClick={() => setIsModalOpen(true)}
                            className="w-full py-2.5 rounded-xl font-bold text-xs bg-white/10 text-gray-200 hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                            <FaPhoneAlt size={10} /> Contact Sales
                          </button>
                        </>
                      )}
                    </div>
                  ) : user ? (
                    <button onClick={() => handlePlanClick(plan)}
                      disabled={isCurrent(plan)}
                      className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 mt-auto ${
                        isCurrent(plan)
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                          : plan.popular
                          ? 'bg-gradient-to-r from-[#00cba9] to-[#00b596] text-white shadow-lg hover:shadow-[#00cba9]/40 hover:scale-105'
                          : 'bg-white text-[#0e3b5e] hover:bg-gray-50 border border-gray-200 hover:scale-105'
                      }`}>
                      {isCurrent(plan) ? 'Current Plan' : 'Upgrade to ' + plan.name}
                    </button>
                  ) : (
                    <Link to={`/register?plan=${plan.slug}`}
                      className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 mt-auto block text-center hover:scale-105 ${
                        plan.popular
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

          {/* Add-Ons Section */}
          <div className="mt-24 mb-0 -mx-4 md:-mx-8 lg:-mx-12 px-4 md:px-8 lg:px-12 py-24 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0e3b5e 0%, #0a2a44 50%, #0e3b5e 100%)' }}>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00cba9]/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="inline-block px-4 py-1.5 rounded-full bg-[#00cba9]/10 border border-[#00cba9] text-[#00cba9] font-bold text-sm tracking-wider mb-6">
                  ADD-ON STORE
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Extend Any Plan with Add-Ons</h2>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                  Pick only what you need. Each add-on charges a fixed monthly fee on top of your base plan.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {addOns.map((addon, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: index * 0.03 }}
                    whileHover={{ y: -6 }}
                    className="relative bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl hover:border-[#00cba9]/50 hover:shadow-[0_0_30px_rgba(0,203,169,0.15)] transition-all duration-300 group flex flex-col">
                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#00cba9] to-transparent rounded-full"></div>

                    <div className="flex justify-between items-start mb-3">
                      <div className="w-10 h-10 bg-[#00cba9]/15 rounded-xl flex items-center justify-center text-[#00cba9] text-xl group-hover:scale-110 group-hover:bg-[#00cba9]/25 transition-all duration-300">
                        {addon.icon}
                      </div>
                      <span className="text-[#00cba9] font-extrabold text-lg">${addon.price}<span className="text-xs font-normal text-gray-400">/mo</span></span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-1">{addon.title}</h3>
                    <p className="text-blue-200 text-xs mb-3 flex-grow">{addon.description}</p>

                    <div className="pt-3 border-t border-white/10 space-y-1">
                      {addon.note && (
                        <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 mr-1">
                          {addon.note}
                        </span>
                      )}
                      {addon.requires && (
                        <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-md bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                          Requires {addon.requires}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mt-32 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                alt="Team Meeting"
                className="rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 border-8 border-white" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b5e] mb-6">Why growing businesses trust Bloom ERP</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#00cba9]">
                  <h4 className="font-bold text-lg mb-2">Dedicated Support</h4>
                  <p className="text-sm text-gray-600">Expert support team available to help you get the most out of Bloom ERP.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#1c3bd8]">
                  <h4 className="font-bold text-lg mb-2">USD Pricing</h4>
                  <p className="text-sm text-gray-600">Simple, transparent USD pricing with no surprise fees or currency risks.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-2">Tax Compliant</h4>
                  <p className="text-sm text-gray-600">Built-in VAT, GST & WHT management to keep your books compliant.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-2">Secure Data</h4>
                  <p className="text-sm text-gray-600">Bank-grade encryption to keep your financial data safe at all times.</p>
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
