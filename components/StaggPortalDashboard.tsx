'use client';

import { motion } from 'motion/react';
import {
  Briefcase,
  Star,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle2,
  Wrench,
  Award,
} from 'lucide-react';

export function StaggPortalDashboard() {
  return (
    <div className="bg-[#f0fdfa] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-teal-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">

        {/* Header */}
        <div className="px-4 md:px-10 py-4 md:py-6 border-b border-teal-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex shrink-0 items-center justify-center text-white font-black text-xl shadow-lg shadow-teal-200">
              A
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">Stagg Portal</h2>
              <p className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mt-0.5">Outsourced Workforce Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">12 Active Partners</span>
            <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center gap-2">
              <Star className="w-3 h-3 text-emerald-600" />
              <span className="text-[10px] font-black text-emerald-700">4.9 Avg Rating</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 flex-1">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { label: 'Active Jobs', value: '34', icon: Wrench, color: 'text-teal-600', bg: 'bg-teal-50', trend: '12 completed today' },
              { label: 'Monthly Payouts', value: '$48.2k', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+18% vs last month' },
              { label: 'On-Time Rate', value: '96%', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', trend: 'Above 90% target' },
              { label: 'Satisfaction', value: '4.9/5', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50', trend: 'All-time high' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-1">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</div>
                <div className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {stat.trend}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Active Jobs by Partner */}
            <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-teal-600" />
                  Active Jobs
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">34 in progress</span>
              </div>
              <div className="space-y-2">
                {[
                  { partner: 'AutoFix Co', jobs: 12, mechanic: 'Carlos Mendes', current: 'Transmission Rebuild — 2021 Accord', status: 'In Progress', eta: '2h left' },
                  { partner: 'QuickLube Pro', jobs: 8, mechanic: 'Ana Silva', current: 'Full Service — 2023 Civic', status: 'Almost Done', eta: '30 min' },
                  { partner: 'BrakeMax', jobs: 9, mechanic: 'Rodrigo Lima', current: 'Brake Overhaul — 2020 F-150', status: 'In Progress', eta: '3h left' },
                  { partner: 'TireWorld', jobs: 5, mechanic: 'João Costa', current: 'Tire Rotation + Balance — 2024 RAV4', status: 'Starting', eta: '1h est' },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="p-3 sm:p-4 rounded-xl hover:bg-gray-50/80 transition-colors border border-transparent hover:border-gray-100"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 font-black text-sm shrink-0">
                          {row.jobs}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-black text-gray-900">{row.partner}</div>
                          <div className="text-[10px] text-gray-500 truncate">{row.mechanic} — {row.current}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 pl-11 sm:pl-0">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          row.status === 'Almost Done' ? 'bg-emerald-50 text-emerald-600' :
                          row.status === 'Starting' ? 'bg-blue-50 text-blue-600' :
                          'bg-amber-50 text-amber-600'
                        }`}>{row.status}</span>
                        <span className="text-[10px] font-bold text-gray-400">{row.eta}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Partner Scorecards */}
            <div className="lg:col-span-5 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-600" />
                Partner Scorecards
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'AutoFix Co', rating: 4.9, onTime: '98%', payout: '$18,200', top: true },
                  { name: 'QuickLube Pro', rating: 4.8, onTime: '95%', payout: '$11,600', top: false },
                  { name: 'BrakeMax', rating: 4.9, onTime: '97%', payout: '$10,800', top: false },
                  { name: 'TireWorld', rating: 4.7, onTime: '91%', payout: '$7,600', top: false },
                ].map((partner, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className={`p-4 rounded-xl border ${partner.top ? 'border-teal-200 bg-teal-50/50' : 'border-gray-100'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-gray-900">{partner.name}</span>
                      {partner.top && <span className="text-[10px] font-black text-teal-600">⭐ Top Partner</span>}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-sm font-black text-gray-900">{partner.rating}</div>
                        <div className="text-[9px] font-bold text-gray-400">Rating</div>
                      </div>
                      <div>
                        <div className="text-sm font-black text-gray-900">{partner.onTime}</div>
                        <div className="text-[9px] font-bold text-gray-400">On-Time</div>
                      </div>
                      <div>
                        <div className="text-sm font-black text-emerald-600">{partner.payout}</div>
                        <div className="text-[9px] font-bold text-gray-400">Paid</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Auto-Pay Banner */}
          <div className="mt-6 bg-teal-600 rounded-2xl md:rounded-[2rem] p-5 md:p-6 text-white shadow-xl shadow-teal-200/50 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-teal-200 mb-2">Instant Auto-Pay</div>
                <p className="text-sm font-medium leading-relaxed max-w-xl">
                  Partners get paid the moment a job closes. No invoicing, no delays. 24 payouts processed automatically today.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-black">$4,820</div>
                  <div className="text-[10px] font-bold text-teal-200">Paid Today</div>
                </div>
                <CheckCircle2 className="w-8 h-8 text-teal-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
