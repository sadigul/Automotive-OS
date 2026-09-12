'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Share2, 
  Clock, 
  Calendar,
  Sparkles,
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
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
          <div className="relative w-full h-[280px] sm:h-[420px] rounded-3xl overflow-hidden mb-12 bg-slate-950 border border-slate-900 shadow-md">
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

          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 mb-12">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Executive Summary &amp; Key Findings</span>
              </h3>
              <ul className="space-y-3">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Body Content */}
          <div className="space-y-10 text-slate-800 leading-relaxed text-base sm:text-lg border-b border-slate-200 pb-16 mb-16">
            {article.content.map((section, idx) => (
              <section key={idx} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight pt-4">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 font-normal leading-relaxed text-sm sm:text-base md:text-lg">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Related Articles Row */}
          {relatedArticles.length > 0 && (
            <div className="mb-20">
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
                    className="group flex flex-col bg-slate-50/70 rounded-2xl border border-slate-200/80 hover:border-slate-400 p-5 transition-all"
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

          {/* Back to Blog Button */}
          <div className="mb-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all blog articles</span>
            </Link>
          </div>

          {/* Consultation CTA Banner */}
          <div className="relative rounded-3xl bg-slate-950 border border-slate-900 p-8 sm:p-12 text-center text-white shadow-xl">
            <div className="max-w-xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>Next-Gen Operating System</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Modernize Your Dealership Platform
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Experience real-time vehicle pooling, penny-perfect desking, and autonomous accounting with DMSPilot.
              </p>
              <div className="pt-2">
                <Link href="/contact-us">
                  <button 
                    type="button"
                    className="relative group overflow-hidden h-11 px-8 rounded-full bg-white text-slate-950 text-xs sm:text-sm font-bold border-2 border-white flex items-center justify-center gap-2 mx-auto transition-all duration-300 shadow-md cursor-pointer"
                  >
                    <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Request a Live Demonstration
                    </span>
                    <ArrowRight className="relative z-10 w-4 h-4 text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
