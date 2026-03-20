"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Settings, FileText, BarChart3, Edit3, Trash2 } from "lucide-react";

export default function DashboardPage() {
  const user = { name: "Jane Doe", email: "jane@example.com", role: "Author" };
  const userPosts = [
    { title: "Building Scalable UIs", status: "Published", views: 1205, date: "2026-03-15" },
    { title: "Mastering TypeScript Generics", status: "Draft", views: 0, date: "2026-03-18" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex flex-col gap-4">
        <div className="glass p-6 rounded-2xl mb-4 text-center">
           <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-3xl text-white font-bold">
             {user.name.charAt(0)}
           </div>
           <h2 className="font-bold font-outfit text-lg">{user.name}</h2>
           <p className="text-muted-foreground text-sm">{user.role}</p>
        </div>
        
        <nav className="flex flex-col gap-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium">
            <BarChart3 className="w-5 h-5" /> Overview
          </Link>
          <Link href="/dashboard/write" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors">
            <Edit3 className="w-5 h-5" /> Write Story
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-outfit">Dashboard</h1>
          <Link href="/dashboard/write">
            <Button className="flex items-center gap-2"><Edit3 className="w-4 h-4" /> New Post</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Total Posts", value: "24", icon: <FileText className="w-6 h-6 text-primary" /> },
            { label: "Total Views", value: "14.2K", icon: <BarChart3 className="w-6 h-6 text-accent" /> },
            { label: "Drafts", value: "3", icon: <Edit3 className="w-6 h-6 text-muted-foreground" /> }
          ].map((stat) => (
            <div key={stat.label} className="glass-panel p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-muted-foreground font-medium mb-1">{stat.label}</p>
                <h3 className="text-3xl font-extrabold">{stat.value}</h3>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">{stat.icon}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-bold font-outfit mb-4">Your Stories</h2>
          <div className="glass rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-muted-foreground text-sm">
                  <th className="font-medium p-4">Title</th>
                  <th className="font-medium p-4">Status</th>
                  <th className="font-medium p-4 hidden sm:table-cell">Date</th>
                  <th className="font-medium p-4 hidden sm:table-cell">Views</th>
                  <th className="font-medium p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userPosts.map((post, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium">{post.title}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        post.status === 'Published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="p-4 hidden sm:table-cell text-muted-foreground text-sm">{post.date}</td>
                    <td className="p-4 hidden sm:table-cell text-muted-foreground text-sm">{post.views}</td>
                    <td className="p-4 flex gap-2 justify-end">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground"><Edit3 className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-destructive hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
