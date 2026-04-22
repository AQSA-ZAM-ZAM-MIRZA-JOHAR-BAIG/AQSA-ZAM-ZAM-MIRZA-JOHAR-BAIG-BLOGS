import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Download, MapPin, GraduationCap, Code2, Database, Cloud } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "AQSA ZAM ZAM MIRZA JOHAR BAIG: AI/ML Engineer, Full-Stack Developer & AWS Certified Cloud Practitioner from VIIT Pune.",
  alternates: { canonical: "https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/about" },
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

          <section>
            <h2 className="text-2xl font-bold font-outfit mb-4 border-b border-white/10 pb-2">
              My Story
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-muted-foreground">
              <p>
                My journey into software development started with a deep curiosity about how things work under the hood. When I cleared <strong>JEE Advanced 2023</strong> and joined <strong>Vishwakarma Institute of Information Technology (VIIT), Pune</strong> for B.Tech in Computer Science with AI &amp; ML specialization, I knew I was stepping into the right field. Simultaneously enrolling at <strong>IIT Madras</strong> for a BSc in Data Science reinforced my commitment to mastering both theory and practice.
              </p>
              <p>
                What truly excited me was bridging the gap between academic knowledge and real-world impact. My first major project, <strong>Mahalaxmi Tailors</strong>, taught me more about production engineering in three days than months of coursework could — juggling AWS CloudFormation templates, Razorpay payment webhooks, JWT-based RBAC, and Cloudinary image pipelines simultaneously. That experience shaped how I approach every project: ship fast, learn from users, iterate.
              </p>
              <p>
                <strong>FalcoVita</strong>, my healthcare platform built with Vue.js, Flask, Celery, and Redis, pushed me deeper into distributed systems, asynchronous task queues, and cryptographic security. The challenge of handling sensitive medical data responsibly while keeping the user interface intuitive was a masterclass in full-stack thinking.
              </p>
              <p>
                Earning my <strong>AWS Certified Cloud Practitioner</strong> credential was a natural milestone — I had already been deploying to AWS in production. The certification formalized knowledge I had gained hands-on: EC2 instance management, S3 storage policies, IAM roles and permissions, RDS database setup, and CloudFront CDN configuration.
              </p>
              <p>
                Beyond code, I write <strong>Urdu Shayari</strong> — poetry that explores the intersection of technology, human emotion, and the world we are building. I believe the same precision that makes great software also makes great verse.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-outfit mb-4 border-b border-white/10 pb-2">
              Certifications &amp; Achievements
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-foreground">AWS Certified Cloud Practitioner</strong> — Amazon Web Services. Demonstrates expertise in core AWS services, cloud economics, security, and architecture best practices.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-foreground">JEE Advanced 2023</strong> — Qualified one of India's most competitive engineering entrance examinations, demonstrating strong foundations in mathematics, physics, and analytical reasoning.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-foreground">CGPA 8.77 at VIIT Pune</strong> — Consistent academic performance in Computer Science with AI &amp; ML specialization, covering Data Structures, Algorithms, Machine Learning, and System Design.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-foreground">IIT Madras BSc Data Science</strong> — Parallel degree focusing on statistical modeling, data analysis, Python programming, and machine learning foundations from one of India's premier technical institutions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                <span><strong className="text-foreground">IPO Success Predictor</strong> — Built and deployed an ML model achieving 80% prediction accuracy using ensemble learning techniques, published publicly on Hugging Face Spaces.</span>
              </li>
            </ul>
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
              For the latest resume with full education, projects, and experience details, send a quick request by email.
            </p>
            <a 
              href="mailto:aqsazamzam2005@gmail.com?subject=Resume%20Request" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Request Resume
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
