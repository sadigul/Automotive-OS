'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-950 rounded-[36px] sm:rounded-[48px] p-10 sm:p-20 lg:p-24 text-center relative overflow-hidden">
          
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-5 relative z-10 leading-[1.2]">
            Dismantle the <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white">
              Monopoly
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed font-normal">
            Join modern dealerships worldwide. A high-performance, cloud-native ecosystem built for the next 50 years of automotive retail.
          </p>

          {/* Action CTA Button with Signature Sweep Fill Animation */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <Link href="/contact-us" className="w-full sm:w-auto">
              <button className="relative group overflow-hidden w-full sm:w-auto h-14 px-10 rounded-full bg-white text-slate-950 text-base font-bold border-2 border-white flex items-center justify-center gap-2.5 transition-all duration-300">
                {/* Smooth Black Fill Sweep on Hover */}
                <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Contact Us
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
