import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { AmplifyMark } from "@/components/brand/AmplifyMark";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-32">
          {/* Left: Message + CTA */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="eyebrow">Launching September 2026</span>
            </div>

            <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold text-[length:var(--text-hero)] leading-[0.95] tracking-[-0.035em] text-[color:var(--color-charcoal)] uppercase">
              Business
              <br />
              <span className="text-[color:var(--color-teal)]">×</span>
              <br />
              Psychology
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[color:var(--color-gray-muted)]">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/start-a-chapter" size="lg" trailing="→">
                Become a Chapter Lead
              </Button>
              <Button href="/partners" variant="secondary" size="lg">
                Partner with us
              </Button>
            </div>

            <p className="mt-6 text-sm text-[color:var(--color-gray-muted)]">
              Recruiting cold. All roles open.
            </p>
          </div>

          {/* Right: Visual + Key metrics */}
          <div className="flex flex-col justify-center gap-12">
            <div className="flex h-64 items-center justify-center rounded-lg bg-[color:var(--color-charcoal)] text-center">
              <div className="text-[color:var(--color-teal)]">
                <AmplifyMark size={120} tone="light" ariaHidden className="mx-auto mb-4" />
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-teal)]">
                  Think · Connect · Amplify
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t-2 border-[color:var(--color-gray-2)] pt-6">
              {[
                { label: "Chapters", value: "4 · Texas" },
                { label: "Schools", value: "Dulles, Austin, Clements, Elkins" },
                { label: "Grade", value: "9–12" },
                { label: "Model", value: "Student-led" },
              ].map((m) => (
                <div key={m.label}>
                  <dt className="eyebrow text-xs">{m.label}</dt>
                  <dd className="mt-2 font-[family-name:var(--font-display)] text-sm font-semibold text-[color:var(--color-charcoal)]">
                    {m.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
