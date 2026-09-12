import type { Metadata } from 'next';
import BlogClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Blog & Engineering Journal — DMSPilot Automotive OS',
  description: 'In-depth dealership profitability benchmarks, automotive retail research, and modern software engineering analyses for dealership leaders and operators.',
  keywords: [
    'automotive dealership blog',
    'dealership software insights',
    'DMS engineering journal',
    'automotive retail benchmarks',
    'F&I desking research',
    'fixed operations profitability'
  ],
};

export default function BlogPage() {
  return <BlogClientPage />;
}
