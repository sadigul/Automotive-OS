'use client';

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function Migration() {
  return (
    <section id="migration" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Seamless 2-Column Grid (No outer box / No outer border) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Narrative & Direct Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-[1.15] mb-5">
              Migrate 100% of your history. <br className="hidden sm:inline" />
              <span className="text-slate-400">Without missing a single deal.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
              Never let legacy software hold your enterprise back. Our migration pipeline safely extracts, validates, and synchronizes your entire historical record directly into DMSPilot cloud servers.
            </p>

            {/* Clean CTA Action Area */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/contact-us?module=migration" className="w-full sm:w-auto">
                <button className="relative group overflow-hidden w-full sm:w-auto h-12 px-7 rounded-full bg-slate-950 text-white text-sm font-bold border-2 border-slate-950 flex items-center justify-center gap-2 transition-all duration-300">
                  {/* Smooth White Fill Sweep on Hover */}
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                  <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-950">
                    Plan Your Migration
                  </span>
                  <ArrowRight className="relative z-10 w-4 h-4 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-950" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Cloud-to-Cloud Animation */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <MigrationGraphic />
          </div>

        </div>

      </div>
    </section>
  );
}

export function MigrationGraphic() {
  return (
    <div className="relative w-full max-w-[440px] h-[320px] sm:h-[360px] flex items-center justify-center overflow-hidden">
      
      {/* Top-Left Cloud: Legacy Softwares */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 left-2 sm:left-6 z-20 flex flex-col items-center"
      >
        {/* Decorative rays */}
        <div className="absolute -top-2 left-3 flex gap-0.5">
          <div className="w-0.5 h-2 bg-slate-400 rounded-full rotate-[-25deg]" />
          <div className="w-0.5 h-2.5 bg-slate-400 rounded-full" />
        </div>

        {/* Cloud & Server SVG */}
        <div className="relative w-36 sm:w-44 h-24 sm:h-28">
          <svg viewBox="0 0 220 160" className="w-full h-full">
            {/* Cloud Body */}
            <path
              d="M50 130 H170 C192 130 205 112 200 95 C196 78 180 70 165 72 C158 50 135 35 110 38 C90 40 75 52 70 68 C55 68 40 80 40 98 C40 115 50 130 65 130 Z"
              fill="#ffffff"
              stroke="#1e293b"
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Server Rack Background */}
            <rect x="55" y="75" width="110" height="60" rx="12" fill="#e2e8f0" stroke="#1e293b" strokeWidth="5" />

            {/* Server Blade 1 */}
            <rect x="62" y="82" width="62" height="20" rx="4" fill="#f8fafc" />
            <rect x="128" y="82" width="30" height="20" rx="4" fill="#f97316" />
            <circle cx="143" cy="92" r="3.5" fill="#ffffff" />
            <line x1="72" y1="92" x2="76" y2="92" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="84" y1="92" x2="88" y2="92" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="96" y1="92" x2="100" y2="92" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />

            {/* Divider */}
            <line x1="58" y1="105" x2="162" y2="105" stroke="#1e293b" strokeWidth="3" />

            {/* Server Blade 2 */}
            <rect x="62" y="109" width="62" height="20" rx="4" fill="#f8fafc" />
            <rect x="128" y="109" width="30" height="20" rx="4" fill="#f97316" />
            <circle cx="143" cy="119" r="3.5" fill="#ffffff" />
            <line x1="72" y1="119" x2="76" y2="119" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="84" y1="119" x2="88" y2="119" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="96" y1="119" x2="100" y2="119" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />

            {/* Server Feet */}
            <rect x="70" y="138" width="8" height="6" rx="2" fill="#1e293b" />
            <rect x="142" y="138" width="8" height="6" rx="2" fill="#1e293b" />
          </svg>
        </div>

        <div className="mt-1 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-800">
          Legacy Softwares
        </div>
      </motion.div>

      {/* Top Curved Directional Arrow */}
      <div className="absolute top-8 right-8 sm:right-14 w-32 sm:w-40 h-24 pointer-events-none z-10">
        <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
          <path
            d="M 10 20 H 130 Q 170 20 170 60 V 95"
            fill="none"
            stroke="#f97316"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="158,90 170,108 182,90" fill="#f97316" />

          {/* Animated Data Pulse */}
          <motion.circle
            r="6"
            fill="#ffffff"
            stroke="#f97316"
            strokeWidth="2.5"
            animate={{
              offsetDistance: ['0%', '100%'],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              offsetPath: "path('M 10 20 H 130 Q 170 20 170 60 V 95')",
            }}
          />
        </svg>
        {/* Decorative circles */}
        <div className="absolute -top-2 right-6 w-3 h-3 rounded-full border-2 border-slate-400" />
        <div className="absolute top-3 right-1 w-2 h-2 rounded-full border-2 border-slate-400" />
      </div>

      {/* Bottom Curved Directional Arrow */}
      <div className="absolute bottom-6 left-6 sm:left-12 w-32 sm:w-40 h-24 pointer-events-none z-10">
        <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
          <path
            d="M 20 20 V 60 Q 20 100 60 100 H 175"
            fill="none"
            stroke="#f97316"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="170,88 188,100 170,112" fill="#f97316" />

          {/* Animated Data Pulse */}
          <motion.circle
            r="6"
            fill="#ffffff"
            stroke="#f97316"
            strokeWidth="2.5"
            animate={{
              offsetDistance: ['0%', '100%'],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: 1.1,
              ease: 'easeInOut',
            }}
            style={{
              offsetPath: "path('M 20 20 V 60 Q 20 100 60 100 H 175')",
            }}
          />
        </svg>
      </div>

      {/* Bottom-Right Cloud: DMSPilot Cloud Server */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 right-2 sm:right-6 z-20 flex flex-col items-center"
      >
        {/* Accent dots */}
        <div className="absolute -top-1 -right-2 flex flex-col gap-0.5 items-center rotate-45">
          <div className="w-1 h-1 bg-slate-400 rounded-full" />
          <div className="w-1 h-1 bg-slate-400 rounded-full" />
        </div>

        {/* Cloud & Server SVG */}
        <div className="relative w-36 sm:w-44 h-24 sm:h-28">
          <svg viewBox="0 0 220 160" className="w-full h-full">
            {/* Cloud Body */}
            <path
              d="M50 130 H170 C192 130 205 112 200 95 C196 78 180 70 165 72 C158 50 135 35 110 38 C90 40 75 52 70 68 C55 68 40 80 40 98 C40 115 50 130 65 130 Z"
              fill="#ffffff"
              stroke="#1e293b"
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Server Rack Background */}
            <rect x="55" y="75" width="110" height="60" rx="12" fill="#e2e8f0" stroke="#1e293b" strokeWidth="5" />

            {/* Server Blade 1 */}
            <rect x="62" y="82" width="62" height="20" rx="4" fill="#f8fafc" />
            <rect x="128" y="82" width="30" height="20" rx="4" fill="#f97316" />
            <circle cx="143" cy="92" r="3.5" fill="#ffffff" />
            <line x1="72" y1="92" x2="76" y2="92" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="84" y1="92" x2="88" y2="92" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="96" y1="92" x2="100" y2="92" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />

            {/* Divider */}
            <line x1="58" y1="105" x2="162" y2="105" stroke="#1e293b" strokeWidth="3" />

            {/* Server Blade 2 */}
            <rect x="62" y="109" width="62" height="20" rx="4" fill="#f8fafc" />
            <rect x="128" y="109" width="30" height="20" rx="4" fill="#f97316" />
            <circle cx="143" cy="119" r="3.5" fill="#ffffff" />
            <line x1="72" y1="119" x2="76" y2="119" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="84" y1="119" x2="88" y2="119" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="96" y1="119" x2="100" y2="119" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />

            {/* Server Feet */}
            <rect x="70" y="138" width="8" height="6" rx="2" fill="#1e293b" />
            <rect x="142" y="138" width="8" height="6" rx="2" fill="#1e293b" />
          </svg>
        </div>

        <div className="mt-1 px-3 py-0.5 rounded-full bg-slate-950 text-white text-[10px] font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>DMSPilot Cloud</span>
        </div>
      </motion.div>
    </div>
  );
}
