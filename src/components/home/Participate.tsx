import { Container } from "@/components/layout/Container";
import { audiences } from "@/lib/site";
import Link from "next/link";

/**
 * Get involved — one row per audience, coral accent only.
 */
export function Participate() {
  return (
    <section className="bg-[color:var(--color-ivory)] py-24 lg:py-32 border-t border-[color:var(--color-line)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              Get involved
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              A place in this for you.
            </h2>
          </div>

          <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            Amplify runs on people showing up. An hour, an afternoon, a project, a year. Find yours below.
          </p>
        </div>

        <ol className="mt-14 border-t border-[color:var(--color-line)]">
          {audiences.map((a, i) => (
            <li
              key={a.label}
              className="group relative grid grid-cols-1 gap-4 border-b border-[color:var(--color-line)] py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              <span
                className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 bg-[color:var(--color-coral)]"
                aria-hidden
              />

              <div className="lg:col-span-3 pl-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[color:var(--color-coral)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">
                  {a.label}
                </p>
              </div>

              <p className="lg:col-span-6 pl-4 lg:pl-0 text-[clamp(1.2rem,1.9vw,1.6rem)] font-semibold leading-[1.25] text-[color:var(--color-navy)]">
                {a.question}
              </p>

              <div className="lg:col-span-3 pl-4 lg:pl-0 lg:justify-self-end lg:self-center">
                <Link
                  href={a.href}
                  className="group/link inline-flex items-center gap-2 text-base font-semibold underline decoration-[color:var(--color-coral)] decoration-[2px] underline-offset-[6px] hover:decoration-[3px]"
                >
                  {a.cta}
                  <span aria-hidden className="transition-transform group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
