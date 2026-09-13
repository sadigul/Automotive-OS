'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50/70 text-slate-600 pt-16 pb-12 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200">
          
          {/* Col 1: Brand & Identity (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              {/* Brand Logo & Name */}
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-200 group-hover:scale-105">
                  <Image 
                    src="/logo.svg" 
                    alt="DMSPilot Logo" 
                    width={36} 
                    height={36} 
                    className="w-full h-full object-contain" 
                    priority
                  />
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
                    DMSPilot
                  </span>
                  <span className="h-3.5 w-px bg-slate-300" />
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-slate-500">
                    Automotive OS
                  </span>
                </div>
              </Link>

              {/* Tagline / Value Proposition */}
              <p className="mt-4 text-sm text-slate-500 font-normal leading-relaxed max-w-sm">
                The open operating system for automotive dealerships. Unifying cloud ERP, intelligent desking, service operations, and real-time inventory into one connected platform.
              </p>

              {/* Follow Us On */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <span className="text-slate-500 font-medium">Follow us on :</span>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 hover:text-blue-600 border border-slate-200 transition-colors font-semibold"
                  aria-label="Follow DMSPilot on Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 hover:text-blue-700 border border-slate-200 transition-colors font-semibold"
                  aria-label="Follow DMSPilot on LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/enterprise-erp" className="text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Enterprise ERP</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/sales-crm" className="text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Sales CRM</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/service-bay" className="text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Service Bay &amp; MPI</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/digital-retail" className="text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Digital Retail</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce" className="text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>E-Commerce</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/accounting" className="text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>Accounting &amp; GL</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-solutions" className="text-slate-600 hover:text-slate-950 transition-colors flex items-center justify-between group">
                  <span>AI Automations</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Who We Serve (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-4">
              Who We Serve
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/who-we-serve/dealerships" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Single Stores &amp; Groups
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/manufacturers" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Manufacturers (OEMs)
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/service-centers" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Service &amp; Collision Bays
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/retailers-parts" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Parts &amp; Distributors
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/logistics-transport" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Logistics &amp; Transport
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve/commercial-fleets" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Commercial Fleets
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Intelligence (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/migration" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Data Migration
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Market Insights
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-slate-600 hover:text-slate-950 transition-colors">
                  All Platform Modules
                </Link>
              </li>
              <li>
                <Link href="/who-we-serve" className="text-slate-600 hover:text-slate-950 transition-colors">
                  All Industry Sectors
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-950 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact-us" className="text-slate-950 font-bold hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/request-access" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Request Access
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Security &amp; Compliance
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-slate-950 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>&copy; {currentYear} DMSPilot Inc. All rights reserved. The open operating system for automotive dealerships.</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/privacy-policy" className="hover:text-slate-950 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/terms" className="hover:text-slate-950 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/compliance" className="hover:text-slate-950 transition-colors">
              Security
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
