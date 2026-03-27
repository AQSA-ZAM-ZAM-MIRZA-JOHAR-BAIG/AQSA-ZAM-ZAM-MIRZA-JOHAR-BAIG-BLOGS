"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Send, Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API endpoint
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <Breadcrumbs />
      
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold font-outfit mb-4 text-gradient">
          Get In Touch
        </h1>
        <p className="text-xl text-muted-foreground">
          Looking to collaborate on an AI/ML project, need a full-stack developer, or have a technical query? Drop a message!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8 glass-panel p-8 rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold font-outfit">Contact Information</h2>
          <p className="text-muted-foreground">
            Feel free to reach out directly through any of these platforms. I typically respond within 24-48 hours.
          </p>
          
          <div className="space-y-6 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:aqsamirz6306@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                  aqsamirz6306@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                <p className="text-lg font-medium">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+917219718451" className="text-lg font-medium hover:text-primary transition-colors">
                  +91 7219718451
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</p>
                <a href="https://www.linkedin.com/in/aqsamirza08" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                  aqsamirza08
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">GitHub</p>
                <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                  @AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M15.75 12c0 2.071-1.679 3.75-3.75 3.75s-3.75-1.679-3.75-3.75 1.679-3.75 3.75-3.75 3.75 1.679 3.75 3.75zm7.234-8.109c-.234-.516-.703-.938-1.219-1.219-1.031-.563-3.14-.844-4.875-.844h-9.782c-1.734 0-3.844.281-4.875.844-.516.281-.984.703-1.219 1.219-.563 1.031-.844 3.14-.844 4.875v9.782c0 1.734.281 3.844.844 4.875.234.516.703.938 1.219 1.219 1.031.563 3.14.844 4.875.844h9.782c1.734 0 3.844-.281 4.875-.844.516-.281.984-.703 1.219-1.219.563-1.031.844-3.14.844-4.875v-9.782c0-1.734-.281-3.844-.844-4.875zm-15.031 16.031c-1.125 0-2.063-.938-2.063-2.063s.938-2.063 2.063-2.063 2.063.938 2.063 2.063-.938 2.063-2.063 2.063zm1.125-7.922c0 2.672-2.156 4.875-4.875 4.875s-4.875-2.203-4.875-4.875 2.203-4.875 4.875-4.875 4.875 2.203 4.875 4.875zm11.766 7.922c-1.125 0-2.063-.938-2.063-2.063s.938-2.063 2.063-2.063 2.063.938 2.063 2.063-.938 2.063-2.063 2.063zm2.25-7.922c0 2.672-2.156 4.875-4.875 4.875s-4.875-2.203-4.875-4.875 2.156-4.875 4.875-4.875 4.875 2.203 4.875 4.875z"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">StackOverflow</p>
                <a href="https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                  aqsamirza08
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">YouTube</p>
                <a href="https://www.youtube.com/@aqsamirza08" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-primary transition-colors">
                  @aqsamirza08
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-white/5">
          <h2 className="text-2xl font-bold font-outfit mb-6">Send a Message</h2>
          
          {submitted ? (
            <div className="bg-primary/20 border border-primary/50 rounded-xl p-8 text-center h-64 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-primary hover:underline font-medium text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <section className="mt-16 glass-panel p-8 rounded-2xl border border-white/5">
        <h2 className="text-2xl font-bold font-outfit mb-4">Let&apos;s Build Something Together</h2>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
          <p>
            <strong>AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> is open to collaboration on ambitious software projects. Whether you need a full-stack web application built from scratch, an existing system improved, a machine learning model integrated into your product, or your infrastructure migrated to AWS — bringing production experience and academic rigor to every engagement.
          </p>
          <p>
            As a Computer Science undergraduate simultaneously enrolled at <strong>VIIT Pune</strong> (B.Tech AI &amp; ML, CGPA 8.77) and <strong>IIT Madras</strong> (BSc Data Science), the approach to every project is grounded in both theory and real-world deployment. Every architecture decision is made with scalability, security, and maintainability in mind — not just getting it to work in development.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Full-Stack Development</h3>
              <p className="text-sm">Next.js 16, React 19, Node.js, Flask, Vue.js. From API design to database schema to responsive UI — complete end-to-end development with production deployment included.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">AI / ML Integration</h3>
              <p className="text-sm">Machine learning model development, training, evaluation, and deployment. Python (scikit-learn, Pandas, NumPy), OpenAI API integration, Hugging Face model hosting.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">AWS Cloud Architecture</h3>
              <p className="text-sm">Infrastructure as Code with CloudFormation, EC2 + RDS + S3 + CloudFront architectures, IAM security configuration, GitHub Actions CI/CD pipelines, and cost optimization.</p>
            </div>
          </div>
          <p className="mt-4">
            Response time is typically within <strong>24–48 hours</strong>. For urgent project inquiries, calling or messaging on LinkedIn is the fastest path. All consultations begin with a free scoping call to understand your requirements before any commitment.
          </p>
        </div>
      </section>
    </div>
  );
}
