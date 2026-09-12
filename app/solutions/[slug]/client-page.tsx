'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { solutionsData } from '@/lib/solutions-data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { EnterpriseERPSnapshot } from '@/components/EnterpriseERPSnapshot';
import { ERPFinancialPulse } from '@/components/ERPFinancialPulse';
import { PartsMoneySaver } from '@/components/PartsMoneySaver';
import { ServiceBayDashboard } from '@/components/ServiceBayDashboard';
import { SalesCRMDashboard } from '@/components/SalesCRMDashboard';
import { DeskingFIDashboard } from '@/components/DeskingFIDashboard';
import { AccountingDashboard } from '@/components/AccountingDashboard';
import { CommCenterDashboard } from '@/components/CommCenterDashboard';
import { InventoryDashboard } from '@/components/InventoryDashboard';
import { StaggPortalDashboard } from '@/components/StaggPortalDashboard';
import { AIOpsDashboard } from '@/components/AIOpsDashboard';
import { EcommerceStorefrontDashboard } from '@/components/EcommerceStorefrontDashboard';
import { ERPLaptopMockup } from '@/components/ERPLaptopMockup';

interface ArchitecturePillar {
  eyebrow: string;
  title: string;
  description: string;
}

const solutionPillarsMap: Record<string, ArchitecturePillar[]> = {
  'erp': [
    {
      eyebrow: 'Location & Inventory',
      title: 'See All Inventory in Real Time',
      description: 'Know exactly what vehicles, parts, or equipment you have across all your shops, lots, and warehouses without picking up the phone or checking messy spreadsheets.',
    },
    {
      eyebrow: 'Workflows & Recon',
      title: 'Track Jobs from Start to Finish',
      description: 'Follow every vehicle, repair job, or parts order from the moment it arrives until it is inspected, completed, and delivered to the customer.',
    },
    {
      eyebrow: 'Manager Dashboard',
      title: 'Spot Bottlenecks Instantly',
      description: 'Get a clear daily summary of open repair orders, pending invoices, delayed shipments, and sales so managers can solve issues fast.',
    },
    {
      eyebrow: 'Costs & Inventory Loans',
      title: 'Control Expenses & Working Capital',
      description: 'Keep track of what you owe on each vehicle or parts batch, monitor interest fees, and make sure your cash flow is protected.',
    },
  ],
  'enterprise-erp': [
    {
      eyebrow: 'Location & Inventory',
      title: 'See All Inventory in Real Time',
      description: 'Know exactly what vehicles, parts, or equipment you have across all your shops, lots, and warehouses without picking up the phone or checking messy spreadsheets.',
    },
    {
      eyebrow: 'Workflows & Recon',
      title: 'Track Jobs from Start to Finish',
      description: 'Follow every vehicle, repair job, or parts order from the moment it arrives until it is inspected, completed, and delivered to the customer.',
    },
    {
      eyebrow: 'Manager Dashboard',
      title: 'Spot Bottlenecks Instantly',
      description: 'Get a clear daily summary of open repair orders, pending invoices, delayed shipments, and sales so managers can solve issues fast.',
    },
    {
      eyebrow: 'Costs & Inventory Loans',
      title: 'Control Expenses & Working Capital',
      description: 'Keep track of what you owe on each vehicle or parts batch, monitor interest fees, and make sure your cash flow is protected.',
    },
  ],
  'sales-crm': [
    {
      eyebrow: 'Customer Messaging',
      title: 'All Messages in One Shared Inbox',
      description: 'Reply to text messages, WhatsApp chats, phone calls, and website inquiries in one place so your team never misses a customer question.',
    },
    {
      eyebrow: 'Repeat Business',
      title: 'Find Repeat Sales Automatically',
      description: 'The system notices when past service customers, trade-ins, or fleet clients are ready for an upgrade and alerts your team with the right offer.',
    },
    {
      eyebrow: 'Fast Follow-Ups',
      title: 'Assign & Follow Up in Seconds',
      description: 'Send new inquiries to available staff immediately, track who is talking to each client, and send friendly automated reminders.',
    },
    {
      eyebrow: 'Customer History',
      title: 'Complete Customer & Fleet History',
      description: 'See every conversation, past purchases, vehicle preferences, and service visits in one clear timeline so any team member can help.',
    },
  ],
  'digital-retail': [
    {
      eyebrow: 'Payment Calculator',
      title: 'Clear, Penny-Perfect Monthly Payments',
      description: 'Show buyers exact payments for cash, financing, or leasing with taxes and fees already included, so there are never surprises at checkout.',
    },
    {
      eyebrow: 'Lender Network',
      title: 'Fast Credit Approvals',
      description: 'Send customer applications to multiple lending partners in one click and receive approved rates and terms right away.',
    },
    {
      eyebrow: 'Warranties & Care',
      title: 'Simple Protection Packages',
      description: 'Show customers warranties, maintenance plans, and protection add-ons with easy payment sliders that explain the real benefits.',
    },
    {
      eyebrow: 'Easy Signatures',
      title: 'Sign Documents on Any Device',
      description: 'Let buyers review and sign paperwork electronically from their phone, tablet, or computer, saving time and getting deals funded faster.',
    },
  ],
  'ai-solutions': [
    {
      eyebrow: 'Phone & Chat Assistant',
      title: 'Never Miss a Customer Call',
      description: 'A friendly AI receptionist answers phone calls and text messages 24/7, answers common questions, and books appointments on your calendar.',
    },
    {
      eyebrow: 'Job Matching',
      title: 'Assign Jobs to the Right Person',
      description: 'Match repair orders and tasks to the best technician or team member based on their skill and open schedule to finish work faster.',
    },
    {
      eyebrow: 'Smart Buying',
      title: 'Know What Sells Fastest',
      description: 'Get smart recommendations on which vehicles or parts are in high demand locally so you always buy what sells quickly at good profit.',
    },
    {
      eyebrow: 'Automated Bookkeeping',
      title: 'Daily Transactions Checked Automatically',
      description: 'Routine daily bank charges, card payments, and vendor receipts are checked and matched automatically so your books stay clean.',
    },
  ],
  'service-bay': [
    {
      eyebrow: 'Photo & Video MPI',
      title: 'Show Customers What Needs Fixing',
      description: 'Technicians take short videos or photos of needed repairs and text them to vehicle owners for fast one-click approvals.',
    },
    {
      eyebrow: 'Shop Schedule',
      title: 'See Every Bay & Lift at a Glance',
      description: 'A simple live board shows which bays are busy, who is working on what, and which jobs are taking longer than planned.',
    },
    {
      eyebrow: 'Mobile Barcode Scanner',
      title: 'Scan Parts Directly to the Repair Order',
      description: 'Mechanics scan part barcodes directly with their phone camera to add parts to the job instantly, preventing lost inventory and unbilled parts.',
    },
    {
      eyebrow: 'Warranty & Cores',
      title: 'Easy Warranty Claims & Core Returns',
      description: 'Keep track of old parts, core deposits, and supplier warranty claims so your shop never loses money on returned items.',
    },
  ],
  'accounting': [
    {
      eyebrow: 'Live Bank Sync',
      title: 'Automatic Daily Bank Matching',
      description: 'Your bank deposits, card payments, and loan payouts are matched automatically against your daily sales and repair orders.',
    },
    {
      eyebrow: 'P&L & Cash Flow',
      title: 'Real-Time Profit & Loss for Every Location',
      description: 'See how much profit each department, store, or repair shop is making today without waiting until the end of the month.',
    },
    {
      eyebrow: 'Bills & Suppliers',
      title: 'Pay Vendors & Suppliers with Confidence',
      description: 'Match vendor invoices against purchase orders automatically so you never overpay or pay for parts you didn\'t receive.',
    },
    {
      eyebrow: 'Simple Tax & Security',
      title: 'Audit-Ready Records & Automated Taxes',
      description: 'Calculates correct sales taxes automatically and keeps a clear record of every transaction so you are always prepared for tax season.',
    },
  ],
  'comm-center': [
    {
      eyebrow: 'Shared Inbox',
      title: 'Text, WhatsApp, and Calls in One Screen',
      description: 'Your entire team can see and reply to customer texts, phone calls, and chats from a single screen tied to the customer\'s history.',
    },
    {
      eyebrow: 'Smart Calling',
      title: 'Crystal-Clear Calling & Easy Voicemail',
      description: 'Make and receive calls directly through your browser or mobile app, with voicemail transcription and automatic call summaries.',
    },
    {
      eyebrow: 'Smart Notifications',
      title: 'Automated Service & Appointment Reminders',
      description: 'Send friendly automated appointment confirmations, service reminders, and pickup notices so customers always know what\'s happening.',
    },
    {
      eyebrow: 'Team Notes',
      title: 'Pass Notes & Assign Conversations Easily',
      description: 'Leave private internal notes on customer profiles and assign chats to specific staff members with one click.',
    },
  ],
  'inventory': [
    {
      eyebrow: 'All Locations',
      title: 'See All Vehicles & Stock on One Screen',
      description: 'Check what is in stock, what is in transit, and request quick transfers between lots or branches in seconds.',
    },
    {
      eyebrow: 'Smart Pricing',
      title: 'Price Competitively & Spot Aging Units',
      description: 'Track market prices in your area and receive alerts when vehicles sit too long so you can sell them before holding costs grow.',
    },
    {
      eyebrow: 'Online Listings',
      title: 'Publish to Vehicle Websites in One Click',
      description: 'Automatically upload vehicle photos, window stickers, and details to top car shopping websites without repetitive manual typing.',
    },
    {
      eyebrow: 'Inventory Loans',
      title: 'Track What You Owe on Every Unit',
      description: 'Keep track of floor plan loan balances, payment due dates, and interest fees so your financing costs stay under control.',
    },
  ],
  'parts-inventory': [
    {
      eyebrow: 'Parts Catalog',
      title: 'Find the Exact Part in Seconds',
      description: 'Look up part numbers and vehicle fitment instantly, check stock across all locations, and create quick quotes for retail or wholesale buyers.',
    },
    {
      eyebrow: 'Bin Locations',
      title: 'Know Exact Bin & Shelf Locations',
      description: 'Staff can scan barcodes and find exactly which aisle and shelf a part is on, reducing picking time and shipping mistakes.',
    },
    {
      eyebrow: 'Reordering',
      title: 'Automatic Reordering for Fast Sellers',
      description: 'The system warns you when stock is getting low and prepares purchase orders for your suppliers before you run out.',
    },
    {
      eyebrow: 'Dead Stock Alert',
      title: 'Return Slow-Moving Parts on Time',
      description: 'Identify parts that haven\'t moved in 60 or 90 days so you can return them to the manufacturer or discount them before they lose value.',
    },
  ],
  'dms': [
    {
      eyebrow: 'Works Anywhere',
      title: 'Access from Any Laptop, Tablet, or Phone',
      description: 'No expensive servers or clunky desktop software. Log in securely from anywhere with zero downtime and automatic updates.',
    },
    {
      eyebrow: 'All Departments Connected',
      title: 'Sales, Service, and Parts Work as One',
      description: 'When a vehicle is sold or repaired, parts inventory and accounting update instantly with no double data entry.',
    },
    {
      eyebrow: 'Auto-Balancing',
      title: 'Books Balance Themselves as You Work',
      description: 'Every repair order and sale posts directly to your financial ledger so you always know your exact profit numbers.',
    },
    {
      eyebrow: 'Data Protection',
      title: 'Enterprise Security & Daily Backups',
      description: 'Your customer data and financial numbers are encrypted and backed up automatically every day to keep your business safe.',
    },
  ],
  'ecommerce': [
    {
      eyebrow: 'Online Showroom',
      title: 'Fast, Mobile-Friendly Digital Showrooms',
      description: 'Showcase your vehicles or parts with high-resolution photos, clear pricing, and fast-loading pages that look great on any phone.',
    },
    {
      eyebrow: 'Online Deposits',
      title: 'Let Customers Reserve & Deposit Online',
      description: 'Buyers can place a deposit, submit trade-in details, and lock in a vehicle directly from your website at any time.',
    },
    {
      eyebrow: 'Multi-Site Posting',
      title: 'Post to All Major Marketplaces in One Click',
      description: 'Automatically sync your inventory with Google, Facebook, and vehicle listing sites with updated photos and prices.',
    },
    {
      eyebrow: 'Visitor Insights',
      title: 'See Which Items Get the Most Attention',
      description: 'Track which vehicles or parts buyers are viewing most, giving you clear insights to price and promote your stock effectively.',
    },
  ],
  'stagg-portal': [
    {
      eyebrow: 'Vendor Portal',
      title: 'Simple Portal for Outside Partners',
      description: 'Outside repairers, detailers, and haulers log in to see only their assigned vehicles and jobs without seeing private business data.',
    },
    {
      eyebrow: 'Digital Orders',
      title: 'Digital Work Orders & Photo Proof',
      description: 'Vendors upload photos when jobs are completed so your team can verify the quality before approving the invoice.',
    },
    {
      eyebrow: 'Fast Approval',
      title: 'Match Bills to Approved Work Orders',
      description: 'Vendor invoices are checked against original agreed prices, ensuring you only pay for authorized work that was done right.',
    },
    {
      eyebrow: 'Vehicle Tracking',
      title: 'Know Where Every Vehicle Is',
      description: 'Track which vehicles are currently off-site at outside vendors, when they will return, and who is responsible.',
    },
  ],
};

