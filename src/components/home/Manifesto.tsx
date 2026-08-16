import { Container } from "@/components/layout/Container";

/**
 * Homepage mission — a single section combining the mission statement
 * and the "what we do" description.
 */
export function Manifesto() {
  return (
    <section className="bg-[color:var(--color-ivory)] py-24 lg:py-32 border-t border-[color:var(--color-line)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              Our mission
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Why Amplify exists
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-lg leading-[1.7] text-[color:var(--color-navy-2)]">
              Amplify HQ helps high school students explore the intersection of business and psychology through workshops, real projects, and conversations with the people actually doing the work.
            </p>
            <p className="text-lg leading-[1.7] text-[color:var(--color-navy-2)]">
              Amplify HQ is a 501(c)(3) nonprofit founded in 2026 and headquartered in Houston, TX. Each chapter is run entirely by its own students. Through guest speakers, community events, and internship and volunteer opportunities, we build a community of people curious about behavioral science, the brain, and how these fields connect to the business world.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
