import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Impact",
  description: "How Amplify HQ measures its work — and what we&apos;ll report as the network grows.",
};

export default function ImpactPage() {
  return (
    <PlaceholderPage
      eyebrow="Impact"
      title="We&apos;re early — and we&apos;re measuring honestly."
      description="The full Impact page will report on students reached, chapters, partnerships, projects, and events as those numbers come in. The homepage summarizes what we track today."
    />
  );
}
