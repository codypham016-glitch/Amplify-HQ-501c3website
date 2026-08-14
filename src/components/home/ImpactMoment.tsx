import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Impact / proof — honest early-stage version. No invented statistics.
 * A pledge to measure, and the frame that will hold real numbers.
 */
const metrics = [
  { label: "Founding chapters", value: "4", future: "target 25 by 2028" },
  { label: "Students reached", value: "—", future: "reported after founding term" },
  { label: "Partner professionals", value: "—", future: "published as they confirm" },
  { label: "Projects completed", value: "—", future: "case studies posted quarterly" },
];

export function ImpactMoment() {
  return (
    <section className="bg-[color:var(--color-cream)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionLabel index="§ 08">The honest ledger</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              We&apos;re new. Here&apos;s what we measure.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              A nonprofit is only as credible as what it reports. Amplify HQ launches its founding chapters in Fall 2026 — so the numbers below are honest zeros for now, published so you can watch them fill.
            </p>

            <dl className="mt-12 divide-y divide-[color:var(--color-line-2)] border-y border-[color:var(--color-line-2)]">
              {metrics.map((m) => (
                <div key={m.label} className="grid grid-cols-12 items-baseline gap-4 py-6">
                  <dt className="col-span-6 font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
                    {m.label}
                  </dt>
                  <dd className="col-span-2 text-right font-[family-name:var(--font-serif)] text-3xl text-[color:var(--color-ink)]">
                    {m.value}
                  </dd>
                  <dd className="col-span-4 text-right text-sm text-[color:var(--color-ink-2)]">
                    {m.future}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 font-[family-name:var(--font-serif)] italic text-lg text-[color:var(--color-ink-2)]">
              Every number on this page will be a real number — never a projection, never rounded up, never invented.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
