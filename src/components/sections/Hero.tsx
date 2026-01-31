import StarBorder from "@/components/blocks/StarBorder/StarBorder";
import RotatingText from "@/components/blocks/TextAnimations/RotatingText/RotatingText";

export default function Hero() {
  return (
    <div
      id="hero"
      className="hero max-w-screen min-h-dvh sm:min-h-screen h-screen bg-radial from-[#1b4b4c] to-[#0d2a2b] flex items-center justify-center z-50 px-4 sm:px-6 md:px-8"
    >
      <div className="hero-content w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-8 sm:py-12">
        <div className="avatar shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-24 lg:h-24 rounded-full ring-2 ring-white/20 overflow-hidden">
            <img
              src="/assets/images/PhotoHero.jpg"
              draggable={false}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-1 sm:gap-2 w-full text-center px-2 sm:px-4">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white text-center">
            Hello, I am
          </h1>
          {/* Prevent line wrapping with whitespace-nowrap and responsive text sizing */}
          <div className="w-full flex items-center justify-center overflow-x-auto overflow-y-hidden max-w-full">
            <RotatingText
              mainClassName="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-white text-center justify-center items-center whitespace-nowrap"
              texts={[
                "Santiago Lobo",
                "a Software Developer",
                "a Leader",
                "an Innovator",
                "an Entrepreneur",
              ]}
              rotationInterval={3000}
              splitBy="characters"
              animatePresenceInitial={true}
              staggerDuration={0.02}
              exit={{ opacity: 0 }}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="focus:outline-none border-0 bg-transparent p-0 cursor-pointer"
          >
            <StarBorder
              as="span"
              color="#00B557"
              thickness={2}
              className="cursor-pointer font-medium"
              innerClassName="btn btn-md sm:btn-md md:btn-md lg:btn-lg xl:btn-lg 2xl:btn-xl bg-emerald-800 hover:bg-emerald-900 text-white border-0 font-medium text-sm sm:text-base md:text-base lg:text-lg px-4 sm:px-6"
            >
              View Work
            </StarBorder>
          </button>
          <a
            href="https://www.linkedin.com/in/santiago-lobo-ulloa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-md sm:btn-md md:btn-md lg:btn-lg xl:btn-lg 2xl:btn-xl border-2 border-white/30 rounded-3xl text-white bg-transparent hover:bg-white/10 font-medium text-sm sm:text-base px-4 sm:px-6"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </div>
  );
}
