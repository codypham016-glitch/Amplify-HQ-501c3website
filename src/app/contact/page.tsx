import type { Metadata } from "next";
import { ComingSoon } from "@/components/layout/ComingSoon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Amplify HQ — coming soon.",
};

export default function ContactPage() {
  return <ComingSoon title="Get in touch" eyebrow="Contact" />;
}
