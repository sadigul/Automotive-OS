'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { solutionsData } from '@/lib/solutions-data';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight,
  CheckCircle2, 
  TrendingUp,
  Zap,
  ArrowRight,
  Home,
} from 'lucide-react';
import { ERPFinancialPulse } from '@/components/ERPFinancialPulse';
import { EnterpriseAdminPanel } from '@/components/EnterpriseAdminPanel';
import { PartsMoneySaver } from '@/components/PartsMoneySaver';
import { SalesCRMDashboard } from '@/components/SalesCRMDashboard';
import { DeskingFIDashboard } from '@/components/DeskingFIDashboard';
import { AccountingDashboard } from '@/components/AccountingDashboard';
import { CommCenterDashboard } from '@/components/CommCenterDashboard';
import { InventoryDashboard } from '@/components/InventoryDashboard';
import { StaggPortalDashboard } from '@/components/StaggPortalDashboard';

export default function SolutionDetailPage({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const slug = propSlug || (params?.slug as string) || '';
  const data = solutionsData[slug as keyof typeof solutionsData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-gray-500 mb-6">This solution doesn&apos;t exist.</p>
          <Link href="/"><Button variant="outline" className="rounded-xl">Go Home</Button></Link>
        </div>
      </div>
    );
  }

  const Icon = data.icon;

  const dashboardMap: Record<string, React.ReactNode> = {
    'service-parts': <PartsMoneySaver />,
    'fixed-ops': <EnterpriseAdminPanel />,
    'erp-finance': <ERPFinancialPulse />,
    'sales-crm': <SalesCRMDashboard />,
    'desking-fi': <DeskingFIDashboard />,
    'accounting': <AccountingDashboard />,
    'comm-center': <CommCenterDashboard />,
    'inventory': <InventoryDashboard />,
    'stagg-portal': <StaggPortalDashboard />,
  };

  const colorMap: Record<string, { bg: string; bgStrong: string; border: string; text: string; gradient: string }> = {
    orange:  { bg: 'bg-orange-50',  bgStrong: 'bg-orange-600',  border: 'border-orange-200', text: 'text-orange-600',  gradient: 'from-orange-500 to-amber-500' },
    purple:  { bg: 'bg-purple-50',  bgStrong: 'bg-purple-600',  border: 'border-purple-200', text: 'text-purple-600',  gradient: 'from-purple-500 to-violet-500' },
    indigo:  { bg: 'bg-indigo-50',  bgStrong: 'bg-indigo-600',  border: 'border-indigo-200', text: 'text-indigo-600',  gradient: 'from-indigo-500 to-blue-500' },
    sky:     { bg: 'bg-sky-50',     bgStrong: 'bg-sky-600',     border: 'border-sky-200',    text: 'text-sky-600',     gradient: 'from-sky-500 to-cyan-500' },
    rose:    { bg: 'bg-rose-50',    bgStrong: 'bg-rose-600',    border: 'border-rose-200',   text: 'text-rose-600',    gradient: 'from-rose-500 to-pink-500' },
    blue:    { bg: 'bg-blue-50',    bgStrong: 'bg-blue-600',    border: 'border-blue-200',   text: 'text-blue-600',    gradient: 'from-blue-500 to-indigo-500' },
    emerald: { bg: 'bg-emerald-50', bgStrong: 'bg-emerald-600', border: 'border-emerald-200',text: 'text-emerald-600', gradient: 'from-emerald-500 to-teal-500' },
    teal:    { bg: 'bg-teal-50',    bgStrong: 'bg-teal-600',    border: 'border-teal-200',   text: 'text-teal-600',    gradient: 'from-teal-500 to-cyan-500' },
  };

  const theme = colorMap[data.color] || colorMap.blue;

  const dashboard = dashboardMap[slug] || null;

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Header />
      
      <main className="relative overflow-hidden">

        {/* ═══════ BREADCRUMB ═══════ */}
        <div className="bg-gray-50/80 border-b border-gray-100 mt-16 sm:mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <nav className="flex items-center gap-1.5 sm:gap-2 text-sm">
              <Link href="/" className="text-gray-400 hover:text-gray-700 transition-colors flex items-center gap-1.5 shrink-0">
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />
              <Link href="/#solutions" className="text-gray-400 hover:text-gray-700 transition-colors shrink-0">
                Solutions
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />
              <span className={`font-semibold ${theme.text} truncate`}>{data.title}</span>
            </nav>
          </div>
        </div>

        {/* ═══════ HERO ═══════ */}
        <section className="relative pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-28">
          <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-[0.03]`} />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Icon + label */}
              <div className="flex items-center gap-4 mb-6 sm:mb-8">
                <div className={`w-14 h-14 rounded-2xl ${theme.bg} border ${theme.border} flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 ${theme.text}`} />
                </div>
                <div className={`px-3 py-1.5 rounded-full ${theme.bg} border ${theme.border}`}>
                  <span className={`text-xs font-bold ${theme.text}`}>AOS Module</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-[-0.03em] leading-[1.05] mb-5">
                {data.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-5 leading-relaxed">
                {data.tagline}
              </p>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
                {data.description}
              </p>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12">
                <Link href={`/request-access?module=${slug}`}>
                  <Button size="lg" className={`w-full sm:w-auto h-13 sm:h-14 rounded-2xl px-8 sm:px-10 text-base font-bold bg-gradient-to-r ${theme.gradient} hover:opacity-90 transition-all shadow-lg text-white border-0`}>
                    Request Access <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/#solutions">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-13 sm:h-14 rounded-2xl px-8 text-base font-semibold border-gray-200 hover:bg-gray-50">
                    See All Modules
                  </Button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {data.analytics.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{stat.value}</div>
                    <div className="text-xs sm:text-sm font-medium text-gray-400 mt-1">{stat.label}</div>
                    <div className="text-xs font-bold text-emerald-600 inline-flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> {stat.trend}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════ LIVE DASHBOARD ═══════ */}
        {dashboard && (
          <section className="pb-20 sm:pb-28">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
                  See It In Action
                </h2>
                <p className="text-gray-400">This is what your dashboard actually looks like.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative group">
                  <div className={`absolute -inset-3 bg-gradient-to-r ${theme.gradient} rounded-[2.5rem] opacity-[0.07] blur-2xl group-hover:opacity-[0.12] transition-opacity duration-700`} />
                  <div className="relative rounded-2xl sm:rounded-3xl border border-gray-100 shadow-2xl bg-white p-2 sm:p-3 overflow-hidden">
                    {dashboard}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ═══════ WHAT YOU GET ═══════ */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.bg} border ${theme.border} mb-5`}>
                <Zap className={`w-4 h-4 ${theme.text}`} />
                <span className={`text-sm font-bold ${theme.text}`}>What You Get</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Simple tools that just work.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
              {data.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-8 h-8 rounded-lg ${theme.bg} border ${theme.border} flex items-center justify-center shrink-0 mt-0.5`}>
                    <CheckCircle2 className={`w-4 h-4 ${theme.text}`} />
                  </div>
                  <p className="text-base font-semibold text-gray-800 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ BOTTOM CTA ═══════ */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden"
            >
              <div className="bg-gray-950 p-10 sm:p-14 md:p-20 text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06)_0%,transparent_50%)]" />
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    Ready to get started?
                  </h2>
                  <p className="text-lg text-gray-400 max-w-md mx-auto mb-10">
                    Works for one store or a hundred. Setup is fast and you keep all your existing data.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href={`/request-access?module=${slug}`}>
                      <Button size="lg" className="h-14 rounded-2xl px-10 text-base font-bold bg-white text-gray-900 hover:bg-gray-100 transition-all">
                        Request Access <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/#solutions">
                      <Button variant="outline" size="lg" className="h-14 rounded-2xl px-8 text-base font-semibold border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                        See All Modules
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
