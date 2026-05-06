'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Search, 
  Bell, 
  MoreHorizontal,
  ChevronDown,
  LayoutGrid,
  ClipboardList,
  FileText,
  HelpCircle,
  LogOut,
  ArrowUpRight,
  MessageSquare,
  Mic,
  Wrench
} from 'lucide-react';

export function ERPDashboardSnapshot({ module = 'erp' }: { module?: string }) {
  const isFixedOps = module === 'fixed-ops';
  
  return (
    <div className="bg-[#eff4ff] rounded-[2.5rem] p-4 lg:p-6 w-full shadow-2xl border border-white/50 font-sans text-gray-900">
      <div className="bg-white rounded-[2rem] flex shadow-sm border border-gray-100">
        
        {/* Navigation Sidebar (Mini) */}
        <div className="w-16 lg:w-20 border-r border-gray-50 flex flex-col items-center py-6 gap-6 shrink-0 bg-gray-50/30">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 mb-4">
            {isFixedOps ? 'S' : 'A'}.
          </div>
          
          <nav className="flex flex-col gap-5">
            {[LayoutGrid, Calendar, Users, ClipboardList, FileText, HelpCircle].map((Icon, i) => (
              <div key={i} className={`p-2.5 rounded-xl cursor-pointer transition-all ${i === 0 ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}>
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </nav>
          
          <div className="mt-auto flex flex-col gap-6">
            <div className="p-2.5 text-gray-400 hover:text-red-500 cursor-pointer">
              <LogOut className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm relative">
              <Image src={`https://picsum.photos/seed/${isFixedOps ? 'service' : 'finance'}/100/100`} alt="Avatar" fill className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Top Bar */}
          <header className="h-20 border-b border-gray-50 flex items-center justify-between px-8 shrink-0">
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <div className="bg-gray-50 rounded-xl px-4 py-2.5 flex items-center gap-3 w-full border border-gray-100/50">
                <Search className="w-4 h-4 text-gray-400" />
                <input type="text" placeholder={isFixedOps ? "Search job cards, VINs..." : "Search ledgers, transactions..."} className="bg-transparent border-none outline-none text-sm w-full text-gray-600" readOnly />
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="text-xs font-bold text-gray-600">01 Dec 2024 - 30 Dec 2024</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-bold shadow-md shadow-blue-100 hover:bg-blue-700 transition-all">
                {isFixedOps ? 'Daily Service Log' : 'Financial Statement'}
              </button>
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </div>
          </header>

          {/* Dashboard Grid */}
          <div className="flex-1 p-8 bg-gray-50/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">{isFixedOps ? 'Fixed Ops Control' : 'Liquidity Engine'}</h2>
              <div className="flex gap-2">
                <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black tracking-widest uppercase">{isFixedOps ? 'Service' : 'Sales'}</span>
                <span className="px-4 py-1.5 bg-gray-200 text-gray-500 rounded-full text-[10px] font-black tracking-widest uppercase">{isFixedOps ? 'Parts' : 'Financial'}</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              {/* Top Stats */}
              <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <TrendingUp className="w-24 h-24 text-blue-600" />
                </div>
                <div className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">{isFixedOps ? 'Labor Sales • December' : 'Gross Revenue • December'}</div>
                <div className="text-3xl sm:text-4xl font-black mb-2 tracking-tighter">
                  {isFixedOps ? 'R$ 84.210' : 'R$ 20.845'}<span className="text-lg sm:text-xl font-bold ml-1">{isFixedOps ? 'net' : 'mil'}</span>
                </div>
                <div className="text-xs font-bold text-green-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {isFixedOps ? '+14.2% efficiency' : '+32.4% vs last year'}
                </div>
                
                {/* Mini Circle Chart */}
                <div className="absolute bottom-6 right-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#f3f4f6" strokeWidth="6" />
                    <motion.circle 
                      cx="40" cy="40" r="34" fill="none" stroke="#2563eb" strokeWidth="6" 
                      strokeDasharray="213.6" 
                      initial={{ strokeDashoffset: 213.6 }}
                      animate={{ strokeDashoffset: 213.6 * (1 - 0.83) }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute text-xs font-black text-blue-600">83%</div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-wider">{isFixedOps ? 'Open Job Cards' : 'Active Sessions'}</div>
                  <div className="text-3xl sm:text-4xl font-black tracking-tighter">{isFixedOps ? '142' : '58'}</div>
                </div>
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{isFixedOps ? 'DVI Approval' : 'Ledger Health'}</div>
                    <div className="text-xl font-bold">{isFixedOps ? '94%' : '100%'}</div>
                  </div>
                  <div className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded">+4%</div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400">Next Action</div>
                  <MoreHorizontal className="w-4 h-4 text-gray-300" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shadow-sm border border-blue-100">
                      {isFixedOps ? <Wrench className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">{isFixedOps ? 'Recall Notification' : 'Quarterly Audit'}</div>
                      <div className="text-[10px] font-medium text-gray-400">11:20 AM • {isFixedOps ? 'Service Drive' : 'Main Office'}</div>
                    </div>
                  </div>
                  <div className="px-3 py-2 bg-blue-100/50 rounded-lg text-[10px] font-bold text-blue-700 inline-block">
                    In Progress
                  </div>
                </div>
              </div>

              {/* Chart Sections */}
              <div className="col-span-12 lg:col-span-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-gray-900">{isFixedOps ? 'Throughput Efficiency' : 'Revenue Performance'}</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                       <span className="text-[10px] font-black text-gray-400 uppercase">Actual</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2.5 h-2.5 rounded-full bg-purple-500 opacity-30"></div>
                       <span className="text-[10px] font-black text-gray-400 uppercase">Projected</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 mt-4 relative">
                  {/* Legend lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-[0.03] pointer-events-none">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-full border-t border-gray-900"></div>)}
                  </div>
                  
                  {/* Mock Line Graph */}
                  <div className="absolute inset-x-0 bottom-0 top-10 flex items-end">
                    <svg viewBox="0 0 1000 200" className="w-full h-full overflow-visible">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        d="M0,150 C100,140 200,60 300,80 C400,100 500,20 600,40 C700,60 800,100 900,120 L1000,110" 
                        fill="none" 
                        stroke="#2563eb" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                      />
                      <motion.path 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 1, delay: 1 }}
                        d="M0,150 C100,160 200,120 300,140 C400,160 500,100 600,120 C700,140 800,160 900,180 L1000,170" 
                        fill="none" 
                        stroke="#a855f7" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Panel Mini Widgets */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-lg shadow-blue-100 flex items-center justify-between relative overflow-hidden group">
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{isFixedOps ? 'Effective Labor Rate' : 'Average P&L'}</div>
                    <div className="text-3xl font-black">{isFixedOps ? '$ 145' : '$ 50,00'}</div>
                    <div className="text-[10px] font-bold mt-1 inline-flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded">
                      <TrendingUp className="w-3 h-3" /> +4% target
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <Mic className="w-4 h-4" />
                       </div>
                       <div className="text-xs font-bold text-gray-900">AOS Intelligence</div>
                    </div>
                    <div className="text-[10px] font-black text-gray-400">LIVE</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-4 text-[11px] font-medium text-gray-600 border border-gray-100/50">
                      {isFixedOps 
                        ? "Technician productivity is peaking at 2 PM. Consider staggering bay assignments."
                        : "Monthly target hit ahead of schedule. Scaling liquidity reserves is recommended."
                      }
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span className="text-[11px] text-gray-400">Ask AOS...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
