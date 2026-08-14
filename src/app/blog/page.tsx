import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Field notes from Amplify HQ — chapter launches, workshop recaps, and short essays on the human side of business.",
};

export default function BlogPage() {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionLabel>Field notes</SectionLabel>
            <h1 className="mt-10 font-[family-name:var(--font-serif)] text-[length:var(--text-hero)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)]">
              Writing from the <em className="text-[color:var(--color-signal)]">room</em>.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              Chapter launches, workshop recaps, speaker takeaways, and short pieces on the behavioral science behind ordinary business decisions. First posts go up as chapters begin their founding term.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-[color:var(--color-ink)] pt-14">
          <p className="font-[family-name:var(--font-mono)] text-[0.72rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
            Issue 00 &nbsp;/&nbsp; Not yet published
          </p>

          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-[family-name:var(--font-serif)] text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.25] text-[color:var(--color-ink)]">
                Nothing here yet — on purpose. We&apos;d rather publish one honest piece from a real chapter than fill the archive with placeholder essays that read like everything else on the internet.
              </p>
              <p className="mt-6 text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
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
                  <li key={t} className="py-4 font-[family-name:var(--font-serif)] text-lg italic text-[color:var(--color-ink)]">
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[2px]"
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
