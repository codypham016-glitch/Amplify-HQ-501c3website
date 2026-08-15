type SignalDividerProps = {
  variant?: "line" | "nodes" | "expand" | "branch" | "cross";
  color?: string;
  className?: string;
  height?: number;
};

/**
 * The Amplify-family divider. Five variations — same motif family, used
 * to visually connect the site's sections without generic horizontal rules.
 */
export function SignalDivider({
  variant = "line",
  color = "#17233C",
  className = "",
  height = 60,
}: SignalDividerProps) {
  const commonProps = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1200 60",
    preserveAspectRatio: "none" as const,
    className,
    style: { width: "100%", height, display: "block" as const },
    "aria-hidden": true,
  };

  if (variant === "line") {
    return (
      <svg {...commonProps}>
        <path
          d="M 0 40 Q 300 10 600 30 T 1200 20"
          fill="none"
          stroke={color}
          strokeWidth="1.25"
          opacity="0.7"
        />
      </svg>
    );
  }

  if (variant === "nodes") {
    return (
      <svg {...commonProps}>
        <path
          d="M 0 30 Q 300 5 600 25 T 1200 15"
          fill="none"
          stroke={color}
          strokeWidth="1.25"
          opacity="0.55"
        />
        <g fill={color}>
          <circle cx="150" cy="18" r="3" />
          <circle cx="450" cy="15" r="3" />
          <circle cx="750" cy="22" r="3" />
          <circle cx="1050" cy="16" r="3" />
        </g>
      </svg>
    );
  }

  if (variant === "expand") {
    // three waves radiating from left
    return (
      <svg {...commonProps} viewBox="0 0 1200 80" style={{ ...commonProps.style, height: height * 1.3 }}>
        <g fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.25">
          <path d="M 0 60 Q 400 60 600 30" opacity="0.85" />
          <path d="M 0 50 Q 500 50 720 20" opacity="0.55" />
          <path d="M 0 40 Q 600 40 840 12" opacity="0.3" />
        </g>
      </svg>
    );
  }

  if (variant === "branch") {
    return (
      <svg {...commonProps} viewBox="0 0 1200 80" style={{ ...commonProps.style, height: height * 1.3 }}>
        <g fill="none" stroke={color} strokeWidth="1.25" opacity="0.6">
          <path d="M 0 40 L 500 40" />
          <path d="M 500 40 L 700 15" />
          <path d="M 500 40 L 700 40" />
          <path d="M 500 40 L 700 65" />
          <path d="M 700 15 L 1200 15" />
          <path d="M 700 40 L 1200 40" />
          <path d="M 700 65 L 1200 65" />
        </g>
        <g fill={color}>
          <circle cx="500" cy="40" r="3.5" />
          <circle cx="700" cy="15" r="2.5" />
          <circle cx="700" cy="40" r="2.5" />
          <circle cx="700" cy="65" r="2.5" />
        </g>
      </svg>
    );
  }

  // cross — two converging paths meeting in the center
  return (
    <svg {...commonProps} viewBox="0 0 1200 60" style={{ ...commonProps.style, height }}>
      <g fill="none" stroke={color} strokeWidth="1.25" opacity="0.6">
        <path d="M 0 10 Q 400 10 600 30" />
        <path d="M 0 50 Q 400 50 600 30" />
        <path d="M 600 30 Q 800 30 1200 10" />
        <path d="M 600 30 Q 800 30 1200 50" />
      </g>
      <circle cx="600" cy="30" r="4" fill={color} />
    </svg>
  );
}
