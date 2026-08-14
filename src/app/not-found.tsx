import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-44">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel index="404">Page not found</SectionLabel>
          <SectionHeading as="h1" size="display" className="mt-6">
            Off the map — for now.
          </SectionHeading>
          <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-ink-2)]">
            We couldn&apos;t find the page you were looking for. It may have moved, or it may
            be part of Amplify HQ that hasn&apos;t launched yet.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/" variant="secondary">Return home</Button>
            <Link href="/chapters" className="inline-flex items-center gap-2 py-2.5 text-sm underline decoration-[color:var(--color-rule-strong)] underline-offset-4 hover:text-[color:var(--color-accent)]">
              See our chapters →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
