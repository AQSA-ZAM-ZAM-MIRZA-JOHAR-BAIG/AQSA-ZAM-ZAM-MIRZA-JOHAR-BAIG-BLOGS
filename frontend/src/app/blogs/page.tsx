import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/Button";
import { Search, SlidersHorizontal } from "lucide-react";

const MOCK_POSTS = [
  ...Array.from({ length: 6 }).map((_, i) => ({
    title: `Amazing Architecture Pattern #${i + 1}`,
    slug: `amazing-architecture-pattern-${i + 1}`,
    excerpt: "Dive into the specifics of this new architecture pattern that is taking the industry by storm.",
    author: { name: "System Admin" },
    createdAt: new Date().toISOString(),
    views: Math.floor(Math.random() * 5000) + 100,
    categories: ["Architecture", "Engineering"]
  }))
];

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4">Explore Blogs</h1>
          <p className="text-muted-foreground text-lg">
            Discover articles, tutorials, and insights from industry experts.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
          <Button variant="outline" size="sm" className="px-3" aria-label="Filters">
            <SlidersHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-2">
        {["All", "Technology", "Web Dev", "Design", "Architecture", "Engineering", "React", "Tutorial"].map((tag) => (
          <button 
            key={tag} 
            className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors hover:border-primary/30"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_POSTS.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Button variant="glass" size="lg">Load More Articles</Button>
      </div>
    </div>
  );
}
