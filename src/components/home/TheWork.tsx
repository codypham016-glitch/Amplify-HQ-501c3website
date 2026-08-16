import { Container } from "@/components/layout/Container";
import { SignalDivider } from "@/components/brand/SignalDivider";
import Link from "next/link";

const workTypes = [
  {
    kind: "Case competition",
    when: "Every February",
    detail:
      "Teams of four take on a real business problem in five days, defending a recommendation in front of judges from the partner network.",
  },
  {
    kind: "Consulting project",
    when: "Once a term",
    detail:
      "Chapters answer a real question for a local business — a positioning challenge, a customer segment problem, a growth puzzle.",
  },
  {
    kind: "Year-end showcase",
    when: "Every April",
    detail:
      "Members present the year's projects in front of a room. Ten minutes each. Real audience.",
  },
];

/**
 * The Work — what members actually make. Honest placeholder frames now;
 * these convert to real case studies as chapters run.
 */
export function TheWork() {
  return (
    <section className="bg-[color:var(--color-ivory)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              The work
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              What members actually do
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 lg:mt-10 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            Amplify is a program where members build things — not just discuss them. Here&apos;s what fills this section as chapters run their first year of programming.
          </p>
        </div>

        <ol className="mt-16 border-t border-[color:var(--color-navy)]">
          {workTypes.map((w, i) => (
            <li
              key={w.kind}
              className="grid grid-cols-12 gap-4 border-b border-[color:var(--color-line-2)] py-10 lg:py-12"
            >
              <span className="col-span-2 text-4xl font-extrabold leading-none text-[color:var(--color-coral)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="col-span-10 lg:col-span-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
                  {w.kind}
                </p>
                <p className="mt-3 text-xl font-bold text-[color:var(--color-navy)]">{w.when}</p>
              </div>
              <p className="col-span-12 lg:col-span-6 text-lg leading-[1.6] text-[color:var(--color-navy-2)]">
                {w.detail}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
          Real project write-ups replace these frames as chapters begin.{" "}
          <Link
            href="/blog"
            className="text-[color:var(--color-navy)] underline decoration-[color:var(--color-coral)] underline-offset-4 hover:decoration-2"
          >
            Follow the blog →
          </Link>
        </p>
      </Container>
    </section>
  );
}
