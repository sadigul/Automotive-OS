'use client';

import { Button } from '@/components/ui/button';
import { Terminal } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
  const [showApiPopup, setShowApiPopup] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center">
      {/* Technical Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Background gradient - reduced size and blur for GPU perf */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-100/40 blur-[80px] rounded-full pointer-events-none opacity-50 will-change-transform"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
        
        <div className="flex flex-col items-center gap-6 max-w-4xl animate-[fadeInUp_0.8s_cubic-bezier(0.22,1,0.36,1)_both]">
          {/* Top Badge */}
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 text-xs font-mono font-bold text-purple-700 tracking-wider shadow-sm animate-[fadeInScale_0.5s_0.3s_both]">
            <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2.5 animate-pulse"></span>
            AOS_CORE_V2.0_DEPLOYED
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-[6.5rem] font-sans font-bold tracking-[-0.05em] leading-[0.85] text-gray-900 text-balance">
            The Nervous System <br className="hidden md:block" /> for Automotive
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 max-w-2xl font-medium leading-relaxed px-4 md:px-0">
            High-performance, cloud-native ERP ecosystem connecting your Sales floor to your Service bay—all in one unified stream.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-10 w-full justify-center">
            <Link href="/request-access">
              <Button size="lg" className="h-14 bg-black hover:bg-gray-800 text-white rounded-2xl px-10 text-lg font-bold shadow-2xl hover:-translate-y-1 transition-all">
                Join Network
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 border-gray-200 bg-white hover:bg-gray-50 text-gray-800 rounded-2xl px-10 text-lg font-bold group transition-all"
              onClick={() => setShowApiPopup(true)}
            >
              <Terminal className="w-5 h-5 mr-3 text-purple-600" />
              API Environment
            </Button>
          </div>

          {/* API Popup */}
          {showApiPopup && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowApiPopup(false)}>
              <div className="bg-white rounded-3xl p-10 max-w-md mx-4 shadow-2xl border border-gray-100 text-center" onClick={(e) => e.stopPropagation()}>
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Terminal className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">API Coming Soon</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8">
                  Our engineering team is actively building the public API environment. Stay tuned for developer access and documentation.
                </p>
                <Button 
                  className="h-12 bg-black hover:bg-gray-800 text-white rounded-xl px-8 font-bold"
                  onClick={() => setShowApiPopup(false)}
                >
                  Got It
                </Button>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-10 pt-12 text-xs font-mono font-bold text-gray-400">
            <div className="flex flex-col items-center gap-1">
               <span className="text-gray-900 text-lg">500k+</span> 
               <span className="uppercase tracking-widest text-[9px]">VINs_Processed</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-100 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-1">
               <span className="text-gray-900 text-lg">99.9%</span> 
               <span className="uppercase tracking-widest text-[9px]">System_Uptime</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-100 hidden sm:block"></div>
            <div className="flex flex-col items-center gap-1">
               <span className="text-gray-900 text-lg">4.9/5</span> 
               <span className="uppercase tracking-widest text-[9px]">Partner_Index</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

