import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Structured Data - Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MediaMate",
  url: "https://mediamate.com",
  logo: "https://mediamate.com/logo.svg",
  description: "Performance marketing agency specializing in ecommerce growth through data-driven strategies, paid search, SEO, and conversion optimization.",
  foundingDate: "2020",
  sameAs: [
    "https://www.linkedin.com/company/mediamate",
    "https://twitter.com/mediamate",
    "https://www.instagram.com/mediamate",
    "https://www.facebook.com/mediamate"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    availableLanguage: ["English"]
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US"
  }
};

// Structured Data - Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MediaMate",
  url: "https://mediamate.com",
  description: "Scale your ecommerce brand with precision performance marketing and search solutions.",
  publisher: {
    "@type": "Organization",
    name: "MediaMate"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mediamate.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Structured Data - Professional Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MediaMate Performance Marketing",
  description: "Full-service performance marketing agency offering Paid Search, Paid Social, SEO, DSP, Creative Services, Content Marketing, and CRO.",
  url: "https://mediamate.com",
  priceRange: "$$$$",
  areaServed: "Worldwide",
  serviceType: [
    "Performance Marketing",
    "Paid Search Advertising",
    "Paid Social Media Marketing",
    "Search Engine Optimization",
    "Demand Side Platform Advertising",
    "Creative Services",
    "Content Marketing",
    "Conversion Rate Optimization"
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paid Search",
          description: "Drive qualified traffic and maximize ROI with data-driven search campaigns"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO",
          description: "Build long-term organic visibility and authority with comprehensive SEO strategies"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paid Social",
          description: "Reach your audience with engaging social campaigns across all major platforms"
        }
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#DF5E99",
};

export const metadata: Metadata = {
  title: {
    default: "MediaMate - Performance Marketing & Search Solutions | Scale Your Ecommerce Brand",
    template: "%s | MediaMate - Performance Marketing Agency"
  },
  description: "MediaMate is a leading performance marketing agency that scales ecommerce brands with precision paid search, SEO, paid social, and data-driven strategies. Achieve 40% growth, 58% CTR improvement, and 2X conversions.",
  keywords: [
    "performance marketing agency",
    "ecommerce marketing",
    "paid search advertising",
    "SEO services",
    "digital marketing agency",
    "growth marketing",
    "ecommerce growth",
    "conversion rate optimization",
    "paid social advertising",
    "demand side platform",
    "content marketing",
    "PPC management",
    "Google Ads agency",
    "Facebook Ads agency",
    "ecommerce SEO"
  ],
  authors: [{ name: "MediaMate", url: "https://mediamate.com" }],
  creator: "MediaMate",
  publisher: "MediaMate",
  category: "Marketing",
  classification: "Business/Marketing",
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
  alternates: {
    canonical: "https://mediamate.com",
  },
  openGraph: {
    title: "MediaMate - Performance Marketing & Search Solutions",
    description: "Scale your ecommerce brand with precision performance marketing & search. Drive growth with data-driven strategies that deliver 40% enrollment lift, 58% CTR, and 2X conversions.",
    url: "https://mediamate.com",
    siteName: "MediaMate",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://mediamate.com/og-image.webp",
        secureUrl: "https://mediamate.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "MediaMate - Performance Marketing Solutions for Ecommerce Brands",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mediamate",
    creator: "@mediamate",
    title: "MediaMate - Performance Marketing & Search Solutions",
    description: "Scale your ecommerce brand with precision performance marketing & search. Data-driven strategies that deliver measurable results.",
    images: {
      url: "https://mediamate.com/og-image.webp",
      alt: "MediaMate - Performance Marketing Solutions",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://mediamate.com"),
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "MediaMate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mediamate.com" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full overflow-x-hidden`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#DF5E99] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
