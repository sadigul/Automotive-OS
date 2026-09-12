'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Share2, Clock, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { InsightArticle, insightsData } from '@/data/insights';

interface Props {
  article: InsightArticle;
}

export default function InsightDetailClient({ article }: Props) {
  // Related 3 articles
  const relatedArticles = insightsData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Article Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-bold uppercase tracking-wider mb-4">
              {article.category}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-[-0.03em] leading-[1.15] mb-6">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-6">
              {article.excerpt}
            </p>

            {/* Meta Row (Read Time & Date ONLY - No Author) */}
            <div className="flex items-center justify-between py-4 border-y border-slate-100 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {article.readTime}
                </span>
              </div>

              <Link
                href="/insights"
                className="inline-flex items-center gap-1 font-bold text-slate-900 hover:text-slate-600 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Insights</span>
              </Link>
            </div>
          </div>

          {/* Featured Media / Visual */}
          <div className="relative h-[300px] sm:h-[420px] w-full rounded-3xl overflow-hidden mb-12 bg-slate-950 shadow-md">
            {article.isCustomGraphic ? (
              <div className="absolute inset-0 bg-slate-950 p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 100% 100%, #38bdf8 0, transparent 60%), radial-gradient(circle at 0% 0%, #818cf8 0, transparent 60%)'
                  }}
                />
                <div className="relative z-10">
                  <div className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                    {article.graphicContent?.tag}
                  </div>
                  <div className="text-sm sm:text-base text-slate-400 font-medium mt-2">
                    {article.graphicContent?.sub}
                  </div>
                </div>

                <div className="relative z-10 flex justify-end">
                  <div className="w-24 h-1.5 bg-gradient-to-r from-transparent to-teal-400 rounded-full" />
                </div>
              </div>
            ) : (
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
            )}
          </div>

          {/* Key Executive Takeaways Card */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-6 sm:p-8 mb-12">
              <h3 className="text-sm uppercase font-bold tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Executive Summary &amp; Key Findings</span>
              </h3>
              <ul className="space-y-3">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Article Content */}
          <div className="prose prose-slate max-w-none mb-16 space-y-8">
            {article.content.map((section, sIdx) => (
              <div key={sIdx} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-8 mb-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom Back Button & Share */}
          <div className="pt-8 border-t border-slate-200 flex items-center justify-between mb-20">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Insights</span>
            </Link>

            <Link
              href="/contact-us?module=custom"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              <span>Consult Our Architects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Related Insights Grid */}
          <div className="pt-12 border-t border-slate-100">
            <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-8">
              Related Automotive Intelligence
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="bg-[#f4f5f7] rounded-2xl p-3 flex flex-col justify-between hover:shadow-md transition-all group block"
                >
                  <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-900 mb-3">
                    <Image
                      src={rel.featuredImage}
                      alt={rel.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-slate-950 leading-snug line-clamp-2 mb-3">
                      {rel.title}
                    </h4>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 font-medium">
                    {rel.readTime} · {rel.date}
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </article>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
