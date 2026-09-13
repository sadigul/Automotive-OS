'use client';

import React from 'react';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Car, 
  TrendingUp, 
  Truck,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export function MultiRooftopNetworkDiagram() {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#eef9f2] via-[#f4fbf7] to-[#e6f4ea] border border-emerald-100/90 p-3.5 sm:p-5 flex items-center justify-center select-none">
      
      {/* ── Background Soft Grid ── */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.07] pointer-events-none" />

      {/* ── Interactive Layered SaaS Cards Composition ── */}
      <div className="relative w-full h-full max-w-lg mx-auto flex items-center justify-center">
        
        {/* ── 1. MAIN CARD (Left / Back): Multi-Rooftop Allocation List ── */}
        <div className="absolute left-0 top-2 bottom-2 w-[62%] sm:w-[60%] bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 flex flex-col justify-between z-10">
          
          {/* Card Header */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Building2 className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-slate-900 tracking-tight">
                  Multi-Rooftop Stock
                </span>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                558 Total
              </span>
            </div>

            {/* Rooftop 1 Row */}
            <div className="space-y-2 mt-2.5">
              <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-800 mb-1">
                  <span className="truncate">Downtown Luxury</span>
                  <span className="font-bold text-slate-900">246 <span className="text-[9px] font-normal text-slate-500">units</span></span>
                </div>
                <div className="w-full h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '44%' }} />
                </div>
              </div>

              {/* Rooftop 2 Row */}
              <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-800 mb-1">
                  <span className="truncate">North Metro Store</span>
                  <span className="font-bold text-slate-900">184 <span className="text-[9px] font-normal text-slate-500">units</span></span>
                </div>
                <div className="w-full h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: '33%' }} />
                </div>
              </div>

              {/* Rooftop 3 Row */}
              <div className="p-2 rounded-lg bg-slate-50/80 border border-slate-100">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-800 mb-1">
                  <span className="truncate">Westside Auto Mall</span>
                  <span className="font-bold text-slate-900">128 <span className="text-[9px] font-normal text-slate-500">units</span></span>
                </div>
                <div className="w-full h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-600 rounded-full" style={{ width: '23%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Footer Live Badge */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Synced across 3 rooftops
            </span>
            <span className="text-slate-400 font-semibold">0.1s latency</span>
          </div>

        </div>


        {/* ── 2. TOP RIGHT FLOATING CARD: Stock Breakdown Donut ── */}
        <div className="absolute right-0 top-2 w-[42%] sm:w-[44%] bg-white rounded-2xl border border-slate-200/80 p-3 sm:p-3.5 z-20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-900">
              Lot Allocation
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          <div className="flex items-center gap-3">
            {/* Donut Chart SVG */}
            <div className="relative w-14 h-14 shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                {/* Background Ring */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="3.5"
                />
                {/* Segment 1: Downtown (44%) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeDasharray="44, 100"
                />
                {/* Segment 2: North (33%) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="3.5"
                  strokeDasharray="33, 100"
                  strokeDashoffset="-44"
                />
                {/* Segment 3: Westside (23%) */}
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#0891b2"
                  strokeWidth="3.5"
                  strokeDasharray="23, 100"
                  strokeDashoffset="-77"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[11px] font-black text-slate-900 leading-none">558</span>
                <span className="text-[7.5px] font-semibold text-slate-400">VINs</span>
              </div>
            </div>

            {/* Donut Legend */}
            <div className="space-y-1 text-[9.5px] font-semibold text-slate-600">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Downtown: 44%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span>North: 33%</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                <span>Westside: 23%</span>
              </div>
            </div>
          </div>
        </div>


        {/* ── 3. BOTTOM RIGHT OVERLAPPING CARD: Instant Rooftop Transfer ── */}
        <div className="absolute right-0 bottom-2 w-[52%] sm:w-[50%] bg-white rounded-2xl border border-slate-200/80 p-3.5 z-30">
          
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-4.5 h-4.5 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center">
                <Truck className="w-2.5 h-2.5" />
              </div>
              <span className="text-[11px] font-bold text-slate-900">
                Rooftop Transfer
              </span>
            </div>
            <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded-full border border-amber-200">
              In Transit
            </span>
          </div>

          {/* Vehicle Info */}
          <div className="bg-slate-50 rounded-lg p-2 border border-slate-100 mb-2">
            <div className="text-[11px] font-bold text-slate-900 leading-tight">
              2025 Porsche 911 GT3
            </div>
            <div className="text-[9px] text-slate-500 font-mono">
              VIN: WP0AB2A93SS...
            </div>
            
            {/* Transfer Route */}
            <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-slate-200/60 text-[9.5px] font-semibold">
              <span className="text-slate-600">North Metro</span>
              <ArrowRight className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Downtown</span>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full flex items-center justify-center gap-1 py-1 rounded-lg bg-emerald-600 text-white text-[10px] font-bold hover:bg-emerald-700 transition-colors">
            <CheckCircle2 className="w-3 h-3" />
            <span>Approve Lot Transfer</span>
          </button>

        </div>

      </div>

    </div>
  );
}
