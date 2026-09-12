'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Stats } from '@/components/Stats';
import { ClientLogosMarquee } from '@/components/ClientLogosMarquee';

const niches = [
  {
    text: 'Dealerships',
    color: 'text-purple-600',
    cursor: 'bg-purple-600'
  },
  {
    text: 'Service Centers',
    color: 'text-emerald-600',
    cursor: 'bg-emerald-600'
  },
  {
    text: 'Parts Retailers',
    color: 'text-orange-600',
    cursor: 'bg-orange-600'
  },
  {
    text: 'Logistics & Fleets',
    color: 'text-blue-600',
    cursor: 'bg-blue-600'
  },
  {
    text: 'OEM Manufacturers',
    color: 'text-indigo-600',
    cursor: 'bg-indigo-600'
  }
];

export function Hero() {
  const [currentNicheIndex, setCurrentNicheIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = niches[currentNicheIndex].text;
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseTime = 2200;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentNicheIndex((prev) => (prev + 1) % niches.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentNicheIndex]);

  const currentNiche = niches[currentNicheIndex];

  const scrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-24 overflow-hidden bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Main Content Area */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Main Headline with typewriter niche */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-slate-950 tracking-[-0.04em] leading-[1.08] text-balance">
            The modern Operating System for{' '}
            <br className="hidden sm:inline" />
            <span className={`${currentNiche.color} transition-colors duration-200 inline-block font-extrabold`}>
              {currentText}
            </span>
            <span className={`inline-block w-[3px] h-[0.82em] ${currentNiche.cursor} ml-1.5 animate-pulse align-baseline transition-colors duration-200`} />
          </h1>
          
          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl font-normal leading-relaxed text-balance">
            The all in one platform that replaces multiple disconnected tools and runs your entire automotive business in one place.
          </p>
          
          {/* Flat Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full justify-center">
            <Link href="/contact-us" className="w-full sm:w-auto">
              <button 
                type="button"
                className="relative group overflow-hidden w-full sm:w-auto h-12 sm:h-13 px-8 sm:px-9 rounded-full bg-slate-950 text-white text-[15px] sm:text-base font-bold border-2 border-slate-950 flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
              >
                {/* Smooth White Fill Sweep on Hover */}
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-slate-950">
                  Get Quotes
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-950" />
              </button>
            </Link>

            <Button 
              size="lg" 
              variant="outline" 
              className="group w-full sm:w-auto h-12 sm:h-13 border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-300 rounded-full px-8 sm:px-9 text-[15px] sm:text-base font-semibold shadow-none hover:shadow-none transition-colors flex items-center justify-center"
              onClick={scrollToSolutions}
            >
              <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-black">Explore Platform</span>
            </Button>
          </div>
        </div>

        {/* Beautiful Optimized Stats Section */}
        <div className="w-full mt-14 sm:mt-16 lg:mt-20">
          <Stats />
        </div>

        {/* Client Logos Horizontal Moving Marquee */}
        <div className="w-full">
          <ClientLogosMarquee />
        </div>

      </div>
    </section>
  );
}
