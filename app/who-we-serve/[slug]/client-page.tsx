'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { sectorsData } from '@/lib/sectors-data';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Layers,
  ArrowDown
} from 'lucide-react';

export default function SectorDetailPage({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const slug = propSlug || (params?.slug as string) || '';
  const data = sectorsData[slug as keyof typeof sectorsData];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-xl max-w-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sector Not Found</h2>
          <p className="text-gray-500 mb-6">The requested industry sector does not exist or has moved.</p>
          <Link href="/"><Button variant="outline" className="rounded-xl">Go Home</Button></Link>
        </div>
      </div>
    );
  }

  const colorMap: Record<string, { bg: string; bgStrong: string; border: string; text: string; badge: string }> = {
    blue:    { bg: 'bg-blue-50',    bgStrong: 'bg-blue-600',    border: 'border-blue-200',   text: 'text-blue-600',    badge: 'bg-blue-50 text-blue-700 border-blue-200' },
    purple:  { bg: 'bg-purple-50',  bgStrong: 'bg-purple-600',  border: 'border-purple-200', text: 'text-purple-600',  badge: 'bg-purple-50 text-purple-700 border-purple-200' },
    orange:  { bg: 'bg-orange-50',  bgStrong: 'bg-orange-600',  border: 'border-orange-200', text: 'text-orange-600',  badge: 'bg-orange-50 text-orange-700 border-orange-200' },
    emerald: { bg: 'bg-emerald-50', bgStrong: 'bg-emerald-600', border: 'border-emerald-200',text: 'text-emerald-600', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    sky:     { bg: 'bg-sky-50',     bgStrong: 'bg-sky-600',     border: 'border-sky-200',    text: 'text-sky-600',     badge: 'bg-sky-50 text-sky-700 border-sky-200' },
    teal:    { bg: 'bg-teal-50',    bgStrong: 'bg-teal-600',    border: 'border-teal-200',   text: 'text-teal-600',    badge: 'bg-teal-50 text-teal-700 border-teal-200' },
    rose:    { bg: 'bg-rose-50',    bgStrong: 'bg-rose-600',    border: 'border-rose-200',   text: 'text-rose-600',    badge: 'bg-rose-50 text-rose-700 border-rose-200' },
    indigo:  { bg: 'bg-indigo-50',  bgStrong: 'bg-indigo-600',  border: 'border-indigo-200', text: 'text-indigo-600',  badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  };

  const theme = colorMap[data.color] || colorMap.blue;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-950 selection:text-white">
      <Header />
      
      <main className="relative overflow-hidden">

        {/* ══════════════════════════════════════════════════════════════════
            1. SECTOR HERO (SCENIC REAL BACKGROUND IMAGE WITH SOFT SHADE)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center pt-28 sm:pt-32 pb-20 sm:pb-24 overflow-hidden bg-slate-950 text-white">
          
          {/* Full-width Scenic Sector Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={data.heroImage}
              alt={data.title}
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center scale-100"
            />
            {/* Soft, scenic dark overlay so the scene is clearly visible */}
            <div className="absolute inset-0 bg-slate-950/45" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl space-y-6"
            >
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em] leading-[1.08] drop-shadow-md">
                {data.title}
              </h1>

              {/* Short Paragraph */}
              <p className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
                {data.tagline}
              </p>

              {/* Get Quotes Button and Suite Anchor */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href={`/contact-us?module=${slug}`} className="inline-block">
                  <button 
                    type="button"
                    className="relative group overflow-hidden h-12 sm:h-13 px-9 rounded-full bg-white text-slate-950 text-base font-bold border-2 border-white flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    {/* Smooth Black Fill Sweep on Hover */}
                    <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Get Quotes
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </button>
                </Link>

                <a 
                  href="#operating-suite" 
                  className="relative group overflow-hidden h-12 sm:h-13 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white text-base font-bold border-2 border-white/30 hover:border-white backdrop-blur-md flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {/* Smooth White Fill Sweep on Hover */}
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                  <Layers className="relative z-10 w-4 h-4 text-blue-300 transition-colors duration-300 group-hover:text-slate-950" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-950">
                    Explore Operating Suite
                  </span>
                  <ArrowDown className="relative z-10 w-3.5 h-3.5 text-slate-300 transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-slate-950" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            2. THE COMPLETE OPERATING SUITE FOR THIS SECTOR
        ══════════════════════════════════════════════════════════════════ */}
        <section id="operating-suite" className="py-20 sm:py-28 bg-white border-b border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Suite Header */}
            <div className="max-w-4xl mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
                {data.suiteName || `The Complete ${data.title} Operating Suite`}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl">
                {data.suiteTagline || `Every core operational solution unified into a single database architecture—eliminating fragmented apps, third-party connector fees, and duplicate data re-entry.`}
              </p>
            </div>

            {/* Complete Suite Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.solutionsOffered?.map((sol, idx) => (
                <Link
                  key={idx}
                  href={`/solutions/${sol.slug}`}
                  className="group bg-white rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Module Header Bar */}
                    <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200/80">
                          Module {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {sol.tag}
                        </span>
                      </div>
                      <div 
                        className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-slate-950 group-hover:border-slate-300 group-hover:bg-white transition-all shrink-0"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      <h3 className="text-xl sm:text-[22px] font-bold text-slate-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                        {sol.title}
                      </h3>

                      <p className="text-sm text-slate-600 font-normal leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    {/* Deliverables Checklist Inset Box */}
                    <div className="mt-4 p-4 rounded-xl bg-slate-50/80 border border-slate-100 space-y-2.5">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Suite Deliverables
                      </div>
                      <ul className="space-y-2">
                        {sol.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Suite Deployment Architecture Banner - Centered Black Card with Sweep Filling Buttons */}
            <div className="mt-16 sm:mt-20 p-8 sm:p-12 md:p-16 rounded-[28px] sm:rounded-[40px] bg-slate-950 text-white border border-slate-900 shadow-2xl text-center">
              <div className="max-w-3xl mx-auto space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                  Deploy Turnkey or Ingest Modules Side-by-Side
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
                  Choose the complete all-in-one suite to eliminate all fragmented vendors at once, or connect individual DMSPilot modules to your existing systems with zero operational downtime.
                </p>

                <div className="pt-4 flex items-center justify-center">
                  <Link href={`/contact-us?module=${slug}&mode=suite`} className="w-full sm:w-auto">
                    <button 
                      type="button"
                      className="relative group overflow-hidden w-full sm:w-auto h-12 sm:h-13 px-9 rounded-full bg-white text-slate-950 text-sm sm:text-base font-bold border-2 border-white flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer"
                    >
                      {/* Smooth Black Fill Sweep on Hover */}
                      <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Request Suite Pricing
                      </span>
                      <ArrowRight className="relative z-10 w-4 h-4 text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
}
