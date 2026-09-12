import { 
  Building2, 
  Factory, 
  Wrench, 
  Store, 
  Truck, 
  ShieldCheck, 
  Car, 
  Cpu, 
  Layers, 
  BarChart3, 
  Zap, 
  FileCheck2, 
  Workflow, 
  Users, 
  Radio
} from 'lucide-react';

export interface SectorData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  color: 'blue' | 'purple' | 'sky' | 'orange' | 'emerald' | 'rose' | 'indigo' | 'teal';
  icon: any;
  heroImage: string;
  overview: string;
  
  // Executive Metrics
  stats: {
    value: string;
    label: string;
    detail: string;
  }[];

  // Pain Points of Current Legacy Systems
  legacyPainPoints: {
    title: string;
    description: string;
  }[];

  // Core Capabilities of DMSPilot
  keyCapabilities: {
    icon: any;
    title: string;
    description: string;
    highlight: string;
  }[];

  // Operational Workflow Steps
  workflow: {
    step: string;
    title: string;
    desc: string;
  }[];

  // Integrated Suite Metadata
  suiteName?: string;
  suiteTagline?: string;

  // Specific Solution Offerings for this Sector (Complete Suite)
  solutionsOffered: {
    title: string;
    description: string;
    slug: string;
    tag: string;
    category?: string;
    deliverables: string[];
  }[];

  // Tailored Onboarding & Migration Process
  onboardingProcess: {
    phase: string;
    title: string;
    timeframe: string;
    description: string;
    deliverables: string[];
  }[];

  // Sector Quote Configuration
  quoteConfig: {
    unitLabel: string;
    defaultUnits: number;
    unitMin: number;
    unitMax: number;
    unitStep: number;
    tierThresholds: { starter: number; pro: number; enterprise: number };
    popularAddons: string[];
  };

  // Technical Specifications & Compliance
  techHighlights: string[];

  // Real Customer Outcome / ROI
  caseStudyPreview: {
    client: string;
    role: string;
    quote: string;
    metric: string;
  };
}

