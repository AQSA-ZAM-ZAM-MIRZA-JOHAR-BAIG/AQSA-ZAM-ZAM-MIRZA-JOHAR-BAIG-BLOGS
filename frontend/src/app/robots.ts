import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400; // optional but recommended

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