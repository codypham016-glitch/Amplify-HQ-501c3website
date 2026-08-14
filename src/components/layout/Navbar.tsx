"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b-2 border-[color:var(--color-gray-2)]"
          : "bg-white/0 border-b-2 border-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 lg:h-20">
          <Wordmark size="md" />

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1 text-sm font-medium text-[color:var(--color-charcoal)]"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-md px-4 py-2 transition-colors hover:text-[color:var(--color-teal)]"
              >
                <span>{item.label}</span>
                <span
                  aria-hidden
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[color:var(--color-teal)] transition-transform duration-200 ease-out group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/start-a-chapter"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              trailing="→"
            >
              Apply
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex flex-col items-end gap-1.5 p-2 text-[color:var(--color-charcoal)]"
            >
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  open ? "opacity-0 w-6" : "w-4"
                }`}
              />
              <span
                className={`block h-px w-6 bg-current transition-all duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : "w-5"
                }`}
              />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-30 bg-white border-t-2 border-[color:var(--color-gray-2)] overflow-y-auto">
          <Container>
            <nav aria-label="Mobile" className="flex flex-col divide-y-2 divide-[color:var(--color-gray-2)]">
              {primaryNav.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    {item.label}
                  </span>
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              ))}
              <div className="pt-6 pb-10">
                <Button
                  href="/start-a-chapter"
                  variant="primary"
                  size="lg"
                  className="w-full justify-between"
                  trailing="→"
                >
                  Apply as Chapter Lead
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
