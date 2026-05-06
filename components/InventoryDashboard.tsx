'use client';

import { motion } from 'motion/react';
import {
  BarChart3,
  Car,
  TrendingUp,
  TrendingDown,
  Clock,
  DollarSign,
  AlertTriangle,
  MapPin,
  Tag,
  ShoppingCart,
} from 'lucide-react';

export function InventoryDashboard() {
  return (
    <div className="bg-[#ecfdf5] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-emerald-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">

        {/* Header */}
        <div className="px-4 md:px-10 py-4 md:py-6 border-b border-emerald-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex shrink-0 items-center justify-center text-white font-black text-xl shadow-lg shadow-emerald-200">
              A
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">Inventory Intelligence</h2>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-0.5">Smart Stock Manager</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">153 Total Units</span>
          </div>
        </div>

        <div className="p-4 md:p-8 flex-1">
          {/* Top KPI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {[
              { label: 'Avg Turn Days', value: '28.5', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '-5.2 days faster' },
              { label: 'Profit / Unit', value: '+$312', icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+12% vs last month' },
              { label: 'Aging Risk', value: '4%', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50', trend: '-8% improvement' },
              { label: 'Supply Index', value: '1.04', icon: BarChart3, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: 'Balanced market' },
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
            {/* Lot Age Breakdown */}
            <div className="lg:col-span-5 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Lot Age Breakdown
              </h3>
              <div className="space-y-4">
                {[
                  { range: 'Under 30 Days', count: 89, pct: 58, color: 'bg-emerald-500' },
                  { range: '30–45 Days', count: 42, pct: 27, color: 'bg-amber-400' },
                  { range: '45–60 Days', count: 16, pct: 11, color: 'bg-orange-500' },
                  { range: 'Over 60 Days', count: 6, pct: 4, color: 'bg-red-500' },
                ].map((bucket, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="font-semibold text-gray-700">{bucket.range}</span>
                      <span className="font-black text-gray-900">{bucket.count} units ({bucket.pct}%)</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${bucket.pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className={`h-full rounded-full ${bucket.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Aging Alert */}
              <div className="mt-5 p-3 bg-red-50 rounded-xl border border-red-100">
                <div className="flex items-center gap-2 text-xs font-bold text-red-700 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> 6 Units Over 60 Days
                </div>
                <p className="text-[10px] text-red-600">AI recommends sending 4 to wholesale and repricing 2 units this week.</p>
              </div>
            </div>

            {/* Market Demand & Buy Recs */}
            <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Tag className="w-4 h-4 text-emerald-600" />
                Market Demand — Your Area
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  { segment: 'SUVs', demand: 'High', score: 92, trend: 'up', price: 'Avg $38k' },
                  { segment: 'Trucks', demand: 'Strong', score: 84, trend: 'up', price: 'Avg $44k' },
                  { segment: 'EVs', demand: 'Growing', score: 71, trend: 'up', price: 'Avg $42k' },
                  { segment: 'Sedans', demand: 'Moderate', score: 56, trend: 'down', price: 'Avg $28k' },
                ].map((seg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50/80 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Car className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-gray-900">{seg.segment}</div>
                        <div className="text-[10px] text-gray-500">{seg.demand} Demand • {seg.price}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden hidden sm:block">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${seg.score}%` }}
                          transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                          className="h-full rounded-full bg-emerald-500"
                        />
                      </div>
                      {seg.trend === 'up' ? (
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <TrendingDown className="w-3.5 h-3.5 text-amber-600" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* AI Buy Recommendations */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-3">
                  <ShoppingCart className="w-3.5 h-3.5" /> AI Says: Buy These Next
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { car: '2024 Toyota RAV4 XLE', price: '$28,400', days: '~18 day turn' },
                    { car: '2024 Ford F-150 XLT', price: '$42,200', days: '~22 day turn' },
                    { car: '2023 Honda CR-V EX', price: '$31,100', days: '~20 day turn' },
                    { car: '2024 Toyota Camry SE', price: '$27,800', days: '~25 day turn' },
                  ].map((rec, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-gray-900 truncate">{rec.car}</div>
                        <div className="text-[10px] text-emerald-600">{rec.days}</div>
                      </div>
                      <span className="text-xs font-black text-gray-900 shrink-0 ml-2">{rec.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
