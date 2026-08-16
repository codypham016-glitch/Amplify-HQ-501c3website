import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ChapterGrid } from "@/components/chapters/ChapterGrid";
import { chapters, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chapters",
  description:
    "Amplify HQ's founding chapters. Six high schools launching Fall 2026.",
};

export default function ChaptersPage() {
  return (
    <>
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Chapters</SectionLabel>
              <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
                Six schools. One network.
              </h1>
            </div>
            <p className="lg:col-span-8 max-w-2xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              Amplify HQ opens in {site.launchTerm} across six high schools. Each chapter is run by its own students. Officers drawn from the campus, calendar set by the members, speakers chosen by the leads.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white border-t border-[color:var(--color-line)] pb-24 pt-16 lg:pb-32">
        <Container>
          <ChapterGrid chapters={chapters} />
        </Container>
      </section>

      <section className="bg-[color:var(--color-navy)] py-24 text-white lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel tone="dark">Expanding</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                Your school could be <span className="text-[color:var(--color-coral)]">next</span>.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-[1.65] text-white/75">
                Chapter Leads are students who want to build something real on their own campus. You don&apos;t need prior business experience. You bring the school, we bring the program.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <Button href="/start-a-chapter#apply" variant="on-dark" size="lg">
                Apply to lead
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
