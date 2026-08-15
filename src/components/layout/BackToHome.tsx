import Link from "next/link";
import { Container } from "./Container";

/**
 * "Back to home" link — small, top of interior pages.
 */
export function BackToHome() {
  return (
    <div className="border-b border-[color:var(--color-line)] bg-[color:var(--color-ivory)]">
      <Container>
        <div className="py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-[color:var(--color-navy-2)] hover:text-[color:var(--color-coral)] transition-colors"
          >
            <span aria-hidden>←</span> Back to home
          </Link>
        </div>
      </Container>
    </div>
  );
}
