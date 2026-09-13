'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MigrationGraphic } from '@/components/Migration';

// 4-Phase Circular Migration Process Data
const transitionPhases = [
  {
    phase: '01',
    days: 'Days 1–5',
    title: 'Automated Extraction',
    subtitle: 'Discovery & Schema Capture',
    desc: 'Non-invasive extraction agents securely connect to legacy databases, retrieving 10+ years of General Ledger, live vehicle inventory, floor plan balances, parts catalogs, and customer histories.'
  },
  {
    phase: '02',
    days: 'Days 6–12',
    title: 'Schema Normalization',
    subtitle: 'Double-Entry Balancing',
    desc: 'Automated financial reconciliation engine normalizes legacy schema structures and verifies historical General Ledger balances penny-perfect against CPA trial balance statements.'
  },
  {
    phase: '03',
    days: 'Days 13–18',
    title: 'Delta Sync Rehearsal',
    subtitle: 'Real-Time Parallel Stream',
    desc: 'Real-time delta pipeline streams live deals, repair orders, and parts tickets in the background while your team runs rehearsal cutovers without interrupting sales desk throughput.'
  },
  {
    phase: '04',
    days: 'Days 19–21',
    title: 'Weekend Cutover',
    subtitle: 'Onsite Go-Live Crew',
    desc: 'Cutover executes over a single weekend with senior systems engineers stationed onsite across your rooftops. Doors open Monday morning live on DMSPilot with zero deal pauses.'
  }
];

