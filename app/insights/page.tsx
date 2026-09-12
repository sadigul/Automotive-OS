import type { Metadata } from 'next';
import InsightsClient from './insights-client';

export const metadata: Metadata = {
  title: 'Insights and Market Intelligence — DMSPilot Automotive OS',
  description: 'Actionable research, profitability studies, and operational benchmarks for modern automotive dealership leaders.',
  keywords: ['automotive dealer insights', 'dealership profitability study', 'DMS market research', 'auto retail trends', 'F&I desking research'],
};

export default function InsightsPage() {
  return <InsightsClient />;
}
