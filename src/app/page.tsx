import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ThePeople } from "@/components/home/ThePeople";
import { TheWork } from "@/components/home/TheWork";
import { Participate } from "@/components/home/Participate";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <WhatWeDo />
      <ThePeople />
      <TheWork />
      <Participate />
    </>
  );
}
