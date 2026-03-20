import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real application, fetch the post from the database using the slug here.
  // Example: const post = await getPostBySlug(params.slug);
  
  // Using a placeholder title derived from the slug for SEO demonstration
  const formattedTitle = params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return {
    title: formattedTitle,
    description: `Read ${formattedTitle} on ModernBlog. Explore insights, tutorials, and deep technical dives.`,
    openGraph: {
      title: `${formattedTitle} | ModernBlog`,
      description: `Read ${formattedTitle} on ModernBlog.`,
      type: "article",
      authors: ["ModernBlog Author"],
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description: `Read ${formattedTitle} on ModernBlog.`,
    }
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
