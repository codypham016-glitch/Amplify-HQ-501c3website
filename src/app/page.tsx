import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { BusinessXPsychology } from "@/components/home/BusinessXPsychology";
import { ProgramCalendar } from "@/components/home/ProgramCalendar";
import { ChaptersSection } from "@/components/home/ChaptersSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <WhatWeDo />
      <BusinessXPsychology />
      <ProgramCalendar />
      <ChaptersSection />
      <FinalCTA />
    </>
  );
}
