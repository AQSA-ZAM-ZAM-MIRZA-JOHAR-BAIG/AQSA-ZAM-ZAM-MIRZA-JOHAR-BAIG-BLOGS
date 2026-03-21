import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/BlogCard";
import { ArrowRight, Sparkles, Globe, Linkedin, Github, BarChart, PenTool, MessageSquare, Youtube, FileText, Book } from "lucide-react";
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

const ONLINE_PROFILES = [
  { name: "Portfolio Site", description: "aqsa-zam-zam-mirza-johar-baig-portf.vercel.app", link: "https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/", icon: Globe },
  { name: "LinkedIn", description: "Aqsa Zam Zam Mirza Johar Baig", link: "https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/?isSelfProfile=true", icon: Linkedin },
  { name: "GitHub", description: "@AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG", link: "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG", icon: Github },
  { name: "Kaggle", description: "@aqsamirza08", link: "https://www.kaggle.com/aqsamirza08", icon: BarChart },
  { name: "Medium Blog", description: "@aqsamirza08", link: "https://aqsamirza08.medium.com/", icon: PenTool },
  { name: "Stack Overflow", description: "Aqsa Zam Zam Mirza Johar Baig", link: "https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig", icon: MessageSquare },
  { name: "YouTube", description: "@aqsamirza08", link: "https://www.youtube.com/@aqsamirza08", icon: Youtube },
  { name: "YouTube Channel", description: "Aqsa Mirza (Channel)", link: "https://www.youtube.com/channel/UCtn3SjtE26v2pzdLeRPwJbQ", icon: Youtube },
  { name: "Urdu Shayar", description: "aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app", link: "https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/", icon: FileText },
  { name: "Law Dictionary", description: "aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app", link: "https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/", icon: Book },
  { name: "Constitutional Law", description: "aqsa-zam-zam-mirza-johar-baig-const.vercel.app", link: "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/", icon: Book },
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

      {/* Online Profiles Section */}
      <section className="mb-12">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary text-xs font-medium mb-4 uppercase tracking-wider">
            Find Me Online
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-gradient">Online Profiles</h2>
          <p className="text-muted-foreground max-w-2xl">
            Connect with me across the web — from legal publications and academic repositories to code and content platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ONLINE_PROFILES.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl glass-panel border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold font-outfit text-lg mb-1 group-hover:text-primary transition-colors">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground truncate max-w-[200px] sm:max-w-[250px]">{profile.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 absolute top-6 right-6 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
              </a>
            );
          })}
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
