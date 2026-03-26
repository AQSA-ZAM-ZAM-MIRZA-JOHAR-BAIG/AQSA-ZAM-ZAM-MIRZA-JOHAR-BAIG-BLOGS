import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

const BASE_URL = "https://aqsa-zam-zam-mirza-johar-baig.com";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "AQSA ZAM ZAM MIRZA JOHAR BAIG | %s",
    default: "AQSA ZAM ZAM MIRZA JOHAR BAIG | AI/ML Engineer & Full-Stack Developer",
  },
  description:
    "Official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML Engineer, Full-Stack Developer (Next.js, React, Flask), and AWS Certified Cloud Practitioner studying at VIIT Pune & IIT Madras. View projects, blogs, and Urdu Shayari.",
  keywords: [
    "AQSA ZAM ZAM MIRZA JOHAR BAIG",
    "AqsA Johar Baig portfolio",
    "AqsA Zam Zam Mirza VIIT Pune",
    "AqsA Mirza AI ML engineer",
    "AqsA Zam Zam Mirza IIT Madras",
    "AqsA Baig Next.js developer",
    "AqsA Zam Zam full stack developer Pune",
    "AqsA Mirza Johar Baig AWS certified",
    "AqsA Johar Baig FalcoVita",
    "AqsA Zam Zam Mirza Mahalaxmi Tailors",
    "AqsA Baig machine learning engineer India",
    "AqsA Mirza Johar Baig GitHub",
    "AqsA Zam Zam Mirza Medium blog",
    "AqsA Johar Baig Kaggle data science",
    "AqsA Zam Zam Mirza Johar Baig Urdu Shayari",
    "Computer Science AI ML VIIT Pune 2027",
    "AWS Certified Cloud Practitioner student India",
    "Next.js 16 React 19 developer portfolio",
    "Full stack MERN developer Pune Maharashtra",
    "AI ML engineer IIT Madras student",
  ],
  authors: [{ name: "AQSA ZAM ZAM MIRZA JOHAR BAIG", url: BASE_URL }],
  creator: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
  publisher: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
  category: "Technology, Software Development, AI/ML",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | AI/ML Engineer & Full-Stack Developer",
    description:
      "Official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML specialist, Full-Stack developer, and AWS Certified Cloud Practitioner from VIIT Pune & IIT Madras.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML Engineer & Full-Stack Developer Portfolio",
      },
    ],
    siteName: "AQSA ZAM ZAM MIRZA JOHAR BAIG Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | AI/ML Engineer & Full-Stack Developer",
    description:
      "Official portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML, Full-Stack, AWS Cloud, VIIT Pune & IIT Madras.",
    images: ["/og-image.jpg"],
    creator: "@aqsamirza08",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "ADD_YOUR_GSC_VERIFICATION_CODE_HERE",
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
    "@id": `${BASE_URL}/#person`,
    name: "AQSA ZAM ZAM MIRZA JOHAR BAIG",
    alternateName: [
      "AqsA Zam Zam Mirza Johar Baig",
      "AqsA Johar Baig",
      "AqsA Mirza",
      "AqsA Baig",
      "AqsA Zam Zam Mirza",
    ],
    url: BASE_URL,
    image: `${BASE_URL}/profile.jpg`,
    jobTitle: "AI/ML Engineer & Full-Stack Developer",
    description:
      "AQSA ZAM ZAM MIRZA JOHAR BAIG is a Computer Science undergraduate at VIIT Pune and IIT Madras, specializing in AI/ML, building scalable full-stack applications and cloud architectures on AWS.",
    email: "aqsamirz6306@gmail.com",
    telephone: "+917219718451",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Vishwakarma Institute of Information Technology (VIIT), Pune",
        url: "https://www.viit.ac.in",
        description: "B.Tech in CSE (AI & ML) — CGPA 8.77 — 2023 to 2027",
      },
      {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Technology Madras (IIT Madras)",
        url: "https://www.iitm.ac.in",
        description: "BSc in Data Science — CGPA 7.44 — 2023 to 2027",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Next.js 16",
      "React 19",
      "Node.js",
      "Flask",
      "Python",
      "Java",
      "AWS EC2",
      "AWS S3",
      "AWS CloudFormation",
      "AWS Lambda",
      "AWS RDS",
      "AWS CloudFront",
      "MongoDB",
      "Redis",
      "Celery",
      "Docker",
      "CI/CD",
      "Full-Stack Development",
      "REST API Design",
      "System Design",
      "Data Structures and Algorithms",
      "Urdu Shayari",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "AWS Certified Cloud Practitioner",
        credentialCategory: "Professional Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "Amazon Web Services",
        },
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Web Development Consulting",
          description:
            "Next.js, React, Node.js, Flask application development and architecture consulting by AQSA ZAM ZAM MIRZA JOHAR BAIG.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI/ML Model Development",
          description:
            "Machine learning model building, training, and deployment to production by AQSA ZAM ZAM MIRZA JOHAR BAIG.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AWS Cloud Architecture & DevOps",
          description:
            "Cloud architecture design, AWS deployment, and CI/CD pipeline setup by AQSA ZAM ZAM MIRZA JOHAR BAIG.",
        },
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/aqsamirza08",
      "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG",
      "https://www.kaggle.com/aqsamirza08",
      "https://aqsamirza08.medium.com/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "AQSA ZAM ZAM MIRZA JOHAR BAIG Portfolio",
    url: BASE_URL,
    description:
      "Official portfolio and blog of AQSA ZAM ZAM MIRZA JOHAR BAIG — AI/ML engineer, full-stack developer, and AWS Cloud Practitioner.",
    author: { "@id": `${BASE_URL}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blogs?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
      { "@type": "ListItem", position: 3, name: "Portfolio", item: `${BASE_URL}/portfolio` },
      { "@type": "ListItem", position: 4, name: "Blogs", item: `${BASE_URL}/blogs` },
      { "@type": "ListItem", position: 5, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/profile.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical */}
        <link rel="canonical" href={BASE_URL} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <header className="sticky top-0 left-0 right-0 z-50 glass border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold font-outfit text-gradient tracking-tight"
              aria-label="AQSA ZAM ZAM MIRZA JOHAR BAIG Home"
            >
              AqsA Baig
            </Link>
            <nav aria-label="Main navigation" className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blogs</Link>
              <Link href="/urdu-shayari" className="text-sm font-medium hover:text-primary transition-colors">Shayari</Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 pt-8 pb-12 px-4 max-w-7xl mx-auto w-full flex flex-col">
          {children}
        </main>

        <footer className="border-t border-white/10 mt-auto py-8 glass">
          <div className="max-w-7xl mx-auto px-4 text-center text-muted-foreground text-sm flex flex-col items-center gap-3">
            <p className="font-semibold text-foreground">AQSA ZAM ZAM MIRZA JOHAR BAIG</p>
            <p>AI/ML Engineer · Full-Stack Developer · AWS Cloud Practitioner · VIIT Pune & IIT Madras</p>
            <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
              <Link href="/urdu-shayari" className="hover:text-primary transition-colors">Urdu Shayari</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            <p>© {new Date().getFullYear()} AQSA ZAM ZAM MIRZA JOHAR BAIG. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
