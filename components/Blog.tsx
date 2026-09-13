'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { insightsData } from '@/data/insights';

export function Blog() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll positions to enable/disable navigation buttons
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 480; // Approx single wider card width + gap
    const scrollDistance = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
    scrollContainerRef.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });
  };

  if (insightsData.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-20 sm:py-28 bg-white relative overflow-hidden w-full">
      
      {/* Header Container - Undisturbed standard left alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-3">
              Insights and Market Intelligence
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Actionable research, profitability studies, and operational benchmarks for modern automotive leaders.
            </p>
          </div>

          {/* Right Controls: View All Insights link + Carousel Navigation Buttons */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-slate-950 hover:text-slate-600 group transition-colors mr-2"
            >
              <span>View All Insights</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Left/Right Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-200 ${
                  canScrollLeft
                    ? 'bg-white hover:bg-slate-950 hover:text-white hover:border-slate-950 text-slate-900  cursor-pointer'
                    : 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-200 ${
                  canScrollRight
                    ? 'bg-white hover:bg-slate-950 hover:text-white hover:border-slate-950 text-slate-900  cursor-pointer'
                    : 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed opacity-50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track - Bleeds smoothly across to the right edge */}
      <div
        ref={scrollContainerRef}
        className="w-full pl-4 sm:pl-6 lg:pl-[calc(max(2rem,(100vw-80rem)/2+2rem))] pr-4 sm:pr-8 lg:pr-12 overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-6 sm:gap-7 pb-6 pt-1 w-max">
          {insightsData.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="w-[320px] sm:w-[420px] lg:w-[480px] shrink-0 bg-[#f4f5f7] rounded-xl overflow-hidden p-3.5 sm:p-4 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer block"
            >
              {/* Media Thumbnail */}
              <div className="relative h-52 sm:h-64 w-full rounded-lg overflow-hidden bg-slate-900">
                {post.isCustomGraphic ? (
                  <div className="absolute inset-0 bg-slate-950 p-6 flex flex-col justify-between overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-20 pointer-none"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 100% 100%, #38bdf8 0, transparent 60%), radial-gradient(circle at 0% 0%, #818cf8 0, transparent 60%)'
                      }}
                    />
                    <div className="relative z-10">
                      <div className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                        {post.graphicContent?.tag}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1.5">
                        {post.graphicContent?.sub}
                      </div>
                    </div>

                    <div className="relative z-10 flex justify-end">
                      <div className="w-16 h-1.5 bg-gradient-to-r from-transparent to-orange-500/80 rounded-full" />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                )}
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug tracking-tight mb-2.5">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom Meta Row */}
                <div className="pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-xs font-medium text-slate-500">
                  <div className="flex items-center gap-2">
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <span className="text-slate-950 font-bold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
