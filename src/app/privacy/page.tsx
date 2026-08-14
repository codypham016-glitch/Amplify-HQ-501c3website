import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Amplify HQ handles the information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <PlaceholderPage
      eyebrow="Privacy"
      title="Privacy policy."
      description="The privacy policy will be reviewed by counsel before publication. Until then, please treat any information submitted through this site as governed by good-faith nonprofit practices — we collect only what forms explicitly ask for, we don&apos;t sell data, and we don&apos;t share personal information outside the organization without consent."
    />
  );
}
