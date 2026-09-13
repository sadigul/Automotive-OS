'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CustomSolutions() {
  return (
    <section id="custom-solutions" className="py-20 sm:py-28 bg-[#fafbfc] border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Luxury Container */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-slate-950 text-white p-10 sm:p-20 lg:p-24 overflow-hidden">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em] leading-tight mb-6"
            >
              Need a custom system <br className="hidden sm:inline" />
              <span className="text-slate-400">beyond the standard OS?</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12"
            >
              Have a unique requirement? Talk directly with our solutions architects to design and deploy a tailor-made system engineered for your exact operational workflow.
            </motion.p>

            {/* Pure Beautiful Animated Fill Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Link href="/contact-us?module=custom" className="inline-block">
                <button className="relative group overflow-hidden rounded-full px-9 sm:px-12 py-4 sm:py-5 bg-white text-slate-950 font-bold text-base sm:text-lg border-2 border-white transition-all duration-300 flex items-center gap-3">
                  {/* Smooth Black Fill Sweep on Hover */}
                  <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                  {/* Button Content */}
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Let&apos;s Discuss &amp; Craft
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
