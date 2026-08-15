type IntersectionProps = {
  size?: number;
  className?: string;
  leftLabel?: string;
  rightLabel?: string;
  centerLabel?: string;
  leftColor?: string;
  rightColor?: string;
  overlapColor?: string;
};

/**
 * Two overlapping circles — the Business × Psychology intersection.
 * The center overlap represents Amplify itself.
 */
export function Intersection({
  size = 480,
  className = "",
  leftLabel = "Business",
  rightLabel = "Psychology",
  centerLabel = "Amplify",
  leftColor = "#17233C",
  rightColor = "#B9A7E8",
  overlapColor = "#F26B4F",
}: IntersectionProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 340"
      width={size}
      className={className}
      aria-hidden
    >
      <defs>
        <mask id="rightMask">
          <rect width="480" height="340" fill="white" />
          <circle cx="180" cy="170" r="130" fill="black" />
        </mask>
        <mask id="overlapMask">
          <rect width="480" height="340" fill="black" />
          <circle cx="180" cy="170" r="130" fill="white" />
        </mask>
      </defs>

      {/* LEFT circle — business */}
      <circle cx="180" cy="170" r="130" fill={leftColor} opacity="0.92" />

      {/* RIGHT circle — psychology, masked so overlap area is drawn separately */}
      <g mask="url(#rightMask)">
        <circle cx="300" cy="170" r="130" fill={rightColor} opacity="0.85" />
      </g>

      {/* Overlap — Amplify, coral */}
      <g mask="url(#overlapMask)">
        <circle cx="300" cy="170" r="130" fill={overlapColor} opacity="0.95" />
      </g>

      {/* Circle outlines for definition */}
      <g fill="none" strokeWidth="1.5">
        <circle cx="180" cy="170" r="130" stroke={leftColor} opacity="0.4" />
        <circle cx="300" cy="170" r="130" stroke={rightColor} opacity="0.6" />
      </g>

      {/* Labels */}
      <text
        x="100"
        y="325"
        textAnchor="middle"
        fill={leftColor}
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.1em"
        style={{ textTransform: "uppercase" }}
      >
        {leftLabel}
      </text>
      <text
        x="380"
        y="325"
        textAnchor="middle"
        fill={leftColor}
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.1em"
        style={{ textTransform: "uppercase" }}
      >
        {rightLabel}
      </text>

      {/* Amplify label — coral, centered in overlap */}
      <text
        x="240"
        y="178"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="22"
        fontWeight="800"
        letterSpacing="0.02em"
      >
        {centerLabel}
      </text>
    </svg>
  );
}
