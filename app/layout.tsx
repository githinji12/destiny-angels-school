import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

// ✅ Single, properly typed metadata export with Open Graph
export const metadata: Metadata = {
  title: "Destiny Angels Learning Centre | Early Skills for Better Future",
  description: "Quality education & life skills for learners in Huruma, Kiamaiko. Enroll today!",
  openGraph: {
    title: "Destiny Angels Learning Centre",
    description: "Nurturing young minds in Huruma with hope, care, and opportunity.",
    url: "https://destinyangels.vercel.app",
    siteName: "Destiny Angels",
    images: [{ url: "/favicon.ico", width: 1200, height: 630, alt: "Destiny Angels Logo" }],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destiny Angels Learning Centre",
    description: "Nurturing young minds in Huruma with hope, care, and opportunity.",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!m-0 !p-0">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              "name": "Destiny Angels Learning Centre",
              "description": "Empowering young minds in Huruma, Kiamaiko through quality education, life skills, and community support.",
              "url": "https://destinyangels.vercel.app",
              "telephone": "+254728654003",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Huruma, Kiamaiko, Mathare Sub-County",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi County",
                "postalCode": "004001",
                "addressCountry": "KE"
              },
              "logo": "https://destinyangels.vercel.app/favicon.ico",
              "sameAs": [
                "https://facebook.com/destinyangels",
                "https://twitter.com/destinyangels"
              ]
            })
          }}
        />
      </head>
      {/* ✅ Force zero margin/padding on body */}
      <body className="!m-0 !p-0 min-h-screen flex flex-col bg-background-light font-body text-gray-700 antialiased">
        <Navbar />
        <FloatingContact />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}