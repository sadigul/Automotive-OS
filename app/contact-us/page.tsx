import { Suspense } from 'react';
import ContactUsClientPage from './client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — DMSPilot Enterprise Automotive OS',
  description: 'Get in touch with our automotive software engineering team. Request a live dealership platform demonstration, migration assessment, or customized deployment consultation.',
  keywords: [
    'contact DMSPilot',
    'dealership software demo',
    'automotive ERP consultation',
    'dealer management system contact',
    'automotive AI demo'
  ],
};

export default function ContactUsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ContactUsClientPage />
    </Suspense>
  );
}
