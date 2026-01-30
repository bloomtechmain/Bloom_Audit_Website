import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaRocket, FaChartLine, FaUsers, FaFileInvoiceDollar, FaShieldAlt, FaCogs, FaPlayCircle, FaArrowRight, FaCheck } from 'react-icons/fa';

const Guides = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up & Setup",
      description: "Create your account in seconds. Select your business type, and let our smart wizard configure your dashboard specifically for your industry needs.",
      icon: <FaRocket />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Connect Your Banks",
      description: "Securely link your bank accounts. Bloom ERP automatically imports transactions, categorizes them, and prepares them for reconciliation.",
      icon: <FaShieldAlt />,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Manage Invoices",
      description: "Create professional invoices with custom branding. Set up recurring payments and automatic reminders to get paid faster.",
      icon: <FaFileInvoiceDollar />,
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Collaborate",
      description: "Invite your accountant or team members. Assign roles and permissions to ensure everyone has the right access level.",
      icon: <FaUsers />,
      color: "bg-orange-500"
    }
  ];

  const features = [
    {
      title: "Real-Time Sync",
      desc: "Data updates instantly across all devices. No more version conflicts.",
      delay: 0.1
    },
    {
      title: "AI Automation",
      desc: "Smart algorithms predict expenses and automate repetitive data entry.",
      delay: 0.2
    },
    {
      title: "Bank-Grade Security",
      desc: "256-bit encryption keeps your financial data safe and compliant.",
      delay: 0.3
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden">
      <Navbar solid={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#0e3b5e] text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00cba9]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#00cba9]/20 text-[#00cba9] font-bold text-sm tracking-wide mb-6 border border-[#00cba9]/30">
              BLOOM ERP ACADEMY
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              Master Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">
                Financial Destiny
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Comprehensive guides, tutorials, and tips to help you get the most out of Bloom ERP. From setup to advanced auditing.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/register" className="px-8 py-4 bg-[#00cba9] text-white rounded-xl font-bold hover:bg-[#00b596] transition-all shadow-lg hover:shadow-[#00cba9]/25 flex items-center gap-2">
                Get started <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Interactive Steps */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#0e3b5e] mb-4">How Bloom Works</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Simplifying complex accounting into four easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full relative z-10 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${step.color} opacity-5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150`}></div>

                  <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#0e3b5e] mb-4 group-hover:text-[#00cba9] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gray-200 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase - Alternating Layout */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#00cba9] font-bold uppercase tracking-wider text-sm mb-2 block">Dashboard</span>
              <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-6">Your Financial Command Center</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                The Bloom ERP dashboard gives you a bird's-eye view of your business health. Customize widgets to see exactly what matters most to you—cash flow, pending invoices, or expense breakdowns.
              </p>
              <ul className="space-y-4">
                {['Customizable Widgets', 'Real-time Cash Flow', 'One-Click Reports'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-[#00cba9]/20 flex items-center justify-center text-[#00cba9] text-xs">
                      <FaCheck />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0e3b5e] to-[#00cba9] rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Dashboard"
                className="relative rounded-3xl shadow-2xl border-4 border-white"
              />
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20 transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Analytics"
                className="relative rounded-3xl shadow-2xl border-4 border-white"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-2 block">Reporting</span>
              <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-6">Insights That Drive Growth</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Stop guessing and start knowing. Our advanced reporting tools generate detailed financial statements, audit trails, and tax reports in seconds.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#0e3b5e] mb-1">P&L Statements</h4>
                  <p className="text-xs text-gray-500">Generated instantly</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#0e3b5e] mb-1">Tax Ready</h4>
                  <p className="text-xs text-gray-500">Compliance built-in</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6 bg-[#0e3b5e] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Built on Modern Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-[#00cba9] text-xl mb-4 font-bold">{feature.title}</div>
                <p className="text-blue-200">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-6">Ready to Master Bloom ERP?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of businesses streamlining their operations today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="px-10 py-4 bg-[#0e3b5e] text-white rounded-xl font-bold text-lg hover:bg-[#0b2d48] transition-all shadow-xl block text-center">
              Get started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
