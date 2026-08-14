import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { audiences } from "@/lib/site";
import Link from "next/link";

/**
 * "Ways to participate" — one row per audience. Each row is a
 * self-contained editorial pitch: label, italic question, direct CTA.
 * No card grids; the rhythm of the rows carries the design.
 */
export function Participate() {
  return (
    <section className="bg-[color:var(--color-bone)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="§ 09">Where you fit</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              A place in this for you.
            </h2>
          </div>

          <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
            Amplify runs on people showing up in the way that fits their life — an hour, an afternoon, a project, a year. Find the shape of yours below.
          </p>
        </div>

        <ol className="mt-16 border-t border-[color:var(--color-ink)]">
          {audiences.map((a, i) => (
            <li
              key={a.label}
              className="grid grid-cols-1 gap-6 border-b border-[color:var(--color-line)] py-10 lg:grid-cols-12 lg:gap-10 lg:py-14"
            >
              <div className="lg:col-span-3">
                <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
                  {String(i + 1).padStart(2, "0")} &nbsp;/&nbsp; {a.label}
                </p>
              </div>

              <p className="lg:col-span-6 font-[family-name:var(--font-serif)] text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.2] text-[color:var(--color-ink)]">
                {a.question}
              </p>

              <div className="lg:col-span-3 lg:justify-self-end lg:self-center">
                <Link
                  href={a.href}
                  className="group inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[2px]"
                >
                  {a.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
