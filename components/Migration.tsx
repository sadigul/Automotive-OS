'use client';

import { motion } from 'motion/react';
import { 
  Database, 
  Users, 
  CarFront, 
  History, 
  FileCheck, 
  ReplaceAll,
  Zap,
  ShieldCheck,
  Server,
  Cpu
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function Migration() {
  const containerRef = useRef(null);
  
  const steps = [
    {
      icon: Database,
      title: 'Legacy Ingestion',
      description: 'Zero-latency extraction from existing DMS/CRM systems including old SQL backups or raw logs.',
      colorClass: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: Cpu,
      title: 'Parallel Normalization',
      description: 'Distributed compute engines map disparate data schemas into the DMSPilot standard in seconds.',
      colorClass: 'bg-purple-500/10 text-purple-500'
    },
    {
      icon: ShieldCheck,
      title: 'Integrity Verification',
      description: 'Every record passes cross-reference validation ensuring bit-perfect historical accuracy.',
      colorClass: 'bg-emerald-500/10 text-emerald-500'
    }
  ];

  const dataPoints = [
    { label: 'Customers', status: 'Verified', icon: Users },
    { label: 'Inventory', status: 'Mapped', icon: CarFront },
    { label: 'History', status: 'Streaming', icon: History },
  ];

  const [records, setRecords] = useState(48290);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [logs, setLogs] = useState<string[]>([
    'Initializing secure bridge...',
    'Found legacy SQL instance at 172.0.0.1',
    'Ingesting customer records...',
  ]);

  useEffect(() => {
    const recordInterval = setInterval(() => {
      setRecords(prev => prev + Math.floor(Math.random() * 5));
    }, 100);

    const logMessages = [
      'Normalizing UUID schema...',
      'Mapping vehicle history logs...',
      'Verifying RO integrity...',
      'Streaming to DMSPilot cloud...',
      'Validating record checksum...',
      'Indexing search cache...',
    ];

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);
    setCurrentTime(new Date().toLocaleTimeString('en-GB'));

    const logInterval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, logMessages[Math.floor(Math.random() * logMessages.length)]];
        return next.slice(-4);
      });
    }, 2000);

    return () => {
      clearInterval(recordInterval);
      clearInterval(timeInterval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <section 
      id="migration" 
      ref={containerRef}
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-8"
            >
              <Zap className="w-3 h-3 fill-current" />
              Advanced Data Bridge
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-gray-900 tracking-tight leading-[1.1] mb-8">
              Migrate History <br />
              <span className="text-blue-600">Without Friction.</span>
            </h2>
            
            <p className="text-xl font-medium text-gray-500 mb-10 leading-relaxed max-w-xl">
              Don&apos;t let ten years of data hold you hostage. DMSPilot utilizes a proprietary ETL pipeline that transforms legacy chaos into actionable enterprise intelligence automatically.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${step.colorClass}`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Visual Migration Engine */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-2"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 blur-3xl rounded-[3rem]"></div>
              
              <div className="relative bg-gray-900 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden border border-white/10">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                      <ReplaceAll className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold tracking-tight">Active Stream</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">TLS 1.3 Encryption Active</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Processing</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {dataPoints.map((dp, i) => (
                    <div key={i} className="relative group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <dp.icon className="w-4 h-4 text-gray-500" />
                          <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">{dp.label}</span>
                        </div>
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{dp.status}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "30%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: i * 0.4, ease: "easeInOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                        />
                      </div>
                      
                      {/* Streaming particles effect */}
                      <div className="absolute -bottom-4 left-0 w-full flex justify-between px-2 overflow-hidden h-px opacity-0 group-hover:opacity-100 transition-opacity">
                         {[1,2,3,4,5].map(p => (
                           <motion.div 
                             key={p}
                             animate={{ x: [0, 400], opacity: [0, 1, 0] }}
                             transition={{ duration: 1, repeat: Infinity, delay: p * 0.2 }}
                             className="w-1 h-[1px] bg-blue-300"
                           />
                         ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Log Stream Area */}
                <div className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] space-y-1 h-32 overflow-hidden">
                  {logs.map((log, i) => (
                    <motion.div 
                      key={log + i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-gray-400 flex gap-2"
                    >
                      <span className="text-blue-500/50">[{currentTime}]</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 bg-white shadow-2xl rounded-2xl p-6 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-4 py-2">
                      <div className="text-center">
                        <div className="text-2xl font-black text-gray-900 tabular-nums">{records.toLocaleString()}</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Records Read</div>
                      </div>
                      <div className="w-px h-8 bg-gray-100"></div>
                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-600 tabular-nums">0</div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Errors</div>
                      </div>
                    </div>
                    <div className="text-[11px] font-medium text-gray-500 italic">
                      &quot;DMSPilot pipeline automatically handled formatting variances in legacy CSV logs.&quot;
                    </div>
                  </div>
                </div>

                {/* Background decorative circuits */}
                <div className="absolute right-[-10%] top-[20%] w-[150px] h-[150px] border border-blue-500/10 rounded-full"></div>
                <div className="absolute right-[-5%] top-[15%] w-[200px] h-[200px] border border-blue-500/5 rounded-full"></div>
              </div>

              {/* Float labels */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-1/4 bg-white shadow-xl rounded-xl p-4 border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Server className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Source</div>
                    <div className="text-xs font-bold text-gray-900 leading-none">Legacy SQL Instance</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

