import Link from "next/link";
import { AmplifyMark } from "@/components/brand/AmplifyMark";

type WordmarkProps = {
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

/**
 * The Amplify HQ lockup — brain-signal mark + clean sans wordmark.
 * Uppercase, tight letterspacing, no serif flourish.
 */
export function Wordmark({ tone = "dark", size = "md", className = "" }: WordmarkProps) {
  const inkClass = tone === "light" ? "text-white" : "text-[color:var(--color-navy)]";
  const tagClass = tone === "light" ? "text-white/70" : "text-[color:var(--color-navy-3)]";
  const markSize = size === "sm" ? 24 : 30;
  const wordSize = size === "sm" ? "text-[0.95rem]" : "text-[1.1rem]";

  return (
    <Link
      href="/"
      aria-label="Amplify HQ home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <AmplifyMark
        size={markSize}
        tone={tone === "light" ? "light" : "dark"}
        ariaHidden
        className="transition-transform duration-300 group-hover:rotate-[-4deg]"
      />
      <span className={`inline-flex items-baseline gap-1.5 ${inkClass}`}>
        <span className={`font-bold uppercase tracking-[0.06em] ${wordSize}`}>
          Amplify
        </span>
        <span
          className={`font-semibold uppercase tracking-[0.14em] text-[0.72rem] ${tagClass}`}
        >
          HQ
        </span>
      </span>
    </Link>
  );
}
