'use client';

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    badge: 'Comprehensive Audit',
    description: 'We audit your existing DMS contracts, multi-rooftop inventory feeds, desking workflows, and departmental friction points.',
    highlight: 'Zero showroom disruption',
  },
  {
    number: '02',
    title: 'Plan',
    badge: 'Architecture & Scoping',
    description: 'Our automotive engineers map your historical schemas, configure custom API bridges, and design an airtight cutover timeline.',
    highlight: 'Airtight data security',
  },
  {
    number: '03',
    title: 'Execute',
    badge: 'Parallel Sync & Ingestion',
    description: 'Automated extraction moves all historical deals, parts catalogs, and GL balances while running parallel sync for 100% data fidelity.',
    highlight: '100% verified record transfer',
  },
  {
    number: '04',
    title: 'Scale',
    badge: 'Go-Live & 24/7 Ops',
    description: 'Frictionless switchover to DMSPilot, role-tailored staff onboarding, autonomous AI workflows enabled, and dedicated ongoing support.',
    highlight: 'Continuous white-glove SLA',
  },
];

export function Process() {
  return (
    <section id="process" className="w-full py-16 sm:py-24 bg-white relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left max-w-3xl mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
            A proven transition process built for zero downtime
          </h2>
        </motion.div>

        {/* 4 Clean Steps in a Row — Pure Minimalist Layout, No Fluff, No Box Borders */}
        <div className="relative">
          
          {/* Subtle connecting track line on desktop */}
          <div className="hidden lg:block absolute top-[30px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-10 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col"
              >
                {/* Large Number with Signature Violet Accent Slash */}
                <div className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-none mb-3 sm:mb-4 flex items-baseline">
                  <span className="text-[#6366F1] font-semibold text-2xl sm:text-3xl mr-1 transition-transform duration-300 group-hover:translate-x-0.5">
                    /
                  </span>
                  <span className="transition-colors duration-300 group-hover:text-black">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-2 transition-colors duration-300 group-hover:text-[#6366F1]">
                  {step.title}
                </h3>

                {/* Micro Badge */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-semibold text-[#6366F1] bg-indigo-50/80 px-2.5 py-0.5 rounded-full">
                    {step.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Micro Checkpoint Highlight */}
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11.5px] font-semibold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6366F1] shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clean Bottom Prompt / Action Link */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-18 text-left"
        >
          <Link 
            href="/contact-us?mode=discovery"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-black transition-colors group"
          >
            <span>Ready to explore your dealership transition?</span>
            <span className="text-[#6366F1] font-bold inline-flex items-center gap-1 underline underline-offset-4 group-hover:text-indigo-700 transition-colors">
              Schedule a Discovery Call
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
