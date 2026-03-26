import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AQSA ZAM ZAM MIRZA JOHAR BAIG | Contact \u2014 Hire an AI/ML & Full-Stack Developer",
  description:
    "Contact AQSA ZAM ZAM MIRZA JOHAR BAIG for full-stack development, AI/ML consulting, or AWS cloud projects. Available via email, LinkedIn, and GitHub. VIIT Pune, Pune, Maharashtra, India.",
  alternates: { canonical: "https://aqsa-zam-zam-mirza-johar-baig.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
