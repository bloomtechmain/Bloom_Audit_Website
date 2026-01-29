import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaFileAlt, FaCheckDouble, FaCloudUploadAlt, FaMagic, FaRegClock, FaShieldAlt, FaArrowRight, FaSync, FaLaptopCode, FaUserCheck } from 'react-icons/fa';

const BloomWorkpapers = () => {
  const features = [
    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud-Powered Compliance",
      desc: "Access your workpapers from anywhere. Real-time collaboration for your entire team."
    },
    {
      icon: <FaMagic />,
      title: "Automated Trial Balance",
      desc: "Import data instantly from Bloom Ledger, Xero, or Excel. No more manual data entry errors."
    },
    {
      icon: <FaCheckDouble />,
      title: "Smart Review Tools",
      desc: "Flag issues, leave review notes, and track resolution status in one central hub."
    },
    {
      icon: <FaShieldAlt />,
      title: "Audit-Ready Security",
      desc: "Bank-level encryption and full audit trails ensure your data is always secure and compliant."
    }
  ];

  const steps = [
    { title: "Import", desc: "Connect client data instantly", icon: <FaSync /> },
    { title: "Prepare", desc: "Auto-populate schedules", icon: <FaLaptopCode /> },
    { title: "Review", desc: "Manager sign-off workflow", icon: <FaUserCheck /> },
    { title: "File", desc: "Export to tax return", icon: <FaFileAlt /> }
  ];

  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <Navbar solid={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0e3b5e] pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
            alt="Workpapers Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0e3b5e] via-[#0e3b5e]/90 to-[#00cba9]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#00cba9]/20 text-[#00cba9] font-bold text-sm mb-6 border border-[#00cba9]/30">
              New Generation Compliance
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Workpapers that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">Work for You</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ditch the spreadsheets. Experience the speed and accuracy of fully integrated, cloud-based workpapers designed for modern accountants.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#00cba9] text-white font-bold rounded-xl shadow-lg hover:bg-[#00b596] transition-all hover:-translate-y-1">
                Book a Demo
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                View Sample
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block perspective-1000"
          >
            {/* 3D Stacked Papers Animation */}
            <div className="relative w-[500px] h-[600px]">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-full h-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                  style={{ 
                    top: i * 40, 
                    left: i * 20, 
                    zIndex: 3 - i,
                    transform: `scale(${1 - i * 0.05})`
                  }}
                >
                  <div className="h-2 bg-[#00cba9] w-full"></div>
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                      <div className="h-4 bg-gray-200 w-1/3 rounded"></div>
                      <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><FaCheckDouble /></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-2 bg-gray-100 w-full rounded"></div>
                      <div className="h-2 bg-gray-100 w-5/6 rounded"></div>
                      <div className="h-2 bg-gray-100 w-4/5 rounded"></div>
                      <div className="h-2 bg-gray-100 w-full rounded"></div>
                    </div>
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-center gap-2 text-[#0e3b5e] font-bold mb-2">
                        <FaMagic /> Auto-Reconciled
                      </div>
                      <div className="text-sm text-blue-800/70">
                        Bank feed matched with 100% accuracy.
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Workflow Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-4">The Compliance Workflow</h2>
            <p className="text-xl text-gray-600">From import to filing in four simple steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 bg-white p-8 rounded-2xl shadow-xl text-center border-b-4 border-transparent hover:border-[#00cba9] transition-all group"
              >
                <div className="w-20 h-20 mx-auto bg-[#0e3b5e] text-white rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:bg-[#00cba9] transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0e3b5e] mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-8 leading-tight">
               Why switch to <br/> Bloom Workpapers?
             </h2>
             <div className="grid grid-cols-1 gap-8">
               {features.map((feature, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6"
                 >
                   <div className="w-16 h-16 shrink-0 bg-[#00cba9]/10 text-[#00cba9] rounded-2xl flex items-center justify-center text-2xl">
                     {feature.icon}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-[#0e3b5e] mb-2">{feature.title}</h3>
                     <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
          
          <div className="relative">
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="bg-[#0e3b5e] p-12 rounded-3xl text-white relative overflow-hidden shadow-2xl"
             >
               <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl">
                 <FaRegClock />
               </div>
               <h3 className="text-3xl font-bold mb-6">Save 40% of your time per job</h3>
               <p className="text-blue-200 text-lg mb-8">
                 "Since moving to Bloom Workpapers, our firm has cut annual compliance time almost in half. The automation is incredible."
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white rounded-full"></div>
                 <div>
                   <div className="font-bold">David Chen</div>
                   <div className="text-sm opacity-70">Partner, Chen & Associates</div>
                 </div>
               </div>
             </motion.div>

             {/* Floating Stats */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#00cba9]"
             >
               <div className="text-4xl font-bold text-[#0e3b5e] mb-1">99.9%</div>
               <div className="text-gray-500 text-sm">Accuracy Rate</div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00cba9] text-[#0e3b5e] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6">Ready to modernize your practice?</h2>
          <p className="text-xl mb-10 font-medium opacity-90">
            Join thousands of accountants who are working smarter, not harder.
          </p>
          <button className="bg-[#0e3b5e] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0a2a43] transition-colors shadow-lg flex items-center gap-3 mx-auto">
            Get Started Free <FaArrowRight />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomWorkpapers;
