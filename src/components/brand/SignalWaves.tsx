type SignalWavesProps = {
  size?: number;
  className?: string;
  ariaHidden?: boolean;
  animate?: boolean;
  monochrome?: string;
};

/**
 * The three signal waves — extracted from the logo as a standalone
 * motif. Tri-color by default (coral / lavender / periwinkle) to
 * match the mark. Pass `monochrome` to render all three in one color.
 */
export function SignalWaves({
  size = 140,
  className = "",
  ariaHidden = true,
  animate = false,
  monochrome,
}: SignalWavesProps) {
  const outer = monochrome ?? "#F26B4F";
  const middle = monochrome ?? "#B9A7E8";
  const inner = monochrome ?? "#8299D6";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden={ariaHidden || undefined}
    >
      <g fill="none" strokeLinecap="round" strokeWidth="14">
        <path d="M 30 180 Q 130 155 175 40" stroke={outer}>
          {animate && (
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3.2s" repeatCount="indefinite" />
          )}
        </path>
        <path d="M 30 180 Q 105 155 143 60" stroke={middle}>
          {animate && (
            <animate
              attributeName="opacity"
              values="0.55;0.95;0.55"
              dur="3.2s"
              begin="0.4s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <path d="M 30 180 Q 82 155 115 80" stroke={inner}>
          {animate && (
            <animate
              attributeName="opacity"
              values="0.5;0.9;0.5"
              dur="3.2s"
              begin="0.8s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </g>
    </svg>
  );
}

/**
 * Wide horizontal signal — for hero backdrops or full-width bands.
 * Tri-color, subtle opacity.
 */
export function SignalBand({
  className = "",
  height = 120,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      style={{ width: "100%", height, display: "block" }}
      aria-hidden
    >
      <g fill="none" strokeWidth="1.5" strokeLinecap="round">
        <path d="M 0 100 Q 300 40 600 70 T 1200 50" stroke="#F26B4F" opacity="0.85" />
        <path d="M 0 80 Q 300 20 600 55 T 1200 30" stroke="#B9A7E8" opacity="0.65" />
        <path d="M 0 60 Q 300 5 600 35 T 1200 10" stroke="#8299D6" opacity="0.5" />
      </g>
    </svg>
  );
}
