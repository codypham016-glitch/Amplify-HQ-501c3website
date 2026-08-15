import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChapterLeadForm } from "@/components/forms/ChapterLeadForm";
import { site, chapterLeadAreas, chapterRoles, nationalRoles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description:
    "Bring Amplify HQ to your high school. Apply to become a Chapter Lead — no prior business experience required.",
};

const onboardingSteps = [
  {
    index: "01",
    title: "Submit your interest",
    detail:
      "The application below. About ten minutes. Asks what you'd actually do with a chapter.",
  },
  {
    index: "02",
    title: "Introductory call",
    detail:
      "A short call with Amplify leadership — a conversation, not an interview.",
  },
  {
    index: "03",
    title: "Welcome & onboarding",
    detail:
      "Welcome message, chapter lead onboarding docs, guideline docs, and access to the Amplify Master Sheet.",
  },
  {
    index: "04",
    title: "Join the national board chat",
    detail:
      "You're added to the group where chapter leads coordinate, share resources, and plan together.",
  },
  {
    index: "05",
    title: "Build your local board",
    detail:
      "Recruit 1–2 Chapter Leads, 1 VP, 1 Secretary, 2 Social Media Chairs, and 2 Events Chairs.",
  },
  {
    index: "06",
    title: "Launch your first event",
    detail:
      "A webinar, guest speaker, fundraiser, case competition, or anything else. Co-host with another chapter if you want.",
  },
  {
    index: "07",
    title: "Ongoing check-ins",
    detail:
      "One-week check-in to make sure your chapter is up and running. Continuous updates about national-level events.",
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
                Bring Amplify
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

      {/* Chapter Lead responsibilities — from official Amplify docs */}
      <section className="bg-[color:var(--color-bone-2)] py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel index="§ Role">What you'll do</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
                Four areas of impact.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                Chapter Leads shape their community around four core responsibilities — the actual work of building a chapter that lasts.
              </p>
            </div>

            <ol className="lg:col-span-7 lg:col-start-6">
              {chapterLeadAreas.map((area, i) => (
                <li
                  key={area.title}
                  className="grid grid-cols-12 gap-4 border-t border-[color:var(--color-line-2)] py-8 last:border-b lg:py-10"
                >
                  <span className="col-span-2 font-[family-name:var(--font-serif)] italic text-4xl leading-none text-[color:var(--color-signal)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="font-[family-name:var(--font-serif)] text-[clamp(1.35rem,2vw,1.75rem)] leading-[1.2] text-[color:var(--color-ink)]">
                      {area.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {area.actions.map((a) => (
                        <li key={a} className="flex gap-3 text-base leading-[1.6] text-[color:var(--color-ink-2)]">
                          <span className="text-[color:var(--color-signal)] shrink-0">→</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Your local board */}
      <section className="bg-[color:var(--color-bone)] py-24 lg:py-36">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel index="§ Board">Your local team</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
                Who runs a chapter.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                You&apos;ll recruit these roles from your own campus — students who are passionate about behavioral science and business, ready to help build something new.
              </p>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 border-t border-[color:var(--color-ink)]">
              {chapterRoles.map((role, i) => (
                <li
                  key={role}
                  className="grid grid-cols-12 items-baseline gap-4 border-b border-[color:var(--color-line)] py-6"
                >
                  <span className="col-span-2 font-[family-name:var(--font-mono)] text-[0.72rem] tracking-[0.22em] text-[color:var(--color-stone)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 font-[family-name:var(--font-serif)] text-xl leading-[1.2] text-[color:var(--color-ink)]">
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Onboarding steps */}
      <section className="bg-[color:var(--color-ink)] py-24 text-[color:var(--color-bone)] lg:py-28">
        <Container>
          <SectionLabel tone="dark">Onboarding — the seven steps</SectionLabel>
          <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {onboardingSteps.map((s) => (
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

      {/* National board opportunities */}
      <section className="bg-[color:var(--color-cream)] py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel index="§ National">Beyond your chapter</SectionLabel>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-display)] leading-[1.02] tracking-[-0.01em] text-[color:var(--color-ink)]">
                National board roles.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
                Chapter Leads with the appetite for more can take on a national role — shaping Amplify&apos;s direction across all chapters. Excellent for college admissions and real leadership experience.
              </p>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 flex flex-col gap-6">
              {nationalRoles.map((r) => (
                <li
                  key={r.title}
                  className="border-l-2 border-[color:var(--color-signal)] bg-[color:var(--color-paper)] p-8"
                >
                  <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-signal)]">
                    Board role
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-serif)] text-2xl leading-[1.2] text-[color:var(--color-ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.6] text-[color:var(--color-ink-2)]">
                    {r.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* The application form */}
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
