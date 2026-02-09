import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';
import { FaLightbulb, FaMagic, FaBrain, FaChartLine, FaRegClock, FaSyncAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const SmartAccounting = () => {
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
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop")' }}
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
                     <FaMagic className="text-yellow-300" /> THE FUTURE OF FINANCE
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
                     Accounting that <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                        thinks for you.
                     </span>
                  </h1>
                  <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                     Stop drowning in data entry. Bloom ERP uses advanced machine learning to automate the boring stuff, so you can focus on strategy.
                  </p>
                  <div className="flex flex-wrap gap-4">
                     <Link to="/register" className="bg-[#00cba9] text-white font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(0,203,169,0.4)] hover:shadow-[0_0_30px_rgba(0,203,169,0.6)] hover:-translate-y-1 transition-all">
                        Get started
                     </Link>
                  </div>
               </motion.div>

               <div className="relative flex items-center justify-center perspective-1000">
                  <motion.div
                     initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
                     animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
                     transition={{ duration: 1, delay: 0.2 }}
                     className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl"
                  >
                     {/* Mock UI for "Smart Match" */}
                     <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white"><FaCheckCircle /></div>
                           <div>
                              <h4 className="font-bold text-lg">Smart Match Found</h4>
                              <p className="text-sm text-gray-300">Transaction #88291</p>
                           </div>
                        </div>
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-bold">99% CONFIDENCE</span>
                     </div>

                     <div className="space-y-4">
                        <div className="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                           <span className="text-gray-300">Bank Feed</span>
                           <span className="font-mono font-bold">-$1,250.00 (Uber Eats)</span>
                        </div>
                        <div className="flex justify-center text-gray-400 text-sm">
                           <FaSyncAlt className="animate-spin-slow mr-2" /> Matching with...
                        </div>
                        <div className="flex justify-between items-center bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/50">
                           <span className="text-indigo-200">Expense Category</span>
                           <span className="font-bold text-white">Meals & Entertainment</span>
                        </div>
                     </div>

                     <button className="w-full mt-6 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 rounded-xl transition-colors">
                        Confirm Match
                     </button>

                     {/* Floating Elements */}
                     <div className="absolute -top-10 -right-10 bg-pink-500 p-4 rounded-2xl shadow-xl animate-bounce-slow">
                        <FaBrain className="text-3xl text-white" />
                     </div>
                     <div className="absolute -bottom-5 -left-5 bg-yellow-400 p-4 rounded-2xl shadow-xl animate-pulse">
                        <FaLightbulb className="text-3xl text-indigo-900" />
                     </div>
                  </motion.div>
               </div>
            </div>
         </section >

         {/* Feature Grid - "The Brain" */}
         < section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-20 bg-gray-50" >
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#0e3b5e] mb-6">Smarter than your average spreadsheet.</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                     Bloom's intelligent engine works 24/7 to categorize transactions, predict cash flow, and spot anomalies before they become problems.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureCard
                     icon={<FaMagic className="text-purple-500" />}
                     title="Zero-Touch Reconciliation"
                     desc="Connect your bank, and watch the magic happen. Bloom automatically matches transactions with invoices and bills with 98% accuracy."
                  />
                  <FeatureCard
                     icon={<FaChartLine className="text-green-500" />}
                     title="Cash Flow Prediction"
                     desc="Don't guess about next month. Our AI analyzes your history to forecast future cash positions, helping you make safer decisions."
                  />
                  <FeatureCard
                     icon={<FaRegClock className="text-blue-500" />}
                     title="Report Generation"
                     desc="Set up recurring reports that send themselves. Bloom can even automatically follow up on overdue payments reminding you of missed payments."
                  />
               </div>
            </div>
         </section >

         {/* Interactive Demo / Visual Section */}
         < section className="py-24 bg-white overflow-hidden" >
            <div className="max-w-7xl mx-auto px-6">
               <div className="bg-[#0e3b5e] rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
                  {/* Background Glows */}
                  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                     <div>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                           It learns how <br />
                           <span className="text-[#00cba9]">you do business.</span>
                        </h3>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                           The more you use Bloom, the smarter it gets. It learns your categorization rules, your vendor habits, and your seasonal trends.
                        </p>
                        <ul className="space-y-4 text-white">
                           <li className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                              <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><FaCheckCircle /></div>
                              <span className="font-medium">Adapts to your chart of accounts</span>
                           </li>
                           <li className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                              <div className="bg-purple-500/20 p-2 rounded-lg text-purple-300"><FaBrain /></div>
                              <span className="font-medium">Suggests corrections based on history</span>
                           </li>
                        </ul>
                     </div>

                     <div className="relative">
                        <img
                           src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                           alt="Smart Dashboard"
                           className="rounded-2xl shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-all duration-700"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-float">
                           <p className="text-sm text-gray-500 mb-2">Efficiency Gain</p>
                           <div className="text-4xl font-extrabold text-indigo-600 mb-1">+40 hrs</div>
                           <p className="text-xs font-bold text-gray-400">SAVED PER MONTH</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section >

         {/* CTA Section */}
         < section className="py-24 text-center" >
            <div className="max-w-4xl mx-auto px-6">
               <h2 className="text-4xl font-extrabold text-[#0e3b5e] mb-8">Work smarter, not harder.</h2>
               <p className="text-xl text-gray-600 mb-10">
                  Join the thousands of businesses that have switched to automated accounting.
               </p>
               <Link to="/register" className="inline-flex items-center gap-3 bg-[#00cba9] hover:bg-[#00b596] text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                  Get started <FaArrowRight />
               </Link>
            </div>
         </section >

         <Footer />
      </div >
   );
};

// Helper Component for Feature Cards
const FeatureCard = ({ icon, title, desc }) => (
   <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
   >
      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
         {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4 group-hover:text-purple-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
         {desc}
      </p>
   </motion.div>
);

export default SmartAccounting;
