import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | Portfolio & Projects",
  description:
    "Explore production projects by AQSA ZAM ZAM MIRZA JOHAR BAIG: Mahalaxmi Tailors (MERN + AWS), FalcoVita healthcare AI platform (Flask + Redis), and IPO Success Predictor (80% ML accuracy on Hugging Face).",
  alternates: { canonical: "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/portfolio" },
};

const PROJECTS = [
  {
    title: "Mahalaxmi Tailors",
    description: "Production-ready e-commerce platform for a tailoring business. Features secure RBAC, JWT auth, Razorpay integration, and automated AWS deployment using CloudFormation.",
    tech: ["MERN", "AWS", "Razorpay", "JWT", "DevOps"],
    link: "https://mahalaxmi-tailors.shop",
    github: "#"
  },
  {
    title: "FalcoVita",
    description: "Scalable healthcare platform with asynchronous task pipelines using Celery/Redis. Includes 20+ interactive data visualizations and multi-layer cryptographic security.",
    tech: ["Vue.js", "Flask", "Redis", "Celery", "OpenAI"],
    link: "https://falcovita.vercel.app",
    github: "#"
  },
  {
    title: "IPO-Success-Predictor",
    description: "Machine learning application achieving 80% prediction accuracy using Ensemble Learning. Deployed on Hugging Face with an interactive assessment interface.",
    tech: ["Python", "Ensemble Learning", "Hugging Face", "Pandas"],
    link: "https://huggingface.co/spaces/ayushdayal8/IPO-Success-Predictor",
    github: "#"
  }
];

export default function PortfolioPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Breadcrumbs />
      
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4 text-gradient">
          AQSA ZAM ZAM MIRZA JOHAR BAIG — Portfolio & Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          As an AI/ML engineer and full-stack developer studying at <strong>VIIT Pune</strong> and <strong>IIT Madras</strong>,
          I build production-grade applications. Below are my featured projects — each deployed, functional, and impacting real users.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 flex flex-col h-full">
            <div className="p-3 bg-primary/10 w-fit rounded-lg mb-4 text-primary">
              <FolderGit2 className="w-6 h-6" />
            </div>
            
            <h2 className="text-xl font-bold font-outfit mb-3">{project.title}</h2>
            <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
              <a href={project.github} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Github className="w-4 h-4" /> Code
              </a>
              <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
