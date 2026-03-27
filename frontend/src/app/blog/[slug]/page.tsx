"use client";

import { Button } from "@/components/ui/Button";
import { ArrowLeft, MessageCircle, Share2, Heart, Bookmark } from "lucide-react";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app we'd fetch based on params.slug. Using mock for now.
  const post = {
    title: "The Future of Web Development in 2026",
    content: `
      <p>Web development is constantly evolving, and 2026 brings an incredible landscape of new tools and paradigms. With AI deeply integrated into our workflows, developers are now focusing more on architecture and user experience than ever before.</p>
      <h2>The Rise of Edge Computing</h2>
      <p>Edge nodes are the new standard. By bringing computation closer to the user, we've practically eliminated latency for dynamic applications. Tools like Next.js App Router have fully embraced this, allowing seamless edge deployment of server components.</p>
      <blockquote>"The network is the computer, and the edge is the new CPU." - Tech Visionary</blockquote>
      <h2>Glassmorphism is Back</h2>
      <p>Aesthetics cyclically return. Glassmorphism, heavily reliant on background blur and translucent layers, has reached its peak thanks to highly-optimized CSS engines in modern browsers that handle backdrop-filters without a performance hit.</p>
      <pre><code>.glass {backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.1);}</code></pre>
      <p>We are just getting started. The next few years will blur the line between native apps and web experiences entirely.</p>
    `,
    author: { name: "Alex Rivera", role: "Senior Engineer", bio: "Building the web of tomorrow." },
    createdAt: new Date().toISOString(),
    readTime: "5 min read",
    tags: ["Technology", "Web Dev", "2026 Trends"]
  };

  return (
    <article className="max-w-4xl mx-auto flex flex-col gap-8 pb-16">
      <div className="mb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to blogs
        </Link>
      </div>

      <header className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold font-outfit tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground text-sm border-b border-white/10 w-full pb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              {post.author.name.charAt(0)}
            </div>
            <span className="font-medium text-foreground">{post.author.name}</span>
          </div>
          <span>•</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl bg-muted overflow-hidden glass border-none">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
             <span className="text-muted-foreground font-medium text-xl">Cover Image</span>
        </div>
      </div>

      {/* Main Content & Sidebar Layout */}
      <div className="flex flex-col md:flex-row gap-12 mt-8">
        
        {/* Sticky Sidebar for desktop */}
        <aside className="hidden md:flex flex-col gap-6 sticky top-24 h-max w-16 items-center">
          <button className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <Share2 className="w-5 h-5" />
          </button>
        </aside>
        
        {/* Mobile Action Bar */}
        <div className="flex md:hidden items-center justify-center gap-6 py-4 border-y border-white/10 w-full">
           <button className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Heart className="w-5 h-5"/> Like</button>
           <button className="flex items-center gap-2 text-muted-foreground hover:text-primary"><MessageCircle className="w-5 h-5"/> React</button>
           <button className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Share2 className="w-5 h-5"/> Share</button>
        </div>

        {/* Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none flex-1 font-inter 
            prose-headings:font-outfit prose-headings:font-bold prose-headings:text-foreground 
            prose-a:text-primary hover:prose-a:text-primary/80
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:font-medium prose-blockquote:not-italic
            prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:backdrop-blur-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Author Bio Section */}
      <section className="mt-16 pt-12 border-t border-white/10">
        <div className="glass-panel p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-3xl text-white font-bold flex-shrink-0">
            {post.author.name.charAt(0)}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-outfit mb-1">Written by {post.author.name}</h3>
            <p className="text-primary text-sm font-medium mb-3">{post.author.role}</p>
            <p className="text-muted-foreground">{post.author.bio}</p>
            <Button variant="outline" size="sm" className="mt-4">Follow Author</Button>
          </div>
        </div>
      </section>

      {/* Comments Section (Placeholder) */}
      <section className="mt-16" id="comments">
        <h2 className="text-3xl font-bold font-outfit mb-8">Discussion (0)</h2>
        <div className="glass border border-white/10 p-6 rounded-xl text-center">
          <p className="text-muted-foreground mb-4">You need to log in to join the discussion.</p>
          <Button>Log In to Comment</Button>
        </div>
      </section>
    </article>
  );
}
