import { sectorsData } from '@/lib/sectors-data';
import ClientPage from './client-page';
import type { Metadata } from 'next';

const sectorSeoMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  'dealerships': {
    title: 'Automotive Dealership Software & Enterprise DMS — DMSPilot',
    description: 'The open operating system for single stores and 50+ rooftop dealership groups. Multi-store inventory sync, penny-perfect desking, and automated daily ledger close.',
    keywords: ['dealership DMS software', 'auto dealer operating system', 'multi-rooftop dealer software', 'car dealership inventory sync', 'deal desking software'],
  },
  'manufacturers': {
    title: 'Automotive OEM & Vehicle Manufacturer Solutions — DMSPilot',
    description: 'Direct factory data pipelines, automated warranty reconciliation, and synchronized Tier-1 distribution networks without legacy mainframe intermediaries.',
    keywords: ['automotive OEM software', 'vehicle manufacturer telemetry', 'automated warranty processing', 'factory vehicle build tracking', 'dealer allocation engine'],
  },
  'service-centers': {
    title: 'Service Centers, Collision Bays & Fixed Ops Software — DMSPilot',
    description: 'Paperless digital MPI, automated technician bay dispatching, barcode parts billing, and 1-click customer SMS approvals for auto repair shops and collision centers.',
    keywords: ['auto repair shop software', 'digital MPI inspection', 'technician bay dispatch', 'fixed ops software', 'auto repair text to pay'],
  },
  'retailers-parts': {
    title: 'Auto Parts Distributors & Retail Counter Software — DMSPilot',
    description: 'Lightning-fast 500k+ SKU lookups, automated wholesale replenishment, universal interchange cross-referencing, and B2B trade ordering portals.',
    keywords: ['auto parts distribution software', 'parts counter inventory', 'interchange parts catalog', 'wholesale auto parts B2B', 'core deposit tracking'],
  },
  'logistics-transport': {
    title: 'Vehicle Logistics, Haulers & Transport Networks — DMSPilot',
    description: 'Auto-hauler route dispatching, real-time VIN tracking, mobile photographic condition reports, and electronic Bill of Lading (eBOL) delivery.',
    keywords: ['auto transport software', 'car hauler dispatch software', 'electronic BOL eBOL', 'vehicle logistics tracking', 'VIN damage inspection'],
  },
  'commercial-fleets': {
    title: 'Commercial & Municipal Fleet Maintenance Software — DMSPilot',
    description: 'Predictive maintenance schedules, national fleet billing accounts, OBD-II telemetry tracking, and complete vehicle lifecycle cost management.',
    keywords: ['commercial fleet management', 'municipal fleet maintenance software', 'fleet OBD-II telemetry', 'preventative maintenance tracking', 'fleet consolidated billing'],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = sectorSeoMeta[slug];
  const sector = sectorsData[slug];
  
  if (!meta && !sector) return {};
  
  const title = meta?.title || `${sector?.title} — DMSPilot`;
  const description = meta?.description || sector?.tagline || '';
  const keywords = meta?.keywords || [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | DMSPilot`,
      description,
      url: `https://dmspilot.com/who-we-serve/${slug}`,
      type: 'website',
      images: [
        {
          url: sector?.heroImage || '/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical: `/who-we-serve/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(sectorsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ClientPage slug={slug} />;
}
