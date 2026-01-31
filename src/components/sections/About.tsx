"use client";

import DomeGallery from "@/components/blocks/DomeGallery/DomeGallery";
import CircularGallery from "@/components/blocks/CircularGallery/CircularGallery";
import { useMemo, useState, useEffect } from "react";
import {
  getCloudinaryImageUrl,
  getCloudinaryVideoUrl,
  getCloudinaryVideoPoster,
  GALLERY_IMAGES,
} from "@/utils/cloudinary";
import { GALLERY_PUBLIC_IDS } from "@/utils/galleryMedia";

/** Min width (px) for showing DomeGallery - matches Tailwind lg (1024px) */
const DOME_GALLERY_MIN_WIDTH = 1024;

/**
 * Gallery visibility logic:
 * - DomeGallery: Shown only when viewport >= 1024px AND after component mount.
 *   We wait for mount so the DOM/layout exists before DomeGallery's ResizeObserver runs.
 * - CircularGallery: Shown when DomeGallery is hidden (< 1024px or pre-mount).
 */
export default function About() {
  const [showDomeGallery, setShowDomeGallery] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const media = window.matchMedia(`(min-width: ${DOME_GALLERY_MIN_WIDTH}px)`);
    const handler = () => setShowDomeGallery(media.matches);
    handler(); // Run immediately on mount
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  // Use shared public IDs
  const cloudinaryPublicIds = GALLERY_PUBLIC_IDS;

  // Generate optimized Cloudinary URLs with both thumbnails and full-size versions
  const images = useMemo(() => {
    const imageItems = cloudinaryPublicIds.images.map((id) => ({
      src: getCloudinaryImageUrl(id, GALLERY_IMAGES.thumbnail), // Thumbnail for gallery tiles
      fullSizeSrc: getCloudinaryImageUrl(id, GALLERY_IMAGES.fullSize), // Full-size for opened view
      alt: `Gallery photo ${id.split("/").pop()}`,
      type: "image" as const,
    }));

    const videoItems = cloudinaryPublicIds.videos.map((id) => ({
      // For gallery tiles: use video URL with small size for thumbnail preview
      // The browser will show the first frame automatically
      src: getCloudinaryVideoUrl(id, {
        width: 400,
        height: 400,
        quality: "auto",
        format: "auto", // Let Cloudinary choose the best format
      }),
      // For opened view: use video URL without size constraints for full quality playback
      fullSizeSrc: getCloudinaryVideoUrl(id, {
        quality: "auto",
        format: "auto", // Let Cloudinary choose the best format
      }),
      alt: `Gallery video ${id.split("_")[0]}`,
      type: "video" as const,
    }));

    return [...imageItems, ...videoItems];
  }, []);

  // Filter out videos for mobile gallery and memoize to prevent unnecessary recalculations
  // CircularGallery expects strings, so we extract the src from image objects
  const galleryItems = useMemo(() => {
    const imageOnlyItems = images.filter(
      (item) => typeof item === "object" && item.type === "image",
    );

    return imageOnlyItems.map((item, index) => {
      const src = typeof item === "string" ? item : item.src;
      return {
        image: src,
        text: `Photo ${index + 1}`,
      };
    });
  }, [images]);
  return (
    <div
      id="about"
      className="dark:bg-base-100 bg-white min-h-[90vh] flex flex-col items-center justify-center w-full z-50 py-8 sm:py-12 md:py-10 lg:py-12 xl:py-14 3xl:py-16"
    >
      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-7xl 3xl:max-w-[90rem] 4xl:max-w-[100rem] 5xl:max-w-[120rem] gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28">
        {/* Dome Gallery – only mount when viewport >= 1024px (after mount) so it has valid dimensions */}
        {mounted && showDomeGallery && (
          <div className="gallery-edge-fade w-full lg:w-[45%] xl:w-[50%] 2xl:w-[52%] 3xl:w-[54%] min-h-[400px] lg:min-h-[750px] shrink-0 self-stretch">
            <DomeGallery
              images={images}
              overlayBlurColor="transparent"
              fit={1.3}
              segments={30}
              fitBasis="height"
              minRadius={600}
              maxRadius={7000}
              maxVerticalRotationDeg={0}
              padFactor={0.05}
              openedImageWidth="500px"
              openedImageHeight="520px"
              grayscale={false}
              autoRotate
              autoRotateSpeed={2}
            />
          </div>
        )}

        {/* Text Content */}
        <div className="flex flex-col w-full max-w-xl lg:max-w-none lg:w-[50%] xl:w-[52%] 2xl:w-[50%] items-start justify-start gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-row items-center justify-start gap-2 sm:gap-3">
            <div className="divider w-12 sm:w-14 md:w-16" />
            <p className="text-base sm:text-lg md:text-xl font-medium text-teal-800">
              About Me
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-0.5 sm:gap-1">
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-semibold dark:text-white text-black">
              WHO IS
            </p>
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-semibold text-teal-800">
              SANTIAGO LOBO?
            </p>
          </div>
          <div className="w-full mt-2 sm:mt-3 flex flex-row items-center justify-start gap-3 sm:gap-4 mb-2 sm:mb-3">
            <div className="h-7 sm:h-8 md:h-9 w-1.5 sm:w-2 bg-teal-800 shrink-0" />
            <p className="text-base sm:text-lg md:text-xl lg:text-xl italic text-gray-400">
              &quot;Fulfill your dreams while helping others with a smile.&quot;
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 sm:gap-5 md:gap-6 max-w-2xl">
            <p className="text-base sm:text-base md:text-lg lg:text-xl font-normal text-black dark:text-white leading-relaxed">
              I strive to live by this principle. I am a determined and capable
              individual with ambitious goals and aspirations for the future.
              Life inevitably presents challenging days, but it's essential to
              hold onto hope and, whenever possible, be a source of hope and
              inspiration for others.
            </p>
            <p className="text-base sm:text-base md:text-lg lg:text-xl font-normal text-black dark:text-white leading-relaxed">
              As a software developer and leader, I combine technical expertise
              with a passion for empowering teams and creating meaningful
              impact. My journey spans from coding innovative solutions to
              leading initiatives that drive positive change.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Circular Gallery - show when DomeGallery is not shown (< 1024px) */}
      {(!mounted || !showDomeGallery) && (
        <div className="w-full h-[320px] sm:h-[360px] md:h-[400px] mt-6 sm:mt-8 md:mt-10 px-0 sm:px-6 max-w-4xl mx-auto">
          <CircularGallery
            items={galleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.1}
            font="bold 20px Figtree"
            scrollSpeed={3}
            scrollEase={0.05}
          />
        </div>
      )}
    </div>
  );
}
