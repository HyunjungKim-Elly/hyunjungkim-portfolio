import AboutSection from "@/components/AboutSection";
import { ExperienceSection } from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen ">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <AboutSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
