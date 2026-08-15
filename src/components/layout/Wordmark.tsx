import Link from "next/link";
import { AmplifyMark } from "@/components/brand/AmplifyMark";

type WordmarkProps = {
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Editorial wordmark — brain-signal mark paired with serif name and
 * mono "HQ" tag. The typographic pairing carries the identity.
 */
export function Wordmark({ tone = "dark", size = "md", className = "" }: WordmarkProps) {
  const inkClass =
    tone === "light" ? "text-[color:var(--color-bone)]" : "text-[color:var(--color-ink)]";
  const tagClass =
    tone === "light" ? "text-[color:var(--color-bone)]/60" : "text-[color:var(--color-stone)]";
  const markSize = size === "sm" ? 26 : 32;
  const wordSize = size === "sm" ? "text-xl" : "text-[1.65rem]";

  return (
    <Link
      href="/"
      aria-label="Amplify HQ home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <AmplifyMark size={markSize} tone={tone === "light" ? "light" : "dark"} ariaHidden className="transition-transform duration-300 group-hover:rotate-[-4deg]" />
      <span
        className={`font-[family-name:var(--font-serif)] leading-none tracking-[-0.015em] ${wordSize} ${inkClass}`}
      >
        Amplify
      </span>
      <span
        className={`font-[family-name:var(--font-mono)] text-[0.68rem] font-medium uppercase tracking-[0.24em] ${tagClass}`}
      >
        HQ
      </span>
    </Link>
  );
}
