import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Final CTA — strong bold sans closer with two clear buttons.
 */
export function FinalCTA() {
  return (
    <section className="bg-[color:var(--color-navy)] py-24 text-white lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
              The invitation
            </p>

            <h2 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-white">
              Come sit with the <span className="text-[color:var(--color-coral)]">interesting</span> questions.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-[1.65] text-white/75">
              Amplify HQ is early, on purpose. Every chapter, every partner, every project shapes what this becomes. If any of that sounds like a place you want to be, there&apos;s a door for you below.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/start-a-chapter" variant="on-dark" size="lg">
                Apply as Chapter Lead
              </Button>
              <Button href="/partners" variant="on-dark-outline" size="lg">
                Partner with us
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-white/20 flex flex-col justify-end gap-5">
            <p className="text-lg font-semibold text-white/85">
              Or write us directly.
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-lg font-bold text-white underline decoration-[color:var(--color-coral)] underline-offset-[6px] hover:decoration-[2px]"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
