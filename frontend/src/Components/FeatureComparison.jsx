import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaTimes, FaCrown } from 'react-icons/fa';

const cols = ['BloomAudit', 'QuickBooks', 'Zoho Books', 'SAP B1', 'Xero'];

const categories = [
  {
    label: 'Core Accounting', color: '#00cba9',
    rows: [
      ['Double-Entry Accounting', 'check', 'check', 'check', 'check', 'check'],
      ['Full AP (Bills + Payables)', 'check', 'check', 'check', 'check', 'check'],
      ['Tax (VAT / GST / WHT)', 'check', 'partial', 'check', 'check', 'check'],
      ['Bank Reconciliation', 'check', 'check', 'check', 'check', 'check'],
    ],
  },
  {
    label: 'Sales & Procurement', color: '#3b82f6',
    rows: [
      ['Quotes & Sales Pipeline', 'check', 'check', 'check', 'check', 'addon'],
      ['Purchase Orders + Approval', 'check', 'enterprise', 'check', 'check', 'addon'],
    ],
  },
  {
    label: 'HR & Payroll', color: '#8b5cf6',
    rows: [
      ['Employee HR Directory', 'check', 'cross', 'cross', 'check', 'cross'],
      ['Payroll with Payslips', 'check', 'addon45', 'cross', 'check', 'addon'],
      ['Attendance & Shifts', 'check', 'cross', 'cross', 'partial', 'cross'],
      ['PTO / Leave Management', 'check', 'cross', 'cross', 'check', 'cross'],
      ['Performance Reviews', 'check', 'cross', 'cross', 'check', 'cross'],
    ],
  },
  {
    label: 'Finance & Operations', color: '#f59e0b',
    rows: [
      ['Expense Claims + GL Post', 'check', 'basic', 'basic', 'check', 'addon'],
      ['Inventory + COGS Posting', 'check', 'enterprise', 'check', 'check', 'addon'],
      ['Projects & Job Costing', 'check', 'basic', 'basic', 'check', 'cross'],
      ['Fixed Assets + Depreciation', 'check', 'cross', 'cross', 'check', 'cross'],
      ['Multi-Currency + FX', 'check', 'addon', 'check', 'check', 'check'],
      ['Vendor Self-Service Portal', 'check', 'cross', 'cross', 'partial', 'cross'],
    ],
  },
  {
    label: 'Technology', color: '#ec4899',
    rows: [
      ['REST API + Webhooks', 'check', 'check', 'check', 'check', 'check'],
    ],
  },
];

const priceRow = ['Starting Price / Month', '$29', '$30', '$20', '$3,000+', '$15'];
const scoreRow = ['Overall Score', '9.4 / 10', '7.2', '7.5', '6.8', '7.0'];

function Cell({ val, isBloom }) {
  const base = 'flex items-center justify-center';
  switch (val) {
    case 'check':
      return <div className={base}><FaCheck className={`text-sm ${isBloom ? 'text-emerald-400' : 'text-emerald-400/50'}`} /></div>;
    case 'cross':
      return <div className={base}><FaTimes className="text-sm text-red-400/50" /></div>;
    case 'partial':
      return <div className={base}><span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full text-[10px] font-bold border border-orange-500/20">Partial</span></div>;
    case 'addon':
      return <div className={base}><span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-[10px] font-bold border border-blue-500/20">Add-on</span></div>;
    case 'addon45':
      return <div className={base}><span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-[10px] font-bold border border-blue-500/20">Add-on $45+</span></div>;
    case 'enterprise':
      return <div className={base}><span className="px-2 py-0.5 bg-gray-600/30 text-gray-400 rounded-full text-[10px] font-bold border border-gray-600/20">Enterprise</span></div>;
    case 'basic':
      return <div className={base}><span className="px-2 py-0.5 bg-gray-600/30 text-gray-400 rounded-full text-[10px] font-bold border border-gray-600/20">Basic</span></div>;
    default:
      return <span className={`text-sm font-semibold ${isBloom ? 'text-emerald-400' : 'text-gray-400'}`}>{val}</span>;
  }
}