export const sectorsData: Record<string, SectorData> = {
  'dealerships': {
    id: 'dealerships',
    slug: 'dealerships',
    title: 'Single Stores & Multi-Rooftop Dealerships',
    tagline: 'The unified automotive operating system engineered for single rooftops and multi-store groups—unifying real-time lot inventory, sub-second deal desking, service drive operations, and continuous accounting.',
    badge: 'Automotive Retail & Groups',
    color: 'blue',
    icon: Building2,
    heroImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=2000&q=80',
    overview: 'DMSPilot empowers independent stores and 50+ rooftop dealership groups with an integrated, high-performance operating platform. Synchronize multi-store vehicle inventory in real-time, desk penny-perfect deals across 40+ captive and non-captive lenders, dispatch paperless service bays, and auto-close daily financial ledgers with complete GAAP compliance.',
    stats: [
      {
        value: '4.2x',
        label: 'Faster Deal Desking',
        detail: 'Instant side-by-side lease, finance, and cash comparisons with automated lender callbacks.',
      },
      {
        value: '100%',
        label: 'Live Inventory Sync',
        detail: 'Sub-50ms lot updates across all rooftops, syndicated to all digital channels.',
      },
      {
        value: '60%',
        label: 'Lower Operating Cost',
        detail: 'Eliminate monthly monopoly data access fees, proprietary hardware, and per-seat taxes.',
      },
      {
        value: '1-Click',
        label: 'Daily Ledger Close',
        detail: 'Every RO, sale, and vehicle trade books itself directly into the consolidated General Ledger.',
      },
    ],
    legacyPainPoints: [
      {
        title: 'Legacy Monopolies & Data Hostage Fees',
        description: 'Traditional mainframe providers charge thousands per month just to access your own dealership data, blocking third-party CRM and marketing integrations.',
      },
      {
        title: 'Disconnected Software Siloes',
        description: 'Sales managers desk in one tool, F&I calculates in another, service operates in isolation, and accounting reconciles paper contracts days later.',
      },
      {
        title: 'Lost Lot Equity & Multi-Store Blindspots',
        description: 'Managers cannot easily trade or allocate aging units between rooftop locations, resulting in premature wholesale losses and high flooring interest.',
      },
    ],
    keyCapabilities: [
      {
        icon: Zap,
        title: 'Penny-Perfect Deal Desking',
        description: 'Pull live lender tiers, state-specific tax rules, factory incentives, and equity mining calculations in real-time on any tablet or desktop.',
        highlight: 'Sub-second bank approvals & e-sign',
      },
      {
        icon: Layers,
        title: 'Multi-Rooftop Fleet & Lot Allocations',
        description: 'View all inventory across 1 to 50+ locations in a single cockpit. Rebalance aged units and execute inter-store transfers with one click.',
        highlight: 'Automated flooring & trade transfers',
      },
      {
        icon: BarChart3,
        title: 'Continuous Autonomous Accounting',
        description: 'Eliminate end-of-month panic. Contracts in transit, floor plan balances, and repair order revenue auto-reconcile against bank feeds daily.',
        highlight: 'GAAP-compliant real-time P&L',
      },
      {
        icon: Users,
        title: 'Omni-Channel Customer Equity Engine',
        description: 'Identify service customers with positive vehicle equity and automate targeted trade-in upgrade offers before they leave the waiting lounge.',
        highlight: '28% higher service-to-sales conversion',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Customer Check-In & Equity Scan',
        desc: 'Scan license plate or VIN on arrival. Instant trade equity, open recalls, and purchase history are displayed.',
      },
      {
        step: '02',
        title: 'Interactive Multi-Lender Desking',
        desc: 'Present penny-perfect payment matrix. Run automated credit tiers with 40+ captive and non-captive lenders.',
      },
      {
        step: '03',
        title: 'Remote or In-Store E-Contracting',
        desc: 'Generate FTC-compliant digital contracts. Capture biometric digital signatures on mobile or showroom terminals.',
      },
      {
        step: '04',
        title: 'Auto-Closing Financial Ledger',
        desc: 'Vehicle is marked sold, trade-in is assigned stock number, and accounting entries post automatically.',
      },
    ],
    suiteName: 'The All-In-One Dealership Operating Suite',
    suiteTagline: 'A unified 7-module operational ecosystem connecting your vehicle inventory, desking, service bays, and general ledger onto a single real-time data core.',
    solutionsOffered: [
      {
        title: 'Enterprise Dealership ERP',
        description: 'Multi-location real-time vehicle ledger, live inventory pooling, aging alerts, floor plan balance auditing, and consolidated GM cockpit across all rooftops.',
        slug: 'enterprise-erp',
        tag: 'Operational Backbone',
        category: 'Core Operations',
        deliverables: ['Live Multi-Store Inventory Pool', 'Flooring Interest Audit Engine', 'Inter-Store Trade Routing'],
      },
      {
        title: 'Sales CRM & Lead Pipeline',
        description: 'High-velocity showroom CRM with customer equity mining, 2-way SMS/WhatsApp chat, and automated lead routing that stops lost sales.',
        slug: 'sales-crm',
        tag: 'Lead & Showroom',
        category: 'Sales & Marketing',
        deliverables: ['Trade Equity Mining Scanner', 'Omnichannel 2-Way Text Inbox', 'Showroom Up-System & Desk Queue'],
      },
      {
        title: 'Digital Retail & Deal Desking',
        description: 'Penny-perfect payment matrix calculations with instant captive and non-captive lender approvals, remote customer e-sign, and rate desking.',
        slug: 'digital-retail',
        tag: 'F&I & Desking',
        category: 'Sales & F&I',
        deliverables: ['40+ Direct Lender Callbacks', 'Remote Digital Contracting', 'Live F&I Menu & Aftermarket Desking'],
      },
      {
        title: 'Service Bay & Precision Parts',
        description: 'Paperless digital MPI with 15-second customer video inspections, barcode bay parts billing, and 1-click text-to-pay authorization.',
        slug: 'service-bay',
        tag: 'Fixed Operations',
        category: 'Fixed Ops',
        deliverables: ['Mobile Video MPI Inspections', 'Bay Technician Dispatching', 'Instant SMS Estimate Pay'],
      },
      {
        title: 'Continuous Dealership Accounting',
        description: 'Autonomous financial ledger that auto-posts vehicle sales, parts tickets, and floor plan payoffs daily into balanced GAAP general ledgers.',
        slug: 'accounting',
        tag: 'Financial Control',
        category: 'Financial Control',
        deliverables: ['Daily General Ledger Auto-Close', 'Live Bank Feed Reconciliation', 'FTC Safeguards Audit Logs'],
      },
      {
        title: 'Autonomous Dealership AI',
        description: '24/7 conversational voice receptionist, deal desk margin co-pilot for payment optimization, and automated technician skill-matched bay dispatch.',
        slug: 'ai-solutions',
        tag: 'Dealership AI',
        category: 'Autonomous AI',
        deliverables: ['24/7 Voice & SMS Front Desk', 'Deal Desk Margin Co-Pilot', 'Predictive Trade-In Re-engagement'],
      },
      {
        title: 'E-Commerce & Digital Showroom',
        description: 'High-converting branded storefront with 360° vehicle spinners, live trade-in equity estimator, and instant online credit card reservation deposits.',
        slug: 'ecommerce',
        tag: 'Digital Showroom',
        category: 'Digital Retail',
        deliverables: ['Instant Online Vehicle Deposit', '360° Interactive Showroom', 'Live Trade-In Value Generator'],
      },
    ],
    onboardingProcess: [
      {
        phase: 'Phase 01',
        title: 'Legacy System & DMS Audit',
        timeframe: 'Days 1 - 3',
        description: 'Our enterprise migration team connects directly to your existing CDK, Reynolds, or Dealertrack DMS to extract and audit complete vehicle inventory, customer records, and 10+ years of financial history.',
        deliverables: ['Full Data Dictionary Mapping', 'General Ledger Integrity Audit', 'Zero-Downtime Migration Blueprint'],
      },
      {
        phase: 'Phase 02',
        title: 'Automated Ingestion & Parallel Sync',
        timeframe: 'Days 4 - 8',
        description: 'Automated ETL pipelines ingest all VIN records, parts catalogs, active repair orders, and deal jackets into your isolated DMSPilot cloud instance with continuous shadow syncing.',
        deliverables: ['Live Inventory Cloud Mirroring', 'Parts Interchange Normalization', 'Lender & F&I Rate Table Setup'],
      },
      {
        phase: 'Phase 03',
        title: 'Department Role Configuration & Training',
        timeframe: 'Days 9 - 12',
        description: 'We configure role-based permissions for sales managers, desking desks, service advisors, and controllers, conducting interactive role-specific training sessions on desktop and mobile tablets.',
        deliverables: ['Custom Role Permission Matrix', 'Advisors & Technicians App Rollout', 'Hands-on Shadow Desking Sessions'],
      },
      {
        phase: 'Phase 04',
        title: 'Overnight Cutover & Day-1 White-Glove Support',
        timeframe: 'Days 13 - 14',
        description: 'Final delta cutover happens overnight during off-peak hours with zero retail interruption. Dedicated enterprise architects remain on-site and in your live command room for seamless operations.',
        deliverables: ['Zero-Downtime Weekend Cutover', 'Dedicated On-Site Architect Team', '24/7 Priority SLA Guarantee'],
      },
    ],
    quoteConfig: {
      unitLabel: 'Dealership Rooftops',
      defaultUnits: 3,
      unitMin: 1,
      unitMax: 50,
      unitStep: 1,
      tierThresholds: { starter: 1, pro: 5, enterprise: 15 },
      popularAddons: [
        'AI Voice Receptionist & BDC Dialer',
        'Omni-Channel Multi-Store Syndication',
        'Advanced F&I 40+ Lender Matrix',
        'Automated Daily Ledger Reconciliation',
      ],
    },
    techHighlights: [
      'Cloud-Native Multi-Tenant Architecture (SOC 2 Type II)',
      'FTC Safeguards Rule & IRS Form 8300 Audit Ready',
      'Real-Time Open REST & GraphQL APIs with Webhooks',
      'Sub-50ms Global Query Latency with High Availability',
    ],
    caseStudyPreview: {
      client: 'Apex Automotive Group',
      role: 'Chief Operating Officer (14 Dealership Locations)',
      quote: 'DMSPilot replaced three legacy vendors across our 14 stores in a single weekend. Our desking time dropped from 45 minutes to under 8 minutes, and our monthly software bill was cut in half.',
      metric: '+$1.4M Annual Gross Profit Increase',
    },
  },

  'manufacturers': {
    id: 'manufacturers',
    slug: 'manufacturers',
    title: 'Automotive Manufacturers & OEM Brands',
    tagline: 'Direct, bi-directional factory data pipelines, automated warranty validation, and synchronized Tier-1 distribution networks.',
    badge: 'OEM & Factory Assembly',
    color: 'purple',
    icon: Factory,
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    overview: 'Eliminate legacy third-party data tollgates between factory assembly lines and retail dealer points. DMSPilot provides automotive OEMs and EV manufacturers with direct, high-frequency telemetry, live vehicle build status tracking, automated warranty reconciliation, and unified regional allocation engines.',
    stats: [
      {
        value: '<50ms',
        label: 'Factory Data Latency',
        detail: 'Direct telemetry from manufacturing lines to retail point-of-sale systems.',
      },
      {
        value: '99.99%',
        label: 'EDI / API Uptime',
        detail: 'Zero downtime guaranteed for factory ordering, VIN syndication, and parts ordering.',
      },
      {
        value: '$0',
        label: 'Third-Party Tollgate Fees',
        detail: 'Direct OEM-to-dealer connection with no intermediary monopolies extracting data tariffs.',
      },
      {
        value: '100%',
        label: 'Automated Warranty Adjudication',
        detail: 'Instant factory labor time guides and diagnostic code matching for 1-day claim payouts.',
      },
    ],
    legacyPainPoints: [
      {
        title: 'Monopolistic Data Intermediaries',
        description: 'Legacy aggregators charge exorbitant monthly tolls to pass build sheets, delivery statuses, and warranty claims between OEMs and dealerships.',
      },
      {
        title: 'Fragmented Retail Order Tracking',
        description: 'Customers and dealers lack visibility into real-time vehicle production status, logistics transport stages, and port-of-entry milestones.',
      },
      {
        title: 'Slow, Fraud-Prone Warranty Processing',
        description: 'Paper warranty submissions and mismatched labor operation codes delay manufacturer reimbursements by up to 60 days.',
      },
    ],
    keyCapabilities: [
      {
        icon: Workflow,
        title: 'Direct Factory Telemetry Pipeline',
        description: 'Stream vehicle build sheets, Monroney window stickers, and component serial numbers directly to dealerships the instant a VIN is assigned.',
        highlight: 'Zero latency OEM syndication',
      },
      {
        icon: ShieldCheck,
        title: 'Automated Warranty Reconciliation',
        description: 'Real-time validation against factory labor guides and technical service bulletins (TSBs), automating claim approvals with zero manual adjudication.',
        highlight: '94% first-pass claim acceptance',
      },
      {
        icon: Cpu,
        title: 'Dynamic Regional Allocation Engine',
        description: 'Optimize dealer production allocations using live regional sales velocity, local dealer turn rates, and customer pre-order queues.',
        highlight: 'Reduced lot aging & optimized supply',
      },
      {
        icon: Radio,
        title: 'Connected Vehicle Telematics & OTA Ops',
        description: 'Ingest live vehicle health diagnostics, battery telemetry for EVs, and trigger targeted dealer recall service invitations automatically.',
        highlight: 'Proactive maintenance dispatching',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Factory VIN Assignment & Telemetry',
        desc: 'Vehicle build specification is pushed directly to the dealership inventory pool with high-resolution digital window sticker.',
      },
      {
        step: '02',
        title: 'Regional Logistics & Railhead Tracking',
        desc: 'Live milestones track hauler departure, port arrival, and carrier ETA with automated dealer notifications.',
      },
      {
        step: '03',
        title: 'Delivery & Point-of-Sale Activation',
        desc: 'Dealer PDI inspection completed on mobile. Connected vehicle services and owner warranties activate automatically.',
      },
      {
        step: '04',
        title: 'Automated Warranty & Recall Lifecycle',
        desc: 'Diagnostic trouble codes trigger pre-authorized repair orders, pulling OEM parts and crediting dealer accounts instantly.',
      },
    ],
    suiteName: 'The Connected OEM Factory & Distribution Suite',
    suiteTagline: 'Direct factory data streams, warranty adjudication, regional allocations, and connected vehicle telemetry.',
    solutionsOffered: [
      {
        title: 'Factory Enterprise ERP & Telematics Sync',
        description: 'High-throughput Kafka event pipeline streaming build sheets, Monroney window stickers, and assembly line battery telemetry to certified retail points.',
        slug: 'enterprise-erp',
        tag: 'Factory Operations',
        category: 'Core Operations',
        deliverables: ['Real-Time EDI 830/850/856 Integration', 'Sub-50ms VIN Syndication API', 'Automated Monroney PDF Generator'],
      },
      {
        title: 'OEM Dealer Network CRM & Allocations',
        description: 'Centralized network command managing national reservation pipelines, dealership allocation scorecards, and regional vehicle turn telemetry.',
        slug: 'sales-crm',
        tag: 'Distribution Network',
        category: 'Sales & Network',
        deliverables: ['Dealer Allocation Scorecards', 'National Reservation Pipeline', 'Regional Turn-Rate Telemetry'],
      },
      {
        title: 'Automated Factory Warranty Service Bay',
        description: 'Algorithmic matching of dealer diagnostic trouble codes with factory flat-rate labor time guides for instant, audit-proof claim settlements.',
        slug: 'service-bay',
        tag: 'Warranty & Service',
        category: 'Fixed Ops',
        deliverables: ['94% Automated First-Pass Approvals', 'Electronic Core Tracking & Credits', 'TSB & Recall Push Notifications'],
      },
      {
        title: 'Multi-Entity Global Manufacturing Accounting',
        description: 'Consolidated multi-currency general ledger handling inter-company transfer pricing, dealer floor plan credit facilities, and supplier bill-of-materials clearing.',
        slug: 'accounting',
        tag: 'Global Accounting',
        category: 'Financial Control',
        deliverables: ['Automated Multi-Entity Settlement', 'Supplier BOM Payment Clearing', 'Dealer Rebate & Incentive Ledger'],
      },
      {
        title: 'Autonomous Demand & Supply Chain AI',
        description: 'Machine learning allocation of upcoming assembly line builds based on localized dealer turn velocity, days supply, and predictive consumer demand.',
        slug: 'ai-solutions',
        tag: 'Supply Chain AI',
        category: 'Autonomous AI',
        deliverables: ['Predictive Regional Demand Modeling', 'EV Battery State-of-Health AI', 'Assembly Queue Priority Engine'],
      },
      {
        title: 'Direct-to-Consumer Digital Showroom',
        description: 'Factory-certified online ordering experience allowing consumers to configure custom builds, place deposits, and route delivery to local dealerships.',
        slug: 'ecommerce',
        tag: 'Digital Retail',
        category: 'Digital Retail',
        deliverables: ['Custom Vehicle 3D Configurator', 'Direct Consumer Pre-Order Deposits', 'Certified Dealer Delivery Handshake'],
      },
    ],
    onboardingProcess: [
      {
        phase: 'Phase 01',
        title: 'Factory Protocol & EDI Specification',
        timeframe: 'Weeks 1 - 2',
        description: 'Enterprise integration architects map your OEM manufacturing assembly protocols, EDI 830/850/856 message formats, and diagnostic code dictionaries.',
        deliverables: ['OEM Interface Specification Document', 'Security & TISAX Compliance Audit', 'Sandboxed API Test Suite'],
      },
      {
        phase: 'Phase 02',
        title: 'High-Throughput Streaming Setup',
        timeframe: 'Weeks 3 - 4',
        description: 'We establish dedicated Kafka event streams, secure AS4 / VPN gateways, and configure sub-50ms global endpoints for factory VIN syndication.',
        deliverables: ['Dedicated OEM Event Pipelines', 'Automated Warranty Adjudication Rules', 'Synthetic Load & Stress Testing'],
      },
      {
        phase: 'Phase 03',
        title: 'Regional Dealer Network Pilot',
        timeframe: 'Weeks 5 - 6',
        description: 'Pilot deployment with select regional dealer networks to validate live window sticker generation, parts inventory reorders, and digital claim payouts.',
        deliverables: ['Regional Dealer Pilot Certification', 'Real-Time Telemetry Validation', 'Field Operations Feedback Refinement'],
      },
      {
        phase: 'Phase 04',
        title: 'Global Assembly Rollout & SLA Activation',
        timeframe: 'Week 7 Onward',
        description: 'Full production activation across all manufacturing plants and distribution hubs, backed by 99.99% enterprise uptime guarantee and dedicated OEM engineering squad.',
        deliverables: ['Global Multi-Region Production Deploy', '99.99% Uptime SLA Contract', 'Dedicated 24/7 OEM Support Squad'],
      },
    ],
    quoteConfig: {
      unitLabel: 'Assembly Plants / Distribution Hubs',
      defaultUnits: 2,
      unitMin: 1,
      unitMax: 25,
      unitStep: 1,
      tierThresholds: { starter: 1, pro: 3, enterprise: 8 },
      popularAddons: [
        'High-Throughput Dedicated Kafka Stream',
        'Automated EDI 830/850/856 Gateway',
        'Connected EV OTA Diagnostic Telemetry',
        'White-Label Dealer Ordering Portal',
      ],
    },
    techHighlights: [
      'ISO 27001 & TISAX Certified Security Architecture',
      'High-Throughput Kafka Event Streams for Telematics',
      'Automated Electronic Data Interchange (EDI 830, 850, 856)',
      'Sub-Second Global API Endpoints for Custom OEM Portals',
    ],
    caseStudyPreview: {
      client: 'Vanguard Electric Motors',
      role: 'VP of Global Distribution (Direct-to-Consumer & Retail Network)',
      quote: 'DMSPilot allowed us to bypass legacy mainframe intermediaries entirely. Our factory order-to-delivery visibility is now instantaneous across all 80 regional showroom hubs.',
      metric: '3.4x Faster Vehicle Delivery Cycle',
    },
  },

  'service-centers': {
    id: 'service-centers',
    slug: 'service-centers',
    title: 'Service Centers & Collision Bays',
    tagline: 'Paperless digital MPI, automated technician dispatching, barcode parts tracking, and 1-click SMS customer approvals.',
    badge: 'Fixed Operations & Mechanical',
    color: 'orange',
    icon: Wrench,
    heroImage: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1600&q=80',
    overview: 'Transform your service drive into high-margin, ultra-efficient operations. DMSPilot eliminates clipboards and unbilled technician hours with high-definition photo/video MPI inspections, automated labor time tracking, live parts barcode allocation, and instant mobile customer payment processing.',
    stats: [
      {
        value: '+38%',
        label: 'Labor Hours Billed',
        detail: 'Paperless MPI with photo proof yields substantially higher customer approval rates.',
      },
      {
        value: '<15s',
        label: 'Customer SMS Estimate Approval',
        detail: 'Customers review photos, select recommended repairs, and sign from their mobile phone.',
      },
      {
        value: '99.4%',
        label: 'Parts Inventory Accuracy',
        detail: 'Technicians scan parts directly onto Repair Orders at the bay, eliminating lost stock.',
      },
      {
        value: '0',
        label: 'Paper Clipboards & RO Printouts',
        detail: '100% cloud-native digital workflow from intake inspection to text-to-pay checkout.',
      },
    ],
    legacyPainPoints: [
      {
        title: 'Unbilled Labor & Missing Parts',
        description: 'Technicians take parts from the bin without recording them on paper ROs, and advisors forget to charge for extra diagnostic time.',
      },
      {
        title: 'Low Customer Trust & Delayed Approvals',
        description: 'Advisors waste hours playing phone tag with customers trying to explain complex repairs over the phone without visual proof.',
      },
      {
        title: 'Technician Bottlenecks & Idle Bays',
        description: 'Master mechanics wait around for parts delivery or authorization while simple lube and brake jobs pile up in the staging lanes.',
      },
    ],
    keyCapabilities: [
      {
        icon: Zap,
        title: 'Photo & Video Mobile MPI',
        description: 'Technicians record 15-second inspection videos showing worn brake pads or fluid leaks with clear green/yellow/red item classifications.',
        highlight: '68% higher upsell authorization',
      },
      {
        icon: Layers,
        title: 'Automated Bay Dispatching',
        description: 'Intelligent routing matches vehicle job difficulty with technician skill levels, certification tiers, and current bay availability.',
        highlight: 'Maximizes shop flat-rate efficiency',
      },
      {
        icon: BarChart3,
        title: 'Live Barcode Parts Billing',
        description: 'Technicians scan part barcodes with their mobile device camera. Parts automatically pull from stock and attach to the open Repair Order.',
        highlight: 'Eliminates unbilled parts leakage',
      },
      {
        icon: Users,
        title: 'Instant Text-to-Pay & Digital Checkout',
        description: 'Send itemized digital invoices via SMS or WhatsApp with 1-click Apple Pay, Google Pay, or integrated repair financing.',
        highlight: 'Faster vehicle release & higher CSI',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Mobile Lane Check-In',
        desc: 'Scan VIN and tire tread depth at drive-in. Advisor reviews service history and auto-generates preliminary RO.',
      },
      {
        step: '02',
        title: 'Technician Video Inspection',
        desc: 'Technician completes MPI on tablet, attaches video proof of recommended maintenance, and requests parts.',
      },
      {
        step: '03',
        title: '1-Click Customer Mobile Authorization',
        desc: 'Customer receives interactive text with video clips, selects approved items, and signs digitally.',
      },
      {
        step: '04',
        title: 'Digital Invoicing & Contactless Pay',
        desc: 'Repair completed, quality check verified, and customer pays via text before arriving for contactless key pickup.',
      },
    ],
    suiteName: 'The High-Velocity Service Center & Collision Bay Suite',
    suiteTagline: 'Transform repair bays into maximum-margin profit centers with video MPI, intelligent dispatch, and automated accounting.',
    solutionsOffered: [
      {
        title: 'Service Bay Command & Mobile Video MPI',
        description: 'Digital inspection suite allowing mechanics to record 15-second videos of worn components, building customer trust and driving immediate approvals.',
        slug: 'service-bay',
        tag: 'Bay Operations',
        category: 'Fixed Ops',
        deliverables: ['Mobile Video MPI Inspections', 'Tire Tread & Brake Pad Measurement Log', 'Direct SMS Video Delivery'],
      },
      {
        title: 'Technician Bay Dispatch & Shop ERP',
        description: 'Automated skill-matching algorithm that routes complex diagnostics to Master Technicians and express jobs to lube bays for maximum flat-rate hours.',
        slug: 'enterprise-erp',
        tag: 'Shop Operations',
        category: 'Core Operations',
        deliverables: ['Real-Time Bay Capacity Board', 'Labor Time Guide Multiplier', 'Technician Efficiency Telemetry'],
      },
      {
        title: 'Customer Service CRM & Retention',
        description: 'Automated service reminder engine tracking maintenance intervals, factory recalls, and dormant customer re-engagement via 2-way SMS.',
        slug: 'sales-crm',
        tag: 'Customer Retention',
        category: 'Customer CRM',
        deliverables: ['Automated Mileage Service Reminders', '2-Way SMS Customer Messaging', 'Lost Customer Re-engagement Engine'],
      },
      {
        title: 'Autonomous Fixed Ops Accounting',
        description: 'Streamline shop revenue reconciliation with automated technician payroll balancing, integrated card terminal POS, and parts statement auditing.',
        slug: 'accounting',
        tag: 'Shop Accounting',
        category: 'Financial Control',
        deliverables: ['1-Click Text-to-Pay / Apple Pay', 'Technician Flat-Rate Payroll Report', 'Daily Cash & Credit Ledger Close'],
      },
      {
        title: '24/7 AI Service Receptionist & Bay Co-Pilot',
        description: 'Conversational AI handling after-hours phone calls, answering repair status questions, and booking bay appointments directly into the shop schedule.',
        slug: 'ai-solutions',
        tag: 'Shop AI',
        category: 'Autonomous AI',
        deliverables: ['24/7 Voice & Phone Booking Bot', 'Automated Work Order Parts Estimator', 'Instant DTC Diagnostic Interpreter'],
      },
      {
        title: 'Digital Tires & Maintenance Storefront',
        description: 'Customer-facing online tire and service package booking portal with live pricing, license plate tire fitment matching, and appointment scheduling.',
        slug: 'ecommerce',
        tag: 'Online Booking',
        category: 'Digital Retail',
        deliverables: ['License Plate Tire Fitment Finder', 'Online Service Package Checkout', 'Self-Service Bay Reservation Calendar'],
      },
    ],
    onboardingProcess: [
      {
        phase: 'Phase 01',
        title: 'Bay Layout & Rate Configuration',
        timeframe: 'Days 1 - 2',
        description: 'We configure your physical shop bays, technician skill tiers, matrix labor rates, and integrate standard OEM labor time guides (Motor / Chilton).',
        deliverables: ['Shop Bay Digital Twin Mapping', 'Labor Rate & Pricing Matrix Setup', 'OEM Time Guide Calibration'],
      },
      {
        phase: 'Phase 02',
        title: 'Parts Catalog & Barcode Scanner Setup',
        timeframe: 'Days 3 - 5',
        description: 'Import current on-hand parts stock, bin locations, and supplier accounts. Equip shop tablets with high-speed barcode scanning software.',
        deliverables: ['Parts Inventory Master Ingestion', 'Mobile Tablet Scanner App Install', 'Supplier Electronic Ordering Link'],
      },
      {
        phase: 'Phase 03',
        title: 'Advisor & Technician Hands-On Training',
        timeframe: 'Days 6 - 8',
        description: 'Advisors master mobile lane check-in and text-to-pay messaging, while technicians practice rapid video MPI inspections and bay dispatching.',
        deliverables: ['Advisor Lane Check-In Certification', 'Technician Video MPI Training', 'SMS Messaging Test Run'],
      },
      {
        phase: 'Phase 04',
        title: 'Live Service Drive Launch',
        timeframe: 'Days 9 - 10',
        description: 'Go live on the service drive with zero downtime. An expert fixed ops implementation specialist monitors your first 100 Repair Orders live.',
        deliverables: ['Zero-Downtime Live Drive Launch', 'Dedicated Fixed Ops Specialist On-Call', 'Post-Launch Efficiency Review'],
      },
    ],
    quoteConfig: {
      unitLabel: 'Service Bays',
      defaultUnits: 8,
      unitMin: 2,
      unitMax: 100,
      unitStep: 2,
      tierThresholds: { starter: 4, pro: 12, enterprise: 30 },
      popularAddons: [
        'Mobile HD Video MPI Cloud Storage',
        'Integrated SMS & WhatsApp Text-to-Pay Gateway',
        'OEM Labor Time Guide (Motor / Chilton)',
        'Technician Flat-Rate Pay & Bay Performance Suite',
      ],
    },
    techHighlights: [
      'Universal OEM Labor Time Guide Integration (Motor / Chilton)',
      'Automated Core Return & Parts Matrix Pricing Engine',
      'Integrated SMS & WhatsApp Business API Communication',
      'Direct Point-of-Sale Hardware & Card Terminal Integration',
    ],
    caseStudyPreview: {
      client: 'Precision Euro Autowerks',
      role: 'Director of Fixed Operations (8 Service Facilities)',
      quote: 'Switching to DMSPilot video MPI transformed our service department. Our average Repair Order increased by $180 per visit because customers can actually see what needs fixing.',
      metric: '+$420k Monthly Fixed Ops Revenue',
    },
  },

  'retailers-parts': {
    id: 'retailers-parts',
    slug: 'retailers-parts',
    title: 'Auto Parts Distributors & Retail Networks',
    tagline: 'High-speed 500k+ SKU lookups, automated wholesale replenishment, cross-reference interchange, and omni-channel checkout.',
    badge: 'Wholesale & Counter Retail',
    color: 'emerald',
    icon: Store,
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    overview: 'Power wholesale parts distribution and retail counter checkout with lightning-fast catalog search, dynamic bin location telemetry, automated core deposit tracking, and B2B wholesale trade accounts with custom pricing tiers.',
    stats: [
      {
        value: '<10ms',
        label: 'SKU Search Latency',
        detail: 'Instant full-text lookup across 500,000+ OEM and aftermarket parts catalogs.',
      },
      {
        value: '+28%',
        label: 'Wholesale Gross Margin',
        detail: 'Dynamic customer-tiered pricing matrices and automated interchange cross-referencing.',
      },
      {
        value: '100%',
        label: 'Core Tracking Accuracy',
        detail: 'Automated tracking of core deposit returns, scrap allowances, and manufacturer credits.',
      },
      {
        value: '24/7',
        label: 'B2B Trade Ordering Portal',
        detail: 'Wholesale repair shops place stock and emergency orders directly into your inventory ledger.',
      },
    ],
    legacyPainPoints: [
      {
        title: 'Slow, Clunky Catalog Lookups',
        description: 'Counter salespeople waste minutes flipping through legacy green-screen catalogs while customers and wholesale mechanics wait on hold.',
      },
      {
        title: 'Unreclaimed Manufacturer Cores',
        description: 'Unreturned core deposits and missing core tags cause tens of thousands in unrecoverable losses every quarter.',
      },
      {
        title: 'Stockouts of High-Velocity SKUs',
        description: 'Inflexible manual reordering leads to frequent stockouts of fast-moving filters, pads, and sensors while slow-moving parts gather dust.',
      },
    ],
    keyCapabilities: [
      {
        icon: Zap,
        title: 'Universal Part Interchange Search',
        description: 'Type any OEM part number, aftermarket SKU, or vehicle fitment specification to get instant cross-matches and live bin inventory.',
        highlight: 'Real-time stock across multiple hubs',
      },
      {
        icon: Layers,
        title: 'B2B Wholesale Ordering Portal',
        description: 'Provide commercial repair shops, fleet garages, and body shops with custom login portals, credit lines, and automated dispatch delivery.',
        highlight: 'Automated wholesale order intake',
      },
      {
        icon: BarChart3,
        title: 'Predictive Stock Replenishment',
        description: 'Machine learning analyzes historical seasonal demand and local shop orders to auto-generate vendor purchase orders before parts run out.',
        highlight: 'Minimizes dead stock & carrying costs',
      },
      {
        icon: ShieldCheck,
        title: 'Automated Core & Return Tracking',
        description: 'Barcode-tagged core tracking ensures every core deposit is collected at checkout and credited immediately upon return.',
        highlight: 'Zero lost core credits',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Instant Counter & Online Part Search',
        desc: 'Lookup part by VIN, license plate, or interchange number. View exact aisle, bin, and shelf location in milliseconds.',
      },
      {
        step: '02',
        title: 'Tiered Pricing & Account Billing',
        desc: 'Apply wholesale tier discount, check commercial credit limit, and add core charge automatically.',
      },
      {
        step: '03',
        title: 'Warehouse Pick & Route Dispatch',
        desc: 'Barcode pick list sent to warehouse mobile scanner. Driver route optimized for fast delivery to repair shop.',
      },
      {
        step: '04',
        title: 'Automatic Supplier Reordering',
        desc: 'Inventory drops below minimum reorder point, triggering automated electronic purchase order to supplier.',
      },
    ],
    suiteName: 'The Universal Parts Distribution & Retail Suite',
    suiteTagline: 'Universal interchange cataloging, wholesale B2B ordering, warehouse picking, and automated supplier replenishment.',
    solutionsOffered: [
      {
        title: 'Universal Interchange Catalog & Warehouse ERP',
        description: 'Sub-10ms full-text catalog indexing 500k+ OEM, aftermarket, and cross-reference part numbers with live warehouse aisle and bin coordinates.',
        slug: 'enterprise-erp',
        tag: 'Catalog Engine',
        category: 'Core Operations',
        deliverables: ['ACES & PIES Standard Compliance', 'Cross-Brand Interchange Matching', 'Multi-Warehouse Inventory Visibility'],
      },
      {
        title: 'B2B Wholesale Trade & Retail E-Commerce',
        description: 'High-performance online ordering portal allowing wholesale auto repair shops and retail buyers to look up fitments, check stock, and order with 1-click.',
        slug: 'ecommerce',
        tag: 'Wholesale E-Commerce',
        category: 'Digital Retail',
        deliverables: ['Custom Commercial Credit Lines', 'Scheduled Hot-Shot Delivery Dispatch', 'Automated Trade Invoice Generation'],
      },
      {
        title: 'Wholesale Counter CRM & Account Management',
        description: 'Dedicated commercial sales desk managing commercial garage accounts, volume discount tiers, contract terms, and dedicated sales reps.',
        slug: 'sales-crm',
        tag: 'Commercial Accounts',
        category: 'Customer CRM',
        deliverables: ['Commercial Account Spend Limits', 'Dedicated Sales Rep Territory Routing', 'Automated Commercial Quotation Builder'],
      },
      {
        title: 'Core Vault & Commercial Trade Accounting',
        description: 'Complete accounting suite tracking 100% of manufacturer core credits, customer scrap returns, wholesale net-30 terms, and cash reconciliations.',
        slug: 'accounting',
        tag: 'Core & Credit Ledger',
        category: 'Financial Control',
        deliverables: ['Automated Core Surcharge Collection', 'Manufacturer Credit Return Vault', 'Wholesale Net-30 Aging Ledger'],
      },
      {
        title: 'Predictive Replenishment & Purchasing AI',
        description: 'Smart purchasing engine that forecasts seasonal demand spikes, lead times, and regional consumption to generate vendor POs before stockouts.',
        slug: 'ai-solutions',
        tag: 'Inventory AI',
        category: 'Autonomous AI',
        deliverables: ['Dead Stock Identification & Liquidation', 'Automated Minimum/Maximum PO Generation', 'Vendor Lead Time Analytics'],
      },
      {
        title: 'Hot-Shot Delivery & Installer Network Dispatch',
        description: 'Dispatch hot-shot parts delivery drivers with mobile route sequencing, signature proof of delivery, and partner installer shop booking.',
        slug: 'service-bay',
        tag: 'Delivery Dispatch',
        category: 'Fixed Ops',
        deliverables: ['Driver Hot-Shot Dispatch App', 'Digital Proof-of-Delivery Sign-off', 'Certified Installer Referral Link'],
      },
    ],
    onboardingProcess: [
      {
        phase: 'Phase 01',
        title: 'Catalog & Wholesale Matrix Ingestion',
        timeframe: 'Days 1 - 4',
        description: 'We ingest your entire parts catalog, ACES/PIES fitment data, cross-reference interchange files, and customer-specific wholesale tier matrices.',
        deliverables: ['500k+ SKU Database Ingestion', 'Wholesale Pricing Matrix Setup', 'Customer Account Credit Line Import'],
      },
      {
        phase: 'Phase 02',
        title: 'Warehouse Bin Mapping & Scanner Setup',
        timeframe: 'Days 5 - 8',
        description: 'Map physical warehouse zones, aisles, and bin locations. Configure rugged mobile barcode scanners for rapid pick-pack-ship operations.',
        deliverables: ['Warehouse Zone & Bin Topology Map', 'Mobile Scanner Hardware Configuration', 'Delivery Route Driver App Setup'],
      },
      {
        phase: 'Phase 03',
        title: 'B2B Client Portal Launch & Counter Testing',
        timeframe: 'Days 9 - 12',
        description: 'Deploy the white-label wholesale client portal to key commercial repair accounts and conduct counter staff training on instant VIN search.',
        deliverables: ['B2B Trade Portal Live Configuration', 'Counter Staff Speed Search Training', 'Wholesale Account Welcome Notification'],
      },
      {
        phase: 'Phase 04',
        title: 'Live Cutover & Automated Replenishment',
        timeframe: 'Days 13 - 14',
        description: 'Full cutover of counter point-of-sale, wholesale accounts, and vendor EDI ordering with zero disruption to daily trade operations.',
        deliverables: ['Zero-Downtime Counter Cutover', 'Automated Vendor EDI Connection', '24/7 Dedicated Support Lead'],
      },
    ],
    quoteConfig: {
      unitLabel: 'Parts Distribution Hubs / Stores',
      defaultUnits: 2,
      unitMin: 1,
      unitMax: 30,
      unitStep: 1,
      tierThresholds: { starter: 1, pro: 4, enterprise: 10 },
      popularAddons: [
        '500k+ SKU ACES & PIES Standard Catalog',
        '24/7 B2B Wholesale Client Ordering Portal',
        'Predictive Machine Learning Replenishment',
        'Rugged Warehouse Pick & Pack Scanner Suite',
      ],
    },
    techHighlights: [
      'ACES & PIES Standard Automotive Catalog Compliance',
      'Electronic Core Deposit & Scrap Return Telemetry',
      'Dynamic Wholesale Matrix Tier Pricing Engine',
      'Integrated Route Dispatching & Mobile Signature on Delivery',
    ],
    caseStudyPreview: {
      client: 'Tri-State Auto Parts & Distribution',
      role: 'General Manager (4 Distribution Hubs, 420 B2B Accounts)',
      quote: 'DMSPilot allowed our counter team to handle twice as many calls per hour. Our wholesale clients love the 24/7 web portal, and our dead stock dropped by 24%.',
      metric: '+41% Wholesale Order Volume',
    },
  },

  'logistics-transport': {
    id: 'logistics-transport',
    slug: 'logistics-transport',
    title: 'Vehicle Logistics, Haulers & Transport Networks',
    tagline: 'Auto-hauler route dispatching, real-time VIN tracking, photo damage inspection, and electronic BOL delivery.',
    badge: 'Logistics & Auto Transport',
    color: 'sky',
    icon: Truck,
    heroImage: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80',
    overview: 'Streamline vehicle transportation and yard logistics with real-time driver dispatching, mobile photographic condition reports, automated multi-car load planning, and instant electronic Bill of Lading (eBOL) generation.',
    stats: [
      {
        value: 'Sub-1s',
        label: 'VIN Barcode Scanning',
        detail: 'Instant load verification and manifest matching using standard mobile smartphone camera.',
      },
      {
        value: '100%',
        label: 'Paperless eBOL Workflow',
        detail: 'Electronic bill of lading with photo damage proof and timestamped biometric signatures.',
      },
      {
        value: '18%',
        label: 'Fuel & Route Optimization',
        detail: 'Multi-vehicle load balancing and drop-off sequencing to minimize deadhead miles.',
      },
      {
        value: '0',
        label: 'Unresolved Damage Disputes',
        detail: 'High-res condition photos taken at origin protect carriers against fraudulent transit claims.',
      },
    ],
    legacyPainPoints: [
      {
        title: 'Lost Paper Bills of Lading (BOL)',
        description: 'Paper BOLs get stained, lost, or delayed in transit, creating multi-week delays in carrier payments and invoice reconciliation.',
      },
      {
        title: 'Costly Transit Damage Disputes',
        description: 'Without timestamped, high-resolution condition inspection photos at pickup, carriers are forced to pay for pre-existing lot damage.',
      },
      {
        title: 'Inefficient Hauler Route Grouping',
        description: 'Dispatchers manually plan multi-car loads across spreadsheets, leading to empty return trips and lost hauler capacity.',
      },
    ],
    keyCapabilities: [
      {
        icon: Zap,
        title: 'Mobile Photo & Damage Annotation App',
        description: 'Drivers walk around the vehicle, take mandatory 8-angle condition photos, and tag pre-existing scratches on an interactive 3D car diagram.',
        highlight: '100% legal damage protection',
      },
      {
        icon: Layers,
        title: 'Smart Multi-Car Load Dispatcher',
        description: 'Group 3 to 10-car hauler loads by destination geography, trailer weight limits, and delivery priority to maximize revenue per mile.',
        highlight: 'Zero deadhead transit planning',
      },
      {
        icon: BarChart3,
        title: 'Instant Electronic BOL & E-Sign',
        description: 'Origin and destination managers sign digitally on driver smartphones. Timestamped eBOL PDFs are emailed and archived instantly.',
        highlight: 'Instant proof-of-delivery payout',
      },
      {
        icon: ShieldCheck,
        title: 'Live GPS & Yard Lot Management',
        description: 'Track carrier fleet location in real-time, view port staging yard parking coordinates, and automate gate pass clearance.',
        highlight: 'Accurate customer delivery ETAs',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Dispatch & Load Assignment',
        desc: 'Carrier dispatcher assigns multi-car manifest to hauler. Driver receives vehicle pickup coordinates and gate passes.',
      },
      {
        step: '02',
        title: 'Pickup Inspection & eBOL Creation',
        desc: 'Driver scans VINs, photographs vehicle condition, and captures digital signature at auction or port origin.',
      },
      {
        step: '03',
        title: 'Transit Tracking & ETA Telemetry',
        desc: 'Real-time GPS coordinates stream to receiving dealership manager with automated arrival notice.',
      },
      {
        step: '04',
        title: 'Delivery Sign-off & Automated Billing',
        desc: 'Receiving manager verifies VINs, signs mobile eBOL, and carrier invoice auto-submits to accounting.',
      },
    ],
    suiteName: 'The Vehicle Logistics & Auto Hauler Suite',
    suiteTagline: 'Photographic mobile eBOL, trailer load optimization, yard telemetry, and instant freight factoring.',
    solutionsOffered: [
      {
        title: 'Multi-Car Load & Route Dispatch ERP',
        description: 'Intelligent manifest planning algorithm that groups multi-car loads by trailer weight ratings, route delivery sequences, and revenue per mile.',
        slug: 'enterprise-erp',
        tag: 'Load Optimization',
        category: 'Core Operations',
        deliverables: ['Deadhead Mile Reduction Engine', 'Multi-Stop Drop-Off Sequencing', 'Hauler Weight & Height Safety Check'],
      },
      {
        title: 'Photographic Mobile eBOL & Damage Inspection',
        description: 'Driver mobile application with mandatory 8-angle high-definition condition photos, scratch tagging on interactive 3D vehicle diagrams, and digital signatures.',
        slug: 'service-bay',
        tag: 'Mobile eBOL',
        category: 'Fixed Ops',
        deliverables: ['Timestamped High-Res Damage Vault', 'Biometric Origin/Destination Signatures', 'Instant eBOL PDF Auto-Dispatch'],
      },
      {
        title: 'Shipper & Auto Broker CRM Portal',
        description: 'Self-service commercial shipper portal where dealership groups, auto auctions, and car rental fleets track live VIN milestones and place transport orders.',
        slug: 'sales-crm',
        tag: 'Shipper Portal',
        category: 'Customer CRM',
        deliverables: ['Real-Time VIN Tracking Portal', 'Automated Rate Quote Generator', 'Direct Hauler Chat & Status Feeds'],
      },
      {
        title: 'Instant Carrier Pay & Factoring Ledger',
        description: 'Eliminate weeks of payment lag. Delivery sign-off automatically generates invoice packages and integrates directly with freight factoring accounts.',
        slug: 'accounting',
        tag: 'Carrier Settlement',
        category: 'Financial Control',
        deliverables: ['1-Day Proof-of-Delivery Invoicing', 'Direct Freight Factoring Export', 'Driver Settlement & Fuel Tax Tracking'],
      },
      {
        title: 'Live GPS Fleet & Yard Telemetry AI',
        description: 'Real-time location tracking for haulers and staging yards, automated auction gate pass clearance, and dynamic customer arrival ETAs.',
        slug: 'ai-solutions',
        tag: 'Fleet Telemetry',
        category: 'Autonomous AI',
        deliverables: ['Live Hauler Route Telematics', 'Port / Auction Staging Yard Grid', 'Automated Dealership Arrival Alerts'],
      },
      {
        title: 'Digital Transport Booking Storefront',
        description: 'Consumer and commercial auto transport booking engine with instant distance calculations, open vs. enclosed carrier pricing, and card checkout.',
        slug: 'ecommerce',
        tag: 'Online Booking',
        category: 'Digital Retail',
        deliverables: ['Instant Distance & Route Pricing', 'Open / Enclosed Trailer Toggle', 'Online Credit Card & ACH Checkout'],
      },
    ],
    onboardingProcess: [
      {
        phase: 'Phase 01',
        title: 'Hauler Fleet & ELD Telematics Audit',
        timeframe: 'Days 1 - 3',
        description: 'Audit carrier fleet specifications, trailer capacities, and connect existing FMCSA Electronic Logging Devices (ELD) and GPS telematics feeds.',
        deliverables: ['Hauler Fleet Capacity Profile', 'ELD & GPS Stream Integration', 'Driver Roster & License Setup'],
      },
      {
        phase: 'Phase 02',
        title: 'Auction & Dealership API Integration',
        timeframe: 'Days 4 - 7',
        description: 'Connect direct digital gate pass APIs for major auto auctions (Manheim, ADESA, Copart) and receiving dealership management systems.',
        deliverables: ['Auction Gate Pass Gateways', 'Dealer EDI Manifest Sync', 'Standardized eBOL Template Setup'],
      },
      {
        phase: 'Phase 03',
        title: 'Driver Mobile App Rollout & Verification',
        timeframe: 'Days 8 - 11',
        description: 'Deploy the driver mobile app to all transport operators, conducting rapid 10-minute training on photographic inspections and offline signing.',
        deliverables: ['Driver Mobile App Deployment', 'Photographic Inspection Verification', 'Offline Sync & e-Sign Testing'],
      },
      {
        phase: 'Phase 04',
        title: 'Live Dispatch Activation & Factoring Link',
        timeframe: 'Days 12 - 14',
        description: 'Switch all live haul dispatching and instant invoicing to DMSPilot, ensuring 100% paperless load execution from Day 1.',
        deliverables: ['Live Multi-Car Dispatch Board', 'Instant Factoring Ledger Integration', '24/7 Logistics Support Desk'],
      },
    ],
    quoteConfig: {
      unitLabel: 'Car Haulers / Transport Rigs',
      defaultUnits: 12,
      unitMin: 2,
      unitMax: 150,
      unitStep: 2,
      tierThresholds: { starter: 4, pro: 15, enterprise: 40 },
      popularAddons: [
        'Photographic 8-Angle Condition Cloud Vault',
        'FMCSA ELD Telematics Stream Integration',
        'Automated Multi-Car Load Sequencing Planner',
        'Instant Freight Factoring & Ledger Export',
      ],
    },
    techHighlights: [
      'Automated FMCSA Electronic Logging Device (ELD) Integration',
      'High-Resolution Condition Photo Archival with Cloud Backup',
      'Electronic Bill of Lading (eBOL) Compliant with VCR Standards',
      'Automated Carrier Pay & Factoring Ledger Reconciliation',
    ],
    caseStudyPreview: {
      client: 'TransCoast Auto Logistics',
      role: 'Operations Director (45 Multi-Car Haulers, 120,000+ Annual Moves)',
      quote: 'Eliminating paper BOLs saved us 15 hours of clerical paperwork every single week. False damage claims dropped to zero because every scratch is photographed before the hauler moves.',
      metric: '100% Paperless Logistics & 1-Day Pay Cycle',
    },
  },

  'commercial-fleets': {
    id: 'commercial-fleets',
    slug: 'commercial-fleets',
    title: 'Commercial Fleets, Municipalities & Asset Telemetry',
    tagline: 'Predictive maintenance schedules, national fleet billing accounts, OBD-II telemetry tracking, and vehicle lifecycle cost management.',
    badge: 'Fleet & Municipal Operations',
    color: 'teal',
    icon: Radio,
    heroImage: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=80',
    overview: 'Maintain maximum fleet uptime and control operational expenditure. DMSPilot provides commercial fleet operators, municipal utility fleets, and rental companies with centralized vehicle lifecycle records, automated preventative maintenance scheduling, live OBD-II diagnostic streaming, and consolidated national billing.',
    stats: [
      {
        value: '42%',
        label: 'Reduction in Unscheduled Downtime',
        detail: 'Predictive sensor telemetry flags mechanical degradation before roadside breakdowns occur.',
      },
      {
        value: '100%',
        label: 'Tax & DOT Audit Ready',
        detail: 'Digital logs for fuel taxes (IFTA), preventative maintenance, and safety inspections.',
      },
      {
        value: 'Live',
        label: 'OBD-II Diagnostic Streaming',
        detail: 'Direct telemetry ingestion for engine fault codes, battery state-of-health, and tire pressure.',
      },
      {
        value: '1-Click',
        label: 'Consolidated Fleet Billing',
        detail: 'Aggregate hundreds of individual vehicle repairs across nationwide locations into a single monthly invoice.',
      },
    ],
    legacyPainPoints: [
      {
        title: 'Catastrophic Unscheduled Breakdowns',
        description: 'Fleets rely on manual odometer recording or calendar schedules, missing critical fluid changes and brake wear until trucks break down on the job.',
      },
      {
        title: 'Dispersed, Fragmented Repair Receipts',
        description: 'Vehicles serviced at different regional facilities result in lost receipts, double billing, and zero visibility into total cost of ownership (TCO).',
      },
      {
        title: 'Regulatory & DOT Inspection Penalties',
        description: 'Missing paper inspection logs and overdue preventative maintenance cause vehicles to be placed out-of-service during DOT compliance audits.',
      },
    ],
    keyCapabilities: [
      {
        icon: Zap,
        title: 'Predictive Telematics & Maintenance Alerts',
        description: 'Stream live mileage, engine hours, and DTC error codes directly from vehicle OBD-II telematics to schedule service before failures occur.',
        highlight: 'Prevents expensive roadside towing',
      },
      {
        icon: Layers,
        title: 'National Fleet Account Billing',
        description: 'Manage agreed labor rates, parts discounts, and pre-approved spend limits across all company rooftop service locations.',
        highlight: 'Zero unauthorized repair expenses',
      },
      {
        icon: BarChart3,
        title: 'Total Cost of Ownership (TCO) Ledger',
        description: 'Track fuel expenditure, preventative maintenance, tire wear, depreciation, and insurance costs on every individual vehicle asset.',
        highlight: 'Optimal vehicle replacement timing',
      },
      {
        icon: ShieldCheck,
        title: 'DOT & Safety Compliance Vault',
        description: 'Maintain electronic Driver Vehicle Inspection Reports (DVIR) and annual DOT safety certifications in an immutable digital cloud archive.',
        highlight: '100% audit-compliant records',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Live Telematics & Error Ingestion',
        desc: 'Vehicle telemetry streams mileage and diagnostic codes. System automatically flags upcoming scheduled service interval.',
      },
      {
        step: '02',
        title: 'Pre-Authorized Work Order Dispatch',
        desc: 'System checks fleet service agreement, applies corporate labor rates, and books service bay slot at nearest facility.',
      },
      {
        step: '03',
        title: 'Digital Execution & Parts Barcode Verification',
        desc: 'Technician performs digital DVIR inspection, logs replaced parts, and completes required preventative checks.',
      },
      {
        step: '04',
        title: 'Consolidated Monthly Statement',
        desc: 'All regional service charges aggregate into a single itemized corporate statement with electronic PO matching.',
      },
    ],
    suiteName: 'The Enterprise Commercial Fleet Operating Suite',
    suiteTagline: 'Predictive OBD-II telematics, consolidated monthly billing, digital DVIR compliance, and lifecycle TCO analytics.',
    solutionsOffered: [
      {
        title: 'Fleet Asset Management & Lifecycle ERP',
        description: 'Centralized registry tracking all commercial vehicles, maintenance logs, lease schedules, warranty profiles, and per-VIN depreciation across all regions.',
        slug: 'enterprise-erp',
        tag: 'Fleet Operations',
        category: 'Core Operations',
        deliverables: ['Master Fleet Vehicle Registry', 'Per-Vehicle Cost Per Mile Analysis', 'Lifecycle Depreciation & Trade Timing'],
      },
      {
        title: 'Preventative Maintenance & Bay Dispatch',
        description: 'Automated work order dispatching for company garages or authorized partner service networks, tracking technician labor and approved parts replacement.',
        slug: 'service-bay',
        tag: 'Maintenance Bay',
        category: 'Fixed Ops',
        deliverables: ['Automated Service Interval Scheduling', 'Pre-Approved Work Order Spend Caps', 'Preferred Repair Network Routing'],
      },
      {
        title: 'Consolidated Corporate Fleet Accounting',
        description: 'Aggregate hundreds of regional repair orders, preventative checks, and fuel card transactions into a single itemized monthly corporate ledger.',
        slug: 'accounting',
        tag: 'Centralized Billing',
        category: 'Financial Control',
        deliverables: ['1-Click Consolidated Statement', 'Corporate PO & ERP Matching', 'Fuel Tax (IFTA) Automation'],
      },
      {
        title: 'Predictive OBD-II Telematics & Sensor Hub AI',
        description: 'Continuous ingestion of engine fault codes (DTC), battery state-of-health, tire pressure, and engine hours to trigger preventative servicing before breakdowns.',
        slug: 'ai-solutions',
        tag: 'Sensor Intelligence',
        category: 'Autonomous AI',
        deliverables: ['Live Geotab / Samsara Telematics Ingestion', 'Early Component Degradation Alerts', 'Automated DTC Diagnostic Flagging'],
      },
      {
        title: 'Driver Account CRM & Safety Command',
        description: 'Unified communication portal connecting corporate fleet managers, regional depot supervisors, and drivers for safety updates and assignments.',
        slug: 'sales-crm',
        tag: 'Driver & Depot CRM',
        category: 'Customer CRM',
        deliverables: ['Driver Safety Scorecards', 'Incident & Accident Claim Portal', 'Depot Supervisor Command Desk'],
      },
      {
        title: 'Electronic DVIR & DOT Compliance Vault',
        description: 'Driver mobile app for digital pre-trip inspections, DVIR defect logging, and instant compliance audit reporting for DOT regulators.',
        slug: 'service-bay',
        tag: 'Safety & Compliance',
        category: 'Fixed Ops',
        deliverables: ['Digital Pre-Trip & Post-Trip DVIR', 'Immutable Cloud Compliance Records', 'Instant Roadside Inspection View'],
      },
      {
        title: 'Fleet Parts & Consumables Storefront',
        description: 'Private corporate procurement catalog allowing depot managers to requisition tires, fluids, and wear items at negotiated national fleet contract rates.',
        slug: 'ecommerce',
        tag: 'Fleet Procurement',
        category: 'Digital Retail',
        deliverables: ['Negotiated National Fleet Pricing', 'Depot Manager Requisition Approvals', 'Bulk Consumables Auto-Reorder'],
      },
    ],
    onboardingProcess: [
      {
        phase: 'Phase 01',
        title: 'Fleet Asset & Telematics Stream Audit',
        timeframe: 'Days 1 - 4',
        description: 'Import complete fleet asset rosters, VIN specifications, warranty profiles, and connect your existing Geotab, Samsara, or OEM telematics APIs.',
        deliverables: ['Fleet Asset Master Profile Ingestion', 'Telematics Stream API Connection', 'Preventative Maintenance Interval Rules'],
      },
      {
        phase: 'Phase 02',
        title: 'Corporate Billing & Spend Cap Policies',
        timeframe: 'Days 5 - 8',
        description: 'Establish pre-approved repair spend limits, corporate labor rate agreements, and configure consolidated General Ledger export schemas.',
        deliverables: ['Pre-Authorized Work Order Limits', 'National Fleet Rate Schedules', 'ERP Consolidated Billing Map'],
      },
      {
        phase: 'Phase 03',
        title: 'Driver DVIR & Manager Portal Rollout',
        timeframe: 'Days 9 - 12',
        description: 'Deploy the mobile Driver Vehicle Inspection Report (DVIR) app to all field operators and train fleet managers on live telemetry dashboards.',
        deliverables: ['Driver DVIR App Rollout', 'Fleet Manager Command Training', 'Automated Alert Rule Calibration'],
      },
      {
        phase: 'Phase 04',
        title: 'Full Fleet Live Operation & SLA Activation',
        timeframe: 'Days 13 - 14',
        description: 'Activate continuous automated maintenance scheduling, live sensor diagnostic monitoring, and consolidated corporate billing.',
        deliverables: ['Full Fleet Command Activation', 'Live OBD-II Streaming Validation', 'Dedicated Fleet Success Director'],
      },
    ],
    quoteConfig: {
      unitLabel: 'Fleet Vehicles / Commercial Assets',
      defaultUnits: 150,
      unitMin: 25,
      unitMax: 5000,
      unitStep: 25,
      tierThresholds: { starter: 50, pro: 250, enterprise: 1000 },
      popularAddons: [
        'Live OBD-II Sensor Streaming Engine',
        'National Consolidated GL Billing Gateway',
        'Automated IFTA Fuel Tax & Mileage Module',
        'Electronic DVIR & DOT Compliance Vault',
      ],
    },
    techHighlights: [
      'Universal Geotab, Samsara, and OEM Telematics API Integration',
      'Automated IFTA Fuel Tax & Mileage Calculation Engine',
      'Electronic DVIR (Driver Vehicle Inspection Report) System',
      'Multi-Entity Consolidated GL Billing & Direct ERP Export',
    ],
    caseStudyPreview: {
      client: 'Metro Logistics & Utility Fleet',
      role: 'VP of Fleet Operations (1,450 Commercial Service Vans)',
      quote: 'DMSPilot gave us true real-time visibility across our entire fleet. Our roadside breakdown incidents dropped by 42% in the first 6 months, and our quarterly DOT compliance audits are completely painless.',
      metric: '$680k Annual Maintenance Savings',
    },
  },
};
