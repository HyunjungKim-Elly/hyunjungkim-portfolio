'use client'

import AboutSection from "@/components/About";
import { ExperienceSection } from "@/components/Experience";
import { ProjectSection } from "@/components/Projects";
import { StarryBackground } from "@/components/StarryBackground";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO />
      <StarryBackground />
      <main className="flex flex-col items-center sm:items-start">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
    </>
  );
}
