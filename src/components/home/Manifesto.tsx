import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * The "what Amplify is and why it exists" paragraph. Editorial voice.
 * Uses a drop-cap to signal essay-style content, not marketing copy.
 */
export function Manifesto() {
  return (
    <section className="border-t border-[color:var(--color-line)] bg-[color:var(--color-bone)] py-24 lg:py-36">
      <Container>
        <SectionLabel index="§ 01">What Amplify is</SectionLabel>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <p className="drop-cap font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.4vw,2.05rem)] leading-[1.35] text-[color:var(--color-ink)]">
              Amplify is an organization dedicated to helping students explore the intersection of business and psychology. Through guest speakers, community events, and internship and volunteer opportunities, we build a community of people curious about behavioral science, the brain, and how these fields connect to the business world.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[color:var(--color-line)] pt-10 sm:grid-cols-3">
              <div>
                <p className="eyebrow">Structure</p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">Chapter-based</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">Every chapter run by its own students.</p>
              </div>
              <div>
                <p className="eyebrow">Status</p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">501(c)(3)</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">Free for members. Always.</p>
              </div>
              <div>
                <p className="eyebrow">Launch</p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">Fall 2026</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">Four founding chapters in Texas.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
