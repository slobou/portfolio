"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CardNav from "@/blocks/Components/CardNav/CardNav";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import ParallaxFooter from "@/components/sections/ParallaxFooter";
import SplashScreen from "@/components/ui/SplashScreen";
import { getAllGalleryMediaUrls } from "@/utils/galleryMedia";

const menuItems = [
  {
    label: "About",
    bgColor: "#000",
    textColor: "#fff",
    links: [],
  },
  {
    label: "Projects",
    bgColor: "#000",
    textColor: "#fff",
    links: [],
  },
  {
    label: "Contact",
    bgColor: "#000",
    textColor: "#fff",
    links: [],
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const mediaUrls = getAllGalleryMediaUrls();

  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      {isLoading && (
        <SplashScreen
          onLoadComplete={() => setIsLoading(false)}
          mediaUrls={mediaUrls}
          minDisplayTime={1500}
        />
      )}
      <main
        className={`flex flex-col xl:gap-0 transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <CardNav className="fixed" items={menuItems} ease="power3.out" />
        <Hero />
        <About />
        <Projects />
        <Footer />
        <ParallaxFooter />
      </main>
    </div>
  );
}
