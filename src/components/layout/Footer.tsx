import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-ink)] text-[color:var(--color-bone)]">
      <Container>
        <div className="grid grid-cols-1 gap-14 pt-24 pb-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <p className="mt-8 max-w-sm font-[family-name:var(--font-serif)] text-2xl leading-[1.15] text-[color:var(--color-bone)]">
              {site.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-[color:var(--color-bone)]/60">
              {site.description}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 border border-[color:var(--color-bone)]/40 px-3 py-1.5 font-[family-name:var(--font-mono)] text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[color:var(--color-bone)]/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-signal)]" aria-hidden />
              {site.taxStatus}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((column) => (
              <div key={column.heading}>
                <h4 className="font-[family-name:var(--font-mono)] text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[color:var(--color-signal-tint)]">
                  {column.heading}
                </h4>
                <ul className="mt-5 space-y-3 text-sm">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[color:var(--color-bone)]/80 transition-colors hover:text-[color:var(--color-signal-tint)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[color:var(--color-bone)]/15 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-[color:var(--color-bone)]/55">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.24em]">
            <span className="text-[color:var(--color-signal-tint)]">{site.concept}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
