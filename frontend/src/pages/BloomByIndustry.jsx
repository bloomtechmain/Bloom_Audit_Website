import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStore, FaHardHat, FaUtensils, FaBriefcase, FaHandHoldingHeart, FaIndustry, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const industries = [
  {
    icon: <FaStore />,
    title: "Retail & E-commerce",
    desc: "Manage inventory across multiple channels, track sales in real-time, and integrate with POS systems tailored for Sri Lankan retail.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaHardHat />,
    title: "Construction & Trades",
    desc: "Track project costs, manage contractor payments, and handle job costing with precision. Keep your sites profitable.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaUtensils />,
    title: "Hospitality & Tourism",
    desc: "From hotels to cafes, manage bookings, food costs, and staff shifts. Handle seasonal fluctuations with ease.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaBriefcase />,
    title: "Professional Services",
    desc: "Streamline time tracking, invoicing, and project management for agencies, consultants, and firms.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Non-profit",
    desc: "Transparent fund accounting and reporting for donors. Maximize your impact with tools designed for stewardship.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    desc: "Optimize production planning, inventory management, and supply chain logistics for efficiency and growth.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  }
];

const BloomByIndustry = () => {
  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <Navbar solid />

      {/* Hero Section */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20 pt-24 overflow-hidden bg-[#0e3b5e]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop")' }}
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
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00cba9] font-bold text-sm mb-6 backdrop-blur-md"
          >
            SOLUTIONS FOR EVERY SECTOR
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Built for your industry, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-[#42e2b8]">
              tailored for your success.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
          >
            Bloom ERP adapts to the unique challenges of your business type. Whether you're building skyscrapers or serving coffees, we have the tools you need.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/register" className="bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(0,203,169,0.4)] flex items-center gap-2">
              Get started <FaArrowRight />
            </Link>
          </motion.div>
        </div>

        {/* 3D Hero Visual */}
        <div className="relative flex items-center justify-center perspective-1000 z-10">
          <motion.div
            initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-[500px] h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden">
              {/* Abstract Industry Icons Grid */}
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-[#0e3b5e]/50 rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 group hover:bg-[#00cba9]/20 transition-colors duration-500">
                  <FaStore className="text-4xl text-[#00cba9] mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold">Retail</span>
                </div>
                <div className="bg-[#0e3b5e]/50 rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 group hover:bg-blue-500/20 transition-colors duration-500 translate-y-8">
                  <FaHardHat className="text-4xl text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold">Construction</span>
                </div>
                <div className="bg-[#0e3b5e]/50 rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 group hover:bg-purple-500/20 transition-colors duration-500 -translate-y-8">
                  <FaUtensils className="text-4xl text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold">Hospitality</span>
                </div>
                <div className="bg-[#0e3b5e]/50 rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 group hover:bg-orange-500/20 transition-colors duration-500">
                  <FaIndustry className="text-4xl text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-bold">Manufacturing</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <FaCheckCircle />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold">STATUS</p>
                  <p className="text-[#0e3b5e] font-bold">Optimized</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section id="industries" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">Specialized solutions</h2>
            <p className="text-xl text-gray-600">
              Generic software doesn't cut it. Bloom ERP offers specialized features for key Sri Lankan industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b5e]/80 to-transparent z-10"></div>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 text-white flex items-center gap-3">
                    <div className="p-2 bg-[#00cba9] rounded-lg text-white text-xl shadow-lg">
                      {industry.icon}
                    </div>
                    <h3 className="font-bold text-xl">{industry.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">
                    {industry.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24 bg-[#0e3b5e] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                One platform, <br />
                <span className="text-[#00cba9]">endless possibilities.</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                No matter your industry, Bloom ERP provides the core financial engine you need to drive growth, compliance, and efficiency.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time financial reporting & insights",
                  "Seamless integration with 1000+ apps",
                  "Multi-currency support for global trade",
                  "Automated tax compliance tailored for Sri Lanka"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <FaCheckCircle className="text-[#00cba9] text-xl flex-shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Dashboard"
                className="rounded-xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-10 -left-10 bg-white text-[#0e3b5e] p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="text-4xl font-extrabold text-[#00cba9] mb-1">98%</div>
                <div className="font-bold text-lg">Customer Satisfaction</div>
                <p className="text-sm text-gray-500 mt-2">Across all industry sectors in our latest annual survey.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of Sri Lankan businesses growing with Bloom ERP.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              Get started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomByIndustry;
