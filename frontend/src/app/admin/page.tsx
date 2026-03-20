"use client";

import { BarChart3, Users, FileText, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Users", value: "1,204", icon: <Users className="w-6 h-6 text-primary" /> },
    { label: "Active Authors", value: "342", icon: <CheckCircle className="w-6 h-6 text-green-500" /> },
    { label: "Total Posts", value: "8,432", icon: <FileText className="w-6 h-6 text-accent" /> },
    { label: "Total Views", value: "1.2M", icon: <BarChart3 className="w-6 h-6 text-purple-500" /> }
  ];

  const recentUsers = [
    { name: "John Smith", email: "john@example.com", role: "Reader", status: "Active" },
    { name: "Emily Chen", email: "emily@example.com", role: "Author", status: "Active" },
    { name: "Michael Doe", email: "michael@example.com", role: "Reader", status: "Suspended" },
  ];

  const pendingPosts = [
    { title: "React 19 Deep Dive", author: "Emily Chen", date: "2026-03-20" },
    { title: "Why CSS Grid is still king", author: "Sarah Jones", date: "2026-03-19" },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold font-outfit mb-2">Admin Control Center</h1>
        <p className="text-muted-foreground">Manage your platform's users, content, and system health.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-panel p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-muted-foreground font-medium mb-1">{stat.label}</p>
              <h3 className="text-3xl font-extrabold">{stat.value}</h3>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Management */}
        <div className="glass padding-6 p-6 rounded-2xl flex flex-col gap-4 border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold font-outfit">Recent Users</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="flex flex-col gap-4">
            {recentUsers.map((user, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{user.name}</p>
                    <p className="text-muted-foreground text-xs">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{user.role}</span>
                  {user.status === "Active" ? 
                    <CheckCircle className="w-5 h-5 text-green-500" /> : 
                    <XCircle className="w-5 h-5 text-destructive" />
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Moderation */}
        <div className="glass padding-6 p-6 rounded-2xl flex flex-col gap-4 border border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="text-xl font-bold font-outfit">Posts Pending Review</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="flex flex-col gap-4">
            {pendingPosts.map((post, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 line-clamp-1">
                <div>
                  <p className="font-semibold text-sm truncate">{post.title}</p>
                  <p className="text-muted-foreground text-xs">By {post.author} on {post.date}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs h-8 text-green-500 hover:bg-green-500/10 border-green-500/20">Approve</Button>
                  <Button variant="outline" size="sm" className="text-xs h-8 text-destructive hover:bg-destructive/10 border-destructive/20">Reject</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
