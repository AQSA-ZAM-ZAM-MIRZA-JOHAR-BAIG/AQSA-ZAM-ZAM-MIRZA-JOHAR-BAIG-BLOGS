import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Download, MapPin, GraduationCap, Code2, Database, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AQSA ZAM ZAM MIRZA JOHAR BAIG, a Computer Science student at VIIT Pune, Python/Java developer, and AI/ML enthusiast from Nagpur."
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Breadcrumbs />
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4 text-gradient">
          About AQSA ZAM ZAM MIRZA JOHAR BAIG
        </h1>
        <p className="text-xl text-muted-foreground flex items-center gap-2">
          <MapPin className="w-5 h-5" /> Based in Nagpur, Maharashtra
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-outfit mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <GraduationCap className="text-primary" /> Education & Background
            </h2>
            <div className="prose prose-invert max-w-none">
              <p>
                Hello! I am <strong>AQSA ZAM ZAM MIRZA JOHAR BAIG</strong>, a dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning (AI/ML) at <strong>VIIT Pune</strong>.
              </p>
              <p>
                With a strong foundation in both software engineering and data science, I build scalable applications, deploy machine learning models, and create elegant backend architectures. My journey started in Nagpur, and I have since expanded my skills across the entire software development life cycle.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-outfit mb-4 border-b border-white/10 pb-2">
              Technical Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold flex items-center gap-2 mb-3 text-primary"><Code2 className="w-4 h-4" /> Core Languages</h3>
                <ul className="space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Python (Advanced)</li>
                  <li>Java (OOP & DSA)</li>
                  <li>JavaScript / TypeScript</li>
                  <li>SQL & NoSQL</li>
                </ul>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold flex items-center gap-2 mb-3 text-primary"><Database className="w-4 h-4" /> Frameworks & Libs</h3>
                <ul className="space-y-1 text-muted-foreground list-disc pl-5">
                  <li>Next.js & React</li>
                  <li>Flask & Django</li>
                  <li>Node.js & Express</li>
                  <li>TensorFlow, Scikit-Learn</li>
                </ul>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/5 sm:col-span-2">
                <h3 className="font-semibold flex items-center gap-2 mb-3 text-primary"><Cloud className="w-4 h-4" /> Cloud & DevOps</h3>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground list-disc pl-5">
                  <li>AWS (EC2, S3, RDS)</li>
                  <li>Docker & CI/CD Pipelines</li>
                  <li>Git & GitHub Actions</li>
                  <li>Vercel / Netlify Deployments</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 sticky top-24">
            <h3 className="text-xl font-bold font-outfit mb-4">Resume</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Download my latest resume to view full details of my education, projects, and work experience.
            </p>
            <a 
              href="/resume.pdf" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              download
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
            
            <hr className="border-white/10 my-6" />
            
            <h3 className="text-lg font-bold font-outfit mb-4">Quick Facts</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium text-right">Nagpur, India</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">University</span>
                <span className="font-medium text-right">VIIT Pune</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Specialization</span>
                <span className="font-medium text-right">AI / ML</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
