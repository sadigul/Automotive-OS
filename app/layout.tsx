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
    default: 'DMSPilot | AI-Powered Auto Dealer Management System & ERP Software',
    template: '%s | DMSPilot'
  },
  description: 'DMSPilot is the #1 AI-powered cloud DMS platform for auto dealerships. Automate inventory, parts, accounting, CRM, F&I desking & service operations. Built-in AI automation replaces CDK, Reynolds & Dealertrack — save 60% with intelligent workflows.',
  keywords: [
    'AI dealer management system',
    'AI-powered DMS software',
    'dealership management software',
    'automotive ERP',
    'AI auto dealer CRM',
    'automated dealership inventory',
    'AI automotive software',
    'auto parts management system',
    'AI F&I desking software',
    'dealership accounting automation',
    'service department automation',
    'CDK alternative',
    'Reynolds and Reynolds alternative',
    'Dealertrack alternative',
    'cloud DMS AI',
    'automotive dealer operating system',
    'car dealership ERP automation',
    'AI vehicle inventory system',
    'auto dealer technology AI',
    'dealership automation platform',
    'AI dealership operations',
    'machine learning automotive',
    'intelligent DMS',
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
    title: 'DMSPilot | AI-Powered Dealer Management System & Automation Platform',
    description: 'AI-powered cloud DMS replacing CDK & Reynolds. Automate inventory, CRM, F&I, parts, accounting & service ops — one intelligent platform, 60% less cost.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMSPilot | AI-Powered Auto Dealer Management System',
    description: 'The AI-native DMS platform automating auto dealerships. Smart inventory, CRM, Parts, Accounting & Service — all powered by intelligent automation.',
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
              "applicationSubCategory": "AI & Automation",
              "operatingSystem": "Web",
              "description": "AI-powered all-in-one cloud dealer management system for automotive dealerships. Intelligent automation for inventory, parts, CRM, accounting, F&I, and service operations. Machine learning workflows replace manual processes.",
              "url": "https://dmspilot.com",
              "featureList": "AI Inventory Management, Automated CRM, Intelligent F&I Desking, Smart Parts Ordering, Automated Accounting, AI Service Scheduling, Predictive Analytics, Workflow Automation",
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
              "description": "AI-powered cloud-native dealer management system with intelligent automation, replacing legacy automotive software like CDK, Reynolds & Reynolds, and Dealertrack",
              "knowsAbout": ["Artificial Intelligence", "Dealership Automation", "Automotive ERP", "Machine Learning", "Cloud Computing"],
              "slogan": "The AI-Powered Nervous System for Automotive",
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
                  "name": "What is the best AI-powered dealer management system for auto dealerships?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DMSPilot is the #1 AI-powered cloud-native dealer management system built for modern auto dealerships. It uses intelligent automation and machine learning to replace legacy systems like CDK, Reynolds & Reynolds, and Dealertrack with one unified platform covering automated inventory, smart CRM, AI-driven F&I, parts, accounting, and service operations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does DMSPilot use AI and automation?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DMSPilot leverages AI across every module — from intelligent inventory pricing and automated lead scoring in CRM, to predictive parts ordering, smart service scheduling, and automated accounting reconciliation. Our AI workflows eliminate 80% of manual data entry and repetitive tasks."
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
