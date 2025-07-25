'use client'

import AboutSection from "@/components/About";
import { ExperienceSection } from "@/components/Experience";
import { ProjectSection } from "@/components/Projects";
import { StarryBackground } from "@/components/StarryBackground";


export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">
      <StarryBackground />
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
    </div>
  );
}
