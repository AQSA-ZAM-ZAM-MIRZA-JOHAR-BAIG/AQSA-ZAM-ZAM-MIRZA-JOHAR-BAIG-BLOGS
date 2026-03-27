import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/login',
          '/register',
          '/_next/',
        ],
      },
      // Google — allow full access to key pages, explicitly block private routes
      {
        userAgent: 'Googlebot',
        allow: ['/', '/blog/', '/about', '/portfolio', '/urdu-shayari', '/contact'],
        disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
      },
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}