import Link from "next/link";
import { AmplifyMark } from "@/components/brand/AmplifyMark";

type WordmarkProps = {
  tone?: "dark" | "light";
  size?: "sm" | "md";
  className?: string;
  showTag?: boolean;
};

export function Wordmark({
  tone = "dark",
  size = "md",
  className = "",
  showTag = true,
}: WordmarkProps) {
  const inkClass =
    tone === "light" ? "text-white" : "text-[color:var(--color-charcoal)]";
  const tagClass =
    tone === "light"
      ? "text-white/60"
      : "text-[color:var(--color-gray-muted)]";
  const markSize = size === "sm" ? 28 : 34;
  const wordSize = size === "sm" ? "text-lg" : "text-xl";

  return (
    <Link
      href="/"
      aria-label="Amplify HQ home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <AmplifyMark
        size={markSize}
        tone={tone === "light" ? "light" : "dark"}
        ariaHidden
        className="transition-transform duration-200 group-hover:scale-110"
      />
      <span className="flex items-baseline gap-1.5">
        <span
          className={`font-[family-name:var(--font-display)] font-medium tracking-[-0.02em] leading-none ${wordSize} ${inkClass}`}
        >
          Amplify
        </span>
        {showTag ? (
          <span
            className={`font-[family-name:var(--font-mono)] text-[0.65rem] font-medium uppercase tracking-[0.18em] ${tagClass}`}
          >
            HQ
          </span>
        ) : null}
      </span>
    </Link>
  );
}
