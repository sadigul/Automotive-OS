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
  Layers, 
  Car, 
  FileText, 
  Users, 
  Landmark, 
  Settings, 
  Moon, 
  Sun, 
  Info, 
  ChevronLeft, 
  ArrowUpDown, 
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  DollarSign
} from 'lucide-react';

export function DeskingFIDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Live Desking Console');

  // Sidebar navigation sections tailored for Digital Retail & Desking
  const navItemsDesking = [
    { name: 'Live Desking Console', icon: LayoutDashboard },
    { name: 'Multi-Option Quotes', icon: Layers },
    { name: 'Online Credit Apps', icon: FileText },
    { name: 'Digital Signatures', icon: ShieldCheck },
    { name: 'Trade-In Valuations', icon: DollarSign },
  ];

  const navItemsLenders = [
    { name: 'Captive Lenders', icon: Landmark },
    { name: 'Tier 1-4 Matrix', icon: TrendingUp },
    { name: 'Lender Callback Desk', icon: CreditCard },
  ];

  const navItemsAttachments = [
    { name: 'Service Contracts (VSC)', icon: ShieldCheck },
    { name: 'GAP Total Loss Protection', icon: CheckCircle2 },
    { name: 'Tire & Wheel Protection', icon: Car },
  ];

  // Live Digital Desking & Payment Quotes table data
  const tableData = [
    {
      customer: 'Michael Torres',
      dealId: 'Desk #3104',
      structure: 'Finance 72 mo @ 4.9%',
      structureColorLight: 'bg-blue-50 text-blue-700 border-blue-200',
      structureColorDark: 'bg-blue-950/60 text-blue-400 border-blue-800/80',
      vehicle: '2024 Honda CR-V EX-L',
      vin: 'VIN #4812',
      lender: 'Capital One Auto',
      lenderStatus: 'Approved Tier 1',
      lenderColorLight: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      lenderColorDark: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
      monthlyPayment: '$512/mo',
      downPayment: '$3,000 down',
      backGross: '+$2,180 F&I',
    },
    {
      customer: 'Amanda Crawford',
      dealId: 'Desk #3105',
      structure: 'Lease 36 mo / 12k mi',
      structureColorLight: 'bg-purple-50 text-purple-700 border-purple-200',
      structureColorDark: 'bg-purple-950/60 text-purple-400 border-purple-800/80',
      vehicle: '2025 BMW X3 xDrive30i',
      vin: 'VIN #9034',
      lender: 'BMW Financial Services',
      lenderStatus: 'Contract Signed',
      lenderColorLight: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      lenderColorDark: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
      monthlyPayment: '$649/mo',
      downPayment: '$2,500 down',
      backGross: '+$3,450 F&I',
    },
    {
      customer: 'Jonathan Reed',
      dealId: 'Desk #3106',
      structure: 'Cash Direct Wire',
      structureColorLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      structureColorDark: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
      vehicle: '2024 Chevrolet Corvette 2LT',
      vin: 'VIN #7721',
      lender: 'Direct Wire Transfer',
      lenderStatus: 'Funds Verified',
      lenderColorLight: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      lenderColorDark: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
      monthlyPayment: 'One-Time',
      downPayment: '$78,400 wire',
      backGross: '+$1,890 VSC',
    },
    {
      customer: 'Valerie Jenkins',
      dealId: 'Desk #3107',
      structure: 'Finance 60 mo @ 5.4%',
      structureColorLight: 'bg-amber-50 text-amber-700 border-amber-200',
      structureColorDark: 'bg-amber-950/60 text-amber-400 border-amber-800/80',
      vehicle: '2024 Ford F-150 Lariat',
      vin: 'VIN #6119',
      lender: 'Ally Financial',
      lenderStatus: 'Underwriting Review',
      lenderColorLight: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      lenderColorDark: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/80',
      monthlyPayment: '$784/mo',
      downPayment: '$5,000 down',
      backGross: '+$2,640 F&I',
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

          {/* DIGITAL DESKING Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              DIGITAL DESKING
            </div>
            <nav className="space-y-0.5">
              {navItemsDesking.map((item) => {
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
                          : 'bg-teal-50/80 text-teal-950 font-bold border border-teal-200' 
                        : darkMode 
                          ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60' 
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${
                      isActive 
                        ? darkMode ? 'text-teal-400' : 'text-teal-600' 
                        : darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* LENDER NETWORK Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              LENDER PORTAL
            </div>
            <nav className="space-y-0.5">
              {navItemsLenders.map((item) => {
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

          {/* F&I ATTACHMENTS Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              F&amp;I PROTECTION
            </div>
            <nav className="space-y-0.5">
              {navItemsAttachments.map((item, idx) => {
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
              {darkMode ? <Moon className="w-3.5 h-3.5 text-teal-400" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
              <span>{darkMode ? 'Dark Mode: ON' : 'Dark Mode'}</span>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
              className={`w-8 h-4.5 rounded-full p-0.5 transition-colors cursor-pointer ${
                darkMode ? 'bg-teal-600' : 'bg-slate-300'
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
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 shadow-sm">
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
              placeholder="Search quote #, VIN, lender, customer..."
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
                5
              </span>
            </button>

            <button className={`relative p-1.5 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-[#131c31] border-slate-800 text-slate-300 hover:text-white' 
                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
            }`}>
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-black flex items-center justify-center border border-white">
                4
              </span>
            </button>

            {/* George Thomas Top Header Avatar */}
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 ml-0.5 shadow-sm">
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
              Here&apos;s your live omnichannel payment quotes, lender approvals &amp; F&amp;I margins
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
              <span>Export</span>
            </button>

            <button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#0f766e] text-white text-xs font-bold hover:bg-[#115e59] transition-colors shadow-sm">
              <span>+ Structure Deal</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* ── 4 KPI METRIC CARDS (Full Width Grid) ── */}
        <div className="grid grid-cols-4 gap-2.5">
          
          {/* Average Deal Time */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-emerald-950/60 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  <Clock className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Avg Deal Time</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                14 Mins
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
                  : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                -45m saved
              </span>
            </div>
          </div>

          {/* Active Online Quotes */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-cyan-950/60 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                }`}>
                  <Layers className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Active Quotes</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                94 Live
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
                  : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                +14 today
              </span>
            </div>
          </div>

          {/* Contracts Funded Today */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-teal-950/60 text-teal-400' : 'bg-teal-50 text-teal-600'
                }`}>
                  <FileText className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Funded Today</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                $342,800
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-teal-950/60 text-teal-400 border-teal-800' 
                  : 'bg-teal-50 text-teal-600 border-teal-100'
              }`}>
                14 contracts
              </span>
            </div>
          </div>

          {/* Average F&I PVR */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-emerald-950/60 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  <TrendingUp className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Avg F&amp;I PVR</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                $2,480
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
                  : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                +12.6%
              </span>
            </div>
          </div>
        </div>

        {/* ── 2 COLUMN CHARTS SECTION (Hours & Revenue / Split) ── */}
        <div className="grid grid-cols-2 gap-2.5">
          
          {/* 1. Contracts Funded Spline Chart */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Weekly Funded Volume ($k)</span>
                <Info className="w-3 h-3 text-slate-400" />
              </div>
              <button className={`flex items-center gap-1 text-[10.5px] font-medium px-2 py-0.5 rounded-md border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span>May 2026</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
              </button>
            </div>

            {/* Chart Canvas Area */}
            <div className="relative h-32 w-full pt-1">
              <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[9px] text-slate-400 font-medium">
                <span>$500k</span>
                <span>$350k</span>
                <span>$200k</span>
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
                    <linearGradient id="deskingGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity={darkMode ? 0.35 : 0.22} />
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 90 Q 100 85 200 60 T 300 88 T 400 70 T 500 38 T 600 15 L 600 120 L 0 120 Z"
                    fill="url(#deskingGrad)"
                  />
                  <path
                    d="M 0 90 Q 100 85 200 60 T 300 88 T 400 70 T 500 38 T 600 15"
                    fill="none"
                    stroke="#0d9488"
                    strokeWidth="2.5"
                  />
                  <circle cx="200" cy="60" r="3.5" fill="#0d9488" stroke={darkMode ? '#131c31' : '#ffffff'} strokeWidth="2" />
                </svg>

                <div className={`absolute left-[33%] top-[25%] -translate-x-1/2 -translate-y-full mb-1 px-2 py-0.5 rounded-lg border text-center pointer-events-none ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
                }`}>
                  <div className="text-[8.5px] text-slate-400 font-medium">Wednesday Peak</div>
                  <div className="text-[10.5px] font-bold text-teal-600 dark:text-teal-400">42 Deals ($210k Funded)</div>
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

          {/* 2. Lease vs Finance vs Cash Distribution Bar Chart */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Finance vs Lease Volume</span>
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
                <span>50</span>
                <span>30</span>
                <span>15</span>
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
                  <div className="w-2.5 h-16 bg-teal-500 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-8 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-18 bg-teal-500 rounded-t-sm" />
                </div>
                <div className="relative flex items-end gap-1">
                  <div className={`w-2.5 h-24 rounded-t-sm ${darkMode ? 'bg-slate-600' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-20 bg-teal-500 rounded-t-sm" />
                  
                  <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-lg border text-left w-28 pointer-events-none shadow-sm ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}>
                    <div className="flex items-center justify-between text-[8.5px]">
                      <span className="text-teal-500 font-bold">Finance:</span>
                      <strong>$38k</strong>
                    </div>
                    <div className="flex items-center justify-between text-[8.5px]">
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Lease:</span>
                      <strong>$26k</strong>
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-16 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-12 bg-teal-500 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-20 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-10 bg-teal-500 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-14 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-12 bg-teal-500 rounded-t-sm" />
                </div>
                <div className="flex items-end gap-1">
                  <div className={`w-2.5 h-22 rounded-t-sm ${darkMode ? 'bg-slate-700' : 'bg-slate-950'}`} />
                  <div className="w-2.5 h-18 bg-teal-500 rounded-t-sm" />
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

        {/* ── BOTTOM TABLE CARD: "Live Digital Desking & Payment Submissions" ── */}
        <div className={`rounded-xl border p-3 overflow-hidden transition-colors ${
          darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold">
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>Live Digital Desking &amp; Payment Quotes</span>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-center gap-2">
              <button className={`flex items-center gap-1 text-[10.5px] font-medium px-2 py-0.5 rounded-md border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-slate-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span>All Rooftops</span>
                <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
              </button>
              <button className={`text-[10.5px] font-bold flex items-center gap-0.5 ml-1 ${
                darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'
              }`}>
                <span>View More</span>
                <ChevronRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className={`border-b font-medium text-[9.5px] ${
                  darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Customer &amp; Quote <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Deal Structure <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Vehicle &amp; VIN <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Lender Approval <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Down / Cash <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Monthly Payment <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2 text-right">
                    <span>Back Gross</span>
                  </th>
                  <th className="py-1 px-2 text-center">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? 'divide-slate-800/80' : 'divide-slate-100'}`}>
                {tableData.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={`transition-colors text-[11px] ${
                      darkMode ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50/80'
                    }`}
                  >
                    <td className="py-2 px-2.5">
                      <div className={`font-bold leading-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        {row.customer}
                      </div>
                      <div className={`text-[10px] font-semibold font-mono ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {row.dealId}
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        darkMode ? row.structureColorDark : row.structureColorLight
                      }`}>
                        {row.structure}
                      </span>
                    </td>
                    <td className="py-2 px-2.5">
                      <div className={`font-bold leading-tight text-[11.5px] ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        {row.vehicle}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {row.vin}
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <div>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          darkMode ? row.lenderColorDark : row.lenderColorLight
                        }`}>
                          {row.lenderStatus}
                        </span>
                        <div className={`text-[10px] font-semibold mt-0.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{row.lender}</div>
                      </div>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`font-semibold text-[11px] ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                        {row.downPayment}
                      </span>
                    </td>
                    <td className="py-2 px-2.5">
                      <span className={`font-bold text-xs ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        {row.monthlyPayment}
                      </span>
                    </td>
                    <td className="py-2 px-2.5 text-right">
                      <span className="font-black text-teal-600 text-xs">
                        {row.backGross}
                      </span>
                    </td>
                    <td className="py-1.5 px-2 text-center">
                      <button className={`p-1 rounded transition-colors ${
                        darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200' : 'hover:bg-slate-100 text-slate-400 hover:text-slate-600'
                      }`}>
                        <MoreVertical className="w-3.5 h-3.5" />
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
