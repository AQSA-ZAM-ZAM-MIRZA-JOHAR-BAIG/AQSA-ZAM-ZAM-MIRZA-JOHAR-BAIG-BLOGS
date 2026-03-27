import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // optional but recommended

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app';
  const now = new Date();


  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`,             lastModified: now,                       changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/about`,        lastModified: now,                       changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/portfolio`,    lastModified: now,                       changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`,        lastModified: now,                       changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${baseUrl}/urdu-shayari`, lastModified: now,                       changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,      lastModified: now,                       changeFrequency: 'yearly',  priority: 0.7 },
  ];

  // Hero blog posts — pre-registered for fast indexing
  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/aqsa-zam-zam-mirza-johar-baig-mahalaxmi-tailors-nextjs-fullstack`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/aqsa-zam-zam-mirza-johar-baig-falcovita-ai-health-platform-aws`,
      lastModified: new Date('2026-03-22'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/aqsa-zam-zam-mirza-johar-baig-viit-pune-aws-developer-journey`,
      lastModified: new Date('2026-03-24'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/top-10-nextjs-16-react-19-tips-aqsa-zam-zam-mirza-johar-baig`,
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/urdu-shayari-aqsa-zam-zam-mirza-johar-baig-tech-meets-poetry`,
      lastModified: new Date('2026-03-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mastering-dsa-interviews`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/deploying-ml-models-aws`,
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/software-engineering-interview-roadmap`,
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...blogPosts];
}
