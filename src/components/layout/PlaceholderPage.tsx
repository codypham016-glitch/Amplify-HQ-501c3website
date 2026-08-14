import { Container } from "./Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PlaceholderPage({ eyebrow, title, description }: PlaceholderPageProps) {
  return (
    <section className="py-24 lg:py-36 bg-white">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>{eyebrow}</SectionLabel>
          <SectionHeading as="h1" size="display" className="mt-6">
            {title}
          </SectionHeading>
          <p className="mt-8 text-lg leading-relaxed text-[color:var(--color-gray-muted)]">
            {description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/" variant="secondary">Return home</Button>
            <Button href="/start-a-chapter" variant="ghost" trailing="→">
              Get involved
            </Button>
          </div>
          <div className="mt-16 inline-flex items-center gap-3 border-2 border-[color:var(--color-teal)] bg-[color:var(--color-teal)]/5 px-4 py-2 text-xs font-[family-name:var(--font-mono)] uppercase tracking-[0.16em] text-[color:var(--color-teal)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-teal)]" aria-hidden />
            Coming soon · full content launching September 2026
          </div>
        </div>
      </Container>
    </section>
  );
}
