type AmplifyMarkProps = {
  size?: number;
  tone?: "dark" | "light" | "signal";
  className?: string;
  ariaHidden?: boolean;
};

/**
 * The Amplify HQ mark.
 * Head silhouette in profile facing LEFT with the crown cut away to
 * reveal the brain (like an anatomical cross-section). Signal waves
 * float above and to the right of the head, coral / lavender /
 * periwinkle, opening outward — matches the real logo composition.
 *
 * When public/amplify-logo.png exists, prefer <BrandLogo> over this
 * hand-drawn SVG for anywhere the real logo should be shown at
 * scale.
 */
export function AmplifyMark({
  size = 40,
  tone = "dark",
  className = "",
  ariaHidden = false,
}: AmplifyMarkProps) {
  const head = tone === "light" ? "#ffffff" : "#17233C";
  const brainBg = tone === "light" ? "#17233C" : "#ffffff";
  const line = tone === "light" ? "#ffffff" : "#17233C";

  const coral = "#F26B4F";
  const lavender = "#B9A7E8";
  const periwinkle = "#8299D6";
  const navy = "#17233C";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 240"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden={ariaHidden || undefined}
    >
      {/* Head silhouette facing LEFT — bald crown, distinguishable
          forehead, nose bump, mouth curl, and chin. */}
      <path
        d="M 168 218
           L 168 202
           L 174 202
           L 176 152
           C 176 96 140 68 100 68
           C 78 68 66 78 60 90
           L 52 100
           C 46 102 42 108 42 116
           C 42 124 48 128 54 128
           L 58 128
           L 62 136
           L 66 140
           C 66 146 64 150 60 154
           L 66 158
           L 72 156
           C 74 162 70 168 66 172
           L 74 178
           C 82 184 86 190 86 196
           L 86 202
           L 100 202
           L 100 218 Z"
        fill={head}
      />

      {/* Cutaway crown — a lighter interior "bowl" showing the brain */}
      <path
        d="M 68 100
           C 74 84 92 76 112 78
           C 148 82 168 108 168 138
           L 168 152
           L 74 152
           C 60 138 58 118 68 100 Z"
        fill={brainBg}
      />

      {/* Curved neural connections */}
      <g fill="none" stroke={line} strokeWidth="1.5" opacity="0.75" strokeLinecap="round">
        <path d="M 82 108 Q 100 96 118 106" />
        <path d="M 118 106 Q 138 116 152 100" />
        <path d="M 82 128 Q 100 122 118 130" />
        <path d="M 118 130 Q 140 138 156 122" />
        <path d="M 90 144 Q 108 140 128 146" />
        <path d="M 82 108 L 82 128" />
        <path d="M 152 100 L 156 122" />
      </g>

      {/* Neural nodes — mixed-color dots */}
      <g>
        <circle cx="82" cy="108" r="4" fill={coral} />
        <circle cx="118" cy="106" r="4" fill={navy} />
        <circle cx="152" cy="100" r="3.5" fill={lavender} />
        <circle cx="82" cy="128" r="3.5" fill={periwinkle} />
        <circle cx="118" cy="130" r="4" fill={coral} />
        <circle cx="156" cy="122" r="3.5" fill={navy} />
        <circle cx="90" cy="144" r="3" fill={lavender} />
        <circle cx="128" cy="146" r="3.5" fill={periwinkle} />
      </g>

      {/* Signal waves — three nested arcs above and to the right of
          the head, opening downward. Matches the reference logo
          composition (broadcast emanating from a mind). */}
      <g fill="none" strokeLinecap="round" strokeWidth="11">
        <path d="M 178 60 A 30 30 0 0 1 208 90" stroke={periwinkle} />
        <path d="M 176 42 A 60 60 0 0 1 236 102" stroke={lavender} />
        <path d="M 176 24 A 92 92 0 0 1 268 116" stroke={coral} />
      </g>
    </svg>
  );
}
