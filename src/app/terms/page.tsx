import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Amplify HQ website.",
};

export default function TermsPage() {
  return (
    <section className="py-28 lg:py-40">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
            Terms
          </p>
          <h1 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
            Terms of use.
          </h1>
          <p className="mt-10 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            Terms will be reviewed by counsel before publication. Until then, this site is provided as-is for informational and community purposes.
          </p>
        </div>
      </Container>
    </section>
  );
}
