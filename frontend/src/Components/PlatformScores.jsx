import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const platforms = [
  { name: 'BloomAudit', score: 9.4, highlight: true, color: '#00cba9', stars: '★★★★★' },
  { name: 'QuickBooks', score: 7.2, color: '#fbbf24', stars: '★★★★☆' },
  { name: 'Zoho Books', score: 7.5, color: '#a78bfa', stars: '★★★★☆' },
  { name: 'SAP B1', score: 6.8, color: '#f87171', stars: '★★★☆☆' },
  { name: 'Xero', score: 7.0, color: '#60a5fa', stars: '★★★★☆' },
];

function useCountUp(target, trigger, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf;
    const t0 = performance.now();
    const run = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = 1 - (1 - p) ** 3;
      setVal(+(target * e).toFixed(1));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);
  return val;
}

function Ring({ score, color, size, sw, trigger }) {
  const r = (size - sw * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - score / 10);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute inset-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={sw} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: trigger ? offset : circ }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ filter: `drop-shadow(0 0 7px ${color})` }}
      />
    </svg>
  );
}

function ScoreCard({ p, inView, delay }) {
  const count = useCountUp(p.score, inView);
  const size = p.highlight ? 150 : 108;
  const sw = p.highlight ? 11 : 8;
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-3"
    >
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: size, height: size,
          background: p.highlight ? `radial-gradient(circle, ${p.color}28 0%, transparent 70%)` : 'transparent',
          boxShadow: p.highlight ? `0 0 70px ${p.color}45, 0 0 140px ${p.color}18` : 'none',
        }}
      >
        <Ring score={p.score} color={p.color} size={size} sw={sw} trigger={inView} />
        <span className={`relative z-10 font-black leading-none ${p.highlight ? 'text-[2.4rem] text-white' : 'text-[1.7rem] text-white/75'}`}>
          {count}
        </span>
      </div>
      <div className="text-center">
        <p className={`font-bold ${p.highlight ? 'text-[#00cba9] text-sm tracking-wide' : 'text-white/50 text-xs'}`}>{p.name}</p>
        <p className="text-white/30 text-[10px] mt-0.5">Out of 10</p>
        <p className="text-sm mt-1" style={{ color: p.color + 'bb' }}>{p.stars}</p>
      </div>
    </motion.div>
  );
}

const PlatformScores = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative bg-[#07111f] py-24 px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00cba9]/8 rounded-full blur-[160px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-600/8 rounded-full blur-[120px]" />
      </div>
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00cba9]/15 text-[#00cba9] text-xs font-bold tracking-[0.25em] uppercase mb-4 border border-[#00cba9]/30">
            OVERALL PLATFORM SCORE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-2">
            We Scored Higher <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cba9] to-blue-400">
              Across Every Dimension
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-end justify-center gap-8 md:gap-12 lg:gap-16">
          {platforms.map((p, i) => (
            <ScoreCard key={p.name} p={p} inView={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformScores;
