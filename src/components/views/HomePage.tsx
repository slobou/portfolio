"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CardNav from "@/components/blocks/CardNav/CardNav";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import SplashScreen from "@/components/ui/SplashScreen";
import { getAllGalleryMediaUrls } from "@/utils/galleryMedia";
import { NAV_MENU_ITEMS } from "@/data/navigation";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const mediaUrls = getAllGalleryMediaUrls();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      {isLoading && (
        <SplashScreen
          onLoadComplete={() => setIsLoading(false)}
          mediaUrls={mediaUrls}
          minDisplayTime={2900}
          waitForFullPageLoad
        />
      )}
      <main
        className={`flex flex-col gap-0 transition-opacity duration-500 ${
          isLoading
            ? "invisible opacity-0 pointer-events-none"
            : "visible opacity-100"
        }`}
        aria-hidden={isLoading}
      >
        <CardNav className="fixed" items={NAV_MENU_ITEMS} ease="power3.out" />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
