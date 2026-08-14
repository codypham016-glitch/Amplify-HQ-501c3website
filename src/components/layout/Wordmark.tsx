import Link from "next/link";

type WordmarkProps = {
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
};

/**
 * Editorial wordmark — serif name paired with a mono "HQ" tag.
 * The typographic pairing itself carries the identity.
 */
export function Wordmark({ tone = "dark", size = "md", className = "" }: WordmarkProps) {
  const inkClass = tone === "light" ? "text-[color:var(--color-bone)]" : "text-[color:var(--color-ink)]";
  const tagClass = tone === "light" ? "text-[color:var(--color-bone)]/60" : "text-[color:var(--color-stone)]";
  const dotClass = tone === "light" ? "bg-[color:var(--color-signal)]" : "bg-[color:var(--color-signal)]";
  const wordSize = size === "sm" ? "text-xl" : "text-[1.65rem]";

  return (
    <Link
      href="/"
      aria-label="Amplify HQ home"
      className={`group inline-flex items-baseline gap-2.5 ${className}`}
    >
      <span
        className={`font-[family-name:var(--font-serif)] leading-none tracking-[-0.015em] ${wordSize} ${inkClass}`}
      >
        Amplify
      </span>
      <span
        className={`h-1.5 w-1.5 translate-y-[-2px] shrink-0 rounded-full ${dotClass}`}
        aria-hidden
      />
      <span
        className={`font-[family-name:var(--font-mono)] text-[0.68rem] font-medium uppercase tracking-[0.24em] ${tagClass}`}
      >
        HQ
      </span>
    </Link>
  );
}