function getPillars(slug: string, title: string, features?: string[]): ArchitecturePillar[] {
  if (solutionPillarsMap[slug]) return solutionPillarsMap[slug];
  if (slug === 'fixed-ops' || slug === 'service-parts') return solutionPillarsMap['service-bay'];
  if (slug === 'desking-fi') return solutionPillarsMap['digital-retail'];
  if (slug === 'erp-finance') return solutionPillarsMap['accounting'];
  if (slug === 'e-commerce' || slug === 'storefront' || slug === 'digital-storefront') return solutionPillarsMap['ecommerce'];
  
  const f = features || [];
  return [
    {
      eyebrow: 'All Locations',
      title: f[0] || `${title} Visibility`,
      description: f[0] ? `Clear operational visibility and fast workflows powered by ${title}.` : 'Real-time visibility and instant access across operations.',
    },
    {
      eyebrow: 'Operations',
      title: f[1] || `${title} Execution`,
      description: f[1] ? `Automated day-to-day tracking across all your teams and locations.` : 'Streamlined day-to-day execution and workflow acceleration.',
    },
    {
      eyebrow: 'Insights',
      title: f[2] || `${title} Reporting`,
      description: f[2] ? `Simple, real-time numbers and reports built for business owners and managers.` : 'Real-time metrics and deep operational reporting.',
    },
    {
      eyebrow: 'Security & Backup',
      title: f[3] || `${title} Integration`,
      description: f[3] ? `Reliable cloud setup with daily backups and simple software connections.` : 'Enterprise reliability, security, and open system integration.',
    },
  ];
}

