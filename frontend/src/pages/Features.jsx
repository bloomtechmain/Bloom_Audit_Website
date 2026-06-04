import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversity, FaFileInvoiceDollar, FaTasks, FaBoxes, FaBuilding, FaChartLine, FaMoneyBillWave, FaChartBar, FaChevronDown, FaUsers, FaCalendarAlt, FaClock, FaFileAlt, FaFileContract, FaCheck, FaTimes } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';

const FeatureCard = ({ feature, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-8 rounded-2xl shadow-xl cursor-pointer overflow-hidden group transition-all duration-500 ${isOpen ? 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2 ring-4 ring-[#00cba9]/50' : 'bg-white hover:bg-gray-50 text-gray-800'
        }`}
    >
      {/* Background for Open State */}
      {isOpen && (
        <motion.div
          className="absolute inset-0 z-0 bg-gradient-to-br from-[#0e3b5e] via-[#1c3bd8] to-[#0e3b5e]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="relative z-10">
        <motion.div layout className="flex items-start justify-between">
          <motion.div
            layout
            className={`text-4xl mb-4 ${isOpen ? 'text-[#00cba9] scale-110' : 'text-[#1c3bd8]'}`}
          >
            {feature.icon}
          </motion.div>
          <motion.div
            layout
            animate={{ rotate: isOpen ? 180 : 0 }}
            className={`p-2 rounded-full ${isOpen ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-500'}`}
          >
            <FaChevronDown />
          </motion.div>
        </motion.div>

        <motion.h3
          layout="position"
          className={`text-xl font-bold mb-2 ${isOpen ? 'text-white text-3xl mb-6' : 'text-[#0e3b5e]'}`}
        >
          {feature.title}
        </motion.h3>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-50 leading-relaxed text-lg mt-4 border-t border-white/20 pt-6"
              >
                {feature.description}
                <div className="mt-4 flex gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00cba9]"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00cba9] opacity-70"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00cba9] opacity-40"></span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <motion.p
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-4 group-hover:text-[#00cba9] transition-colors"
          >
            Click to reveal
          </motion.p>
        )}
      </div>

      {/* Decorative Glow for Open State */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#00cba9]/20 rounded-full blur-[80px] pointer-events-none z-0"
        />
      )}
    </motion.div>
  );
};

