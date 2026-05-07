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
    default: 'DMSPilot | #1 Auto Dealer Management System & ERP Software',
    template: '%s | DMSPilot'
  },
  description: 'DMSPilot is the all-in-one cloud DMS platform for auto dealerships. Manage inventory, parts, accounting, CRM, F&I desking, and service operations in one system. Replace CDK, Reynolds & Reynolds, and Dealertrack today.',
  keywords: [
    'auto dealer management system',
    'DMS software',
    'dealership management software',
    'automotive ERP',
    'car dealer software',
    'auto dealer CRM',
    'dealership inventory management',
    'auto parts management system',
    'F&I desking software',
    'dealership accounting software',
    'service department software',
    'CDK alternative',
    'Reynolds and Reynolds alternative',
    'Dealertrack alternative',
    'cloud DMS',
    'automotive dealer operating system',
    'car dealership ERP',
    'vehicle inventory system',
    'auto dealer technology',
    'dealership operations platform'
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
    title: 'DMSPilot | #1 Auto Dealer Management System & ERP Software',
    description: 'The all-in-one cloud DMS platform for modern auto dealerships. Manage inventory, parts, CRM, accounting, and service ops — replace legacy systems like CDK & Reynolds.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMSPilot | #1 Auto Dealer Management System',
    description: 'Cloud-native DMS platform for auto dealerships. Inventory, CRM, Parts, Accounting & Service in one system.',
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
              "operatingSystem": "Web",
              "description": "All-in-one cloud dealer management system for automotive dealerships. Manage inventory, parts, CRM, accounting, F&I, and service operations.",
              "url": "https://dmspilot.com",
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
              "description": "Cloud-native dealer management system replacing legacy automotive software",
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
                  "name": "What is the best dealer management system for auto dealerships?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DMSPilot is the #1 cloud-native dealer management system built for modern auto dealerships. It replaces legacy systems like CDK, Reynolds & Reynolds, and Dealertrack with one unified platform covering inventory, CRM, F&I, parts, accounting, and service operations."
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
