import Link from "next/link";
import { AmplifyMark } from "@/components/brand/AmplifyMark";

type WordmarkProps = {
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Amplify HQ lockup — mark + "AMPLIFY" (navy) + "HQ" (coral),
 * matching the source logo's typographic split.
 */
export function Wordmark({ tone = "dark", size = "md", className = "" }: WordmarkProps) {
  const primary = tone === "light" ? "text-white" : "text-[color:var(--color-navy)]";
  const markSize = size === "sm" ? 26 : 32;
  const wordSize = size === "sm" ? "text-[1rem]" : "text-[1.2rem]";

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
        className="transition-transform duration-300 group-hover:rotate-[-3deg]"
      />
      <span className="inline-flex items-baseline gap-1">
        <span className={`font-extrabold uppercase tracking-[0.02em] leading-none ${wordSize} ${primary}`}>
          Amplify
        </span>
        <span className={`font-extrabold uppercase tracking-[0.02em] leading-none ${wordSize} text-[color:var(--color-coral)]`}>
          HQ
        </span>
      </span>
    </Link>
  );
}