const FeatureComparison = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)',
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&auto=format")' }}
      />
      {/* Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#00cba9]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-blue-500/25">
            HEAD-TO-HEAD FEATURE COMPARISON
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mt-2">
            Every Feature, Side by Side
          </h2>
          <p className="text-white/40 mt-3 text-sm">Scroll horizontally on mobile</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl"
          style={{ boxShadow: '0 0 80px rgba(0,203,169,0.06), 0 0 40px rgba(0,0,0,0.6)' }}
        >
          <table className="w-full min-w-[760px] border-collapse">
            {/* Table header */}
            <thead>
              <tr className="bg-[#0a1a30]">
                <th className="text-left px-5 py-5 text-white/50 text-xs font-bold uppercase tracking-wider w-[220px] border-b border-white/8">
                  Feature / Capability
                </th>
                {cols.map((col, i) => (
                  <th key={col} className={`px-4 py-5 text-center border-b border-white/8 ${i === 0 ? 'bg-[#00cba9]/10 border-l border-r border-[#00cba9]/25' : ''}`}>
                    <div className="flex flex-col items-center gap-1">
                      {i === 0 && (
                        <span className="flex items-center gap-1 bg-[#00cba9] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                          <FaCrown size={8} /> Best
                        </span>
                      )}
                      <span className={`font-bold text-sm ${i === 0 ? 'text-[#00cba9]' : 'text-white/60'}`}>{col}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {categories.map((cat) => (
                <React.Fragment key={cat.label}>
                  {/* Category separator row */}
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em]"
                      style={{
                        background: `linear-gradient(90deg, ${cat.color}18 0%, transparent 60%)`,
                        color: cat.color,
                        borderLeft: `3px solid ${cat.color}`,
                      }}
                    >
                      {cat.label}
                    </td>
                  </tr>
                  {/* Feature rows */}
                  {cat.rows.map(([feature, ...vals], ri) => (
                    <tr
                      key={feature}
                      className="group transition-colors duration-150"
                      style={{ background: ri % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}
                    >
                      <td className="px-5 py-3.5 text-white/70 text-sm group-hover:text-white/90 transition-colors border-b border-white/5">
                        {feature}
                      </td>
                      {vals.map((val, ci) => (
                        <td
                          key={ci}
                          className={`px-4 py-3.5 text-center border-b border-white/5 transition-colors ${
                            ci === 0
                              ? 'bg-[#00cba9]/8 border-l border-r border-[#00cba9]/15 group-hover:bg-[#00cba9]/12'
                              : 'group-hover:bg-white/3'
                          }`}
                        >
                          <Cell val={val} isBloom={ci === 0} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}

              {/* Price row */}
              <tr className="bg-white/[0.03]">
                <td className="px-5 py-4 text-white/80 text-sm font-semibold border-t border-white/10">{priceRow[0]}</td>
                {priceRow.slice(1).map((val, ci) => (
                  <td key={ci} className={`px-4 py-4 text-center border-t border-white/10 ${ci === 0 ? 'bg-[#00cba9]/10 border-l border-r border-[#00cba9]/20' : ''}`}>
                    <span className={`font-black text-base ${ci === 0 ? 'text-[#00cba9]' : val === '$3,000+' ? 'text-red-400' : 'text-white/50'}`}>{val}</span>
                  </td>
                ))}
              </tr>

              {/* Score row */}
              <tr>
                <td className="px-5 py-4 text-white/80 text-sm font-semibold border-t border-white/10 rounded-bl-2xl">{scoreRow[0]}</td>
                {scoreRow.slice(1).map((val, ci) => (
                  <td key={ci} className={`px-4 py-4 text-center border-t border-white/10 ${ci === 0 ? 'bg-[#00cba9]/12 border-l border-r border-[#00cba9]/25 rounded-none' : ''} ${ci === 4 ? 'rounded-br-2xl' : ''}`}>
                    <span className={`font-black text-sm ${ci === 0 ? 'text-[#00cba9]' : 'text-white/40'}`}>{val}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComparison;
