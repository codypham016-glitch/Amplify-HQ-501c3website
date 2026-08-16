import { Container } from "@/components/layout/Container";
import { NeuralNet } from "@/components/brand/NeuralNet";
import { SignalDivider } from "@/components/brand/SignalDivider";
import { pillars } from "@/lib/site";

/**
 * Learn → Connect → Build. Each pillar renders a different brand motif
 * to match its meaning. Connected by signal dividers to imply journey.
 */

function LearnMotif() {
  return <NeuralNet size={140} color="#17233C" nodeColor="#F26B4F" density="medium" />;
}

function ConnectMotif() {
  // three pairs of connected people (dots) with links between them
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" aria-hidden>
      <g stroke="#17233C" strokeWidth="1" opacity="0.5" fill="none">
        <path d="M 40 60 Q 100 40 160 60" />
        <path d="M 40 100 Q 100 130 160 100" />
        <path d="M 40 140 L 160 140" />
        <path d="M 40 60 L 40 140" />
        <path d="M 160 60 L 160 140" />
        <path d="M 100 40 L 100 130" strokeDasharray="2 4" />
      </g>
      <g fill="#F26B4F">
        <circle cx="40" cy="60" r="6" />
        <circle cx="160" cy="60" r="6" />
      </g>
      <g fill="#B9A7E8">
        <circle cx="40" cy="100" r="6" />
        <circle cx="160" cy="100" r="6" />
      </g>
      <g fill="#8299D6">
        <circle cx="40" cy="140" r="6" />
        <circle cx="160" cy="140" r="6" />
      </g>
      <circle cx="100" cy="100" r="7" fill="#17233C" />
    </svg>
  );
}

function BuildMotif() {
  // ascending trajectory made of connected nodes — like a graph or timeline
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" aria-hidden>
      <g stroke="#17233C" strokeWidth="1" opacity="0.4">
        <line x1="30" y1="170" x2="180" y2="170" />
        <line x1="30" y1="170" x2="30" y2="30" />
      </g>
      <path
        d="M 30 160 L 70 130 L 100 110 L 135 70 L 175 30"
        fill="none"
        stroke="#17233C"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <g>
        <circle cx="30" cy="160" r="5" fill="#8299D6" />
        <circle cx="70" cy="130" r="5" fill="#B9A7E8" />
        <circle cx="100" cy="110" r="5" fill="#17233C" />
        <circle cx="135" cy="70" r="6" fill="#F26B4F" />
        <circle cx="175" cy="30" r="7" fill="#F26B4F" />
      </g>
    </svg>
  );
}

const motifs = [LearnMotif, ConnectMotif, BuildMotif];

export function WhatWeDo() {
  return (
    <section className="bg-[color:var(--color-ivory)] py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-3)]">
              The experience
            </p>
            <h2 className="mt-6 text-[length:var(--text-display)] font-bold leading-[1.05] tracking-[-0.02em] text-[color:var(--color-navy)]">
              Learn. Connect. Build.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 lg:mt-14 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
            Every chapter runs on the same rhythm — a workshop, a conversation, a project — repeated across eight months.
          </p>
        </div>

        <ol className="mt-16">
          {pillars.map((p, idx) => {
            const Motif = motifs[idx] ?? LearnMotif;
            return (
              <li key={p.index}>
                <div className="grid grid-cols-1 gap-8 border-t border-[color:var(--color-line)] py-12 lg:grid-cols-12 lg:gap-10 lg:py-14">
                  <div className="lg:col-span-2 flex flex-col items-start gap-4">
                    <p className="text-5xl font-extrabold leading-none text-[color:var(--color-coral)]">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <Motif />
                  </div>

                  <div className="lg:col-span-4">
                    <p className="eyebrow">{p.title}</p>
                    <p className="mt-4 text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-[1.2] text-[color:var(--color-navy)]">
                      {p.lede}
                    </p>
                  </div>

                  <p className="lg:col-span-5 lg:col-start-8 text-lg leading-[1.65] text-[color:var(--color-navy-2)]">
                    {p.detail}
                  </p>
                </div>

                {idx < pillars.length - 1 && (
                  <div className="text-[color:var(--color-coral)] my-2">
                    <SignalDivider variant="expand" color="currentColor" height={40} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
