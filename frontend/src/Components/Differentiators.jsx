import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaServer, FaShieldAlt, FaPuzzlePiece, FaSitemap, FaGlobe, FaBolt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const items = [
  {
    icon: FaServer,
    title: 'True Multi-Tenant Architecture',
    desc: 'Every business gets its own isolated database schema. Your data never shares rows with another company. Zero cross-tenant data leakage risk.',
    color: '#00cba9',
    glow: 'rgba(0,203,169,0.25)',
  },
  {
    icon: FaShieldAlt,
    title: 'Granular RBAC',
    desc: 'Role-based access control on every action. Create custom roles, assign fine-grained permissions per resource. Full audit trail of every change.',
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    icon: FaPuzzlePiece,
    title: 'Modular Add-On Store',
    desc: 'Start on any plan and add only the features you need. 19 individual add-ons available — no forced bundle upgrades. Pay for what you use.',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.25)',
  },
  {
    icon: FaSitemap,
    title: 'Deep GL Integration',
    desc: 'Every transaction — invoices, bills, payroll, expenses, inventory, depreciation — automatically posts a balanced journal entry to the General Ledger.',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
  },
  {
    icon: FaGlobe,
    title: 'Multi-Currency + FX',
    desc: 'Transact in any currency. Live exchange rates, automatic FX gain/loss postings, and multi-currency financial statements built in.',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.25)',
  },
  {
    icon: FaBolt,
    title: 'Instant Onboarding',
    desc: 'Register, log in, and your full accounting environment is provisioned in seconds — complete with Chart of Accounts, tax tables, and default settings.',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.25)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Differentiators = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #07111f 0%, #0b1929 50%, #07111f 100%)' }}
    >
      {/* Background tech image */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&auto=format")' }}
      />
      {/* Mesh glow spots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00cba9]/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-blue-600/6 rounded-full blur-[100px]" />
      </div>
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00cba9]/15 text-[#00cba9] text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#00cba9]/30">
            KEY DIFFERENTIATORS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-2">
            What Sets Us Apart
          </h2>
          <p className="text-white/40 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Six Reasons Businesses Choose BloomAudit — a purpose-built ERP that grows with your business without the complexity or cost of enterprise alternatives.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl p-7 border border-white/10 bg-white/[0.04] backdrop-blur-sm cursor-default overflow-hidden transition-all duration-300"
                style={{ '--glow': item.glow }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${item.glow} 0%, transparent 60%)` }}
                />
                {/* Top border glow on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}30, ${item.color}15)`,
                    border: `1px solid ${item.color}40`,
                    boxShadow: `0 0 20px ${item.color}20`,
                  }}
                >
                  <Icon style={{ color: item.color }} size={20} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3 relative z-10 group-hover:text-white transition-colors" style={{ textShadow: 'none' }}>
                  {item.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed relative z-10 group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mt-16"
        >
          <Link
            to="/register?plan=starter"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00cba9] text-white rounded-xl font-bold text-base shadow-[0_0_30px_rgba(0,203,169,0.35)] hover:shadow-[0_0_50px_rgba(0,203,169,0.5)] hover:bg-[#00b596] transition-all group no-underline"
          >
            Get Started — $29/month
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-white/30 text-xs mt-3">No consultants required. Live in seconds.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentiators;
