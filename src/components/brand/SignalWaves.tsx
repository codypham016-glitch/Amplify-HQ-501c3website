type SignalWavesProps = {
  size?: number;
  className?: string;
  ariaHidden?: boolean;
  animate?: boolean;
  monochrome?: string;
};

/**
 * Sound-wave / signal ripples radiating from a single point on the left.
 * Meaning: amplification, someone speaking, ideas reaching outward.
 * Rewritten so it reads as "voice emanating" rather than a clock face.
 */
export function SignalWaves({
  size = 200,
  className = "",
  ariaHidden = true,
  animate = false,
  monochrome,
}: SignalWavesProps) {
  const outer = monochrome ?? "#F26B4F";
  const middle = monochrome ?? "#B9A7E8";
  const inner = monochrome ?? "#8299D6";

  // origin point (like a mouth speaking outward to the right)
  const ox = 40;
  const oy = 100;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden={ariaHidden || undefined}
    >
      <g fill="none" strokeLinecap="round" strokeWidth="10">
        {/* inner ripple */}
        <path
          d={`M ${ox + 22} ${oy - 22} A 30 30 0 0 1 ${ox + 22} ${oy + 22}`}
          stroke={inner}
        >
          {animate && (
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.6s" repeatCount="indefinite" />
          )}
        </path>
        {/* middle ripple */}
        <path
          d={`M ${ox + 55} ${oy - 55} A 70 70 0 0 1 ${ox + 55} ${oy + 55}`}
          stroke={middle}
        >
          {animate && (
            <animate
              attributeName="opacity"
              values="0.35;0.9;0.35"
              dur="2.6s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          )}
        </path>
        {/* outer ripple */}
        <path
          d={`M ${ox + 88} ${oy - 88} A 110 110 0 0 1 ${ox + 88} ${oy + 88}`}
          stroke={outer}
        >
          {animate && (
            <animate
              attributeName="opacity"
              values="0.3;0.85;0.3"
              dur="2.6s"
              begin="1s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </g>
    </svg>
  );
}

/**
 * Wide horizontal signal band for full-width transitions.
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
