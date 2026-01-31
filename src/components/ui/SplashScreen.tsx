"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useColorScheme } from "@/components/providers/ThemeProvider";

interface SplashScreenProps {
  onLoadComplete: () => void;
  mediaUrls: string[];
  minDisplayTime?: number;
  waitForFullPageLoad?: boolean;
}

const SPLASH_BG = {
  dark: "from-[#0d2a2b] via-[#1b4b4c] to-[#0d2a2b]",
  light: "from-[#225a5b] via-[#1b4b4c] to-[#163d3e]",
} as const;

const LOGO_PATHS = [
  "M32.2824 458.027L212.014 43.8897L243.006 35.6792L273.999 27.4686L91.4393 465.192H199.576H317.051L338.244 503.667H40.118L32.2824 458.027Z",
  "M212.994 226.573C241.183 237.557 263.733 258.986 275.682 286.144C287.631 313.302 288 343.966 276.709 371.39C265.418 398.813 243.391 420.75 215.474 432.375C187.557 443.999 156.037 444.358 127.847 433.374L149.134 381.674C163.229 387.166 178.989 386.986 192.947 381.174C206.906 375.362 217.919 364.394 223.565 350.682C229.21 336.97 229.026 321.638 223.051 308.059C217.077 294.48 205.802 283.766 191.707 278.273L212.994 226.573Z",
  "M103.29 244.574C89.4237 238.917 76.8387 230.658 66.2533 220.27C55.6679 209.882 47.2895 197.567 41.5964 184.028C35.9033 170.49 33.0071 155.993 33.0731 141.366C33.139 126.738 36.1658 112.267 41.9808 98.7773C47.7957 85.2879 56.2848 73.0448 66.9635 62.7471C77.6421 52.4493 90.3011 44.2985 104.218 38.7601C118.134 33.2217 133.036 30.4042 148.072 30.4683C163.108 30.5324 177.984 33.477 191.85 39.1339L169.71 90.4938C162.777 87.6654 155.339 86.1931 147.821 86.1611C140.303 86.129 132.852 87.5378 125.894 90.307C118.935 93.0762 112.606 97.1516 107.267 102.3C101.927 107.449 97.6828 113.571 94.7753 120.316C91.8678 127.06 90.3544 134.296 90.3214 141.61C90.2885 148.923 91.7366 156.172 94.5831 162.941C97.4297 169.71 101.619 175.868 106.912 181.062C112.204 186.256 118.497 190.385 125.43 193.214L103.29 244.574Z",
  "M292.173 446.027V426.107H295.005L304.605 440.843H303.165L312.573 426.107H315.405L315.453 446.027H312.141L312.093 431.003H312.765L304.605 443.675H303.021L294.621 431.003H295.485V446.027H292.173ZM278.541 446.027V428.939H271.293V426.107H289.245V428.939H281.997V446.027H278.541Z",
];

function whenWindowFullyLoaded(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

export default function SplashScreen({
  onLoadComplete,
  mediaUrls,
  minDisplayTime = 2800,
  waitForFullPageLoad = true,
}: SplashScreenProps) {
  const { scheme } = useColorScheme();
  const [phase, setPhase] = useState<"loading" | "fading" | "done">("loading");

  useEffect(() => {
    const startTime = Date.now();

    const loadMedia = (url: string): Promise<void> => {
      return new Promise((resolve) => {
        const isVideo =
          /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url) ||
          url.includes("/video/upload/");

        if (isVideo) {
          const video = document.createElement("video");
          video.preload = "metadata";
          video.onloadedmetadata = () => resolve();
          video.onerror = () => resolve();
          video.src = url;
        } else {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        }
      });
    };

    const mediaPromise =
      mediaUrls.length > 0
        ? Promise.all(mediaUrls.map(loadMedia)).then(() => {})
        : Promise.resolve();

    const fullLoadPromise = waitForFullPageLoad
      ? whenWindowFullyLoaded()
      : Promise.resolve();

    Promise.all([mediaPromise, fullLoadPromise]).then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        setPhase("fading");
        onLoadComplete();
      }, remainingTime);
    });
  }, [mediaUrls, minDisplayTime, onLoadComplete, waitForFullPageLoad]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleFadeComplete = () => {
    setPhase("done");
  };

  if (phase === "done") {
    return null;
  }

  const TM_INDEX = 3;
  const strokeColor = (i: number) =>
    i === TM_INDEX ? "rgba(255, 255, 255, 0.88)" : "white";
  const strokeWidthFor = (i: number) => (i === TM_INDEX ? 2 : 12);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "fading" ? 0 : 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={phase === "fading" ? handleFadeComplete : undefined}
      className={`fixed inset-0 z-[9999] flex min-h-screen w-full items-center justify-center bg-gradient-to-br ${
        scheme === "dark" ? SPLASH_BG.dark : SPLASH_BG.light
      } ${phase === "fading" ? "pointer-events-none" : ""}`}
    >
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 md:px-8">
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <svg
            viewBox="20 15 350 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-auto sm:w-24 sm:h-auto md:w-28 md:h-auto lg:w-32 max-w-[140px] drop-shadow-[0_0_24px_rgba(0,181,87,0.2)]"
            preserveAspectRatio="xMidYMid meet"
          >
            {LOGO_PATHS.map((d, i) =>
              i === TM_INDEX ? (
                <g
                  key={i}
                  transform="translate(293.5 436) scale(0.58) translate(-293.5 -436)"
                >
                  <motion.path
                    d={d}
                    fill="none"
                    stroke={strokeColor(i)}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0.4 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      pathLength: {
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.15 + i * 0.2,
                      },
                      opacity: { duration: 0.35, delay: 0.15 + i * 0.2 },
                    }}
                  />
                </g>
              ) : (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke={strokeColor(i)}
                  strokeWidth={strokeWidthFor(i)}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.15 + i * 0.2,
                    },
                    opacity: { duration: 0.35, delay: 0.15 + i * 0.2 },
                  }}
                />
              ),
            )}
            {/* Fill layer fades in after paths are drawn */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.05 }}
            >
              {LOGO_PATHS.map((d, i) =>
                i === TM_INDEX ? (
                  <g
                    key={`fill-${i}`}
                    transform="translate(293.5 436) scale(0.58) translate(-293.5 -436)"
                  >
                    <path
                      d={d}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.9)"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none"
                    />
                  </g>
                ) : (
                  <path
                    key={`fill-${i}`}
                    d={d}
                    fill="white"
                    className="pointer-events-none"
                  />
                ),
              )}
            </motion.g>
          </svg>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white tracking-tight">
            Santiago Lobo
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-teal-300/90 font-medium">
            Portfolio
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
