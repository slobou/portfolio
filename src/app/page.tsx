import Hero from "@/components/sections/Hero";
import CardNav from "../blocks/CardNav/CardNav";

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
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main>
        <CardNav className="" items={menuItems} ease="power3.out" />
        <Hero />
      </main>
    </div>
  );
}
