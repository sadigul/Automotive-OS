import { solutionsData } from '@/lib/solutions-data';
import ClientPage from './client-page';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

const seoMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  'erp': {
    title: 'Automotive ERP Software | Dealership ERP System — DMSPilot',
    description: 'Unified automotive ERP software for single rooftops and multi-location dealership groups. Real-time multi-rooftop inventory visibility, vehicle lifecycle tracking, and floor plan management.',
    keywords: ['automotive ERP software', 'dealership ERP system', 'dealer operations management', 'auto dealer multi-store ERP', 'vehicle inventory ERP', 'dealership floor plan software'],
  },
  'enterprise-erp': {
    title: 'Automotive ERP Software | Dealership ERP System — DMSPilot',
    description: 'Unified automotive ERP software for single rooftops and multi-location dealership groups. Real-time multi-rooftop inventory visibility, vehicle lifecycle tracking, and floor plan management.',
    keywords: ['automotive ERP software', 'dealership ERP system', 'dealer operations management', 'auto dealer multi-store ERP', 'vehicle inventory ERP', 'dealership floor plan software'],
  },
  'sales-crm': {
    title: 'Automotive Sales CRM & Lead Intelligence — DMSPilot',
    description: 'Stop guessing which leads are ready to buy. DMSPilot Sales CRM watches your service drive and showroom to deliver hot purchase opportunities and omni-channel messaging.',
    keywords: ['auto dealer CRM', 'car dealership CRM software', 'automotive sales pipeline', 'dealer lead management system', 'service drive equity mining'],
  },
  'digital-retail': {
    title: 'Digital Retail & Instant Deal Desking — DMSPilot',
    description: 'Frictionless, penny-perfect online-to-store car buying. Compare lease, finance, and cash quotes in seconds with instant lender approvals and remote e-signature.',
    keywords: ['digital retail automotive', 'car dealership desking tool', 'F&I software', 'online car buying platform', 'remote automotive e-sign'],
  },
  'ai-solutions': {
    title: 'AI Solutions & Autonomous Dealership Operations — DMSPilot',
    description: 'Transform your dealership with autonomous AI agents. 24/7 conversational voice receptionist, automated service bay dispatch, predictive lot inventory sourcing, and auto-reconciled ledgers.',
    keywords: ['automotive AI software', 'autonomous dealership operations', 'AI service dispatch', 'dealership AI voice receptionist', 'predictive inventory AI'],
  },
  'service-bay': {
    title: 'Service Bay & Precision Parts Operations — DMSPilot',
    description: 'Stop losing money on missing parts and unbilled labor. Mobile barcode scanning, paperless MPI inspections, live bay scheduling, and automatic RO billing in seconds.',
    keywords: ['auto dealer service bay software', 'dealership parts management', 'paperless MPI inspection', 'technician dispatch software', 'repair order automation'],
  },
  'dms': {
    title: 'Next-Gen Cloud DMS (Dealer Management System) — DMSPilot',
    description: 'The open, cloud-native Dealer Management System replacing legacy CDK and Reynolds monopolies. Auto-closing daily books, real-time inventory, and 60% lower total cost.',
    keywords: ['cloud dealer management system', 'automotive DMS software', 'replace CDK Reynolds', 'car dealership operating system', 'auto dealer accounting software'],
  },
  'ecommerce': {
    title: 'Automotive E-Commerce & Dealer Websites — DMSPilot',
    description: 'Build lightning-fast customer-facing landing sites, custom dealership websites, and direct online vehicle deposit checkout tailored for automotive retail.',
    keywords: ['automotive ecommerce', 'dealership website builder', 'car dealer landing page', 'online vehicle reservation', 'digital automotive storefront'],
  },
  'e-commerce': {
    title: 'Automotive E-Commerce & Dealer Websites — DMSPilot',
    description: 'Build lightning-fast customer-facing landing sites, custom dealership websites, and direct online vehicle deposit checkout tailored for automotive retail.',
    keywords: ['automotive ecommerce', 'dealership website builder', 'car dealer landing page', 'online vehicle reservation', 'digital automotive storefront'],
  },
  'storefront': {
    title: 'Automotive E-Commerce & Dealer Websites — DMSPilot',
    description: 'Build lightning-fast customer-facing landing sites, custom dealership websites, and direct online vehicle deposit checkout tailored for automotive retail.',
    keywords: ['automotive ecommerce', 'dealership website builder', 'car dealer landing page', 'online vehicle reservation', 'digital automotive storefront'],
  },
  'digital-storefront': {
    title: 'Automotive E-Commerce & Dealer Websites — DMSPilot',
    description: 'Build lightning-fast customer-facing landing sites, custom dealership websites, and direct online vehicle deposit checkout tailored for automotive retail.',
    keywords: ['automotive ecommerce', 'dealership website builder', 'car dealer landing page', 'online vehicle reservation', 'digital automotive storefront'],
  },

  /* Aliases */
  'fixed-ops': {
    title: 'Enterprise ERP for Auto Dealerships',
    description: 'One screen to run your entire dealership. DMSPilot Enterprise ERP connects inventory, finance, people, and operations.',
    keywords: ['dealership ERP software', 'automotive enterprise resource planning'],
  },
  'service-parts': {
    title: 'Auto Dealer Parts Management Software',
    description: 'Stop losing money on missing parts. DMSPilot tracks every part in your service bay, auto-reorders inventory, and eliminates unbilled work.',
    keywords: ['auto parts management', 'parts inventory software'],
  },
  'erp-finance': {
    title: 'Auto Dealer Accounting & Finance Software',
    description: 'Every dollar tracked the moment it moves. DMSPilot ERP & Finance automates partner splits and daily revenue reconciliation.',
    keywords: ['dealership accounting software', 'auto dealer finance management'],
  },
  'desking-fi': {
    title: 'F&I Desking Software for Auto Dealers',
    description: 'Close deals in minutes, not hours. Show lease, finance, and cash options side by side. Get instant bank approvals.',
    keywords: ['F&I desking software', 'auto dealer desking tool'],
  },
  'accounting': {
    title: 'Dealership Accounting Software — Auto-Close Books Daily',
    description: 'Your books close themselves every day. Every repair order and sale gets booked automatically.',
    keywords: ['dealership accounting software', 'auto dealer bookkeeping'],
  },
  'comm-center': {
    title: 'Dealership Communication Center — Phone, Text, WhatsApp',
    description: 'Every call, text, and message in one place. AI reads the mood of every conversation and flags problems.',
    keywords: ['dealership communication software', 'auto dealer messaging platform'],
  },
  'inventory': {
    title: 'Auto Dealer Inventory Management Software',
    description: 'AI tells you which cars will sell fast and which ones to wholesale — before they lose value.',
    keywords: ['auto dealer inventory management', 'car lot inventory software'],
  },
  'stagg-portal': {
    title: 'Dealership Vendor & Partner Management Portal',
    description: 'Manage outside teams like they work for you. Send jobs to partner firms, track their work, and pay them automatically.',
    keywords: ['dealership vendor management', 'auto dealer partner portal'],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = seoMeta[slug];
  if (!meta) return {};
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: `${meta.title} | DMSPilot`,
      description: meta.description,
      url: `https://dmspilot.com/solutions/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `/solutions/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === 'custom-software') {
    redirect('/contact-us?solution=custom-software');
  }
  return <ClientPage slug={slug} />;
}
