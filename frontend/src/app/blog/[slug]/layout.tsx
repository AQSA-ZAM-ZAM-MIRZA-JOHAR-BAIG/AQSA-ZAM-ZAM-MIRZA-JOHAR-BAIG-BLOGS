import { Metadata } from "next";
import React from "react";

const BASE_URL = "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app";

// Slug → SEO overrides. Extend as you add real pages.
const SLUG_META: Record<string, { title: string; description: string; datePublished?: string; dateModified?: string }> = {
  "mastering-dsa-interviews": {
    title: "Mastering DSA for Interviews — Patterns, Arrays & Graphs",
    description: "A complete guide to mastering Data Structures and Algorithms for software engineering interviews — covering array patterns, graph traversal, dynamic programming, and time complexity analysis. By AQSA ZAM ZAM MIRZA JOHAR BAIG.",
    datePublished: "2026-03-15",
    dateModified: "2026-03-20",
  },
  "deploying-ml-models-aws": {
    title: "Deploying Machine Learning Models to AWS — Docker & EC2 Guide",
    description: "Step-by-step guide to containerizing ML models with Docker and deploying them on AWS EC2 with CloudFormation and GitHub Actions CI/CD pipelines. By AQSA ZAM ZAM MIRZA JOHAR BAIG.",
    datePublished: "2026-02-28",
    dateModified: "2026-03-10",
  },
  "software-engineering-interview-roadmap": {
    title: "Software Engineering Interview Roadmap — DSA, System Design & Behavioral",
    description: "A structured SDE interview preparation roadmap covering DSA, system design fundamentals, behavioral STAR method, and mock interview strategies. By AQSA ZAM ZAM MIRZA JOHAR BAIG.",
    datePublished: "2026-01-10",
    dateModified: "2026-02-01",
  },
  "aqsa-zam-zam-mirza-johar-baig-mahalaxmi-tailors-nextjs-fullstack": {
    title: "Building Mahalaxmi Tailors — MERN Full-Stack E-Commerce with AWS",
    description: "How AQSA ZAM ZAM MIRZA JOHAR BAIG built a production MERN e-commerce platform for Mahalaxmi Tailors in 3 days with Razorpay payments, AWS CloudFormation, and JWT-based RBAC.",
    datePublished: "2026-03-20",
    dateModified: "2026-03-24",
  },
  "aqsa-zam-zam-mirza-johar-baig-falcovita-ai-health-platform-aws": {
    title: "FalcoVita — Building an AI Healthcare Platform with Flask, Vue.js & AWS",
    description: "A technical deep-dive into FalcoVita's architecture: Flask REST APIs, Vue.js frontend, Redis task queues with Celery, OpenAI integration, and AWS deployment. By AQSA ZAM ZAM MIRZA JOHAR BAIG.",
    datePublished: "2026-03-22",
    dateModified: "2026-03-25",
  },
  "aqsa-zam-zam-mirza-johar-baig-viit-pune-aws-developer-journey": {
    title: "My AWS Developer Journey — From VIIT Pune Student to Cloud Practitioner",
    description: "AQSA ZAM ZAM MIRZA JOHAR BAIG shares the journey of earning the AWS Certified Cloud Practitioner credential while studying at VIIT Pune and IIT Madras.",
    datePublished: "2026-03-24",
    dateModified: "2026-03-26",
  },
  "top-10-nextjs-16-react-19-tips-aqsa-zam-zam-mirza-johar-baig": {
    title: "Top 10 Next.js 16 & React 19 Tips for Production Apps",
    description: "Production-tested tips for Next.js 16 App Router and React 19 Server Components — covering Server Actions, parallel routes, caching strategies, and performance optimization. By AQSA ZAM ZAM MIRZA JOHAR BAIG.",
    datePublished: "2026-03-25",
    dateModified: "2026-03-27",
  },
  "urdu-shayari-aqsa-zam-zam-mirza-johar-baig-tech-meets-poetry": {
    title: "When Tech Meets Poetry — Urdu Shayari by AQSA ZAM ZAM MIRZA JOHAR BAIG",
    description: "Exploring the intersection of technology and Urdu poetry — original Urdu Shayari by AQSA ZAM ZAM MIRZA JOHAR BAIG, a software developer and poet from VIIT Pune.",
    datePublished: "2026-03-26",
    dateModified: "2026-03-27",
  },
};

export async function generateStaticParams() {
  return Object.keys(SLUG_META).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const meta = SLUG_META[slug];
  const fallbackTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const title = meta?.title ?? `${fallbackTitle} | AQSA ZAM ZAM MIRZA JOHAR BAIG`;
  const description =
    meta?.description ??
    `${fallbackTitle} — a technical article by AQSA ZAM ZAM MIRZA JOHAR BAIG, AI/ML engineer and full-stack developer at VIIT Pune & IIT Madras. Deep-dive insights, code snippets, and real-world case studies.`;

  const canonicalUrl = `${BASE_URL}/blog/${slug}`;

  return {
    title: meta?.title ? `${meta.title} | AQSA ZAM ZAM MIRZA JOHAR BAIG` : title,
    description,
    authors: [{ name: "AQSA ZAM ZAM MIRZA JOHAR BAIG", url: BASE_URL }],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title}`,
      description,
      type: "article",
      url: canonicalUrl,
      authors: ["AQSA ZAM ZAM MIRZA JOHAR BAIG"],
      siteName: "AQSA ZAM ZAM MIRZA JOHAR BAIG — Blog",
      publishedTime: meta?.datePublished,
      modifiedTime: meta?.dateModified,
      locale: "en_IN",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${title} — AQSA ZAM ZAM MIRZA JOHAR BAIG`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@aqsamirza08",
      images: ["/og-image.jpg"],
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
