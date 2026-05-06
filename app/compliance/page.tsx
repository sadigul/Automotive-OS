'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CompliancePage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Compliance</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: May 6, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Data Protection</h2>
            <p className="text-gray-600 leading-relaxed">
              DMSPilot is committed to protecting your data in accordance with applicable data protection regulations. We implement technical and organizational measures to ensure the security and confidentiality of all dealership and customer data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Industry Standards</h2>
            <p className="text-gray-600 leading-relaxed">
              Our platform is built to comply with automotive industry standards and regulations. We adhere to best practices for financial data handling, customer information management, and dealership operations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Security Certifications</h2>
            <p className="text-gray-600 leading-relaxed">
              DMSPilot maintains rigorous security practices including encrypted data storage, secure API communications, regular penetration testing, and continuous monitoring of all systems.", "oldString": "              AOS maintains rigorous security practices including encrypted data storage, secure API communications, regular penetration testing, and continuous monitoring of all systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Audit & Reporting</h2>
            <p className="text-gray-600 leading-relaxed">
              We provide comprehensive audit trails for all financial transactions and data modifications. Our reporting tools ensure full transparency and traceability for regulatory compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Integrations</h2>
            <p className="text-gray-600 leading-relaxed">
              All third-party integrations are vetted for security and compliance. We only partner with vendors who meet our strict data protection requirements and industry standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For compliance inquiries, contact us at{' '}
              <a href="mailto:sadigulx05@gmail.com" className="text-purple-600 hover:underline">sadigulx05@gmail.com</a> or call{' '}
              <a href="tel:+923351345062" className="text-purple-600 hover:underline">+92 335 134 5062</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
