import { Container } from "@/components/layout/Container";

/**
 * Homepage mission + who-we-are. Two clear blocks side by side,
 * lots of whitespace, no cards.
 */
export function Manifesto() {
  return (
    <section className="bg-[color:var(--color-ivory)] py-24 lg:py-32 border-t border-[color:var(--color-line)]">
      <Container>
        {/* Mission */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-20 border-b border-[color:var(--color-line)]">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              Our mission
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Why Amplify exists
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-[1.7] text-[color:var(--color-navy-2)]">
              Amplify HQ helps high school students explore the intersection of business and psychology through workshops, real projects, and conversations with the people actually doing the work.
            </p>
          </div>
        </div>

        {/* Who we are */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pt-20">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              What we do
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Speakers, projects, community
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-[1.7] text-[color:var(--color-navy-2)]">
              Amplify HQ is a 501(c)(3) nonprofit founded in 2026 and headquartered in Houston, TX. Each chapter is run entirely by its own students. Through guest speakers, community events, and internship and volunteer opportunities, we build a community of people curious about behavioral science, the brain, and how these fields connect to the business world.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
