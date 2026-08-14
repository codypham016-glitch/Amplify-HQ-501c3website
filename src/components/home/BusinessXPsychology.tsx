import { Container } from "@/components/layout/Container";
import { NeuralNetwork } from "@/components/brand/NeuralNetwork";
import { businessXPsychology } from "@/lib/site";

export function BusinessXPsychology() {
  const concepts = businessXPsychology.map((item) => item.title);

  return (
    <section className="relative bg-[color:var(--color-charcoal)] py-28 text-white lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: The intersection */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow-on-dark mb-4">The core concept</p>
            <h2 className="font-[family-name:var(--font-display)] font-bold uppercase leading-[0.9] tracking-[-0.035em] text-white text-[length:var(--text-display)]">
              Business
              <br />
              <span className="inline-block text-[length:clamp(3rem,8vw,6rem)] text-[color:var(--color-teal)] font-light my-2">
                ×
              </span>
              <br />
              Psychology
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 lg:text-lg">
              Most programs separate them. We teach them as one field — showing students how human behavior shapes business decisions, marketing, products, and leadership.
            </p>
          </div>

          {/* Right: Neural network showing intersections */}
          <div className="flex flex-col items-center justify-center">
            <NeuralNetwork
              nodes={concepts}
              size={360}
              tone="light"
              className="w-full max-w-sm"
            />
            <p className="mt-8 text-center text-xs text-white/60 font-[family-name:var(--font-mono)] uppercase tracking-[0.16em]">
              Seven intersection points of study
            </p>
          </div>
        </div>

        {/* Grid of concepts */}
        <div className="mt-16 border-t-2 border-white/10 pt-12">
          <p className="eyebrow-on-dark mb-8">What students learn</p>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businessXPsychology.map((item, i) => (
              <li key={item.title} className="group">
                <div className="flex items-start gap-3">
                  <span className="text-[color:var(--color-teal)] font-[family-name:var(--font-mono)] text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
