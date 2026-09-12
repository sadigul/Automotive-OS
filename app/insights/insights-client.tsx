'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, BookOpen } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { insightsData } from '@/data/insights';

const categories = [
  'All Insights',
  'Digital Retail',
  'DMS & Tech',
  'Fixed Ops & Service',
  'Operations & Market',
  'F&I & Accounting'
] as const;

export default function InsightsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Insights');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = insightsData.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All Insights' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Hero */}
          <div className="max-w-3xl mb-12 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
              Insights and Market Intelligence
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Actionable research, profitability studies, and operational blueprints for modern automotive dealership leaders and operators.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-200">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-950 text-white shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Articles Grid (All 10 Blogs) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {filteredArticles.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="bg-[#f4f5f7] rounded-[28px] overflow-hidden p-3 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group cursor-pointer block"
              >
                {/* Media Thumbnail */}
                <div className="relative h-52 sm:h-56 w-full rounded-2xl overflow-hidden bg-slate-900">
                  {post.isCustomGraphic ? (
                    <div className="absolute inset-0 bg-slate-950 p-6 flex flex-col justify-between overflow-hidden">
                      <div 
                        className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 100% 100%, #38bdf8 0, transparent 60%), radial-gradient(circle at 0% 0%, #818cf8 0, transparent 60%)'
                        }}
                      />
                      <div className="relative z-10">
                        <div className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                          {post.graphicContent?.tag}
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-1">
                          {post.graphicContent?.sub}
                        </div>
                      </div>

                      <div className="relative z-10 flex justify-end">
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent to-teal-400/80 rounded-full" />
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
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      {post.category}
                    </span>
                    <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 group-hover:text-slate-950 transition-colors leading-snug tracking-tight mb-2.5">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Bottom Meta Row (Read Time & Date ONLY - No Author) */}
                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11.5px] font-medium text-slate-500">
                    <div className="flex items-center gap-2">
                      <span>{post.readTime}</span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>
                    <span className="text-slate-950 font-bold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      Read Article →
                    </span>
                  </div>
                </div>

              </Link>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-sm">No insights found matching your search query.</p>
            </div>
          )}

        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
