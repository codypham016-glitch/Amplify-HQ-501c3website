import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-navy)] text-white">
      <Container>
        <div className="grid grid-cols-1 gap-14 pt-24 pb-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <p className="mt-8 max-w-sm text-2xl font-bold leading-[1.15] text-white">
              {site.tagline}
            </p>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-[1.6] text-white/70">
              {site.description}
            </p>
            <p className="mt-8 inline-flex items-center gap-2 border border-white/25 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-coral)]" aria-hidden />
              {site.taxStatus}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((column) => (
              <div key={column.heading}>
                <h4 className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-coral)]">
                  {column.heading}
                </h4>
                <ul className="mt-5 space-y-3 text-[0.95rem]">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-white/80 transition-colors hover:text-[color:var(--color-coral-tint)]"
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

        <div className="border-t border-white/15 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/55">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p className="uppercase tracking-[0.16em] font-semibold text-[color:var(--color-coral-tint)]">
            {site.concept}
          </p>
        </div>
      </Container>
    </footer>
  );
}
