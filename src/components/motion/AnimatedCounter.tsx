"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  /** The final numeric value to count up to. */
  value: number;
  /** Text shown BEFORE the number (e.g. "$"). */
  prefix?: string;
  /** Text shown AFTER the number (e.g. " chapters"). */
  suffix?: string;
  /** Milliseconds it should take from 0 to `value`. */
  duration?: number;
};

/**
 * Counts from 0 to `value` when it first scrolls into view. Static
 * (final value) for prefers-reduced-motion. Only animates once.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1200,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const from = 0;
            const to = value;

            const tick = (now: number) => {
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              // ease-out quart
              const eased = 1 - Math.pow(1 - t, 4);
              setDisplay(Math.round(from + (to - from) * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
