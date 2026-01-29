import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaUsers, FaChartPie, FaCheckCircle, FaRocket, FaShieldAlt, FaCogs, FaArrowRight, FaClock, FaBook } from 'react-icons/fa';

const BloomERPHQ = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  const features = [
    {
      title: "Client Dashboard",
      desc: "See every client's status at a glance. No more jumping between tabs.",
      icon: <FaUsers />,
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Staff Management",
      desc: "Assign roles, track productivity, and manage permissions effortlessly.",
      icon: <FaShieldAlt />,
      color: "from-green-400 to-green-600"
    },
    {
      title: "Workflow Automation",
      desc: "Automate recurring tasks and reminders. Never miss a deadline again.",
      icon: <FaCogs />,
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Performance Insights",
      desc: "Real-time analytics on your practice's growth and efficiency.",
      icon: <FaChartPie />,
      color: "from-orange-400 to-orange-600"
    }
  ];

  const articles = [
    {
      title: "Scaling Your Accounting Practice in 2024",
      category: "Growth Strategy",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2072&auto=format&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "The Ultimate Guide to Advisory Services",
      category: "Service Expansion",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
      readTime: "7 min read"
    },
    {
      title: "Automating Compliance: A Case Study",
      category: "Efficiency",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="font-sans overflow-x-hidden bg-[#0e3b5e]">
      <Navbar solid={false} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#0e3b5e]">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,#00cba9_20deg,transparent_40deg)] opacity-10 blur-3xl"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[#00cba9] font-bold text-sm uppercase tracking-wider backdrop-blur-md"
          >
            For Modern Practices
          </motion.div>

          <motion.h1
            style={{ y: yHero, opacity: opacityHero }}
            className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-tight tracking-tighter"
          >
            Command Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">Practice Empire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Bloom ERP HQ is the single source of truth for accountants. Manage hundreds of clients, streamline staff workflows, and drive profitability—all from one beautiful dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
            <button className="px-8 py-4 bg-[#00cba9] text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(0,203,169,0.5)] hover:bg-[#00b596] hover:scale-105 transition-all flex items-center justify-center gap-2">
              <FaRocket /> Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Floating Elements 3D Effect */}
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 hidden lg:block opacity-40"
        >
          <FaUsers size={120} className="text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 hidden lg:block opacity-40"
        >
          <FaChartPie size={120} className="text-[#00cba9]" />
        </motion.div>
      </section>

      {/* Interactive Dashboard Preview Section */}
      <section className="py-24 px-6 relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">The Heart of Your Operation</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed for speed, clarity, and control. See why 10,000+ firms switched to Bloom HQ.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, rotateX: 20, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 perspective-1000 bg-white"
          >
            {/* Mock Dashboard UI */}
            <div className="bg-[#0e3b5e] p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-white/10 h-8 rounded-lg mx-4"></div>
              <div className="w-8 h-8 rounded-full bg-[#00cba9]"></div>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 min-h-[500px]">
              {/* Sidebar Mock */}
              <div className="hidden md:block col-span-1 bg-white rounded-xl shadow-sm p-6 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-32 bg-blue-50 rounded-xl mt-8 border border-blue-100 flex items-center justify-center text-blue-300">
                  <FaChartPie size={40} />
                </div>
              </div>
              {/* Main Content Mock */}
              <div className="col-span-2 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm h-32 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">98%</div>
                    <div>
                      <div className="text-sm text-gray-400">Compliance Rate</div>
                      <div className="text-xl font-bold text-gray-800">Excellent</div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm h-32 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">24</div>
                    <div>
                      <div className="text-sm text-gray-400">Active Staff</div>
                      <div className="text-xl font-bold text-gray-800">Online Now</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 h-64 border border-gray-100 flex flex-col justify-center items-center text-gray-300">
                  <FaUsers size={64} className="mb-4 opacity-50" />
                  <p>Client Activity Feed Loading...</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-[#0e3b5e] text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00cba9]/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#00cba9] font-bold tracking-widest uppercase text-sm">Powerful Tools</span>
            <h2 className="text-4xl font-bold mt-2">Everything You Need to Succeed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#00cba9] transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-200/70 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Efficiency Revolution Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e3b5e] mb-8 leading-tight">
                The Efficiency <br />
                <span className="text-[#00cba9]">Revolution</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop drowning in spreadsheets and email chains. Bloom HQ unifies your practice into a single, synchronized engine.
              </p>

              <div className="space-y-6">
                {[
                  "Reduce administrative time by 40%",
                  "Onboard new clients in minutes, not days",
                  "Automated payment reconciliation included"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#00cba9]/20 flex items-center justify-center text-[#00cba9]">
                      <FaCheckCircle />
                    </div>
                    <span className="text-lg font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00cba9] to-blue-500 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Efficiency Dashboard"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://picsum.photos/seed/efficiency/800/600";
                }}
                className="relative rounded-3xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-500">System Status</span>
                </div>
                <div className="text-2xl font-extrabold text-[#0e3b5e]">All Systems Optimal</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources & Articles Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-[#00cba9] font-bold tracking-widest uppercase text-sm">Knowledge Hub</span>
              <h2 className="text-4xl font-extrabold text-[#0e3b5e] mt-2">Latest Insights for Accountants</h2>
            </div>
            <button className="flex items-center gap-2 text-[#0e3b5e] font-bold hover:text-[#00cba9] transition-colors group">
              View All Articles <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://picsum.photos/seed/${index + 50}/800/600`;
                    }}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0e3b5e]">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <FaClock /> {article.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-[#0e3b5e] mb-3 group-hover:text-[#00cba9] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#00cba9] font-bold text-sm mt-4">
                    Read Article <FaArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#00cba9]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0e3b5e] mb-8">
            Ready to scale your practice?
          </h2>
          <p className="text-xl text-[#0e3b5e] mb-10 font-medium max-w-2xl mx-auto">
            Join the network of forward-thinking accountants using Bloom ERP HQ.
          </p>
          <button className="px-10 py-5 bg-[#0e3b5e] text-white text-xl font-bold rounded-full shadow-2xl hover:bg-[#0a2a43] transition-all hover:-translate-y-1">
            Get Started for Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomERPHQ;
