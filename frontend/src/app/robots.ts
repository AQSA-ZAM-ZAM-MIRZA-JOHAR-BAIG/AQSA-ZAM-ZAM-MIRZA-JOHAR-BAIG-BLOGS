import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/login', '/register'],
      },
    ],
    sitemap: 'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/sitemap.xml',
  };
}