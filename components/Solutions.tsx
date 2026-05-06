'use client';

import Link from 'next/link';
import {
  Wrench,
  Database,
  Target,
  PhoneCall,
  Briefcase,
  ArrowRight,
  BarChart3,
  Calculator,
  Layers,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ─── solution data ─── */
const solutions: {
  title: string;
  sub: string;
  desc: string;
  icon: LucideIcon;
  slug: string;
  color: string;
  metrics: { label: string; value: string }[];
}[] = [
  {
    title: 'Enterprise ERP',
    sub: 'Your whole dealership in one screen',
    desc: 'See everything — inventory, money, people — all in one place. No switching between 10 different programs.',
    icon: Wrench, slug: 'fixed-ops', color: 'orange',
    metrics: [{ label: 'Modules Synced', value: '9' }, { label: 'Time Saved Daily', value: '3h' }],
  },
  {
    title: 'Service & Parts',
    sub: 'Stop losing money on missing parts',
    desc: 'Mechanics scan parts with their phone. No paperwork, no lost parts, no unbilled work. Saves thousands every month.',
    icon: Wrench, slug: 'service-parts', color: 'rose',
    metrics: [{ label: 'Money Saved', value: '$12k/mo' }, { label: 'Lost Parts', value: 'Zero' }],
  },
  {
    title: 'Financial Pulse',
    sub: 'See your money moving in real-time',
    desc: 'Every dollar gets tracked the moment it moves. Partner splits, supplier payments, daily revenue — all automatic.',
    icon: Database, slug: 'erp-finance', color: 'purple',
    metrics: [{ label: 'Daily Revenue', value: 'R$ 142k' }, { label: 'Leakage', value: '$0' }],
  },
  {
    title: 'Sales CRM',
    sub: 'Know who is ready to buy',
    desc: 'Stop cold-calling. The system watches your service drive and tells you exactly which customers are ready to upgrade.',
    icon: Target, slug: 'sales-crm', color: 'indigo',
    metrics: [{ label: 'Close Rate', value: '18.4%' }, { label: 'Hot Leads', value: '420' }],
  },
  {
    title: 'Desking & F&I',
    sub: 'Close deals in minutes, not hours',
    desc: 'Show lease, finance, and cash options side by side. Get bank approvals while the customer is still sitting there.',
    icon: Layers, slug: 'desking-fi', color: 'sky',
    metrics: [{ label: 'Per Deal Profit', value: '+$420' }, { label: 'Deal Time', value: '14 min' }],
  },
  {
    title: 'Auto Accounting',
    sub: 'Your books close themselves every day',
    desc: 'Every repair order, every sale gets booked automatically. No month-end scramble. Always audit-ready.',
    icon: Calculator, slug: 'accounting', color: 'rose',
    metrics: [{ label: 'Audit Ready', value: '100%' }, { label: 'Errors', value: '0.00%' }],
  },
  {
    title: 'Comm-Center',
    sub: 'Every call, text, and message in one place',
    desc: 'Phone, WhatsApp, SMS — all tied to the customer. AI reads the mood of every conversation and flags problems.',
    icon: PhoneCall, slug: 'comm-center', color: 'blue',
    metrics: [{ label: 'Response Time', value: '2.4 min' }, { label: 'Satisfaction', value: '8.4/10' }],
  },
  {
    title: 'Inventory Intelligence',
    sub: 'Know what to buy and when to sell',
    desc: 'AI tells you which cars will sell fast and which ones to wholesale — before they lose value sitting on the lot.',
    icon: BarChart3, slug: 'inventory', color: 'emerald',
    metrics: [{ label: 'Turn Days', value: '28.5' }, { label: 'Profit/Unit', value: '+$312' }],
  },
  {
    title: 'Stagg Portal',
    sub: 'Manage outside teams like they work for you',
    desc: 'Send jobs to partner firms, track their work, and pay them automatically. No phone tag, no spreadsheets.',
    icon: Briefcase, slug: 'stagg-portal', color: 'teal',
    metrics: [{ label: 'Active Firms', value: '12' }, { label: 'Satisfaction', value: '4.9/5' }],
  },
];

/* ─── icon bg color map ─── */
const iconColors: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-600',
  rose: 'bg-rose-100 text-rose-600',
  purple: 'bg-purple-100 text-purple-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  sky: 'bg-sky-100 text-sky-600',
  blue: 'bg-blue-100 text-blue-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  teal: 'bg-teal-100 text-teal-600',
};

const subColors: Record<string, string> = {
  orange: 'text-orange-600',
  rose: 'text-rose-600',
  purple: 'text-purple-600',
  indigo: 'text-indigo-600',
  sky: 'text-sky-600',
  blue: 'text-blue-600',
  emerald: 'text-emerald-600',
  teal: 'text-teal-600',
};

/* ─── component ─── */
export function Solutions() {
  return (
    <section id="solutions" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-bold text-gray-700">9 Modules. One Platform.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-[-0.03em] leading-tight mb-5">
            One system for your<br />entire dealership
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed max-w-lg mx-auto">
            Pick what you need. Everything works together. No IT team required.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {solutions.map((s, idx) => {
            const isDark = idx % 2 === 0;
            const Icon = s.icon;

            return (
              <Link key={idx} href={`/solutions/${s.slug}`} className="block group">
                <div className={`relative h-full rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-950 text-white hover:bg-gray-900'
                    : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}>

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    isDark ? 'bg-white/10' : iconColors[s.color]
                  }`}>
                    <Icon className={`w-5 h-5 ${isDark ? 'text-white' : ''}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-1.5 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {s.title}
                  </h3>

                  {/* Subtitle */}
                  <p className={`text-sm font-semibold mb-3 ${
                    isDark ? 'text-purple-400' : subColors[s.color]
                  }`}>
                    {s.sub}
                  </p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {s.desc}
                  </p>

                  {/* Metric badges */}
                  <div className="flex gap-2.5 mb-6 mt-auto">
                    {s.metrics.map((m, i) => (
                      <div key={i} className={`px-3.5 py-2.5 rounded-xl ${
                        isDark
                          ? 'bg-white/[0.07] border border-white/10'
                          : 'bg-gray-50 border border-gray-200'
                      }`}>
                        <div className={`text-lg sm:text-xl font-black leading-none tracking-tight mb-1 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {m.value}
                        </div>
                        <div className={`text-[10px] font-bold uppercase tracking-wide ${
                          isDark ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-semibold ${
                      isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'
                    } transition-colors`}>
                      See dashboard
                    </span>
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-all ${
                      isDark ? 'text-gray-500 group-hover:text-white' : 'text-gray-400 group-hover:text-gray-900'
                    }`} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
