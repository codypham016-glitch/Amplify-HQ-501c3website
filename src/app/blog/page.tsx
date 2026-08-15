import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes from Amplify HQ — coming soon.",
};

export default function BlogPage() {
  return <ComingSoon title="Newsletter" eyebrow="Newsletter" />;
}
