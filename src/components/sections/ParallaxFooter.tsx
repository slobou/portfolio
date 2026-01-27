"use client";

import TextPressure from "@/blocks/TextAnimations/TextPressure";

export default function ParallaxFooter() {
  return (
    <div className="relative w-full bg-[#0d2a2b]  lg:block h-[14vh] lg:h-[40vh]">
      {/* TextPressure Background - Fixed to viewport, revealed by Footer scrolling */}
      <div
        className="fixed bottom-0 left-0 right-0 flex items-center justify-center bg-[#0d2a2b] h-[11vh] lg:h-[35vh] z-10"
        style={{
          pointerEvents: "none",
        }}
      >
        <div className="w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-32">
          <TextPressure
            text="SLOBOU"
            textColor="#fff"
            flex={true}
            width={true}
            weight={true}
            italic={true}
            scale={true}
            minFontSize={20}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
