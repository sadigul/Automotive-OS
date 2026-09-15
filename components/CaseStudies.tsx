'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Quote, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  id: string;
  client: string;
  category: 'Enterprise Group' | 'Fixed Ops & Service' | 'Sales & Digital Retail';
  rooftops: string;
  legacySystem: string;
  headline: string;
  summary: string;
  results: { metric: string; label: string; sub: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
  deployedSolutions: string[];
  transformationDetails: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'metro-automotive-group',
    client: 'Metro Premier Automotive Group',
    category: 'Enterprise Group',
    rooftops: '14 Rooftops (Dallas & Houston)',
    legacySystem: 'CDK Global & Legacy Green-Screen Terminal',
    headline: 'Slashing Deal Desking Time by 74% and Auto-Closing $42M in Monthly Ledgers',
    summary: 'Metro Automotive Group was crippled by fragmented rooftops, slow desking negotiations, and a 5-day month-end accounting scramble across 14 stores.',
    results: [
      { metric: '14 Mins', label: 'Average Deal Close Time', sub: 'Down from 4.2 hours' },
      { metric: '+$420', label: 'Front-End Gross / Unit', sub: 'Penny-perfect desking' },
      { metric: '$240k/yr', label: 'Vendor Cost Reduction', sub: 'Zero integration taxes' },
    ],
    quote: {
      text: 'Our sales desks now structure transparent quotes in under 15 minutes. Best of all, our general ledgers balance automatically every night with zero human error.',
      author: 'David Chen',
      role: 'Chief Operating Officer, Metro Premier Auto',
      avatar: 'https://picsum.photos/seed/david/100/100',
    },
    deployedSolutions: ['Enterprise ERP', 'Digital Retail', 'DMS Cloud OS'],
    transformationDetails: [
      'Replaced 14 disconnected CDK servers with a single real-time multi-tenant cloud ledger.',
      'Unified trade-in appraisals, payoff lookups, and lender submissions into a single 15-minute desk flow.',
      'Cut accounting month-end close from 5 full business days to automated nightly reconciliation.',
    ],
  },
  {
    id: 'summit-motors-service',
    client: 'Summit Auto Group & Collision Centers',
    category: 'Fixed Ops & Service',
    rooftops: '6 Dealerships + 3 Master Collision Centers',
    legacySystem: 'Reynolds & Reynolds (ERA-IGNITE) + Paper MPI',
    headline: 'Zero Lost Parts Leakage and a 42% Surge in Service Bay Throughput',
    summary: 'Summit was leaking over $14,000 monthly in untracked parts and lost technician labor due to paper multi-point inspection sheets and manual parts counter billing.',
    results: [
      { metric: '$0.00', label: 'Parts Inventory Leakage', sub: 'Zero unbilled components' },
      { metric: '+42%', label: 'Daily Service Bay ROs', sub: 'Automated dispatching' },
      { metric: '78%', label: 'Mobile MPI Customer Approvals', sub: 'Direct SMS video approvals' },
    ],
    quote: {
      text: 'Technicians scan parts instantly with their phones and customers approve repairs via SMS video. We have permanently eliminated parts leakage and friction.',
      author: 'Sarah Jenkins',
      role: 'VP of Fixed Operations, Summit Auto Group',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
    },
    deployedSolutions: ['Service Bay', 'Parts & Inventory', 'Enterprise ERP'],
    transformationDetails: [
      'Equipped 68 technicians with smartphone mobile MPI & barcode scanner apps.',
      'Automated customer SMS video quote approvals with instant digital signature authorization.',
      'Eliminated parts counter lines with real-time automated stockroom inventory debits.',
    ],
  },
  {
    id: 'vanguard-digital-retail',
    client: 'Vanguard Motor Holdings',
    category: 'Sales & Digital Retail',
    rooftops: '8 Rooftops (Southern California)',
    legacySystem: 'Dealertrack + 4 Separate Third-Party Add-on Tools',
    headline: 'Tripling Online-to-Showroom Conversion with Sub-50ms Deal Synchronization',
    summary: 'Vanguard struggled with pricing discrepancies between online digital retail widgets and showroom CRM calculations, causing deal drop-offs and customer distrust.',
    results: [
      { metric: '3.2x', label: 'Online-to-Showroom Conversion', sub: 'Penny-perfect parity' },
      { metric: '24.8%', label: 'Showroom Lead Close Rate', sub: 'Up from 12.1%' },
      { metric: '98.6%', label: 'Customer CSAT Score', sub: '15-min delivery experience' },
    ],
    quote: {
      text: 'Customers build their exact finance structure online, walk into our showroom, and sign the exact same penny-perfect numbers in 10 minutes.',
      author: 'Carlos Rodriguez',
      role: 'Managing Partner, Vanguard Motor Holdings',
      avatar: 'https://picsum.photos/seed/carlos/100/100',
    },
    deployedSolutions: ['Digital Retail', 'Sales CRM', 'DMS Cloud OS'],
    transformationDetails: [
      'Synchronized digital showroom pricing directly with lender rate matrices and OEM incentives.',
      'Integrated live F&I contract desking with instantaneous e-signature capability.',
      'Unified all 8 store customer profiles into a single global equity-mining database.',
    ],
  },
];

