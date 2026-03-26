import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, BookOpen, MessageSquare, Cpu, Cloud, PenTool } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI/ML Engineer & Full-Stack Developer | Home",
  description:
    "AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML engineer, Full-Stack developer (Next.js 16, React 19, Flask), AWS Certified Cloud Practitioner, VIIT Pune & IIT Madras student. Explore ML projects, technical blogs & Urdu Shayari.",
  alternates: { canonical: "https://aqsa-zam-zam-mirza-johar-baig.com/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is AQSA ZAM ZAM MIRZA JOHAR BAIG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AQSA ZAM ZAM MIRZA JOHAR BAIG is a Computer Science undergraduate at VIIT Pune (B.Tech AI & ML, CGPA 8.77) and IIT Madras (BSc Data Science), specializing in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. She is an AWS Certified Cloud Practitioner and has built production systems like Mahalaxmi Tailors e-commerce and the FalcoVita healthcare platform.",
      },
    },
    {
      "@type": "Question",
      name: "What projects has AQSA ZAM ZAM MIRZA JOHAR BAIG built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AQSA ZAM ZAM MIRZA JOHAR BAIG has built: (1) Mahalaxmi Tailors — a full-stack MERN e-commerce platform with Razorpay payments, AWS deployment via CloudFormation, and JWT-based RBAC; (2) FalcoVita — a scalable healthcare platform with Vue.js, Flask, Redis, Celery task queues, and OpenAI integration; (3) IPO Success Predictor — an 80%-accurate ML model deployed on Hugging Face using ensemble learning.",
      },
    },
    {
      "@type": "Question",
      name: "Where does AQSA ZAM ZAM MIRZA JOHAR BAIG study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AQSA ZAM ZAM MIRZA JOHAR BAIG studies at two premier institutions simultaneously: Vishwakarma Institute of Information Technology (VIIT Pune), pursuing B.Tech in CSE with AI & ML specialization (2023–2027, CGPA 8.77), and the Indian Institute of Technology Madras (IIT Madras) for a BSc in Data Science (2023–2027, CGPA 7.44).",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does AQSA ZAM ZAM MIRZA JOHAR BAIG use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AQSA ZAM ZAM MIRZA JOHAR BAIG's primary tech stack includes: Languages: Python, Java, JavaScript, C++; Frameworks: Next.js 16, React 19, Node.js, Express.js, Flask, Vue.js; Cloud: AWS (EC2, S3, RDS, Lambda, CloudFront, CloudFormation, IAM); Databases: MongoDB, PostgreSQL, Redis; Tools: Docker, Git, Celery, Postman, Razorpay, OpenAI API.",
      },
    },
    {
      "@type": "Question",
      name: "Is AQSA ZAM ZAM MIRZA JOHAR BAIG available for freelance or consulting work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — AQSA ZAM ZAM MIRZA JOHAR BAIG is available for consulting in Full-Stack development (Next.js, React, Flask), AI/ML model development, and AWS cloud architecture. You can reach her at aqsamirz6306@gmail.com or connect on LinkedIn at linkedin.com/in/aqsamirza08.",
      },
    },
    {
      "@type": "Question",
      name: "What is AQSA ZAM ZAM MIRZA JOHAR BAIG's AWS certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AQSA ZAM ZAM MIRZA JOHAR BAIG holds the AWS Certified Cloud Practitioner credential, demonstrating expertise in AWS core services including EC2, S3, RDS, Lambda, CloudFront, and IAM. She has applied this expertise in production deployments using AWS CloudFormation for automated infrastructure-as-code.",
      },
    },
    {
      "@type": "Question",
      name: "Does AQSA ZAM ZAM MIRZA JOHAR BAIG write Urdu Shayari?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — AQSA ZAM ZAM MIRZA JOHAR BAIG blends technology and art by writing original Urdu Shayari (poetry). Her creative work explores themes of technology, life, and human connection. You can read her Urdu poetry on the dedicated Shayari page of this portfolio.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact AQSA ZAM ZAM MIRZA JOHAR BAIG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact AQSA ZAM ZAM MIRZA JOHAR BAIG via: Email: aqsamirz6306@gmail.com | Phone: +91 7219718451 | LinkedIn: linkedin.com/in/aqsamirza08 | GitHub: github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG | Kaggle: kaggle.com/aqsamirza08 | Medium: aqsamirza08.medium.com",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col gap-16 md:gap-24 w-full">
        {/* Hero Section */}
        <section
          aria-label="AQSA ZAM ZAM MIRZA JOHAR BAIG hero introduction"
          className="relative pt-12 pb-8 md:pt-24 md:pb-16 flex flex-col md:flex-row gap-12 text-center md:text-left items-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />

          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/30 text-primary text-sm font-medium mb-6 animate-pulse">
              <span>CS Undergrad @ VIIT Pune & IIT Madras · AWS Certified · AI/ML Specialist</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight mb-6">
              AQSA ZAM ZAM<br />MIRZA JOHAR BAIG
              <span className="text-gradient block mt-2 text-2xl md:text-4xl font-semibold">
                AI/ML Engineer & Full-Stack Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Computer Science undergraduate at <strong>VIIT Pune</strong> and <strong>IIT Madras</strong>,
              specializing in AI & Machine Learning. I build production-grade full-stack applications,
              deploy cloud architectures on <strong>AWS</strong>, and write original Urdu Shayari.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/portfolio"
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
              >
                <Code className="w-5 h-5" /> View Projects
              </Link>
              <Link
                href="/about"
                className="glass hover:bg-white/5 border border-white/10 font-semibold py-3 px-8 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" /> About Me
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Cloud className="w-4 h-4 text-primary" /> AWS Certified</span>
              <span className="flex items-center gap-1"><Cpu className="w-4 h-4 text-primary" /> CGPA 8.77 @ VIIT Pune</span>
              <span className="flex items-center gap-1"><Code className="w-4 h-4 text-primary" /> 3 Production Projects</span>
            </div>
          </div>

          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative shrink-0 bg-secondary/50">
            <Image
              src="/profile.jpg"
              alt="AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML Engineer and Full-Stack Developer from VIIT Pune"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 384px"
            />
          </div>
        </section>

        {/* What I Do — Topical Authority */}
        <section aria-label="Areas of expertise" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/portfolio" className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all group">
            <Cpu className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold font-outfit mb-2">AI & Machine Learning</h2>
            <p className="text-muted-foreground text-sm">
              ML model development, ensemble learning, data pipelines, and Hugging Face deployments. AQSA ZAM ZAM MIRZA JOHAR BAIG builds models hitting 80%+ accuracy.
            </p>
          </Link>
          <Link href="/portfolio" className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all group">
            <Code className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold font-outfit mb-2">Full-Stack Development</h2>
            <p className="text-muted-foreground text-sm">
              Production-grade MERN and Flask/Vue.js applications with JWT auth, Razorpay payments, Redis queues, and CI/CD pipelines.
            </p>
          </Link>
          <Link href="/portfolio" className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all group">
            <Cloud className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-bold font-outfit mb-2">AWS Cloud Architecture</h2>
            <p className="text-muted-foreground text-sm">
              AWS Certified Cloud Practitioner. Architectures using EC2, S3, RDS, Lambda, CloudFront, and CloudFormation for automated, scalable deployments.
            </p>
          </Link>
        </section>

        {/* FAQ — FAQPage declared via JSON-LD only (see faqSchema above) */}
        <section
          aria-label="Frequently asked questions about AQSA ZAM ZAM MIRZA JOHAR BAIG"
          className="glass-panel p-8 rounded-2xl border border-white/5"
        >
          <h2 className="text-3xl font-bold font-outfit mb-8 text-center">
            About AQSA ZAM ZAM MIRZA JOHAR BAIG
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Who is AQSA ZAM ZAM MIRZA JOHAR BAIG?",
                a: "An AI/ML engineer and full-stack developer pursuing dual degrees at VIIT Pune (B.Tech CSE AI/ML, CGPA 8.77) and IIT Madras (BSc Data Science). AWS Certified Cloud Practitioner with 3 production-grade projects.",
              },
              {
                q: "What are AQSA ZAM ZAM MIRZA JOHAR BAIG's key projects?",
                a: "Mahalaxmi Tailors (MERN + AWS e-commerce), FalcoVita (Flask + Vue.js healthcare AI platform), and IPO Success Predictor (Ensemble ML on Hugging Face — 80% accuracy).",
              },
              {
                q: "What tech stack does AQSA ZAM ZAM MIRZA JOHAR BAIG specialize in?",
                a: "Next.js 16, React 19, Node.js, Flask, Python, Java. AWS EC2/S3/Lambda/RDS/CloudFront. MongoDB, Redis, Celery. Docker, CI/CD, Razorpay, OpenAI API.",
              },
              {
                q: "Is AQSA ZAM ZAM MIRZA JOHAR BAIG available for hire?",
                a: "Yes — available for full-stack consulting, AI/ML development, and AWS architecture projects. Contact via email at aqsamirz6306@gmail.com or LinkedIn.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="space-y-2">
                <h3 className="font-semibold flex items-start gap-2 text-foreground">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" /> {q}
                </h3>
                <p className="text-muted-foreground text-sm pl-6">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Nav */}
        <section aria-label="Quick navigation" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link href="/blogs" className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/10 group text-center">
            <BookOpen className="w-12 h-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold font-outfit mb-2">Technical Blog</h2>
            <p className="text-muted-foreground">DSA, ML deployment, AWS, Next.js tutorials by AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
          </Link>
          <Link href="/contact" className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/10 group text-center">
            <MessageSquare className="w-12 h-12 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold font-outfit mb-2">Hire / Collaborate</h2>
            <p className="text-muted-foreground">Reach out for full-stack, AI/ML, or AWS cloud projects</p>
          </Link>
        </section>
      </div>
    </>
  );
}
