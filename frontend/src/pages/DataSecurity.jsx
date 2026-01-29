import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaServer, FaUserSecret, FaCheckCircle, FaFingerprint, FaCloud, FaEyeSlash } from 'react-icons/fa';

const securityFeatures = [
   {
      icon: <FaLock />,
      title: "Bank-Grade Encryption",
      desc: "We use 256-bit SSL/TLS encryption for data in transit and AES-256 for data at rest. Your financial data is as secure as it is in a bank vault."
   },
   {
      icon: <FaServer />,
      title: "Secure Data Centers",
      desc: "Hosted on world-class infrastructure with 24/7 physical security, redundant power, and environmental controls."
   },
   {
      icon: <FaUserSecret />,
      title: "Role-Based Access",
      desc: "Granular permission controls ensure that employees only see what they need to. You remain the master of your data."
   },
   {
      icon: <FaEyeSlash />,
      title: "Privacy First",
      desc: "We never sell your data. Our business model is software, not advertising. Your secrets are safe with us."
   },
   {
      icon: <FaCloud />,
      title: "Automated Backups",
      desc: "Your data is backed up automatically every hour. Accidental deletion? We can restore your account to any point in time."
   },
   {
      icon: <FaFingerprint />,
      title: "Multi-Factor Authentication",
      desc: "Add an extra layer of protection to your account with MFA. Even if someone guesses your password, they can't get in."
   }
];

const DataSecurity = () => {
   return (
      <div className="font-sans overflow-x-hidden bg-white">
         <Navbar solid />

         {/* Hero Section - Dark & Techy */}
         <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20 pt-24 overflow-hidden bg-[#0e3b5e]">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
               {/* Background Image */}
               <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop")' }}
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00cba9]/10 border border-[#00cba9]/30 text-[#00cba9] font-bold text-sm mb-8 tracking-wide uppercase backdrop-blur-md"
               >
                  <FaShieldAlt /> Security Trust Center
               </motion.div>
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
               >
                  Uncompromising <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">
                     Security & Privacy
                  </span>
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-xl text-blue-100/80 mb-12 max-w-3xl leading-relaxed"
               >
                  We treat your data with the same level of security as a financial institution.
                  Sleep soundly knowing your business intelligence is protected by industry-leading protocols.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-6"
               >
                  <button className="bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(0,203,169,0.3)] hover:shadow-[0_0_30px_rgba(0,203,169,0.5)] transition-all transform hover:-translate-y-1">
                     Read our Whitepaper
                  </button>
               </motion.div>
            </div>

            {/* 3D Hero Visual */}
            <div className="relative flex items-center justify-center perspective-1000 z-10">
               <motion.div
                  initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
                  animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative w-[400px] h-[500px]"
               >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center">
                     <div className="w-32 h-32 bg-[#00cba9]/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(0,203,169,0.3)] border border-[#00cba9]/30">
                        <FaLock className="text-6xl text-[#00cba9]" />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">AES-256 Encryption</h3>
                     <p className="text-blue-200 text-sm mb-6">Bank-grade security for your data.</p>

                     <div className="w-full bg-black/20 rounded-xl p-4 text-left border border-white/5">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                           <span className="text-xs text-green-400 font-mono">SYSTEM SECURE</span>
                        </div>
                        <div className="space-y-2">
                           <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                 animate={{ x: [-100, 300] }}
                                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                 className="h-full w-1/3 bg-[#00cba9]"
                              />
                           </div>
                           <p className="text-[10px] text-gray-400 font-mono">Scanning threats...</p>
                        </div>
                     </div>
                  </div>

                  {/* Orbiting Elements */}
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-0 rounded-full border border-white/5 pointer-events-none"
                  >
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 bg-[#1c3bd8] rounded-full blur-md"></div>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         {/* Security Features Grid */}
         <section className="py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-20">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">Defense in Depth</h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                     We employ multiple layers of security controls to protect your data from every angle.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {securityFeatures.map((feature, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 group"
                     >
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl text-[#00cba9] mb-6 group-hover:bg-[#00cba9] group-hover:text-white transition-colors duration-300">
                           {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                           {feature.desc}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Visual Data Flow Section */}
         <section className="py-24 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="relative"
                  >
                     {/* Abstract Representation of Secure Data */}
                     <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100">
                        <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" alt="Secure Server" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-[#0e3b5e]/80 flex items-center justify-center">
                           <FaLock className="text-9xl text-[#00cba9]/50" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                           <div className="flex items-center gap-4 mb-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="font-mono text-sm text-green-400">SYSTEM SECURE</span>
                           </div>
                           <p className="font-mono text-xs text-gray-300">
                              ENCRYPTION: AES-256<br />
                              STATUS: MONITORING ACTIVE<br />
                              THREATS DETECTED: 0
                           </p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                     <h2 className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] mb-8">
                        Compliance you can count on.
                     </h2>
                     <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Bloom ERP adheres to strict international standards. We undergo regular third-party audits to ensure our security practices meet or exceed industry benchmarks.
                     </p>

                     <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-start gap-4">
                           <FaCheckCircle className="text-[#00cba9] text-2xl mt-1 flex-shrink-0" />
                           <div>
                              <h4 className="font-bold text-xl text-[#0e3b5e]">GDPR Compliant</h4>
                              <p className="text-gray-500">We respect your right to privacy and give you full control over your data.</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <FaCheckCircle className="text-[#00cba9] text-2xl mt-1 flex-shrink-0" />
                           <div>
                              <h4 className="font-bold text-xl text-[#0e3b5e]">ISO 27001 Certified Centers</h4>
                              <p className="text-gray-500">Our data is stored in facilities that meet the highest standards for information security management.</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <FaCheckCircle className="text-[#00cba9] text-2xl mt-1 flex-shrink-0" />
                           <div>
                              <h4 className="font-bold text-xl text-[#0e3b5e]">SL Data Protection Act</h4>
                              <p className="text-gray-500">Fully compliant with Sri Lankan data sovereignty and privacy regulations.</p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className="py-20 bg-[#0e3b5e] text-white text-center">
            <div className="max-w-4xl mx-auto px-6">
               <FaShieldAlt className="text-6xl text-[#00cba9] mx-auto mb-8" />
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Safe. Secure. Simple.</h2>
               <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
                  Don't risk your business data with spreadsheets or offline software. Move to the secure cloud today.
               </p>
               <a href="/small-business/pricing" className="inline-block bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  Secure your business
               </a>
            </div>
         </section>

         <Footer />
      </div>
   );
};

export default DataSecurity;
