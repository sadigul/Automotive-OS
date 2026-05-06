'use client';

import { motion } from 'motion/react';
import {
  PhoneCall,
  Phone,
  MessageSquare,
  Smile,
  Frown,
  Meh,
  TrendingUp,
  Clock,
  Users,
  Headphones,
  Volume2,
} from 'lucide-react';

export function CommCenterDashboard() {
  return (
    <div className="bg-[#eff6ff] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-blue-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">

        {/* Header */}
        <div className="px-4 md:px-10 py-4 md:py-6 border-b border-blue-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex shrink-0 items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">
              A
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">Comm-Center</h2>
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-0.5">Unified Communications Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">8 Active Calls</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 flex-1">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { label: 'Avg Response', value: '2.4 min', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', trend: '-40% faster' },
              { label: 'Satisfaction', value: '8.4/10', icon: Smile, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+1.2 this month' },
              { label: 'Calls → Appts', value: '31%', icon: PhoneCall, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+9% conversion' },
              { label: 'Answer Rate', value: '94%', icon: Headphones, color: 'text-amber-600', bg: 'bg-amber-50', trend: 'Above 90% goal' },
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
            {/* Live Calls Panel */}
            <div className="lg:col-span-5 bg-gray-950 rounded-2xl md:rounded-[2rem] p-5 md:p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Volume2 className="w-24 h-24" />
              </div>
              <h3 className="text-sm font-bold mb-5 flex items-center gap-2 relative z-10">
                <Phone className="w-4 h-4 text-emerald-400" />
                Live Calls Right Now
              </h3>
              <div className="space-y-3 relative z-10">
                {[
                  { agent: 'Maria Santos', dept: 'BDC', duration: '4:32', mood: 'Happy', moodColor: 'text-emerald-400' },
                  { agent: 'James Wilson', dept: 'Service', duration: '2:15', mood: 'Neutral', moodColor: 'text-gray-400' },
                  { agent: 'Sarah Chen', dept: 'Sales', duration: '7:48', mood: 'Happy', moodColor: 'text-emerald-400' },
                  { agent: 'Mike Torres', dept: 'Parts', duration: '1:02', mood: 'Frustrated', moodColor: 'text-red-400' },
                ].map((call, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">{call.agent}</div>
                        <div className="text-[10px] text-gray-400">{call.dept}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-bold ${call.moodColor}`}>{call.mood}</span>
                      <span className="text-xs font-bold text-gray-300 tabular-nums">{call.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400">4 more on hold</span>
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">All Stations Active</span>
              </div>
            </div>

            {/* Customer Mood Analysis */}
            <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Today&apos;s Customer Mood — AI Analysis
                </h3>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">142 conversations</span>
              </div>

              {/* Mood Bars */}
              <div className="space-y-4 mb-6">
                {[
                  { mood: 'Happy', icon: Smile, count: 102, pct: 72, color: 'bg-emerald-500', textColor: 'text-emerald-600' },
                  { mood: 'Neutral', icon: Meh, count: 30, pct: 21, color: 'bg-gray-400', textColor: 'text-gray-500' },
                  { mood: 'Frustrated', icon: Frown, count: 7, pct: 5, color: 'bg-red-500', textColor: 'text-red-600' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <div className="flex items-center gap-2">
                        <item.icon className={`w-4 h-4 ${item.textColor}`} />
                        <span className="font-semibold text-gray-700">{item.mood}</span>
                      </div>
                      <span className="font-black text-gray-900">{item.count} ({item.pct}%)</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Escalations */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-[10px] font-black uppercase tracking-widest text-red-500 mb-3">Escalated — Needs Attention</div>
                <div className="space-y-2">
                  {[
                    { customer: 'David Park', issue: 'Warranty claim rejected — wants manager', channel: 'Phone', time: '11:20 AM' },
                    { customer: 'Karen White', issue: 'Car in service for 5 days — no update', channel: 'WhatsApp', time: '10:45 AM' },
                  ].map((esc, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-red-50/50 rounded-xl border border-red-100 gap-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <Frown className="w-4 h-4 text-red-500 shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-gray-900">{esc.customer}</div>
                          <div className="text-[10px] text-gray-500 truncate">{esc.issue}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 pl-7 sm:pl-0">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{esc.channel}</span>
                        <span className="text-[10px] font-bold text-gray-400">{esc.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team Performance */}
          <div className="mt-6 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              Team Performance — Today
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Maria Santos', calls: 48, rate: '96%', score: '9.1', star: true },
                { name: 'James Wilson', calls: 41, rate: '92%', score: '8.8', star: false },
                { name: 'Sarah Chen', calls: 37, rate: '89%', score: '8.5', star: false },
                { name: 'Mike Torres', calls: 35, rate: '94%', score: '8.2', star: false },
              ].map((agent, i) => (
                <div key={i} className={`p-4 rounded-xl border ${agent.star ? 'border-blue-200 bg-blue-50/50' : 'border-gray-100 bg-gray-50/50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-900">{agent.name}</span>
                    {agent.star && <span className="text-[10px] font-black text-blue-600">⭐ Top</span>}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-sm font-black text-gray-900">{agent.calls}</div>
                      <div className="text-[9px] font-bold text-gray-400">Calls</div>
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-900">{agent.rate}</div>
                      <div className="text-[9px] font-bold text-gray-400">Answer</div>
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-900">{agent.score}</div>
                      <div className="text-[9px] font-bold text-gray-400">Score</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
