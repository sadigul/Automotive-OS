'use client';

import { 
  Map as MapIcon, 
  Search, 
  TrendingUp, 
  Settings,
  Bell,
  Users,
  DollarSign,
  Activity,
  Globe
} from 'lucide-react';

export function EnterpriseAdminPanel() {
  return (
    <div className="bg-[#f0f9ff] rounded-3xl md:rounded-[3rem] p-3 md:p-6 w-full shadow-2xl border border-sky-100 font-sans text-gray-900">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2.5rem] flex flex-col shadow-sm border border-white">
        
        {/* Top Header Section */}
        <div className="px-4 md:px-10 py-4 md:py-6 border-b border-sky-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-sky-600 rounded-xl flex shrink-0 items-center justify-center text-white font-black text-xl shadow-lg shadow-sky-200">
                A
              </div>
              <div className="min-w-0">
                <h2 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 truncate">Enterprise Command Center</h2>
                <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mt-0.5">Global Admin Node</p>
              </div>
           </div>
           
           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
              <div className="bg-white rounded-xl px-4 py-2 flex items-center gap-3 border border-gray-100 shadow-sm w-full sm:w-64">
                 <Search className="w-4 h-4 text-gray-400 shrink-0" />
                 <input type="text" placeholder="Search system-wide..." className="bg-transparent border-none outline-none text-xs w-full text-gray-600" readOnly />
              </div>
              
              <div className="hidden md:flex gap-4 shrink-0">
                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-sky-600 transition-colors cursor-pointer shadow-sm relative">
                   <Bell className="w-4 h-4" />
                   <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-sky-600 transition-colors cursor-pointer shadow-sm">
                   <Settings className="w-4 h-4" />
                </div>
              </div>
           </div>
        </div>

        <div className="p-4 md:p-8 flex-1 flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { label: 'Global Revenue', value: '$8.4M', color: 'text-emerald-600', icon: DollarSign, trend: '+14% YoY', bg: 'bg-emerald-50' },
                { label: 'Supply Chain Delay', value: '1.2h', color: 'text-amber-600', icon: Globe, trend: 'Optimal', bg: 'bg-amber-50' },
                { label: 'Active Personnel', value: '3,412', color: 'text-sky-600', icon: Users, trend: '12 on Leave', bg: 'bg-sky-50' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-sm flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                     <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                        <stat.icon className="w-5 h-5" />
                     </div>
                     <Activity className={`w-4 h-4 ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</div>
                    <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tighter mb-1 sm:mb-2">{stat.value}</div>
                    <div className={`text-[10px] font-bold ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="w-3 h-3" /> {stat.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Inventory Distribution Map & Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              
              <div className="bg-gray-950 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-gray-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                   <MapIcon className="w-24 h-24 text-white" />
                </div>
                <div className="mb-6">
                   <div className="text-sm font-bold text-white mb-1">Logistics Network</div>
                   <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                     Live Sync Active
                   </div>
                </div>
                
                <div className="space-y-4 relative z-10">
                   {[
                     { hub: 'NA-East', items: '124,000', status: 'Healthy', load: '78%' },
                     { hub: 'EMEA-Central', items: '82,400', status: 'Warning', load: '92%' },
                     { hub: 'APAC-South', items: '41,200', status: 'Optimizing', load: '45%' },
                   ].map((hub, i) => (
                     <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div>
                          <div className="text-xs font-bold text-white">{hub.hub}</div>
                          <div className="text-[10px] text-gray-400">{hub.items} active SKUs</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-[10px] font-black uppercase tracking-widest ${hub.status === 'Healthy' ? 'text-emerald-400' : hub.status === 'Warning' ? 'text-amber-400' : 'text-sky-400'}`}>
                            {hub.status}
                          </div>
                          <div className="text-xs font-bold text-gray-300">{hub.load} Load</div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                  <h3 className="text-sm font-bold text-gray-900">Capital Flow</h3>
                  <button className="text-[10px] font-black uppercase tracking-widest text-sky-600 bg-sky-50 px-3 py-1.5 rounded-full">Report</button>
                </div>
                
                <div className="flex-1 flex items-end gap-2 pb-4 pt-8">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end group">
                      <div className="w-full bg-sky-100 rounded-t-md relative transition-all duration-300 group-hover:bg-sky-200" style={{ height: `${h}%` }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-sky-600 rounded-md transition-all duration-500" style={{ height: `${h * 0.7}%` }}></div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          $ {Math.floor(h * 1.8)}M
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2 border-t border-gray-50 pt-2">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-72 shrink-0 space-y-4 sm:space-y-6">
             <div className="bg-sky-600 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-5 md:p-6 text-white shadow-xl shadow-sky-200/50 relative overflow-hidden group">
               <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors"></div>
               <div className="text-[10px] font-black uppercase tracking-widest text-sky-200 mb-6">AI Copilot</div>
               
               <p className="text-sm font-medium leading-relaxed mb-6">
                 &quot;Inventory load in EMEA-Central is nearing capacity. I recommend re-routing new shipments to EMEA-North to optimize supply chain flow.&quot;
               </p>
               
               <button className="w-full py-3 bg-white text-sky-900 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-sky-50 transition-colors">
                 Execute Re-Route
               </button>
             </div>

             <div className="bg-white rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-5 md:p-6 border border-gray-100 shadow-sm">
                <div className="text-sm font-bold text-gray-900 mb-4">Urgent Approvals</div>
                <div className="space-y-4">
                  {[
                    { title: 'Vendor Payout: EuroLog', amount: '$1.2M', dept: 'Finance' },
                    { title: 'New Fleet Acquisition', amount: '$4.8M', dept: 'Operations' }
                  ].map((task, i) => (
                    <div key={i} className="flex flex-col gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100/50">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded uppercase tracking-widest">{task.dept}</span>
                         <span className="text-xs font-black text-gray-900">{task.amount}</span>
                      </div>
                      <div className="text-xs font-medium text-gray-600">{task.title}</div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
