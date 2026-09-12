import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Solutions } from '@/components/Solutions';
import { CustomSolutions } from '@/components/CustomSolutions';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Automotive Solutions & Dealership Software Suite — DMSPilot',
  description: 'Explore the full suite of cloud-native automotive retail solutions: Enterprise ERP, Sales CRM, Service Bay, Digital Retail, E-Commerce, Accounting, and Autonomous AI.',
  keywords: [
    'dealership solutions',
    'automotive ERP software',
    'dealership sales CRM',
    'auto dealer fixed ops software',
    'digital retail car desking',
    'dealership accounting automation',
    'automotive AI platform',
  ],
  openGraph: {
    title: 'Automotive Solutions & Dealership Software Suite — DMSPilot',
    description: 'Explore the full suite of cloud-native automotive retail solutions: Enterprise ERP, Sales CRM, Service Bay, Digital Retail, E-Commerce, Accounting, and Autonomous AI.',
    url: 'https://dmspilot.com/solutions',
    type: 'website',
  },
  alternates: {
    canonical: '/solutions',
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Hero Header */}
          <div className="max-w-3xl mb-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
              Comprehensive Platform Suite
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
              All-In-One Automotive Operating Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Explore the unified cloud-native platform built to replace fragmented dealer legacy systems with real-time operations, desking, CRM, and automated bookkeeping.
            </p>
          </div>
        </div>

        {/* Bento Grid Solutions Section */}
        <Solutions />

        {/* Custom API & Ecosystem Integrations */}
        <CustomSolutions />

        {/* Action Callout */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
