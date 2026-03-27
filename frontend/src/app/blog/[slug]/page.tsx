import { ArrowLeft, MessageCircle, Share2, Heart, Bookmark, Clock, Eye } from "lucide-react";
import Link from "next/link";

const BASE_URL = "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app";

// Mock post data keyed by slug — replace with real DB fetch later
const POSTS: Record<string, {
  title: string;
  content: string;
  excerpt: string;
  author: { name: string; role: string; bio: string };
  createdAt: string;
  updatedAt: string;
  readTime: string;
  views: number;
  tags: string[];
  categories: string[];
}> = {
  "mastering-dsa-interviews": {
    title: "Mastering Data Structures and Algorithms (DSA) for Interviews",
    excerpt: "A comprehensive guide on tackling array and graph problems efficiently during technical rounds at top tech companies.",
    content: `
      <p>After grinding hundreds of LeetCode problems and clearing technical interviews, I have distilled the most effective patterns for DSA preparation. This guide focuses on what actually appears in real interviews at top tech companies.</p>
      <h2>The Core Patterns You Must Know</h2>
      <p>Most DSA interview problems reduce to one of ~15 patterns. Master these and you can solve most problems you have never seen before:</p>
      <ul>
        <li><strong>Sliding Window</strong> — for substring/subarray problems with a contiguous constraint</li>
        <li><strong>Two Pointers</strong> — for sorted arrays and linked list problems</li>
        <li><strong>Fast &amp; Slow Pointers</strong> — cycle detection in linked lists and arrays</li>
        <li><strong>Tree BFS/DFS</strong> — level-order traversal, path sum, subtree problems</li>
        <li><strong>Dynamic Programming</strong> — overlapping subproblems (Fibonacci, knapsack, LCS)</li>
      </ul>
      <h2>Array Mastery: The Foundation</h2>
      <p>Arrays appear in 60%+ of interview questions. Focus on prefix sums, frequency maps (HashMap), and in-place operations to avoid O(n) extra space.</p>
      <pre><code>// Prefix sum for range queries in O(1)
int[] prefix = new int[n + 1];
for (int i = 0; i &lt; n; i++) prefix[i+1] = prefix[i] + arr[i];
int rangeSum = prefix[r+1] - prefix[l];</code></pre>
      <h2>Graph Problems: BFS vs DFS</h2>
      <p>Use BFS for shortest path problems, DFS for connectivity, cycle detection, and topological sort. Always track visited nodes to avoid infinite loops.</p>
      <h2>Time &amp; Space Complexity Mindset</h2>
      <p>Every solution you write should come with a clear explanation of its time and space complexity. Interviewers value reasoning over brute-force correct code. A clean O(n log n) solution explained well beats messy O(n) code every time.</p>
      <blockquote>"Master the pattern, not the problem." — Every successful SDE interviewer</blockquote>
      <h2>Recommended Study Order</h2>
      <p>Week 1–2: Arrays, Strings, HashMaps. Week 3–4: Two Pointers, Sliding Window, Recursion. Week 5–6: Trees, Graphs, BFS/DFS. Week 7–8: Dynamic Programming, Backtracking. Week 9–10: System Design basics and mock interviews.</p>
    `,
    author: {
      name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      role: "AI/ML Engineer & Full-Stack Developer",
      bio: "B.Tech CSE (AI/ML) at VIIT Pune (CGPA 8.77) and BSc Data Science at IIT Madras. AWS Certified Cloud Practitioner. Writes about DSA, ML, AWS, and full-stack engineering."
    },
    createdAt: "2026-03-15T00:00:00Z",
    updatedAt: "2026-03-20T00:00:00Z",
    readTime: "8 min read",
    views: 1250,
    tags: ["DSA", "Interview Prep", "LeetCode", "Algorithms"],
    categories: ["DSA", "Interview Prep"],
  },
  "deploying-ml-models-aws": {
    title: "Deploying Machine Learning Models to AWS (Complete Guide)",
    excerpt: "Learn how to containerize your ML models with Docker and deploy them on scalable AWS EC2 instances with CI/CD.",
    content: `
      <p>Deploying a machine learning model to production is very different from running it in a notebook. This guide covers the exact steps I used to deploy my own ML models to AWS — from containerization to auto-scaling.</p>
      <h2>Why Docker for ML Deployments?</h2>
      <p>Python dependency hell is real. Docker containers encapsulate your model, environment, and dependencies so the model that works on your laptop works identically on AWS EC2. No more "it works on my machine" excuses.</p>
      <pre><code>FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]</code></pre>
      <h2>FastAPI — The Right Framework for ML APIs</h2>
      <p>FastAPI gives you async support, automatic OpenAPI docs, and typed request/response validation — perfect for ML inference endpoints that need to handle concurrent requests efficiently.</p>
      <h2>AWS Deployment Architecture</h2>
      <p>The recommended architecture for a production ML API: EC2 for compute, ECR to store Docker images, Application Load Balancer for traffic distribution, and CloudWatch for monitoring. Use CloudFormation to define this as Infrastructure as Code.</p>
      <h2>CI/CD with GitHub Actions</h2>
      <p>Automate your deployments so every merged PR triggers a build, pushes to ECR, and rolls out to EC2. This eliminates manual deployment errors and gives you reliable, repeatable releases.</p>
      <blockquote>"A model that isn't deployed doesn't solve any real problem."</blockquote>
    `,
    author: {
      name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      role: "AI/ML Engineer & Full-Stack Developer",
      bio: "B.Tech CSE (AI/ML) at VIIT Pune (CGPA 8.77) and BSc Data Science at IIT Madras. AWS Certified Cloud Practitioner. Writes about DSA, ML, AWS, and full-stack engineering."
    },
    createdAt: "2026-02-28T00:00:00Z",
    updatedAt: "2026-03-10T00:00:00Z",
    readTime: "12 min read",
    views: 3420,
    tags: ["Machine Learning", "AWS", "DevOps", "Docker"],
    categories: ["Machine Learning", "DevOps"],
  },
  "software-engineering-interview-roadmap": {
    title: "Software Engineering Interview Preparation Roadmap",
    excerpt: "My personal roadmap to cracking tough SDE interviews. Behavioral tips, system design basics, and coding patterns.",
    content: `
      <p>Cracking software engineering interviews at top product companies requires a structured preparation approach. After going through several interview cycles, I have compiled a roadmap that covers everything from coding rounds to system design to behavioral interviews.</p>
      <h2>Phase 1: DSA Foundation (Weeks 1–4)</h2>
      <p>Start with arrays, strings, and hash maps before moving to trees and graphs. Do not skip the basics — interviewers at top companies still ask foundational problems, just with tighter constraints and edge-case discussions.</p>
      <h2>Phase 2: System Design (Weeks 5–6)</h2>
      <p>Study the fundamentals: horizontal vs vertical scaling, SQL vs NoSQL, caching strategies (Redis, Memcached), message queues (Kafka, RabbitMQ), API design (REST vs GraphQL), and CAP theorem. Practice designing systems like URL shorteners, social feeds, and ride-sharing backends.</p>
      <h2>Phase 3: Behavioral Preparation (Ongoing)</h2>
      <p>Use the STAR method (Situation, Task, Action, Result) to structure your responses. Prepare stories around: a time you led a technical decision, handled a production incident, collaborated across teams, and dealt with ambiguous requirements.</p>
      <h2>Phase 4: Mock Interviews</h2>
      <p>Technical knowledge alone is insufficient — communication matters equally. Do mock interviews with peers or platforms like Pramp and Interviewing.io. Practice thinking out loud and breaking problems down before writing any code.</p>
      <blockquote>"The best SDE is not the one who knows the most — it's the one who communicates the best under pressure."</blockquote>
    `,
    author: {
      name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      role: "AI/ML Engineer & Full-Stack Developer",
      bio: "B.Tech CSE (AI/ML) at VIIT Pune (CGPA 8.77) and BSc Data Science at IIT Madras. AWS Certified Cloud Practitioner. Writes about DSA, ML, AWS, and full-stack engineering."
    },
    createdAt: "2026-01-10T00:00:00Z",
    updatedAt: "2026-02-01T00:00:00Z",
    readTime: "10 min read",
    views: 2100,
    tags: ["Career", "Interview Prep", "System Design", "SDE"],
    categories: ["Career", "Interview Prep"],
  },
};

