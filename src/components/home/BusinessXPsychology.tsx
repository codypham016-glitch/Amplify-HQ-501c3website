import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fields } from "@/lib/site";

/**
 * The fields Amplify covers — but framed as questions students want
 * answered, not "seven intersection points of study". Editorial index
 * layout: two-column with a leading question and hanging labels.
 */
export function BusinessXPsychology() {
  return (
    <section className="bg-[color:var(--color-moss)] py-24 text-[color:var(--color-bone)] lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="§ 05" tone="dark">The subject matter</SectionLabel>

            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-bone)]">
              Business is a study of{" "}
              <em className="text-[color:var(--color-signal-tint)]">people</em>{" "}
              wearing suits.
            </h2>

            <p className="mt-8 max-w-md text-lg leading-[1.65] text-[color:var(--color-bone)]/75">
              Every field we teach is a different angle on the same question: why do humans do what they do, and how do businesses succeed or fail depending on how well they understand the answer?
            </p>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7 flex flex-col">
            {fields.map((f, i) => (
              <li
                key={f.title}
                className="grid grid-cols-12 gap-4 border-t border-[color:var(--color-bone)]/15 py-6 last:border-b lg:py-8"
              >
                <span className="col-span-2 font-[family-name:var(--font-mono)] text-xs tracking-[0.16em] text-[color:var(--color-bone)]/50 pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10">
                  <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-signal-tint)]">
                    {f.title}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-serif)] italic text-[clamp(1.25rem,1.9vw,1.6rem)] leading-[1.25] text-[color:var(--color-bone)]">
                    {f.question}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
