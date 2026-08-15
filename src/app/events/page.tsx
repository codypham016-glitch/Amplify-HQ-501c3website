import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming Amplify HQ events — coming soon.",
};

export default function EventsPage() {
  return <ComingSoon title="What's happening" eyebrow="Events" />;
}
