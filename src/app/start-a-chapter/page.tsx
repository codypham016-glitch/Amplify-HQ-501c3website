import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BackToHome } from "@/components/layout/BackToHome";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ChapterLeadForm } from "@/components/forms/ChapterLeadForm";
import { site, chapterLeadAreas, chapterRoles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description:
    "Bring Amplify HQ to your high school. Apply to become a Chapter Lead. No prior business experience required.",
};

const onboardingSteps = [
  {
    index: "01",
    title: "Submit your interest",
    detail: "The application below. About ten minutes.",
  },
  {
    index: "02",
    title: "Introductory call",
    detail: "A short call with Amplify leadership. A conversation, not an interview.",
  },
  {
    index: "03",
    title: "Welcome & onboarding",
    detail: "Welcome message, onboarding docs, and access to the Amplify Master Sheet.",
  },
  {
    index: "04",
    title: "Join the national board chat",
    detail: "You're added to the group where chapter leads coordinate and plan together.",
  },
  {
    index: "05",
    title: "Build your local board",
    detail:
      "Recruit 1 to 2 Chapter Leads, 1 VP, 1 Secretary, 2 Social Media Chairs, and 2 Events Chairs.",
  },
  {
    index: "06",
    title: "Launch your first event",
    detail: "A webinar, guest speaker, fundraiser, case competition, or anything else.",
  },
  {
    index: "07",
    title: "Ongoing check-ins",
    detail: "One-week check-in, then continuous updates about national-level events.",
  },
];

export default function StartAChapterPage() {
  return (
    <>
      <BackToHome />

      {/* Big prominent apply CTA at the top */}
      <section className="bg-[color:var(--color-coral)] py-14 text-white lg:py-16">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/85">
                Ready right now?
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
                Bring Amplify to your school.
              </h2>
              <p className="mt-4 text-base text-white/90 lg:text-lg">
                Skip the details. Click below to apply.
              </p>
            </div>
            <Link
              href="#apply"
              className="inline-flex items-center justify-center gap-3 bg-white px-10 py-5 text-lg font-extrabold uppercase tracking-[0.06em] text-[color:var(--color-coral)] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Click here to apply <span aria-hidden>→</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Start a chapter</SectionLabel>
              <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
                What being a Chapter Lead looks like.
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                Chapter Leads are students who want to build something real on their own campus. You don&apos;t need prior business experience. The national team provides the program, the materials, and the support. You bring your school.
              </p>
            </div>

            <dl className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-[color:var(--color-line)] grid grid-cols-1 gap-6 self-end">
              <div>
                <dt className="eyebrow">Launching</dt>
                <dd className="mt-2 text-2xl font-bold text-[color:var(--color-navy)]">{site.launchTerm}</dd>
              </div>
              <div>
                <dt className="eyebrow">Time to apply</dt>
                <dd className="mt-2 text-2xl font-bold text-[color:var(--color-navy)]">~10 minutes</dd>
              </div>
              <div>
                <dt className="eyebrow">Experience</dt>
                <dd className="mt-2 text-2xl font-bold text-[color:var(--color-navy)]">Not required</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-[color:var(--color-line)] py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>What you&apos;ll do</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                Four areas of impact.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                Chapter Leads shape their community around four core responsibilities. The actual work of building a chapter that lasts.
              </p>
            </div>

            <ol className="lg:col-span-7 lg:col-start-6">
              {chapterLeadAreas.map((area, i) => (
                <li
                  key={area.title}
                  className="grid grid-cols-12 gap-4 border-t border-[color:var(--color-line)] py-8 last:border-b lg:py-10"
                >
                  <span className="col-span-2 text-4xl font-extrabold leading-none text-[color:var(--color-coral)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-10">
                    <h3 className="text-[clamp(1.25rem,1.9vw,1.6rem)] font-bold leading-[1.25] text-[color:var(--color-navy)]">
                      {area.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {area.actions.map((a) => (
                        <li key={a} className="flex gap-3 text-base leading-[1.6] text-[color:var(--color-navy-2)]">
                          <span className="text-[color:var(--color-coral)] shrink-0 font-bold">→</span>
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

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>Your local team</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                Who runs a chapter.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                You&apos;ll recruit these roles from your own campus. Students passionate about behavioral science and business, ready to build something new.
              </p>
            </div>

            <ul className="lg:col-span-6 lg:col-start-7 border-t border-[color:var(--color-navy)]">
              {chapterRoles.map((role, i) => (
                <li
                  key={role}
                  className="grid grid-cols-12 items-baseline gap-4 border-b border-[color:var(--color-line)] py-6"
                >
                  <span className="col-span-2 text-[0.72rem] font-semibold tracking-[0.14em] text-[color:var(--color-navy-3)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 text-xl font-semibold leading-[1.2] text-[color:var(--color-navy)]">
                    {role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-navy)] py-24 text-white lg:py-28">
        <Container>
          <SectionLabel tone="dark">Onboarding, in seven steps</SectionLabel>
          <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
            {onboardingSteps.map((s) => (
              <li
                key={s.index}
                className="flex flex-col gap-4 border-t border-white/20 py-8 lg:py-10"
              >
                <p className="text-4xl font-extrabold text-[color:var(--color-coral)]">{s.index}</p>
                <h2 className="text-xl font-bold leading-[1.2] text-white">{s.title}</h2>
                <p className="text-sm leading-[1.65] text-white/70">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="apply" className="bg-[color:var(--color-ivory-2)] py-24 lg:py-32 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionLabel>The application</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                Read by a person. Answered by one.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                Submitting doesn&apos;t commit you to anything. The next step is a conversation.
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
