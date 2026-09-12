export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Operations & Market' | 'DMS & Tech' | 'Digital Retail' | 'Fixed Ops & Service' | 'F&I & Accounting';
  readTime: string;
  date: string;
  featuredImage: string;
  isCustomGraphic?: boolean;
  graphicContent?: {
    tag: string;
    sub: string;
  };
  keyTakeaways: string[];
  content: {
    heading?: string;
    paragraphs: string[];
  }[];
}

export const insightsData: InsightArticle[] = [];
