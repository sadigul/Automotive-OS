'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface SegmentItem {
  id: string;
  title: string;
  suiteBadge: string;
  description: React.ReactNode;
  suiteModules: string[];
  colSpan: string;
  image: string;
  href: string;
}

const segmentsData: SegmentItem[] = [
  /* ── ROW 1 ── */
  {
    id: 'dealerships',
    title: 'Dealerships',
    suiteBadge: 'Dealership Suite',
    description: (
      <>
        Multi-rooftop showroom operations, penny-perfect desking, and <strong className="font-bold text-white">cross-store live inventory sharing</strong>.
      </>
    ),
    suiteModules: ['Enterprise ERP', 'Sales CRM', 'Desking F&I', 'Service Bay', 'Auto Accounting', 'Autonomous AI', 'Digital Storefront'],
    colSpan: 'lg:col-span-7',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    href: '/who-we-serve/dealerships',
  },
  {
    id: 'manufacturers',
    title: 'Manufacturers (OEMs)',
    suiteBadge: 'OEM Factory Suite',
    description: (
      <>
        Direct factory data exchange, warranty validation, and <strong className="font-bold text-white">Tier-1 brand distribution networks</strong>.
      </>
    ),
    suiteModules: ['Production ERP', 'Dealer Network CRM', 'Warranty Bay', 'Multi-Entity Ledger', 'Supply AI', 'Direct Storefront'],
    colSpan: 'lg:col-span-5',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    href: '/who-we-serve/manufacturers',
  },

  /* ── ROW 2 ── */
  {
    id: 'service-centers',
    title: 'Service Centers',
    suiteBadge: 'Service Bay Suite',
    description: (
      <>
        Paperless digital MPI, automated bay dispatching, and <strong className="font-bold text-white">1-click customer SMS approvals</strong>.
      </>
    ),
    suiteModules: ['Service Bay MPI', 'Technician Dispatch ERP', 'Customer CRM', 'Shop Accounting', '24/7 AI Receptionist', 'Tire Storefront'],
    colSpan: 'lg:col-span-5',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80',
    href: '/who-we-serve/service-centers',
  },
  {
    id: 'retailers-parts',
    title: 'Retailers & Parts',
    suiteBadge: 'Parts WMS Suite',
    description: (
      <>
        Live counter SKU lookups, automated wholesale replenishment, and <strong className="font-bold text-white">omni-channel parts checkout</strong>.
      </>
    ),
    suiteModules: ['Interchange ERP', 'B2B Wholesale Portal', 'Commercial CRM', 'Core Vault Ledger', 'Inventory AI', 'Delivery Dispatch'],
    colSpan: 'lg:col-span-7',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    href: '/who-we-serve/retailers-parts',
  },

  /* ── ROW 3 ── */
  {
    id: 'logistics-transport',
    title: 'Logistics & Transport',
    suiteBadge: 'Auto Hauler Suite',
    description: (
      <>
        Auto-hauler route dispatching, real-time VIN tracking, and <strong className="font-bold text-white">electronic BOL delivery</strong>.
      </>
    ),
    suiteModules: ['Multi-Car Load ERP', 'Mobile eBOL Inspection', 'Shipper Portal', 'Freight Settlement', 'Yard Telemetry AI', 'Booking Engine'],
    colSpan: 'lg:col-span-7',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    href: '/who-we-serve/logistics-transport',
  },
  {
    id: 'commercial-fleets',
    title: 'Commercial Fleets',
    suiteBadge: 'Fleet Operations Suite',
    description: (
      <>
        Preventative maintenance schedules, fleet billing accounts, and <strong className="font-bold text-white">live asset telemetry tracking</strong>.
      </>
    ),
    suiteModules: ['Fleet Asset ERP', 'Maintenance Bay', 'Consolidated Accounting', 'OBD-II Sensor AI', 'Driver Portal', 'DVIR Compliance'],
    colSpan: 'lg:col-span-5',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    href: '/who-we-serve/commercial-fleets',
  },
];

export function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-20 sm:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Clean Section Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
            Who We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed">
            Purpose-built operating architecture tailored to the exact operational demands of every automotive business sector.
          </p>
        </div>

        {/* Big Photographic Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {segmentsData.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`${item.colSpan} flex`}
              >
                <Link
                  href={item.href}
                  className="group relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-8 sm:p-11 border border-slate-200/80 transition-all duration-500"
                >
                  {/* Background Image with Cinematic Hover Zoom */}
                  <div className="absolute inset-0 bg-slate-950">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    {/* Modern Gradient Overlays for High Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20 group-hover:via-slate-950/50 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Bottom Area: Massive Bold Title + Description + Suite Modules + Action Arrow */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                    <div className="max-w-xl space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          {item.suiteBadge}
                        </span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-white tracking-[-0.03em] leading-tight group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-[15.5px] text-slate-200 font-normal leading-relaxed">
                        {item.description}
                      </p>
                      {/* Micro suite pills */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {item.suiteModules.map((mod) => (
                          <span key={mod} className="text-[10.5px] font-medium text-slate-200 bg-slate-900/70 px-2 py-0.5 rounded-md border border-white/10 backdrop-blur-xs">
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Animated Circular Button */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
