import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { partnerPathways, partnerCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Speak to a chapter, judge a case competition, host a consulting project, or offer a student an internship with Amplify HQ.",
};

export default function PartnersPage() {
  return (
    <main className="bg-[color:var(--color-ivory)]">
      {/* Hero — Who we work with */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>Who we work with</SectionLabel>
              <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
                We&apos;re building the first partner cohort now
              </h1>
              <p className="mt-8 max-w-md text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                No invented logos. No fabricated partner rosters. If your organization fits below, we&apos;d like to talk.
              </p>
              <div className="mt-10">
                <Button href="/contact" size="lg">Get in touch</Button>
              </div>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
              {partnerCategories.map((c, i) => (
                <li key={c.label} className="grid grid-cols-12 items-baseline gap-4 py-6">
                  <span className="col-span-1 text-[0.72rem] font-semibold tracking-[0.14em] text-[color:var(--color-navy-3)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-11">
                    <h3 className="text-xl font-bold text-[color:var(--color-navy)]">{c.label}</h3>
                    <p className="mt-2 text-sm text-[color:var(--color-navy-3)]">{c.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Why partner */}
      <section className="border-t border-[color:var(--color-line)] py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Why partner with us</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                Give a student their first real audience
              </h2>
              <p className="mt-10 max-w-2xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                Amplify HQ&apos;s goal is to help high school students explore the intersection of business and psychology through the people actually doing the work. We partner with organizations who want to invest in the next generation of curious, ambitious young leaders. Whether that&apos;s an hour on a chapter call, a real case for a student team, or an internship inside your organization, the value goes both ways.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">Start a conversation</Button>
                <Button href="/programs" variant="secondary" size="lg">See the program year</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Four ways in */}
      <section className="border-t border-[color:var(--color-line)] py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>Four ways in</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                Pick a shape that fits
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 lg:mt-14 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              The commitment scales. An hour, an evening, a term, a summer. Any of them help.
            </p>
          </div>

          <ol className="mt-14 border-t border-[color:var(--color-navy)]">
            {partnerPathways.map((p, i) => (
              <li
                key={p.title}
                className="grid grid-cols-1 gap-6 border-b border-[color:var(--color-line)] py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
              >
                <div className="lg:col-span-1">
                  <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-[color:var(--color-navy-3)]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-[clamp(1.4rem,2.2vw,1.9rem)] font-bold leading-[1.2] text-[color:var(--color-navy)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
                    {p.commitment}
                  </p>
                </div>
                <p className="lg:col-span-6 text-lg leading-[1.6] text-[color:var(--color-navy-2)]">
                  {p.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </main>
  );
}
