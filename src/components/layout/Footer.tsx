import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-charcoal)] text-white">
      <Container>
        <div className="grid grid-cols-1 gap-14 pt-20 pb-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 border-2 border-[color:var(--color-teal)] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-teal)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-teal)]" aria-hidden />
              {site.taxStatus}
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((column) => (
              <div key={column.heading}>
                <h4 className="eyebrow-on-dark font-semibold">{column.heading}</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-white/80 transition-colors hover:text-[color:var(--color-teal)]"
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

        <div className="border-t-2 border-white/10 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[color:var(--color-teal)]">
            Think · Connect · Amplify
          </p>
        </div>
      </Container>
    </footer>
  );
}
