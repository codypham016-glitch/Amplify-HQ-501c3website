import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Events",
  description: "Speakers, workshops, business visits, and chapter events across the Amplify HQ network.",
};

export default function EventsPage() {
  return (
    <PlaceholderPage
      eyebrow="Events"
      title="Every chapter&apos;s calendar, in one place."
      description="The events architecture — chapter-specific events, registration, and recaps — is being built. As chapters run programming, this page will start filling in."
    />
  );
}
