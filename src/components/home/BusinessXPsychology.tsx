import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fields } from "@/lib/site";

/**
 * The fields Amplify covers — framed as questions students want
 * answered. Navy background as an intentional dark break.
 */
export function BusinessXPsychology() {
  return (
    <section className="bg-[color:var(--color-navy)] py-24 text-white lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel tone="dark">The subject matter</SectionLabel>

            <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
              Business is a study of{" "}
              <span className="text-[color:var(--color-coral)]">people</span>{" "}
              wearing suits.
            </h2>

            <p className="mt-8 max-w-md text-lg leading-[1.65] text-white/75">
              Every field we teach is a different angle on the same question: why do humans do what they do, and how do businesses succeed or fail depending on how well they understand the answer?
            </p>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7 flex flex-col">
            {fields.map((f, i) => (
              <li
                key={f.title}
                className="grid grid-cols-12 gap-4 border-t border-white/15 py-6 last:border-b lg:py-8"
              >
                <span className="col-span-2 text-xs font-semibold tracking-[0.16em] text-white/50 pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
                    {f.title}
                  </p>
                  <p className="mt-3 text-[clamp(1.15rem,1.7vw,1.4rem)] font-semibold leading-[1.3] text-white">
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
