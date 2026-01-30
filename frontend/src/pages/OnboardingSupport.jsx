import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaRocket, FaHeadset, FaBook, FaVideo, FaCheckCircle, FaUserTie, FaArrowRight, FaPlay } from 'react-icons/fa';

const OnboardingSupport = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Create your account", checked: true },
    { id: 2, text: "Connect bank feeds", checked: false },
    { id: 3, text: "Import historical data", checked: false },
    { id: 4, text: "Invite team members", checked: false },
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const allChecked = checklist.every(item => item.checked);

  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <Navbar solid />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-[#0e3b5e] pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop")' }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00cba9]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00cba9] font-bold text-sm mb-8 backdrop-blur-md">
              LAUNCH YOUR SUCCESS
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
              Onboarding & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-[#00cba9]">
                Expert Support.
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              We don't just hand you the keys. We ride shotgun. From data migration to team training, our dedicated support ensures you lift off smoothly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="px-8 py-4 bg-[#00cba9] text-white font-bold rounded-xl shadow-lg hover:bg-[#00b596] transition-all hover:-translate-y-1 flex items-center gap-2">
                Get started <FaArrowRight />
              </Link>
            </div>
          </motion.div>

          <div className="relative flex items-center justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Setup Progress</h3>
                <span className="bg-[#00cba9] text-[#0e3b5e] px-3 py-1 rounded-full text-xs font-bold">
                  {Math.round((checklist.filter(i => i.checked).length / checklist.length) * 100)}% Complete
                </span>
              </div>

              <div className="space-y-4">
                {checklist.map((item) => (
                  <motion.div
                    key={item.id}
                    className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${item.checked ? 'bg-[#00cba9]/20 border border-[#00cba9]/50' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                    onClick={() => toggleCheck(item.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 transition-colors ${item.checked ? 'bg-[#00cba9]' : 'bg-white/20'}`}>
                      {item.checked && <FaCheckCircle className="text-white text-sm" />}
                    </div>
                    <span className={`flex-1 font-medium ${item.checked ? 'text-white line-through opacity-70' : 'text-blue-100'}`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {allChecked && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl text-center shadow-lg"
                >
                  <p className="font-bold text-[#0e3b5e] text-lg">🎉 You're Ready to Launch!</p>
                </motion.div>
              )}
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-5 bg-blue-500 p-4 rounded-2xl shadow-xl z-20"
            >
              <FaHeadset className="text-3xl text-white" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Journey Section - Creative Timeline */}
      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">Your Journey to Growth</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've mapped out every step. No guesswork, just results.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-24">
              {[
                {
                  step: "01",
                  title: "Kickoff Call",
                  desc: "Meet your dedicated Success Manager. We'll map your goals and configure your dashboard.",
                  icon: <FaUserTie />,
                  align: "left",
                  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  step: "02",
                  title: "Data Migration",
                  desc: "Our team handles the heavy lifting. We securely transfer your history from Xero, QuickBooks, or Excel.",
                  icon: <FaRocket />,
                  align: "right",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  step: "03",
                  title: "Team Training",
                  desc: "Live workshops for your accountants and staff. We ensure everyone is comfortable day one.",
                  icon: <FaVideo />,
                  align: "left",
                  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  step: "04",
                  title: "Go Live",
                  desc: "Launch day! We monitor your system in real-time to ensure 100% uptime and accuracy.",
                  icon: <FaCheckCircle />,
                  align: "right",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-right w-full">
                    {item.align === 'left' ? (
                      <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 relative group text-left">
                        <div className="absolute top-0 right-0 bg-[#0e3b5e] text-white font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
                          STEP {item.step}
                        </div>
                        <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-500">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0e3b5e]/10 hover:bg-transparent transition-colors"></div>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#00cba9] to-blue-500 flex items-center justify-center text-white text-2xl shadow-lg ring-8 ring-white">
                    {item.icon}
                  </div>

                  <div className="flex-1 text-center md:text-left w-full">
                    {item.align === 'right' ? (
                      <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 relative group text-left">
                        <div className="absolute top-0 left-0 bg-[#0e3b5e] text-white font-bold px-4 py-2 rounded-br-2xl rounded-tl-2xl">
                          STEP {item.step}
                        </div>
                        <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ) : (
                      <div className="hidden md:block w-full h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-105 transition-transform duration-500">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0e3b5e]/10 hover:bg-transparent transition-colors"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Personalized Help Section */}
      <section className="py-24 px-6 bg-[#0e3b5e] text-white relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00cba9]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold mb-6">Need Personalized Help?</h2>
            <p className="text-xl text-blue-200 mb-8 leading-relaxed">
              Our dedicated support team is ready to assist you with any questions or challenges you might face during your onboarding journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#00cba9]">
                  <FaHeadset className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">24/7 Priority Support</h4>
                  <p className="text-blue-200">Always available for urgent issues.</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#00cba9]">
                  <FaUserTie className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Dedicated Success Manager</h4>
                  <p className="text-blue-200">Your personal guide to success.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center h-full min-h-[400px]"
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
            <p className="text-blue-200 mb-8 text-lg">
              Join thousands of firms that have successfully onboarded with Bloom.
            </p>
            <Link to="/register" className="w-full bg-[#00cba9] hover:bg-[#00b395] text-white font-bold py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2 text-xl">
              Get started <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnboardingSupport;
