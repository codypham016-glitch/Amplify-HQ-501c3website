"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { AmplifyMark } from "@/components/brand/AmplifyMark";
import { Button } from "@/components/ui/Button";
import { openingQuestions, site } from "@/lib/site";

/**
 * Hero — big bold sans hierarchy. Curiosity question rotates below the
 * BUSINESS × PSYCHOLOGY eyebrow.
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
    <section className="relative bg-[color:var(--color-ivory)]">
      <Container>
        <div className="grid grid-cols-1 gap-12 pt-16 pb-24 lg:grid-cols-12 lg:gap-10 lg:pt-24 lg:pb-32">
          {/* Left */}
          <div className="lg:col-span-8 flex flex-col">
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-coral)]">
              Business × Psychology
            </p>

            <h1
              key={i}
              className="mt-8 text-[length:var(--text-hero)] font-extrabold leading-[1.02] tracking-[-0.025em] text-[color:var(--color-navy)] fade-up"
            >
              {openingQuestions[i]}
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
              Amplify HQ gives high school students a place to explore business, psychology, and human behavior alongside the people actually doing the work.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/about" size="lg">Explore Amplify</Button>
              <Button href="/start-a-chapter" size="lg" variant="secondary">
                Start a Chapter
              </Button>
            </div>

            <div aria-hidden className="mt-10 flex items-center gap-2">
              {openingQuestions.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-[2px] w-6 transition-colors duration-500 ${
                    idx === i ? "bg-[color:var(--color-coral)]" : "bg-[color:var(--color-line-2)]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-4 lg:pl-10 lg:border-l lg:border-[color:var(--color-line)] flex flex-col justify-between gap-12">
            <div className="flex items-center justify-center h-56 bg-[color:var(--color-lavender-tint)] rounded-md">
              <AmplifyMark size={150} tone="dark" ariaHidden />
            </div>

            <div>
              <p className="eyebrow">The mission</p>
              <p className="mt-4 text-xl font-semibold leading-[1.35] text-[color:var(--color-navy)]">
                Business is a field about numbers. It&apos;s also a field about people.{" "}
                <span className="text-[color:var(--color-coral)]">Amplify treats it as both.</span>
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-6 border-t border-[color:var(--color-line)] pt-6 text-sm">
              <div>
                <dt className="eyebrow">Founding</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">4 chapters</dd>
              </div>
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">Fort Bend, TX</dd>
              </div>
              <div>
                <dt className="eyebrow">Launch</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">{site.launchTerm}</dd>
              </div>
              <div>
                <dt className="eyebrow">Model</dt>
                <dd className="mt-2 text-lg font-bold text-[color:var(--color-navy)]">Student-led</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
