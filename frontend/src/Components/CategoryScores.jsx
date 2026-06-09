import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';

const platforms = [
  { key: 'bloom', label: 'BloomAudit', color: '#00cba9', highlight: true },
  { key: 'qb',    label: 'QuickBooks', color: '#fbbf24' },
  { key: 'zoho',  label: 'Zoho Books', color: '#a78bfa' },
  { key: 'sap',   label: 'SAP B1',     color: '#f87171' },
  { key: 'xero',  label: 'Xero',       color: '#60a5fa' },
];

const rows = [
  { name: 'Accounting & Finance',  bloom: 9.5, qb: 9.0, zoho: 8.5, sap: 9.0, xero: 8.8 },
  { name: 'HR & Payroll',          bloom: 9.2, qb: 5.0, zoho: 2.0, sap: 8.5, xero: 3.0 },
  { name: 'Inventory & Operations',bloom: 9.0, qb: 6.0, zoho: 8.0, sap: 9.0, xero: 5.0 },
  { name: 'Projects & Job Costing',bloom: 9.0, qb: 5.5, zoho: 5.0, sap: 8.5, xero: 3.0 },
  { name: 'Integrations & API',    bloom: 8.8, qb: 9.0, zoho: 8.0, sap: 7.5, xero: 9.0 },
  { name: 'Ease of Use',           bloom: 9.5, qb: 8.0, zoho: 7.5, sap: 5.0, xero: 9.0 },
  { name: 'Value for Money',       bloom: 9.8, qb: 7.0, zoho: 8.5, sap: 3.0, xero: 7.5 },
  { name: 'Implementation Speed',  bloom: 9.8, qb: 8.5, zoho: 8.0, sap: 2.0, xero: 8.5 },
  { name: 'Compliance & Audit',    bloom: 9.3, qb: 6.5, zoho: 6.0, sap: 8.5, xero: 6.0 },
];

const overallRow = { name: 'Overall', bloom: 9.4, qb: 7.2, zoho: 7.5, sap: 6.8, xero: 7.0 };

function scoreColor(val) {
  if (val >= 9.0) return '#00cba9';
  if (val >= 7.0) return '#60a5fa';
  if (val >= 5.0) return '#fbbf24';
  return '#f87171';
}

function ScoreCell({ score, platformColor, isBloom, inView, delay }) {
  const pct = `${score * 10}%`;
  const numColor = isBloom ? platformColor : scoreColor(score);
  return (
    <td className={`px-3 py-4 text-center border-b border-white/5 align-top ${isBloom ? 'bg-[#00cba9]/8 border-l border-r border-[#00cba9]/15' : ''}`}>
      <motion.span
        className="block font-black text-base leading-none mb-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay }}
        style={{ color: numColor }}
      >
        {score.toFixed(1)}
      </motion.span>
      {/* Bar track */}
      <div className="mx-auto h-[5px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)', maxWidth: 72 }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: pct } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: isBloom
              ? `linear-gradient(90deg, ${platformColor}99, ${platformColor})`
              : `${numColor}88`,
            boxShadow: isBloom ? `0 0 8px ${platformColor}70` : 'none',
          }}
        />
      </div>
    </td>
  );
}

