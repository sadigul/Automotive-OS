'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight,
  ChevronDown,
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
    {
      title: 'Custom Software',
      desc: 'Bespoke automotive workflows, custom APIs & dedicated integrations',
      slug: 'custom-software',
      href: '/contact-us?solution=custom-software',
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
    <header 
      className={`fixed top-0 inset-x-0 z-50 w-full transition-colors duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[74px] sm:h-[80px] flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative flex items-center justify-center">
            <Image 
              src="/logo.svg" 
              alt="DMSPilot" 
              width={32} 
              height={32} 
              className="h-8 w-8 transition-transform duration-200 group-hover:scale-105" 
              priority 
            />
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-[18px] sm:text-[19px] tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors leading-none">
              DMSPilot
            </span>
            <span className="hidden sm:inline-block h-3.5 w-px bg-slate-300" />
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-wider uppercase text-slate-500 font-bold">
              Automotive OS
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          
          {/* Mega Menu Dropdown Trigger for Solutions */}
          <div 
            className="relative"
            onMouseEnter={() => setIsSolutionsHovered(true)}
            onMouseLeave={() => setIsSolutionsHovered(false)}
          >
            <button 
              type="button"
              className={`flex items-center gap-1.5 text-[14px] font-semibold transition-all px-3.5 py-2 rounded-lg ${
                isSolutionsHovered 
                  ? 'text-slate-950 bg-slate-100/90' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isSolutionsHovered ? 'rotate-180 text-blue-600' : 'text-slate-400'
              }`} />
            </button>
            
            {/* White Solutions Dropdown */}
            <div 
              className={`absolute top-full -left-16 w-[700px] pt-3 transition-all duration-200 ${
                isSolutionsHovered 
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                  : 'opacity-0 invisible -translate-y-1.5 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-xl border border-slate-200 p-5 text-slate-900">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1">
                  <span className="text-[10.5px] font-mono font-bold text-slate-400 tracking-wider uppercase">
                    Platform Modules
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Unified Rooftop Infrastructure
                  </span>
                </div>

                {/* 2-Column Solutions Grid without Icons */}
                <div className="grid grid-cols-2 gap-2">
                  {solutionsList.map((sol) => (
                    <Link 
                      key={sol.slug} 
                      href={sol.href || `/solutions/${sol.slug}`} 
                      className="group/card flex items-start justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-150"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-[13.5px] font-bold text-slate-900 group-hover/card:text-blue-600 transition-colors leading-tight block">
                          {sol.title}
                        </span>
                        <p className="text-[11.5px] text-slate-500 leading-snug mt-1 font-normal line-clamp-1">
                          {sol.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-150 shrink-0 mt-1 ml-2" />
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
              type="button"
              className={`flex items-center gap-1.5 text-[14px] font-semibold transition-all px-3.5 py-2 rounded-lg ${
                isWhoWeServeHovered 
                  ? 'text-slate-950 bg-slate-100/90' 
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
              }`}
            >
              <span>Who We Serve</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isWhoWeServeHovered ? 'rotate-180 text-blue-600' : 'text-slate-400'
              }`} />
            </button>
            
            {/* White Who We Serve Dropdown */}
            <div 
              className={`absolute top-full -left-16 w-[680px] pt-3 transition-all duration-200 ${
                isWhoWeServeHovered 
                  ? 'opacity-100 visible translate-y-0 pointer-events-auto' 
                  : 'opacity-0 invisible -translate-y-1.5 pointer-events-none'
              }`}
            >
              <div className="bg-white rounded-xl border border-slate-200 p-5 text-slate-900">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-1">
                  <span className="text-[10.5px] font-mono font-bold text-slate-400 tracking-wider uppercase">
                    Industry Verticals
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Tailored Rooftop Operations
                  </span>
                </div>

                {/* 2-Column Who We Serve Grid without Icons */}
                <div className="grid grid-cols-2 gap-2">
                  {whoWeServeList.map((item) => (
                    <Link 
                      key={item.title} 
                      href={`/who-we-serve/${item.slug}`} 
                      className="group/card flex items-start justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all duration-150"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-[13.5px] font-bold text-slate-900 group-hover/card:text-blue-600 transition-colors leading-tight block">
                          {item.title}
                        </span>
                        <p className="text-[11.5px] text-slate-500 leading-snug mt-1 font-normal line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 opacity-0 -translate-x-1 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-150 shrink-0 mt-1 ml-2" />
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <Link 
            href="/migration" 
            className="text-[14px] font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-colors px-3.5 py-2 rounded-lg"
          >
            Migration
          </Link>
          <Link 
            href="/blog" 
            className="text-[14px] font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-50 transition-colors px-3.5 py-2 rounded-lg"
          >
            Blog
          </Link>
        </nav>

        {/* Right: Contact Us Button with Smooth Fill Sweep Interaction */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link href="/contact-us">
            <button 
              type="button"
              className="relative group overflow-hidden h-10 px-6 rounded-full bg-white text-slate-950 text-[13.5px] font-bold border-2 border-slate-950 flex items-center justify-center transition-all duration-300"
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
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-5 py-6 space-y-6">
            
            <div className="space-y-1">
              <p className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                Platform Solutions
              </p>
              {solutionsList.map((sol) => (
                <Link
                  key={sol.slug}
                  href={sol.href || `/solutions/${sol.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-[13.5px] font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  {sol.title}
                </Link>
              ))}
            </div>

            <div className="space-y-1 pt-3 border-t border-slate-100">
              <p className="text-[10.5px] font-mono font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                Who We Serve
              </p>
              {whoWeServeList.map((item) => (
                <Link
                  key={item.title}
                  href={`/who-we-serve/${item.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-[13.5px] font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="space-y-1 pt-3 border-t border-slate-100">
              <Link
                href="/migration"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-[14px] font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Migration
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-[14px] font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Blog
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/contact-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block"
              >
                <button 
                  type="button"
                  className="w-full relative group overflow-hidden h-12 rounded-full bg-white text-slate-950 text-[14px] font-bold border-2 border-slate-950 flex items-center justify-center transition-all duration-300"
                >
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
