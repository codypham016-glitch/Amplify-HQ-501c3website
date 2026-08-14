import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";

/**
 * "Real projects and student work" — designed as an honest placeholder.
 * When chapters run their first competitions, consulting projects, and
 * showcases, real work fills these frames. Nothing invented.
 */
const slots = [
  {
    kind: "Case competition",
    when: "Every February",
    question: "How would a team of four sharp high schoolers tackle a real business problem — in five days, with judges from the partner network?",
  },
  {
    kind: "Consulting project",
    when: "Once a term",
    question: "What does a chapter recommend when a local business hands it a positioning question, a customer segment problem, or a growth puzzle?",
  },
  {
    kind: "Year-end showcase",
    when: "Every April",
    question: "What did members build across the year — and what would they say if they had ten minutes and a room full of people to say it to?",
  },
];

export function TheWork() {
  return (
    <section className="border-t border-[color:var(--color-line)] bg-[color:var(--color-bone)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionLabel index="§ 06">The work</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              What students actually make.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
            Amplify is a program where members do things — not just discuss them. Here&apos;s what fills this section as chapters begin running their first year of programming.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          {slots.map((s, i) => (
            <article
              key={s.kind}
              className="grid grid-cols-1 gap-6 border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-8 lg:grid-cols-12 lg:gap-10 lg:p-12"
            >
              <div className="lg:col-span-1">
                <p className="font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.22em] text-[color:var(--color-stone)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-signal)]">
                  {s.kind}
                </p>
                <p className="mt-3 text-sm text-[color:var(--color-stone)]">{s.when}</p>
              </div>

              <p className="lg:col-span-7 font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2vw,1.85rem)] leading-[1.25] text-[color:var(--color-ink)]">
                {s.question}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-2xl font-[family-name:var(--font-mono)] text-[0.72rem] uppercase leading-[1.6] tracking-[0.22em] text-[color:var(--color-stone)]">
          Real project write-ups will replace these frames as chapters begin.{" "}
          <Link href="/blog" className="underline decoration-[color:var(--color-signal)] underline-offset-4 hover:text-[color:var(--color-ink)]">
            Follow the blog →
          </Link>
        </p>
      </Container>
    </section>
  );
}
