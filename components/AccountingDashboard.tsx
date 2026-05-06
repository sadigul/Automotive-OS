'use client';

import { motion } from 'motion/react';
import {
  CheckCircle2,
  TrendingUp,
  DollarSign,
  FileText,
  Building2,
  Clock,
  AlertCircle,
  Landmark,
} from 'lucide-react';

export function AccountingDashboard() {
  return (
    <div className="bg-[#fff1f2] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-rose-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">

        {/* Header */}
        <div className="px-4 md:px-10 py-4 md:py-6 border-b border-rose-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-rose-600 rounded-xl flex shrink-0 items-center justify-center text-white font-black text-xl shadow-lg shadow-rose-200">
              A
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">Auto Accounting</h2>
              <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mt-0.5">Real-Time Books</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">Audit Ready</span>
            </div>
            <span className="text-xs font-bold text-gray-400">May 2026</span>
          </div>
        </div>

        <div className="p-4 md:p-8 flex-1">
          {/* Balance Sheet Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
            {[
              { label: 'Total Assets', value: '$2.4M', change: '+$42k this month', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'Liabilities', value: '$890k', change: '-$18k this month', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
              { label: 'Owner Equity', value: '$1.51M', change: '+$60k net', icon: Landmark, color: 'text-rose-600', bg: 'bg-rose-50' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 shadow-sm group hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</div>
                </div>
                <div className="text-3xl font-black text-gray-900 tracking-tight mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {stat.change}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Bank Reconciliation */}
            <div className="lg:col-span-5 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-rose-600" />
                Bank Reconciliation
              </h3>
              <div className="space-y-3">
                {[
                  { account: 'Checking — Chase', balance: '$142,800', status: 'Matched', matched: true },
                  { account: 'Operating — BofA', balance: '$284,200', status: 'Matched', matched: true },
                  { account: 'Reserve — Wells Fargo', balance: '$520,000', status: 'Matched', matched: true },
                  { account: 'Payroll — ADP', balance: '$89,400', status: 'Matched', matched: true },
                  { account: 'Floorplan — Ally', balance: '$1.2M', status: '2 pending', matched: false },
                ].map((acct, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${acct.matched ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-gray-900 truncate">{acct.account}</div>
                        <div className={`text-[10px] font-bold ${acct.matched ? 'text-emerald-600' : 'text-amber-600'}`}>{acct.status}</div>
                      </div>
                    </div>
                    <span className="text-xs font-black text-gray-900 shrink-0">{acct.balance}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Match Rate</span>
                <span className="text-sm font-black text-emerald-600">98.8%</span>
              </div>
            </div>

            {/* Recent Journal Entries */}
            <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose-600" />
                  Today&apos;s Journal Entries
                </h3>
                <span className="text-xs font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full">48 entries</span>
              </div>
              <div className="space-y-2">
                {[
                  { time: '8:01 AM', entry: 'RO #8842 — Brake Job', debit: 'Parts COGS', credit: 'Parts Inventory', amount: '$485.00', auto: true },
                  { time: '8:45 AM', entry: 'Vehicle Deal #441 — 2024 CR-V', debit: 'Cash', credit: 'Vehicle Revenue', amount: '$32,400', auto: true },
                  { time: '9:12 AM', entry: 'Payroll — Weekly Run', debit: 'Salary Expense', credit: 'Payroll Clearing', amount: '$24,800', auto: true },
                  { time: '10:30 AM', entry: 'Vendor: UniParts — Invoice #2291', debit: 'Parts Inventory', credit: 'Accounts Payable', amount: '$2,140', auto: true },
                  { time: '11:05 AM', entry: 'Bank Fee — Chase', debit: 'Bank Charges', credit: 'Checking', amount: '$35.00', auto: false },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl hover:bg-gray-50/80 transition-colors border border-transparent hover:border-gray-100 gap-2"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[10px] font-bold text-gray-400 tabular-nums shrink-0 w-14">{row.time}</span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-gray-900 truncate">{row.entry}</div>
                        <div className="text-[10px] text-gray-500 truncate">Dr: {row.debit} → Cr: {row.credit}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 pl-[60px] sm:pl-0">
                      {row.auto && (
                        <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Auto</span>
                      )}
                      <span className="text-xs font-black text-gray-900">{row.amount}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Vendor Payouts Due */}
          <div className="mt-6 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                Vendor Payouts Due This Week
              </h3>
              <span className="text-xs font-bold text-gray-400">24 vendors</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { vendor: 'OEM Parts Supplier', amount: '$18,400', due: 'Tomorrow' },
                { vendor: 'Cleaning Service', amount: '$1,200', due: 'Wed' },
                { vendor: 'Marketing Agency', amount: '$4,800', due: 'Thu' },
                { vendor: 'IT Support — Monthly', amount: '$2,400', due: 'Fri' },
              ].map((v, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-xs font-bold text-gray-900 mb-1">{v.vendor}</div>
                  <div className="text-lg font-black text-gray-900">{v.amount}</div>
                  <div className="text-[10px] font-bold text-amber-600 mt-1">Due {v.due}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
