'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
} from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const [isWhoWeServeHovered, setIsWhoWeServeHovered] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsList = [
    {
      title: 'Enterprise ERP',
      desc: 'Multi-location inventory, accounting & operations',
      slug: 'enterprise-erp',
    },
    {
      title: 'Sales CRM',
      desc: 'High-velocity lead pipelines & customer intelligence',
      slug: 'sales-crm',
    },
    {
      title: 'Service Bay',
      desc: 'Paperless MPI, bay dispatch & parts tracking',
      slug: 'service-bay',
    },
    {
      title: 'Digital Retail',
      desc: 'Penny-perfect desking & instant lender approvals',
      slug: 'digital-retail',
    },
    {
      title: 'E-Commerce & Storefronts',
      desc: 'Custom landing sites, digital showrooms & online checkout',
      slug: 'ecommerce',
    },
    {
      title: 'Accounting & Finance',
      desc: 'Automated bank feeds, general ledger & P&L balancing',
      slug: 'accounting',
    },
    {
      title: 'AI Solutions',
      desc: '24/7 conversational voice, SMS & autonomous workflows',
      slug: 'ai-solutions',
    },
  ];

  const whoWeServeList = [
    {
      title: 'Dealerships',
      desc: 'Single stores, dealer networks & franchised groups',
      slug: 'dealerships',
    },
    {
      title: 'Manufacturers (OEMs)',
      desc: 'Automotive OEMs, factory assemblers & brand distributors',
      slug: 'manufacturers',
    },
    {
      title: 'Service Centers',
      desc: 'Independent repair shops, mechanics & collision bays',
      slug: 'service-centers',
    },
    {
      title: 'Retailers & Parts',
      desc: 'Auto parts stores, tire distributors & accessory sellers',
      slug: 'retailers-parts',
    },
    {
      title: 'Logistics & Transport',
      desc: 'Vehicle haulers, transport networks & lot logistics',
      slug: 'logistics-transport',
    },
    {
      title: 'Commercial Fleets',
      desc: 'Corporate fleets, municipal accounts & asset telemetry',
      slug: 'commercial-fleets',
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-6 lg:px-8 pointer-events-none will-change-transform">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Floating navbar container */}
        <div className={`w-full flex justify-between items-center rounded-full px-5 sm:px-6 py-2.5 transition-all duration-300 pointer-events-auto border will-change-[background-color,backdrop-filter,box-shadow] relative ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-2xl border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)]' 
            : 'bg-white/85 backdrop-blur-xl border-slate-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
        }`}>
          
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative">
              <Image 
                src="/logo.svg" 
                alt="DMSPilot" 
                width={32} 
                height={32} 
                className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-200 group-hover:scale-105" 
                priority 
              />
            </div>
            <span className="font-bold text-[16px] sm:text-[17px] tracking-tight text-slate-900 group-hover:text-black transition-colors">
              DMSPilot
            </span>
          </Link>

          {/* Center: Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2">
            
            {/* Mega Menu Dropdown Trigger for Solutions */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsHovered(true)}
              onMouseLeave={() => setIsSolutionsHovered(false)}
            >
              <button 
                className={`flex items-center gap-1.5 text-[13.5px] font-semibold transition-all duration-200 px-3.5 py-1.5 rounded-full ${
                  isSolutionsHovered 
                    ? 'bg-slate-100 text-slate-950 shadow-inner ring-1 ring-slate-200/80' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                  isSolutionsHovered ? 'rotate-180 text-orange-600' : 'text-slate-400'
                }`} />
              </button>
              
              {/* High-End White Solutions Dropdown */}
              <div 
                className={`absolute top-full -left-20 w-[660px] pt-3 transition-all duration-200 ${
                  isSolutionsHovered 
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.05)] p-5 text-slate-900">
                  
                  <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 px-1">
                    <span className="text-[11px] font-bold text-orange-600 tracking-wider uppercase">
                      Solutions
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Automotive Ecosystem
                    </span>
                  </div>

                  {/* 2-Column Solutions Grid (No Icons) */}
                  <div className="grid grid-cols-2 gap-2">
                    {solutionsList.map((sol) => (
                      <Link 
                        key={sol.slug} 
                        href={`/solutions/${sol.slug}`} 
                        className="group/card block p-3 rounded-xl hover:bg-orange-50/50 border border-transparent hover:border-orange-100 transition-all duration-150"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[13.5px] font-bold text-slate-900 group-hover/card:text-orange-600 transition-colors leading-tight">
                            {sol.title}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-orange-600 opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-150 shrink-0" />
                        </div>
                        <div className="text-[11.5px] text-slate-500 leading-snug mt-1 font-medium">
                          {sol.desc}
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Mega Menu Dropdown Trigger for Who We Serve */}
            <div 
              className="relative"
              onMouseEnter={() => setIsWhoWeServeHovered(true)}
              onMouseLeave={() => setIsWhoWeServeHovered(false)}
            >
              <button 
                className={`flex items-center gap-1.5 text-[13.5px] font-semibold transition-all duration-200 px-3.5 py-1.5 rounded-full ${
                  isWhoWeServeHovered 
                    ? 'bg-slate-100 text-slate-950 shadow-inner ring-1 ring-slate-200/80' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                <span>Who We Serve</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                  isWhoWeServeHovered ? 'rotate-180 text-orange-600' : 'text-slate-400'
                }`} />
              </button>
              
              {/* High-End White Who We Serve Dropdown */}
              <div 
                className={`absolute top-full -left-28 w-[640px] pt-3 transition-all duration-200 ${
                  isWhoWeServeHovered 
                    ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                    : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.05)] p-5 text-slate-900">
                  
                  <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100 px-1">
                    <span className="text-[11px] font-bold text-orange-600 tracking-wider uppercase">
                      Who We Serve
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Industry Sectors
                    </span>
                  </div>

                  {/* 2-Column Who We Serve Grid (No Icons) */}
                  <div className="grid grid-cols-2 gap-2">
                    {whoWeServeList.map((item) => (
                      <Link 
                        key={item.title} 
                        href={`/who-we-serve/${item.slug}`} 
                        className="group/card block p-3 rounded-xl hover:bg-orange-50/50 border border-transparent hover:border-orange-100 transition-all duration-150"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[13.5px] font-bold text-slate-900 group-hover/card:text-orange-600 transition-colors leading-tight">
                            {item.title}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-orange-600 opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-150 shrink-0" />
                        </div>
                        <div className="text-[11.5px] text-slate-500 leading-snug mt-1 font-medium">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            <Link 
              href="/migration" 
              className="text-[13.5px] font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 transition-all px-3.5 py-1.5 rounded-full"
            >
              Migration
            </Link>
            <Link 
              href="/blog" 
              className="text-[13.5px] font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100/70 transition-all px-3.5 py-1.5 rounded-full"
            >
              Blog
            </Link>
          </nav>

          {/* Right: Contact Us Button with Smooth Fill Sweep Interaction */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link href="/contact-us">
              <button 
                type="button"
                className="relative group overflow-hidden h-10 px-6 rounded-full bg-white text-slate-950 text-[13.5px] font-bold border-2 border-slate-950 flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                {/* Smooth Black Fill Sweep on Hover */}
                <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Contact Us
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 border border-slate-200 shadow-2xl space-y-4">
            
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-orange-600 uppercase tracking-wider px-3 py-1">
                Solutions
              </p>
              {solutionsList.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-orange-50 text-slate-800 hover:text-orange-600 transition-colors"
                >
                  <span className="text-sm font-semibold">{sol.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-1">
              <p className="text-[11px] font-bold text-orange-600 uppercase tracking-wider px-3 py-1">
                Who We Serve
              </p>
              {whoWeServeList.map((item) => (
                <Link
                  key={item.title}
                  href={`/who-we-serve/${item.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-orange-50 text-slate-800 hover:text-orange-600 transition-colors"
                >
                  <span className="text-sm font-semibold">{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/migration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600"
              >
                Migration
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full mt-2"
              >
                <button className="relative group overflow-hidden w-full h-11 rounded-full bg-white text-slate-950 text-sm font-bold border-2 border-slate-950 flex items-center justify-center transition-all duration-300">
                  <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Contact Us
                  </span>
                </button>
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
