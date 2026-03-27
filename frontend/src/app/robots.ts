import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // optional but recommended

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app'

  return {
    rules: [
      // Allow all major search engine bots fully
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/'],
      },
      // Block AI training scrapers
      { userAgent: 'GPTBot',        disallow: ['/'] },
      { userAgent: 'ChatGPT-User',  disallow: ['/'] },
      { userAgent: 'Google-Extended', disallow: ['/'] },
      { userAgent: 'CCBot',         disallow: ['/'] },
      { userAgent: 'anthropic-ai',  disallow: ['/'] },
      { userAgent: 'ClaudeBot',     disallow: ['/'] },
      // Default rule
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
