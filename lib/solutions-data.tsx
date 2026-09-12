import { 
  Wrench, 
  Database, 
  Target, 
  Layers, 
  Calculator, 
  PhoneCall, 
  BarChart3, 
  Briefcase,
  Sparkles,
  LayoutDashboard,
  CarFront,
  Bot,
  Zap,
  PackageCheck,
  Globe,
  ShoppingCart,
} from 'lucide-react';

export const solutionsData = {
  'erp': {
    title: 'Enterprise ERP',
    tagline: 'One simple system to run your entire automotive business.',
    description: 'Track inventory, manage money, coordinate teams, and see all your locations in one simple screen. Built for dealerships, repair shops, parts distributors, and fleets.',
    icon: Database,
    color: 'orange',
    analytics: [
      { label: 'Time Saved on Admin', value: '85%', trend: 'Automated' },
      { label: 'Inventory Visibility', value: '100%', trend: 'Real-time' },
      { label: 'Sync Across Locations', value: '<50ms', trend: 'Instant' }
    ],
    features: [
      'See all vehicles, parts, and equipment across all your stores and warehouses',
      'Track profits, costs, and partner payouts without manual spreadsheets',
      'Follow jobs from customer arrival to final delivery and payment',
      'Simple user permissions so staff only see what they need to do their jobs'
    ],
    snapshots: [
      { title: 'Global Operations', metric: '$14.8M', metricLabel: 'Monthly Revenue', status: 'Healthy', items: [
        { name: 'Metro Group North', qty: 94, trend: 'up' },
        { name: 'Capital City Auto Mall', qty: 88, trend: 'up' },
        { name: 'South Suburban Dealership', qty: 76, trend: 'down' },
        { name: 'Harbor City Luxury Imports', qty: 98, trend: 'up' },
      ]},
    ]
  },
  'enterprise-erp': {
    title: 'Enterprise ERP',
    tagline: 'One simple system to run your entire automotive business.',
    description: 'Track inventory, manage money, coordinate teams, and see all your locations in one simple screen. Built for dealerships, repair shops, parts distributors, and fleets.',
    icon: Database,
    color: 'orange',
    analytics: [
      { label: 'Time Saved on Admin', value: '85%', trend: 'Automated' },
      { label: 'Inventory Visibility', value: '100%', trend: 'Real-time' },
      { label: 'Sync Across Locations', value: '<50ms', trend: 'Instant' }
    ],
    features: [
      'See all vehicles, parts, and equipment across all your stores and warehouses',
      'Track profits, costs, and partner payouts without manual spreadsheets',
      'Follow jobs from customer arrival to final delivery and payment',
      'Simple user permissions so staff only see what they need to do their jobs'
    ],
    snapshots: [
      { title: 'Global Operations', metric: '$14.8M', metricLabel: 'Monthly Revenue', status: 'Healthy', items: [
        { name: 'Metro Group North', qty: 94, trend: 'up' },
        { name: 'Capital City Auto Mall', qty: 88, trend: 'up' },
        { name: 'South Suburban Dealership', qty: 76, trend: 'down' },
        { name: 'Harbor City Luxury Imports', qty: 98, trend: 'up' },
      ]},
      { title: 'System Latency & Sync', metric: '18ms', metricLabel: 'Average Sync', status: 'Healthy', items: [
        { name: 'General Ledger Sync', qty: 100, trend: 'up' },
        { name: 'Inter-Store Transfer Queue', qty: 12, trend: 'up' },
        { name: 'OEM Data Feed Status', qty: 100, trend: 'up' },
        { name: 'Bank Settlement Feed', qty: 100, trend: 'up' },
      ]},
      { title: 'Enterprise Assets', metric: '4,890', metricLabel: 'Tracked Assets', status: 'Healthy', items: [
        { name: 'New Inventory Units', qty: 420, trend: 'up' },
        { name: 'Pre-Owned Inventory Units', qty: 310, trend: 'up' },
        { name: 'Active Repair Orders', qty: 840, trend: 'up' },
        { name: 'Parts & Components SKUs', qty: 3320, trend: 'up' },
      ]}
    ]
  },
  'sales-crm': {
    title: 'Sales CRM',
    tagline: 'Turn more leads into paying customers without the guesswork.',
    description: 'Help your sales and service teams follow up faster, talk to customers on SMS or WhatsApp, and never let an interested buyer slip through the cracks.',
    icon: Target,
    color: 'indigo',
    analytics: [
      { label: 'Lead-to-Sale Rate', value: '24.8%', trend: '+35% Faster' },
      { label: 'Active Opportunities', value: '580+', trend: 'Ready to Buy' },
      { label: 'Repeat Customer Upgrades', value: '38%', trend: 'Automatic' }
    ],
    features: [
      'Reach customers directly via SMS, WhatsApp, phone, and web chat in one inbox',
      'Smart alerts tell your team when past customers or fleet clients are ready for an upgrade',
      'Automatically assign leads to available team members for fast response times',
      'Keep a complete history of every customer call, quote, and vehicle preference'
    ],
    snapshots: [
      { title: 'Active Deal Pipeline', metric: '584', metricLabel: 'Active Opportunities', status: 'Healthy', items: [
        { name: 'Service Drive Upgrades', qty: 142, trend: 'up' },
        { name: 'Inbound Digital Inquiries', qty: 198, trend: 'up' },
        { name: 'Showroom Walk-ins', qty: 114, trend: 'up' },
        { name: 'Lease Expiration Nurturing', qty: 130, trend: 'down' },
      ]},
      { title: 'Conversion Funnel', metric: '24.8%', metricLabel: 'Close Rate', status: 'Active', items: [
        { name: 'Test Drive Scheduled', qty: 89, trend: 'up' },
        { name: 'Desking & F&I Submitted', qty: 74, trend: 'up' },
        { name: 'Lender Approved Deals', qty: 68, trend: 'up' },
        { name: 'Contract Signed & Delivered', qty: 52, trend: 'up' },
      ]},
      { title: 'Automated Campaigns', metric: '1,420', metricLabel: 'Personalized Touches', status: 'Healthy', items: [
        { name: 'Equity Upgrade SMS', qty: 450, trend: 'up' },
        { name: 'Pre-Approval Reminders', qty: 380, trend: 'up' },
        { name: 'Maintenance Loyalty Offers', qty: 310, trend: 'up' },
        { name: 'Post-Delivery Follow-ups', qty: 280, trend: 'up' },
      ]}
    ]
  },
  'digital-retail': {
    title: 'Digital Retail',
    tagline: 'Clear pricing and instant buying options online and in-store.',
    description: 'Let customers easily see payments, compare cash, finance, or lease terms, and get approved quickly—whether they are at home or sitting at your counter.',
    icon: Layers,
    color: 'sky',
    analytics: [
      { label: 'Average Deal Time', value: '14 Mins', trend: '-45 Mins Saved' },
      { label: 'Protection Plan Sales', value: '62%', trend: 'Clear Options' },
      { label: 'Online Deposit Rate', value: '41.2%', trend: 'Instant Lock' }
    ],
    features: [
      'Compare cash, loan, and lease options side by side with exact penny-perfect numbers',
      'Instant credit application routing to multiple banks for fast rate approvals',
      'Simple visual menus for warranties, service contracts, and protection plans',
      'Secure digital signatures so customers can sign paperwork from any device'
    ],
    snapshots: [
      { title: 'Active Deal Quotes', metric: '3 Live', metricLabel: 'Real-time Calculations', status: 'Active', items: [
        { name: 'Lease — $389/mo (36 mo)', qty: 36, trend: 'up' },
        { name: 'Finance — $512/mo (72 mo)', qty: 72, trend: 'up' },
        { name: 'Cash Purchase — $32,400', qty: 100, trend: 'up' },
        { name: 'Special Promotion — $0 Down', qty: 48, trend: 'up' },
      ]},
      { title: 'Connected Lenders', metric: '8 Banks', metricLabel: 'Real-time Integrations', status: 'Healthy', items: [
        { name: 'Capital One Auto Finance', qty: 98, trend: 'up' },
        { name: 'Chase Auto Lending', qty: 94, trend: 'up' },
        { name: 'Ally Financial Services', qty: 88, trend: 'up' },
        { name: 'Wells Fargo Auto', qty: 91, trend: 'up' },
      ]},
      { title: 'F&I Add-on Attachments', metric: '+$1,680', metricLabel: 'Average Per Unit', status: 'Healthy', items: [
        { name: 'Vehicle Service Contracts', qty: 68, trend: 'up' },
        { name: 'GAP Total Loss Protection', qty: 54, trend: 'up' },
        { name: 'Ceramic Coating & Interior Shield', qty: 42, trend: 'up' },
        { name: 'Tire & Road Hazard Plan', qty: 36, trend: 'up' },
      ]}
    ]
  },
  'ai-solutions': {
    title: 'AI Solutions & Autonomous Ops',
    tagline: 'Smart assistants that handle routine tasks 24/7.',
    description: 'Let intelligent AI answer customer calls, schedule service visits, match technicians to jobs, and help balance everyday numbers automatically.',
    icon: Sparkles,
    color: 'purple',
    analytics: [
      { label: 'Daily Automated Tasks', value: '1,100+', trend: 'Hands-Free' },
      { label: 'Staff Hours Saved', value: '42 hrs/day', trend: 'More Free Time' },
      { label: 'Accuracy Rate', value: '99.9%', trend: 'Reliable' }
    ],
    features: [
      '24/7 friendly voice and chat assistant to answer calls and book appointments',
      'Smart job dispatch that sends repair orders to the right technician automatically',
      'Market inventory scanner that tells you which vehicles and parts sell fastest',
      'Automatic transaction checking so daily numbers always balance without manual work'
    ],
    snapshots: [
      { title: 'Autonomous Agent Fleet', metric: '4 Active', metricLabel: 'Intelligent Bots', status: 'Healthy', items: [
        { name: 'Autonomous Service Dispatcher', qty: 142, trend: 'up' },
        { name: '24/7 Voice & SMS Receptionist', qty: 389, trend: 'up' },
        { name: 'Predictive Lot Sourcing Bot', qty: 64, trend: 'up' },
        { name: 'Automated GL Reconciler', qty: 512, trend: 'up' },
      ]},
      { title: 'Human Effort Saved', metric: '42.5 hrs', metricLabel: 'Today Across Group', status: 'Active', items: [
        { name: 'Phone Calls Handled Autonomously', qty: 92, trend: 'up' },
        { name: 'RO Dispatches Automated', qty: 88, trend: 'up' },
        { name: 'GL Invoices Reconciled', qty: 99, trend: 'up' },
        { name: 'Lead Touches Executed', qty: 85, trend: 'up' },
      ]},
      { title: 'Inference SLA & Health', metric: '185ms', metricLabel: 'Mean Response Time', status: 'Healthy', items: [
        { name: 'Voice Turnaround Latency', qty: 98, trend: 'up' },
        { name: 'Logic Decision Validation', qty: 100, trend: 'up' },
        { name: 'Database Read/Write Pipeline', qty: 99, trend: 'up' },
        { name: 'Zero-Error Compliance Rate', qty: 100, trend: 'up' },
      ]}
    ]
  },
  'service-bay': {
    title: 'Service Bay',
    tagline: 'Keep every bay busy and stop losing track of parts.',
    description: 'Help technicians inspect vehicles faster with video reports, scan parts from their phones, and bill repair orders accurately without paperwork headaches.',
    icon: Wrench,
    color: 'rose',
    analytics: [
      { label: 'Lost Parts Cost', value: '$0.00', trend: '100% Tracked' },
      { label: 'Monthly Parts Savings', value: '$12,400', trend: 'Zero Waste' },
      { label: 'Repair Speed', value: '+22%', trend: 'Paperless' }
    ],
    features: [
      'Digital video multipoint inspections that customers can approve from their phone',
      'Live bay status board to see which lifts are open and who is working on what',
      'Mobile barcode scanning so mechanics can add parts to repair orders in seconds',
      'Automated warranty and core return tracking so you get all your credits back'
    ],
    snapshots: [
      { title: 'Parts Warehouse', metric: '2,847', metricLabel: 'Cataloged SKUs', status: 'Healthy', items: [
        { name: 'Brake Pads & Rotors (OEM)', qty: 142, trend: 'up' },
        { name: 'Synthetic Oil Filters', qty: 89, trend: 'down' },
        { name: 'Spark Plugs & Ignition Coils', qty: 215, trend: 'up' },
        { name: 'Transmission Fluids & Gaskets', qty: 34, trend: 'down' },
      ]},
      { title: 'Active Bay Allocation', metric: '12 Bays', metricLabel: '100% Occupancy', status: 'Active', items: [
        { name: 'Bay 1 — Express Lube & Inspection', qty: 100, trend: 'up' },
        { name: 'Bay 2 — Heavy Engine & Transmission', qty: 100, trend: 'up' },
        { name: 'Bay 3 — Alignment & Brake Lathe', qty: 95, trend: 'up' },
        { name: 'Bay 4 — Electrical & Diagnostics', qty: 100, trend: 'up' },
      ]},
      { title: 'Aging Parts Prevention', metric: 'Zero', metricLabel: 'Over 90-Day Dead Stock', status: 'Healthy', items: [
        { name: 'Catalytic Converters Returned', qty: 100, trend: 'up' },
        { name: 'OEM Warranty Core Returns', qty: 100, trend: 'up' },
        { name: 'Automated Supplier RMA Queue', qty: 100, trend: 'up' },
        { name: 'Obsolete SKU Auto-Liquidation', qty: 100, trend: 'up' },
      ]}
    ]
  },
  'parts-inventory': {
    title: 'Parts & Inventory',
    tagline: 'Always have the right parts in stock without overspending.',
    description: 'Keep track of thousands of parts across multiple shelves and warehouses, speed up wholesale orders, and eliminate dusty dead stock.',
    icon: PackageCheck,
    color: 'purple',
    analytics: [
      { label: 'In-Stock Accuracy', value: '99.8%', trend: 'Exact Count' },
      { label: 'Inventory Turnover', value: '8.4x', trend: 'Fast Moving' },
      { label: 'Dead Stock Reduced', value: '-88%', trend: 'No Lost Money' }
    ],
    features: [
      'Instant part number and fitment lookup for all vehicle makes and models',
      'Barcode and bin location tracking so staff find parts immediately',
      'Automatic reorder alerts when fast-selling parts run low',
      'B2B wholesale portal for simple trade customer orders and billing'
    ],
    snapshots: [
      { title: 'Parts Inventory SKUs', metric: '14,280', metricLabel: 'Active SKUs', status: 'Healthy', items: [
        { name: 'OEM Brake Rotors & Pads', qty: 240, trend: 'up' },
        { name: 'Synthetic Oil & Filters', qty: 180, trend: 'up' },
        { name: 'Ignition & Alternators', qty: 95, trend: 'up' },
        { name: 'Suspension Struts & Shocks', qty: 64, trend: 'up' },
      ]}
    ]
  },
  'dms': {
    title: 'DMS (Dealer Management System)',
    tagline: 'A fast, modern operating system to run your automotive business.',
    description: 'Connect sales, service bays, parts inventory, and financial accounting in one easy cloud platform that works on any laptop, tablet, or phone.',
    icon: LayoutDashboard,
    color: 'emerald',
    analytics: [
      { label: 'Cost vs Old Systems', value: '-60%', trend: 'Fair Pricing' },
      { label: 'Daily Books Balanced', value: '100%', trend: 'Automatic' },
      { label: 'System Uptime', value: '99.99%', trend: 'Always On' }
    ],
    features: [
      'Books balance themselves daily with automatic bank feed matching',
      'Real-time vehicle and equipment inventory tracking with lot mapping',
      'Built-in compliance and security rules to protect customer data',
      'Open system that easily connects to your favorite tools and supplier feeds'
    ],
    snapshots: [
      { title: 'Dealership Health Pulse', metric: '$2.4M', metricLabel: 'Monthly Cash Flow', status: 'Healthy', items: [
        { name: 'Vehicle Sales Gross', qty: 89, trend: 'up' },
        { name: 'Service Bay Gross', qty: 94, trend: 'up' },
        { name: 'Parts Department Sales', qty: 78, trend: 'up' },
        { name: 'F&I Product Settlement', qty: 82, trend: 'up' },
      ]},
      { title: 'Accounting Reconciliation', metric: '100%', metricLabel: 'Balanced Daily', status: 'Healthy', items: [
        { name: 'Operating Account (JPMorgan)', qty: 100, trend: 'up' },
        { name: 'Floorplan Line of Credit', qty: 100, trend: 'up' },
        { name: 'Credit Card Merchant Settlement', qty: 100, trend: 'up' },
        { name: 'Payroll & Technician Commissions', qty: 100, trend: 'up' },
      ]},
      { title: 'Compliance & Audit Shield', metric: 'Clean', metricLabel: 'FTC & IRS Certified', status: 'Healthy', items: [
        { name: 'OFAC Real-Time Screening', qty: 100, trend: 'up' },
        { name: 'FTC Safeguards Encryption', qty: 100, trend: 'up' },
        { name: 'Form 8300 Cash Reporting', qty: 100, trend: 'up' },
        { name: 'Automated Disaster Recovery', qty: 100, trend: 'up' },
      ]}
    ]
  },

  /* ─── Backwards-Compatible Aliases ─── */
  'fixed-ops': {
    title: 'Enterprise ERP',
    tagline: 'One simple system to run your entire automotive business.',
    description: 'Track inventory, manage money, coordinate teams, and see all your locations in one simple screen. Built for dealerships, repair shops, parts distributors, and fleets.',
    icon: Database,
    color: 'orange',
    analytics: [
      { label: 'Time Saved on Admin', value: '85%', trend: 'Automated' },
      { label: 'Inventory Visibility', value: '100%', trend: 'Real-time' },
      { label: 'Sync Across Locations', value: '<50ms', trend: 'Instant' }
    ],
    features: [
      'See all vehicles, parts, and equipment across all your stores and warehouses',
      'Track profits, costs, and partner payouts without manual spreadsheets',
      'Follow jobs from customer arrival to final delivery and payment',
      'Simple user permissions so staff only see what they need to do their jobs'
    ],
    snapshots: [
      { title: 'Global Operations', metric: '$14.8M', metricLabel: 'Monthly Revenue', status: 'Healthy', items: [
        { name: 'Metro Group North', qty: 94, trend: 'up' },
        { name: 'Capital City Auto Mall', qty: 88, trend: 'up' },
        { name: 'South Suburban Dealership', qty: 76, trend: 'down' },
        { name: 'Harbor City Luxury Imports', qty: 98, trend: 'up' },
      ]}
    ]
  },
  'service-parts': {
    title: 'Service Bay',
    tagline: 'Keep every bay busy and stop losing track of parts.',
    description: 'Help technicians inspect vehicles faster with video reports, scan parts from their phones, and bill repair orders accurately without paperwork headaches.',
    icon: Wrench,
    color: 'rose',
    analytics: [
      { label: 'Lost Parts Cost', value: '$0.00', trend: '100% Tracked' },
      { label: 'Monthly Parts Savings', value: '$12,400', trend: 'Zero Waste' },
      { label: 'Repair Speed', value: '+22%', trend: 'Paperless' }
    ],
    features: [
      'Digital video multipoint inspections that customers can approve from their phone',
      'Live bay status board to see which lifts are open and who is working on what',
      'Mobile barcode scanning so mechanics can add parts to repair orders in seconds',
      'Automated warranty and core return tracking so you get all your credits back'
    ],
    snapshots: [
      { title: 'Parts Warehouse', metric: '2,847', metricLabel: 'Cataloged SKUs', status: 'Healthy', items: [
        { name: 'Brake Pads & Rotors (OEM)', qty: 142, trend: 'up' },
        { name: 'Synthetic Oil Filters', qty: 89, trend: 'down' },
      ]}
    ]
  },
  'erp-finance': {
    title: 'Financial Pulse & DMS',
    tagline: 'See your money moving in real-time with zero guesswork.',
    description: 'Every dollar tracked the moment it moves. Split revenue between partners, pay suppliers on time, and balance your books automatically every day.',
    icon: Database,
    color: 'purple',
    analytics: [
      { label: 'Daily Revenue', value: '$142k', trend: '+12%' },
      { label: 'Unaccounted Dollars', value: '$0', trend: 'Clean Books' },
      { label: 'Pending Payouts', value: '$12.4k', trend: 'On Schedule' }
    ],
    features: [
      'Automatically split revenue and profits between business partners',
      'Every sale, repair order, and expense is recorded immediately',
      'Pay vendors and suppliers the moment work is approved',
      'See cash flow across all your stores and repair bays on one screen'
    ],
    snapshots: []
  },
  'desking-fi': {
    title: 'Digital Retail & Desking',
    tagline: 'Clear pricing and instant buying options online and in-store.',
    description: 'Show your customers lease, finance, and cash options side by side in seconds. Get bank approvals quickly while the customer is ready to buy.',
    icon: Layers,
    color: 'sky',
    analytics: [
      { label: 'Average Deal Time', value: '14 min', trend: '-22 min' },
      { label: 'Protection Plan Sales', value: '62%', trend: '+8%' },
      { label: 'Approval Speed', value: '<2 min', trend: 'Instant' }
    ],
    features: [
      'Compare cash, loan, and lease options with exact penny-perfect numbers',
      'Fast credit approvals with multiple integrated lending partners',
      'Interactive menus for warranties and protection packages',
      'Sign all contracts electronically from any computer or mobile device'
    ],
    snapshots: []
  },
  'accounting': {
    title: 'Auto Accounting',
    tagline: 'Clean, accurate books that balance themselves every day.',
    description: 'Connect your bank accounts, track every dollar moving through your business, and stop wasting days on month-end spreadsheets.',
    icon: Calculator,
    color: 'emerald',
    analytics: [
      { label: 'Books Balanced', value: '100%', trend: 'Daily' },
      { label: 'Data Entry Errors', value: '0.00%', trend: 'Clean' },
      { label: 'Time to Close Month', value: '1 Day', trend: 'Instant' }
    ],
    features: [
      'Automatic daily bank and card payment matching',
      'Real-time profit & loss statements for every shop, department, or store',
      'Match supplier invoices to purchase orders so you never overpay',
      'Always ready for taxes with clean records and automated calculations'
    ],
    snapshots: []
  },
  'comm-center': {
    title: 'Comm-Center & Voice AI',
    tagline: 'Every customer phone call, text, and chat in one easy inbox.',
    description: 'Keep all customer conversations organized in one place, respond faster, and send automated service reminders that bring customers back.',
    icon: PhoneCall,
    color: 'blue',
    analytics: [
      { label: 'Response Time', value: '2.4 min', trend: '-40% Faster' },
      { label: 'Customer Rating', value: '4.8 / 5', trend: 'Satisfied' },
      { label: 'Appointments Booked', value: '+31%', trend: 'Automatic' }
    ],
    features: [
      'Phone, WhatsApp, SMS, and web chats together in one shared inbox',
      'Send automatic appointment reminders and vehicle pickup notifications',
      'Smart summaries of customer phone calls and message history',
      'Route customer calls directly to available staff members'
    ],
    snapshots: []
  },
  'inventory': {
    title: 'Inventory Intelligence',
    tagline: 'Know what to buy and when to sell.',
    description: 'Simple inventory tools that help you stock the most profitable vehicles and parts while clearing out slow-moving stock before it loses value.',
    icon: BarChart3,
    color: 'emerald',
    analytics: [
      { label: 'Days in Stock', value: '28.5', trend: '-5.2 Days' },
      { label: 'Profit Per Unit', value: '+$312', trend: '+12%' },
      { label: 'Slow Stock Risk', value: '4%', trend: 'Minimal' }
    ],
    features: [
      'Smart recommendations on which vehicles or parts are in high demand',
      'See all inventory and aging units on an easy visual map',
      'Automatic warnings when units stay in stock longer than 60 days',
      'Price adjustments based on local market supply and demand'
    ],
    snapshots: []
  },
  'stagg-portal': {
    title: 'Vendor & Partner Portal',
    tagline: 'Work with outside vendors, sublet shops, and transport teams easily.',
    description: 'Send work orders to external detailers, painters, tow trucks, and repair partners, track their progress, and approve payments without the paperwork chaos.',
    icon: Briefcase,
    color: 'teal',
    analytics: [
      { label: 'Active Partners', value: '12', trend: 'Connected' },
      { label: 'On-Time Completion', value: '98%', trend: 'Reliable' },
      { label: 'Payment Approvals', value: 'Instant', trend: 'Paperless' }
    ],
    features: [
      'Assign jobs to outside vendors and sublet specialists in one click',
      'Partners can view work orders and upload completion photos from their phones',
      'Match vendor bills to authorized prices before sending payments',
      'Track which vehicles are currently off-site and when they will be returned'
    ],
    snapshots: []
  },
  'ai-front-desk': {
    title: 'AI Front Desk',
    tagline: '24/7 intelligent call answering and appointment booking.',
    description: 'Friendly voice and text assistance that answers customer questions, books service appointments, and connects urgent calls to staff.',
    icon: PhoneCall,
    color: 'blue',
    analytics: [
      { label: 'Calls Answered', value: '100%', trend: 'Zero Missed' },
      { label: 'Booking Time', value: '<45s', trend: 'Instant' },
      { label: 'After-Hours Bookings', value: '+44%', trend: '24/7 Open' }
    ],
    features: [
      'Answers incoming customer phone calls and texts 24 hours a day',
      'Books appointments directly on your shop calendar',
      'Sends instant text confirmations and repair status updates to customers',
      'Transfers urgent customer questions directly to on-duty staff'
    ],
    snapshots: []
  },
  'analytics': {
    title: 'Enterprise Analytics',
    tagline: 'Clear, real-time reports on sales, profits, and team performance.',
    description: 'See how your business is performing right now. Get clear numbers on sales profits, shop efficiency, inventory turn rates, and cash flow.',
    icon: BarChart3,
    color: 'emerald',
    analytics: [
      { label: 'Live Data Updates', value: '<50ms', trend: 'Real-time' },
      { label: 'Forecast Accuracy', value: '98.4%', trend: 'Reliable' },
      { label: 'Hours Saved on Reports', value: '18 hrs/mo', trend: 'Automated' }
    ],
    features: [
      'Simple executive summaries across all your locations and departments',
      'Track profit margins on vehicle sales, repair orders, and parts counters',
      'See technician billable hours and shop throughput at a glance',
      'Automatic daily summary reports sent straight to your phone or email'
    ],
    snapshots: []
  },
  'ecommerce': {
    title: 'E-Commerce & Digital Storefronts',
    tagline: 'High-converting digital storefronts built for automotive retail.',
    description: 'Launch fast, beautiful websites that showcase your inventory, let buyers reserve vehicles or parts online, and sync prices across popular marketplaces.',
    icon: Globe,
    color: 'sky',
    analytics: [
      { label: 'Page Load Speed', value: '99/100', trend: 'Instant Load' },
      { label: 'Online Reservations', value: '+310%', trend: 'Direct Orders' },
      { label: 'Google Search Traffic', value: '+74%', trend: 'Optimized' }
    ],
    features: [
      'Fast, mobile-friendly websites with your custom branding and logo',
      'Live vehicle and parts listings that update the moment inventory changes',
      'Allow customers to place deposits and reserve items online anytime',
      'Automatic Google and search engine optimization so local buyers find you first'
    ],
    snapshots: [
      { title: 'Storefront Performance', metric: '42.8k', metricLabel: 'Monthly Web Visitors', status: 'Healthy', items: [
        { name: 'Vehicle Detail Page (VDP) Views', qty: 96, trend: 'up' },
        { name: 'Online Deposit Reservations', qty: 78, trend: 'up' },
        { name: 'Custom Finance Applications', qty: 84, trend: 'up' },
        { name: 'Mobile Checkout Velocity', qty: 92, trend: 'up' },
      ]},
      { title: 'Digital Checkout Pipeline', metric: '$1.8M', metricLabel: 'Online Vehicle Orders', status: 'Active', items: [
        { name: 'New EV Model Pre-Orders', qty: 100, trend: 'up' },
        { name: 'Certified Pre-Owned Holds', qty: 89, trend: 'up' },
        { name: 'Home Delivery Reservations', qty: 72, trend: 'up' },
        { name: 'Online Trade-In Submissions', qty: 94, trend: 'up' },
      ]},
      { title: 'SEO & Core Web Vitals', metric: '100%', metricLabel: 'Green CWV Score', status: 'Healthy', items: [
        { name: 'Largest Contentful Paint (0.6s)', qty: 100, trend: 'up' },
        { name: 'Cumulative Layout Shift (0.00)', qty: 100, trend: 'up' },
        { name: 'Structured Vehicle Schema Markup', qty: 100, trend: 'up' },
        { name: 'Automated Local Dealer SEO', qty: 100, trend: 'up' },
      ]}
    ]
  },
  'e-commerce': {
    title: 'E-Commerce & Digital Storefronts',
    tagline: 'High-converting digital storefronts built for automotive retail.',
    description: 'Launch fast, beautiful websites that showcase your inventory, let buyers reserve vehicles or parts online, and sync prices across popular marketplaces.',
    icon: Globe,
    color: 'sky',
    analytics: [
      { label: 'Page Load Speed', value: '99/100', trend: 'Instant Load' },
      { label: 'Online Reservations', value: '+310%', trend: 'Direct Orders' },
      { label: 'Google Search Traffic', value: '+74%', trend: 'Optimized' }
    ],
    features: [
      'Fast, mobile-friendly websites with your custom branding and logo',
      'Live vehicle and parts listings that update the moment inventory changes',
      'Allow customers to place deposits and reserve items online anytime',
      'Automatic Google and search engine optimization so local buyers find you first'
    ],
    snapshots: []
  },
  'storefront': {
    title: 'E-Commerce & Digital Storefronts',
    tagline: 'High-converting digital storefronts built for automotive retail.',
    description: 'Launch fast, beautiful websites that showcase your inventory, let buyers reserve vehicles or parts online, and sync prices across popular marketplaces.',
    icon: Globe,
    color: 'sky',
    analytics: [
      { label: 'Page Load Speed', value: '99/100', trend: 'Instant Load' },
      { label: 'Online Reservations', value: '+310%', trend: 'Direct Orders' },
      { label: 'Google Search Traffic', value: '+74%', trend: 'Optimized' }
    ],
    features: [
      'Fast, mobile-friendly websites with your custom branding and logo',
      'Live vehicle and parts listings that update the moment inventory changes',
      'Allow customers to place deposits and reserve items online anytime',
      'Automatic Google and search engine optimization so local buyers find you first'
    ],
    snapshots: []
  },
  'digital-storefront': {
    title: 'E-Commerce & Digital Storefronts',
    tagline: 'High-converting digital storefronts built for automotive retail.',
    description: 'Launch fast, beautiful websites that showcase your inventory, let buyers reserve vehicles or parts online, and sync prices across popular marketplaces.',
    icon: Globe,
    color: 'sky',
    analytics: [
      { label: 'Page Load Speed', value: '99/100', trend: 'Instant Load' },
      { label: 'Online Reservations', value: '+310%', trend: 'Direct Orders' },
      { label: 'Google Search Traffic', value: '+74%', trend: 'Optimized' }
    ],
    features: [
      'Fast, mobile-friendly websites with your custom branding and logo',
      'Live vehicle and parts listings that update the moment inventory changes',
      'Allow customers to place deposits and reserve items online anytime',
      'Automatic Google and search engine optimization so local buyers find you first'
    ],
    snapshots: []
  }
};
