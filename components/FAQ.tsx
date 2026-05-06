'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: "How long does migration from CDK/Reynolds take?",
      a: "Our typical enterprise migration takes 14-21 days. We use automated secure data extraction to ensure zero downtime or data loss during the transition."
    },
    {
      q: "Do I need to train my staff to use AOS?",
      a: "AOS is designed like a consumer app. If your team can use modern software, they can use AOS. We also provide initial onboarding sessions."
    },
    {
      q: "Is my dealership's data secure?",
      a: "Yes. We use military-grade encryption and 100% cloud-native microservices. Your data is isolated, backed up in real-time, and strictly yours."
    },
    {
      q: "Can I just use the Sales CRM without the ERP?",
      a: "Yes. Our modules are completely decoupled but natively integrated. You can start with the Sales CRM and expand into Service and ERP later."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div 
                  key={i} 
                  className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative group"
                  onMouseEnter={() => setOpenIndex(i)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none cursor-default"
                  >
                    <span className="text-gray-900 font-semibold text-lg pr-8">{faq.q}</span>
                    <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gray-100' : ''}`}>
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 sm:p-8 pt-0 text-gray-600 text-lg leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
