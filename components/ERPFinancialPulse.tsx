'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  TrendingUp, 
  Bell, 
  LogOut,
  PieChart,
  DollarSign,
  Package,
  HandCoins,
  History,
  LayoutGrid,
  Settings
} from 'lucide-react';

export function ERPFinancialPulse() {
  return (
    <div className="bg-[#f8f9ff] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-white/50 font-sans text-gray-900 border-gray-200">
      <div className="bg-white/70 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col md:flex-row shadow-inner border border-white/80">
        
        {/* Navigation Sidebar (AOS Standard) */}
        <div className="w-full md:w-16 xl:w-20 border-b md:border-b-0 md:border-r border-gray-100 flex flex-row md:flex-col items-center justify-between md:justify-start px-4 py-3 md:px-0 md:py-8 gap-4 md:gap-8 shrink-0 bg-white/40">
           <div className="w-8 h-8 md:w-10 md:h-10 bg-[#7C3AED] rounded-xl md:rounded-2xl flex shrink-0 items-center justify-center text-white font-black text-lg md:text-xl shadow-lg shadow-purple-200 md:mb-4">
            A
          </div>
          
          <nav className="flex flex-row md:flex-col gap-2 md:gap-6">
            {[LayoutGrid, History, Package, HandCoins, Settings].map((Icon, i) => (
              <div key={i} className={`p-2 md:p-2.5 rounded-xl cursor-pointer transition-all ${i === 0 ? 'bg-purple-100/50 text-[#7C3AED]' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}>
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            ))}
          </nav>
          
          <div className="md:mt-auto p-2.5 text-gray-300 hover:text-red-500 cursor-pointer">
            <LogOut className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>

        {/* Financial Hub Main Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="h-auto md:h-20 flex flex-col sm:flex-row items-center justify-between p-4 md:px-10 shrink-0 border-b border-gray-100/50 gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-800">The Financial Pulse</h2>
              <div className="flex gap-1.5 h-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hidden sm:inline">Real-time Feed</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-xs md:text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden shadow-sm shrink-0 relative">
                    <Image src={`https://picsum.photos/seed/${i + 12}/100/100`} alt="Member" fill className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="w-px h-6 bg-gray-100 mx-2 hidden sm:block"></div>
              <div className="relative p-2 rounded-xl bg-gray-50/80 hover:bg-gray-100 transition-colors border border-gray-100 cursor-pointer shrink-0">
                <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </div>
            </div>
          </header>

          <div className="flex-1 p-4 md:p-10">
            {/* Top 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              {[
                { label: 'Net Daily Revenue', value: 'R$ 142.450', color: 'text-[#7C3AED]', icon: DollarSign, trend: '+12.4%' },
                { label: 'Unbilled Parts Leakage', value: 'R$ 0.00', color: 'text-emerald-600', icon: Package, trend: 'Clean' },
                { label: 'Partner Payouts Due', value: 'R$ 12.400', color: 'text-amber-600', icon: HandCoins, trend: 'Pending' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <stat.icon className="w-20 h-20" />
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 sm:mb-4">{stat.label}</div>
                   <div className={`text-xl sm:text-2xl font-black tracking-tight ${stat.color} mb-1`}>{stat.value}</div>
                   <div className={`text-[10px] font-bold ${stat.trend.includes('+') || stat.trend === 'Clean' ? 'text-emerald-500' : 'text-amber-500'} flex items-center gap-1`}>
                      <TrendingUp className="w-3 h-3" /> {stat.trend}
                   </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-4 sm:gap-6 md:gap-8">
              {/* Profit Split Visualization */}
              <div className="col-span-12 lg:col-span-5 bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm">
                 <h3 className="text-sm font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-[#7C3AED]" />
                    Revenue Logic Split
                 </h3>
                 
                 <div className="flex flex-col items-center justify-center h-48 sm:h-56 md:h-64 gap-4 sm:gap-6 md:gap-8">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center">
                       <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          {/* 51% Segment (Dealer) */}
                          <motion.circle 
                            cx="50" cy="50" r="40" 
                            fill="none" 
                            stroke="#7C3AED" 
                            strokeWidth="12" 
                            strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            animate={{ strokeDashoffset: 251.2 * (1 - 0.51) }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="drop-shadow-sm"
                          />
                          {/* 49% Segment (Firm Partner) - Offset by the 51% */}
                          <motion.circle 
                            cx="50" cy="50" r="40" 
                            fill="none" 
                            stroke="#E9D5FF" 
                            strokeWidth="12" 
                            strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            animate={{ strokeDashoffset: 251.2 * (1 - 0.49) }}
                            style={{ rotate: "183.6deg", transformOrigin: 'center' }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                          />
                       </svg>
                       <div className="absolute flex flex-col items-center">
                          <span className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">51/49</span>
                          <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest">Protocol</span>
                       </div>
                    </div>
                    
                    <div className="flex gap-4 sm:gap-6 md:gap-8 w-full justify-center flex-wrap">
                       <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-[#7C3AED]"></div>
                          <div>
                             <div className="text-xs font-black text-gray-900">Dealer Net</div>
                             <div className="text-[10px] font-bold text-gray-400">51% Ownership</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-purple-200"></div>
                          <div>
                             <div className="text-xs font-black text-gray-900">Firm Partner</div>
                             <div className="text-[10px] font-bold text-gray-400">49% Commission</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Ledger Activity Feed */}
              <div className="col-span-12 lg:col-span-7 bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col">
                 <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-2">
                       <History className="w-4 h-4 text-[#7C3AED]" />
                       Recent Ledger Activity
                    </h3>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Today</div>
                 </div>
                 
                 <div className="space-y-4 flex-1">
                    {[
                      { time: '09:45 AM', event: 'Brake Pad #XY77', action: 'Deducted from Stock', ref: 'Billed to Job #102', value: '-$85.00' },
                      { time: '10:12 AM', event: 'Labor Settlement', action: 'Automated 51/49 Split', ref: 'Partner: MobilMech', value: '+$420.00' },
                      { time: '11:05 AM', event: 'Inventory Reorder', action: 'AI Trigger: Low Stock', ref: 'Supplier: UniParts', value: 'Pending' },
                      { time: '11:30 AM', event: 'End-of-Session Wrap', action: 'Ledger Immutable Sync', ref: 'System-wide', value: 'Locked' }
                    ].map((row, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-gray-50/50 transition-colors border border-transparent hover:border-gray-100 group/row gap-2 sm:gap-0"
                      >
                         <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className="text-[10px] font-bold text-gray-400 tabular-nums shrink-0">{row.time}</div>
                            <div className="min-w-0">
                               <div className="text-xs font-black text-gray-900 group-hover/row:text-[#7C3AED] transition-colors truncate">{row.event}</div>
                               <div className="text-[10px] font-medium text-gray-500 truncate">{row.action} <span className="opacity-40 mx-1">|</span> {row.ref}</div>
                            </div>
                         </div>
                         <div className={`text-xs font-black shrink-0 pl-[60px] sm:pl-0 ${row.value === 'Pending' ? 'text-amber-500' : row.value === 'Locked' ? 'text-emerald-500' : 'text-gray-900'}`}>
                            {row.value}
                         </div>
                      </motion.div>
                    ))}
                 </div>
                 
                 <button className="mt-8 w-full py-4 rounded-xl border border-dashed border-gray-200 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#7C3AED] hover:border-[#7C3AED] transition-all">
                    View Full Master Ledger
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
