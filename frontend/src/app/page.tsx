import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/BlogCard";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Read the latest trends in modern web development and architecture on ModernBlog.",
  openGraph: {
    title: "ModernBlog - Home",
    description: "Read the latest trends in modern web development and architecture on ModernBlog.",
  }
};

// Mock data for the static UI
const MOCK_POSTS = [
  {
    title: "The Future of Web Development in 2026",
    slug: "future-of-web-development-2026",
    excerpt: "Explore the latest trends in web development, from AI-assisted coding to new rendering paradigms.",
    author: { name: "Alex Rivera" },
    createdAt: new Date().toISOString(),
    views: 1245,
    categories: ["Technology", "Web Dev"]
  },
  {
    title: "Mastering Next.js App Router",
    slug: "mastering-nextjs-app-router",
    excerpt: "A comprehensive guide to building scalable applications with the new App Router and Server Components.",
    author: { name: "Sarah Chen" },
    createdAt: new Date().toISOString(),
    views: 890,
    categories: ["React", "Tutorial"]
  },
  {
    title: "Designing for the Modern Web: Glassmorphism",
    slug: "designing-modern-web-glassmorphism",
    excerpt: "How to effectively use depth, blur, and transparency to create stunning user interfaces.",
    author: { name: "Design Team" },
    createdAt: new Date().toISOString(),
    views: 2310,
    categories: ["Design", "UI/UX"]
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 md:pt-24 md:pb-16 flex flex-col items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-8 animate-pulse">
          <Sparkles className="w-4 h-4" />
          <span>Welcome to the next generation of publishing</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold font-outfit tracking-tight mb-6 max-w-4xl">
          Publish your ideas with <span className="text-gradient">unmatched clarity</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
          A modern, fast, and beautiful platform engineered for creators and readers. Share your voice with the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="w-full sm:w-auto font-semibold">
            Start Writing Today
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
            Explore Blogs
          </Button>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold font-outfit mb-2">Trending Posts</h2>
            <p className="text-muted-foreground">Discover stories thinking minds are reading.</p>
          </div>
          <Link href="/blogs" className="hidden sm:flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_POSTS.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
            View all posts <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="glass-panel p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12 mb-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-accent/20 blur-[80px] rounded-full -z-10" />
        <div className="max-w-xl relative py-4 z-10">
          <h2 className="text-3xl font-bold font-outfit mb-4">Stay in the loop</h2>
          <p className="text-muted-foreground">Get the latest articles, tutorials, and insights delivered straight to your inbox every week.</p>
        </div>
        <div className="w-full md:w-auto flex-1 max-w-md relative z-10">
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
              required
            />
            <Button type="submit" size="md" className="h-[auto] py-3">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
