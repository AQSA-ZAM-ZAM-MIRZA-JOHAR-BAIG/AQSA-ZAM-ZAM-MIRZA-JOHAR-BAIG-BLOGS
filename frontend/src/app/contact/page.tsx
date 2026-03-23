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
    </div>
  );
}
