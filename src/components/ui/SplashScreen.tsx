"use client";

import { useEffect, useState } from "react";

interface SplashScreenProps {
  onLoadComplete: () => void;
  mediaUrls: string[];
  minDisplayTime?: number; // Minimum time to show splash (ms)
}

export default function SplashScreen({
  onLoadComplete,
  mediaUrls,
  minDisplayTime = 1500,
}: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    const totalMedia = mediaUrls.length;
    const startTime = Date.now();

    if (totalMedia === 0) {
      // If no media to load, wait for minimum display time
      setTimeout(() => {
        setIsLoading(false);
        onLoadComplete();
      }, minDisplayTime);
      return;
    }

    const loadMedia = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        // Check if it's a video or image
        const isVideo = /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url) || 
                       url.includes('/video/upload/');

        if (isVideo) {
          const video = document.createElement("video");
          video.preload = "metadata";
          video.onloadedmetadata = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / totalMedia) * 100));
            resolve();
          };
          video.onerror = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / totalMedia) * 100));
            resolve(); // Continue even if one fails
          };
          video.src = url;
        } else {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / totalMedia) * 100));
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / totalMedia) * 100));
            resolve(); // Continue even if one fails
          };
          img.src = url;
        }
      });
    };

    // Load all media in parallel
    Promise.all(mediaUrls.map(loadMedia)).then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        // Small delay for fade out animation
        setTimeout(() => {
          onLoadComplete();
        }, 300);
      }, remainingTime);
    });
  }, [mediaUrls, minDisplayTime, onLoadComplete]);

  if (!isLoading && progress === 100) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-[#0d2a2b] via-[#1b4b4c] to-[#0d2a2b] flex items-center justify-center transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Logo/Name */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Santiago Lobo
          </h1>
          <p className="text-lg md:text-xl text-teal-300">
            Portfolio
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center gap-4 w-64">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-teal-900/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-400 to-teal-600 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Loading Spinner */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-teal-900/30 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-teal-400 rounded-full animate-spin" />
          </div>

          {/* Progress Text */}
          <p className="text-sm text-teal-300 font-medium">
            {progress}% Loaded
          </p>
        </div>
      </div>
    </div>
  );
}
