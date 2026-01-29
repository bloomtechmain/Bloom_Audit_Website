import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaRocket, FaGem, FaSeedling, FaStore, FaChartPie, FaTags } from 'react-icons/fa';

const SmallPricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className="font-sans overflow-x-hidden bg-gray-50">
            <Navbar solid />

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
                            className="w-16 h-8 bg-[#00cba9] rounded-full p-1 cursor-pointer flex items-center transition-colors duration-300 relative"
                        >
                            <motion.div
                                layout
                                className="bg-white w-6 h-6 rounded-full shadow-lg absolute"
                                animate={{ left: isYearly ? "calc(100% - 28px)" : "4px" }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </div>
                        <span className={`text-lg font-bold transition-colors ${isYearly ? 'text-white' : 'text-blue-300'}`}>
                            Yearly <span className="text-xs bg-white text-[#0e3b5e] px-2 py-0.5 rounded-full ml-1">Save 20%</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4 -mt-20 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {smallBizPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`bg-white rounded-3xl overflow-hidden shadow-xl border flex flex-col ${plan.popular ? 'border-[#00cba9] ring-4 ring-[#00cba9]/20 transform md:-translate-y-4' : 'border-gray-100'}`}
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
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-[#0e3b5e]">LKR {isYearly ? (plan.price * 12 * 0.8).toLocaleString() : plan.price.toLocaleString()}</span>
                                    <span className="text-gray-500 font-medium">/{isYearly ? 'year' : 'mo'}</span>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <FaCheck className="text-[#00cba9] mt-1 flex-shrink-0" />
                                            <span className="text-gray-600 text-sm font-medium">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.unavailable?.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 opacity-40">
                                            <FaTimes className="text-gray-400 mt-1 flex-shrink-0" />
                                            <span className="text-gray-400 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-[#00cba9] text-white hover:bg-[#00b596] shadow-lg hover:shadow-[#00cba9]/40' : 'bg-gray-100 text-[#0e3b5e] hover:bg-gray-200'}`}>
                                    {plan.cta}
                                </button>
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

const smallBizPlans = [
    {
        name: "Micro",
        tagline: "For side hustles",
        price: 5000,
        icon: <FaSeedling className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-green-400 to-teal-500",
        cta: "Start Free",
        features: [
            "Up to 5 invoices/mo",
            "Expense tracking",
            "Bank reconciliation (Manual)",
            "1 User"
        ],
        unavailable: [
            "Automated bank feeds",
            "GST/VAT reports",
            "Inventory management",
            "Payroll"
        ]
    },
    {
        name: "Growth",
        tagline: "Most popular choice",
        price: 15000,
        popular: true,
        icon: <FaStore className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-[#00cba9] to-blue-500",
        cta: "Start 14-Day Trial",
        features: [
            "Unlimited invoices",
            "Automated bank feeds",
            "GST/VAT reports",
            "3 Users",
            "Inventory (Basic)",
            "Mobile App Access"
        ],
        unavailable: [
            "Payroll",
            "Advanced Analytics",
            "Multi-currency"
        ]
    },
    {
        name: "Pro",
        tagline: "Serious business",
        price: 35000,
        icon: <FaChartPie className="text-2xl" />,
        headerBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
        cta: "Contact Sales",
        features: [
            "Everything in Growth",
            "Multi-currency",
            "Payroll for 5 staff",
            "Advanced Analytics",
            "Project Management",
            "Priority Support"
        ]
    }
];

export default SmallPricing;
