import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * What Amplify is — the official mission, delivered with clarity.
 */
export function Manifesto() {
  return (
    <section className="bg-white border-t border-[color:var(--color-line)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>What Amplify is</SectionLabel>
            <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              A community for the curious.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-2xl font-semibold leading-[1.4] text-[color:var(--color-navy)]">
              Amplify is an organization dedicated to helping students explore the intersection of business and psychology.
            </p>
            <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              Through guest speakers, community events, and internship and volunteer opportunities, we build a community of people curious about behavioral science, the brain, and how these fields connect to the business world.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[color:var(--color-line)] pt-10 sm:grid-cols-3">
              <div>
                <p className="eyebrow">Structure</p>
                <p className="mt-3 text-lg font-bold text-[color:var(--color-navy)]">Chapter-based</p>
                <p className="mt-1 text-sm text-[color:var(--color-navy-3)]">Run by its own students.</p>
              </div>
              <div>
                <p className="eyebrow">Status</p>
                <p className="mt-3 text-lg font-bold text-[color:var(--color-navy)]">501(c)(3)</p>
                <p className="mt-1 text-sm text-[color:var(--color-navy-3)]">Free for members. Always.</p>
              </div>
              <div>
                <p className="eyebrow">Launch</p>
                <p className="mt-3 text-lg font-bold text-[color:var(--color-navy)]">Fall 2026</p>
                <p className="mt-1 text-sm text-[color:var(--color-navy-3)]">Four founding chapters.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
