import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Amplify HQ website.",
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      eyebrow="Terms"
      title="Terms of use."
      description="Terms will be reviewed by counsel before publication. Until then, this site is provided as-is for informational and community purposes."
    />
  );
}
