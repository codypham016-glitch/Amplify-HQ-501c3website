import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-44">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel index="404">Page not found</SectionLabel>
          <h1 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
            Off the map — <em className="text-[color:var(--color-signal)]">for now</em>.
          </h1>
          <p className="mt-10 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
            We couldn&apos;t find the page you were looking for. It may have moved, or it may be part of Amplify HQ that hasn&apos;t launched yet.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[2px]"
            >
              Return home <span aria-hidden>→</span>
            </Link>
            <Link
              href="/chapters"
              className="inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-ink)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[color:var(--color-signal)]"
            >
              See our chapters
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
