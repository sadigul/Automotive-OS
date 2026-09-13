'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 pt-20 pb-12 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-200">
          
          {/* Col 1: Brand & Identity (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand Logo & Name */}
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
                  <Image 
                    src="/logo.svg" 
                    alt="DMSPilot Logo" 
                    width={40} 
                    height={40} 
                    className="w-full h-full object-contain" 
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 group-hover:text-purple-600 transition-colors">
                    DMSPilot
                  </span>
                </div>
              </Link>

              {/* Tagline / Value Proposition */}
              <p className="mt-4 text-sm sm:text-[14.5px] text-slate-500 font-normal leading-relaxed max-w-sm">
                The open operating system for modern automotive retail. Unifying cloud ERP, intelligent desking, service operations, and digital storefronts into one connected platform.
              </p>

              {/* Follow Us On */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <span className="text-slate-400 font-normal">Follow us on:</span>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-blue-600 font-bold transition-all inline-flex items-center gap-1.5"
                >
                  Facebook
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-blue-700 font-bold transition-all inline-flex items-center gap-1.5"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-5">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/solutions/enterprise-erp" className="hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Enterprise ERP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/sales-crm" className="hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Sales CRM</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/service-bay" className="hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Service Bay &amp; MPI</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/digital-retail" className="hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Digital Retail &amp; Desking</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce" className="hover:text-purple-600 transition-colors flex items-center justify-between group text-purple-700 font-medium">
                  <span>E-Commerce &amp; Storefronts</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-100 transition-opacity text-purple-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/accounting" className="hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Accounting &amp; General Ledger</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-solutions" className="hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>AI Solutions &amp; Autonomous Ops</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectors & Ecosystem (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-5">
              Who We Serve
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/who-we-serve/dealerships" className="hover:text-slate-950 transition-colors">
                  Single Stores &amp; Dealer Groups
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/manufacturers" className="hover:text-slate-950 transition-colors">
                  Manufacturers (OEMs)
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/service-centers" className="hover:text-slate-950 transition-colors">
                  Service Centers &amp; Collision Bays
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/retailers-parts" className="hover:text-slate-950 transition-colors">
                  Auto Parts &amp; Tire Distributors
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/logistics-transport" className="hover:text-slate-950 transition-colors">
                  Logistics &amp; Transport
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/commercial-fleets" className="hover:text-slate-950 transition-colors">
                  Commercial &amp; Municipal Fleets
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/migration" className="hover:text-purple-600 transition-colors text-slate-900 font-semibold">
                  Zero-Downtime Data Migration →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Support (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-5">
              Intelligence &amp; Access
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="hover:text-slate-950 transition-colors">
                  Blog &amp; Engineering Journal
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-slate-950 transition-colors">
                  Market Intelligence
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-purple-600 transition-colors font-bold text-slate-950">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request-access" className="hover:text-slate-950 transition-colors">
                  Request Access
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-slate-950 transition-colors">
                  Compliance &amp; Security
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-slate-950 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-slate-950 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} DMSPilot Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Follow us on:</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-700 hover:text-blue-600 font-semibold transition-colors"
            >
              Facebook
            </a>
            <span className="text-slate-300">·</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-700 hover:text-blue-700 font-semibold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
