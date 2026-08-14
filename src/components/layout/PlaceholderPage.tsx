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
    <section className="py-28 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>{eyebrow}</SectionLabel>
            <SectionHeading as="h1" size="display" className="mt-8 text-[color:var(--color-ink)]">
              {title}
            </SectionHeading>
            <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              {description}
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button href="/" variant="link">Return home</Button>
              <Button href="/start-a-chapter" variant="link">
                Get involved →
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-[color:var(--color-line)]">
            <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
              In progress
            </p>
            <p className="mt-4 font-[family-name:var(--font-serif)] text-xl leading-[1.3] text-[color:var(--color-ink)]">
              This page is being written by a real person — not auto-generated. It goes live as the content is ready.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
