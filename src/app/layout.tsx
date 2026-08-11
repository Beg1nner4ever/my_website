import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { StructuredData } from "./structured-data";
import "./globals.css";

const instrumentSerif = localFont({
  src: "../fonts/instrument-serif.woff2",
  variable: "--font-heading",
  display: "swap",
  weight: "400",
});

const instrumentSans = localFont({
  src: "../fonts/instrument-sans.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beg1nner4ever.com"),
  title: {
    default: "Philipp Widenfels — Applied AI & Product Engineer",
    template: "%s | Philipp Widenfels",
  },
  description:
    "Independent product engineer in Paris designing and shipping applied AI systems, internal tools, and customer products.",
  keywords: [
    "AI Engineer",
    "Product Engineer",
    "Freelance",
    "Machine Learning",
    "Full Stack Developer",
    "Paris",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Philipp Widenfels",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-full flex flex-col noise">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
