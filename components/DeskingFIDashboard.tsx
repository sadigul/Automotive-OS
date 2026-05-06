'use client';

import { motion } from 'motion/react';
import {
  Layers,
  CheckCircle2,
  Shield,
  FileText,
  CreditCard,
  Clock,
  Building2,
} from 'lucide-react';

export function DeskingFIDashboard() {
  return (
    <div className="bg-[#f0f9ff] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-sky-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">

        {/* Header */}
        <div className="px-4 md:px-10 py-4 md:py-6 border-b border-sky-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex shrink-0 items-center justify-center text-white font-black text-xl shadow-lg shadow-sky-200">
              A
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">Desking &amp; F&amp;I</h2>
              <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mt-0.5">Deal Structuring Console</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Live Deal</span>
            </div>
            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">Customer: Michael Torres</span>
          </div>
        </div>

        <div className="p-4 md:p-8 flex-1">
          {/* Current Deal — Payment Comparison */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-sky-600" />
              Payment Options — 2024 Honda CR-V EX
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { type: 'Lease', monthly: '$389', term: '36 mo / 12k mi', down: '$2,000 down', rate: '3.9% MF', highlight: false, bank: 'Ally Financial' },
                { type: 'Finance', monthly: '$512', term: '72 mo', down: '$3,000 down', rate: '5.49% APR', highlight: true, bank: 'Capital One' },
                { type: 'Cash', monthly: '$32,400', term: 'One-time', down: 'No financing', rate: '$1,200 off', highlight: false, bank: 'Direct Purchase' },
              ].map((opt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12 }}
                  className={`p-5 sm:p-6 rounded-2xl border-2 relative ${opt.highlight ? 'border-sky-500 bg-sky-50/50 shadow-lg shadow-sky-100' : 'border-gray-100 bg-white'}`}
                >
                  {opt.highlight && (
                    <div className="absolute -top-3 left-4 px-3 py-0.5 bg-sky-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Best Match</div>
                  )}
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">{opt.type}</div>
                  <div className="text-3xl font-black text-gray-900 tracking-tight mb-1">{opt.monthly}<span className="text-sm font-bold text-gray-400">{opt.type !== 'Cash' ? '/mo' : ''}</span></div>
                  <div className="text-xs text-gray-500 mb-4 space-y-1">
                    <div>{opt.term}</div>
                    <div>{opt.down}</div>
                    <div className="font-bold text-sky-600">{opt.rate}</div>
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 flex items-center gap-1.5 pt-3 border-t border-gray-100">
                    <Building2 className="w-3 h-3" /> {opt.bank}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lender Approvals */}
            <div className="lg:col-span-5 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-600" />
                Lender Status
              </h3>
              <div className="space-y-3">
                {[
                  { bank: 'Capital One', status: 'Approved', rate: '5.49%', color: 'text-emerald-600', bg: 'bg-emerald-50', icon: CheckCircle2 },
                  { bank: 'Chase Auto', status: 'Approved', rate: '5.74%', color: 'text-emerald-600', bg: 'bg-emerald-50', icon: CheckCircle2 },
                  { bank: 'Ally Financial', status: 'Approved', rate: '3.9% MF', color: 'text-emerald-600', bg: 'bg-emerald-50', icon: CheckCircle2 },
                  { bank: 'Wells Fargo', status: 'Pending', rate: '—', color: 'text-amber-600', bg: 'bg-amber-50', icon: Clock },
                  { bank: 'US Bank', status: 'Declined', rate: '—', color: 'text-gray-400', bg: 'bg-gray-50', icon: Shield },
                ].map((lender, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg ${lender.bg} ${lender.color}`}>
                        <lender.icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">{lender.bank}</div>
                        <div className={`text-[10px] font-bold ${lender.color}`}>{lender.status}</div>
                      </div>
                    </div>
                    <span className="text-xs font-black text-gray-900">{lender.rate}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* F&I Products */}
            <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600" />
                  F&amp;I Products
                </h3>
                <div className="text-xs font-black text-sky-600">
                  +$1,680 <span className="text-gray-400 font-bold">added to deal</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { product: 'Extended Warranty — 5yr/100k', price: '$1,200', sold: true, penetration: '68%' },
                  { product: 'GAP Insurance', price: '$480', sold: true, penetration: '42%' },
                  { product: 'Paint & Fabric Protection', price: '$399', sold: false, penetration: '31%' },
                  { product: 'Tire & Wheel Coverage', price: '$349', sold: false, penetration: '24%' },
                  { product: 'Maintenance Package — 3yr', price: '$599', sold: false, penetration: '19%' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-xl border ${item.sold ? 'border-sky-200 bg-sky-50/50' : 'border-gray-100 bg-white'} transition-colors`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${item.sold ? 'bg-sky-600 text-white' : 'border-2 border-gray-200'}`}>
                        {item.sold && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs font-semibold truncate ${item.sold ? 'text-gray-900' : 'text-gray-500'}`}>{item.product}</span>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-[10px] font-bold text-gray-400">{item.penetration} pen.</span>
                      <span className="text-xs font-black text-gray-900">{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Compliance Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-emerald-50 rounded-2xl p-4 sm:p-5 border border-emerald-100 gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-emerald-800">Compliance Check — All Passed</div>
                <div className="text-[10px] text-emerald-600">Red Flags, TILA, Privacy Notice, Risk-Based Pricing — ✓ Complete</div>
              </div>
            </div>
            <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-colors flex items-center gap-2 justify-center">
              <FileText className="w-4 h-4" /> E-Sign Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
