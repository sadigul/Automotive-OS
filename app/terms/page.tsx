'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: May 6, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the DMSPilot platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Use of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              DMSPilot provides dealership management software and related services. You agree to use the platform only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content, features, and functionality of the DMSPilot platform are owned by DMSPilot and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Service Availability</h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to maintain 99.9% uptime but do not guarantee uninterrupted access to the platform. We reserve the right to modify, suspend, or discontinue any part of the service with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              DMSPilot shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your access to the platform at any time for violations of these terms. Upon termination, your right to use the service will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:sadigulx05@gmail.com" className="text-purple-600 hover:underline">sadigulx05@gmail.com</a> or call{' '}
              <a href="tel:+923351345062" className="text-purple-600 hover:underline">+92 335 134 5062</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
