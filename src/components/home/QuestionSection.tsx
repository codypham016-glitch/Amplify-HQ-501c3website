import { Container } from "@/components/layout/Container";
import { NeuralNet } from "@/components/brand/NeuralNet";
import { SignalDivider } from "@/components/brand/SignalDivider";

/**
 * Large-typography questions. No cards. Neural motif in the margin,
 * signal divider between rows. Each question has room to breathe.
 */
const questions = [
  "Why do people buy?",
  "Why do people follow?",
  "Why do people remember?",
  "Why do people change their minds?",
];

export function QuestionSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* faint neural net anchored top-left */}
      <div className="pointer-events-none absolute -top-8 -left-16 opacity-25">
        <NeuralNet size={280} color="#17233C" density="medium" />
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 relative z-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              01 &nbsp;/&nbsp; The questions
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Amplify starts here.
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-[color:var(--color-navy-2)]">
              Everything we teach begins with a real question about how people work — the kind most classrooms don&apos;t leave room for.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 relative z-10">
            <ol className="divide-y divide-[color:var(--color-line)]">
              {questions.map((q, i) => (
                <li key={q} className="grid grid-cols-12 items-baseline gap-4 py-8 lg:py-10">
                  <span className="col-span-2 text-[color:var(--color-coral)] font-extrabold text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="col-span-10 text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                    {q}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 text-[color:var(--color-navy)]">
          <SignalDivider variant="nodes" color="currentColor" height={40} />
        </div>
      </Container>
    </section>
  );
}
