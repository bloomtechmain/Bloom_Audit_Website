import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaMinus, FaChevronDown, FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const planCols = [
  { name: 'Starter',    price: '$29',  priceYr: '$290/yr',    users: 'Up to 5',    color: '#3b82f6', slug: 'starter' },
  { name: 'Growth',     price: '$79',  priceYr: '$790/yr',    users: 'Up to 25',   color: '#00cba9', slug: 'growth' },
  { name: 'Business',   price: '$149', priceYr: '$1,490/yr',  users: 'Up to 100',  color: '#8b5cf6', slug: 'business', popular: true },
  { name: 'Enterprise', price: '$299', priceYr: '$2,990/yr',  users: 'Unlimited',  color: '#f59e0b', slug: 'enterprise' },
];

const all4 = [true, true, true, true];
const from2 = [false, true, true, true];
const from3 = [false, false, true, true];
const from4 = [false, false, false, true];

const categories = [
  {
    label: 'Core Accounting', color: '#00cba9',
    features: [
      'Chart of Accounts (system + custom)',
      'General Ledger',
      'Journal Entries (draft → post → reverse)',
      'Invoice Management + Credit Notes + Aging',
      'Customer Database',
      'Receivables Tracking & Aging Reports',
      'Bill Management (full AP workflow)',
      'Vendor Database',
      'Tax Management (VAT / GST / WHT)',
      'P&L, Balance Sheet, Cash Flow, Trial Balance',
      'Document Bank + Audit Trail',
      'Bulk Import / Export',
      'Analytics Dashboard',
      'RBAC, Company Branding & Settings',
      'Notes & Todos',
    ].map(name => ({ name, vals: all4 })),
  },
  {
    label: 'Sales, Purchasing & Banking', color: '#3b82f6',
    features: [
      'Quotes & Quote Generator',
      'Sales Orders (linked to invoices)',
      'Purchase Orders (approval workflow)',
      'Petty Cash',
      'Subscriptions (recurring vendor payments)',
      'Bank Accounts + Bank Reconciliation',
      'Stripe Payment Integration',
    ].map(name => ({ name, vals: from2 })),
  },
  {
    label: 'HR & Workforce Management', color: '#8b5cf6',
    features: [
      'Employee Directory',
      'Payroll + Payslips + Digital Signatures',
      'PTO / Time Off Management',
      'Attendance Management + Shifts',
      'Employee Onboarding Workflow',
      'Performance Reviews',
      'Employee Self-Service Portal',
      'Expense Claims + GL Posting',
      'Time Tracking (billable + timer)',
    ].map(name => ({ name, vals: from3 })),
  },
  {
    label: 'Operations & Finance', color: '#f59e0b',
    features: [
      'Inventory Management + COGS Posting',
      'Projects (3-level hierarchy)',
      'Job Costing + Variance Reports',
      'Fixed Assets + Depreciation',
      'Loans + Repayment Schedules',
      'Multi-Currency + FX Gain/Loss',
      'Budget Planning & Variance Analysis',
    ].map(name => ({ name, vals: from3 })),
  },
  {
    label: 'Enterprise & Integrations', color: '#ec4899',
    features: [
      'Advanced Analytics v2 + Custom KPI Dashboards',
      'Custom Report Builder',
      'Compliance & Audit Log',
      'REST API v1 + API Key Management',
      'Incoming Webhooks',
      'Vendor Self-Service Portal',
      'Debit Card Management',
      'Advanced Import / Export (all modules)',
    ].map(name => ({ name, vals: from4 })),
  },
];

