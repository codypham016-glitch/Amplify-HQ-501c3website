import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { BusinessXPsychology } from "@/components/home/BusinessXPsychology";
import { ChaptersSection } from "@/components/home/ChaptersSection";
import { Participate } from "@/components/home/Participate";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <WhatWeDo />
      <BusinessXPsychology />
      <ChaptersSection />
      <Participate />
      <FinalCTA />
    </>
  );
}
