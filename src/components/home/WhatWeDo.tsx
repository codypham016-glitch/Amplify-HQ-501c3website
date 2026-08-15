import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pillars } from "@/lib/site";

/**
 * Learn / Connect / Build — three modes as full-width editorial rows.
 */
export function WhatWeDo() {
  return (
    <section className="bg-[color:var(--color-ivory)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>How Amplify works</SectionLabel>
            <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Three ways in.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            Every chapter runs on the same rhythm — a workshop, a conversation, a project — repeated across eight months.
          </p>
        </div>

        <ol className="mt-16 space-y-0">
          {pillars.map((p, idx) => (
            <li
              key={p.index}
              className="grid grid-cols-1 gap-8 border-t border-[color:var(--color-line)] py-12 lg:grid-cols-12 lg:gap-10 lg:py-14"
            >
              <div className="lg:col-span-2">
                <p className="text-6xl font-extrabold leading-none text-[color:var(--color-coral)]">
                  {String(idx + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="eyebrow">{p.title}</p>
                <p className="mt-4 text-2xl font-bold leading-[1.2] text-[color:var(--color-navy)]">
                  {p.lede}
                </p>
              </div>

              <p className="lg:col-span-5 lg:col-start-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                {p.detail}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
