import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { partnerPathways, partnerCategories, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Speak to a chapter, judge a case competition, host a consulting project, or offer a student an internship with Amplify HQ.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Partners</SectionLabel>
              <h1 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-hero)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
                Give a student a <em className="text-[color:var(--color-signal)]">real</em> audience.
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                Amplify HQ launches in {site.launchTerm}. Most partnerships start small — one hour in front of a chapter — and grow from there. There&apos;s no committee to join. No form to fill in triplicate. Just a conversation.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[2px]"
                >
                  Start a conversation
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/programs"
                  className="group inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-ink)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[color:var(--color-signal)]"
                >
                  See the program year
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-bone-2)] py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="§ Ways">Four ways in</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
                Pick a shape that fits.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              The commitment scales. An hour, an evening, a term, a summer. Any of them help — none of them require the others.
            </p>
          </div>

          <ol className="mt-16 border-t border-[color:var(--color-ink)]">
            {partnerPathways.map((p, i) => (
              <li
                key={p.title}
                className="grid grid-cols-1 gap-6 border-b border-[color:var(--color-line-2)] py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
              >
                <div className="lg:col-span-1">
                  <p className="font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.22em] text-[color:var(--color-stone)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] text-[color:var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-signal)]">
                    {p.commitment}
                  </p>
                </div>
                <p className="lg:col-span-6 text-lg leading-[1.6] text-[color:var(--color-ink-2)]">
                  {p.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[color:var(--color-ink)] py-24 text-[color:var(--color-bone)] lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel tone="dark">Who we work with</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-bone)]">
                We&apos;re building the first partner cohort now.
              </h2>
              <p className="mt-8 max-w-md text-lg leading-[1.65] text-[color:var(--color-bone)]/75">
                No invented logos. No fabricated partner rosters. If your organization fits below, we&apos;d like to talk.
              </p>
              <Link
                href="/contact"
                className="mt-10 group inline-flex items-baseline gap-3 font-[family-name:var(--font-serif)] text-2xl italic text-[color:var(--color-bone)] underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[8px] hover:decoration-[2px]"
              >
                Get in touch
                <span aria-hidden className="text-[color:var(--color-signal-tint)] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 divide-y divide-[color:var(--color-bone)]/20 border-y border-[color:var(--color-bone)]/20">
              {partnerCategories.map((c, i) => (
                <li key={c.label} className="grid grid-cols-12 items-baseline gap-4 py-6">
                  <span className="col-span-1 font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.22em] text-[color:var(--color-bone)]/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-11">
                    <h3 className="font-[family-name:var(--font-serif)] text-2xl leading-none text-[color:var(--color-bone)]">
                      {c.label}
                    </h3>
                    <p className="mt-3 text-sm text-[color:var(--color-bone)]/70">{c.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
