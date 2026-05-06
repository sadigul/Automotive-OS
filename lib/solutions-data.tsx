import { 
  Wrench, 
  Database, 
  Target, 
  Layers, 
  Calculator, 
  PhoneCall, 
  BarChart3, 
  Briefcase 
} from 'lucide-react';

export const solutionsData = {
  'service-parts': {
    title: 'AOS Service & Parts',
    tagline: 'Stop losing money on missing parts.',
    description: 'A simple system that tracks every part in your service bay. It knows what you have, what you need, and orders more before you run out. No more lost parts, no more unbilled work.',
    icon: Wrench,
    color: 'rose',
    analytics: [
      { label: 'Money Saved', value: '$12,400', trend: 'This Month' },
      { label: 'Stockouts', value: 'Zero', trend: 'Perfect' },
      { label: 'Tech Speed', value: '+15%', trend: 'Faster' }
    ],
    features: [
      'See your entire warehouse on a visual map',
      'Scan parts to check out — no paperwork',
      'Get alerts when parts are sitting too long',
      'Auto-reorder before you run out'
    ],
    snapshots: [
      { title: 'Parts Warehouse', metric: '2,847', metricLabel: 'Total Parts', status: 'Healthy', items: [
        { name: 'Brake Pads (OEM)', qty: 142, trend: 'up' },
        { name: 'Oil Filters', qty: 89, trend: 'down' },
        { name: 'Spark Plugs', qty: 215, trend: 'up' },
        { name: 'Transmission Fluid', qty: 34, trend: 'down' },
      ]},
      { title: 'Reorder Queue', metric: '7', metricLabel: 'Pending Orders', status: 'Active', items: [
        { name: 'Air Filters (x50)', qty: 0, trend: 'up' },
        { name: 'Wiper Blades (x30)', qty: 0, trend: 'up' },
        { name: 'Coolant 1Gal (x20)', qty: 0, trend: 'up' },
        { name: 'Battery Terminals (x40)', qty: 0, trend: 'up' },
      ]},
      { title: 'Aging Alerts', metric: '18', metricLabel: 'Items Over 90 Days', status: 'Warning', items: [
        { name: 'Catalytic Converter', qty: 94, trend: 'down' },
        { name: 'Rear Bumper (2019)', qty: 112, trend: 'down' },
        { name: 'Headlight Assembly', qty: 97, trend: 'down' },
        { name: 'Exhaust Manifold', qty: 103, trend: 'down' },
      ]}
    ]
  },
  'fixed-ops': {
    title: 'AOS Enterprise ERP',
    tagline: 'Your entire dealership in one screen.',
    description: 'The command center for your operation. See inventory, finances, and supply chain all in one place. Make decisions faster because everything you need is right in front of you.',
    icon: Wrench,
    color: 'orange',
    analytics: [
      { label: 'Efficiency', value: '114%', trend: '+8%' },
      { label: 'Alerts', value: 'Zero', trend: 'All Clear' },
      { label: 'Turn Time', value: '18 Days', trend: '-2 Days' }
    ],
    features: [
      'One dashboard to control everything',
      'See your supply chain in real-time',
      'Track inventory across all locations',
      'Spot problems before they happen'
    ],
    snapshots: [
      { title: 'Global Overview', metric: '$8.4M', metricLabel: 'Monthly Revenue', status: 'Healthy', items: [
        { name: 'NA-East Region', qty: 78, trend: 'up' },
        { name: 'EMEA-Central', qty: 92, trend: 'down' },
        { name: 'APAC-South', qty: 45, trend: 'up' },
        { name: 'LATAM-Brazil', qty: 67, trend: 'up' },
      ]},
      { title: 'Supply Chain', metric: '1.2h', metricLabel: 'Avg Delay', status: 'Active', items: [
        { name: 'Parts Shipment #4821', qty: 0, trend: 'up' },
        { name: 'Vehicle Transport #331', qty: 0, trend: 'up' },
        { name: 'Equipment Order #892', qty: 0, trend: 'down' },
        { name: 'Bulk Oil Delivery', qty: 0, trend: 'up' },
      ]},
      { title: 'Inventory Health', metric: '3,412', metricLabel: 'Active SKUs', status: 'Healthy', items: [
        { name: 'New Vehicles', qty: 89, trend: 'up' },
        { name: 'Used Vehicles', qty: 64, trend: 'up' },
        { name: 'Parts & Accessories', qty: 2847, trend: 'up' },
        { name: 'Service Equipment', qty: 412, trend: 'down' },
      ]}
    ]
  },
  'erp-finance': {
    title: 'Financial Pulse',
    tagline: 'See your money moving in real-time.',
    description: 'No more waiting weeks for financial reports. See exactly where every dollar goes, the moment it moves. Partner splits, supplier payments, and daily revenue — all automatic, all instant.',
    icon: Database,
    color: 'purple',
    analytics: [
      { label: 'Daily Revenue', value: 'R$ 142k', trend: '+12%' },
      { label: 'Leakage', value: 'R$ 0', trend: 'Clean' },
      { label: 'Partner Payouts', value: 'R$ 12.4k', trend: 'Pending' }
    ],
    features: [
      'Auto-split revenue between partners (51/49%)',
      'Every transaction recorded permanently',
      'Pay suppliers the moment work is done',
      'See all your stores on one money dashboard'
    ],
    snapshots: [
      { title: 'Daily Revenue', metric: 'R$ 142k', metricLabel: 'Today So Far', status: 'Healthy', items: [
        { name: 'Service Revenue', qty: 67, trend: 'up' },
        { name: 'Parts Sales', qty: 42, trend: 'up' },
        { name: 'Vehicle Sales', qty: 89, trend: 'up' },
        { name: 'F&I Products', qty: 31, trend: 'down' },
      ]},
      { title: 'Partner Split', metric: '51/49', metricLabel: 'Revenue Ratio', status: 'Active', items: [
        { name: 'Dealer Share (51%)', qty: 51, trend: 'up' },
        { name: 'Firm Share (49%)', qty: 49, trend: 'up' },
        { name: 'Settled Today', qty: 84, trend: 'up' },
        { name: 'Pending Settlement', qty: 3, trend: 'down' },
      ]},
      { title: 'Ledger Feed', metric: '1,204', metricLabel: 'Transactions Today', status: 'Healthy', items: [
        { name: 'RO #8842 — Brake Job', qty: 0, trend: 'up' },
        { name: 'RO #8843 — Oil Change', qty: 0, trend: 'up' },
        { name: 'Parts Sale #2291', qty: 0, trend: 'up' },
        { name: 'Vehicle Deal #441', qty: 0, trend: 'up' },
      ]}
    ]
  },
  'sales-crm': {
    title: 'Sales CRM',
    tagline: 'Know your customers before they walk in.',
    description: 'Stop guessing which leads are hot. AOS CRM watches your service drive and tells you exactly who is ready to buy, when to call them, and what to offer. More deals, less cold calls.',
    icon: Target,
    color: 'indigo',
    analytics: [
      { label: 'Conversion', value: '18.4%', trend: '+22%' },
      { label: 'Hot Leads', value: '420', trend: 'Monthly' },
      { label: 'Retention', value: '92%', trend: '+15%' }
    ],
    features: [
      'See which service customers are ready to buy',
      'Auto-send trade-in offers at the right time',
      'Route leads to the best salesperson',
      'Track every customer touchpoint in one place'
    ],
    snapshots: [
      { title: 'Lead Pipeline', metric: '420', metricLabel: 'Active Leads', status: 'Healthy', items: [
        { name: 'Hot — Ready to Buy', qty: 38, trend: 'up' },
        { name: 'Warm — Engaged', qty: 124, trend: 'up' },
        { name: 'Nurturing', qty: 186, trend: 'down' },
        { name: 'New This Week', qty: 72, trend: 'up' },
      ]},
      { title: 'Conversion Funnel', metric: '18.4%', metricLabel: 'Close Rate', status: 'Active', items: [
        { name: 'Website Leads', qty: 89, trend: 'up' },
        { name: 'Phone Leads', qty: 67, trend: 'up' },
        { name: 'Walk-ins', qty: 45, trend: 'down' },
        { name: 'Service-to-Sales', qty: 34, trend: 'up' },
      ]},
      { title: 'AI Offers Sent', metric: '156', metricLabel: 'This Month', status: 'Healthy', items: [
        { name: 'Trade-In Offers', qty: 78, trend: 'up' },
        { name: 'Lease End Reminders', qty: 42, trend: 'up' },
        { name: 'Service Upsells', qty: 24, trend: 'up' },
        { name: 'Loyalty Rewards', qty: 12, trend: 'down' },
      ]}
    ]
  },
  'desking-fi': {
    title: 'Desking & F&I',
    tagline: 'Close deals faster, right from the chair.',
    description: 'Show your customer lease, finance, and cash options side by side — in seconds. Get bank approvals while they are still sitting in front of you. No back-and-forth, no waiting.',
    icon: Layers,
    color: 'sky',
    analytics: [
      { label: 'Per Deal Profit', value: '+$420', trend: '+15%' },
      { label: 'Product Sales', value: '42%', trend: '+8%' },
      { label: 'Deal Time', value: '14 min', trend: '-22 min' }
    ],
    features: [
      'Compare lease, finance, and cash in one screen',
      'Get bank approvals in real-time',
      'Compliance checklists run automatically',
      'E-sign documents from anywhere'
    ],
    snapshots: [
      { title: 'Payment Options', metric: '3', metricLabel: 'Live Quotes', status: 'Active', items: [
        { name: 'Lease — $389/mo', qty: 36, trend: 'up' },
        { name: 'Finance — $512/mo', qty: 72, trend: 'up' },
        { name: 'Cash — $32,400', qty: 100, trend: 'up' },
        { name: 'Special — $0 Down', qty: 48, trend: 'up' },
      ]},
      { title: 'Lender Status', metric: '5', metricLabel: 'Banks Connected', status: 'Healthy', items: [
        { name: 'Capital One — Approved', qty: 95, trend: 'up' },
        { name: 'Chase — Approved', qty: 88, trend: 'up' },
        { name: 'Ally — Pending', qty: 60, trend: 'down' },
        { name: 'Wells Fargo — Approved', qty: 91, trend: 'up' },
      ]},
      { title: 'F&I Products', metric: '$420', metricLabel: 'Avg Per Deal', status: 'Healthy', items: [
        { name: 'Extended Warranty', qty: 68, trend: 'up' },
        { name: 'GAP Insurance', qty: 42, trend: 'up' },
        { name: 'Paint Protection', qty: 31, trend: 'down' },
        { name: 'Tire & Wheel', qty: 24, trend: 'up' },
      ]}
    ]
  },
  'accounting': {
    title: 'Auto Accounting',
    tagline: 'Your books close themselves. Every day.',
    description: 'Every repair order, every parts sale, every vehicle deal gets booked the moment it happens. No more month-end scramble. Your books are always ready for an audit.',
    icon: Calculator,
    color: 'rose',
    analytics: [
      { label: 'Audit Ready', value: '100%', trend: 'Always' },
      { label: 'Errors', value: '0.00%', trend: 'Zero' },
      { label: 'Days to Collect', value: '1.2', trend: '-4.5 Days' }
    ],
    features: [
      'Bank feeds match themselves automatically',
      'Bills get paid on schedule, no manual work',
      'AI sorts every expense into the right category',
      'See your tax bill update in real-time'
    ],
    snapshots: [
      { title: 'Bank Reconciliation', metric: '100%', metricLabel: 'Matched', status: 'Healthy', items: [
        { name: 'Checking — Chase', qty: 100, trend: 'up' },
        { name: 'Operating — BofA', qty: 100, trend: 'up' },
        { name: 'Reserve — Wells', qty: 98, trend: 'up' },
        { name: 'Payroll — ADP', qty: 100, trend: 'up' },
      ]},
      { title: 'Balance Sheet', metric: '$2.4M', metricLabel: 'Total Assets', status: 'Active', items: [
        { name: 'Cash & Equivalents', qty: 82, trend: 'up' },
        { name: 'Inventory Value', qty: 71, trend: 'down' },
        { name: 'Accounts Receivable', qty: 45, trend: 'up' },
        { name: 'Fixed Assets', qty: 93, trend: 'up' },
      ]},
      { title: 'Vendor Payouts', metric: '24', metricLabel: 'Due This Week', status: 'Active', items: [
        { name: 'OEM Parts Supplier', qty: 0, trend: 'up' },
        { name: 'Cleaning Service', qty: 0, trend: 'up' },
        { name: 'Marketing Agency', qty: 0, trend: 'down' },
        { name: 'IT Support', qty: 0, trend: 'up' },
      ]}
    ]
  },
  'comm-center': {
    title: 'Comm-Center',
    tagline: 'Every call, text, and message in one place.',
    description: 'Phone calls, WhatsApp, SMS — all in one screen, all tied to the customer. AI listens to every conversation and tells you when someone is unhappy or ready to buy.',
    icon: PhoneCall,
    color: 'blue',
    analytics: [
      { label: 'Response Time', value: '2.4 min', trend: '-40%' },
      { label: 'Satisfaction', value: '8.4/10', trend: '+1.2' },
      { label: 'Calls → Appts', value: '31%', trend: '+9%' }
    ],
    features: [
      'Phone, WhatsApp, and SMS all in one inbox',
      'Auto-send follow-up messages',
      'AI reads the mood of every conversation',
      'Route angry callers to your best people'
    ],
    snapshots: [
      { title: 'Live Calls', metric: '8', metricLabel: 'Active Now', status: 'Active', items: [
        { name: 'Service Desk — Line 1', qty: 0, trend: 'up' },
        { name: 'Sales Floor — Line 3', qty: 0, trend: 'up' },
        { name: 'Parts Counter — Line 2', qty: 0, trend: 'up' },
        { name: 'BDC Agent — Maria', qty: 0, trend: 'up' },
      ]},
      { title: 'Customer Mood', metric: '8.4', metricLabel: 'Avg Score / 10', status: 'Healthy', items: [
        { name: 'Happy Calls', qty: 72, trend: 'up' },
        { name: 'Neutral Calls', qty: 21, trend: 'down' },
        { name: 'Frustrated Calls', qty: 5, trend: 'down' },
        { name: 'Escalated', qty: 2, trend: 'down' },
      ]},
      { title: 'Team Stats', metric: '94%', metricLabel: 'Answer Rate', status: 'Healthy', items: [
        { name: 'Maria — 48 calls', qty: 96, trend: 'up' },
        { name: 'James — 41 calls', qty: 92, trend: 'up' },
        { name: 'Sarah — 37 calls', qty: 89, trend: 'down' },
        { name: 'Mike — 35 calls', qty: 94, trend: 'up' },
      ]}
    ]
  },
  'inventory': {
    title: 'Inventory Intelligence',
    tagline: 'Know what to buy and when to sell.',
    description: 'Stop guessing which cars will sell. AOS looks at your market, your sales history, and tells you exactly which vehicles to stock and which ones to wholesale — before they age out.',
    icon: BarChart3,
    color: 'emerald',
    analytics: [
      { label: 'Turn Days', value: '28.5', trend: '-5.2 Days' },
      { label: 'Profit/Unit', value: '+$312', trend: '+12%' },
      { label: 'Aging Risk', value: '4%', trend: '-8%' }
    ],
    features: [
      'AI tells you which cars to buy next',
      'Prices adjust based on local market',
      'See which cars are aging on a visual lot map',
      'Auto-send old cars to wholesale'
    ],
    snapshots: [
      { title: 'Market Demand', metric: '1.04', metricLabel: 'Supply Index', status: 'Healthy', items: [
        { name: 'SUVs — High Demand', qty: 92, trend: 'up' },
        { name: 'Trucks — Strong', qty: 84, trend: 'up' },
        { name: 'Sedans — Moderate', qty: 56, trend: 'down' },
        { name: 'EVs — Growing', qty: 71, trend: 'up' },
      ]},
      { title: 'Lot Overview', metric: '153', metricLabel: 'Total Units', status: 'Active', items: [
        { name: 'Under 30 Days', qty: 89, trend: 'up' },
        { name: '30-45 Days', qty: 42, trend: 'down' },
        { name: '45-60 Days', qty: 16, trend: 'down' },
        { name: 'Over 60 Days', qty: 6, trend: 'down' },
      ]},
      { title: 'Buy Recommendations', metric: '12', metricLabel: 'Vehicles to Source', status: 'Active', items: [
        { name: 'RAV4 2023 — $28k', qty: 0, trend: 'up' },
        { name: 'F-150 2024 — $42k', qty: 0, trend: 'up' },
        { name: 'CR-V 2023 — $31k', qty: 0, trend: 'up' },
        { name: 'Camry 2024 — $27k', qty: 0, trend: 'up' },
      ]}
    ]
  },
  'stagg-portal': {
    title: 'Stagg Portal',
    tagline: 'Manage outside teams like they are in-house.',
    description: 'Send jobs to partner firms, track their work, and pay them automatically when the job is done. Everyone sees the same information. No phone tag, no spreadsheets.',
    icon: Briefcase,
    color: 'teal',
    analytics: [
      { label: 'Active Firms', value: '12', trend: '+2 New' },
      { label: 'Satisfaction', value: '4.9/5', trend: 'High' },
      { label: 'Payouts', value: 'Instant', trend: 'Auto' }
    ],
    features: [
      'Send jobs to partners with one click',
      'Partners see their own profit dashboard',
      'Track mechanic performance by the numbers',
      'Pay partners the moment the job closes'
    ],
    snapshots: [
      { title: 'Active Jobs', metric: '34', metricLabel: 'In Progress', status: 'Active', items: [
        { name: 'AutoFix Co — 12 jobs', qty: 0, trend: 'up' },
        { name: 'QuickLube Pro — 8 jobs', qty: 0, trend: 'up' },
        { name: 'BrakeMax — 9 jobs', qty: 0, trend: 'up' },
        { name: 'TireWorld — 5 jobs', qty: 0, trend: 'down' },
      ]},
      { title: 'Partner Payouts', metric: '$48.2k', metricLabel: 'This Month', status: 'Healthy', items: [
        { name: 'AutoFix Co', qty: 38, trend: 'up' },
        { name: 'QuickLube Pro', qty: 24, trend: 'up' },
        { name: 'BrakeMax', qty: 22, trend: 'up' },
        { name: 'TireWorld', qty: 16, trend: 'down' },
      ]},
      { title: 'Performance', metric: '4.9', metricLabel: 'Avg Rating', status: 'Healthy', items: [
        { name: 'On-Time Completion', qty: 96, trend: 'up' },
        { name: 'Quality Score', qty: 94, trend: 'up' },
        { name: 'Customer Reviews', qty: 91, trend: 'up' },
        { name: 'Callback Rate', qty: 4, trend: 'down' },
      ]}
    ]
  }
};
