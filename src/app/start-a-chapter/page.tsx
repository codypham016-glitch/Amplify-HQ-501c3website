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
      "The application below. It takes about ten minutes and asks what you'd actually do with a chapter.",
  },
  {
    index: "02",
    title: "Meet with Amplify HQ",
    detail:
      "A short introductory call with national leadership — a conversation, not an interrogation.",
  },
  {
    index: "03",
    title: "Complete onboarding",
    detail:
      "Welcome materials, chapter guidelines, and the full program calendar with workshop resources.",
  },
  {
    index: "04",
    title: "Build your leadership team",
    detail:
      "Recruit a vice president, secretary, social media chairs, and events chairs from your school.",
  },
  {
    index: "05",
    title: "Recruit your members",
    detail:
      "Open enrollment on your campus, with recruitment materials from the national team.",
  },
  {
    index: "06",
    title: "Launch your first event",
    detail:
      "A welcome meeting, then your first workshop — with national support behind you.",
  },
];

export default function StartAChapterPage() {
  return (
    <>
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Start a chapter</SectionLabel>
              <h1 className="mt-6 font-[family-name:var(--font-display)] font-bold uppercase text-[length:var(--text-display)] leading-[0.95] tracking-[-0.03em] text-[color:var(--color-charcoal)]">
                Bring Amplify HQ
                <br />
                <span className="text-[color:var(--color-gray-muted)]">to your school.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-gray-muted)]">
                Chapter Leads are students who want to build something real on
                their own campus. You don&apos;t need prior business experience —
                the national team provides the program, the materials, and the
                support. You bring your school.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex items-end">
              <dl className="w-full space-y-4 border-t-2 border-[color:var(--color-charcoal)] pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="eyebrow">Launching</dt>
                  <dd className="font-[family-name:var(--font-display)] font-bold text-[color:var(--color-charcoal)]">
                    {site.launchTerm}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="eyebrow">Time to apply</dt>
                  <dd className="font-[family-name:var(--font-display)] font-bold text-[color:var(--color-charcoal)]">
                    ~10 minutes
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="eyebrow">Experience</dt>
                  <dd className="font-[family-name:var(--font-display)] font-bold text-[color:var(--color-charcoal)]">
                    Not required
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-charcoal)] py-20 text-white lg:py-24">
        <Container>
          <p className="eyebrow-on-dark">How it works</p>
          <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.index}
                className="flex flex-col gap-3 border-t-2 border-white/15 py-6 lg:py-8"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--color-teal)]">
                  {s.index}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold leading-tight tracking-[-0.02em] text-white">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-white/70">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="apply" className="bg-[color:var(--color-gray-light)] py-20 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-[-0.025em] text-[color:var(--color-charcoal)]">
                The application
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-gray-muted)]">
                We read every application. Submitting doesn&apos;t commit you to
                anything — the next step is a conversation.
              </p>
              <p className="mt-6 text-sm text-[color:var(--color-gray-muted)]">
                Questions first? Email{" "}
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="font-semibold text-[color:var(--color-teal)] underline underline-offset-4"
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
