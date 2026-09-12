'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface SolutionItem {
  id: string;
  title: string;
  description: React.ReactNode;
  slug: string;
  graphicType: 'chart' | 'cubes' | 'schematic' | 'ecosystem' | 'ledger' | 'ai-mesh' | 'ecommerce';
  colSpan: string;
}

const solutionsData: SolutionItem[] = [
  /* ── ROW 1 ── */
  {
    id: 'enterprise-erp',
    title: 'Enterprise ERP',
    description: (
      <>
        Multi-rooftop consolidated ledger and live inventory sync across all <strong className="font-bold text-slate-950">dealership locations</strong>.
      </>
    ),
    slug: 'enterprise-erp',
    graphicType: 'chart',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'sales-crm',
    title: 'Sales CRM',
    description: (
      <>
        High-velocity lead pipelines and service equity mining to power our <strong className="font-bold text-slate-950">Built-In Customer Engine</strong>.
      </>
    ),
    slug: 'sales-crm',
    graphicType: 'cubes',
    colSpan: 'lg:col-span-7',
  },

  /* ── ROW 2 ── */
  {
    id: 'service-bay',
    title: 'Service Bay',
    description: (
      <>
        Paperless digital MPI, technician dispatching, and 1-click SMS approvals across <strong className="font-bold text-slate-950">Fixed Operations</strong>.
      </>
    ),
    slug: 'service-bay',
    graphicType: 'schematic',
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'digital-retail',
    title: 'Digital Retail',
    description: (
      <>
        Penny-perfect desking, instant lender approvals, and digital contracting in our <strong className="font-bold text-slate-950">open, dealer-ready ecosystem</strong>.
      </>
    ),
    slug: 'digital-retail',
    graphicType: 'ecosystem',
    colSpan: 'lg:col-span-5',
  },

  /* ── ROW 3 ── */
  {
    id: 'accounting-finance',
    title: 'Accounting & Finance',
    description: (
      <>
        Automated bank feeds, contract-in-transit schedules, and real-time <strong className="font-bold text-slate-950">General Ledger P&L balancing</strong>.
      </>
    ),
    slug: 'accounting',
    graphicType: 'ledger',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Autonomous Ops',
    description: (
      <>
        24/7 intelligent voice reception, automated technician scheduling, and <strong className="font-bold text-slate-950">autonomous workflow dispatching</strong>.
      </>
    ),
    slug: 'ai-solutions',
    graphicType: 'ai-mesh',
    colSpan: 'lg:col-span-7',
  },

  /* ── ROW 4 ── */
  {
    id: 'ecommerce',
    title: 'E-Commerce & Storefronts',
    description: (
      <>
        Custom dealership landing sites, live vehicle detail pages, and <strong className="font-bold text-slate-950">direct online deposit checkout</strong>.
      </>
    ),
    slug: 'ecommerce',
    graphicType: 'ecommerce',
    colSpan: 'lg:col-span-12',
  },
];

