import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const collaborators = [
  "Founders",
  "Executives",
  "Researchers",
  "Consultants",
  "Educators",
  "Community leaders",
];

export function CredibilityStrip() {
  return (
    <section className="bg-[color:var(--color-gray-light)] py-14 border-y-2 border-[color:var(--color-gray-2)] lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionLabel>Who we connect</SectionLabel>
            <p className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.4rem,2vw,1.9rem)] leading-tight tracking-[-0.02em] text-[color:var(--color-charcoal)]">
              Chapters plug students into professionals already doing the work.
            </p>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6 sm:grid-cols-3">
              {collaborators.map((c, i) => (
                <li
                  key={c}
                  className="group flex items-baseline gap-3 py-2 text-[color:var(--color-charcoal)]"
                >
                  <span className="font-[family-name:var(--font-mono)] text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[color:var(--color-gray-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.015em] transition-colors group-hover:text-[color:var(--color-teal)]">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-[color:var(--color-gray-muted)]">
              Partner directory coming as chapters launch. No fake logos.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
