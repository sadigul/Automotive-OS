'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Search, 
  BookOpen, 
  Clock, 
  Calendar, 
  CheckCircle2,
  TrendingUp,
  Tag
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { insightsData } from '@/data/insights';

const categories = [
  'All Articles',
  'Digital Retail',
  'DMS & Tech',
  'Fixed Ops & Service',
  'Operations & Market',
  'F&I & Accounting'
] as const;

export default function BlogClientPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredArticles = insightsData.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All Articles' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null;
  const remainingArticles = featuredArticle && selectedCategory === 'All Articles' && !searchQuery 
    ? filteredArticles.slice(1) 
    : filteredArticles;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      <Header />

      <main className="flex-1 pt-32 sm:pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Header */}
          <div className="max-w-3xl mb-12 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-[-0.03em] leading-tight mb-4">
              Automotive Retail Strategy &amp; Engineering
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Independent benchmarks, dealership profitability economics, and architectural teardowns written by automotive retail practitioners and enterprise systems engineers.
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
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
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
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Featured Lead Story (Only on 'All Articles' view with no active search) */}
          {featuredArticle && selectedCategory === 'All Articles' && !searchQuery && (
            <div className="mb-16">
              <Link 
                href={`/blog/${featuredArticle.slug}`}
                className="group block rounded-xl bg-slate-50/70 border border-slate-200/90 p-5 sm:p-7 lg:p-8 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-xs cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Cover Image */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
                    <Image
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Right Column: Editorial Narrative */}
                  <div className="lg:col-span-5 flex flex-col justify-between py-1">
                    <div>
                      {/* Meta Kicker */}
                      <div className="flex items-center gap-2.5 text-xs mb-4">
                        <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-900 font-bold text-[11px] uppercase tracking-wider shadow-xs">
                          {featuredArticle.category}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-500 font-medium">{featuredArticle.readTime}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-slate-500 font-medium">{featuredArticle.date}</span>
                      </div>

                      {/* Main Headline */}
                      <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-slate-950 tracking-[-0.03em] leading-[1.2] mb-4 group-hover:text-blue-600 transition-colors">
                        {featuredArticle.title}
                      </h2>

                      {/* Narrative Excerpt */}
                      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>

                      {/* Strategic Key Finding Callout */}
                      {featuredArticle.keyTakeaways && featuredArticle.keyTakeaways.length > 0 && (
                        <div className="mb-6 p-4 sm:p-5 rounded-lg bg-white border-l-4 border-slate-950 border-y border-r border-slate-200/80 shadow-xs">
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                            Key Strategic Finding
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                            {featuredArticle.keyTakeaways[0]}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Byline and Action */}
                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">
                        Automotive Retail Strategy Desk
                      </span>
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>

                  </div>

                </div>
              </Link>
            </div>
          )}

          {/* Articles Grid */}
          {remainingArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {remainingArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-slate-200/90 hover:border-slate-400 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-wider shadow-xs">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta */}
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-2.5">
                        <span>{article.readTime}</span>
                        <span>·</span>
                        <span>{article.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3 mb-5">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-xl border border-slate-200 mb-20">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {searchQuery || selectedCategory !== 'All Articles'
                  ? 'No articles found'
                  : 'Articles Coming Soon'}
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                {searchQuery || selectedCategory !== 'All Articles'
                  ? 'No articles matched your filter or search query. Try choosing another category or clearing your search.'
                  : 'Our editorial team is preparing comprehensive automotive retail intelligence and operational reports. Check back shortly.'}
              </p>
              {(searchQuery || selectedCategory !== 'All Articles') && (
                <button
                  type="button"
                  onClick={() => { setSelectedCategory('All Articles'); setSearchQuery(''); }}
                  className="mt-4 px-5 py-2 rounded-full bg-slate-950 text-white text-xs font-bold cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          )}

          {/* Bottom Platform Consultation Banner */}
          <div className="relative rounded-xl bg-slate-950 border border-slate-900 p-8 sm:p-14 overflow-hidden shadow-2xl text-center text-white">
            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Connect with Our Automotive Retail Strategy Team
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Discuss custom cloud architecture, DMS migration timelines, and operational ROI tailored to your rooftop network.
              </p>

              <div className="pt-2 flex items-center justify-center">
                <Link href="/contact-us">
                  <button 
                    type="button"
                    className="relative group overflow-hidden h-12 sm:h-13 px-9 rounded-full bg-white text-slate-950 text-sm sm:text-base font-bold border-2 border-white flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Let&apos;s Talk
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
