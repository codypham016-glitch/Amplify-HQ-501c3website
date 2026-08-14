import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { professionalRoles } from "@/lib/site";

/**
 * "The people we bring in" — replaces the sterile "collaborators grid".
 * Roles are set as flowing italic serif text like an editorial credits
 * page. No fake logos, no headshots invented from nowhere.
 */
export function ThePeople() {
  return (
    <section className="border-t border-[color:var(--color-line)] bg-[color:var(--color-bone)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="§ 04">The room</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              Who chapters bring in.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="font-[family-name:var(--font-serif)] text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.2] text-[color:var(--color-ink)]">
              {professionalRoles.map((role, i) => (
                <span key={role}>
                  <em className="not-italic text-[color:var(--color-ink)]">{role}</em>
                  {i < professionalRoles.length - 1 ? (
                    <span className="text-[color:var(--color-signal)]"> · </span>
                  ) : (
                    <span className="text-[color:var(--color-signal)]">.</span>
                  )}{" "}
                </span>
              ))}
              <span className="italic text-[color:var(--color-ink-2)]">
                People with actual answers to the questions students are trying to ask.
              </span>
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[color:var(--color-line)] pt-10 sm:grid-cols-2">
              <p className="text-base leading-[1.65] text-[color:var(--color-ink-2)]">
                Some come from local businesses. Some are alumni from partner universities. Some are professionals who remember what it was like to be seventeen and unsure whether business meant a suit or a startup or something else entirely.
              </p>
              <p className="text-base leading-[1.65] text-[color:var(--color-ink-2)]">
                Format matters. Chapters keep speaker sessions small enough that a student can ask a real question — the kind you can&apos;t ask in front of two hundred people — and get a real answer.
              </p>
            </div>

            <p className="mt-10 font-[family-name:var(--font-mono)] text-[0.75rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
              Speaker names will be published here as they confirm — no invented rosters.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
