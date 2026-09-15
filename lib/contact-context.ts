import { solutionsData } from '@/lib/solutions-data';
import { sectorsData } from '@/lib/sectors-data';

export type InquiryType = 'demo' | 'quote' | 'migration' | 'consultation';

export interface ContactContext {
  sourceType: 'solution' | 'sector' | 'migration' | 'general';
  slug: string;
  title: string;
  categoryLabel: string;
  tagline: string;
  backUrl: string;
  backLabel: string;
  defaultInquiryType: InquiryType;
  defaultSubject: string;
  defaultMessage: string;
  quickPrompts: string[];
  selectedModuleSlugs: string[];
}

export function getContactContext(params: {
  module?: string | null;
  sector?: string | null;
  mode?: string | null;
  solution?: string | null;
  from?: string | null;
}): ContactContext {
  const rawKey = (params.sector || params.solution || params.module || params.from || '').toLowerCase().trim();
  const isSuiteMode = params.mode === 'suite' || params.mode === 'quote';

  // 1. Check if it's the Migration Hub
  if (rawKey === 'migration') {
    return {
      sourceType: 'migration',
      slug: 'migration',
      title: 'Zero-Downtime Migration Hub',
      categoryLabel: 'Data & DMS Transition',
      tagline: 'Switch from legacy DMS systems with zero downtime and guaranteed zero data loss.',
      backUrl: '/migration',
      backLabel: 'Back to Migration Hub',
      defaultInquiryType: 'migration',
      defaultSubject: 'Legacy DMS Migration Assessment & Data Audit',
      defaultMessage: 'Hello DMSPilot team, we are evaluating a transition from our legacy DMS and would like to schedule a zero-downtime feasibility audit, discuss data extraction timelines, and review migration risk mitigation.',
      quickPrompts: [
        'Zero-Downtime Timeline',
        'CDK / Reynolds Data Extraction',
        '30-Day Transition Window',
        'Parallel Ingestion Testing',
        'OEM Dealer Group SLA'
      ],
      selectedModuleSlugs: ['enterprise-erp', 'dms']
    };
  }

  // 2. Check if it matches a Sector Suite (from sectorsData)
  if (rawKey && sectorsData[rawKey]) {
    const sector = sectorsData[rawKey];
    const isSuite = isSuiteMode || rawKey.includes('suite') || !!sector.suiteName;
    const suiteTitle = sector.suiteName || `${sector.title} Operating Suite`;

    return {
      sourceType: 'sector',
      slug: rawKey,
      title: isSuite ? suiteTitle : sector.title,
      categoryLabel: 'Sector Operating Suite',
      tagline: sector.tagline || sector.overview || 'Tailored automotive retail infrastructure.',
      backUrl: `/who-we-serve/${rawKey}`,
      backLabel: `Back to ${sector.title}`,
      defaultInquiryType: isSuiteMode ? 'quote' : 'demo',
      defaultSubject: isSuite 
        ? `${sector.title} Operating Suite Deployment & Pricing`
        : `${sector.title} Enterprise Consultation`,
      defaultMessage: `Hello DMSPilot team, we are evaluating DMSPilot for ${sector.title.toLowerCase()}. We would like to schedule an executive demonstration, discuss multi-location deployment, and receive tailored suite pricing.`,
      quickPrompts: [
        'Complete Suite Deployment',
        'Multi-Store Rollout Plan',
        'Legacy DMS Co-existence',
        'OEM Certification & Compliance',
        'Consolidated Group Reporting',
        'Enterprise SLA Terms'
      ],
      selectedModuleSlugs: sector.solutionsOffered?.map(s => s.slug).slice(0, 3) || ['enterprise-erp', 'sales-crm']
    };
  }

  // 3. Check if it matches a Solution Module (from solutionsData)
  const normalizedModule = rawKey.replace(/^solution-/, '');
  const solutionEntry = (solutionsData as Record<string, { title: string; tagline?: string; description?: string }>)[normalizedModule];

  if (normalizedModule && solutionEntry) {
    return {
      sourceType: 'solution',
      slug: normalizedModule,
      title: solutionEntry.title,
      categoryLabel: 'Solution Module',
      tagline: solutionEntry.tagline || solutionEntry.description || 'Targeted automotive software solution.',
      backUrl: `/solutions/${normalizedModule}`,
      backLabel: `Back to ${solutionEntry.title}`,
      defaultInquiryType: 'demo',
      defaultSubject: `${solutionEntry.title} Demonstration & Evaluation`,
      defaultMessage: `Hello DMSPilot team, we are interested in a live walkthrough of ${solutionEntry.title}. We'd like to explore how it integrates into our dealership workflow and review implementation timelines.`,
      quickPrompts: [
        'Live Product Walkthrough',
        'Integration with Existing DMS',
        'API & Webhook Feeds',
        'Pricing & Monthly Tiers',
        'Multi-Rooftop Sync',
        'Staff Onboarding Timeline'
      ],
      selectedModuleSlugs: [normalizedModule]
    };
  }

  // 3b. Check if it's Custom Software
  if (normalizedModule === 'custom-software' || rawKey === 'custom-software') {
    return {
      sourceType: 'solution',
      slug: 'custom-software',
      title: 'Custom Software',
      categoryLabel: 'Custom Engineering & Architecture',
      tagline: 'Tailor-made automotive workflows, bespoke DMS integrations, proprietary dealer portals, and custom modules.',
      backUrl: '/',
      backLabel: 'Back to Platform Overview',
      defaultInquiryType: 'consultation',
      defaultSubject: 'Custom Automotive Software Architecture & Development Inquiry',
      defaultMessage: 'Hello DMSPilot engineering team, we have specific custom software requirements for our automotive operation and would like to schedule a consultation to discuss bespoke module development and integrations.',
      quickPrompts: [
        'Custom Workflow Automation',
        'Bespoke DMS Integrations',
        'Proprietary Dealer Portals',
        'Custom API & Telematics Feeds',
        'Dedicated Engineering Team',
        'Technical Feasibility & Timeline'
      ],
      selectedModuleSlugs: ['custom-software']
    };
  }

  // 4. Fallback: General Enterprise Inquiry
  return {
    sourceType: 'general',
    slug: 'general',
    title: 'Enterprise Automotive OS',
    categoryLabel: 'Direct Architecture Desk',
    tagline: 'Modern, high-performance operating software for automotive dealer groups and fleets.',
    backUrl: '/',
    backLabel: 'Back to Platform Overview',
    defaultInquiryType: 'demo',
    defaultSubject: 'Enterprise Platform Consultation & Walkthrough',
    defaultMessage: 'Hello DMSPilot team, we would like to schedule a platform consultation to see how DMSPilot can replace our fragmented automotive software and streamline our group operations.',
    quickPrompts: [
      'Full Platform Walkthrough',
      'Multi-Rooftop Architecture',
      'Zero-Downtime Migration',
      'Custom OEM Integration',
      'Group Licensing & Pricing',
      'Security & SLA Guarantee'
    ],
    selectedModuleSlugs: ['enterprise-erp']
  };
}
