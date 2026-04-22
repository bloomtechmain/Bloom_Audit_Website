import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaRocket, FaGem, FaSeedling, FaStore, FaChartPie, FaTags, FaArrowRight } from 'react-icons/fa';
import { smallBizPlans } from '../config/pricingData';
import EnterpriseInquiryModal from '../Components/EnterpriseInquiryModal';
import UpgradeConfirmationModal from '../Components/UpgradeConfirmationModal';

const SmallPricing = () => {
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
            const response = await fetch(`${API_URL}/api/upgrades/request`, {
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
        <div className="font-sans overflow-x-hidden bg-gray-50">
            <Navbar solid />
            <EnterpriseInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} />
            <UpgradeConfirmationModal
                isOpen={isUpgradeModalOpen}
                onClose={() => setIsUpgradeModalOpen(false)}
                onConfirm={handleUpgradeConfirm}
                planName={selectedUpgradePlan}
                isSubmitting={isSubmittingUpgrade}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden bg-[#0e3b5e] text-white rounded-b-[3rem]">
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

                <div className="relative z-10 max-w-4xl mx-auto">
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00cba9] font-bold text-sm mb-6 backdrop-blur-md"
                    >
                        <FaTags /> SMALL BUSINESS SPECIALS
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
                    >
                        Big features for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-300">small business budgets.</span>
                    </motion.h1>

                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Scale your business with plans designed for Sri Lankan entrepreneurs. No hidden fees, just growth.
                    </p>

                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-lg font-bold transition-colors ${!isYearly ? 'text-white' : 'text-blue-300'}`}>Monthly</span>
                        <div
                            onClick={() => setIsYearly(!isYearly)}
                            className={`w-16 h-8 bg-[#00cba9] rounded-full p-1 cursor-pointer flex items-center shadow-inner transition-colors duration-300 ${isYearly ? 'justify-end' : 'justify-start'}`}
                        >
                            <motion.div
                                layout
                                className="bg-white w-6 h-6 rounded-full shadow-lg"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <span className={`text-lg font-bold transition-colors ${isYearly ? 'text-white' : 'text-blue-300'}`}>
                            Yearly
                        </span>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-sm md:text-base text-[#00cba9] font-bold mt-[-20px] mb-12"
                    >
                        If you pay for the yearly subscription you pay 10% less through the whole price range
                    </motion.p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4 -mt-20 relative z-20">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 items-start">
                    {smallBizPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(20%-2rem)] min-w-[300px] bg-white rounded-3xl overflow-hidden shadow-xl border flex flex-col ${plan.popular ? 'border-[#00cba9] ring-4 ring-[#00cba9]/20 transform md:-translate-y-4' : 'border-gray-100'}`}
                        >
                            <div className={`p-6 ${plan.headerBg} text-white relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative z-10 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                                        <p className="text-white/80 text-sm">{plan.tagline}</p>
                                    </div>
                                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl">
                                        {plan.icon}
                                    </div>
                                </div>

                                {/* Current Plan Badge */}
                                {user && user.package_name === plan.name && (
                                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-widest shadow-sm z-20">
                                        Current Plan
                                    </div>
                                )}

                                {/* Popular Badge (only if not current plan) */}
                                {!user?.package_name?.includes(plan.name) && plan.popular && (
                                    <div className="absolute top-0 right-0 bg-yellow-400 text-[#0e3b5e] text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-widest shadow-sm z-20">
                                        Most Popular
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline">
                                            {!plan.displayPrice && <span className="text-sm font-semibold text-gray-400 mr-1">LKR</span>}
                                            <span className="text-4xl font-extrabold text-[#0e3b5e]">
                                                {plan.displayPrice ? plan.displayPrice : (
                                                    isYearly
                                                        ? (plan.price * 12 * 0.9).toLocaleString(undefined, { maximumFractionDigits: 0 })
                                                        : (plan.promoPrice ? plan.promoPrice.toLocaleString() : plan.price.toLocaleString())
                                                )}
                                            </span>
                                            {!plan.displayPrice && <span className="text-gray-400 ml-1 font-medium text-sm">/{isYearly ? 'yr' : 'mo'}</span>}
                                        </div>

                                        {/* Monthly Promo Text */}
                                        {!isYearly && plan.promoPrice && !plan.displayPrice && (
                                            <div className="mt-2">
                                                <p className="text-xs text-[#00cba9] font-bold uppercase tracking-wide">{plan.promoText}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">Regular price: LKR {plan.price.toLocaleString()}</p>
                                            </div>
                                        )}

                                        {/* Yearly Savings */}
                                        {isYearly && !plan.displayPrice && (
                                            <div className="mt-2 text-xs text-[#00cba9] font-bold flex items-center gap-1">
                                                <FaTags /> Save {(plan.price * 12 * 0.1).toLocaleString(undefined, { maximumFractionDigits: 0 })} LKR/yr
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-4 text-xs text-gray-500 font-medium bg-gray-50 p-2 rounded-lg inline-block">
                                        {plan.features[0]} {/* Usually User Count */}
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8 flex-grow">
                                    {plan.features.slice(1).map((feature, i) => ( // Skip first feature as it's shown above
                                        <div key={i} className="flex items-start">
                                            <div className="bg-[#e5f9f6] p-1 rounded-full mr-3 flex-shrink-0 mt-0.5">
                                                <FaCheck className="text-[#00cba9]" size={10} />
                                            </div>
                                            <span className="text-gray-600 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.unavailable?.map((feature, i) => (
                                        <div key={i} className="flex items-start opacity-40">
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
                                        className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 mt-auto ${plan.popular
                                            ? 'bg-[#00cba9] text-white hover:bg-[#00b596] shadow-lg hover:shadow-[#00cba9]/40'
                                            : 'bg-[#0e3b5e] text-white hover:bg-[#1c4b7e] shadow-lg'
                                            }`}
                                    >
                                        {user ? 'Select Plan' : plan.cta} <FaArrowRight />
                                    </button>
                                ) : user ? (
                                    <button
                                        onClick={() => handlePlanClick(plan)}
                                        disabled={user.package_name === plan.name}
                                        className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 mt-auto ${user.package_name === plan.name
                                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                                            : plan.popular
                                                ? 'bg-[#00cba9] text-white hover:bg-[#00b596] shadow-lg hover:shadow-[#00cba9]/40'
                                                : 'bg-[#0e3b5e] text-white hover:bg-[#1c4b7e] shadow-lg'
                                            }`}
                                    >
                                        {user.package_name === plan.name ? 'Current Plan' : 'Select Plan'} {user.package_name !== plan.name && <FaArrowRight />}
                                    </button>
                                ) : (
                                    <Link
                                        to="/register"
                                        className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 mt-auto ${plan.popular
                                            ? 'bg-[#00cba9] text-white hover:bg-[#00b596] shadow-lg hover:shadow-[#00cba9]/40'
                                            : 'bg-[#0e3b5e] text-white hover:bg-[#1c4b7e] shadow-lg'
                                            }`}
                                    >
                                        {plan.cta} <FaArrowRight />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ / Trust Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#0e3b5e] mb-12">Common questions from small business owners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-lg mb-2 text-[#0e3b5e]">Can I upgrade later?</h4>
                            <p className="text-gray-600">Absolutely. You can switch plans at any time as your business grows. We'll prorate the difference.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-lg mb-2 text-[#0e3b5e]">Is support included?</h4>
                            <p className="text-gray-600">Yes! All plans come with email support. Standard and Premium plans get priority response times.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-lg mb-2 text-[#0e3b5e]">Do I need to install anything?</h4>
                            <p className="text-gray-600">No. Bloom ERP is 100% cloud-based. Just log in from any browser, anywhere.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl">
                            <h4 className="font-bold text-lg mb-2 text-[#0e3b5e]">Is my data safe?</h4>
                            <p className="text-gray-600">We use bank-level encryption and back up your data daily. Your security is our top priority.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SmallPricing;
