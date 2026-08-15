import { Hero } from "@/components/home/Hero";
import { QuestionSection } from "@/components/home/QuestionSection";
import { Manifesto } from "@/components/home/Manifesto";
import { IntersectionSection } from "@/components/home/IntersectionSection";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ThePeople } from "@/components/home/ThePeople";
import { TheWork } from "@/components/home/TheWork";
import { ChaptersSection } from "@/components/home/ChaptersSection";
import { Participate } from "@/components/home/Participate";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuestionSection />
      <Manifesto />
      <IntersectionSection />
      <WhatWeDo />
      <ThePeople />
      <TheWork />
      <ChaptersSection />
      <Participate />
      <FinalCTA />
    </>
  );
}
