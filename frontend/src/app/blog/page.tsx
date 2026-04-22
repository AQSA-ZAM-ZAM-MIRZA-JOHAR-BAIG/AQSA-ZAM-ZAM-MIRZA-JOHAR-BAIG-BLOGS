import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Search, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on AI/ML, AWS, Next.js, and DSA by AQSA ZAM ZAM MIRZA JOHAR BAIG, CS student at VIIT Pune & IIT Madras.",
  alternates: { canonical: "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/blog" },
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
  },
  {
    title: "Building Mahalaxmi Tailors — MERN Full-Stack E-Commerce with AWS",
    slug: "aqsa-zam-zam-mirza-johar-baig-mahalaxmi-tailors-nextjs-fullstack",
    excerpt: "How I built a production MERN e-commerce platform for Mahalaxmi Tailors in 3 days.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-03-20").toISOString(),
    views: 1100,
    categories: ["MERN", "AWS", "E-Commerce"]
  },
  {
    title: "FalcoVita — Building an AI Healthcare Platform with Flask, Vue.js & AWS",
    slug: "aqsa-zam-zam-mirza-johar-baig-falcovita-ai-health-platform-aws",
    excerpt: "A technical deep-dive into FalcoVita's architecture: Flask REST APIs, Vue.js frontend, Redis task queues with Celery, and AWS deployment.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-03-22").toISOString(),
    views: 1800,
    categories: ["Flask", "Vue.js", "AWS", "AI"]
  },
  {
    title: "My AWS Developer Journey — From VIIT Pune Student to Cloud Practitioner",
    slug: "aqsa-zam-zam-mirza-johar-baig-viit-pune-aws-developer-journey",
    excerpt: "The journey of earning the AWS Certified Cloud Practitioner credential while studying at VIIT Pune and IIT Madras.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-03-24").toISOString(),
    views: 1550,
    categories: ["AWS", "Career", "VIIT Pune"]
  },
  {
    title: "Top 10 Next.js 16 & React 19 Tips for Production Apps",
    slug: "top-10-nextjs-16-react-19-tips-aqsa-zam-zam-mirza-johar-baig",
    excerpt: "Production-tested tips for Next.js 16 App Router and React 19 Server Components.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-03-25").toISOString(),
    views: 2200,
    categories: ["Next.js", "React", "Frontend"]
  },
  {
    title: "When Tech Meets Poetry — Urdu Shayari",
    slug: "urdu-shayari-aqsa-zam-zam-mirza-johar-baig-tech-meets-poetry",
    excerpt: "Exploring the intersection of technology and Urdu poetry — original Urdu Shayari by a software developer.",
    author: { name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" },
    createdAt: new Date("2026-03-26").toISOString(),
    views: 1350,
    categories: ["Urdu Shayari", "Life"]
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

      <section className="mt-16 glass-panel p-8 rounded-2xl border border-white/5">
        <h2 className="text-2xl font-bold font-outfit mb-6">What You Will Find on This Blog</h2>
        <div className="grid md:grid-cols-2 gap-8 prose prose-invert max-w-none text-muted-foreground">
          <div>
            <h3 className="font-semibold text-foreground mb-2">AI & Machine Learning</h3>
            <p>
              From building your first scikit-learn pipeline to deploying ensemble models on Hugging Face, <strong>AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> covers the complete machine learning workflow. Topics include feature engineering, model evaluation, handling imbalanced datasets, and making ML accessible to real applications — not just notebooks.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">AWS Cloud & DevOps</h3>
            <p>
              Practical AWS guides written by someone who has used these services in production. Deploying Node.js backends to EC2, writing CloudFormation templates for reproducible infrastructure, setting up CloudFront for CDN, and automating deployments with GitHub Actions CI/CD pipelines — all explained clearly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Next.js & Full-Stack Development</h3>
            <p>
              Next.js 16 App Router, React 19 Server Components, Server Actions, parallel routes, and performance optimization techniques. Written from the perspective of a developer who uses Next.js for production deployments, not just tutorials.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">DSA & Interview Preparation</h3>
            <p>
              Data structures and algorithms breakdowns focused on what actually appears in technical interviews at top tech companies. Array patterns, graph traversal, dynamic programming, and system design — approached with clear explanations and working code in Python and Java.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
