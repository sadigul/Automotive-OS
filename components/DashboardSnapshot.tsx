'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import {
  LayoutDashboard,
  CarFront,
  Wrench,
  Users,
  LineChart,
  Settings,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  CheckCircle2,
  Clock,
  CircleDollarSign,
  Briefcase,
  ShieldCheck
} from 'lucide-react';

export function DashboardSnapshot() {
  const recentDeals = [
    { customer: "Alex Mercer", vehicle: "2024 Toyota Tacoma TRD", type: "Finance", amount: "$42,500", status: "Approved" },
    { customer: "Sarah Jenkins", vehicle: "2023 Honda CR-V EX-L", type: "Cash", amount: "$31,200", status: "Delivered" },
    { customer: "Michael Chen", vehicle: "2024 Ford F-150 Lariat", type: "Lease", amount: "$58,900", status: "Pending" },
    { customer: "Emma Wilson", vehicle: "2021 BMW 330i xDrive", type: "Finance", amount: "$34,800", status: "Approved" },
  ];

  return (
    <section className="py-24 bg-gray-50 flex flex-col items-center border-t border-gray-200/50">
      <div className="max-w-[1400px] w-full px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-x-8 -top-12 bottom-12 bg-gradient-to-b from-gray-200/50 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
        
        {/* Dashboard Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-2xl md:rounded-[2rem] border border-gray-200/60 bg-white shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row shadow-gray-900/5"
        >
          {/* Sidebar */}
          <div className="hidden lg:flex w-64 bg-gray-50/50 border-r border-gray-100 p-6 flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-10 pl-2">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center shadow-sm">
                  <span className="text-white font-mono font-bold text-sm tracking-tight">D</span>
                </div>
                <span className="font-sans font-bold text-lg tracking-tighter text-gray-900">DMSPilot</span>
              </div>
              <nav className="space-y-1">
                {[
                  { icon: LayoutDashboard, label: "Dashboard", active: true },
                  { icon: CarFront, label: "Sales & Inventory" },
                  { icon: Wrench, label: "Service Bay" },
                  { icon: Users, label: "CRM & Customers" },
                  { icon: LineChart, label: "Reports & P&L" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${item.active ? 'bg-white shadow-sm border border-gray-100 text-purple-600' : 'text-gray-500 hover:bg-gray-100/80 hover:text-gray-900'}`}>
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-100/50 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-200/50 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">Dealer Network</span>
                </div>
                <div className="font-semibold text-gray-900 text-sm relative z-10">Metro Auto Group</div>
                <div className="text-xs text-gray-500 relative z-10">3 active locations</div>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-gray-900 cursor-pointer">
                <Settings className="w-5 h-5" />
                <span className="text-sm font-medium">Settings</span>
              </div>
            </div>
          </div>

          {/* Main Content Pane */}
          <div className="flex-1 flex flex-col min-w-0 bg-white pb-8">
            {/* Topbar */}
            <header className="h-16 px-6 sm:px-8 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-10">
              <div className="flex bg-gray-100/80 px-4 py-2 rounded-full items-center gap-2 w-64 border border-transparent focus-within:border-purple-200 focus-within:bg-white transition-all">
                <Search className="w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search VIN, customer..." className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder:text-gray-400" disabled />
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-400" />
                  <span className="absolute 0 right-0 w-2 h-2 bg-red-400 rounded-full border-2 border-white"></span>
                </div>
                <div className="w-px h-5 bg-gray-200"></div>
                <Image src="https://picsum.photos/seed/dealeradmin/100/100" alt="User" width={32} height={32} className="w-8 h-8 rounded-full border border-gray-200" referrerPolicy="no-referrer" />
              </div>
            </header>

            {/* Dashboard Scrollable Area */}
            <div className="px-6 sm:px-8 pt-8 space-y-8 flex-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Sales Command Center</h1>
                  <p className="text-gray-500 text-sm mt-1">Real-time metrics for October 2026</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all focus:outline-none">Export</button>
                  <button className="px-4 py-2 bg-purple-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-purple-700 shadow-sm shadow-purple-200 transition-all focus:outline-none">New Deal</button>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {[
                  { title: "Gross Profit (MTD)", val: "$424,500", change: "+12.5%", pos: true, icon: CircleDollarSign },
                  { title: "Units Sold", val: "142", change: "+8", pos: true, icon: CarFront },
                  { title: "Avg Front Gross", val: "$3,150", change: "-2.1%", pos: false, icon: LineChart },
                  { title: "Active Leads", val: "284", change: "+45", pos: true, icon: Users },
                ].map((kpi, i) => (
                  <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 flex flex-col justify-between group hover:border-purple-200 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-purple-50 transition-colors">
                        <kpi.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${kpi.pos ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                        {kpi.pos ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {kpi.change}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900 tracking-tight">{kpi.val}</div>
                      <div className="text-sm text-gray-500 font-medium mt-1">{kpi.title}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Area */}
                <div className="lg:col-span-2 bg-white border border-gray-100 shadow-sm rounded-xl p-6 relative overflow-hidden">
                   <div className="flex justify-between items-center mb-8">
                    <h3 className="font-semibold text-gray-900 border-b-2 border-purple-600 pb-1">Revenue Overview</h3>
                    <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
                  </div>
                  {/* Mock Chart */}
                  <div className="h-48 flex items-end justify-between gap-2 px-2">
                    {[30, 45, 25, 60, 50, 75, 40, 65, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="w-full flex flex-col items-center gap-2 group">
                        <div className="w-full relative flex justify-center">
                          {/* Hover Tooltip */}
                          <div className="absolute -top-8 bg-gray-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            ${(h * 1.5).toFixed(1)}k
                          </div>
                          <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                            className={`w-full rounded-t-md max-w-[32px] will-change-[height] ${i === 10 ? 'bg-purple-600' : 'bg-purple-100 group-hover:bg-purple-200 transition-colors'}`} style={{ height: `${h}%` }} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium px-4">
                    <span>Oct 1</span>
                    <span>Oct 15</span>
                    <span>Oct 31</span>
                  </div>
                </div>

                {/* Right Column: Pending Approvals/Tasks */}
                <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-gray-900">Pipeline Status</h3>
                    <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Live</span>
                  </div>
                  <div className="space-y-5">
                    {[
                      { label: "Pending Finance", count: 12, max: 20, color: "bg-blue-500", bg: "bg-blue-100" },
                      { label: "In Detail/Recon", count: 8, max: 20, color: "bg-amber-500", bg: "bg-amber-100" },
                      { label: "Ready for Delivery", count: 4, max: 20, color: "bg-green-500", bg: "bg-green-100" },
                    ].map((pipe, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium text-gray-700">{pipe.label}</span>
                          <span className="font-medium text-gray-900">{pipe.count}</span>
                        </div>
                        <div className={`w-full h-2 rounded-full overflow-hidden ${pipe.bg}`}>
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${(pipe.count / pipe.max) * 100}%` }}
                             viewport={{ once: true }}
                             className={`h-full rounded-full ${pipe.color} will-change-[width]`} 
                           />
                        </div>
                      </div>
                    ))}

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3 p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg">
                        <ShieldCheck className="w-8 h-8 text-indigo-600 p-1.5 bg-white rounded-md shadow-sm" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Compliance Audit</div>
                          <div className="text-xs text-gray-500">All deals passed OFAC</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden mt-8 hidden md:block">
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="font-semibold text-gray-900">Recent Deals</h3>
                  <div className="text-sm text-purple-600 font-medium cursor-pointer hover:text-purple-700">View All</div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-white text-gray-500 font-medium border-b border-gray-100">
                      <tr>
                        <th className="px-6 py-4 font-medium">Customer</th>
                        <th className="px-6 py-4 font-medium">Vehicle</th>
                        <th className="px-6 py-4 font-medium">Structure</th>
                        <th className="px-6 py-4 font-medium">Amount</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {recentDeals.map((deal, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{deal.customer}</td>
                          <td className="px-6 py-4 text-gray-600">{deal.vehicle}</td>
                          <td className="px-6 py-4 text-gray-600">{deal.type}</td>
                          <td className="px-6 py-4 font-mono font-medium text-gray-900">{deal.amount}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                              deal.status === 'Approved' ? 'bg-blue-50 text-blue-700' :
                              deal.status === 'Delivered' ? 'bg-green-50 text-green-700' :
                              'bg-amber-50 text-amber-700'
                            }`}>
                              {deal.status === 'Approved' ? <CheckCircle2 className="w-3 h-3" /> :
                               deal.status === 'Delivered' ? <CarFront className="w-3 h-3" /> :
                               <Clock className="w-3 h-3" />}
                              {deal.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
