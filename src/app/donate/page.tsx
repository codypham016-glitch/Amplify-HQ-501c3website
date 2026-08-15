import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Amplify HQ — coming soon.",
};

export default function DonatePage() {
  return <ComingSoon title="Support Amplify" eyebrow="Donate" />;
}
