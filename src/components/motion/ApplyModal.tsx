"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

/**
 * A small preview modal launched from any "Apply now" trigger.
 * Shows a two-sentence summary of what the application entails and
 * a jump-to-form CTA. Escape / backdrop closes it.
 */
export function ApplyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      // mount then fade in on next frame
      setVisible(true);
    } else {
      const t = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open && !visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="apply-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-[color:var(--color-navy)]/70 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative w-full max-w-lg bg-white border border-[color:var(--color-line)] p-8 lg:p-10 shadow-2xl transition-all duration-200 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 h-8 w-8 flex items-center justify-center text-[color:var(--color-navy-3)] hover:text-[color:var(--color-coral)] transition-colors"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[color:var(--color-coral)]">
          Chapter Lead application
        </p>
        <h2
          id="apply-modal-title"
          className="mt-4 text-2xl lg:text-3xl font-extrabold leading-[1.15] tracking-[-0.02em] text-[color:var(--color-navy)]"
        >
          Ready to bring Amplify to your school?
        </h2>
        <p className="mt-4 text-base leading-[1.6] text-[color:var(--color-navy-2)]">
          The application is a short set of questions read by a real person. Submitting doesn&apos;t commit you to anything, the next step is a conversation.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-[color:var(--color-navy-2)]">
          <li className="flex items-baseline gap-2">
            <span className="text-[color:var(--color-coral)] font-bold">→</span>
            No prior business experience required
          </li>
          <li className="flex items-baseline gap-2">
            <span className="text-[color:var(--color-coral)] font-bold">→</span>
            Answered by the national team, not a form auto-responder
          </li>
          <li className="flex items-baseline gap-2">
            <span className="text-[color:var(--color-coral)] font-bold">→</span>
            You bring your school, we bring the program
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/start-a-chapter#apply"
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-[color:var(--color-navy)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--color-coral)]"
          >
            Open the application <span aria-hidden>→</span>
          </Link>
          <button
            onClick={onClose}
            className="text-sm font-semibold text-[color:var(--color-navy-3)] hover:text-[color:var(--color-navy)] px-2 py-3"
          >
            Not right now
          </button>
        </div>
      </div>
    </div>
  );
}
