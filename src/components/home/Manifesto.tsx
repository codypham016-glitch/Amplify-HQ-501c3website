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
              Amplify HQ is a student-led nonprofit built on a simple idea: that the most interesting questions in business aren&apos;t really about business. They&apos;re about people. Why we buy. Why we follow. Why we build things and why we abandon them. High school rarely leaves room to sit with those questions — so we made one.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[color:var(--color-line)] pt-10 sm:grid-cols-3">
              <div>
                <p className="eyebrow">Founded</p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">In New York</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">Now growing from Texas.</p>
              </div>
              <div>
                <p className="eyebrow">Structure</p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">Chapter-based</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">Every chapter run by its students.</p>
              </div>
              <div>
                <p className="eyebrow">Status</p>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">501(c)(3)</p>
                <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">Free for members. Always.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
