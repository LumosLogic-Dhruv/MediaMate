"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import Partners from "@/components/Partners";
import PerformanceModel from "@/components/PerformanceModel";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";
import BackgroundGradient from "@/components/BackgroundGradient";

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