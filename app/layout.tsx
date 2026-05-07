import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: {
    default: 'DMSPilot | Automated Auto Dealer Management System & ERP Software',
    template: '%s | DMSPilot'
  },
  description: 'DMSPilot is the #1 fully automated cloud DMS platform for auto dealerships. Automate inventory, parts, accounting, CRM, F&I desking & service operations. Built-in automation replaces CDK, Reynolds & Dealertrack — save 60% with zero manual workflows.',
  keywords: [
    'automated dealer management system',
    'automated DMS software',
    'dealership management software',
    'automotive ERP',
    'automated auto dealer CRM',
    'automated dealership inventory',
    'automotive automation software',
    'auto parts management system',
    'automated F&I desking software',
    'dealership accounting automation',
    'service department automation',
    'CDK alternative',
    'Reynolds and Reynolds alternative',
    'Dealertrack alternative',
    'cloud DMS automation',
    'automotive dealer operating system',
    'car dealership ERP automation',
    'automated vehicle inventory system',
    'auto dealer technology automation',
    'dealership automation platform',
    'automated dealership operations',
    'workflow automation automotive',
    'automated DMS',
    'automated dealer workflows',
    'smart dealership software'
  ],
  authors: [{ name: 'DMSPilot' }],
  creator: 'DMSPilot',
  publisher: 'DMSPilot',
  metadataBase: new URL('https://dmspilot.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dmspilot.com',
    siteName: 'DMSPilot',
    title: 'DMSPilot | Automated Dealer Management System & ERP Platform',
    description: 'Fully automated cloud DMS replacing CDK & Reynolds. Automate inventory, CRM, F&I, parts, accounting & service ops — one platform, 60% less cost.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMSPilot | Fully Automated Auto Dealer Management System',
    description: 'The automation-first DMS platform for auto dealerships. Automated inventory, CRM, Parts, Accounting & Service — zero manual workflows.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "DMSPilot",
              "applicationCategory": "BusinessApplication",
              "applicationSubCategory": "Automation",
              "operatingSystem": "Web",
              "description": "Fully automated all-in-one cloud dealer management system for automotive dealerships. End-to-end automation for inventory, parts, CRM, accounting, F&I, and service operations. Automated workflows replace manual processes entirely.",
              "url": "https://dmspilot.com",
              "featureList": "Automated Inventory Management, Automated CRM & Lead Routing, Automated F&I Desking, Smart Parts Ordering, Automated Accounting & Reconciliation, Automated Service Scheduling, Real-Time Analytics, Workflow Automation",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Request access for custom pricing"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              },
              "publisher": {
                "@type": "Organization",
                "name": "DMSPilot",
                "url": "https://dmspilot.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DMSPilot",
              "url": "https://dmspilot.com",
              "logo": "https://dmspilot.com/logo.svg",
              "description": "Fully automated cloud-native dealer management system replacing legacy automotive software like CDK, Reynolds & Reynolds, and Dealertrack",
              "knowsAbout": ["Dealership Automation", "Automotive ERP", "Workflow Automation", "Cloud Computing", "Automotive Operations"],
              "slogan": "The Automated Nervous System for Automotive",
              "sameAs": [
                "https://www.linkedin.com/company/dmspilot",
                "https://twitter.com/dmspilot"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "sadigulx05@gmail.com",
                "contactType": "sales"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does migration from CDK/Reynolds take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our typical enterprise migration takes 14-21 days. We use automated secure data extraction to ensure zero downtime or data loss during the transition."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to train my staff to use DMSPilot?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DMSPilot is designed like a consumer app. If your team can use modern software, they can use DMSPilot. We also provide initial onboarding sessions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is my dealership's data secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We use military-grade encryption and 100% cloud-native microservices. Your data is isolated, backed up in real-time, and strictly yours."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I just use the Sales CRM without the ERP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our modules are completely decoupled but natively integrated. You can start with the Sales CRM and expand into Service and ERP later."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best automated dealer management system for auto dealerships?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DMSPilot is the #1 fully automated cloud-native dealer management system built for modern auto dealerships. It uses end-to-end automation to replace legacy systems like CDK, Reynolds & Reynolds, and Dealertrack with one unified platform covering automated inventory, automated CRM, automated F&I desking, parts, accounting, and service operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does DMSPilot automate dealership operations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DMSPilot automates every module — from automated inventory pricing and automated lead routing in CRM, to smart parts ordering, automated service scheduling, and automated accounting reconciliation. Our workflows eliminate 80% of manual data entry and repetitive tasks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does DMSPilot cost compared to CDK or Reynolds?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DMSPilot saves dealerships up to 60% compared to legacy DMS providers. We offer custom pricing based on your dealership size and modules needed. Request a free demo to get a personalized quote."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased text-gray-900 bg-white">
          {children}
      </body>
    </html>
  );
}
