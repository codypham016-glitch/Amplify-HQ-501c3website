import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

/**
 * Hero. Real logo image on the right, text-driven content on the left.
 * The logo file lives at public/amplify-logo.png.
 */
export function Hero() {
  return (
    <section className="bg-[color:var(--color-ivory)]">
      <Container>
        <div className="grid grid-cols-1 gap-16 pt-16 pb-20 lg:grid-cols-12 lg:gap-12 lg:pt-24 lg:pb-24">
          <div className="lg:col-span-7 flex flex-col">
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

          <div className="lg:col-span-5 flex items-center justify-center">
            <Image
              src="/amplify-logo.png"
              alt="Amplify HQ"
              width={480}
              height={300}
              priority
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-6 border-t border-[color:var(--color-line)] py-8 sm:grid-cols-4 lg:py-10">
          <div>
            <dt className="eyebrow">Founding</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">4 chapters</dd>
          </div>
          <div>
            <dt className="eyebrow">Location</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">Fort Bend, TX</dd>
          </div>
          <div>
            <dt className="eyebrow">Launch</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">{site.launchTerm}</dd>
          </div>
          <div>
            <dt className="eyebrow">Model</dt>
            <dd className="mt-2 text-xl font-bold text-[color:var(--color-navy)]">Student-led</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}
