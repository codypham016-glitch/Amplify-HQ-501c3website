import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Amplify HQ national team.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Contact"
      title="Reach the national team."
      description="A proper contact form is on the way. In the meantime, national leadership can be reached directly by email — this address will be published here once the mail infrastructure is finalized."
    />
  );
}
