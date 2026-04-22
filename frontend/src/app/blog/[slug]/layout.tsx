import { Metadata } from "next";
import React from "react";

const BASE_URL = "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app";

// Slug → SEO overrides. Extend as you add real pages.
const SLUG_META: Record<string, { title: string; description: string; datePublished?: string; dateModified?: string }> = {
  "mastering-dsa-interviews": {
    title: "Mastering DSA for Interviews",
    description: "Complete guide to mastering Data Structures and Algorithms for software engineering interviews.",
    datePublished: "2026-03-15",
    dateModified: "2026-03-20",
  },
  "deploying-ml-models-aws": {
    title: "Deploying ML Models to AWS",
    description: "Guide to containerizing ML models with Docker and deploying them on AWS EC2 with CI/CD.",
    datePublished: "2026-02-28",
    dateModified: "2026-03-10",
  },
  "software-engineering-interview-roadmap": {
    title: "Software Engineering Interview Roadmap",
    description: "SDE interview preparation roadmap covering DSA, system design, and behavioral interviews.",
    datePublished: "2026-01-10",
    dateModified: "2026-02-01",
  },
  "aqsa-zam-zam-mirza-johar-baig-mahalaxmi-tailors-nextjs-fullstack": {
    title: "Building Mahalaxmi Tailors",
    description: "How I built a production MERN e-commerce platform with Razorpay and AWS.",
    datePublished: "2026-03-20",
    dateModified: "2026-03-24",
  },
  "aqsa-zam-zam-mirza-johar-baig-falcovita-ai-health-platform-aws": {
    title: "FalcoVita AI Healthcare Platform",
    description: "Deep-dive into FalcoVita: Flask APIs, Vue.js, Redis, OpenAI, and AWS deployment.",
    datePublished: "2026-03-22",
    dateModified: "2026-03-25",
  },
  "aqsa-zam-zam-mirza-johar-baig-viit-pune-aws-developer-journey": {
    title: "My AWS Developer Journey",
    description: "My journey of earning the AWS Certified Cloud Practitioner credential as a student.",
    datePublished: "2026-03-24",
    dateModified: "2026-03-26",
  },
  "top-10-nextjs-16-react-19-tips-aqsa-zam-zam-mirza-johar-baig": {
    title: "Top 10 Next.js 16 & React 19 Tips",
    description: "Production-tested tips for Next.js 16 App Router and React 19 Server Components.",
    datePublished: "2026-03-25",
    dateModified: "2026-03-27",
  },
  "urdu-shayari-aqsa-zam-zam-mirza-johar-baig-tech-meets-poetry": {
    title: "When Tech Meets Poetry — Urdu Shayari",
    description: "Exploring the intersection of technology and poetry through original Urdu Shayari.",
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

  const title = meta?.title ?? `${fallbackTitle} | AQSA M. J. BAIG`;
  const description =
    meta?.description ??
    `${fallbackTitle} — a technical article by AQSA ZAM ZAM MIRZA JOHAR BAIG, AI/ML engineer and full-stack developer at VIIT Pune & IIT Madras. Deep-dive insights, code snippets, and real-world case studies.`;

  const canonicalUrl = `${BASE_URL}/blog/${slug}`;

  return {
    title: meta?.title ? `${meta.title} | AQSA M. J. BAIG` : title,
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
