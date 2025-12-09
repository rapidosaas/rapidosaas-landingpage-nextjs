import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Instant Store – Free Self-Hosted E-commerce Solution",
  description:
    "Clone, customize, and deploy your own online store. Instant Store is a free, open-source Next.js e-commerce solution. Self-host it or get help with deployment and custom development. Example: artisanat-dz.com.",
  keywords: [
    "instant store",
    "self-hosted ecommerce",
    "free online store",
    "open source ecommerce",
    "next.js store",
    "clone and deploy",
  ],
  authors: [{ name: "Instant Store" }],
  openGraph: {
    title: "Instant Store – Free Self-Hosted E-commerce Solution",
    description:
      "Clone and customize your own online store. Free, self-hosted Next.js solution. Optional deployment & development services. Example: artisanat-dz.com.",
    url: "https://demo.instant-store.com",
    siteName: "Instant Store",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instant Store – Free Self-Hosted E-commerce Solution",
    description:
      "Free, self-hosted Next.js store. Clone & customize. Optional deployment help. Example: artisanat-dz.com.",
  },
  alternates: {
    canonical: "https://demo.instant-store.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
