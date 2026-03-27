import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app';

// Static dates — DO NOT use new Date() here (causes unnecessary cache busting).
const SITE_UPDATED = new Date('2026-03-28');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/urdu-shayari`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  // Blog posts — keep dates in sync with layout.tsx SLUG_META
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog/mastering-dsa-interviews`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/deploying-ml-models-aws`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/software-engineering-interview-roadmap`,
      lastModified: new Date('2026-02-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/aqsa-zam-zam-mirza-johar-baig-mahalaxmi-tailors-nextjs-fullstack`,
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/aqsa-zam-zam-mirza-johar-baig-falcovita-ai-health-platform-aws`,
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/aqsa-zam-zam-mirza-johar-baig-viit-pune-aws-developer-journey`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/top-10-nextjs-16-react-19-tips-aqsa-zam-zam-mirza-johar-baig`,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog/urdu-shayari-aqsa-zam-zam-mirza-johar-baig-tech-meets-poetry`,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogPosts];
}
