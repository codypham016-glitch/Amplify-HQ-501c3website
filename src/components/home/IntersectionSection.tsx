import { Container } from "@/components/layout/Container";
import { Intersection } from "@/components/brand/Intersection";

const businessTerms = ["Marketing", "Leadership", "Products", "Markets", "Entrepreneurship"];
const psychologyTerms = ["Behavior", "Attention", "Motivation", "Decision-making", "Human nature"];

/**
 * Business × Psychology — visualized as two overlapping circles.
 * The overlap is Amplify. This is arguably the most important section
 * on the site.
 */
export function IntersectionSection() {
  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[color:var(--color-line)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              03 &nbsp;/&nbsp; The intersection
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Amplify lives where these meet.
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-[color:var(--color-navy-2)]">
              Most schools teach business as spreadsheets and psychology as a personality quiz. The people actually doing the work know they&apos;re one field. So do we.
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5 flex justify-center">
            <Intersection size={520} className="w-full max-w-lg" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12 border-t border-[color:var(--color-line)] pt-12">
          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy)]">
              Business
            </p>
            <ul className="mt-6 space-y-2">
              {businessTerms.map((t) => (
                <li key={t} className="text-2xl font-bold leading-[1.3] text-[color:var(--color-navy)]">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="text-6xl font-extrabold text-[color:var(--color-coral)]">×</div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-lavender-2)]">
              Psychology
            </p>
            <ul className="mt-6 space-y-2">
              {psychologyTerms.map((t) => (
                <li key={t} className="text-2xl font-bold leading-[1.3] text-[color:var(--color-navy)]">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
