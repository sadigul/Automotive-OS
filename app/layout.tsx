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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DMSPilot - Auto Dealer Management System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DMSPilot | #1 Auto Dealer Management System',
    description: 'Cloud-native DMS platform for auto dealerships. Inventory, CRM, Parts, Accounting & Service in one system.',
    images: ['/og-image.png'],
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
        <link rel="canonical" href="https://dmspilot.com" />
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
              "description": "Cloud-native dealer management system replacing legacy automotive software",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "sadigulx05@gmail.com",
                "contactType": "sales"
              }
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
