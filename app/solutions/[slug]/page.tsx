import { solutionsData } from '@/lib/solutions-data';
import ClientPage from './client-page';
import type { Metadata } from 'next';

const seoMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  'service-parts': {
    title: 'Auto Dealer Parts Management Software',
    description: 'Stop losing money on missing parts. DMSPilot tracks every part in your service bay, auto-reorders inventory, and eliminates unbilled work. Save $12k+/month.',
    keywords: ['auto parts management', 'parts inventory software', 'dealership parts tracking', 'service bay parts system', 'auto parts ordering software'],
  },
  'fixed-ops': {
    title: 'Enterprise ERP for Auto Dealerships',
    description: 'One screen to run your entire dealership. DMSPilot Enterprise ERP connects inventory, finance, people, and operations. Replace 10 disconnected programs today.',
    keywords: ['dealership ERP software', 'automotive enterprise resource planning', 'dealer operations management', 'auto dealer ERP system'],
  },
  'erp-finance': {
    title: 'Auto Dealer Accounting & Finance Software',
    description: 'Every dollar tracked the moment it moves. DMSPilot ERP & Finance automates partner splits, supplier payments, and daily revenue reconciliation with zero leakage.',
    keywords: ['dealership accounting software', 'auto dealer finance management', 'dealer financial reporting', 'automotive accounting system'],
  },
  'sales-crm': {
    title: 'Auto Dealer CRM & Sales Management Software',
    description: 'Know exactly who is ready to buy. DMSPilot Sales CRM watches your service drive and identifies customers ready to upgrade. 18.4% close rate, 420+ hot leads.',
    keywords: ['auto dealer CRM', 'car dealership CRM software', 'automotive sales management', 'dealer lead management system'],
  },
  'desking-fi': {
    title: 'F&I Desking Software for Auto Dealers',
    description: 'Close deals in minutes, not hours. Show lease, finance, and cash options side by side. Get instant bank approvals while the customer is still sitting there.',
    keywords: ['F&I desking software', 'auto dealer desking tool', 'finance and insurance software', 'car deal structuring software'],
  },
  'accounting': {
    title: 'Dealership Accounting Software — Auto-Close Books Daily',
    description: 'Your books close themselves every day. Every repair order and sale gets booked automatically. No month-end scramble. Always audit-ready with 0% errors.',
    keywords: ['dealership accounting software', 'auto dealer bookkeeping', 'automotive accounting automation', 'dealer financial management'],
  },
  'comm-center': {
    title: 'Dealership Communication Center — Phone, Text, WhatsApp',
    description: 'Every call, text, and message in one place. AI reads the mood of every conversation and flags problems. 2.4 min response time, 8.4/10 satisfaction score.',
    keywords: ['dealership communication software', 'auto dealer messaging platform', 'dealer phone system', 'automotive customer communication'],
  },
  'inventory': {
    title: 'Auto Dealer Inventory Management Software',
    description: 'AI tells you which cars will sell fast and which ones to wholesale — before they lose value. 28.5 day turn time, +$312 profit per unit.',
    keywords: ['auto dealer inventory management', 'car lot inventory software', 'vehicle inventory system', 'dealership stock management', 'automotive inventory intelligence'],
  },
  'stagg-portal': {
    title: 'Dealership Vendor & Partner Management Portal',
    description: 'Manage outside teams like they work for you. Send jobs to partner firms, track their work, and pay them automatically. No phone tag, no spreadsheets.',
    keywords: ['dealership vendor management', 'auto dealer partner portal', 'dealer subcontractor management', 'automotive vendor tracking'],
  },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const meta = seoMeta[params.slug];
  if (!meta) return {};
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: `${meta.title} | DMSPilot`,
      description: meta.description,
      url: `https://dmspilot.com/solutions/${params.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `/solutions/${params.slug}`,
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
  return <ClientPage slug={slug} />;
}
