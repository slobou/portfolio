"use client";

import DomeGallery from "@/components/blocks/DomeGallery/DomeGallery";
import CircularGallery from "@/components/blocks/CircularGallery/CircularGallery";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useMemo } from "react";
import {
  getCloudinaryImageUrl,
  getCloudinaryVideoUrl,
  getCloudinaryVideoPoster,
  GALLERY_IMAGES,
} from "@/utils/cloudinary";
import { GALLERY_PUBLIC_IDS } from "@/utils/galleryMedia";

export default function About() {
  const { isMobile, isTablet } = useScreenSize();

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
      className="dark:bg-base-100 bg-white h-full xl:h-[90vh] flex flex-col items-center justify-center w-full z-50 py-12"
    >
      <div className="h-full w-full flex xl:flex-row flex-col flex-reverse items-center justify-center container xl:gap-20 2xl:gap-64">
        {/* Desktop Dome Gallery – softer vignette, fade-out at edges */}
        {!isMobile && (
          <div className="gallery-edge-fade xl:w-[50%] w-full 2xl:w-[100%] h-full min-h-[360px]">
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
        <div className="flex flex-col w-[85%] xl:w-[50%] 2xl:w-[90%] items-start justify-start gap-3">
          <div className="flex flex-row items-center justify-start gap-3">
            <div className="divider w-16" />
            <p className="text-xl font-medium text-teal-800">About Me</p>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="xl:text-5xl text-4xl font-semibold dark:text-white text-black">
              WHO IS
            </p>
            <p className="text-5xl font-semibold text-teal-800">
              SANTIAGO LOBO?
            </p>
          </div>
          <div className="w-full mt-3 flex flex-row items-center justify-start gap-4 mb-3">
            <div className="h-9 w-2 bg-teal-800" />
            <p className="xl:text-xl text-xl italic text-gray-400">
              "Fulfill your dreams while helping others with a smile."
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <p className="xl:text-xl text-lg font-normal text-black dark:text-white">
              I strive to live by this principle. I am a determined and capable
              individual with ambitious goals and aspirations for the future.
              Life inevitably presents challenging days, but it's essential to
              hold onto hope and, whenever possible, be a source of hope and
              inspiration for others.
            </p>
            <p className="xl:text-xl text-lg font-normal text-black dark:text-white">
              As a software developer and leader, I combine technical expertise
              with a passion for empowering teams and creating meaningful
              impact. My journey spans from coding innovative solutions to
              leading initiatives that drive positive change.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Circular Gallery - Only render on mobile */}
      {(isTablet || isMobile) && (
        <div className="w-full h-[400px] mt-8">
          <CircularGallery
            items={galleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.1}
            font="bold 20px Figtree"
            scrollSpeed={1}
            scrollEase={0.2}
          />
        </div>
      )}
    </div>
  );
}
