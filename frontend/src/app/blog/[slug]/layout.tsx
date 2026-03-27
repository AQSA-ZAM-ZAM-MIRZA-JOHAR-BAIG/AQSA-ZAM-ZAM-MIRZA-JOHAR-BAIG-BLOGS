import { Metadata } from "next";
import React from "react";

const BASE_URL = "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const formattedTitle = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: formattedTitle,
    author: {
      "@type": "Person",
      name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${params.slug}`,
    },
  };

  return {
    title: `${formattedTitle} | AQSA ZAM ZAM MIRZA JOHAR BAIG`,
    description: `${formattedTitle} — a technical article by AQSA ZAM ZAM MIRZA JOHAR BAIG, AI/ML engineer and full-stack developer at VIIT Pune & IIT Madras. Deep-dive insights, code snippets, and real-world case studies.`,
    authors: [{ name: "AQSA ZAM ZAM MIRZA JOHAR BAIG", url: BASE_URL }],
    alternates: { canonical: `${BASE_URL}/blog/${params.slug}` },
    openGraph: {
      title: `${formattedTitle} | AQSA ZAM ZAM MIRZA JOHAR BAIG`,
      description: `${formattedTitle} — written by AQSA ZAM ZAM MIRZA JOHAR BAIG, AI/ML & Full-Stack Developer.`,
      type: "article",
      url: `${BASE_URL}/blog/${params.slug}`,
      authors: ["AQSA ZAM ZAM MIRZA JOHAR BAIG"],
      siteName: "AQSA ZAM ZAM MIRZA JOHAR BAIG Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} | AQSA ZAM ZAM MIRZA JOHAR BAIG`,
      description: `${formattedTitle} — by AQSA ZAM ZAM MIRZA JOHAR BAIG.`,
      creator: "@aqsamirza08",
    },
    other: {
      "application/ld+json": JSON.stringify(articleSchema),
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
