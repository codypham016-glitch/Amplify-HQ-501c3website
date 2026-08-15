import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "About",
  description: "About Amplify HQ — coming soon.",
};

export default function AboutPage() {
  return <ComingSoon title="Who we are" eyebrow="About" />;
}