const CategoryScores = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const allRows = [...rows, { ...overallRow, isOverall: true }];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0b1827 0%, #0e2235 50%, #0b1827 100%)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1920&q=80&auto=format")' }}
      />
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-[#00cba9]/7 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[130px]" />
      </div>
      {/* Diagonal line grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00cba9]/15 text-[#00cba9] text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#00cba9]/30">
            CATEGORY SCORES VS COMPETITORS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mt-2">
            Dominating in Every Category
          </h2>
          <p className="text-white/35 text-sm mt-3">Scores out of 10 — bars show relative performance</p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          {[
            { label: '9.0+  Excellent', color: '#00cba9' },
            { label: '7.0–8.9  Good',  color: '#60a5fa' },
            { label: '5.0–6.9  Average', color: '#fbbf24' },
            { label: '< 5.0  Poor',    color: '#f87171' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-xs text-white/50">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
              {l.label}
            </div>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl"
          style={{ boxShadow: '0 0 80px rgba(0,203,169,0.05), 0 0 40px rgba(0,0,0,0.5)' }}
        >
          <table className="w-full min-w-[640px] border-collapse">
            {/* Header */}
            <thead>
              <tr className="bg-[#091520]">
                <th className="text-left px-5 py-5 text-white/45 text-xs font-bold uppercase tracking-wider border-b border-white/8 w-[180px]">
                  Category
                </th>
                {platforms.map((p, i) => (
                  <th
                    key={p.key}
                    className={`px-3 py-5 text-center border-b border-white/8 ${p.highlight ? 'bg-[#00cba9]/12 border-l border-r border-[#00cba9]/25' : ''}`}
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      {p.highlight && (
                        <span className="flex items-center gap-1 bg-[#00cba9] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                          <FaCrown size={7} /> Best
                        </span>
                      )}
                      <span className="font-bold text-xs" style={{ color: p.highlight ? p.color : 'rgba(255,255,255,0.55)' }}>
                        {p.label}
                      </span>
                      <div className="w-2 h-2 rounded-full" style={{ background: p.color, opacity: 0.8 }} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {allRows.map((row, ri) => {
                const isOverall = !!row.isOverall;
                const vals = platforms.map((p) => row[p.key]);
                const maxVal = Math.max(...vals);
                return (
                  <tr
                    key={row.name}
                    className={`group transition-colors duration-150 ${
                      isOverall
                        ? 'bg-white/[0.05] border-t-2 border-[#00cba9]/30'
                        : ri % 2 === 0
                        ? 'bg-white/[0.015]'
                        : ''
                    }`}
                  >
                    {/* Category label */}
                    <td className={`px-5 py-4 border-b border-white/5 ${isOverall ? 'border-b-0' : ''}`}>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold transition-colors ${isOverall ? 'text-[#00cba9] font-black' : 'text-white/65 group-hover:text-white/90'}`}>
                          {row.name}
                        </span>
                        {isOverall && <span className="text-[10px] text-[#00cba9]/60 font-bold uppercase tracking-wider">Final</span>}
                      </div>
                    </td>

                    {/* Score cells */}
                    {platforms.map((p, ci) => {
                      const score = row[p.key];
                      const isWinner = score === maxVal;
                      return (
                        <td
                          key={p.key}
                          className={`px-3 py-4 text-center align-middle border-b border-white/5 transition-colors group-hover:bg-white/[0.02] ${
                            p.highlight
                              ? 'bg-[#00cba9]/8 border-l border-r border-[#00cba9]/15 group-hover:bg-[#00cba9]/12'
                              : ''
                          } ${isOverall ? 'border-b-0' : ''}`}
                        >
                          <div className="flex flex-col items-center gap-1.5">
                            {/* Score + winner dot */}
                            <div className="flex items-center gap-1">
                              {isWinner && !p.highlight && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                              )}
                              <motion.span
                                className={`font-black leading-none ${isOverall ? 'text-lg' : 'text-base'}`}
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.4, delay: ri * 0.05 + ci * 0.03 }}
                                style={{ color: p.highlight ? p.color : scoreColor(score) }}
                              >
                                {score.toFixed(1)}
                              </motion.span>
                            </div>
                            {/* Bar */}
                            <div
                              className="rounded-full overflow-hidden"
                              style={{ background: 'rgba(255,255,255,0.06)', width: 64, height: p.highlight ? 6 : 4 }}
                            >
                              <motion.div
                                className="h-full rounded-full"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${score * 10}%` } : { width: 0 }}
                                transition={{ duration: 1.3, delay: ri * 0.05 + ci * 0.04, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                  background: p.highlight
                                    ? `linear-gradient(90deg, ${p.color}70, ${p.color})`
                                    : `${scoreColor(score)}99`,
                                  boxShadow: p.highlight ? `0 0 10px ${p.color}60` : 'none',
                                }}
                              />
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center text-white/25 text-xs mt-6"
        >
          Scores are based on feature availability, depth, and pricing as of 2026. BloomAudit internal benchmarks.
        </motion.p>
      </div>
    </section>
  );
};

export default CategoryScores;
