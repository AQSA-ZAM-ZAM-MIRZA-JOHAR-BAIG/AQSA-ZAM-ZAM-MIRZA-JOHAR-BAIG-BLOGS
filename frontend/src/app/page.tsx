import Link from "next/link";
import { ArrowRight, Code, BookOpen, PenTool, ExternalLink, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | Home Portfolio",
  description: "Welcome to the official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG. Discover my ML projects, technical blogs, and Urdu shayari."
};

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 w-full">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 md:pt-24 md:pb-16 flex flex-col items-center flex-col-reverse md:flex-row gap-12 text-center md:text-left">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-6 animate-pulse">
            <span>CS Student • Full-Stack Dev • Poet</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight mb-6" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
            AQSA ZAM ZAM MIRZA JOHAR BAIG <span className="text-gradient block mt-2 text-3xl md:text-5xl">| Portfolio & Shayari</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Computer Science student specializing in AI/ML at VIIT Pune. Developer from Nagpur building innovative web apps and writing soul-stirring Urdu shayari.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/portfolio" className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
              <Code className="w-5 h-5" /> View Projects
            </Link>
            <Link href="/urdu-shayari" className="glass hover:bg-white/5 border border-white/10 font-semibold py-3 px-8 rounded-lg transition-colors text-center flex items-center justify-center gap-2">
              <PenTool className="w-5 h-5" /> Read Shayari
            </Link>
          </div>
        </div>

        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative shrink-0">
          <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
            {/* Placeholder for professional photo */}
            <span className="text-muted-foreground/50 font-outfit font-bold text-2xl px-8 text-center">AQSA ZAM ZAM MIRZA JOHAR BAIG [Image]</span>
          </div>
        </div>
      </section>

      {/* FAQs (LLM-Friendly E-E-A-T) */}
      <section className="glass-panel p-8 rounded-2xl border border-white/5">
        <h2 className="text-3xl font-bold font-outfit mb-8 text-center text-primary">Discover More</h2>
        
        <div className="grid md:grid-cols-2 gap-8" itemScope itemType="https://schema.org/FAQPage">
          
          <div className="space-y-3" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold flex items-start gap-2" itemProp="name">
              <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" /> Who is AQSA ZAM ZAM MIRZA JOHAR BAIG?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-muted-foreground pl-7" itemProp="text">
                AQSA ZAM ZAM MIRZA JOHAR BAIG is a Computer Science student at VIIT Pune specializing in AI/ML, a full-stack developer based in Nagpur, and a passionate Urdu poet.
              </p>
            </div>
          </div>

          <div className="space-y-3" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold flex items-start gap-2" itemProp="name">
              <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" /> What are AqsA Zam Zam Mirza's projects?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-muted-foreground pl-7" itemProp="text">
                AqsA has built several impactful projects including an E-commerce backend, a Hospital Management System, ML models for predictions, an IPO platform, and DevOps/AWS deployments.
              </p>
            </div>
          </div>

        </div>
      </section>
      
      {/* Quick Nav Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link href="/about" className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/10 group text-center">
          <BookOpen className="w-12 h-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold font-outfit mb-2">About Me</h2>
          <p className="text-muted-foreground">Education, Tech Stack & Resume</p>
        </Link>
        <Link href="/blogs" className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/10 group text-center">
          <ExternalLink className="w-12 h-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold font-outfit mb-2">Coding Blogs</h2>
          <p className="text-muted-foreground">DSA, ML Deployment, Tech Guides</p>
        </Link>
        <Link href="/contact" className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/10 group text-center">
          <MessageSquare className="w-12 h-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h2 className="text-2xl font-bold font-outfit mb-2">Get in Touch</h2>
          <p className="text-muted-foreground">Contact me for collabs and opportunities</p>
        </Link>
      </section>
    </div>
  );
}

// Ensure MessageSquare and others are correctly imported in final iteration... wait, let me add MessageSquare import.
