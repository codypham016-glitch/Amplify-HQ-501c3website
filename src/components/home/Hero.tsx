import { Container } from "@/components/layout/Container";
import { AmplifyMark } from "@/components/brand/AmplifyMark";
import { SignalWaves } from "@/components/brand/SignalWaves";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Hero. One clear question, AmplifyMark on the right. Signal ripples
 * radiate outward like sound waves (not clock hands).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-ivory)]">
      <div className="pointer-events-none absolute top-6 right-0 opacity-70 lg:opacity-80">
        <SignalWaves size={300} animate />
      </div>

      <Container>
        <div className="relative grid grid-cols-1 gap-12 pt-16 pb-24 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-32">
          <div className="lg:col-span-8 flex flex-col relative z-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-coral)]">
              Business <span className="text-[color:var(--color-navy-3)]">×</span> Psychology
            </p>

            <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
              What makes people choose?
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-[1.6] text-[color:var(--color-navy-2)]">
              Amplify HQ gives high school students a place to explore business, psychology, and human behavior alongside the people actually doing the work.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/about" size="lg">Explore Amplify</Button>
              <Button href="/start-a-chapter#apply" size="lg" variant="secondary">
                Start a Chapter
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 relative flex flex-col justify-center gap-10">
            <div className="flex items-center justify-center py-8">
              <AmplifyMark size={220} tone="dark" ariaHidden />
            </div>

            <div className="border-t border-[color:var(--color-line)] pt-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
                The mission
              </p>
              <p className="mt-3 text-xl font-bold leading-[1.3] text-[color:var(--color-navy)]">
                Business minds. <span className="text-[color:var(--color-coral)]">Human impact.</span>
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-5 text-sm">
              <div>
                <dt className="eyebrow">Founding</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">4 chapters</dd>
              </div>
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">Fort Bend, TX</dd>
              </div>
              <div>
                <dt className="eyebrow">Launch</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">{site.launchTerm}</dd>
              </div>
              <div>
                <dt className="eyebrow">Model</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">Student-led</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
