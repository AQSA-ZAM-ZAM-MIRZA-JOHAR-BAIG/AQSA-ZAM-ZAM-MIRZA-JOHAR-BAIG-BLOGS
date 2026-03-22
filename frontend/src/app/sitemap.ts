import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aqsa-zam-zam-mirza-johar-baig.com';

  const routes = ['', '/about', '/portfolio', '/blogs', '/urdu-shayari', '/contact'];
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as "weekly" | "monthly",
    priority: route === '' ? 1.0 : (route === '/about' || route === '/portfolio' ? 0.9 : 0.8),
  }));
}
