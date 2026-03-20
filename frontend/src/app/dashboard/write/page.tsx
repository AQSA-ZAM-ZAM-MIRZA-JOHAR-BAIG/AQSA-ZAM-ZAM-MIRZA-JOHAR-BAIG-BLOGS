"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";

export default function WritePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">Save Draft</Button>
          <Button size="sm">Publish</Button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Story Title..."
          className="w-full bg-transparent text-4xl md:text-5xl font-extrabold font-outfit tracking-tight focus:outline-none placeholder:text-muted-foreground"
        />
        
        <div className="flex gap-4">
           <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">
             <ImageIcon className="w-4 h-4"/> Add Cover Image
           </button>
           <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
             <Sparkles className="w-4 h-4"/> AI Assist
           </button>
        </div>
        
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your story..."
          className="w-full min-h-[50vh] bg-transparent text-lg resize-none focus:outline-none font-inter leading-relaxed placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
}
