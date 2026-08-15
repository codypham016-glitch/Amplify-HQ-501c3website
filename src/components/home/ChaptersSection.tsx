import { Container } from "@/components/layout/Container";
import { NetworkGraph } from "@/components/brand/NetworkGraph";
import { SchoolLogo } from "@/components/chapters/SchoolLogo";
import { chapters } from "@/lib/site";
import Link from "next/link";

/**
 * Founding chapters — visualized as a network. Amplify HQ at the hub,
 * four chapters at the spokes. Real school logos anchor the roster
 * below. The dashed outer ring implies room to grow.
 */
export function ChaptersSection() {
  const nodes = chapters.map((c) => ({
    label: c.shortName,
    sublabel: `${c.city}, ${c.state}`,
  }));

  return (
    <section className="bg-white border-t border-[color:var(--color-line)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              07 &nbsp;/&nbsp; The network
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Four founding chapters.
            </h2>
            <p className="mt-6 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              Amplify opens in Fall 2026 across four Fort Bend ISD high schools. Each chapter is run entirely by its own students — a growing network of real people, in real rooms.
            </p>
          </div>

          <div className="lg:col-span-7 flex justify-center items-center">
            <NetworkGraph
              hub={{ label: "Amplify HQ" }}
              nodes={nodes}
              size={520}
              className="w-full max-w-lg"
            />
          </div>
        </div>

        {/* Chapter roster with real logos */}
        <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 border-t border-[color:var(--color-line)] pt-10">
          {chapters.map((c) => (
            <li key={c.slug} className="flex flex-col items-center gap-4 text-center">
              <SchoolLogo chapter={c} size={80} />
              <div>
                <p className="text-sm font-bold text-[color:var(--color-navy)]">{c.shortName}</p>
                <p className="mt-1 text-xs text-[color:var(--color-navy-3)]">
                  {c.city}, {c.state}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between border-t border-[color:var(--color-line)] pt-8">
          <p className="text-xl font-semibold text-[color:var(--color-navy)]">
            Your school could be next.
          </p>
          <Link
            href="/start-a-chapter"
            className="inline-flex items-center gap-2 text-base font-semibold underline decoration-[color:var(--color-coral)] decoration-[2px] underline-offset-[6px] hover:decoration-[3px]"
          >
            Start a chapter <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
