import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Leadership — featuring real people, not invented titles.
 * Starts with Hector Pham, COO.
 */
export function Leadership() {
  return (
    <section className="bg-[color:var(--color-bone)] border-t border-[color:var(--color-line)] py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="§ Team">Who's building this</SectionLabel>
            <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
              Real people, real titles.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-7 flex flex-col gap-12">
            <article className="flex flex-col gap-6 border-b border-[color:var(--color-line)] pb-10">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="relative w-32 h-32 overflow-hidden bg-[color:var(--color-paper)] border border-[color:var(--color-line)]">
                    <Image
                      src="/team/hector.webp"
                      alt="Hector Pham"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-signal)]">
                    COO & Board Member
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-serif)] text-3xl leading-[1.1] text-[color:var(--color-ink)]">
                    Hector Pham
                  </h3>
                  <p className="mt-3 text-base leading-[1.65] text-[color:var(--color-ink-2)]">
                    Founding leader bringing Amplify HQ from New York to Texas. Driving the vision forward across all founding chapters.
                  </p>
                </div>
              </div>
            </article>

            <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
              More team members and board details coming as chapters launch.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
