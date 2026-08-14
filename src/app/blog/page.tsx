import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates from Amplify HQ — chapter launches, workshop recaps, and notes from the intersection of business and behavioral science.",
};

export default function BlogPage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-display)] leading-[0.95] tracking-[-0.03em] text-[color:var(--color-charcoal)]">
            Notes from the
            <br />
            <span className="text-[color:var(--color-gray-muted)]">intersection.</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-gray-muted)]">
            Chapter launches, workshop recaps, speaker takeaways, and short pieces
            on the behavioral science behind business decisions. First posts go up
            as chapters begin their founding term.
          </p>
        </div>

        <div className="mt-16 border-t-2 border-[color:var(--color-charcoal)] pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-3 border-2 border-[color:var(--color-teal)] bg-[color:var(--color-teal)]/5 px-4 py-2 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-teal)]">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-teal)]" aria-hidden />
              No posts yet
            </div>
            <Button href="/contact" variant="secondary" trailing="→">
              Get notified when we publish
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
