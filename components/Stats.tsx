'use client';

import { useEffect, useRef, useState } from 'react';

/* ─── Smooth Animated Number Counter ─── */
function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '', 
  decimals = 0 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
}) {
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

          const duration = 1400;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;

            const formatted = decimals > 0 
              ? current.toFixed(decimals) 
              : Math.floor(current).toLocaleString('en-US');

            setDisplay(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              const finalFormatted = decimals > 0 
                ? value.toFixed(decimals) 
                : value.toLocaleString('en-US');
              setDisplay(`${prefix}${finalFormatted}${suffix}`);
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, prefix, suffix, decimals]);

  return <span ref={ref} className="tabular-nums font-bold tracking-tight">{display}</span>;
}

const stats = [
  {
    numericValue: 38,
    decimals: 0,
    prefix: '',
    suffix: '+',
    label: 'Dealerships freed from manual operations',
  },
  {
    numericValue: 4,
    decimals: 0,
    prefix: '$',
    suffix: 'M+',
    label: 'Generated in client revenue',
  },
  {
    numericValue: 840,
    decimals: 0,
    prefix: '',
    suffix: '+',
    label: 'Active rooftops served',
  },
  {
    numericValue: 99.9,
    decimals: 1,
    prefix: '',
    suffix: '%',
    label: 'Uptime integrity & real-time sync',
  },
];

export function Stats() {
  return (
    <div className="w-full text-left">
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-none mb-2.5">
                <AnimatedCounter
                  value={stat.numericValue}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
