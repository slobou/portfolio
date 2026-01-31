"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CardNav from "@/components/blocks/CardNav/CardNav";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import SplashScreen from "@/components/ui/SplashScreen";
import { getAllGalleryMediaUrls } from "@/utils/galleryMedia";
import { NAV_MENU_ITEMS } from "@/data/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

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
    <div className="h-screen font-(family-name:--font-gesit-sans)">
      {isLoading && (
        <SplashScreen
          onLoadComplete={() => setIsLoading(false)}
          mediaUrls={mediaUrls}
          minDisplayTime={2900}
          waitForFullPageLoad
        />
      )}
      <motion.main
        className={`flex flex-col gap-0 ${
          isLoading ? "invisible pointer-events-none" : "visible"
        }`}
        aria-hidden={isLoading}
        initial="hidden"
        animate={isLoading ? "hidden" : "visible"}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="fixed inset-x-0 top-0 z-[99]"
        >
          <CardNav items={NAV_MENU_ITEMS} ease="power3.out" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>
        <motion.div variants={itemVariants}>
          <About />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Projects />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Footer />
        </motion.div>
      </motion.main>
    </div>
  );
}