const categories = ['All Case Studies', 'Enterprise Group', 'Fixed Ops & Service', 'Sales & Digital Retail'] as const;

export function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState<string>('All Case Studies');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = activeCategory === 'All Case Studies'
    ? caseStudies
    : caseStudies.filter(s => s.category === activeCategory);

  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Dealership Outcomes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
              Real dealership groups. Measurable ROI.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Discover how dealer principals, GMs, and fixed ops directors dismantled legacy tech and scaled profitability.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white '
                    : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedStudy(study)}
              className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 hover:border-orange-200 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                    {study.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {study.rooftops}
                  </span>
                </div>

                {/* Client Name & Headline */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug tracking-tight mb-3">
                  {study.headline}
                </h3>

                <p className="text-xs font-semibold text-slate-500 mb-6">
                  Replaced: <span className="text-slate-700 font-bold">{study.legacySystem}</span>
                </p>

                {/* Big Metric Box */}
                <div className="grid grid-cols-3 gap-2.5 bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6">
                  {study.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Snippet */}
                <div className="relative pl-4 border-l-2 border-orange-400 italic text-xs text-slate-600 mb-6">
                  &ldquo;{study.quote.text.slice(0, 110)}...&rdquo;
                </div>
              </div>

              {/* Author & CTA */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative bg-slate-200">
                    <Image
                      src={study.quote.avatar}
                      alt={study.quote.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{study.quote.author}</div>
                    <div className="text-[10px] text-slate-400">{study.quote.role}</div>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  View Story <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Full Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 sm:p-10 relative"
            >
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                  {selectedStudy.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">• {selectedStudy.rooftops}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-2">
                {selectedStudy.headline}
              </h2>

              <p className="text-xs text-slate-500 font-medium mb-6">
                Customer: <span className="font-bold text-slate-800">{selectedStudy.client}</span> · Replaced <span className="font-bold text-slate-800">{selectedStudy.legacySystem}</span>
              </p>

              {/* 3 Result Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 rounded-2xl p-5 border border-slate-200/80 mb-8">
                {selectedStudy.results.map((res, i) => (
                  <div key={i} className="text-center p-2">
                    <div className="text-2xl font-extrabold text-slate-900">{res.metric}</div>
                    <div className="text-xs font-bold text-slate-700 mt-1">{res.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{res.sub}</div>
                  </div>
                ))}
              </div>

              {/* Transformation Highlights */}
              <div className="space-y-4 mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Key Transformation Points
                </h4>
                <div className="space-y-2.5">
                  {selectedStudy.transformationDetails.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-orange-50/60 rounded-2xl p-6 border border-orange-100 mb-8 flex items-start gap-4">
                <Quote className="w-8 h-8 text-orange-400 shrink-0" />
                <div>
                  <p className="text-sm sm:text-base text-slate-800 italic leading-relaxed mb-4">
                    &ldquo;{selectedStudy.quote.text}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-slate-900">{selectedStudy.quote.author}</div>
                  <div className="text-[11px] text-slate-500">{selectedStudy.quote.role}</div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
