type AmplifyMarkProps = {
  size?: number;
  tone?: "dark" | "light" | "signal";
  className?: string;
  ariaHidden?: boolean;
};

/**
 * The Amplify HQ mark — head silhouette in navy, brain with a mixed
 * network of coral/lavender/periwinkle nodes, and three signal waves
 * in the same three accent colors radiating out.
 *
 * This is the source of truth for the visual language: the signal waves
 * and the neural network graphics on the site are extracted from this.
 */
export function AmplifyMark({
  size = 40,
  tone = "dark",
  className = "",
  ariaHidden = false,
}: AmplifyMarkProps) {
  // Head silhouette color
  const head =
    tone === "light" ? "#ffffff" : tone === "signal" ? "#F26B4F" : "#17233C";
  const brainBg = tone === "light" ? "#17233C" : "#ffffff";
  const line = tone === "light" ? "#ffffff" : "#17233C";

  const coral = "#F26B4F";
  const lavender = "#B9A7E8";
  const periwinkle = "#8299D6";
  const navy = "#17233C";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden={ariaHidden || undefined}
    >
      {/* Head silhouette in profile */}
      <path
        d="M62 208
           L62 192
           L48 192
           L48 128
           C48 82 76 50 118 46
           C160 42 184 72 188 106
           L192 128
           L200 132
           L200 148
           L188 156
           L192 172
           L182 184
           L166 184
           L156 192
           L88 192
           L88 208 Z"
        fill={head}
      />

      {/* Brain "chamber" — a soft interior area */}
      <path
        d="M70 122
           C 70 92 92 68 122 66
           C 156 64 174 90 176 118
           C 176 138 168 156 148 168
           L 96 168
           C 78 158 70 142 70 122 Z"
        fill={brainBg}
        opacity="0.9"
      />

      {/* Curved connecting lines inside brain */}
      <g fill="none" stroke={line} strokeWidth="1.5" opacity="0.75" strokeLinecap="round">
        <path d="M 82 108 Q 100 92 120 108" />
        <path d="M 120 108 Q 140 120 158 100" />
        <path d="M 82 130 Q 100 120 118 132" />
        <path d="M 118 132 Q 140 148 162 130" />
        <path d="M 96 150 Q 118 140 138 152" />
        <path d="M 82 108 L 82 130" />
        <path d="M 158 100 L 162 130" />
      </g>

      {/* Neural nodes — mixed colors matching the real logo */}
      <g>
        <circle cx="82" cy="108" r="4.5" fill={coral} />
        <circle cx="120" cy="108" r="4.5" fill={navy} />
        <circle cx="158" cy="100" r="4" fill={lavender} />
        <circle cx="82" cy="130" r="4" fill={periwinkle} />
        <circle cx="118" cy="132" r="4.5" fill={coral} />
        <circle cx="162" cy="130" r="4" fill={navy} />
        <circle cx="96" cy="150" r="3.5" fill={lavender} />
        <circle cx="138" cy="152" r="4" fill={periwinkle} />
      </g>

      {/* Three signal waves — tri-color, matching the real logo */}
      <g fill="none" strokeLinecap="round" strokeWidth="12">
        <path d="M 138 34 Q 190 26 210 74" stroke={coral} />
        <path d="M 128 46 Q 172 40 196 82" stroke={lavender} />
        <path d="M 118 58 Q 156 54 180 90" stroke={periwinkle} />
      </g>
    </svg>
  );
}
