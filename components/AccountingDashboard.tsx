'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  ChevronDown, 
  ChevronRight, 
  SlidersHorizontal, 
  Download, 
  Search, 
  Bell, 
  MessageSquare, 
  MoreVertical, 
  LayoutDashboard, 
  FileText, 
  Users, 
  Landmark, 
  Settings, 
  Moon, 
  Sun, 
  Info, 
  ChevronLeft, 
  ArrowUpDown, 
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Building2,
  CreditCard,
  Scale
} from 'lucide-react';

export function AccountingDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Live Financial Pulse');

  // Sidebar navigation sections tailored for Dealership Accounting
  const navItemsLedger = [
    { name: 'Live Financial Pulse', icon: LayoutDashboard },
    { name: 'Bank & Cash Flow Sync', icon: Landmark },
    { name: 'Daily Operating Control (DOC)', icon: FileText },
    { name: 'Accounts Payable & POs', icon: DollarSign },
    { name: 'CIT & Receivable Contracts', icon: CreditCard },
  ];

  const navItemsCapital = [
    { name: 'Floorplan Audits & Drafts', icon: Building2 },
    { name: 'Curtailments & Interest', icon: TrendingUp },
    { name: 'Lender Reserves', icon: Scale },
  ];

  const navItemsCompliance = [
    { name: 'Sales Tax Filings', icon: ShieldCheck },
    { name: 'Month-End Close Checklist', icon: CheckCircle2 },
    { name: 'Automated GL Reconciler', icon: Settings },
  ];

  // Live General Ledger & CIT Reconciliations table data
  const tableData = [
    {
      batchId: 'BATCH #8821',
      department: 'Vehicle Sales Desk',
      descriptionTitle: 'Chase Auto Dealer Wire',
      descriptionSub: '5 New Units Funded • CIT Cleared',
      status: 'Bank Reconciled',
      statusType: 'emerald',
      glCode: 'GL #1010-01',
      glLabel: 'Operating Cash',
      clearingStream: 'Contracts in Transit (CIT)',
      clearingSub: 'Direct Wire • Chase',
      postingDate: 'Today, 11:20 AM',
      seqNumber: 'SEQ #00918',
      amount: '+$218,450.00',
      isCredit: true,
    },
    {
      batchId: 'BATCH #8822',
      department: 'Floorplan Financing',
      descriptionTitle: 'Ally Floorplan Financing',
      descriptionSub: 'Monthly Curtailment Auto-Draft',
      status: 'Settled & Cleared',
      statusType: 'blue',
      glCode: 'GL #2030-04',
      glLabel: 'Floorplan Liability',
      clearingStream: 'Ally Capital Clearing',
      clearingSub: 'Automated ACH Draft',
      postingDate: 'Today, 09:15 AM',
      seqNumber: 'SEQ #00919',
      amount: '-$42,800.00',
      isCredit: false,
    },
    {
      batchId: 'BATCH #8823',
      department: 'Service & Warranty',
      descriptionTitle: 'Porsche OEM Warranty Credit',
      descriptionSub: 'Factory Reimbursement • 14 Claims',
      status: 'Audited & Posted',
      statusType: 'purple',
      glCode: 'GL #4100-02',
      glLabel: 'Warranty Receivables',
      clearingStream: 'OEM Direct ACH',
      clearingSub: 'Porsche Treasury Wire',
      postingDate: 'Yesterday, 4:30 PM',
      seqNumber: 'SEQ #00920',
      amount: '+$34,920.00',
      isCredit: true,
    },
    {
      batchId: 'BATCH #8824',
      department: 'Parts Wholesale',
      descriptionTitle: 'EuroLogistics Consignment AP',
      descriptionSub: 'Wholesale Invoice #EL-49021',
      status: 'Pending AP Check',
      statusType: 'amber',
      glCode: 'GL #5020-08',
      glLabel: 'Parts Inventory AP',
      clearingStream: 'Accounts Payable Net-30',
      clearingSub: 'Check Run Batch #32',
      postingDate: '18 Nov 2025',
      seqNumber: 'SEQ #00921',
      amount: '-$16,450.00',
      isCredit: false,
    },
  ];

  return (
    <div className={`w-full h-full flex flex-row transition-colors duration-300 overflow-hidden font-sans select-none ${
      darkMode 
        ? 'bg-[#0b0f19] text-slate-100' 
        : 'bg-[#fafbfd] text-slate-800'
    }`}>
      
      {/* ── LEFT SIDEBAR (Full Height) ── */}
      <aside className={`w-[220px] p-3 flex flex-col justify-between shrink-0 transition-colors duration-300 border-r ${
        darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
      }`}>
        
        <div className="space-y-3.5">
          {/* Brand Logo */}
          <div className="flex items-center justify-between px-1 pt-0.5">
            <div className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={26} 
                height={26} 
                className="h-6.5 w-6.5" 
              />
            </div>
            <button className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
              darkMode 
                ? 'border-slate-700 text-slate-400 hover:text-slate-200 hover:bg-slate-800' 
                : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
            }`}>
              <ChevronLeft className="w-3 h-3" />
            </button>
          </div>

          {/* GENERAL LEDGER Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              GENERAL LEDGER
            </div>
            <nav className="space-y-0.5">
              {navItemsLedger.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveNav(item.name)}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all text-left ${
                      isActive 
                        ? darkMode 
                          ? 'bg-slate-800 text-white font-bold border border-slate-700' 
                          : 'bg-emerald-50/70 text-emerald-950 font-bold border border-emerald-200' 
                        : darkMode 
                          ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60' 
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${
                      isActive 
                        ? darkMode ? 'text-emerald-400' : 'text-emerald-600' 
                        : darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* CAPITAL & FLOORPLAN Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              CAPITAL &amp; FLOORPLAN
            </div>
            <nav className="space-y-0.5">
              {navItemsCapital.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => setActiveNav(item.name)}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all text-left ${
                      isActive 
                        ? darkMode 
                          ? 'bg-slate-800 text-white font-bold border border-slate-700' 
                          : 'bg-slate-100 text-slate-950 font-bold border border-slate-200' 
                        : darkMode 
                          ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60' 
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${
                      isActive 
                        ? darkMode ? 'text-teal-400' : 'text-slate-950' 
                        : darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* COMPLIANCE & CLOSING Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              AUDIT &amp; TAX
            </div>
            <nav className="space-y-0.5">
              {navItemsCompliance.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeNav === item.name;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveNav(item.name)}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all text-left ${
                      isActive 
                        ? darkMode 
                          ? 'bg-slate-800 text-white font-bold border border-slate-700' 
                          : 'bg-slate-100 text-slate-950 font-bold border border-slate-200' 
                        : darkMode 
                          ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60' 
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${
                      isActive 
                        ? darkMode ? 'text-teal-400' : 'text-slate-950' 
                        : darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* SIDEBAR FOOTER (Settings, Dark Mode, User Profile) */}
        <div className={`pt-2 space-y-1.5 border-t ${
          darkMode ? 'border-slate-800' : 'border-slate-100'
        }`}>
          <button className={`w-full flex items-center gap-2.5 px-2 py-1 rounded-lg text-xs font-medium transition-colors ${
            darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-950'
          }`}>
            <Settings className="w-3.5 h-3.5" />
            <span>Settings</span>
          </button>

          {/* Dark Mode Toggle */}
          <div className={`flex items-center justify-between px-2 py-1 text-xs font-medium ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <div className="flex items-center gap-2">
              {darkMode ? <Moon className="w-3.5 h-3.5 text-emerald-400" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
              <span>{darkMode ? 'Dark Mode: ON' : 'Dark Mode'}</span>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
              className={`w-8 h-4.5 rounded-full p-0.5 transition-colors cursor-pointer ${
                darkMode ? 'bg-emerald-600' : 'bg-slate-300'
              }`}
            >
              <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform duration-200 ${
                darkMode ? 'translate-x-3.5' : 'translate-x-0'
              }`} />
            </button>
          </div>

          {/* User Profile Card */}
          <div className={`p-2 rounded-lg border flex items-center justify-between mt-1 transition-colors ${
            darkMode 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 min-w-0">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 shrink-0">
                <Image
                  src="/images/george-thomas.jpg"
                  alt="George Thomas"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden min-w-0">
                <div className={`text-[11px] font-bold leading-tight truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  George thomas
                </div>
                <div className={`text-[9.5px] truncate ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  george@gmail.com
                </div>
              </div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </div>
        </div>

      </aside>

      {/* ── RIGHT MAIN WORKSPACE (Stretches Full Width & Height) ── */}
      <main className={`flex-1 min-w-0 p-4 space-y-3.5 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#0b0f19]' : 'bg-[#fafbfd]'
      }`}>
        
        {/* Top Search & Actions */}
        <div className="flex items-center justify-between gap-3">
          {/* Search Modules Input */}
          <div className="relative w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search batch #, GL account, CIT, vendor..."
              className={`w-full pl-8 pr-3 py-1.5 rounded-lg text-xs font-medium border transition-colors focus:outline-none focus:border-teal-500 ${
                darkMode 
                  ? 'bg-[#131c31] border-slate-800 text-white placeholder-slate-500' 
                  : 'bg-white border-slate-200 text-slate-700 placeholder-slate-400'
              }`}
              readOnly
            />
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2">
            <button className={`relative p-1.5 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-[#131c31] border-slate-800 text-slate-300 hover:text-white' 
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
            }`}>
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-blue-500 text-white text-[8px] font-black flex items-center justify-center border border-white">
                4
              </span>
            </button>

            <button className={`relative p-1.5 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-[#131c31] border-slate-800 text-slate-300 hover:text-white' 
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
            }`}>
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-black flex items-center justify-center border border-white">
                3
              </span>
            </button>

            {/* George Thomas Top Header Avatar */}
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 shrink-0 ml-0.5">
              <Image
                src="/images/george-thomas.jpg"
                alt="George Thomas"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ── Page Header: Welcome Message + Action Buttons ── */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <h1 className={`text-lg font-bold flex items-center gap-1.5 tracking-tight leading-tight ${
              darkMode ? 'text-white' : 'text-slate-950'
            }`}>
              Welcome back, George 👋
            </h1>
            <p className={`text-[11px] font-medium ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Here&apos;s your live General Ledger balance, bank sync &amp; daily operating control (DOC)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-colors ${
              darkMode 
                ? 'bg-[#131c31] border-slate-800 text-slate-300 hover:bg-slate-800' 
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}>
              <SlidersHorizontal className="w-3 h-3" />
              <span>Filter</span>
            </button>

            <button className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-colors ${
              darkMode 
                ? 'bg-[#131c31] border-slate-800 text-slate-300 hover:bg-slate-800' 
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}>
              <Download className="w-3 h-3" />
              <span>Export DOC</span>
            </button>

            <button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors">
              <span>+ Post Batch Entry</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* ── 4 KPI METRIC CARDS (Full Width Grid) ── */}
        <div className="grid grid-cols-4 gap-2.5">
          
          {/* Total Dealership Assets */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-emerald-950/60 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  <DollarSign className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Total Assets</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                $24.85M
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
                  : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                +4.2% MoM <TrendingUp className="w-2 h-2 ml-0.5" />
              </span>
            </div>
          </div>

          {/* Contracts in Transit (CIT) */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-cyan-950/60 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                }`}>
                  <Clock className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Contracts in Transit</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                $1.42M
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
                  : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                2.4 days avg
              </span>
            </div>
          </div>

          {/* Floorplan Borrowing Rate */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-teal-950/60 text-teal-400' : 'bg-teal-50 text-teal-600'
                }`}>
                  <Building2 className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Floorplan Interest</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                5.85 %
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-cyan-950/60 text-cyan-400 border-cyan-800' 
                  : 'bg-cyan-50 text-cyan-600 border-cyan-100'
              }`}>
                -$18k curtail
              </span>
            </div>
          </div>

          {/* Daily Bank Reconciled */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-amber-950/60 text-amber-400' : 'bg-amber-50 text-amber-600'
                }`}>
                  <CheckCircle2 className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Bank Rec Status</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                100.0 %
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
                  : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                Audit Clean
              </span>
            </div>
          </div>

        </div>

        {/* ── 2 CHARTS ROW (Full Width Grid) ── */}
        <div className="grid grid-cols-2 gap-3">
          
          {/* 1. Cash Flow & Net Operating Margin Area Chart */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Net Operating Margin &amp; Cash Flow</span>
                <Info className="w-3 h-3 text-slate-400" />
              </div>
              <button className={`flex items-center gap-1 text-[10.5px] font-medium px-2 py-0.5 rounded-md border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span>View by Week</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
              </button>
            </div>

            {/* Chart Canvas Area */}
            <div className="relative h-32 w-full pt-1">
              <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[9px] text-slate-400 font-medium">
                <span>200k</span>
                <span>120k</span>
                <span>50k</span>
                <span>0</span>
              </div>

              <div className="absolute left-7 right-2 top-1 bottom-4 flex flex-col justify-between pointer-events-none">
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
              </div>

              <div className="absolute left-7 right-2 top-1 bottom-4">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 120">
                  <defs>
                    <linearGradient id="accountingGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={darkMode ? 0.35 : 0.25} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 85 Q 100 80 200 60 T 300 88 T 400 70 T 500 35 T 600 15 L 600 120 L 0 120 Z"
                    fill="url(#accountingGrad)"
                  />
                  <path
                    d="M 0 85 Q 100 80 200 60 T 300 88 T 400 70 T 500 35 T 600 15"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />
                  <circle cx="200" cy="60" r="3.5" fill="#059669" stroke={darkMode ? '#131c31' : '#ffffff'} strokeWidth="2" />
                </svg>

                <div className={`absolute left-[33%] top-[25%] -translate-x-1/2 -translate-y-full mb-1 px-2 py-0.5 rounded-lg border text-center pointer-events-none ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 '
                }`}>
                  <div className="text-[8.5px] text-slate-400 font-medium">Wednesday Settlement</div>
                  <div className="text-[10.5px] font-bold text-emerald-600">$185k Net Cash Margin</div>
                </div>
              </div>

              <div className="absolute left-7 right-2 bottom-0 flex justify-between text-[9px] text-slate-400 font-medium">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* 2. Department Profitability Bar Chart */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Sales vs Service vs Parts</span>
                <Info className="w-3 h-3 text-slate-400" />
              </div>
              <button className={`flex items-center gap-1 text-[10.5px] font-medium px-2 py-0.5 rounded-md border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span>View Monthly</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
              </button>
            </div>

            {/* Chart Canvas Area */}
            <div className="relative h-32 w-full pt-1">
              <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[9px] text-slate-400 font-medium">
                <span>150k</span>
                <span>100k</span>
                <span>50k</span>
                <span>0</span>
              </div>

              <div className="absolute left-7 right-2 top-1 bottom-4 flex flex-col justify-between pointer-events-none">
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
                <div className={`w-full border-b ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`} />
              </div>

              <div className="absolute left-7 right-2 top-1 bottom-4 flex items-end justify-between px-2">
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-12 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-16 bg-emerald-600 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-8 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-18 bg-emerald-600 rounded-t-sm" />
                </div>
                <div className="relative flex items-end gap-1">
                  <div className={`w-2.5 h-24 rounded-t-sm ${darkMode ? 'bg-slate-600' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-20 bg-emerald-600 rounded-t-sm" />
                  
                  <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-lg border text-left w-28 pointer-events-none  ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}>
                    <div className="flex items-center justify-between text-[8.5px]">
                      <span className="text-emerald-600 font-bold">Gross P&amp;L:</span>
                      <strong>$142k</strong>
                    </div>
                    <div className="flex items-center justify-between text-[8.5px]">
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Overhead:</span>
                      <strong>$68k</strong>
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-16 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-12 bg-emerald-600 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-20 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-10 bg-emerald-600 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-14 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-12 bg-emerald-600 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-22 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-18 bg-emerald-600 rounded-t-sm" />
                </div>
              </div>

              <div className="absolute left-7 right-2 bottom-0 flex justify-between text-[9px] text-slate-400 font-medium px-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM TABLE CARD: "Live General Ledger & Daily Cash Flow Reconciliations" ── */}
        <div className={`rounded-xl border p-3.5 overflow-hidden transition-colors ${
          darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200 '
        }`}>
          
          <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                Live General Ledger &amp; Daily Cash Flow Reconciliations
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Auto-Synced (Chase &amp; Ally)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}>
                <span>All Rooftops (3)</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>
              <button className={`text-[11px] font-bold flex items-center gap-1 px-2.5 py-1 rounded-md ${
                darkMode 
                  ? 'bg-slate-800 text-slate-200 hover:text-white' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                <span>Audit All Batches</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200/90 bg-slate-50/70 text-slate-700 font-bold text-[10.5px]">
                  <th className="py-2 px-3">
                    <span className="flex items-center gap-1">
                      Batch ID &amp; Dept <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-2 px-3">
                    <span className="flex items-center gap-1">
                      Audit Status <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-2 px-3">
                    <span className="flex items-center gap-1">
                      Description &amp; Payee <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-2 px-3">
                    <span className="flex items-center gap-1">
                      GL Account <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-2 px-3">
                    <span className="flex items-center gap-1">
                      Clearing Stream <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-2 px-3">
                    <span className="flex items-center gap-1">
                      Posting Date <ArrowUpDown className="w-3 h-3 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-2 px-3 text-right">
                    <span>Batch Total</span>
                  </th>
                  <th className="py-2 px-3 text-center">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableData.map((row, idx) => (
                  <tr 
                    key={idx}
                    className="hover:bg-slate-50/90 transition-colors text-xs"
                  >
                    {/* 1. Batch & Dept */}
                    <td className="py-2.5 px-3">
                      <span className="font-mono text-[10px] font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 inline-block mb-0.5">
                        {row.batchId}
                      </span>
                      <div className="font-bold text-slate-900 text-xs leading-tight">
                        {row.department}
                      </div>
                    </td>

                    {/* 2. Audit Status */}
                    <td className="py-2.5 px-3">
                      {row.statusType === 'emerald' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          {row.status}
                        </span>
                      )}
                      {row.statusType === 'blue' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          {row.status}
                        </span>
                      )}
                      {row.statusType === 'purple' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-50 text-purple-800 border border-purple-300">
                          <FileText className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          {row.status}
                        </span>
                      )}
                      {row.statusType === 'amber' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300">
                          <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          {row.status}
                        </span>
                      )}
                    </td>

                    {/* 3. Description & Payee (Bold, Crystal Clear) */}
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-950 text-xs leading-snug">
                        {row.descriptionTitle}
                      </div>
                      <div className="text-[11px] font-medium text-slate-600 leading-tight mt-0.5">
                        {row.descriptionSub}
                      </div>
                    </td>

                    {/* 4. GL Account (Clean Light Pill, No Black Box) */}
                    <td className="py-2.5 px-3">
                      <div className="inline-flex flex-col bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg">
                        <span className="font-mono text-[11px] font-bold text-slate-900 leading-tight">
                          {row.glCode}
                        </span>
                        <span className="text-[10px] font-medium text-slate-600 leading-tight">
                          {row.glLabel}
                        </span>
                      </div>
                    </td>

                    {/* 5. Clearing Stream (High Contrast Dark Text) */}
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-900 text-xs leading-tight">
                        {row.clearingStream}
                      </div>
                      <div className="text-[10.5px] font-medium text-slate-600 leading-tight mt-0.5">
                        {row.clearingSub}
                      </div>
                    </td>

                    {/* 6. Posting Date */}
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-slate-800 text-xs leading-tight">
                        {row.postingDate}
                      </div>
                      <div className="font-mono text-[10px] font-semibold text-slate-500 leading-tight mt-0.5">
                        {row.seqNumber}
                      </div>
                    </td>

                    {/* 7. Batch Total */}
                    <td className="py-2.5 px-3 text-right">
                      <span className={`font-mono font-black text-xs ${
                        row.isCredit ? 'text-emerald-700' : 'text-rose-700'
                      }`}>
                        {row.amount}
                      </span>
                    </td>

                    {/* 8. Action */}
                    <td className="py-2.5 px-3 text-center">
                      <button className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold border border-slate-200 transition-colors">
                        Audit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

    </div>
  );
}
