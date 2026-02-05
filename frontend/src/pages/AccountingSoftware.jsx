import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaStar } from 'react-icons/fa'

const AccountingSoftware = () => {
  const [mainSrc, setMainSrc] = useState('https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=900&q=60')
  const [smallSrc, setSmallSrc] = useState('https://images.unsplash.com/photo-1551281043-7520c86c0ce9?auto=format&fit=crop&w=600&q=60')
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar solid />
      <section className="relative h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6 md:px-12 lg:px-20 pt-24 overflow-hidden bg-[#0e3b5e]">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop")' }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0e3b5e]/90 via-[#1c3bd8]/10 to-[#0e3b5e]/90"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00cba9]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-xl relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Accounting software for Sri Lankan small businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-100 mt-6"
          >
            Simplify finances and get more done with Bloom ERP online accounting. Localized for Sri Lanka with LKR billing and tax compliance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Link
              to="/register"
              className="inline-flex items-center gap-3 bg-[#00cba9] hover:bg-[#00b596] text-white font-bold px-6 py-3 rounded-lg transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(0,203,169,0.4)]"
            >
              Get started <FaArrowRight />
            </Link>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-center perspective-1000 z-10">
          <motion.div
            initial={{ opacity: 0, rotateY: 15, rotateX: 5, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-[500px] h-[400px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 shadow-2xl overflow-hidden"
          >
            <img
              alt="Bloom ERP in action"
              src={mainSrc}
              onError={() => setMainSrc('https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=900&q=60')}
              className="w-full h-full object-cover rounded-2xl opacity-80"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b5e] to-transparent opacity-60 rounded-2xl"></div>

            {/* Floating Badge inside card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <p className="text-sm font-bold text-[#00cba9]">Total Revenue</p>
                  <p className="text-2xl font-bold">LKR 4,250,000</p>
                </div>
                <div className="bg-[#00cba9]/20 p-2 rounded-lg">
                  <FaArrowRight className="text-[#00cba9] rotate-[-45deg]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Small Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -right-4 w-48 h-auto bg-[#00cba9] rounded-2xl p-4 shadow-xl z-20 border border-white/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
                <FaStar size={12} />
              </div>
              <span className="text-white font-bold text-sm">Top Rated</span>
            </div>
            <p className="text-white/90 text-xs leading-tight">Trusted by over 500+ Sri Lankan businesses.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#f4f8fb]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-[#0e3b5e] text-center"
          >
            Save yourself hours with Bloom ERP accounting software
          </motion.h2>
          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
            Cloud accounting tools help you run your small business so you can spend more time doing what you love.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Paperless record‑keeping, all in one',
                desc: 'Centralize finances with secure cloud accounting and digital documents.',
              },
              {
                title: 'Automation for your admin',
                desc: 'Speed up processes like reconciling bank transactions and invoice reminders.',
              },
              {
                title: 'Smart data and insights',
                desc: 'Make confident decisions with trend analysis and customizable reporting.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, rotate: i % 2 ? -0.5 : 0.5 }}
                className="rounded-2xl bg-white shadow-lg p-8 flex items-start gap-4 transition-transform"
              >
                <motion.div
                  className="w-9 h-9 rounded-md bg-[#0e7fc3] flex items-center justify-center text-white shrink-0"
                  whileHover={{ scale: 1.08 }}
                >
                  <FaCheck size={16} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-xl text-[#0e3b5e]">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.img
              alt="Unified accounting"
              src="https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=900&q=60"
              className="rounded-3xl shadow-2xl"
              whileHover={{ rotate: -1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            />
          </motion.div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-extrabold text-[#0e3b5e]">All your small business accounting in one place</h3>
            <p className="text-gray-600 mt-4">
              Manage cash flow, track expenses, accept payments, and much more without leaving Bloom ERP.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Automate invoicing and reporting',
                'Up‑to‑date financial data for a full picture',
                'Simplified tax returns aligned to Sri Lankan regulations',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheck className="text-[#00cba9] mt-1" />
                  <span className="text-gray-700">{t}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-extrabold text-[#0e3b5e]">Collaborate online in real time</h3>
            <p className="text-gray-600 mt-4">
              Work together with employees, bookkeepers, and accountants, even if you’re on opposite sides of the world.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Access the same up‑to‑date financial information',
                'Discuss business insights in real time',
                'Submit expenses, manage leave, and send invoices',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheck className="text-[#00cba9] mt-1" />
                  <span className="text-gray-700">{t}</span>
                </li>
              ))}
            </ul>

          </div>
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.img
              alt="Collaboration"
              src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=900&q=60"
              className="rounded-3xl shadow-2xl"
              whileHover={{ rotate: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            />
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default AccountingSoftware
