import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Amplify HQ — a 501(c)(3) nonprofit funding student opportunities across the country.",
};

export default function DonatePage() {
  return (
    <PlaceholderPage
      eyebrow="Donate"
      title="Support the work."
      description="The secure Stripe-backed donation page is being wired up. If you&apos;d like to give now, reach out through the contact page and we&apos;ll follow up with instructions."
    />
  );
}
