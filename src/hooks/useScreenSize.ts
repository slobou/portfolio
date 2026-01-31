import { useState, useEffect } from "react";

/** Breakpoints aligned with Tailwind (sm 640, md 768, lg 1024, xl 1280, 2xl 1536, 3xl 1440, 4xl 1920, 5xl 2560) */
export const BREAKPOINTS = {
  mobile: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1440,
  "4xl": 1920,
  "5xl": 2560,
} as const;

export interface ScreenSize {
  width: number;
  height: number;
  /** < 640px - phones */
  isMobile: boolean;
  /** 640–1023px - tablets */
  isTablet: boolean;
  /** 1024–1279px - laptops */
  isLaptop: boolean;
  /** 1280–1919px - desktops */
  isDesktop: boolean;
  /** >= 1920px - ultrawide */
  isUltrawide: boolean;
}

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isUltrawide: false,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenSize({
        width,
        height,
        isMobile: width < BREAKPOINTS.sm,
        isTablet: width >= BREAKPOINTS.sm && width < BREAKPOINTS.lg,
        isLaptop: width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl,
        isDesktop: width >= BREAKPOINTS.xl && width < BREAKPOINTS["4xl"],
        isUltrawide: width >= BREAKPOINTS["4xl"],
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return screenSize;
}
