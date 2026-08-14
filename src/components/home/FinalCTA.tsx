import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { site } from "@/lib/site";

/**
 * A quiet, editorial closer — not a marketing slab. One serif line,
 * two link-style CTAs, and a signature.
 */
export function FinalCTA() {
  return (
    <section className="bg-[color:var(--color-ink)] py-28 text-[color:var(--color-bone)] lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-signal-tint)]">
              § 10 &nbsp;/&nbsp; The invitation
            </p>

            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-hero)] leading-[1] tracking-[-0.02em] text-[color:var(--color-bone)]">
              Come sit with the <em className="text-[color:var(--color-signal-tint)]">interesting</em> questions.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-[1.65] text-[color:var(--color-bone)]/75">
              Amplify HQ is early, on purpose. Every chapter, every partner, every project shapes what this becomes. If any of that sounds like a place you want to be, there&apos;s a door for you below.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Link
                href="/start-a-chapter"
                className="group inline-flex items-baseline gap-3 font-[family-name:var(--font-serif)] text-2xl italic text-[color:var(--color-bone)] underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[8px] hover:decoration-[2px]"
              >
                Apply as Chapter Lead
                <span aria-hidden className="text-[color:var(--color-signal-tint)] transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/partners"
                className="group inline-flex items-baseline gap-3 font-[family-name:var(--font-serif)] text-2xl italic text-[color:var(--color-bone)] underline decoration-[color:var(--color-bone)]/40 decoration-[1.5px] underline-offset-[8px] hover:decoration-[color:var(--color-signal)] hover:decoration-[2px]"
              >
                Partner with us
                <span aria-hidden className="text-[color:var(--color-bone)]/60 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-[color:var(--color-bone)]/20 flex flex-col justify-end gap-8">
            <p className="font-[family-name:var(--font-serif)] text-2xl italic text-[color:var(--color-bone)]/85">
              — Or write us directly.
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="font-[family-name:var(--font-mono)] text-sm tracking-[0.05em] text-[color:var(--color-signal-tint)] underline decoration-[color:var(--color-signal)] underline-offset-4 hover:text-[color:var(--color-bone)]"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
