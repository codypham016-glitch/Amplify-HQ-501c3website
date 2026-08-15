import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes from Amplify HQ — chapter launches, workshop recaps, and short essays on the human side of business.",
};

export default function BlogPage() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>Field notes</SectionLabel>
            <h1 className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)]">
              Writing from the <span className="text-[color:var(--color-coral)]">room</span>.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              Chapter launches, workshop recaps, speaker takeaways, and short pieces on the behavioral science behind ordinary business decisions. First posts go up as chapters begin their founding term.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-[color:var(--color-navy)] pt-12">
          <p className="eyebrow">Issue 00 &nbsp;/&nbsp; Not yet published</p>

          <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[clamp(1.35rem,2vw,1.75rem)] font-semibold leading-[1.3] text-[color:var(--color-navy)]">
                Nothing here yet — on purpose. We&apos;d rather publish one honest piece from a real chapter than fill the archive with placeholder essays that read like everything else on the internet.
              </p>
              <p className="mt-6 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                First issues will cover the founding chapters&apos; opening months. If you&apos;d like to know when they land, email us and we&apos;ll add you to the short list of people we notify.
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="eyebrow">On the docket</p>
              <ul className="mt-4 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
                {[
                  "First-chapter opening notes",
                  "Case competition recap",
                  "Speaker takeaways",
                  "A short essay on why brands stick",
                ].map((t) => (
                  <li key={t} className="py-4 text-lg font-semibold text-[color:var(--color-navy)]">
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold underline decoration-[color:var(--color-coral)] decoration-[2px] underline-offset-[6px] hover:decoration-[3px]"
              >
                Get notified <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
