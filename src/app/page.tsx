"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";

// Lazy load below-the-fold components for better performance
const SuccessStories = dynamic(
  () => import("@/components/SuccessStories"),
  {
    loading: () => (
      <div
        className="w-full py-16"
        aria-hidden="true"
        role="presentation"
      >
        <div className="w-[90vw] mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8" />
          <div className="flex gap-8 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[320px] h-64 bg-gray-100 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    )
  }
);

const Partners = dynamic(
  () => import("@/components/Partners"),
  {
    loading: () => (
      <div
        className="w-full py-16 bg-gradient-to-br from-pink-100/50 to-cyan-100/50"
        aria-hidden="true"
        role="presentation"
      >
        <div className="w-[90vw] mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-8" />
          <div className="flex gap-8 justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-16 bg-gray-100 rounded" />
            ))}
          </div>
        </div>
      </div>
    )
  }
);

const PerformanceModel = dynamic(
  () => import("@/components/PerformanceModel"),
  {
    loading: () => (
      <div
        className="w-full py-20"
        aria-hidden="true"
        role="presentation"
      >
        <div className="w-[90vw] mx-auto animate-pulse">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-100 rounded w-full" />
              <div className="h-4 bg-gray-100 rounded w-5/6" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-40 bg-gray-100 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
);

const Insights = dynamic(
  () => import("@/components/Insights"),
  {
    loading: () => (
      <div
        className="w-full py-16 bg-gradient-to-br from-pink-50 to-cyan-50"
        aria-hidden="true"
        role="presentation"
      >
        <div className="w-[90vw] mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-8" />
          <div className="flex gap-8 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[350px] h-80 bg-gray-100 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    )
  }
);

const Footer = dynamic(
  () => import("@/components/Footer"),
  {
    loading: () => (
      <div
        className="w-full h-64 bg-[#1a1a1a]"
        aria-hidden="true"
        role="presentation"
      />
    )
  }
);

const BackgroundGradient = dynamic(
  () => import("@/components/BackgroundGradient"),
  { ssr: false }
);

export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: 'url(/Home.svg)',
        backgroundSize: 'contain',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Header section with background gradient */}
      <header className="relative">
        <BackgroundGradient />
        <Navbar />
        <Hero />
      </header>

      {/* Main content area */}
      <main id="main-content" className="w-full" role="main">
        <Stats />
        <Services />
        <SuccessStories />
        <Partners />
        <PerformanceModel />
        <Insights />
      </main>

      <Footer />
    </div>
  );
}
