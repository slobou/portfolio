import StarBorder from "@/blocks/StarBorder/StarBorder";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";

export default function Hero() {
  return (
    <div
      id="hero"
      className="hero max-w-screen h-screen bg-radial from-[#1b4b4c] to-[#0d2a2b] flex items-center justify-center z-50"
    >
      <div className="hero-content w-full h-full flex flex-col items-center justify-center gap-12">
        <div className="avatar ">
          <div className="w-20 rounded-full">
            <img
              src="/assets/images/PhotoHero.jpg"
              draggable={false}
              alt="Profile"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2 w-full text-center px-4">
          <h1 className="xl:text-5xl sm:text-4xl md:text-5xl text-3xl font-bold text-white text-center">
            Hello, I am
          </h1>
          {/* Prevent line wrapping with whitespace-nowrap and responsive text sizing */}
          <div className="w-full flex items-center justify-center">
            <RotatingText
              mainClassName="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-bold text-white text-center justify-center items-center whitespace-nowrap"
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
        <div className="flex flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="focus:outline-none border-0 bg-transparent p-0 cursor-pointer"
          >
            <StarBorder
              as="span"
              color="#00B557"
              thickness={2}
              className="cursor-pointer font-medium"
              innerClassName="btn btn-md xl:btn-lg bg-emerald-800 hover:bg-emerald-900 text-white hover:bg-emerald-900 border-0 font-medium text-base xl:text-lg"
            >
              View Work
            </StarBorder>
          </button>
          <a
            href="https://www.linkedin.com/in/santiago-lobo-ulloa/"
            target="_blank"
            rel="noopener noreferrer"
            className=" btn btn-md xl:btn-lg border-2 border-white/30 rounded-3xl text-white bg-transparent hover:bg-white/10 font-medium"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}