const solutionThemes: Record<string, {
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  badgeDot: string;
  badgeLabel: string;
  heroGlow: string;
}> = {
  'accounting': {
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200',
    badgeDot: 'bg-emerald-600',
    badgeLabel: 'Financial Ledger & Books',
    heroGlow: 'from-emerald-200/35 via-emerald-100/15 to-transparent',
  },
  'sales-crm': {
    badgeBg: 'bg-orange-50',
    badgeText: 'text-orange-700',
    badgeBorder: 'border-orange-200',
    badgeDot: 'bg-orange-600',
    badgeLabel: 'Showroom & Sales CRM',
    heroGlow: 'from-orange-200/35 via-orange-100/15 to-transparent',
  },
  'service-bay': {
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-200',
    badgeDot: 'bg-blue-600',
    badgeLabel: 'Service Bay & Fixed Ops',
    heroGlow: 'from-blue-200/35 via-blue-100/15 to-transparent',
  },
  'service-parts': {
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-200',
    badgeDot: 'bg-blue-600',
    badgeLabel: 'Parts & Service Ops',
    heroGlow: 'from-blue-200/35 via-blue-100/15 to-transparent',
  },
  'ai-solutions': {
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    badgeBorder: 'border-purple-200',
    badgeDot: 'bg-purple-600',
    badgeLabel: 'Autonomous AI Copilot',
    heroGlow: 'from-purple-200/35 via-purple-100/15 to-transparent',
  },
  'digital-retail': {
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    badgeBorder: 'border-teal-200',
    badgeDot: 'bg-teal-600',
    badgeLabel: 'Digital Desking & F&I',
    heroGlow: 'from-teal-200/35 via-teal-100/15 to-transparent',
  },
  'desking-fi': {
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    badgeBorder: 'border-teal-200',
    badgeDot: 'bg-teal-600',
    badgeLabel: 'Digital Desking & F&I',
    heroGlow: 'from-teal-200/35 via-teal-100/15 to-transparent',
  },
  'erp': {
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    badgeDot: 'bg-amber-600',
    badgeLabel: 'Enterprise ERP Suite',
    heroGlow: 'from-amber-200/35 via-amber-100/15 to-transparent',
  },
  'enterprise-erp': {
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200',
    badgeDot: 'bg-amber-600',
    badgeLabel: 'Enterprise ERP Suite',
    heroGlow: 'from-amber-200/35 via-amber-100/15 to-transparent',
  },
  'ecommerce': {
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200',
    badgeDot: 'bg-sky-600',
    badgeLabel: 'Digital Storefront & E-Commerce',
    heroGlow: 'from-sky-200/35 via-cyan-100/15 to-transparent',
  },
  'e-commerce': {
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200',
    badgeDot: 'bg-sky-600',
    badgeLabel: 'Digital Storefront & E-Commerce',
    heroGlow: 'from-sky-200/35 via-cyan-100/15 to-transparent',
  },
  'storefront': {
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200',
    badgeDot: 'bg-sky-600',
    badgeLabel: 'Digital Storefront & E-Commerce',
    heroGlow: 'from-sky-200/35 via-cyan-100/15 to-transparent',
  },
  'digital-storefront': {
    badgeBg: 'bg-sky-50',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200',
    badgeDot: 'bg-sky-600',
    badgeLabel: 'Digital Storefront & E-Commerce',
    heroGlow: 'from-sky-200/35 via-cyan-100/15 to-transparent',
  },
};

