import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { Opportunity } from "@/components/home/Opportunity";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ThePeople } from "@/components/home/ThePeople";
import { BusinessXPsychology } from "@/components/home/BusinessXPsychology";
import { TheWork } from "@/components/home/TheWork";
import { ChaptersSection } from "@/components/home/ChaptersSection";
import { ImpactMoment } from "@/components/home/ImpactMoment";
import { Participate } from "@/components/home/Participate";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Opportunity />
      <WhatWeDo />
      <ThePeople />
      <BusinessXPsychology />
      <TheWork />
      <ChaptersSection />
      <ImpactMoment />
      <Participate />
      <FinalCTA />
    </>
  );
}