/* ─── Animated High-Fidelity Graphics ─── */
function GraphicElement({ type }: { type: SolutionItem['graphicType'] }) {
  if (type === 'chart') {
    return (
      <div className="w-full h-full flex items-center justify-end">
        <svg className="w-[320px] sm:w-[380px] h-[180px] sm:h-[220px] text-slate-300/70" viewBox="0 0 380 200" fill="none">
          {/* Subtle Grid Lines */}
          <line x1="20" y1="40" x2="380" y2="40" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="90" x2="380" y2="90" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="140" x2="380" y2="140" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1" opacity="0.6" />
          
          <line x1="80" y1="20" x2="80" y2="180" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" opacity="0.3" />
          <line x1="180" y1="20" x2="180" y2="180" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" opacity="0.3" />
          <line x1="280" y1="20" x2="280" y2="180" stroke="currentColor" strokeDasharray="3 3" strokeWidth="0.75" opacity="0.3" />

          {/* Animated Upward Line Chart */}
          <motion.path
            d="M 30 165 L 90 145 L 140 120 L 190 135 L 240 75 L 290 85 L 340 35 L 370 20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0.8, opacity: 0.8 }}
            animate={{ 
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="transition-colors duration-300 group-hover:text-slate-500"
          />

          {/* Area Fill Gradient with Breathing Opacity */}
          <motion.path
            d="M 30 165 L 90 145 L 140 120 L 190 135 L 240 75 L 290 85 L 340 35 L 370 20 L 370 190 L 30 190 Z"
            fill="url(#chart-grad-big)"
            animate={{ opacity: [0.12, 0.22, 0.12] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="chart-grad-big" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Pulsing Circular Data Nodes */}
          {[
            { cx: 90, cy: 145, delay: 0 },
            { cx: 140, cy: 120, delay: 0.3 },
            { cx: 240, cy: 75, delay: 0.6 },
            { cx: 340, cy: 35, delay: 0.9 },
          ].map((node, idx) => (
            <motion.circle
              key={idx}
              cx={node.cx}
              cy={node.cy}
              r="4.5"
              fill="#ffffff"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
              style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (type === 'cubes') {
    return (
      <div className="w-full h-full flex items-center justify-end">
        <svg className="w-[300px] sm:w-[360px] h-[200px] sm:h-[240px] text-slate-300/70" viewBox="0 0 360 240" fill="none">
          {/* Isometric Flow Lines */}
          <g stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4">
            <line x1="120" y1="120" x2="220" y2="70" />
            <line x1="220" y1="70" x2="290" y2="130" />
            <line x1="120" y1="120" x2="200" y2="175" />
          </g>

          {/* Isometric Cube 1 (Left / Lower) */}
          <motion.g
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M120 90 L160 110 L120 130 L80 110 Z" fill="#ffffff" fillOpacity="0.9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M80 110 L120 130 L120 170 L80 150 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
            <path d="M160 110 L120 130 L120 170 L160 150 Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5" />
          </motion.g>

          {/* Isometric Cube 2 (Top / Center) */}
          <motion.g
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <path d="M220 40 L265 62 L220 85 L175 62 Z" fill="#ffffff" fillOpacity="0.95" stroke="currentColor" strokeWidth="1.5" />
            <path d="M175 62 L220 85 L220 130 L175 107 Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.5" />
            <path d="M265 62 L220 85 L220 130 L265 107 Z" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.5" />
          </motion.g>

          {/* Isometric Cube 3 (Right / Floating) */}
          <motion.g
            animate={{ y: [-3.5, 3.5, -3.5] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <path d="M290 105 L330 125 L290 145 L250 125 Z" fill="#ffffff" fillOpacity="0.9" stroke="currentColor" strokeWidth="1.5" />
            <path d="M250 125 L290 145 L290 185 L250 165 Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
            <path d="M330 125 L290 145 L290 185 L330 165 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
          </motion.g>
        </svg>
      </div>
    );
  }

  if (type === 'schematic') {
    return (
      <div className="w-full h-full flex items-center justify-end">
        <svg className="w-[320px] sm:w-[380px] h-[200px] sm:h-[240px] text-slate-300/70" viewBox="0 0 380 240" fill="none">
          {/* Diagnostic Circuit Grid */}
          <rect x="60" y="40" width="280" height="160" rx="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" fill="none" opacity="0.6" />
          <rect x="85" y="65" width="105" height="110" rx="10" fill="#ffffff" fillOpacity="0.8" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Signal Indicator lines */}
          <line x1="190" y1="95" x2="250" y2="95" stroke="currentColor" strokeWidth="2" />
          <line x1="190" y1="145" x2="270" y2="145" stroke="currentColor" strokeWidth="2" />

          {/* Pulse Node 1 */}
          <motion.circle 
            cx="250" cy="95" r="5" 
            fill="#ffffff" stroke="currentColor" strokeWidth="2"
            animate={{ scale: [1, 1.4, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '250px 95px' }}
          />

          {/* Pulse Node 2 */}
          <motion.circle 
            cx="270" cy="145" r="5" 
            fill="#ffffff" stroke="currentColor" strokeWidth="2"
            animate={{ scale: [1, 1.4, 1] }} 
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
            style={{ transformOrigin: '270px 145px' }}
          />

          {/* Diagnostic Card 2 */}
          <rect x="290" y="75" width="45" height="90" rx="8" fill="#ffffff" fillOpacity="0.9" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Scanning Line Waveform */}
          <motion.path
            d="M 98 120 L 115 120 L 125 100 L 138 140 L 148 110 L 158 125 L 175 120"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="transition-colors duration-300 group-hover:text-rose-500"
          />
        </svg>
      </div>
    );
  }

  if (type === 'ecosystem') {
    return (
      <div className="w-full h-full flex items-center justify-end">
        <svg className="w-[300px] sm:w-[360px] h-[200px] sm:h-[240px] text-slate-300/70" viewBox="0 0 360 240" fill="none">
          {/* Concentric Rotating Orbits */}
          <motion.ellipse
            cx="220" cy="120" rx="95" ry="55"
            stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '220px 120px' }}
          />
          <motion.ellipse
            cx="220" cy="120" rx="130" ry="75"
            stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" opacity="0.4"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '220px 120px' }}
          />

          {/* Core Central Node */}
          <circle cx="220" cy="120" r="28" fill="#ffffff" stroke="currentColor" strokeWidth="2" className="shadow-lg" />
          <circle cx="220" cy="120" r="14" fill="currentColor" fillOpacity="0.25" />
          <circle cx="220" cy="120" r="6" fill="currentColor" className="transition-colors duration-300 group-hover:text-sky-500" />

          {/* Orbiting Satellite 1 */}
          <motion.g
            animate={{ 
              x: [0, 45, 0, -45, 0],
              y: [0, -25, 0, 25, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="150" cy="95" r="12" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="150" cy="95" r="4" fill="currentColor" />
          </motion.g>

          {/* Orbiting Satellite 2 */}
          <motion.g
            animate={{ 
              x: [0, -40, 0, 40, 0],
              y: [0, 20, 0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <circle cx="290" cy="140" r="14" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="290" cy="140" r="5" fill="currentColor" />
          </motion.g>
        </svg>
      </div>
    );
  }

  if (type === 'ledger') {
    return (
      <div className="w-full h-full flex items-center justify-end">
        <svg className="w-[300px] sm:w-[360px] h-[200px] sm:h-[240px] text-slate-300/70" viewBox="0 0 360 240" fill="none">
          <g stroke="currentColor" strokeWidth="1.4" strokeDasharray="4 4" className="transition-colors duration-300 group-hover:text-emerald-500">
            <rect x="50" y="30" width="260" height="175" rx="12" fill="#ffffff" fillOpacity="0.9" />
            <line x1="50" y1="80" x2="310" y2="80" strokeWidth="2" strokeDasharray="none" />
            <line x1="180" y1="30" x2="180" y2="205" strokeWidth="1.5" strokeDasharray="none" />

            {/* Animated Debit Entries */}
            {[
              { x1: 75, y1: 110, x2: 155, y2: 110, delay: 0 },
              { x1: 75, y1: 140, x2: 135, y2: 140, delay: 0.3 },
              { x1: 75, y1: 170, x2: 160, y2: 170, delay: 0.6 },
            ].map((line, idx) => (
              <motion.line
                key={`debit-${idx}`}
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                strokeWidth="2.2" strokeDasharray="none"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: line.delay, ease: "easeInOut" }}
              />
            ))}

            {/* Animated Credit Entries */}
            {[
              { x1: 205, y1: 110, x2: 285, y2: 110, delay: 0.2 },
              { x1: 205, y1: 140, x2: 265, y2: 140, delay: 0.5 },
              { x1: 205, y1: 170, x2: 290, y2: 170, delay: 0.8 },
            ].map((line, idx) => (
              <motion.line
                key={`credit-${idx}`}
                x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                strokeWidth="2.2" strokeDasharray="none"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: line.delay, ease: "easeInOut" }}
              />
            ))}
          </g>
        </svg>
      </div>
    );
  }

  if (type === 'ai-mesh') {
    return (
      <div className="w-full h-full flex items-center justify-end">
        <svg className="w-[320px] sm:w-[380px] h-[220px] sm:h-[260px] text-slate-300/80" viewBox="0 0 380 260" fill="none">
          <g stroke="currentColor" strokeWidth="1.2">
            {/* Connecting Neural Lines with Shimmer */}
            <motion.line 
              x1="140" y1="80" x2="230" y2="60" strokeDasharray="3 3"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.line 
              x1="140" y1="80" x2="210" y2="150" strokeDasharray="3 3"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.line 
              x1="230" y1="60" x2="310" y2="110" strokeDasharray="3 3"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.line 
              x1="210" y1="150" x2="310" y2="110" strokeDasharray="3 3"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.line 
              x1="210" y1="150" x2="260" y2="210" strokeDasharray="3 3"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            />
            <motion.line 
              x1="310" y1="110" x2="350" y2="180" strokeDasharray="3 3"
              animate={{ opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
            />

            {/* Central 3D Levitating Cube */}
            <motion.g
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M210 110 L255 135 L210 160 L165 135 Z" fill="#ffffff" fillOpacity="0.95" strokeWidth="1.5" />
              <path d="M165 135 L210 160 L210 210 L165 185 Z" fill="currentColor" fillOpacity="0.12" strokeWidth="1.5" />
              <path d="M255 135 L210 160 L210 210 L255 185 Z" fill="currentColor" fillOpacity="0.22" strokeWidth="1.5" />
            </motion.g>

            {/* Neural Nodes with Glowing Pulse */}
            {[
              { cx: 140, cy: 80, r: 14, dot: 4, delay: 0 },
              { cx: 230, cy: 60, r: 16, dot: 5, delay: 0.5 },
              { cx: 310, cy: 110, r: 18, dot: 6, delay: 1.0 },
              { cx: 260, cy: 210, r: 12, dot: 3, delay: 1.5 },
              { cx: 350, cy: 180, r: 10, dot: 2.5, delay: 2.0 },
            ].map((node, idx) => (
              <motion.g
                key={`node-${idx}`}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
              >
                <circle cx={node.cx} cy={node.cy} r={node.r} fill="#ffffff" strokeWidth="2" />
                <circle cx={node.cx} cy={node.cy} r={node.dot} fill="currentColor" />
              </motion.g>
            ))}
          </g>
        </svg>
      </div>
    );
  }

  /* ecommerce default */
  return (
    <div className="w-full h-full flex items-center justify-end">
      <svg className="w-[320px] sm:w-[440px] h-[220px] sm:h-[260px] text-slate-300/80" viewBox="0 0 440 260" fill="none">
        {/* Browser Window Frame */}
        <rect x="40" y="25" width="360" height="210" rx="14" fill="#ffffff" fillOpacity="0.95" stroke="currentColor" strokeWidth="1.5" className="shadow-lg" />
        
        {/* Browser Top Bar */}
        <line x1="40" y1="62" x2="400" y2="62" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
        <circle cx="62" cy="44" r="3.5" fill="currentColor" opacity="0.4" />
        <circle cx="74" cy="44" r="3.5" fill="currentColor" opacity="0.4" />
        <circle cx="86" cy="44" r="3.5" fill="currentColor" opacity="0.4" />
        
        {/* URL Search Pill */}
        <rect x="110" y="36" width="220" height="16" rx="8" fill="currentColor" fillOpacity="0.08" />
        <line x1="125" y1="44" x2="250" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

        {/* Vehicle Silhouette / Hero Image Card */}
        <rect x="62" y="78" width="200" height="105" rx="10" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1.2" />
        
        {/* Abstract Vehicle Silhouette Lines */}
        <motion.path
          d="M 85 155 C 105 155 118 135 138 122 C 160 108 195 108 218 122 C 235 132 245 155 255 155"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="transition-colors duration-300 group-hover:text-slate-700"
        />
        {/* Wheels */}
        <circle cx="112" cy="158" r="8" fill="#ffffff" stroke="currentColor" strokeWidth="2" />
        <circle cx="228" cy="158" r="8" fill="#ffffff" stroke="currentColor" strokeWidth="2" />

        {/* Online Checkout Button Pill */}
        <motion.g
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: '162px 204px' }}
        >
          <rect x="62" y="194" width="200" height="26" rx="13" fill="currentColor" className="transition-colors duration-300 group-hover:text-slate-900" />
          <line x1="115" y1="207" x2="210" y2="207" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </motion.g>

        {/* Right Floating Reservation Panel */}
        <motion.g
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="280" y="78" width="105" height="142" rx="10" fill="#ffffff" stroke="currentColor" strokeWidth="1.4" className="shadow-md" />
          
          {/* Live Pricing Tag */}
          <rect x="294" y="92" width="76" height="16" rx="4" fill="currentColor" fillOpacity="0.1" />
          <line x1="304" y1="100" x2="355" y2="100" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

          {/* Spec lines */}
          <line x1="294" y1="124" x2="370" y2="124" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          <line x1="294" y1="140" x2="355" y2="140" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          <line x1="294" y1="156" x2="365" y2="156" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />

          {/* Instant Deposit Confirmation Pill */}
          <rect x="294" y="182" width="76" height="24" rx="12" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
          <line x1="310" y1="194" x2="355" y2="194" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Section Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            The open operating system built for high-performance automotive enterprise dealerships and fixed operations.
          </p>
        </div>

        {/* Asymmetric Bento Grid with Varied Box Sizing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {solutionsData.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`${item.colSpan} flex`}
              >
                <Link
                  href={`/solutions/${item.slug}`}
                  className="group relative w-full bg-[#f4f5f7] hover:bg-[#eff1f4] rounded-[28px] sm:rounded-[36px] p-8 sm:p-11 border border-slate-200/60 shadow-[0_2px_12px_rgba(15,23,42,0.015)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.06)] hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-end min-h-[280px] sm:min-h-[320px]"
                >
                  {/* Big Animated Graphic in the Background */}
                  <div className="absolute right-0 top-0 bottom-0 w-3/5 sm:w-1/2 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-end pr-2 sm:pr-6">
                    <GraphicElement type={item.graphicType} />
                  </div>

                  {/* Massive Bold Title + Short Punchy Description */}
                  <div className="relative z-10 max-w-sm sm:max-w-md">
                    <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-950 tracking-[-0.03em] leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-snug">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Arrow Indicator in bottom right */}
                  <div className="absolute right-8 bottom-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-md">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
