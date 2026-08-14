import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChapterLeadForm } from "@/components/forms/ChapterLeadForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description:
    "Bring Amplify HQ to your high school. Apply to become a Chapter Lead — no prior business experience required.",
};

const steps = [
  {
    index: "01",
    title: "Submit your interest",
    detail:
      "The application below. About ten minutes. Asks what you'd actually do with a chapter.",
  },
  {
    index: "02",
    title: "Meet with Amplify HQ",
    detail:
      "A short call with national leadership — a conversation, not an interview.",
  },
  {
    index: "03",
    title: "Onboard",
    detail:
      "Welcome materials, chapter guidelines, and the full program calendar with workshop resources.",
  },
  {
    index: "04",
    title: "Build your team",
    detail:
      "Recruit a vice president, secretary, social media chairs, and events chairs from your school.",
  },
  {
    index: "05",
    title: "Recruit members",
    detail:
      "Open enrollment on your campus, with recruitment materials from the national team.",
  },
  {
    index: "06",
    title: "Launch",
    detail:
      "A welcome meeting, then your first workshop — with national support behind you.",
  },
];

export default function StartAChapterPage() {
  return (
    <>
      <section className="py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Start a chapter</SectionLabel>
              <h1 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-hero)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
                Bring Amplify HQ
                <br />
                <em className="text-[color:var(--color-ink-2)]">to your school.</em>
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                Chapter Leads are students who want to build something real on their own campus. You don&apos;t need prior business experience — the national team provides the program, the materials, and the support. You bring your school.
              </p>
            </div>

            <dl className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-[color:var(--color-line)] grid grid-cols-1 gap-6 self-end">
              <div>
                <dt className="eyebrow">Launching</dt>
                <dd className="mt-2 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">{site.launchTerm}</dd>
              </div>
              <div>
                <dt className="eyebrow">Time to apply</dt>
                <dd className="mt-2 font-[family-name:var(--font-serif)] text-2xl text-[color:var(--color-ink)]">~10 minutes</dd>
              </div>
              <div>
                <dt className="eyebrow">Experience</dt>
                <dd className="mt-2 font-[family-name:var(--font-serif)] text-2xl italic text-[color:var(--color-ink)]">Not required</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-ink)] py-24 text-[color:var(--color-bone)] lg:py-28">
        <Container>
          <SectionLabel tone="dark">How it works</SectionLabel>
          <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.index}
                className="flex flex-col gap-4 border-t border-[color:var(--color-bone)]/20 py-8 lg:py-10"
              >
                <p className="font-[family-name:var(--font-serif)] italic text-4xl text-[color:var(--color-signal-tint)]">
                  {s.index}
                </p>
                <h2 className="font-[family-name:var(--font-serif)] text-2xl leading-[1.15] text-[color:var(--color-bone)]">
                  {s.title}
                </h2>
                <p className="text-sm leading-[1.65] text-[color:var(--color-bone)]/70">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="apply" className="bg-[color:var(--color-bone-2)] py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>The application</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
                Read by a person. Answered by one.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                Submitting doesn&apos;t commit you to anything — the next step is a conversation.
              </p>
              <p className="mt-6 text-sm text-[color:var(--color-ink-2)]">
                Questions first? Email{" "}
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-[color:var(--color-ink)] underline decoration-[color:var(--color-signal)] underline-offset-4"
                >
                  {site.contactEmail}
                </a>
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <ChapterLeadForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
