"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { openingQuestions, site } from "@/lib/site";

/**
 * Editorial hero. The rotating italic serif question IS the identity —
 * business × psychology expressed as curiosity, not as a heading.
 * A masthead-style specimen sits on the right.
 */
export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setI((n) => (n + 1) % openingQuestions.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[color:var(--color-bone)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 pt-16 pb-24 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-32">
          {/* Left: editorial question */}
          <div className="lg:col-span-8 flex flex-col">
            <p className="eyebrow">Amplify HQ &nbsp;·&nbsp; a student-led 501(c)(3) &nbsp;·&nbsp; launching {site.launchTerm}</p>

            <h1
              key={i}
              className="mt-10 font-[family-name:var(--font-serif)] italic text-[length:var(--text-hero)] leading-[1] tracking-[-0.02em] text-[color:var(--color-ink)] fade-up"
            >
              {openingQuestions[i]}
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-ink-2)]">
              Amplify HQ gives high schoolers a place to sit with questions like that — with professionals doing the work, businesses solving real problems, and other students who care about the same things.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/chapters"
                className="group inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-signal)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[2px]"
              >
                Find your chapter
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/start-a-chapter"
                className="group inline-flex items-center gap-2 text-base underline decoration-[color:var(--color-ink)] decoration-[1.5px] underline-offset-[6px] hover:decoration-[color:var(--color-signal)]"
              >
                Bring Amplify to your school
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div
              aria-hidden
              className="mt-10 flex items-center gap-2"
            >
              {openingQuestions.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-[2px] w-6 transition-colors duration-500 ${
                    idx === i ? "bg-[color:var(--color-signal)]" : "bg-[color:var(--color-line)]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: editorial specimen — masthead-style */}
          <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-[color:var(--color-line)] flex flex-col justify-between gap-10">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--color-stone)]">
                No. 01 &nbsp;/&nbsp; The founding year
              </p>

              <p className="mt-6 font-[family-name:var(--font-serif)] text-3xl leading-[1.15] text-[color:var(--color-ink)]">
                Business is a field about numbers. It&apos;s also a field about people.
                <span className="text-[color:var(--color-signal)]"> Amplify treats it as both.</span>
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-6 border-t border-[color:var(--color-line)] pt-6 text-sm">
              <div>
                <dt className="eyebrow">Founding</dt>
                <dd className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-ink)]">4 chapters</dd>
              </div>
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-ink)]">Fort Bend, TX</dd>
              </div>
              <div>
                <dt className="eyebrow">Grades</dt>
                <dd className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-ink)]">9 — 12</dd>
              </div>
              <div>
                <dt className="eyebrow">Model</dt>
                <dd className="mt-2 font-[family-name:var(--font-serif)] text-xl text-[color:var(--color-ink)]">Student-led</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
