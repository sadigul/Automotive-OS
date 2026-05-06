'use client';

import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-20 sm:py-24 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">AOS</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
              The all-in-one platform built for modern dealerships. Simple, fast, and ready to grow with you.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">Platform</h4>
            <div className="flex flex-col gap-4">
              <a href="#solutions" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Solutions</a>
              <a href="#migration" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Migration</a>
              <a href="#reviews" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Reviews</a>
              <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">FAQ</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">Legal</h4>
            <div className="flex flex-col gap-4">
              <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Terms of Service</a>
              <a href="/compliance" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">Compliance</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:sadigulx05@gmail.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">sadigulx05@gmail.com</a>
              <a href="tel:+923351345062" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">+92 335 134 5062</a>

              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-sm text-gray-500 font-medium">All Systems Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © 2026 AOS. All rights reserved.
          </p>

          <div className="flex gap-5">
            {[
              { icon: <Linkedin className="w-4 h-4" />, href: '#' },
              { icon: <Twitter className="w-4 h-4" />, href: '#' },
              { icon: <Facebook className="w-4 h-4" />, href: '#' },
              { icon: <Instagram className="w-4 h-4" />, href: '#' },
            ].map((social, i) => (
              <a key={i} href={social.href} className="text-gray-300 hover:text-gray-900 transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
