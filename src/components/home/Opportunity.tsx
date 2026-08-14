import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * "The problem for students" — the gap Amplify was built to close.
 * Asymmetric two-column layout, editorial voice, no cards.
 */
export function Opportunity() {
  return (
    <section className="bg-[color:var(--color-bone-2)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index="§ 02">The gap</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              Most high schools teach business as spreadsheets and psychology as a personality quiz.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-[family-name:var(--font-serif)] text-2xl leading-[1.4] text-[color:var(--color-ink)]">
              The people who actually work in business — the ones who build the products you buy, the campaigns you remember, the companies you&apos;ve heard of — spend most of their day thinking about human behavior.
            </p>

            <p className="mt-6 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              Why did someone click. Why did they hesitate. Why did the team ship this and not that. Why did the customer stay for years and then leave in a month.
            </p>

            <p className="mt-6 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              Amplify closes that gap early — by giving students the questions, the language, and the room to ask them out loud.
            </p>

            <div className="mt-12 border-t border-[color:var(--color-line-2)] pt-8">
              <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">Who Amplify is for</p>
              <p className="mt-4 font-[family-name:var(--font-serif)] text-xl italic text-[color:var(--color-ink)]">
                The high schooler who reads the fine print. Watches ads twice. Asks why. Wants to make things people actually use.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
