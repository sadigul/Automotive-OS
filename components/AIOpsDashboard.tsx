'use client';

import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Wrench, 
  DollarSign, 
  Cpu, 
  Boxes, 
  Clock, 
  User, 
  Shield, 
  ChevronRight,
  Send
} from 'lucide-react';

export function AIOpsDashboard() {
  const [approvedERP, setApprovedERP] = useState(false);
  const [closedDeal, setClosedDeal] = useState(false);
  const [dispatchedTech, setDispatchedTech] = useState(false);

  return (
    <div className="w-[1240px] h-[800px] bg-slate-50 text-slate-900 flex flex-col font-sans select-none overflow-hidden relative border border-slate-200">
      
      {/* ── CLEAN ENTERPRISE WORKSPACE (NO GLOW BLOBS, NO HEAVY SHADOWS) ── */}
      <div className="w-full h-full p-8 flex flex-col justify-between">

        {/* ── TOP ROW: CARDS 1 & 2 ── */}
        <div className="flex items-start justify-between gap-6">

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* ── CARD 1: ERP & GENERAL LEDGER AUTOMATION ── */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <div className="w-[450px] bg-white rounded-xl border border-slate-200 shadow-xs p-5">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  ERP AUTOMATION
                </span>
                <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                  General Ledger Reconciliation
                </h3>
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Auto-Matched
              </span>
            </div>

            {/* Structured Key-Value Data */}
            <div className="space-y-2 mb-3.5">
              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-500 font-medium">Bank Feed Draft</span>
                <span className="font-mono font-bold text-slate-900">CHASE-FL-8921</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-500 font-medium">Reconciled Total</span>
                <span className="font-mono font-bold text-slate-900">$184,250.00</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-500 font-medium">Locations Audited</span>
                <span className="font-medium text-slate-800">3 Dealership Rooftops</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <span className="text-slate-500 font-medium">Discrepancy Count</span>
                <span className="font-mono font-bold text-emerald-700">0 Items (100% Match)</span>
              </div>
            </div>

            {/* Inventory PO Notice */}
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 mb-4 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Automated PO #7712</span>
                <span className="text-[10px] font-bold text-slate-700 bg-slate-200/70 px-1.5 py-0.2 rounded">18% Rebate</span>
              </div>
              <p className="text-[11.5px] text-slate-600 leading-snug">
                16x OEM Brake Rotors auto-ordered based on 7-day velocity forecast.
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-500 font-medium">
                Status: Ready to Post
              </span>
              <button
                type="button"
                onClick={() => setApprovedERP(true)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  approvedERP 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {approvedERP ? 'Posted to Ledger' : 'Post to General Ledger'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* ── CARD 2: SALES DESKING & DEAL STRUCTURING ── */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <div className="w-[470px] bg-white rounded-xl border border-slate-200 shadow-xs p-5">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  DEAL DESKING
                </span>
                <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                  Deal Structuring &amp; Terms
                </h3>
              </div>
              <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                96% Close Probability
              </span>
            </div>

            {/* Deal Subject */}
            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-100 mb-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 block leading-tight">Marcus Vance</span>
                <span className="text-[11px] text-slate-500">2024 BMW X5 xDrive40i (Stock #B4920)</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2 py-1 rounded border border-slate-200">
                +$6,700 Trade Equity
              </span>
            </div>

            {/* Financial Terms Breakdown */}
            <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-500 block mb-0.5 font-medium">Monthly Payment</span>
                <span className="font-mono font-bold text-slate-900 text-sm">$549 / mo</span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-500 block mb-0.5 font-medium">Term Structure</span>
                <span className="font-medium text-slate-800 text-xs">42 Mos / 10k Mi</span>
              </div>

              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <span className="text-[10px] text-slate-500 block mb-0.5 font-medium">Dealer Gross</span>
                <span className="font-mono font-bold text-emerald-700 text-sm">+$4,820.00</span>
              </div>
            </div>

            {/* Bundled Package Note */}
            <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 mb-4 text-xs">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Protection Bundle</span>
                <span className="text-[10px] font-semibold text-slate-600">$0 Out of Pocket</span>
              </div>
              <p className="text-[11.5px] text-slate-600 leading-snug">
                Wheel &amp; Tire Protection included within target monthly payment threshold.
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-500 font-medium">
                Customer Pre-Approved
              </span>
              <button
                type="button"
                onClick={() => setClosedDeal(true)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  closedDeal 
                    ? 'bg-emerald-700 text-white' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {closedDeal ? 'Contract Generated' : 'Generate eSign Contract'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

        {/* ── BOTTOM ROW: CARD 3 (SERVICE DISPATCH) ── */}
        <div className="flex justify-center pb-2">

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* ── CARD 3: SERVICE BAY TECHNICIAN & JOB DISPATCH ── */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <div className="w-[580px] bg-white rounded-xl border border-slate-200 shadow-xs p-5">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  SERVICE DISPATCH
                </span>
                <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                  Autonomous Technician &amp; Stall Routing
                </h3>
              </div>
              <span className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 flex items-center gap-1">
                Stall #4 Assigned
              </span>
            </div>

            {/* Dual Column: Job vs. Assigned Mechanic */}
            <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
              
              {/* Left Column: Job Details */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">REPAIR ORDER #4892</span>
                <span className="font-bold text-slate-900 text-xs block">2022 Audi Q7 Quattro 3.0T</span>
                <span className="text-[11px] text-slate-600 block">Dual-Clutch Transmission Service</span>
              </div>

              {/* Right Column: Assigned Mechanic */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">ASSIGNED TECHNICIAN</span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                    99.8% Skill Match
                  </span>
                </div>
                <span className="font-bold text-slate-900 text-xs block">Tyler Davis (Tech #104)</span>
                <span className="text-[11px] text-slate-600 block">Audi Master Certified • Stall #4</span>
              </div>

            </div>

            {/* Flat Rate & Parts Staging */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 mb-4 text-xs">
              <span className="text-slate-600 text-[11.5px]">
                OEM DCT Filter &amp; Fluid Kit verified in stock and pre-staged at Stall #4.
              </span>
              <span className="font-mono font-bold text-slate-900 text-xs shrink-0 ml-2">
                3.2 Flat Rate Hrs
              </span>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-slate-500 font-medium">
                Stall Status: Ready for Vehicle Intake
              </span>
              <button
                type="button"
                onClick={() => setDispatchedTech(true)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  dispatchedTech 
                    ? 'bg-slate-800 text-white' 
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {dispatchedTech ? 'Dispatched to Tech Tablet' : 'Dispatch Job to Technician'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