const PlanComparison = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [openCats, setOpenCats] = useState(() => new Set(categories.map((_, i) => i)));

  const toggle = (i) =>
    setOpenCats((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(170deg, #050e1b 0%, #08172c 55%, #050e1b 100%)' }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&auto=format")' }}
      />
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#00cba9]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00cba9]/15 text-[#00cba9] text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#00cba9]/30">
            PLAN COMPARISON
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-2">
            All Features Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">All Plans</span>
          </h2>
          <p className="text-white/35 text-sm mt-4">Click a category to collapse / expand</p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-white/10"
          style={{ boxShadow: '0 0 80px rgba(0,203,169,0.06), 0 8px 60px rgba(0,0,0,0.6)' }}
        >
          <table className="w-full min-w-[680px] border-collapse">
            {/* ── Plan header ── */}
            <thead>
              <tr className="bg-[#060f1e]">
                <th className="text-left px-5 py-6 text-white/35 text-xs font-bold uppercase tracking-wider w-[230px] border-b border-white/8">
                  Feature
                </th>
                {planCols.map((plan) => (
                  <th
                    key={plan.name}
                    className="px-4 py-6 text-center border-b border-white/8 relative"
                    style={{ background: `${plan.color}12` }}
                  >
                    {/* Top color bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)` }}
                    />
                    {plan.popular && (
                      <span
                        className="flex items-center gap-1 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider mb-2 mx-auto w-fit"
                        style={{ background: plan.color }}
                      >
                        <FaCrown size={7} /> Popular
                      </span>
                    )}
                    <p className="font-bold text-sm" style={{ color: plan.color }}>{plan.name}</p>
                    <p className="font-black text-xl text-white mt-1">
                      {plan.price}
                      <span className="text-xs font-normal text-white/35">/mo</span>
                    </p>
                    <p className="text-white/30 text-[11px] mt-0.5">{plan.users}</p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {categories.map((cat, ci) => (
                <React.Fragment key={cat.label}>
                  {/* ── Category row ── */}
                  <tr
                    className="cursor-pointer select-none group/cat"
                    onClick={() => toggle(ci)}
                  >
                    <td
                      colSpan={5}
                      className="px-5 py-3 text-xs font-black uppercase tracking-[0.2em]"
                      style={{
                        background: `linear-gradient(90deg, ${cat.color}22 0%, ${cat.color}09 45%, transparent 75%)`,
                        color: cat.color,
                        borderLeft: `3px solid ${cat.color}`,
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        {cat.label}
                        <FaChevronDown
                          size={10}
                          className="transition-transform duration-300 opacity-60 group-hover/cat:opacity-100"
                          style={{ transform: openCats.has(ci) ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </div>
                    </td>
                  </tr>

                  {/* ── Feature rows ── */}
                  {openCats.has(ci) &&
                    cat.features.map((feat, fi) => (
                      <motion.tr
                        key={feat.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, delay: fi * 0.015 }}
                        className="group transition-colors duration-150"
                        style={{ background: fi % 2 === 0 ? 'rgba(255,255,255,0.012)' : 'transparent' }}
                      >
                        <td className="px-5 py-3.5 text-white/55 text-sm group-hover:text-white/85 transition-colors border-b border-white/[0.04]">
                          {feat.name}
                        </td>
                        {feat.vals.map((included, pi) => (
                          <td
                            key={pi}
                            className="px-4 py-3.5 text-center border-b border-white/[0.04] transition-colors group-hover:brightness-110"
                            style={{ background: `${planCols[pi].color}07` }}
                          >
                            {included ? (
                              <div className="flex items-center justify-center">
                                <div
                                  className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
                                  style={{
                                    background: `${planCols[pi].color}22`,
                                    border: `1px solid ${planCols[pi].color}45`,
                                    boxShadow: `0 0 8px ${planCols[pi].color}30`,
                                  }}
                                >
                                  <FaCheck style={{ color: planCols[pi].color }} size={8} />
                                </div>
                              </div>
                            ) : (
                              <FaMinus className="mx-auto text-white/12" size={12} />
                            )}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                </React.Fragment>
              ))}

              {/* ── Plan Details ── */}
              {[
                { label: 'Users Included', getValue: (p) => p.users, bold: true },
                { label: 'Monthly Price',  getValue: (p) => p.price + '/mo', bold: true },
                { label: 'Annual Price',   getValue: (p) => p.priceYr, bold: false },
              ].map((row, ri) => (
                <tr
                  key={row.label}
                  className={ri === 0 ? 'border-t-2 border-white/10' : ''}
                  style={{ background: ri === 1 ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.01)' }}
                >
                  <td className="px-5 py-4 text-white/60 text-sm font-semibold">{row.label}</td>
                  {planCols.map((plan, pi) => (
                    <td
                      key={pi}
                      className="px-4 py-4 text-center"
                      style={{ background: `${plan.color}10` }}
                    >
                      <span
                        className={row.bold ? 'font-black text-base' : 'font-semibold text-sm text-white/50'}
                        style={row.bold ? { color: plan.color } : {}}
                      >
                        {row.getValue(plan)}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}

              {/* ── CTA row ── */}
              <tr>
                <td className="px-5 py-5 text-white/30 text-xs italic">
                  All plans include a 30-day free trial.
                </td>
                {planCols.map((plan, pi) => (
                  <td
                    key={pi}
                    className="px-4 py-5 text-center"
                    style={{ background: `${plan.color}10` }}
                  >
                    <Link
                      to={`/register?plan=${plan.slug}`}
                      className="inline-block px-5 py-2.5 rounded-xl font-bold text-xs no-underline transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                      style={{
                        background: plan.popular ? plan.color : `${plan.color}20`,
                        color: plan.popular ? '#fff' : plan.color,
                        border: `1px solid ${plan.color}50`,
                        boxShadow: plan.popular ? `0 0 20px ${plan.color}40` : 'none',
                      }}
                    >
                      Get {plan.name}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center text-white/20 text-xs mt-6"
        >
          Prices in USD. Annual billing saves ~17%. Enterprise includes unlimited users and priority support.
        </motion.p>
      </div>
    </section>
  );
};

export default PlanComparison;
