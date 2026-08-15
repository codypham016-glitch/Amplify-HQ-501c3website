import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Impact",
  description: "Amplify HQ's impact metrics — coming soon.",
};

export default function ImpactPage() {
  return <ComingSoon title="The impact" eyebrow="Impact" />;
}
