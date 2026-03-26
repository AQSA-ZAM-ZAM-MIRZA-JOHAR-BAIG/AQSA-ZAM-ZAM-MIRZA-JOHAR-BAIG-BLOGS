import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Download, MapPin, GraduationCap, Code2, Database, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | About — AI/ML Engineer & VIIT Pune Student",
  description:
    "AQSA ZAM ZAM MIRZA JOHAR BAIG is a B.Tech AI/ML student at VIIT Pune (CGPA 8.77) and IIT Madras Data Science scholar. AWS Certified Cloud Practitioner. Expert in Python, Java, Next.js, Flask, and scalable cloud architecture.",
  alternates: { canonical: "https://aqsa-zam-zam-mirza-johar-baig.com/about" },
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
          <MapPin className="w-5 h-5" /> Pune, Maharashtra
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
                As a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, I have strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and System Design.
              </p>
              <p>
                I am experienced in building scalable full-stack applications and cloud-based distributed systems using Java, Python, JavaScript, and AWS, with a proven ability to design RESTful APIs and deploy production-ready applications.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-outfit mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
              <GraduationCap className="text-primary" /> Education
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">Vishwakarma Institute of Information Technology (VIIT), Pune</h3>
                  <p>Bachelor of Technology in CS & E (AI & ML) | CGPA: 8.77</p>
                </div>
                <span className="text-sm">2023 – 2027</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-white">Indian Institute of Technology (IITM), IIT Madras</h3>
                  <p>Bachelor of Science in Data Science | CGPA: 7.44</p>
                </div>
                <span className="text-sm">2023 – 2027</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-outfit mb-4 border-b border-white/10 pb-2">
              Technical Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold flex items-center gap-2 mb-3 text-primary"><Code2 className="w-4 h-4" /> Languages</h3>
                <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground list-disc pl-5">
                  <li>Java</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <h3 className="font-semibold flex items-center gap-2 mb-3 text-primary"><Database className="w-4 h-4" /> Frameworks</h3>
                <ul className="grid grid-cols-2 gap-1 text-xs text-muted-foreground list-disc pl-5">
                  <li>React.js</li>
                  <li>Vue.js</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Flask</li>
                </ul>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/5 sm:col-span-2">
                <h3 className="font-semibold flex items-center gap-2 mb-3 text-primary"><Cloud className="w-4 h-4" /> Cloud & DevOps</h3>
                <ul className="grid grid-cols-3 gap-2 text-xs text-muted-foreground list-disc pl-5">
                  <li>AWS (EC2, S3, IAM)</li>
                  <li>Lambda & RDS</li>
                  <li>CloudFront</li>
                  <li>CI/CD</li>
                  <li>Git & GitHub</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 relative bg-secondary/30 mb-6">
            <Image 
              src="/profile.jpg" 
              alt="AQSA ZAM ZAM MIRZA JOHAR BAIG" 
              fill
              className="object-cover"
            />
          </div>
          
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
                <span className="font-medium text-right">Pune, Maharashtra</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">University</span>
                <span className="font-medium text-right">VIIT Pune</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Specialization</span>
                <span className="font-medium text-right">Computer Science (AI/ML)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
