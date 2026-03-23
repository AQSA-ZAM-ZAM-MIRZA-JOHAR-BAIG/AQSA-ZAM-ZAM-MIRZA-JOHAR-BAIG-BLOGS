import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aqsa-zam-zam-mirza-johar-baig.com"),
  title: {
    template: "AQSA ZAM ZAM MIRZA JOHAR BAIG | %s Portfolio",
    default: "AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer & AI/ML Engineer",
  },
  description: "Official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG, a CS Undergrad at VIIT Pune & IIT Madras, specializing in AI/ML, Full-Stack Development and AWS Cloud.",
  keywords: [
    "AQSA ZAM ZAM MIRZA JOHAR BAIG",
    "AqsA Johar Baig software developer",
    "AqsA Zam Zam Mirza projects",
    "AqsA Mirza AI ML engineer",
    "AqsA Baig VIIT Pune",
    "AqsA Zam Zam developer Pune",
    "Computer Science student IIT Madras",
    "AWS Certified Cloud Practitioner"
  ],
  authors: [{ name: "AQSA ZAM ZAM MIRZA JOHAR BAIG" }],
  creator: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aqsa-zam-zam-mirza-johar-baig.com",
    title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer Portfolio",
    description: "Official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG, a CS Undergrad at VIIT Pune & IIT Madras.",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "AQSA ZAM ZAM MIRZA JOHAR BAIG" }],
    siteName: "AQSA ZAM ZAM MIRZA JOHAR BAIG Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
    alternateName: ["AqsA Zam Zam Mirza Johar Baig", "AqsA Johar Baig"],
    jobTitle: "Software Developer & AI/ML Engineer",
    knowsAbout: ["AI/ML", "Full-Stack Development", "AWS Cloud", "Java", "Python", "Data Science"],
    sameAs: [
      "https://www.linkedin.com/in/aqsamirza08",
      "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG",
      "https://www.kaggle.com/aqsamirza08",
      "https://aqsamirza08.medium.com/"
    ]
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <link rel="canonical" href="https://aqsa-zam-zam-mirza-johar-baig.com" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <header className="sticky top-0 left-0 right-0 z-50 glass border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-xl md:text-2xl font-bold font-outfit text-gradient tracking-tight" aria-label="AQSA ZAM ZAM MIRZA JOHAR BAIG Home">
              AqsA Baig
            </a>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
              <a href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
              <a href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blogs</a>
              <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </nav>
            {/* Mobile menu button could go here */}
          </div>
        </header>
        
        <main className="flex-1 pt-8 pb-12 px-4 max-w-7xl mx-auto w-full flex flex-col">
          {children}
        </main>
        
        <footer className="border-t border-white/10 mt-auto py-8 glass">
          <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm flex flex-col items-center gap-2">
            <p>By AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
            <p>© {new Date().getFullYear()} All rights reserved. Updated: March 2026</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
