'use client'

import AboutSection from "@/components/About";
import { ExperienceSection } from "@/components/Experience";
import { ProjectSection } from "@/components/Projects";
import { StarryBackground } from "@/components/StarryBackground";


export default function Home() {
  return (
    <>
      <StarryBackground />
      <main className="flex flex-col items-center sm:items-start">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
    </>
  );
}
