import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "About",
  description: "Amplify HQ's mission, vision, values, and the student-led chapter model.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="About"
      title="Who we are, and why Amplify HQ exists."
      description="The full About page — mission, vision, values, how the student-led chapter model works, and where the national network is headed — is being written. In the meantime, the homepage covers the essentials."
    />
  );
}
