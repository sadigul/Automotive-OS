'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Terminal, Cpu, Code2, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CustomSolutions() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3.5rem] bg-gray-950 p-12 md:p-24 overflow-hidden border border-gray-800">
          {/* Technical Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-bold mb-8"
              >
                <Code2 className="w-4 h-4" />
                Bespoke Engineering
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight leading-tight mb-8">
                Need a custom system <br /> <span className="text-gray-500">beyond the standard OS?</span>
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-xl mb-12">
                If our standard modules don&apos;t perfectly fit your unique workflow, our engineering team can architect and deploy custom-built ecosystems tailored specifically to your dealership&apos;s operation.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Cpu, label: 'Proprietary Logic Integration' },
                  { icon: Terminal, label: 'Custom Enterprise APIs' },
                  { icon: Sparkles, label: 'Unique UI/UX Workflows' },
                  { icon: Code2, label: 'Specialized Data Pipelines' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href="/request-access">
                <Button className="h-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full px-10 text-lg font-bold shadow-[0_0_40px_rgba(79,70,229,0.2)] transition-all flex items-center gap-2">
                  Launch Design Request <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              {/* Abstract Visual Representation of a Custom System */}
              <div className="relative aspect-square max-w-md mx-auto">
                 <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>
                 
                 <div className="relative h-full w-full bg-gray-900 rounded-[2rem] border border-gray-800 p-8 shadow-2xl">
                    {/* Mock Code Interface */}
                    <div className="flex gap-1.5 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                    </div>
                    <div className="space-y-4">
                       <div className="h-2 w-3/4 bg-gray-800 rounded"></div>
                       <div className="h-2 w-1/2 bg-gray-800 rounded"></div>
                       <div className="flex gap-4">
                         <div className="h-2 w-1/3 bg-indigo-500/50 rounded"></div>
                         <div className="h-2 w-1/4 bg-purple-500/50 rounded"></div>
                       </div>
                       <div className="h-40 bg-gray-950 rounded-xl border border-gray-800 mt-8 flex flex-col items-center justify-center text-indigo-500 font-mono text-xs overflow-hidden px-4 text-center">
                          <code className="opacity-50"># Initiating custom_module.design</code>
                          <code className="text-indigo-400 mt-2 font-bold">{`{ workflow: "Bespoke", integration: "Deep" }`}</code>
                       </div>
                       <div className="grid grid-cols-2 gap-4 mt-4">
                          <div className="h-10 bg-gray-800/50 rounded-lg border border-gray-700"></div>
                          <div className="h-10 bg-indigo-600/10 rounded-lg border border-indigo-500/20"></div>
                       </div>
                    </div>
                 </div>

                 {/* Floating Badges */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-6 -right-6 bg-white py-3 px-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 z-20"
                 >
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-black tracking-widest text-gray-400">Status</div>
                      <div className="text-xs font-bold text-gray-900">Custom Built</div>
                    </div>
                 </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
