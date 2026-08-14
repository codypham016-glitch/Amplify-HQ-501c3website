import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatWeDo } from "@/lib/site";

export function WhatWeDo() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionLabel index="01">The member experience</SectionLabel>
            <SectionHeading as="h2" size="display" className="mt-6">
              Three core pillars, every semester.
            </SectionHeading>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-base leading-relaxed text-[color:var(--color-gray-muted)] sm:text-lg">
            Whether it's a workshop, networking night, or consulting project — every chapter follows the same rhythm. Learn. Connect. Build.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-0 border-t-2 border-[color:var(--color-charcoal)] lg:grid-cols-3">
          {whatWeDo.map((w, i) => (
            <li
              key={w.index}
              className={`flex flex-col gap-6 py-10 lg:py-14 pl-0 pr-0 ${
                i > 0 ? "border-t-2 border-[color:var(--color-charcoal)] lg:border-t-0 lg:border-l-2 lg:pl-10" : ""
              } ${i < whatWeDo.length - 1 ? "lg:pr-10" : ""}`}
            >
              <div>
                <span className="inline-block px-3 py-1.5 bg-[color:var(--color-teal)] text-[color:var(--color-charcoal)] font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.16em]">
                  {w.index}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.95] tracking-[-0.03em] font-bold text-[color:var(--color-charcoal)]">
                {w.title}
              </h3>
              <p className="text-base leading-relaxed text-[color:var(--color-charcoal)]">
                <span className="font-semibold">{w.lede}</span>
              </p>
              <p className="text-sm leading-relaxed text-[color:var(--color-gray-muted)]">
                {w.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
