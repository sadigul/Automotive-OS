'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      {/* Decorative blurred shapes behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-purple-200/50 via-indigo-200/50 to-sky-200/50 blur-[100px] rounded-full mix-blend-multiply opacity-50 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-950 border border-gray-800 rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
          {/* Subtle noise or dark gradient inside */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-mono text-[9px] font-black uppercase tracking-[0.2em]">
             <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
             Ready_For_Deployment
          </div>

          <h2 className="text-5xl md:text-8xl font-sans font-bold text-white tracking-[-0.05em] mb-10 relative z-10 leading-[0.85] text-balance">
            Dismantle the <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Monopoly</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl mb-14 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Join the revolution. A high-performance, cloud-native ecosystem built for the next 50 years of automotive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <Link href="/request-access" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-16 bg-white hover:bg-gray-100 text-gray-900 rounded-2xl px-12 text-lg font-bold shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95">
                Join Network
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
