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
  title: {
    default: "MediaMate - Performance Marketing & Search Solutions",
    template: "%s | MediaMate"
  },
  description: "We scale ecommerce brands with precision performance marketing & search. Drive growth with data-driven strategies that deliver measurable results.",
  keywords: ["performance marketing", "ecommerce marketing", "paid search", "SEO", "digital marketing", "growth marketing", "ecommerce growth"],
  authors: [{ name: "MediaMate" }],
  creator: "MediaMate",
  publisher: "MediaMate",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MediaMate - Performance Marketing & Search Solutions",
    description: "We scale ecommerce brands with precision performance marketing & search. Drive growth with data-driven strategies.",
    url: "https://mediamate.com",
    siteName: "MediaMate",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/1.webp",
        width: 1200,
        height: 630,
        alt: "MediaMate - Performance Marketing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaMate - Performance Marketing & Search Solutions",
    description: "We scale ecommerce brands with precision performance marketing & search.",
    images: ["/1.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/favicon.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/favicon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://mediamate.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mediamate.com" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="192x192" href="/favicon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="512x512" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" href="/sitemap.xml" type="application/xml" />
        <meta name="theme-color" content="#DF5E99" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="+AQQAVFD1Uxs/xEMuwGs8w" async />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
