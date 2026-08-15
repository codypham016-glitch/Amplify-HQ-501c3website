import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { BackToHome } from "@/components/layout/BackToHome";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Meet the team",
  description:
    "The people building Amplify HQ. A student-led nonprofit exploring the intersection of business and psychology.",
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

const team: TeamMember[] = [
  {
    name: "Hector Pham",
    role: "COO & Board Member",
    photo: "/team/hector.webp",
    bio: "Founding leader bringing Amplify HQ from New York to Texas. Driving the organization's expansion across founding chapters and shaping the operational vision.",
  },
];

export default function TeamPage() {
  return (
    <>
      <BackToHome />
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionLabel>Meet the team</SectionLabel>
              <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
                The people building Amplify.
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                Amplify HQ is student-led — every officer, every board member, every chapter lead. The team below is the national leadership growing this from the ground up.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-[color:var(--color-line)] py-20 lg:py-28">
        <Container>
          <div className="space-y-16">
            {team.map((m) => (
              <article
                key={m.name}
                className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <div className="relative aspect-[4/5] w-full max-w-sm bg-[color:var(--color-ivory-2)] overflow-hidden border border-[color:var(--color-line)]">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-coral)]">
                    {m.role}
                  </p>
                  <h2 className="mt-4 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
                    {m.name}
                  </h2>
                  <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                    {m.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>Join the team</SectionLabel>
            <h2 className="mt-8 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              More leadership coming.
            </h2>
            <p className="mt-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              As chapters launch, more team members will be introduced. If you&apos;re a student ready to lead, this is the time.
            </p>
            <div className="mt-10">
              <Button href="/start-a-chapter#apply" size="lg">
                Apply to lead a chapter
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
