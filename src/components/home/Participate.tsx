import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { audiences } from "@/lib/site";
import Link from "next/link";

/**
 * Ways to participate — one row per audience.
 */
export function Participate() {
  return (
    <section className="bg-[color:var(--color-lavender-tint)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel>Where you fit</SectionLabel>
            <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              A place in this for you.
            </h2>
          </div>

          <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            Amplify runs on people showing up — an hour, an afternoon, a project, a year. Find yours below.
          </p>
        </div>

        <ol className="mt-14 border-t border-[color:var(--color-navy)]/20">
          {audiences.map((a, i) => (
            <li
              key={a.label}
              className="grid grid-cols-1 gap-4 border-b border-[color:var(--color-navy)]/15 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10"
            >
              <div className="lg:col-span-3">
                <p className="eyebrow">
                  {String(i + 1).padStart(2, "0")} &nbsp;/&nbsp; {a.label}
                </p>
              </div>

              <p className="lg:col-span-6 text-[clamp(1.2rem,1.9vw,1.6rem)] font-semibold leading-[1.25] text-[color:var(--color-navy)]">
                {a.question}
              </p>

              <div className="lg:col-span-3 lg:justify-self-end lg:self-center">
                <Link
                  href={a.href}
                  className="group inline-flex items-center gap-2 text-base font-semibold underline decoration-[color:var(--color-coral)] decoration-[2px] underline-offset-[6px] hover:decoration-[3px]"
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
