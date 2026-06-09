import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTimesCircle, FaCheckCircle, FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const problems = [
  {
    num: '01',
    company: 'QuickBooks',
    label: 'The QuickBooks Problem',
    text: 'QuickBooks focuses on basic bookkeeping. HR, payroll, inventory and projects require expensive third-party integrations or upgrades to QuickBooks Enterprise at $200+/mo.',
    accent: '#ef4444',
    glow: 'rgba(239,68,68,0.18)',
    tag: '$200+/mo extra',
  },
  {
    num: '02',
    company: 'Zoho',
    label: 'The Zoho Problem',
    text: "Zoho's suite is powerful but fragmented — you pay separately for Zoho Books, Zoho People, Zoho Inventory and Zoho Projects. Four logins, four data silos, complex sync rules.",
    accent: '#f97316',
    glow: 'rgba(249,115,22,0.18)',
    tag: '4 separate products',
  },
  {
    num: '03',
    company: 'SAP B1',
    label: 'The SAP Problem',
    text: 'SAP Business One starts at $3,000+/mo with mandatory implementation costs of $30,000–$150,000. Requires dedicated IT support and months of setup before going live.',
    accent: '#eab308',
    glow: 'rgba(234,179,8,0.18)',
    tag: '$3,000+/mo',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.7, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-10 pb-28 px-6"
      style={{ background: 'linear-gradient(170deg, #07111f 0%, #0b1d34 55%, #07111f 100%)' }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format")' }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00cba9]/10 rounded-full blur-[130px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/15 text-red-400 text-xs font-bold tracking-[0.25em] uppercase mb-5 border border-red-500/25">
            THE PROBLEM WITH EXISTING SOLUTIONS
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Built for Businesses That Have{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Outgrown
              </span>
            </span>{' '}
            Spreadsheets
          </h2>

          <p className="text-white/45 text-lg max-w-3xl mx-auto leading-relaxed">
            Most accounting tools stop at invoices and bank feeds. Legacy ERP systems like SAP cost hundreds of
            thousands to implement. BloomAudit fills the gap — a full-stack ERP accessible to any business from day one.
          </p>

          {/* Divider dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-red-400/50"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* ── Problem Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.num}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl p-7 border overflow-hidden cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                borderColor: `${item.accent}30`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${item.glow} 0%, transparent 65%)` }}
              />
              {/* Top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`, opacity: 0.6 }}
              />
              {/* Big faded number */}
              <div
                className="absolute -right-3 -top-4 text-[7rem] font-black leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-20 opacity-[0.07]"
                style={{ color: item.accent }}
              >
                {item.num}
              </div>

              {/* Warning badge */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border"
                  style={{ color: item.accent, background: `${item.accent}18`, borderColor: `${item.accent}30` }}
                >
                  <FaExclamationTriangle size={10} />
                  {item.tag}
                </div>
                <FaTimesCircle style={{ color: item.accent }} className="opacity-70 text-xl" />
              </div>

              {/* Company name */}
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1 relative z-10">{item.company}</p>

              {/* Title */}
              <h3 className="font-bold text-lg text-white mb-3 relative z-10 group-hover:text-white transition-colors">
                {item.label}
              </h3>

              {/* Body */}
              <p className="text-white/45 text-sm leading-relaxed relative z-10 group-hover:text-white/60 transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Solution Card (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 0 80px rgba(0,203,169,0.15), 0 0 40px rgba(0,0,0,0.4)' }}
        >
          {/* Background image for solution card */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format")' }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e3b5e] via-[#0a4a3a] to-[#0e3b5e]" />
          {/* Teal glow spots */}
          <div className="absolute -top-10 left-1/4 w-[400px] h-[200px] bg-[#00cba9]/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-10 right-1/4 w-[400px] h-[200px] bg-[#00cba9]/15 rounded-full blur-[80px]" />
          {/* Top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00cba9] to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
            {/* Icon */}
            <div className="shrink-0">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,203,169,0.3), rgba(0,203,169,0.1))',
                  border: '1px solid rgba(0,203,169,0.4)',
                  boxShadow: '0 0 40px rgba(0,203,169,0.25)',
                }}
              >
                <FaCheckCircle className="text-[#00cba9] text-4xl" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-[#00cba9] text-xs font-bold tracking-[0.25em] uppercase mb-2">The BloomAudit Solution</p>
              <h3 className="text-white font-extrabold text-2xl md:text-3xl mb-3 leading-tight">
                One Platform. One Login.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-teal-300">
                  Everything Included.
                </span>
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                Full accounting, HR, payroll, inventory, projects, and compliance — all in a single multi-tenant platform
                starting at{' '}
                <span className="text-[#00cba9] font-bold">$29/month</span>. No consultants required.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <Link
                to="/register?plan=starter"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00cba9] text-white rounded-xl font-bold text-sm no-underline whitespace-nowrap transition-all hover:bg-[#00b596] hover:shadow-[0_0_30px_rgba(0,203,169,0.5)] group"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;