const DEFAULT_POST = POSTS["mastering-dsa-interviews"];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug] ?? DEFAULT_POST;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE_URL}/blog/${slug}`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.categories.join(", "),
    timeRequired: `PT${post.readTime.replace(" min read", "M")}`,
    inLanguage: "en-IN",
    url: `${BASE_URL}/blog/${slug}`,
  };

  return (
    <article className="max-w-4xl mx-auto flex flex-col gap-8 pb-16" itemScope itemType="https://schema.org/BlogPosting">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-primary transition-colors" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden>/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/blog" className="hover:text-primary transition-colors" itemProp="item">
              <span itemProp="name">Blog</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden>/</li>
          <li className="text-foreground truncate max-w-[200px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{post.title}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <header className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h1
          className="text-4xl md:text-6xl font-extrabold font-outfit tracking-tight leading-tight"
          itemProp="headline"
        >
          {post.title}
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl" itemProp="description">{post.excerpt}</p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-muted-foreground text-sm border-b border-white/10 w-full pb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <span className="font-medium text-foreground" itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{post.author.name}</span>
            </span>
          </div>
          <span aria-hidden>•</span>
          <time dateTime={post.createdAt} itemProp="datePublished">
            {new Date(post.createdAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </time>
          <span aria-hidden>•</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
          <span aria-hidden>•</span>
          <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{post.views.toLocaleString()} views</span>
        </div>
      </header>

      {/* Main Content & Sidebar */}
      <div className="flex flex-col md:flex-row gap-12 mt-2">

        {/* Sticky Sidebar */}
        <aside className="hidden md:flex flex-col gap-6 sticky top-24 h-max w-16 items-center" aria-label="Article actions">
          <button aria-label="Like this article" className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <Heart className="w-5 h-5" />
          </button>
          <button aria-label="Comment on this article" className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button aria-label="Bookmark this article" className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <Bookmark className="w-5 h-5" />
          </button>
          <button aria-label="Share this article" className="p-3 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary rounded-full transition-all border border-white/5 hover:-translate-y-0.5">
            <Share2 className="w-5 h-5" />
          </button>
        </aside>

        {/* Mobile Action Bar */}
        <div className="flex md:hidden items-center justify-center gap-6 py-4 border-y border-white/10 w-full">
          <button aria-label="Like" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Heart className="w-5 h-5" /> Like</button>
          <button aria-label="Comment" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><MessageCircle className="w-5 h-5" /> React</button>
          <button aria-label="Share" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Share2 className="w-5 h-5" /> Share</button>
        </div>

        {/* Article Body */}
        <div
          className="prose prose-invert prose-lg max-w-none flex-1 font-inter
            prose-headings:font-outfit prose-headings:font-bold prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-a:text-primary hover:prose-a:text-primary/80
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground
            prose-strong:text-foreground
            prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:font-medium prose-blockquote:not-italic
            prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-pre:backdrop-blur-md prose-pre:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
          itemProp="articleBody"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-8 border-t border-white/10">
        <span className="text-sm text-muted-foreground">Tags:</span>
        {post.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      {/* Author Bio */}
      <section className="mt-4 pt-8 border-t border-white/10" aria-label="Author information">
        <div className="glass-panel p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-3xl text-white font-bold flex-shrink-0" aria-hidden>
            A
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-outfit mb-1">Written by {post.author.name}</h3>
            <p className="text-primary text-sm font-medium mb-3">{post.author.role}</p>
            <p className="text-muted-foreground text-sm">{post.author.bio}</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href="https://linkedin.com/in/aqsamirza08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://aqsamirza08.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts CTA */}
      <section className="mt-4" aria-label="More articles">
        <h2 className="text-2xl font-bold font-outfit mb-6">More Articles by AQSA ZAM ZAM MIRZA JOHAR BAIG</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(POSTS)
            .filter(([s]) => s !== slug)
            .slice(0, 2)
            .map(([s, p]) => (
              <Link
                key={s}
                href={`/blog/${s}`}
                className="glass-panel p-5 rounded-xl border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <h3 className="font-semibold font-outfit mb-2 text-foreground line-clamp-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{p.excerpt}</p>
                <span className="text-primary text-xs mt-3 inline-block">Read more →</span>
              </Link>
            ))}
        </div>
      </section>

      {/* Comments CTA */}
      <section className="mt-4" id="comments" aria-label="Comments section">
        <h2 className="text-2xl font-bold font-outfit mb-6">Discussion</h2>
        <div className="glass border border-white/10 p-6 rounded-xl text-center">
          <p className="text-muted-foreground mb-4">Join the discussion — log in to comment.</p>
          <Link
            href="/login"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Log In to Comment
          </Link>
        </div>
      </section>
    </article>
  );
}
