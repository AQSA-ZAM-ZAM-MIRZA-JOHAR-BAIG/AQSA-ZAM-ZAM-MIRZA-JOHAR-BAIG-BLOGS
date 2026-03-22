import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the technical projects by AQSA ZAM ZAM MIRZA JOHAR BAIG. Featuring an E-commerce backend, Hospital System, ML models, IPO platform, and DevOps/AWS deployments."
};

const PROJECTS = [
  {
    title: "E-Commerce Microservices Backend",
    description: "A highly scalable backend architecture for an e-commerce platform using Node.js, Express, and MongoDB. Implemented microservices for inventory, user auth, and orders.",
    tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    link: "#",
    github: "#"
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive HMS built to manage patient records, appointments, and billing. Features a secure REST API backend built with Python Flask and a React frontend.",
    tech: ["Python", "Flask", "React", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Predictive ML Models (AI/ML)",
    description: "Developed and deployed multiple machine learning models including a house price predictor and customer churn analysis using Scikit-Learn and TensorFlow.",
    tech: ["Python", "TensorFlow", "Scikit-Learn", "Pandas"],
    link: "#",
    github: "#"
  },
  {
    title: "IPO Allotment Status Platform",
    description: "Real-time tracker for checking IPO allotment status across multiple registrars. Uses Next.js for SSR. SEO-optimized and fast loading.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cheerio"],
    link: "#",
    github: "#"
  },
  {
    title: "Automated AWS DevOps Pipeline",
    description: "Designed a CI/CD pipeline using GitHub Actions to automatically lint, test, and deploy Dockerized applications to AWS EC2 instances.",
    tech: ["AWS EC2", "Docker", "GitHub Actions", "Nginx"],
    link: "#",
    github: "#"
  }
];

export default function PortfolioPage() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8">
      <Breadcrumbs />
      
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4 text-gradient">
          AqsA Zam Zam Mirza Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          As a full-stack developer and AI/ML student, I build solutions that solve real problems. Here are some of my featured technical projects.
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
