'use client';

import { 
  AlertCircle, 
  ArrowRight,
  Box,
  Zap,
  Search,
  CheckCircle2,
  DollarSign,
  QrCode,
  Map as MapIcon
} from 'lucide-react';

export function PartsMoneySaver() {
  return (
    <div className="bg-[#fff5f5] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-rose-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">
        
        {/* Top Header Section */}
        <div className="px-4 md:px-10 py-4 md:py-8 border-b border-rose-50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
           <div className="min-w-0">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 truncate">Service &amp; Parts <span className="text-rose-500">Money Saver</span></h2>
              <p className="text-sm font-bold text-gray-500 mt-1">Smart system that stops your dealership from losing money on lost or old parts.</p>
           </div>
           <div className="hidden lg:flex gap-4 shrink-0">
              <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-3 border border-gray-100 shadow-sm w-full">
                 <Search className="w-4 h-4 text-gray-400 shrink-0" />
                 <span className="text-xs font-medium text-gray-400 truncate">Find any part instantly...</span>
              </div>
           </div>
        </div>

        <div className="p-4 md:p-10 flex-1">
          {/* Easy-to-understand Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Money Lost to Old Inventory */}
            <div className="bg-white p-6 rounded-[2rem] border border-rose-100 shadow-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rose-50 rounded-lg text-rose-500 shadow-sm">
                     <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-black text-rose-600">Old Parts Wasting Money</div>
               </div>
               <div className="text-4xl font-black text-gray-900 tracking-tighter mb-2">$4,210</div>
               <p className="text-xs font-medium text-gray-500 leading-relaxed">
                 You have 18 items sitting in the back for over 90 days. We should return or discount them before they lose more value.
               </p>
               
               {/* Red Glow Effect */}
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-rose-400/20 blur-3xl rounded-full pointer-events-none"></div>
            </div>

            {/* Out of Stock Warning */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-between">
               <div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-amber-50 rounded-lg text-amber-500 shadow-sm">
                        <Zap className="w-6 h-6" />
                     </div>
                     <div className="text-sm font-black text-amber-600">Missing Parts Alert</div>
                  </div>
                  <div className="text-4xl font-black text-gray-900 tracking-tighter mb-2">8 Errors</div>
                  <p className="text-xs font-medium text-gray-500 leading-relaxed">
                     You have mechanic appointments tomorrow, but 8 necessary parts are out of stock. Order them now!
                  </p>
               </div>
               <button className="mt-4 flex items-center justify-center gap-2 bg-amber-500 text-white px-4 py-3 rounded-xl text-xs font-bold shadow-md hover:bg-amber-600 transition-colors">
                  Order Missing Parts <ArrowRight className="w-4 h-4" />
               </button>
            </div>

            {/* Savings Opportunity */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-between">
               <div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500 shadow-sm">
                        <DollarSign className="w-6 h-6" />
                     </div>
                     <div className="text-sm font-black text-emerald-600">Smart Buy Savings</div>
                  </div>
                  <div className="text-4xl font-black text-gray-900 tracking-tighter mb-2">Save $340</div>
                  <p className="text-xs font-medium text-gray-500 leading-relaxed mb-4">
                     Our AI found a cheaper supplier for Spark Plugs this week. Switch orders to &quot;EuroLog&quot; to save money automatically.
                  </p>
               </div>
               <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl flex items-center justify-between text-xs font-bold border border-emerald-100">
                  <span>Switch Supplier?</span>
                  <CheckCircle2 className="w-5 h-5" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visual Phone App - Scan mechanics */}
            <div className="bg-white rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 relative overflow-hidden">
               <div className="shrink-0 w-32 aspect-[9/19] bg-gray-950 rounded-3xl border-4 border-gray-900 shadow-2xl overflow-hidden flex flex-col relative">
                  <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
                  <div className="flex-1 flex items-center justify-center">
                     <QrCode className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] top-1/2 -translate-y-1/2"></div>
               </div>
               <div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">Stop Mechanics from Losing Parts</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Instead of scribbling on job cards, mechanics just scan the part with their phone. The system automatically bills the customer. Zero paperwork, zero lost parts.
                  </p>
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" />
                     </div>
                     <span className="text-sm font-bold text-gray-700">100% Billing Accuracy</span>
                  </div>
               </div>
            </div>

            {/* Where is my part? Map */}
            <div className="bg-gray-900 rounded-[2.5rem] border border-gray-800 shadow-xl p-8 relative overflow-hidden text-white flex flex-col justify-center">
               <div className="absolute top-4 right-4 opacity-10">
                  <MapIcon className="w-32 h-32" />
               </div>
               <h3 className="text-lg font-black mb-2 relative z-10">Visual Warehouse Layout</h3>
               <p className="text-sm text-gray-400 leading-relaxed mb-8 relative z-10 max-w-sm">
                 Tired of searching for parts? Our system creates a map of your storage. It highlights exactly which shelf the part is sitting on so anyone can find it in seconds.
               </p>
               
               <div className="grid grid-cols-6 gap-2 w-full max-w-xs relative z-10">
                 {Array.from({ length: 18 }).map((_, i) => (
                   <div 
                     key={i} 
                     className={`aspect-square rounded-lg flex items-center justify-center ${i === 8 ? 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] border-rose-400' : 'bg-gray-800 border-gray-700'} border`}
                   >
                     {i === 8 && <Box className="w-4 h-4 text-white animate-bounce" />}
                   </div>
                 ))}
               </div>
               <div className="mt-4 flex items-center gap-2 relative z-10">
                  <span className="text-xs font-bold text-rose-400">Shelf B-4: Brake Pads Found!</span>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

