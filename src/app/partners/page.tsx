import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
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
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Partners</SectionLabel>
              <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-display)] leading-[0.95] tracking-[-0.03em] text-[color:var(--color-charcoal)]">
                Give a student
                <br />
                <span className="text-[color:var(--color-gray-muted)]">a real audience.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-gray-muted)]">
                Amplify HQ launches in {site.launchTerm}, and we&apos;re building our
                partner network now. Most partnerships start small — one hour in
                front of a chapter — and grow from there.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" trailing="→">
                  Become a partner
                </Button>
                <Button href="/programs" variant="secondary" size="lg">
                  See the program year
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-gray-light)] py-20 lg:py-28">
        <Container>
          <p className="eyebrow">Ways to work with us</p>
          <ol className="mt-10 grid grid-cols-1 gap-0 border-t-2 border-[color:var(--color-charcoal)] md:grid-cols-2">
            {partnerPathways.map((p, i) => (
              <li
                key={p.title}
                className={`flex flex-col gap-4 border-b-2 border-[color:var(--color-gray-2)] py-8 lg:py-10 ${
                  i % 2 === 1 ? "md:border-l-2 md:pl-10" : "md:pr-10"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-gray-muted)]">
                    {p.index}
                  </span>
                  <span className="border-2 border-[color:var(--color-teal)] bg-[color:var(--color-teal)]/10 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[color:var(--color-teal)]">
                    {p.commitment}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-tight tracking-[-0.02em] text-[color:var(--color-charcoal)]">
                  {p.title}
                </h2>
                <p className="text-sm leading-relaxed text-[color:var(--color-gray-muted)] sm:text-base">
                  {p.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[color:var(--color-charcoal)] py-20 text-white lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow-on-dark">Partner types</p>
              <h2 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-section)] leading-[1] tracking-[-0.025em]">
                Who we work with.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                We haven&apos;t announced partners yet — we&apos;re recruiting our first
                cohort now. If your organization fits one of these, we&apos;d like to
                talk.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="on-dark" trailing="→">
                  Start a conversation
                </Button>
              </div>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 divide-y-2 divide-white/15 border-y-2 border-white/15">
              {partnerCategories.map((c) => (
                <li key={c.label} className="py-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
                    {c.label}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/65">{c.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
