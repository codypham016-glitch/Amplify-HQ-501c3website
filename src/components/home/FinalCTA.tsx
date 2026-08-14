import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-[color:var(--color-charcoal)] py-28 text-white lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 bg-[color:var(--color-teal)]" aria-hidden />
              <span className="eyebrow-on-dark">Get started</span>
            </div>

            <h2 className="mt-8 font-[family-name:var(--font-display)] font-bold uppercase leading-[0.95] tracking-[-0.035em] text-white text-[length:var(--text-hero)]">
              Ready to <span className="text-[color:var(--color-teal)]">amplify</span> your school?
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/start-a-chapter" variant="on-dark" size="lg" trailing="→">
                Become a Chapter Lead
              </Button>
              <Button href="/partners" variant="on-dark-outline" size="lg">
                Partner with us
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-8 border-l-2 border-white/15 flex flex-col justify-center">
            <p className="eyebrow-on-dark mb-4">Your next step</p>
            <ul className="divide-y-2 divide-white/15 border-y-2 border-white/15">
              {[
                { role: "Student", cta: "Join a chapter", href: "/chapters" },
                { role: "Chapter leader", cta: "Submit application", href: "/start-a-chapter" },
                { role: "Professional", cta: "Become a speaker", href: "/partners" },
                { role: "Business", cta: "Host a project", href: "/partners" },
                { role: "Supporter", cta: "Make a gift", href: "/donate" },
              ].map((item) => (
                <li key={item.role} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-[family-name:var(--font-display)] font-semibold text-base text-white">
                    {item.role}
                  </span>
                  <a
                    href={item.href}
                    className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-teal)] transition-colors hover:text-[color:var(--color-teal-light)]"
                  >
                    {item.cta} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
