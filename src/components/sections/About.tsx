"use client";

import DomeGallery from "@/blocks/Components/DomeGallery/DomeGallery";
import CircularGallery from "@/blocks/Components/CircularGallery/CircularGallery";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useMemo } from "react";

export default function About() {
  const { isMobile } = useScreenSize();

  const images = [
    "/assets/images/gallery/Photo1.jpg",
    "/assets/images/gallery/Photo2.JPG",
    "/assets/images/gallery/Photo3.JPG",
    "/assets/images/gallery/Photo4.JPG",
    "/assets/images/gallery/Photo5.JPG",
    "/assets/images/gallery/Photo6.JPG",
    "/assets/images/gallery/Photo7.jpeg",
    "/assets/images/gallery/Photo8.jpeg",
    "/assets/images/gallery/Photo9.jpeg",
    "/assets/images/gallery/Photo9.2.jpeg",
    "/assets/images/gallery/Photo9.3.jpeg",
    "/assets/images/gallery/Photo10.jpeg",
    "/assets/images/gallery/Photo10.png",
    "/assets/images/gallery/Photo11.jpeg",
    "/assets/images/gallery/Photo12.jpg",
    "/assets/images/gallery/Photo13.PNG",
    "/assets/images/gallery/Photo14.PNG",
    "/assets/images/gallery/Photo15.jpg",
    "/assets/images/gallery/2026sts.jpeg",
    "/assets/images/gallery/Video1.webm",
    "/assets/images/gallery/video2.webm",
    "/assets/images/gallery/video3.webm",
  ];

  // Filter out videos for mobile gallery and memoize to prevent unnecessary recalculations
  const galleryItems = useMemo(() => {
    const imageOnlyFiles = images.filter(
      (image) =>
        !image.includes(".webm") &&
        !image.includes(".mp4") &&
        !image.includes(".mov"),
    );

    return imageOnlyFiles.map((image, index) => ({
      image,
      text: `Photo ${index + 1}`,
    }));
  }, [images]);
  return (
    <div className="dark:bg-base-100 bg-white h-full xl:h-[90vh] flex flex-col items-center justify-center w-full">
      <div className="h-full w-full flex xl:flex-row flex-col flex-reverse items-center justify-center container xl:gap-20 2xl:gap-64">
        {/* Desktop Dome Gallery - Only render on desktop */}
        {!isMobile && (
          <div className="xl:w-[50%] w-full 2xl:w-[100%] h-full">
            <DomeGallery
              images={images}
              overlayBlurColor="transparent"
              fit={0.7}
              segments={22}
              fitBasis="auto"
              minRadius={300}
              maxRadius={700}
              maxVerticalRotationDeg={0}
              padFactor={0.05}
              openedImageWidth="500px"
              openedImageHeight="520px"
              grayscale={false}
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
      {isMobile && (
        <div className="w-full h-[400px] mt-8">
          <CircularGallery
            items={galleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.1}
            font="bold 20px Figtree"
            scrollSpeed={1.5}
            scrollEase={0.05}
          />
        </div>
      )}
    </div>
  );
}
