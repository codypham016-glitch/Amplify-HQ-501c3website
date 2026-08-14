type NeuralNetworkProps = {
  nodes: string[];
  size?: number;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * A minimal neural network diagram showing connected concepts.
 * Nodes are arranged in a circle with connecting lines.
 * Replaces decorative flourishes with scientific visualization.
 */
export function NeuralNetwork({
  nodes,
  size = 280,
  tone = "dark",
  className = "",
}: NeuralNetworkProps) {
  const stroke = tone === "light" ? "#00d9ff" : "#1a1f36";
  const nodeColor = tone === "light" ? "#ffffff" : "#00d9ff";
  const textColor = tone === "light" ? "#00d9ff" : "#1a1f36";

  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2.8;

  // Position nodes in a circle
  const positions = nodes.map((_, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
      label: nodes[i],
    };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      {/* Connecting lines between all nodes */}
      <g stroke={stroke} strokeWidth="1.5" opacity="0.4">
        {positions.map((p1, i) =>
          positions.slice(i + 1).map((p2) => (
            <line
              key={`${i}-${p2}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
            />
          ))
        )}
      </g>

      {/* Nodes */}
      {positions.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r="8"
            fill={nodeColor}
            opacity="0.8"
          />
          <circle
            cx={p.x}
            cy={p.y}
            r="12"
            fill="none"
            stroke={stroke}
            strokeWidth="1"
            opacity="0.3"
          />
        </g>
      ))}
    </svg>
  );
}
