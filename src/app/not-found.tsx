import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-44">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel index="404">Page not found</SectionLabel>
          <h1 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
            Off the map — <span className="text-[color:var(--color-coral)]">for now</span>.
          </h1>
          <p className="mt-10 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            We couldn&apos;t find the page you were looking for. It may have moved, or it may be part of Amplify HQ that hasn&apos;t launched yet.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-semibold underline decoration-[color:var(--color-coral)] decoration-[2px] underline-offset-[6px] hover:decoration-[3px]"
            >
              Return home <span aria-hidden>→</span>
            </Link>
            <Link
              href="/chapters"
              className="inline-flex items-center gap-2 text-base font-semibold underline decoration-[color:var(--color-navy-3)] decoration-[2px] underline-offset-[6px] hover:decoration-[color:var(--color-coral)]"
            >
              See our chapters
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