const Features = () => {

  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar solid />

      {/* Hero Section */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 md:px-12 lg:px-20 pt-24 overflow-hidden bg-[#0e3b5e]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop")' }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00cba9]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-xl relative z-10 text-white">
          <div className="text-blue-200 text-sm mb-4 font-semibold tracking-wider uppercase">
            Online accounting software &gt; All Features
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Bloom ERP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#42e2b8]">Features</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-xl md:text-2xl mb-10 max-w-lg leading-relaxed text-blue-100"
          >
            Explore Bloom ERP's range of features, designed to streamline your accounting needs.
          </motion.p>

          <Link
            to="/register"
            className="inline-block bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(0,203,169,0.4)] transition-all hover:scale-105 hover:shadow-lg"
          >
            Get started
          </Link>
        </div>

        {/* 3D Hero Visual */}
        <div className="relative flex items-center justify-center perspective-1000 z-10">
          <motion.div
            initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-[350px] md:w-[450px] h-[600px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col gap-4"
          >
            {/* Mock UI Elements */}
            <div className="h-40 w-full bg-gradient-to-br from-[#1c3bd8] to-[#0e3b5e] rounded-2xl p-4 relative overflow-hidden group">
              <div className="absolute top-2 right-2 bg-white/20 p-2 rounded-lg backdrop-blur-md">
                <FaChartLine className="text-white" />
              </div>
              <p className="text-blue-200 text-xs">Monthly Revenue</p>
              <h3 className="text-white text-2xl font-bold mt-1">$124,500</h3>
              <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-[#00cba9]"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 bg-white/5 rounded-2xl border border-white/10 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#00cba9]/20 flex items-center justify-center text-[#00cba9]">
                  <FaUniversity />
                </div>
                <p className="text-white text-sm font-bold">Banking</p>
              </div>
              <div className="h-32 bg-white/5 rounded-2xl border border-white/10 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <FaFileInvoiceDollar />
                </div>
                <p className="text-white text-sm font-bold">Invoicing</p>
              </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 p-4 relative overflow-hidden">
              <p className="text-white font-bold mb-4">Recent Transactions</p>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 mb-3 pb-3 border-b border-white/5 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                  <div className="flex-1">
                    <div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
                    <div className="h-2 w-12 bg-white/10 rounded"></div>
                  </div>
                </div>
              ))}
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-4 right-4 bg-[#00cba9] text-[#0e3b5e] text-xs font-bold px-3 py-1 rounded-full shadow-lg"
              >
                Live Update
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Features Section */}
      <div className="bg-[#f8fafc] py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#00cba9]/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0e3b5e] mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From streamlined Reports and Analytics to intuitive Employee Access Portal, BloomAudit's features empower you to prioritize business growth.
            </p>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto mb-24">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </motion.div>

          {/* Plan Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-block bg-[#00cba9]/10 text-[#00cba9] font-bold px-4 py-2 rounded-full mb-4">
                PLAN COMPARISON
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0e3b5e] mb-4">All Plans, Side by Side</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Every feature across all four plans. ✓ = included, — = not included.</p>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-100">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="bg-[#0e3b5e] text-white">
                    <th className="text-left py-5 px-6 font-bold text-base w-2/5">Feature</th>
                    {['Starter', 'Growth', 'Business', 'Enterprise'].map((p) => (
                      <th key={p} className={`py-5 px-4 font-bold text-center ${p === 'Growth' ? 'bg-[#00cba9] text-white' : ''}`}>
                        {p}
                        {p === 'Growth' && <div className="text-[10px] font-normal opacity-80 mt-0.5">Most Popular</div>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((section, si) => (
                    <React.Fragment key={si}>
                      <tr className="bg-gray-50">
                        <td colSpan={5} className="py-3 px-6 text-xs font-extrabold text-[#0e3b5e] uppercase tracking-wider">{section.category}</td>
                      </tr>
                      {section.features.map((feat, fi) => (
                        <tr key={fi} className={fi % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                          <td className="py-3 px-6 text-gray-700 font-medium">{feat.name}</td>
                          {['starter', 'growth', 'business', 'enterprise'].map((slug) => (
                            <td key={slug} className={`py-3 px-4 text-center ${slug === 'growth' ? 'bg-[#00cba9]/5' : ''}`}>
                              {feat[slug]
                                ? <FaCheck className="text-[#00cba9] mx-auto" size={14} />
                                : <span className="text-gray-300 font-bold mx-auto block text-center">—</span>}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <Link to="/pricing"
                className="inline-block bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all hover:scale-105">
                View Pricing & Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const features = [
  {
    title: "Employee Access Portal",
    description: "Empower your team with a dedicated portal. Employees can view payslips, request leave, and update their details securely.",
    icon: <FaUsers />
  },
  {
    title: "Reporting",
    description: "Track your business performance with insightful reports. View profit and loss, balance sheets in real-time.",
    icon: <FaChartBar />
  },
  {
    title: "Track projects",
    description: "Quote, invoice, and get paid for jobs. Track time and costs to ensure every project is profitable.",
    icon: <FaTasks />
  },
  {
    title: "Monthly Subscriptions Tracker",
    description: "Never miss a renewal. Track all your business subscriptions and recurring payments in one dashboard.",
    icon: <FaCalendarAlt />
  },
  {
    title: "Assets management",
    description: "Track fixed assets and manage depreciation automatically. Keep your books up to date.",
    icon: <FaBuilding />
  },
  {
    title: "Analytics",
    description: "Gain deeper insights with basic and premium analytics. Visualize your financial data.",
    icon: <FaChartLine />
  },
  {
    title: "Payroll",
    description: "Pay your employees securely and on time. Automate tax calculations and filings with fully integrated payroll.",
    icon: <FaMoneyBillWave />
  }
];

const comparisonData = [
  {
    category: "Core Accounting",
    features: [
      { name: "Chart of Accounts (system + custom)", starter: true, growth: true, business: true, enterprise: true },
      { name: "General Ledger", starter: true, growth: true, business: true, enterprise: true },
      { name: "Journal Entries (draft, post & reverse)", starter: true, growth: true, business: true, enterprise: true },
      { name: "Invoice Management (partial payments, credit notes, aging)", starter: true, growth: true, business: true, enterprise: true },
      { name: "Customer Database", starter: true, growth: true, business: true, enterprise: true },
      { name: "Receivables Tracking & Aging Reports", starter: true, growth: true, business: true, enterprise: true },
      { name: "Bill Management (full AP workflow)", starter: true, growth: true, business: true, enterprise: true },
      { name: "Vendor Database", starter: true, growth: true, business: true, enterprise: true },
      { name: "Payables Tracking & Aging Reports", starter: true, growth: true, business: true, enterprise: true },
      { name: "Tax Management (VAT / GST / WHT)", starter: true, growth: true, business: true, enterprise: true },
      { name: "Financial Statements (P&L, Balance Sheet, Cash Flow, Trial Balance)", starter: true, growth: true, business: true, enterprise: true },
      { name: "Document Bank (file storage + audit trail)", starter: true, growth: true, business: true, enterprise: true },
      { name: "Bulk Import / Export", starter: true, growth: true, business: true, enterprise: true },
      { name: "Analytics Dashboard (financial KPIs)", starter: true, growth: true, business: true, enterprise: true },
      { name: "App Settings, RBAC & Company Branding", starter: true, growth: true, business: true, enterprise: true },
      { name: "Notes & Todos", starter: true, growth: true, business: true, enterprise: true },
      { name: "Users", starter: "5", growth: "25", business: "100", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Sales & Purchasing",
    features: [
      { name: "Quotes & Quote Generator (follow-up reminders)", starter: false, growth: true, business: true, enterprise: true },
      { name: "Sales Orders (linked to invoices, fulfilment tracking)", starter: false, growth: true, business: true, enterprise: true },
      { name: "Purchase Orders (approval workflow)", starter: false, growth: true, business: true, enterprise: true },
      { name: "Petty Cash", starter: false, growth: true, business: true, enterprise: true },
      { name: "Subscriptions (recurring vendor payments)", starter: false, growth: true, business: true, enterprise: true },
      { name: "Bank Accounts + Bank Reconciliation", starter: false, growth: true, business: true, enterprise: true },
      { name: "Stripe Payment Integration + Payment Links", starter: false, growth: true, business: true, enterprise: true },
    ],
  },
  {
    category: "HR & Payroll",
    features: [
      { name: "Employee Directory (records, departments, contacts)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Payroll (salary calculation, payslips, digital signatures)", starter: false, growth: false, business: true, enterprise: true },
      { name: "PTO / Time Off (requests, approval, balance tracking)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Attendance Management (marking, shifts, reports)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Employee Onboarding (new hire workflow)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Performance Reviews (review cycles, goals, ratings)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Employee Self-Service Portal (payslips, PTO, profile)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Expense Claims (reimbursement workflow + GL posting)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Time Tracking (billable / non-billable)", starter: false, growth: false, business: true, enterprise: true },
    ],
  },
  {
    category: "Operations",
    features: [
      { name: "Inventory Management (stock, SKU, COGS posting)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Projects (3-level: Project → Contract → Items)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Job Costing (cost accumulation, margin tracking)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Assets Management (fixed assets + depreciation)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Loans", starter: false, growth: false, business: true, enterprise: true },
      { name: "Multi-Currency (FX rates, gain/loss tracking)", starter: false, growth: false, business: true, enterprise: true },
      { name: "Budget Planning & Variance Analysis", starter: false, growth: false, business: true, enterprise: true },
    ],
  },
  {
    category: "Enterprise",
    features: [
      { name: "Advanced Analytics v2 + Custom KPI Dashboards", starter: false, growth: false, business: false, enterprise: true },
      { name: "Custom Report Builder + Historical Analysis", starter: false, growth: false, business: false, enterprise: true },
      { name: "Compliance & Audit Logging (RBAC trail)", starter: false, growth: false, business: false, enterprise: true },
      { name: "REST API v1 + API Key Management", starter: false, growth: false, business: false, enterprise: true },
      { name: "Incoming Webhooks", starter: false, growth: false, business: false, enterprise: true },
      { name: "Vendor Self-Service Portal", starter: false, growth: false, business: false, enterprise: true },
      { name: "Debit Card Management", starter: false, growth: false, business: false, enterprise: true },
      { name: "Advanced Import / Export (all modules)", starter: false, growth: false, business: false, enterprise: true },
    ],
  },
];

export default Features;
