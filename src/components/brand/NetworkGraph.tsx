type NetworkNode = {
  label: string;
  sublabel?: string;
};

type NetworkGraphProps = {
  hub: NetworkNode;
  nodes: NetworkNode[];
  size?: number;
  className?: string;
  hubColor?: string;
  nodeColor?: string;
  lineColor?: string;
};

/**
 * Hub-and-spoke network diagram. Amplify HQ at the center, chapters
 * (or partners, or roles) radiating out. The visual implication of
 * "more can join" is intentional — space between nodes leaves room.
 */
export function NetworkGraph({
  hub,
  nodes,
  size = 520,
  className = "",
  hubColor = "#F26B4F",
  nodeColor = "#17233C",
  lineColor = "#17233C",
}: NetworkGraphProps) {
  const cx = 260;
  const cy = 260;
  const radius = 175;

  const positions = nodes.map((_, i) => {
    // start at top, evenly spaced
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 520"
      width={size}
      className={className}
      aria-hidden
    >
      {/* Connection lines from hub to each node */}
      <g stroke={lineColor} strokeWidth="1" opacity="0.35">
        {positions.map((p, i) => (
          <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} />
        ))}
      </g>

      {/* Faint outer ring — implies room to grow */}
      <circle
        cx={cx}
        cy={cy}
        r={radius + 40}
        fill="none"
        stroke={lineColor}
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.25"
      />

      {/* Nodes */}
      <g>
        {positions.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="8" fill={nodeColor} />
            <text
              x={p.x}
              y={p.y + 32}
              textAnchor="middle"
              fill={nodeColor}
              fontSize="15"
              fontWeight="700"
              letterSpacing="0.01em"
            >
              {nodes[i].label}
            </text>
            {nodes[i].sublabel ? (
              <text
                x={p.x}
                y={p.y + 50}
                textAnchor="middle"
                fill={nodeColor}
                opacity="0.6"
                fontSize="11"
                fontWeight="500"
              >
                {nodes[i].sublabel}
              </text>
            ) : null}
          </g>
        ))}
      </g>

      {/* Central hub — coral filled */}
      <g>
        <circle cx={cx} cy={cy} r="42" fill={hubColor} />
        <circle cx={cx} cy={cy} r="42" fill="none" stroke={hubColor} strokeWidth="2" opacity="0.3" strokeDasharray="3 3" />
        <text
          x={cx}
          y={cy - 3}
          textAnchor="middle"
          fill="#ffffff"
          fontSize="12"
          fontWeight="800"
          letterSpacing="0.06em"
        >
          {hub.label.split(" ")[0]}
        </text>
        <text
          x={cx}
          y={cy + 13}
          textAnchor="middle"
          fill="#ffffff"
          fontSize="12"
          fontWeight="800"
          letterSpacing="0.06em"
        >
          {hub.label.split(" ")[1] ?? ""}
        </text>
      </g>
    </svg>
  );
}
