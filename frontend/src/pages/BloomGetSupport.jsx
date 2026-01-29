import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaSearch, FaUserTie, FaUserFriends, FaLock, FaComments, FaLightbulb, FaGraduationCap, FaVideo, FaHeadset, FaArrowRight } from 'react-icons/fa';

const BloomGetSupport = () => {
  return (
    <div className="font-sans overflow-x-hidden bg-[#f8fafc]">
      <Navbar solid={true} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20 px-6 text-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Support Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e3b5e]/90 to-[#0e3b5e]/70 backdrop-blur-sm"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Need a hand using Bloom? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-300">Just ask.</span>
          </h1>

          <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex items-center max-w-2xl mx-auto mt-10 transform transition-all hover:scale-[1.02] hover:shadow-[#00cba9]/20 hover:shadow-2xl border border-white/20">
            <FaSearch className="text-gray-400 text-xl ml-4" />
            <input
              type="text"
              placeholder="Ask away, in your own words..."
              className="w-full p-4 outline-none text-lg text-gray-800 placeholder-gray-500 bg-transparent"
            />
            <button className="bg-[#0e3b5e] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00cba9] transition-colors shadow-lg">
              Search
            </button>
          </div>
        </motion.div>
      </section>

      {/* Get Started Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0e3b5e] mb-16 text-center">Make a start</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Small Business Owners */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Small Business"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b5e] via-[#0e3b5e]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-10 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#00cba9] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                <FaUserFriends />
              </div>
              <h3 className="text-3xl font-bold mb-4">Small business owners</h3>
              <p className="text-blue-100 mb-8 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Browse resources for small business owners starting out with Bloom.
              </p>
              <button className="flex items-center gap-2 text-[#00cba9] font-bold text-lg bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-[#0e3b5e] transition-all">
                Get started <FaArrowRight />
              </button>
            </div>
          </motion.div>

          {/* Accountants */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Accountants"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b5e] via-[#0e3b5e]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
            </div>

            <div className="absolute bottom-0 left-0 p-10 text-white z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#00cba9] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                <FaUserTie />
              </div>
              <h3 className="text-3xl font-bold mb-4">Accountants and bookkeepers</h3>
              <p className="text-blue-100 mb-8 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                Join the partner program to get the most out of Bloom, plus browse resources for advisors.
              </p>
              <button className="flex items-center gap-2 text-[#00cba9] font-bold text-lg bg-white/10 backdrop-blur-md px-6 py-3 rounded-full hover:bg-white hover:text-[#0e3b5e] transition-all">
                Get started <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Login Banner */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl relative overflow-hidden shadow-2xl group">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0e3b5e]/90 transition-colors group-hover:bg-[#0e3b5e]/85"></div>
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold text-white mb-6">Your own Bloom Central</h2>
              <p className="text-blue-100 text-xl mb-10 leading-relaxed max-w-2xl">
                Log in to access your profile, learning progress and cases. Plus, access our full suite of learning resources securely.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#00cba9] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00b596] transition-all hover:scale-105 shadow-lg flex items-center gap-2">
                  <FaLock className="text-sm" /> Log in
                </button>
                <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                  Try Bloom for free
                </button>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="md:w-1/3 flex justify-center"
            >
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
                <FaLock className="text-8xl text-[#00cba9]" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-4 text-yellow-400 text-5xl drop-shadow-lg"
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0e3b5e] mb-16 text-center">Join the Bloom community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Community"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-10">
              <div className="flex items-start gap-6">
                <div className="bg-purple-100 p-4 rounded-2xl text-purple-600 text-3xl shadow-sm">
                  <FaComments />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0e3b5e] mb-3">Ask other people using Bloom</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Ask a question about using Bloom in one of our community discussion forums.</p>
                  <a href="#" className="text-[#00cba9] font-bold text-lg hover:underline flex items-center gap-2">
                    Start a discussion <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Ideas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-10">
              <div className="flex items-start gap-6">
                <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-600 text-3xl shadow-sm">
                  <FaLightbulb />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0e3b5e] mb-3">Propose an idea</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Propose or support ideas for improving Bloom and shape the future.</p>
                  <a href="#" className="text-[#00cba9] font-bold text-lg hover:underline flex items-center gap-2">
                    View product ideas <FaArrowRight className="text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-[#0e3b5e] mb-16 text-center">Become a Bloom expert</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Courses"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <FaGraduationCap className="text-white text-5xl drop-shadow-lg" />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4">Courses and certification</h3>
                <p className="text-gray-600 mb-8 text-lg">Learn everything Bloom can do by completing a course or certification.</p>
                <button className="text-[#00cba9] font-bold text-lg hover:text-[#00b596] transition-colors flex items-center gap-2">
                  View courses and certifications <FaArrowRight />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Webinars"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <FaVideo className="text-white text-5xl drop-shadow-lg" />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-[#0e3b5e] mb-4">Webinars and events</h3>
                <p className="text-gray-600 mb-8 text-lg">Register for live webinars or local in-person events to learn more about Bloom.</p>
                <button className="text-[#00cba9] font-bold text-lg hover:text-[#00b596] transition-colors flex items-center gap-2">
                  View webinars and events <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reach Out Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0e3b5e] mb-16">Reach out</h2>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#0e3b5e] text-white p-12 md:p-20 rounded-[3rem] inline-flex flex-col items-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Support Team"
              className="w-full h-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#0e3b5e]/80"></div>
          </div>

          <div className="w-24 h-24 bg-[#00cba9] rounded-3xl flex items-center justify-center text-5xl mb-8 shadow-2xl z-10 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
            <FaHeadset />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 z-10">Stuck? Get in touch</h3>
          <p className="text-blue-100 mb-10 max-w-lg z-10 text-xl leading-relaxed">
            Contact the Bloom support team and we’ll help you out with any questions or issues.
          </p>
          <button className="bg-white text-[#0e3b5e] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg z-10 transform hover:translate-y-[-4px]">
            Contact Bloom support
          </button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default BloomGetSupport;
