'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Share2, 
  Clock, 
  Calendar,
  Check
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InsightArticle, insightsData } from '@/data/insights';

interface Props {
  article: InsightArticle;
}

export default function BlogDetailClient({ article }: Props) {
  const [copied, setCopied] = useState(false);

  // Related 3 articles
  const relatedArticles = insightsData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      <Header />

      <main className="flex-1 pt-32 sm:pt-40 pb-24">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-bold truncate max-w-[240px]">
              {article.title}
            </span>
          </div>

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

            {/* Meta Row */}
            <div className="flex items-center justify-between py-4 border-y border-slate-100 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {article.readTime}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {article.date}
                </span>
              </div>

              {/* Share Button */}
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-950 transition-colors cursor-pointer text-xs font-semibold"
                aria-label="Share article link"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Featured Cover Graphic or Image */}
          <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[480px] rounded-xl overflow-hidden mb-12 bg-slate-950 border border-slate-900 shadow-md">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
            {article.isCustomGraphic && article.graphicContent && (
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-end p-6 sm:p-10">
                <span className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-widest mb-1">
                  {article.graphicContent.sub}
                </span>
                <span className="text-xl sm:text-2xl font-black text-white">
                  {article.graphicContent.tag}
                </span>
              </div>
            )}
          </div>

          {/* Executive Summary & Key Findings Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="w-full rounded-xl bg-slate-50/90 border border-slate-200/90 p-6 sm:p-8 lg:p-10 mb-14 shadow-xs">
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200">
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
                  Executive Summary &amp; Key Findings
                </h3>
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono hidden sm:inline">
                  Strategic Briefing
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-lg bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-md bg-slate-950 text-white font-mono text-xs font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-[15px] text-slate-800 font-medium leading-relaxed">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Body Content */}
          <div className="w-full space-y-12 text-slate-800 leading-relaxed text-base sm:text-lg border-b border-slate-200 pb-16 mb-16">
            {article.content.map((section, idx) => (
              <section key={idx} className="space-y-5">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight pt-6 border-t border-slate-100 first:border-0 first:pt-0">
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-5">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-slate-700 font-normal leading-relaxed text-base sm:text-lg lg:text-[19px]">
                      {p}
                    </p>
                  ))}
                  {section.bulletList && section.bulletList.length > 0 && (
                    <div className="my-6 space-y-3 bg-slate-50/90 rounded-xl p-6 sm:p-7 border border-slate-200">
                      {section.bulletList.map((item, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3.5">
                          <span className="w-2 h-2 rounded-full bg-slate-900 mt-2.5 shrink-0" />
                          <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.callout && (
                    <div className="my-7 p-6 sm:p-7 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-md border border-slate-800">
                      <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-blue-400 mb-2">
                        {section.callout.label}
                      </div>
                      <p className="text-base sm:text-lg font-semibold text-slate-100 leading-relaxed">
                        {section.callout.text}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

        {/* Related Articles Row */}
          {relatedArticles.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  Related Intelligence &amp; Research
                </h3>
                <Link
                  href="/blog"
                  className="text-xs sm:text-sm font-bold text-slate-950 hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <span>All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group flex flex-col bg-slate-50/70 rounded-xl border border-slate-200/80 hover:border-slate-400 p-5 transition-all"
                  >
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2">
                      {rel.category}
                    </div>
                    <h4 className="text-sm font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug mb-3 flex-1">
                      {rel.title}
                    </h4>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {rel.readTime} · {rel.date}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>

      <Footer />
    </div>
  );
}
