import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ModernBlog - Next-Gen Publishing",
  description: "A fast, scalable, and beautiful blogging platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* Navigation Bar Placeholder */}
        <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <h1 className="text-2xl font-bold font-outfit text-gradient">ModernBlog</h1>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blogs</a>
              <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            </nav>
            <div className="flex gap-4">
              <button className="text-sm font-medium px-4 py-2 rounded-md hover:bg-white/5 transition-colors">Log in</button>
              <button className="text-sm font-medium px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">Sign up</button>
            </div>
          </div>
        </header>
        
        <main className="flex-1 pt-24 pb-12 px-4 max-w-7xl mx-auto w-full">
          {children}
        </main>
        
        {/* Footer Placeholder */}
        <footer className="border-t border-white/10 mt-auto py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} ModernBlog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
