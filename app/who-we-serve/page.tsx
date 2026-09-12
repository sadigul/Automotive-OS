import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { WhoWeServe } from '@/components/WhoWeServe';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Who We Serve — Dealerships, OEMs, Service Centers & Fleets | DMSPilot',
  description: 'Explore how DMSPilot powers single rooftops, multi-location dealership groups, vehicle manufacturers, auto repair bays, parts distributors, and commercial transport fleets.',
  keywords: [
    'dealership DMS',
    'automotive OEM software',
    'service center management',
    'auto parts distribution software',
    'car hauler logistics software',
    'commercial fleet management',
  ],
  openGraph: {
    title: 'Who We Serve — Dealerships, OEMs, Service Centers & Fleets | DMSPilot',
    description: 'Explore how DMSPilot powers single rooftops, multi-location dealership groups, vehicle manufacturers, auto repair bays, parts distributors, and commercial transport fleets.',
    url: 'https://dmspilot.com/who-we-serve',
    type: 'website',
  },
  alternates: {
    canonical: '/who-we-serve',
  },
};

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Hero Header */}
          <div className="max-w-3xl mb-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              Automotive Ecosystem Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
              Engineered for the Entire Automotive Industry
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From multi-rooftop dealership groups and Tier-1 OEMs to rapid service bays and commercial fleets, DMSPilot powers high-margin automotive operations.
            </p>
          </div>
        </div>

        {/* Bento Grid Who We Serve Section */}
        <WhoWeServe />

        {/* Action Callout */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
