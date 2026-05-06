'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      text: "AOS replaced 4 different tools we were using. The real-time syncing between our service bay and accounting has saved us 20 hours a week.",
      author: "Sarah J.",
      title: "Service Director",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      text: "The beautifully crafted interface makes our sales team actually want to use the CRM. It's lightning fast and incredibly intuitive from day one.",
      author: "Michael T.",
      title: "General Manager",
      avatar: "https://picsum.photos/seed/michael/100/100"
    },
    {
      text: "Finally, an automotive platform that feels like it belongs in this decade. Secure, fast, and incredibly well designed for modern workflows.",
      author: "David R.",
      title: "Dealership Owner",
      avatar: "https://picsum.photos/seed/david/100/100"
    },
    {
      text: "We migrated from Reynolds in just two weeks. The data extraction was flawless, and the onboarding was so much easier than expected.",
      author: "Jessica M.",
      title: "Operations Manager",
      avatar: "https://picsum.photos/seed/jessica/100/100"
    },
    {
      text: "The desking tool is unmatched. We can present lease and finance options simultaneously and get instant lender approvals.",
      author: "Robert B.",
      title: "F&I Director",
      avatar: "https://picsum.photos/seed/robert/100/100"
    }
  ];

  // Duplicate items for seamless loop
  const marqueeItems = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 z-10 relative">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-purple-700" />
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 tracking-tight mb-6">
            Transforming operations daily
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Join the hundreds of modern dealerships taking control of their data and accelerating deals.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {marqueeItems.map((review, i) => (
            <div 
              key={i}
              className="w-[400px] shrink-0 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-3xl flex flex-col justify-between mx-4 whitespace-normal transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:scale-[1.02] cursor-default"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-8 line-clamp-4">&quot;{review.text}&quot;</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <Image src={review.avatar} alt={review.author} width={48} height={48} className="w-12 h-12 rounded-full border border-gray-100 object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-semibold text-gray-900">{review.author}</div>
                  <div className="text-sm font-medium text-purple-600">{review.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
