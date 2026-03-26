import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Search, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | Technical Blog & Articles",
  description:
    "Read AI/ML tutorials, Next.js guides, AWS deployment walkthroughs, and DSA interview prep articles authored by AQSA ZAM ZAM MIRZA JOHAR BAIG — CS student at VIIT Pune & IIT Madras.",
  alternates: { canonical: "https://aqsa-zam-zam-mirza-johar-baig.com/blog" },
};

const MOCK_POSTS = [
  {
    title: "Mastering Data Structures and Algorithms (DSA) for Interviews",
    slug: "mastering-dsa-interviews",
    excerpt: "A comprehensive guide on tackling array and graph problems efficiently during technical rounds at top tech companies.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-03-15").toISOString(),
    views: 1250,
    categories: ["DSA", "Interview Prep"]
  },
  {
    title: "Deploying Machine Learning Models to AWS (Complete Guide)",
    slug: "deploying-ml-models-aws",
    excerpt: "Learn how to containerize your ML models with Docker and deploy them on scalable AWS EC2 instances with CI/CD.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-02-28").toISOString(),
    views: 3420,
    categories: ["Machine Learning", "DevOps"]
  },
  {
    title: "Software Engineering Interview Preparation Roadmap",
    slug: "software-engineering-interview-roadmap",
    excerpt: "My personal roadmap to cracking tough SDE interviews. Behavioral tips, system design basics, and coding patterns.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-01-10").toISOString(),
    views: 2100,
    categories: ["Career", "Interview Prep"]
  }
];

export default function BlogsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Breadcrumbs />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8 mb-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4 text-primary">
             <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4 text-gradient">Blog by AQSA ZAM ZAM MIRZA JOHAR BAIG</h1>
          <p className="text-muted-foreground text-lg">
            Technical articles on AI/ML, AWS, Next.js, and full-stack development — plus Urdu Shayari. Written by AQSA ZAM ZAM MIRZA JOHAR BAIG, CS undergrad at VIIT Pune & IIT Madras.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", "DSA", "Machine Learning", "Interview Prep", "DevOps", "Career"].map((tag) => (
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
    </div>
  );
}
