'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wrench, Database, Target, PhoneCall, BarChart3, Briefcase, Calculator, Layers } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 pointer-events-none will-change-transform">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        
        {/* Transparent floating header container */}
        <div className={`w-full flex justify-between items-center rounded-full px-4 py-3 transition-all duration-300 pointer-events-auto border will-change-[background-color,backdrop-filter] ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-sm' 
            : 'bg-white/40 backdrop-blur-sm border-transparent'
        }`}>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-white font-mono font-bold text-sm tracking-tight text-white/90">A</span>
            </div>
            <span className="font-sans font-bold text-lg tracking-tighter text-gray-900">AOS</span>
          </div>

          {/* Desktop Nav in the center */}
          <nav className="hidden md:flex items-center gap-8 pl-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black transition-colors py-2 h-full">
                Solutions <ChevronDown className="w-4 h-4 ml-0.5 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Mega menu */}
              <div className="absolute top-full -left-20 w-[600px] xl:w-[640px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-4 grid grid-cols-2 gap-2 relative overflow-hidden">
                  {[
                    { icon: Wrench, title: 'Enterprise ERP', desc: 'Admin & Operations Hub', color: 'text-orange-600', bg: 'bg-orange-50', slug: 'fixed-ops' },
                    { icon: Database, title: 'ERP & Finance', desc: 'Automated settlement', color: 'text-purple-600', bg: 'bg-purple-50', slug: 'erp-finance' },
                    { icon: Target, title: 'Sales CRM', desc: 'Unified customer insights', color: 'text-indigo-600', bg: 'bg-indigo-50', slug: 'sales-crm' },
                    { icon: Layers, title: 'Desking & F&I', desc: 'Real-time structured quotes', color: 'text-sky-600', bg: 'bg-sky-50', slug: 'desking-fi' },
                    { icon: Calculator, title: 'Accounting', desc: 'Zero manual reconciliation', color: 'text-rose-600', bg: 'bg-rose-50', slug: 'accounting' },
                    { icon: PhoneCall, title: 'Comm-Center', desc: 'Omnichannel VOIP', color: 'text-blue-600', bg: 'bg-blue-50', slug: 'comm-center' },
                    { icon: BarChart3, title: 'Inventory Intel', desc: 'Margin predictive analytics', color: 'text-emerald-600', bg: 'bg-emerald-50', slug: 'inventory' },
                    { icon: Briefcase, title: 'Stagg Portal', desc: 'Firm-based service model', color: 'text-teal-600', bg: 'bg-teal-50', slug: 'stagg-portal' },
                  ].map((item, i) => (
                    <Link key={i} href={`/solutions/${item.slug}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                      <div className={`w-11 h-11 rounded-xl flex shrink-0 items-center justify-center ${item.bg} ${item.color} border border-white shadow-sm`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-500 font-medium">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="#migration" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Migration</Link>
            <Link href="#reviews" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Reviews</Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">FAQ</Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/request-access">
              <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-5 h-9 font-bold text-sm transition-all shadow-sm">
                Request Access
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-3xl bg-white border border-gray-200 p-4 shadow-lg pointer-events-auto">
          <div className="flex flex-col gap-2">
            <Link href="#ecosystem" className="text-sm font-medium text-gray-600 p-3 hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
            <Link href="#migration" className="text-sm font-medium text-gray-600 p-3 hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Migration</Link>
            <Link href="#reviews" className="text-sm font-medium text-gray-600 p-3 hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 p-3 hover:bg-gray-50 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <div className="h-px bg-gray-100 my-2"></div>
            <Link href="/request-access" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-xl h-11 transition-all font-bold">
                Request Access
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
