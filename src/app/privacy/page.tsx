import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Amplify HQ handles the information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <section className="py-28 lg:py-40">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
            Privacy
          </p>
          <h1 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
            Privacy policy
          </h1>
          <p className="mt-10 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            The privacy policy will be reviewed by counsel before publication. Until then, please treat any information submitted through this site as governed by good-faith nonprofit practices. We collect only what forms explicitly ask for, we don&apos;t sell data, and we don&apos;t share personal information outside the organization without consent.
          </p>
        </div>
      </Container>
    </section>
  );
}
