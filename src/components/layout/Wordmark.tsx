import Link from "next/link";

type WordmarkProps = {
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Amplify HQ wordmark — text-only. AMPLIFY (navy) + HQ (coral),
 * matching the real logo's typographic split. Clean, no mark icon.
 */
export function Wordmark({ tone = "dark", size = "md", className = "" }: WordmarkProps) {
  const primary = tone === "light" ? "text-white" : "text-[color:var(--color-navy)]";
  const wordSize = size === "sm" ? "text-[1.05rem]" : "text-[1.3rem]";

  return (
    <Link
      href="/"
      aria-label="Amplify HQ home"
      className={`inline-flex items-baseline gap-1 ${className}`}
    >
      <span className={`font-extrabold uppercase tracking-[0.02em] leading-none ${wordSize} ${primary}`}>
        Amplify
      </span>
      <span className={`font-extrabold uppercase tracking-[0.02em] leading-none ${wordSize} text-[color:var(--color-coral)]`}>
        HQ
      </span>
    </Link>
  );
}
