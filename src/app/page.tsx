"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";

// Lazy load below-the-fold components for better performance
const SuccessStories = dynamic(
  () => import("@/components/SuccessStories"),
  { loading: () => <div className="w-[100vw] py-16" aria-hidden="true" /> }
);

const Partners = dynamic(
  () => import("@/components/Partners"),
  { loading: () => <div className="w-[100vw] py-16" aria-hidden="true" /> }
);

const PerformanceModel = dynamic(
  () => import("@/components/PerformanceModel"),
  { loading: () => <div className="w-[100vw] py-20" aria-hidden="true" /> }
);

const Insights = dynamic(
  () => import("@/components/Insights"),
  { loading: () => <div className="w-[100vw] py-16" aria-hidden="true" /> }
);

const Footer = dynamic(
  () => import("@/components/Footer"),
  { loading: () => <div className="w-full h-64" aria-hidden="true" /> }
);

const BackgroundGradient = dynamic(
  () => import("@/components/BackgroundGradient"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="w-[100vw] min-h-screen bg-white overflow-x-hidden">
      {/* Background Gradient Container for Navbar + Hero */}
      <div className="relative">
        <BackgroundGradient />
        <Navbar />
        <Hero />
      </div>

      <main className="w-full">
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