export default function MigrationClientPage() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      <Header />

      <main className="flex-1">

        {/* ══════════════════════════════════════════════════════════════════
            1. HERO SECTION: MATCHING LANDING PAGE SIZE, HEIGHT & ANIMATION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Seamless 2-Column Grid (No outer box / No outer border) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Headline, Narrative & Direct Action */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-[1.15] mb-5">
                  Migrate 100% of your history. <br className="hidden sm:inline" />
                  <span className="text-slate-400">Without missing a single deal.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Never let legacy software hold your enterprise back. Our migration pipeline safely extracts, validates, and synchronizes your entire historical record directly into DMSPilot cloud servers.
                </p>

                {/* Clean CTA Action Area */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <Link href="/contact-us?module=migration" className="w-full sm:w-auto">
                    <button 
                      type="button"
                      className="relative group overflow-hidden w-full sm:w-auto h-12 px-7 rounded-full bg-slate-950 text-white text-sm font-bold border-2 border-slate-950 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                    >
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

        {/* ══════════════════════════════════════════════════════════════════
            2. THE PROCESS IN A CIRCLE (2-COLUMN: LEFT TEXT, RIGHT DIAGRAM)
        ══════════════════════════════════════════════════════════════════ */}
        <section id="process" className="py-24 sm:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-blue-100/30 via-slate-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* ── LEFT COLUMN: Text Header & Interactive Phase Flow ── */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
                    The 4-Phase Circular Transition Process
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                    A battle-tested circular migration cycle that continuously extracts, reconciles, and synchronizes live dealership data without stopping vehicle sales or service bay work.
                  </p>
                </div>

                {/* Interactive 4-Phase Step List */}
                <div className="space-y-3 pt-2">
                  {transitionPhases.map((phaseItem, idx) => {
                    const isActive = activePhase === idx;
                    return (
                      <div
                        key={phaseItem.phase}
                        onClick={() => setActivePhase(idx)}
                        onMouseEnter={() => setActivePhase(idx)}
                        className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left select-none ${
                          isActive 
                            ? 'bg-white border-[#FF6B00]  ring-2 ring-[#FF6B00]/15' 
                            : 'bg-white/70 hover:bg-white border-slate-200/90 hover:border-slate-300 '
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center transition-colors ${
                              isActive ? 'bg-[#FF6B00] text-white ' : 'bg-[#0B0F19] text-white'
                            }`}>
                              {phaseItem.phase}
                            </span>
                            <span className="text-sm sm:text-base font-bold text-slate-950">
                              {phaseItem.title}
                            </span>
                          </div>
                          <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-colors ${
                            isActive ? 'bg-[#FF6B00]/10 text-[#FF6B00] font-black' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {phaseItem.days}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 pl-10 leading-relaxed font-normal">
                          {phaseItem.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ── RIGHT COLUMN: Authentic Circular Diagram ── */}
              <div className="lg:col-span-7 flex items-center justify-center">
                <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[490px] md:h-[490px] flex items-center justify-center">
                  
                  {/* Subtle Radiant Ambient Halo behind Center Hub */}
                  <div className="absolute w-52 h-52 sm:w-68 sm:h-68 rounded-full bg-slate-200/50 blur-2xl pointer-events-none" />

                  {/* High-Precision Continuous Circular Flow SVG */}
                  <svg 
                    viewBox="0 0 520 520" 
                    className="absolute inset-0 w-full h-full pointer-events-none select-none"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Subtle Dashed Orbital Track */}
                    <circle 
                      cx="260" 
                      cy="260" 
                      r="168" 
                      stroke="#E2E8F0" 
                      strokeWidth="2" 
                      strokeDasharray="6 8" 
                    />

                    {/* ── QUADRANT 1: Phase 01 (Top) to Phase 02 (Right) ── */}
                    <g opacity={activePhase === 0 ? 1 : 0.45} className="transition-opacity duration-300">
                      {/* Start Terminal Dot */}
                      <circle cx="295" cy="95" r="3.5" fill={activePhase === 0 ? '#FF6B00' : '#94A3B8'} />
                      {/* Flow Arc */}
                      <path 
                        d="M 295 95 A 168 168 0 0 1 425 225" 
                        stroke={activePhase === 0 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 0 ? 3.5 : 2} 
                        strokeLinecap="round" 
                      />
                      {/* Arrowhead */}
                      <path 
                        d="M 417 217 L 425 227 L 433 217" 
                        stroke={activePhase === 0 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 0 ? 3.5 : 2} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </g>

                    {/* ── QUADRANT 2: Phase 02 (Right) to Phase 03 (Bottom) ── */}
                    <g opacity={activePhase === 1 ? 1 : 0.45} className="transition-opacity duration-300">
                      {/* Start Terminal Dot */}
                      <circle cx="425" cy="295" r="3.5" fill={activePhase === 1 ? '#FF6B00' : '#94A3B8'} />
                      {/* Flow Arc */}
                      <path 
                        d="M 425 295 A 168 168 0 0 1 295 425" 
                        stroke={activePhase === 1 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 1 ? 3.5 : 2} 
                        strokeLinecap="round" 
                      />
                      {/* Arrowhead */}
                      <path 
                        d="M 303 417 L 293 425 L 303 433" 
                        stroke={activePhase === 1 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 1 ? 3.5 : 2} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </g>

                    {/* ── QUADRANT 3: Phase 03 (Bottom) to Phase 04 (Left) ── */}
                    <g opacity={activePhase === 2 ? 1 : 0.45} className="transition-opacity duration-300">
                      {/* Start Terminal Dot */}
                      <circle cx="225" cy="425" r="3.5" fill={activePhase === 2 ? '#FF6B00' : '#94A3B8'} />
                      {/* Flow Arc */}
                      <path 
                        d="M 225 425 A 168 168 0 0 1 95 295" 
                        stroke={activePhase === 2 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 2 ? 3.5 : 2} 
                        strokeLinecap="round" 
                      />
                      {/* Arrowhead */}
                      <path 
                        d="M 87 303 L 95 293 L 103 303" 
                        stroke={activePhase === 2 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 2 ? 3.5 : 2} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </g>

                    {/* ── QUADRANT 4: Phase 04 (Left) to Phase 01 (Top) ── */}
                    <g opacity={activePhase === 3 ? 1 : 0.45} className="transition-opacity duration-300">
                      {/* Start Terminal Dot */}
                      <circle cx="95" cy="225" r="3.5" fill={activePhase === 3 ? '#FF6B00' : '#94A3B8'} />
                      {/* Flow Arc */}
                      <path 
                        d="M 95 225 A 168 168 0 0 1 225 95" 
                        stroke={activePhase === 3 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 3 ? 3.5 : 2} 
                        strokeLinecap="round" 
                      />
                      {/* Arrowhead */}
                      <path 
                        d="M 217 87 L 227 95 L 217 103" 
                        stroke={activePhase === 3 ? '#FF6B00' : '#CBD5E1'} 
                        strokeWidth={activePhase === 3 ? 3.5 : 2} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </g>

                    {/* Radial Connector Conduits from Hub to Nodes */}
                    <line x1="260" y1="172" x2="260" y2="128" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="348" y1="260" x2="392" y2="260" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="260" y1="348" x2="260" y2="392" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="172" y1="260" x2="128" y2="260" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>

                  {/* ── CENTER HUB ── */}
                  {/* ── CENTER HUB ── */}
                  <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full bg-[#0B0F19] text-white flex flex-col items-center justify-center p-5 text-center border-4 border-white relative z-20 cursor-default select-none">
                    {/* Live Status indicator */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 border border-white/10 backdrop-blur-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>Zero Downtime</span>
                    </div>

                    {/* Primary Metric */}
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                      21 Days
                    </div>

                    {/* Cutover Milestone */}
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                      Live Monday Cutover
                    </div>

                    {/* Subtitle Guarantee */}
                    <div className="text-[10px] sm:text-[11px] text-slate-400 mt-2 max-w-[155px] leading-tight hidden sm:block">
                      100% General Ledger &amp; Inventory Balanced
                    </div>
                  </div>

                  {/* ── 4 PHASE STATION NODES IN ORBIT ── */}

                  {/* Phase 01: Top (12 o'clock) */}
                  <div 
                    onClick={() => setActivePhase(0)}
                    onMouseEnter={() => setActivePhase(0)}
                    className={`absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 p-2.5 sm:p-3.5 rounded-2xl border transition-all duration-200 z-30 flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none ${
                      activePhase === 0 
                        ? 'bg-white border-[#FF6B00]  ring-2 ring-[#FF6B00]/25' 
                        : 'bg-white/95 hover:bg-white border-slate-200/90  hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm transition-colors ${
                      activePhase === 0 ? 'bg-[#FF6B00] text-white ' : 'bg-[#0B0F19] text-white'
                    }`}>
                      01
                    </div>
                    <div className="text-left pr-1 sm:pr-2">
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">Phase 01 · Days 1–5</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">Automated Extraction</div>
                    </div>
                  </div>

                  {/* Phase 02: Right (3 o'clock) */}
                  <div 
                    onClick={() => setActivePhase(1)}
                    onMouseEnter={() => setActivePhase(1)}
                    className={`absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-2xl border transition-all duration-200 z-30 flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none ${
                      activePhase === 1 
                        ? 'bg-white border-[#FF6B00]  ring-2 ring-[#FF6B00]/25' 
                        : 'bg-white/95 hover:bg-white border-slate-200/90  hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm transition-colors ${
                      activePhase === 1 ? 'bg-[#FF6B00] text-white ' : 'bg-[#0B0F19] text-white'
                    }`}>
                      02
                    </div>
                    <div className="text-left pr-1 sm:pr-2">
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">Phase 02 · Days 6–12</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">Schema Normalization</div>
                    </div>
                  </div>

                  {/* Phase 03: Bottom (6 o'clock) */}
                  <div 
                    onClick={() => setActivePhase(2)}
                    onMouseEnter={() => setActivePhase(2)}
                    className={`absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 p-2.5 sm:p-3.5 rounded-2xl border transition-all duration-200 z-30 flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none ${
                      activePhase === 2 
                        ? 'bg-white border-[#FF6B00]  ring-2 ring-[#FF6B00]/25' 
                        : 'bg-white/95 hover:bg-white border-slate-200/90  hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm transition-colors ${
                      activePhase === 2 ? 'bg-[#FF6B00] text-white ' : 'bg-[#0B0F19] text-white'
                    }`}>
                      03
                    </div>
                    <div className="text-left pr-1 sm:pr-2">
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">Phase 03 · Days 13–18</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">Delta Sync Rehearsal</div>
                    </div>
                  </div>

                  {/* Phase 04: Left (9 o'clock) */}
                  <div 
                    onClick={() => setActivePhase(3)}
                    onMouseEnter={() => setActivePhase(3)}
                    className={`absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-2xl border transition-all duration-200 z-30 flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none ${
                      activePhase === 3 
                        ? 'bg-white border-[#FF6B00]  ring-2 ring-[#FF6B00]/25' 
                        : 'bg-white/95 hover:bg-white border-slate-200/90  hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm transition-colors ${
                      activePhase === 3 ? 'bg-[#FF6B00] text-white ' : 'bg-[#0B0F19] text-white'
                    }`}>
                      04
                    </div>
                    <div className="text-left pr-1 sm:pr-2">
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">Phase 04 · Days 19–21</div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">Weekend Cutover</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            3. CALL TO ACTION CARD (ENTERPRISE HIGH-CONTRAST BLACK CARD)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl bg-slate-950 border border-slate-900 p-8 sm:p-14 lg:p-16 overflow-hidden text-center">
              
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute inset-0 bg-radial-[circle_at_top] from-slate-900/60 via-slate-950 to-slate-950 pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-[-0.03em] leading-tight">
                  Ready to Break Free from Legacy DMS Monopolies?
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
                  Book a confidential migration audit. Our senior systems architects will review your current database structure, verify historical data scope, and deliver a guaranteed cutover plan within 48 hours.
                </p>

                <div className="pt-4 flex items-center justify-center">
                  <Link href="/contact-us?module=migration" className="w-full sm:w-auto">
                    <button 
                      type="button"
                      className="w-full sm:w-auto h-12 sm:h-13 px-9 rounded-full bg-white hover:bg-slate-100 text-slate-950 text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
                    >
                      <span>Plan Your Migration Audit</span>
                      <ArrowRight className="w-4 h-4 text-slate-950" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
