import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaUserShield, FaNetworkWired, FaFingerprint, FaFileContract, FaBug, FaLock, FaArrowRight, FaShieldAlt, FaEye } from 'react-icons/fa';

const CyberSecurityManagement = () => {
  return (
    <div className="font-sans overflow-x-hidden bg-gray-50">
      <Navbar solid />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#0b1120]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=2070&auto=format&fit=crop")' }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0b1120] via-[#1e293b]/50 to-[#0b1120]"></div>
          
          {/* Animated Cyber Grid */}
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'linear-gradient(rgba(0, 203, 169, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 203, 169, 0.1) 1px, transparent 1px)', 
                 backgroundSize: '30px 30px' 
               }}>
          </div>

          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 font-mono text-sm mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              CYBER_SECURITY_MODULE_V2.0
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight"
            >
              Active Defense <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#00cba9]">
                For Your Finances
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              Bloom Audit isn't just secure by design; it gives you the tools to manage your organization's security posture in real-time.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/register" className="bg-[#00cba9] hover:bg-[#00b596] text-[#0b1120] font-bold py-4 px-8 rounded-lg text-lg transition-all hover:scale-105 flex items-center gap-2">
                Enable Protection <FaArrowRight />
              </Link>
            </motion.div>
          </div>

          {/* Abstract Cyber Visual */}
          <div className="relative h-[500px] w-full perspective-1000">
             <motion.div
                initial={{ rotateY: 10, rotateX: 10 }}
                animate={{ rotateY: -10, rotateX: -5 }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col"
             >
                {/* Mock Header */}
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-500">SECURE_CONNECTION: ESTABLISHED</div>
                </div>

                {/* Mock Content */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                    <div className="text-gray-400 text-xs mb-1">THREAT LEVEL</div>
                    <div className="text-green-400 text-2xl font-mono">LOW</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/5">
                    <div className="text-gray-400 text-xs mb-1">ACTIVE SESSIONS</div>
                    <div className="text-blue-400 text-2xl font-mono">24</div>
                  </div>
                </div>

                <div className="flex-1 bg-black/20 rounded-lg p-4 border border-white/5 overflow-hidden font-mono text-xs">
                  <div className="text-green-500 mb-2">root@bloom-audit:~$ run_diagnostics</div>
                  <div className="text-gray-400 ml-2">Scanning endpoints... [OK]</div>
                  <div className="text-gray-400 ml-2">Checking ledger integrity... [OK]</div>
                  <div className="text-gray-400 ml-2">Verifying user permissions... [OK]</div>
                  <div className="text-gray-400 ml-2">Analyzing login patterns...</div>
                  <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-4 bg-[#00cba9] mt-1"
                  ></motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-6">Security You Control</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced management tools designed for modern financial teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FaUserShield />,
                title: "Granular Access Control",
                desc: "Define roles with precision. Control who can view, edit, or approve transactions down to the individual field level."
              },
              {
                icon: <FaNetworkWired />,
                title: "Session Management",
                desc: "Monitor active sessions in real-time. Force logout suspicious devices and set strict session timeout policies."
              },
              {
                icon: <FaFingerprint />,
                title: "Biometric Integration",
                desc: "Seamlessly integrate with hardware keys and biometric scanners for high-value transaction approvals."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight: Audit Logs */}
      <section className="py-24 bg-[#0e3b5e] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00cba9]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-[#00cba9] text-[#00cba9] text-sm font-bold mb-6">
              FORENSIC AUDIT TRAILS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Every Action.<br/>Logged & Searchable.</h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Bloom Audit automatically creates an immutable record of every action taken within the system. From login attempts to ledger adjustments, nothing goes unnoticed.
            </p>
            <ul className="space-y-4">
              {[
                "Immutable timestamping",
                "IP address tracking",
                "Pre/Post change value recording",
                "Export logs for external compliance audits"
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <FaBug className="text-[#00cba9]" /> {point}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700 shadow-2xl font-mono text-sm">
            <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-4">
              <span className="text-gray-400">System Activity Log</span>
              <span className="text-green-400 flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> LIVE</span>
            </div>
            <div className="space-y-3">
              {[
                { time: "10:42:01", user: "admin_sarah", action: "MODIFIED_INVOICE #4429", status: "SUCCESS" },
                { time: "10:42:15", user: "user_mike", action: "LOGIN_ATTEMPT", status: "FAILED (Bad Password)" },
                { time: "10:43:05", user: "system_bot", action: "AUTO_BACKUP_COMPLETE", status: "SUCCESS" },
                { time: "10:44:22", user: "admin_sarah", action: "EXPORTED_P&L_REPORT", status: "SUCCESS" },
              ].map((log, i) => (
                <div key={i} className="flex gap-4 p-2 hover:bg-white/5 rounded transition-colors">
                  <span className="text-gray-500">{log.time}</span>
                  <span className="text-blue-400">{log.user}</span>
                  <span className="text-white flex-1">{log.action}</span>
                  <span className={log.status.includes("FAILED") ? "text-red-400" : "text-green-400"}>{log.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight: AI Fraud Detection */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="relative z-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">Anomaly Detected</h4>
                    <p className="text-sm text-gray-500">Just now</p>
                  </div>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border border-red-100 mb-6">
                  <p className="text-red-800 font-medium mb-2">Unusual Transaction Pattern</p>
                  <p className="text-sm text-red-600">Vendor "TechCorp" has 3 duplicate invoices within 24 hours.</p>
                </div>
                <div className="flex gap-3">
                   <button className="flex-1 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors">Investigate</button>
                   <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200 transition-colors">Dismiss</button>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-500/5 rounded-full blur-3xl -z-0"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-6">AI-Powered<br/>Fraud Detection</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't wait for the monthly audit to find mistakes. Our AI engine continuously scans your ledger for anomalies, duplicate payments, and suspicious vendor activity.
            </p>
            <div className="flex items-start gap-4 mb-6">
               <FaEye className="text-3xl text-blue-500 mt-1" />
               <div>
                 <h4 className="font-bold text-xl text-[#0e3b5e] mb-2">24/7 Watchdog</h4>
                 <p className="text-gray-600">The system never sleeps, monitoring transactions even when you're offline.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <FaFileContract className="text-3xl text-purple-500 mt-1" />
               <div>
                 <h4 className="font-bold text-xl text-[#0e3b5e] mb-2">Smart Rules</h4>
                 <p className="text-gray-600">Set custom thresholds for high-value transfers that require multi-person approval.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-[#0e3b5e] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Secure Your Financial Future</h2>
          <p className="text-xl text-blue-200 mb-10">
            Join thousands of companies who trust Bloom Audit with their most sensitive data.
          </p>
          <Link to="/register" className="inline-block bg-[#00cba9] hover:bg-[#00b596] text-[#0e3b5e] font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-transform hover:-translate-y-1">
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberSecurityManagement;