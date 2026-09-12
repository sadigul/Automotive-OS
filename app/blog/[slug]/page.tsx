import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { insightsData } from '@/data/insights';
import BlogDetailClient from './client-page';

export function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found — DMSPilot Blog',
    };
  }

  return {
    title: `${article.title} — DMSPilot Blog & Engineering Journal`,
    description: article.excerpt,
    keywords: [
      article.category,
      'automotive intelligence',
      'dealership software',
      'DMSPilot blog',
      'retail auto research'
    ],
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailClient article={article} />;
}