export default function SolutionDetailPage({ slug: propSlug }: { slug?: string }) {
  const params = useParams();
  const slug = propSlug || (params?.slug as string) || '';
  const data = solutionsData[slug as keyof typeof solutionsData] || solutionsData['erp'] || solutionsData['enterprise-erp'];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans">
        <div className="text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-xl max-w-md">
          <h2 className="text-2xl font-black text-slate-950 mb-2">Solution Not Found</h2>
          <p className="text-slate-500 text-sm mb-6">The requested automotive solution does not exist or has moved.</p>
          <Link href="/#solutions">
            <Button className="rounded-xl bg-slate-950 text-white font-bold px-6 py-2">
              Back to Solutions
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const isERP = slug === 'erp' || slug === 'enterprise-erp' || slug === 'fixed-ops';
  const theme = solutionThemes[slug] || solutionThemes['erp'];

  const dashboardMap: Record<string, React.ReactNode> = {
    'erp': <EnterpriseERPSnapshot />,
    'enterprise-erp': <EnterpriseERPSnapshot />,
    'sales-crm': <SalesCRMDashboard />,
    'digital-retail': <DeskingFIDashboard />,
    'ai-solutions': <AIOpsDashboard />,
    'service-bay': <ServiceBayDashboard />,
    'dms': <EnterpriseERPSnapshot />,
    'ecommerce': <EcommerceStorefrontDashboard />,
    'e-commerce': <EcommerceStorefrontDashboard />,
    'storefront': <EcommerceStorefrontDashboard />,
    'digital-storefront': <EcommerceStorefrontDashboard />,
    'fixed-ops': <EnterpriseERPSnapshot />,
    'service-parts': <ServiceBayDashboard />,
    'erp-finance': <ERPFinancialPulse />,
    'desking-fi': <DeskingFIDashboard />,
    'accounting': <AccountingDashboard />,
    'comm-center': <CommCenterDashboard />,
    'inventory': <InventoryDashboard />,
    'stagg-portal': <StaggPortalDashboard />,
  };

  const dashboard = dashboardMap[slug] || <EnterpriseERPSnapshot />;
  const pillars = getPillars(slug, data.title, data.features);

  return (
    <div className="min-h-screen bg-white selection:bg-slate-900 selection:text-white font-sans text-slate-900">
      <Header />
      
      <main className="relative overflow-hidden">

        {/* ═══════ 1. PAGE HERO ═══════ */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 border-b border-slate-100 bg-white overflow-hidden">
          {/* Distinctive Ambient Accent Glow for Solution */}
          <div className={`absolute top-10 right-1/4 w-[480px] h-[320px] bg-gradient-to-b ${theme.heroGlow} rounded-full blur-3xl pointer-events-none -z-0 opacity-80`} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="max-w-4xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Distinctive Color Badge for Solution */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
                <span className={`w-2 h-2 rounded-full ${theme.badgeDot} animate-pulse`} />
                <span>{theme.badgeLabel}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-[1.08] mb-6">
                {isERP ? 'One simple system to run your entire automotive business.' : data.tagline || data.title}
              </h1>
              
              {/* One-sentence Subhead */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-3xl">
                {data.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link href={`/contact-us?module=${slug}`} className="w-full sm:w-auto">
                  <button 
                    type="button"
                    className="relative group overflow-hidden w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-slate-950 text-white text-sm font-bold border-2 border-slate-950 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    {/* Smooth White Fill Sweep on Hover */}
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-slate-950">
                      Book a Demo
                      <ArrowRight className="w-4 h-4 text-white group-hover:text-slate-950 transition-all duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </Link>
                <Link href="#capabilities" className="w-full sm:w-auto">
                  <button 
                    type="button"
                    className="relative group overflow-hidden w-full sm:w-auto h-12 sm:h-13 px-8 rounded-full bg-white text-slate-900 text-sm font-bold border-2 border-slate-200/90 hover:border-slate-950 flex items-center justify-center gap-2 transition-all duration-300 shadow-2xs cursor-pointer"
                  >
                    {/* Smooth Black Fill Sweep on Hover */}
                    <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Explore Capabilities
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Laptop Mockup Presentation of Solution Snapshot */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 sm:mt-16"
            >
              {/* MacBook Pro Laptop Mockup Display */}
              <ERPLaptopMockup>
                {dashboard}
              </ERPLaptopMockup>
            </motion.div>
          </div>
        </section>

        {/* ═══════ 2. DEEP DIVE COMPONENT ARCHITECTURE (BOXED BENTO GRID WITH STRAIGHT CONNECTED CORNERS) ═══════ */}
        <section id="capabilities" className="py-24 sm:py-32 bg-black text-white relative overflow-hidden">
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-slate-900/30 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.03em] leading-tight mb-4">
                Built to Connect Every Part of Your Business
              </h2>
              <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
                Designed for dealerships, repair shops, parts distributors, and fleets of all sizes.
              </p>
            </motion.div>

            {/* 4-Box Asymmetric Grid with Straight Connected Inner Corners */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-2.5 lg:gap-3">
              
              {/* Box 1: Top-Left: 5 cols -> Rounded Top-Left ONLY */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="lg:col-span-5 bg-[#091321] hover:bg-[#0c182a] rounded-t-2xl rounded-b-none lg:rounded-none lg:rounded-tl-3xl p-8 sm:p-10 md:p-12 transition-colors duration-200 flex flex-col justify-between min-h-[290px] sm:min-h-[310px]"
              >
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-400 mb-6 sm:mb-8 tracking-wide">
                    {pillars[0]?.eyebrow || 'Front Office'}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-[1.25] mb-4">
                    {pillars[0]?.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    {pillars[0]?.description}
                  </p>
                </div>
              </motion.div>

              {/* Box 2: Top-Right: 7 cols -> Rounded Top-Right ONLY */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="lg:col-span-7 bg-[#091321] hover:bg-[#0c182a] rounded-none lg:rounded-tr-3xl p-8 sm:p-10 md:p-12 transition-colors duration-200 flex flex-col justify-between min-h-[290px] sm:min-h-[310px]"
              >
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-400 mb-6 sm:mb-8 tracking-wide">
                    {pillars[1]?.eyebrow || 'Fixed Ops'}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-[1.25] mb-4">
                    {pillars[1]?.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    {pillars[1]?.description}
                  </p>
                </div>
              </motion.div>

              {/* Box 3: Bottom-Left: 7 cols -> Rounded Bottom-Left ONLY */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="lg:col-span-7 bg-[#091321] hover:bg-[#0c182a] rounded-none lg:rounded-bl-3xl p-8 sm:p-10 md:p-12 transition-colors duration-200 flex flex-col justify-between min-h-[290px] sm:min-h-[310px]"
              >
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-400 mb-6 sm:mb-8 tracking-wide">
                    {pillars[2]?.eyebrow || 'Back Office'}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-[1.25] mb-4">
                    {pillars[2]?.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    {pillars[2]?.description}
                  </p>
                </div>
              </motion.div>

              {/* Box 4: Bottom-Right: 5 cols -> Rounded Bottom-Right ONLY */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="lg:col-span-5 bg-[#091321] hover:bg-[#0c182a] rounded-b-2xl rounded-t-none lg:rounded-none lg:rounded-br-3xl p-8 sm:p-10 md:p-12 transition-colors duration-200 flex flex-col justify-between min-h-[290px] sm:min-h-[310px]"
              >
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-400 mb-6 sm:mb-8 tracking-wide">
                    {pillars[3]?.eyebrow || 'Infrastructure'}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-[1.25] mb-4">
                    {pillars[3]?.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                    {pillars[3]?.description}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════ 3. CLOSING CTA (GET QUOTES) ═══════ */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] sm:rounded-[40px] bg-slate-950 text-white p-10 sm:p-16 md:p-20 relative overflow-hidden shadow-2xl text-center border border-slate-900 flex flex-col items-center justify-center"
            >
              {/* Ambient radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-3xl flex flex-col items-center text-center mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-[-0.03em] mb-5 leading-tight text-center">
                  Ready to simplify your {data.title} operations?
                </h2>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal text-center">
                  Book a quick walkthrough to see how DMSPilot {data.title} helps dealerships, repair shops, parts distributors, and fleets run smoother every day.
                </p>
                <div className="flex justify-center items-center">
                  <Link href={`/contact-us?module=${slug}`} className="w-full sm:w-auto">
                    <button 
                      type="button"
                      className="relative group overflow-hidden w-full sm:w-auto h-13 sm:h-14 px-10 rounded-full bg-white text-slate-950 text-base font-bold border-2 border-white flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl cursor-pointer"
                    >
                      {/* Smooth Black Fill Sweep on Hover */}
                      <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Get Quotes
                      </span>
                      <ArrowRight className="relative z-10 w-4 h-4 text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}



