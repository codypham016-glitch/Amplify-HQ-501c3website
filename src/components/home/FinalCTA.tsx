import { Container } from "@/components/layout/Container";
import { SignalWaves, SignalBand } from "@/components/brand/SignalWaves";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Final CTA — expanding signal graphics carry the eye off the page.
 * One idea → many people → many connections → the network.
 */
export function FinalCTA() {
  return (
    <section className="relative bg-[color:var(--color-navy)] pt-24 pb-16 text-white lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Expanding signal in the corner */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 opacity-60">
        <SignalWaves size={420} animate />
      </div>

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
              09 &nbsp;/&nbsp; Join Amplify
            </p>

            <h2 className="mt-8 text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[1] tracking-[-0.03em] text-white">
              Business minds.
              <br />
              <span className="text-[color:var(--color-coral)]">Human impact.</span>
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-[1.65] text-white/75">
              Amplify HQ is early, on purpose. Every chapter, every partner, every project shapes what this becomes. There&apos;s a door for you below.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/start-a-chapter" variant="on-dark" size="lg">
                Apply as Chapter Lead
              </Button>
              <Button href="/partners" variant="on-dark-outline" size="lg">
                Partner with us
              </Button>
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-white underline decoration-[color:var(--color-coral)] decoration-[2px] underline-offset-[6px] hover:decoration-[3px] px-2 py-4"
              >
                {site.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-width signal band leading into the footer */}
      <div className="relative mt-24 lg:mt-32">
        <SignalBand height={100} />
      </div>
    </section>
  );
}
