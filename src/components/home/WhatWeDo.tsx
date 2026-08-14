import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pillars } from "@/lib/site";

/**
 * Learn / Connect / Build — the three modes. Not three equal cards.
 * Each mode is a full-width editorial band with a large index number,
 * an italic serif question, and a supporting paragraph.
 */
export function WhatWeDo() {
  return (
    <section className="bg-[color:var(--color-bone)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="§ 03">How Amplify works</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              Three ways in.
            </h2>
          </div>
          <p className="lg:col-span-7 lg:col-start-6 self-end text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
            Every chapter runs on the same rhythm — a workshop, a conversation, a project — repeated across eight months so members build both the vocabulary and the résumé.
          </p>
        </div>

        <ol className="mt-20 space-y-0">
          {pillars.map((p, idx) => (
            <li
              key={p.index}
              className="grid grid-cols-1 gap-8 border-t border-[color:var(--color-line)] py-12 lg:grid-cols-12 lg:gap-10 lg:py-16"
            >
              <div className="lg:col-span-2">
                <p className="font-[family-name:var(--font-serif)] italic text-6xl leading-none text-[color:var(--color-signal)] lg:text-7xl">
                  {String(idx + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
                  {p.title}
                </p>
                <p className="mt-4 font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] text-[color:var(--color-ink)]">
                  {p.lede}
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                  {p.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
