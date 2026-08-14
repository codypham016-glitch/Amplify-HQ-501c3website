type AmplifyMarkProps = {
  size?: number;
  tone?: "dark" | "light";
  className?: string;
  ariaHidden?: boolean;
};

/**
 * Renders the Amplify HQ mark.
 * Uses currentColor for silhouette and a CSS var for interior.
 */
export function AmplifyMark({
  size = 40,
  tone = "dark",
  className = "",
  ariaHidden = false,
}: AmplifyMarkProps) {
  const color =
    tone === "light"
      ? "#ffffff"
      : tone === "dark"
        ? "#1a1f36"
        : "#00d9ff";
  const markBrain =
    tone === "light"
      ? "#1a1f36"
      : tone === "dark"
        ? "#f5f7fa"
        : "#00d9ff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      style={{
        color,
        ["--mark-brain" as any]: markBrain,
      }}
      aria-hidden={ariaHidden || undefined}
    >
      {/* Head silhouette in profile */}
      <g fill="currentColor">
        <path d="M74 190 L74 176 L58 176 L58 118 C58 74 82 46 118 42 C158 38 178 66 180 96 L184 116 L192 118 L192 132 L182 140 L186 158 L176 170 L162 170 L150 178 L96 178 L96 190 Z" />
      </g>
      {/* Brain interior — subtle detail */}
      <g
        fill="none"
        stroke="var(--mark-brain, #f5f7fa)"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      >
        <path d="M78 96 Q92 82 108 96 Q120 108 132 96 Q146 82 160 96" />
        <path d="M78 116 Q94 104 110 116 Q124 128 138 116 Q150 106 162 118" />
        <path d="M84 136 Q100 126 114 136 Q128 146 142 136" />
      </g>
      {/* Signal arcs — minimal */}
      <g fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" opacity="0.85">
        <path d="M148 30 Q188 30 202 66" />
        <path d="M126 12 Q198 12 214 76" />
      </g>
    </svg>
  );
}
