import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { BackToHome } from "@/components/layout/BackToHome";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SchoolLogo } from "@/components/chapters/SchoolLogo";
import { Button } from "@/components/ui/Button";
import { chapters, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Amplify HQ. A 501(c)(3) nonprofit helping high school students explore the intersection of business and psychology.",
};

type BoardMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

const board: BoardMember[] = [
  {
    name: "Hector Pham",
    role: "COO & Board Member",
    photo: "/team/hector.webp",
    bio: "Founding leader bringing Amplify HQ from New York to Texas. Driving the organization's expansion across founding chapters and shaping the operational vision.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BackToHome />

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>About</SectionLabel>
              <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
                Who we are.
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                {site.description}
              </p>
            </div>

            <dl className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-[color:var(--color-line)] grid grid-cols-1 gap-6 self-end">
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-2 text-2xl font-bold text-[color:var(--color-navy)]">501(c)(3)</dd>
              </div>
              <div>
                <dt className="eyebrow">Launch</dt>
                <dd className="mt-2 text-2xl font-bold text-[color:var(--color-navy)]">{site.launchTerm}</dd>
              </div>
              <div>
                <dt className="eyebrow">Model</dt>
                <dd className="mt-2 text-2xl font-bold text-[color:var(--color-navy)]">Student-led</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Board members */}
      <section className="bg-white border-y border-[color:var(--color-line)] py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>Board members</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                The people building Amplify.
              </h2>
              <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                Amplify HQ is student-led. The board members below are the national leadership growing this from the ground up.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-16">
              {board.map((m) => (
                <article key={m.name} className="grid grid-cols-1 gap-8 sm:grid-cols-12 sm:gap-10">
                  <div className="sm:col-span-5">
                    <div className="relative aspect-[4/5] w-full max-w-xs bg-[color:var(--color-ivory-2)] overflow-hidden border border-[color:var(--color-line)]">
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-7 flex flex-col justify-center">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-coral)]">
                      {m.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold leading-[1.2] text-[color:var(--color-navy)]">
                      {m.name}
                    </h3>
                    <p className="mt-5 text-base leading-[1.65] text-[color:var(--color-navy-2)]">
                      {m.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Founding chapters */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel>Founding chapters</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                Where Amplify starts.
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 self-end text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              Four Fort Bend ISD high schools open Amplify chapters in {site.launchTerm}. Each chapter is run entirely by its own students.
            </p>
          </div>

          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((c, i) => (
              <li
                key={c.slug}
                className="bg-white p-8 border border-[color:var(--color-line)] hover:border-[color:var(--color-coral)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-[color:var(--color-navy-3)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <SchoolLogo chapter={c} size={72} />
                </div>
                <h3 className="mt-6 text-lg font-bold leading-[1.2] text-[color:var(--color-navy)]">
                  {c.school}
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-navy-3)]">
                  {c.city}, {c.state}
                </p>
                <p className="mt-4 pt-4 border-t border-[color:var(--color-line)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
                  Opens {site.launchTerm}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[color:var(--color-navy)] py-24 text-white lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel tone="dark">Get involved</SectionLabel>
              <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
                Your school could be <span className="text-[color:var(--color-coral)]">next</span>.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-[1.65] text-white/75">
                Chapter Leads are students who want to build something real on their own campus. You bring the school, we bring the program.
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
