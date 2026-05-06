'use client';

import { motion } from 'motion/react';
import {
  Target,
  Search,
  Bell,
  TrendingUp,
  Users,
  Mail,
  Phone,
  Star,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flame,
} from 'lucide-react';

export function SalesCRMDashboard() {
  return (
    <div className="bg-[#eef2ff] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-indigo-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">

        {/* Header */}
        <div className="px-4 md:px-10 py-4 md:py-6 border-b border-indigo-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex shrink-0 items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-200">
              A
            </div>
            <div className="min-w-0">
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 truncate">Sales CRM</h2>
              <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mt-0.5">Lead Intelligence Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-3 border border-gray-100 shadow-sm flex-1 md:w-56">
              <Search className="w-4 h-4 text-gray-400 shrink-0" />
              <span className="text-xs text-gray-400">Search customers...</span>
            </div>
            <div className="relative p-2 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer shrink-0">
              <Bell className="w-4 h-4 text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 flex-1">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-8">
            {[
              { label: 'Hot Leads', value: '38', icon: Flame, color: 'text-red-500', bg: 'bg-red-50', trend: '+12 this week' },
              { label: 'Close Rate', value: '18.4%', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+22% vs last month' },
              { label: 'Active Pipeline', value: '$1.2M', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '420 active leads' },
              { label: 'Retention', value: '92%', icon: Users, color: 'text-sky-600', bg: 'bg-sky-50', trend: '+15% improvement' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
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
            {/* Lead Pipeline */}
            <div className="lg:col-span-5 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-600" />
                Lead Pipeline
              </h3>
              <div className="space-y-3">
                {[
                  { stage: 'Hot — Ready to Buy', count: 38, pct: 92, color: 'bg-red-500' },
                  { stage: 'Warm — Engaged', count: 124, pct: 75, color: 'bg-amber-500' },
                  { stage: 'Nurturing', count: 186, pct: 45, color: 'bg-indigo-400' },
                  { stage: 'New This Week', count: 72, pct: 30, color: 'bg-gray-400' },
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-gray-700">{item.stage}</span>
                      <span className="font-black text-gray-900">{item.count}</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity Feed */}
            <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  Recent Activity
                </h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Today</span>
              </div>
              <div className="space-y-3">
                {[
                  { time: '9:15 AM', customer: 'Maria Santos', action: 'Opened trade-in offer email', icon: Mail, tag: 'Hot Lead', tagColor: 'bg-red-50 text-red-600' },
                  { time: '10:02 AM', customer: 'James Wilson', action: 'Called — interested in 2024 RAV4', icon: Phone, tag: 'Appointment Set', tagColor: 'bg-emerald-50 text-emerald-600' },
                  { time: '10:45 AM', customer: 'Sarah Chen', action: 'Visited website — viewed F-150 3x', icon: Target, tag: 'Warm Lead', tagColor: 'bg-amber-50 text-amber-600' },
                  { time: '11:20 AM', customer: 'Robert Kim', action: 'Lease ends in 30 days — auto-offer sent', icon: ArrowRight, tag: 'AI Sent', tagColor: 'bg-indigo-50 text-indigo-600' },
                  { time: '11:55 AM', customer: 'Lisa Johnson', action: 'Service customer — equity positive', icon: Star, tag: 'Service→Sale', tagColor: 'bg-purple-50 text-purple-600' },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl hover:bg-gray-50/80 transition-colors border border-transparent hover:border-gray-100 gap-2"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[10px] font-bold text-gray-400 tabular-nums shrink-0 w-14">{row.time}</span>
                      <div className={`p-1.5 rounded-lg bg-indigo-50 text-indigo-500 shrink-0`}>
                        <row.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-black text-gray-900 truncate">{row.customer}</div>
                        <div className="text-[10px] text-gray-500 truncate">{row.action}</div>
                      </div>
                    </div>
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${row.tagColor} shrink-0 self-start sm:self-auto`}>{row.tag}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="mt-6 bg-indigo-600 rounded-2xl md:rounded-[2rem] p-5 md:p-6 text-white shadow-xl shadow-indigo-200/50 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-2">AI Copilot Recommendation</div>
                <p className="text-sm font-medium leading-relaxed max-w-xl">
                  &quot;12 service customers this week have positive trade equity. Send personalized upgrade offers now — historically 31% convert within 48 hours.&quot;
                </p>
              </div>
              <button className="shrink-0 px-6 py-3 bg-white text-indigo-900 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-indigo-50 transition-colors flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Send Offers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
