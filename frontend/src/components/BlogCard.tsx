"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Eye, MessageCircle } from "lucide-react";

interface BlogCardProps {
  post: {
    title: string;
    slug: string;
    excerpt?: string;
    coverImage?: string;
    author: { name: string; profilePicture?: string };
    createdAt: string;
    views: number;
    categories: string[];
  };
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="glass rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative h-48 w-full bg-muted overflow-hidden">
          {post.coverImage ? (
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-muted-foreground font-medium">No Image</span>
            </div>
          )}
          <div className="absolute top-4 left-4 flex gap-2">
            {post.categories.slice(0, 2).map((cat) => (
              <span key={cat} className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md rounded-full text-white">
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold font-outfit mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
            {post.excerpt || "Click to read more about this amazing topic..."}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {post.author.name.charAt(0)}
              </div>
              <span className="font-medium text-foreground">{post.author.name}</span>
            </div>
            
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
