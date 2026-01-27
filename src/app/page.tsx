import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CardNav from "@/blocks/Components/CardNav/CardNav";
import Projects from "@/components/sections/Projects";

const menuItems = [
  {
    label: "About",
    bgColor: "#000",
    textColor: "#fff",
    links: [],
  },
  {
    label: "Projects",
    bgColor: "#000",
    textColor: "#fff",
    links: [],
  },
  {
    label: "Contact",
    bgColor: "#000",
    textColor: "#fff",
    links: [],
  },
];

export default function Home() {
  return (
    <div className="h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-12 xl:gap-0">
        <CardNav className="fixed" items={menuItems} ease="power3.out" />
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}
