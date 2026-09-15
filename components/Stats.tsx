'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

/* ─── Ultra-Smooth Buttery Animated Number Counter ─── */
function AnimatedCounter({ 
  value, 
}: { 
  value: number; 
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

          const duration = 1800; // Silky smooth deceleration
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Quartic ease-out for ultra buttery decelerated rollout
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(eased * value);

            setDisplay(current.toLocaleString('en-US'));

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(value.toLocaleString('en-US'));
            }
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref} className="tabular-nums font-bold tracking-tight text-slate-900">{display}</span>;
}

const stats = [
  {
    numericValue: 38,
    prefix: '',
    suffix: '+',
    label: 'Dealerships freed from manual operations',
  },
  {
    numericValue: 4,
    prefix: '$',
    suffix: 'M+',
    label: 'Generated in client revenue',
  },
  {
    numericValue: 840,
    prefix: '',
    suffix: '+',
    label: 'Active rooftops served',
  },
  {
    numericValue: 4,
    prefix: '',
    suffix: 'M+',
    label: 'VIN scans processed',
  },
];

export function Stats() {
  return (
    <div className="w-full py-8 sm:py-12 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-base sm:text-lg font-semibold text-slate-600 tracking-tight">
            Our results in numbers
          </h2>
        </motion.div>

        {/* 4 Clean Stats in a Row — Pure Minimalist Layout, No Fluff, No Boxes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Large Number with Signature Violet Accent Suffix / Prefix */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-2.5 sm:mb-3 flex items-baseline justify-center">
                {stat.prefix && (
                  <span className="text-[#6366F1] font-semibold mr-0.5">
                    {stat.prefix}
                  </span>
                )}
                <AnimatedCounter value={stat.numericValue} />
                {stat.suffix && (
                  <span className="text-[#6366F1] font-semibold ml-0.5">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Clean Sub-Label */}
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-[170px] sm:max-w-[190px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
