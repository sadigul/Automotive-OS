'use client';

import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const duration = 1500;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * value);
            setDisplay(current.toLocaleString('en-US') + suffix);
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  const stats = [
    {
      value: 35,
      prefix: "",
      suffix: "+",
      label: "Dealerships Freed",
      decimal: ""
    },
    {
      value: 4,
      prefix: "$",
      suffix: "M",
      label: "Annual Volume",
      decimal: ""
    },
    {
      value: 99,
      prefix: "",
      suffix: "%",
      label: "Uptime Integrity",
      decimal: ".9"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight leading-tight animate-[fadeInUp_0.8s_ease-out_both]">
              DMSPilot is powering the next generation of high-growth dealerships.
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-8 md:gap-20 items-center w-full md:w-auto">
            {stats.map((stat, i) => (
              <div 
                key={i}
                className={`flex flex-col animate-[fadeInUp_0.8s_ease-out_both] ${i === 2 ? 'col-span-2 flex-row md:flex-col gap-6 md:gap-0' : ''}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter mb-3 flex items-baseline">
                  {stat.prefix && <span className="text-purple-600 mr-1 select-none">{stat.prefix}</span>}
                  <Counter value={stat.value} />
                  {stat.decimal && <span className="text-2xl md:text-3xl font-bold text-gray-400 select-none">{stat.decimal}</span>}
                  <span className="text-purple-600 ml-1 select-none">{stat.suffix}</span>
                </div>
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] select-none">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
