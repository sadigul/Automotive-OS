import type { Metadata } from 'next';
import MigrationClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Zero-Downtime Dealership DMS Migration Platform — DMSPilot Automotive OS',
  description: 'Safely migrate 100% of historical DMS data from CDK, Reynolds & Reynolds, Dealertrack, Autosoft, and legacy mainframes with zero operational downtime and zero lost deals.',
  keywords: [
    'dealership DMS migration',
    'CDK migration',
    'Reynolds and Reynolds replacement',
    'Dealertrack migration',
    'automotive database migration',
    'DMS data extraction',
    'dealership software transition'
  ],
};

export default function MigrationPage() {
  return <MigrationClientPage />;
}
