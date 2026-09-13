'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  TrendingDown, 
  ChevronDown, 
  ChevronRight, 
  SlidersHorizontal, 
  Download, 
  Search, 
  Bell, 
  MessageSquare, 
  MoreVertical, 
  LayoutDashboard, 
  Building2, 
  Car, 
  FileText, 
  Wrench, 
  Users, 
  UserCheck, 
  Landmark, 
  Receipt, 
  Bot, 
  Settings, 
  Moon, 
  Sun, 
  Info, 
  ChevronLeft, 
  ArrowUpDown, 
  AlertTriangle 
} from 'lucide-react';

export function EnterpriseERPSnapshot() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState('Vehicle Inventory');

  // Sidebar navigation sections
  const navItemsOperations = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Rooftops', icon: Building2 },
    { name: 'Vehicle Inventory', icon: Car },
    { name: 'Desking & Deals', icon: FileText },
    { name: 'Service & Parts', icon: Wrench },
  ];

  const navItemsTeams = [
    { name: 'Sales Team', icon: Users },
    { name: 'Technicians', icon: UserCheck },
  ];

  const navItemsBusiness = [
    { name: 'Floorplan', icon: Landmark },
    { name: 'Accounting', icon: Receipt },
    { name: 'AI Copilot', icon: Bot },
  ];

  // Recent Dealership Activity table data
  const tableData = [
    {
      order: 'Deal #1021',
      status: 'Processing',
      statusColorLight: 'bg-blue-50 text-blue-600 border-blue-200',
      statusColorDark: 'bg-blue-950/60 text-blue-400 border-blue-800/80',
      po: 'VIN #324',
      approval: 'Approved',
      approvalColorLight: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      approvalColorDark: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
      task: 'Vehicle PDI Inspection',
      dueDate: '14 Nov 2025',
    },
    {
      order: 'RO #1022',
      status: 'Delivered',
      statusColorLight: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      statusColorDark: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
      po: 'VIN #325',
      approval: 'Waiting Approval',
      approvalColorLight: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      approvalColorDark: 'bg-cyan-950/60 text-cyan-400 border-cyan-800/80',
      task: 'F&I Contract Review',
      dueDate: '16 Nov 2025',
    },
    {
      order: 'Deal #1023',
      status: 'Shipped',
      statusColorLight: 'bg-amber-50 text-amber-600 border-amber-200',
      statusColorDark: 'bg-amber-950/60 text-amber-400 border-amber-800/80',
      po: 'VIN #326',
      approval: 'Pending Review',
      approvalColorLight: 'bg-slate-100 text-slate-600 border-slate-200',
      approvalColorDark: 'bg-slate-800 text-slate-300 border-slate-700',
      task: 'Trade-in Appraisal',
      dueDate: '18 Nov 2025',
    },
    {
      order: 'Deal #1024',
      status: 'Cancelled',
      statusColorLight: 'bg-rose-50 text-rose-600 border-rose-200',
      statusColorDark: 'bg-rose-950/60 text-rose-400 border-rose-800/80',
      po: 'VIN #327',
      approval: 'Rejected',
      approvalColorLight: 'bg-rose-50 text-rose-600 border-rose-200',
      approvalColorDark: 'bg-rose-950/60 text-rose-400 border-rose-800/80',
      task: 'Floorplan Reconciliation',
      dueDate: '20 Nov 2025',
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

          {/* OPERATIONS Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              OPERATIONS
            </div>
            <nav className="space-y-0.5">
              {navItemsOperations.map((item) => {
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

          {/* TEAMS Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              TEAMS
            </div>
            <nav className="space-y-0.5">
              {navItemsTeams.map((item) => {
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

          {/* BUSINESS Section */}
          <div>
            <div className={`text-[10px] font-bold uppercase tracking-wider px-2 mb-1 ${
              darkMode ? 'text-slate-500' : 'text-slate-400'
            }`}>
              BUSINESS
            </div>
            <nav className="space-y-0.5">
              {navItemsBusiness.map((item, idx) => {
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
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0">
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
              placeholder="Search modules, VIN, deals..."
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
                6
              </span>
            </button>

            {/* George Thomas Top Header Avatar */}
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 ml-0.5">
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
              Here's what's happening across 4 rooftops today
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

            <button className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#0f766e] text-white text-xs font-bold hover:bg-[#115e59] transition-colors">
              <span>+ Create new</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* ── 4 KPI METRIC CARDS (Full Width Grid) ── */}
        <div className="grid grid-cols-4 gap-2.5">
          
          {/* Total Revenue */}
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
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Total Revenue</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                $1,240,000
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' 
                  : 'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                12 % <TrendingUp className="w-2 h-2 ml-0.5" />
              </span>
            </div>
          </div>

          {/* Deals Processed */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-cyan-950/60 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                }`}>
                  <Car className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Deals Processed</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                1,024
              </span>
              <span className={`inline-flex items-center gap-0.5 px-1 py-0.2 rounded text-[9px] font-bold border ${
                darkMode 
                  ? 'bg-rose-950/60 text-rose-400 border-rose-800' 
                  : 'bg-rose-50 text-rose-500 border-rose-100'
              }`}>
                12 % <TrendingDown className="w-2 h-2 ml-0.5" />
              </span>
            </div>
          </div>

          {/* Active Technicians */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-teal-950/60 text-teal-400' : 'bg-teal-50 text-teal-600'
                }`}>
                  <Users className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Active Techs</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                55 / 60
              </span>
            </div>
          </div>

          {/* Low Stock Alerts */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                  darkMode ? 'bg-amber-950/60 text-amber-400' : 'bg-amber-50 text-amber-600'
                }`}>
                  <AlertTriangle className="w-3 h-3" />
                </div>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Low Stock</span>
              </div>
              <Info className="w-3 h-3 text-slate-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className={`text-lg font-black tracking-tight ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                5 units
              </span>
            </div>
          </div>

        </div>

        {/* ── 2 CHARTS ROW (Full Width Grid) ── */}
        <div className="grid grid-cols-2 gap-3">
          
          {/* 1. Sales Performance Area Chart */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Sales Performance</span>
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
                <span>100k</span>
                <span>50k</span>
                <span>20k</span>
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
                    <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={darkMode ? 0.35 : 0.25} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 90 Q 100 85 200 70 T 300 95 T 400 75 T 500 40 T 600 15 L 600 120 L 0 120 Z"
                    fill="url(#salesGrad)"
                  />
                  <path
                    d="M 0 90 Q 100 85 200 70 T 300 95 T 400 75 T 500 40 T 600 15"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                  />
                  <circle cx="200" cy="70" r="3.5" fill="#3b82f6" stroke={darkMode ? '#131c31' : '#ffffff'} strokeWidth="2" />
                </svg>

                <div className={`absolute left-[33%] top-[30%] -translate-x-1/2 -translate-y-full mb-1 px-2 py-0.5 rounded-lg border text-center pointer-events-none ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900 '
                }`}>
                  <div className="text-[8.5px] text-slate-400 font-medium">Wednesday</div>
                  <div className="text-[10.5px] font-bold text-teal-500">$20,000</div>
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

          {/* 2. Expense vs Income Grouped Bar Chart */}
          <div className={`p-3 rounded-xl border transition-colors ${
            darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Expense vs Income</span>
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
                <span>100k</span>
                <span>50k</span>
                <span>20k</span>
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
                  
                  <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-lg border text-left w-28 pointer-events-none  ${
                    darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
                  }`}>
                    <div className="flex items-center justify-between text-[8.5px]">
                      <span className="text-teal-500 font-bold">Income:</span>
                      <strong>$85k</strong>
                    </div>
                    <div className="flex items-center justify-between text-[8.5px]">
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>Expense:</span>
                      <strong>$120k</strong>
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

        {/* ── BOTTOM TABLE CARD: "Recent Dealership Activity" ── */}
        <div className={`rounded-xl border p-3 overflow-hidden transition-colors ${
          darkMode ? 'bg-[#131c31] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold">
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>Recent Dealership Activity</span>
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
                      Recent Orders <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Status <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Vehicle Reference <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Approval Status <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Upcoming Tasks <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2">
                    <span className="flex items-center gap-0.5">
                      Due Date <ArrowUpDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </th>
                  <th className="py-1 px-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className={`divide-y text-slate-700 font-medium ${
                darkMode ? 'divide-slate-800 text-slate-300' : 'divide-slate-50 text-slate-700'
              }`}>
                {tableData.map((row, idx) => (
                  <tr key={idx} className={`transition-colors ${
                    darkMode ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50/70'
                  }`}>
                    <td className={`py-1.5 px-2 font-semibold text-[11px] ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {row.order}
                    </td>
                    <td className="py-1.5 px-2">
                      <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-semibold border ${
                        darkMode ? row.statusColorDark : row.statusColorLight
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className={`py-1.5 px-2 font-medium text-[10.5px] ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {row.po}
                    </td>
                    <td className="py-1.5 px-2">
                      <span className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-semibold border ${
                        darkMode ? row.approvalColorDark : row.approvalColorLight
                      }`}>
                        {row.approval}
                      </span>
                    </td>
                    <td className={`py-1.5 px-2 text-[10px] ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {row.task}
                    </td>
                    <td className={`py-1.5 px-2 text-[10px] ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {row.dueDate}
                    </td>
                    <td className={`py-1.5 px-2 text-right cursor-pointer ${
                      darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-700'
                    }`}>
                      <MoreVertical className="w-3 h-3 inline" />
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
