import { Suspense } from 'react';
import RequestAccessClientPage from './client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Access — Get Your Free DMSPilot Demo',
  description: 'Request a free demo of DMSPilot dealer management system. Get started in minutes — no contracts, no setup fees. Replace CDK, Reynolds, and Dealertrack today.',
  keywords: ['DMS demo', 'dealer management system trial', 'auto dealer software demo', 'free DMS trial'],
  openGraph: {
    title: 'Get Your Free DMSPilot Demo',
    description: 'Request access to the #1 cloud dealer management system. No contracts, no setup fees.',
    url: 'https://dmspilot.com/request-access',
  },
  alternates: {
    canonical: '/request-access',
  },
};

export default function Page() {
  return (
    <Suspense>
      <RequestAccessClientPage />
    </Suspense>
  );
}
