type NeuralNetProps = {
  size?: number;
  color?: string;
  nodeColor?: string;
  className?: string;
  density?: "sparse" | "medium" | "dense";
};

/**
 * Neural network motif — dots and curved connections.
 * Meaning: psychology, decision-making, learning, curiosity.
 * Sophisticated and minimal — never generic "AI graphics" style.
 */
export function NeuralNet({
  size = 220,
  color = "currentColor",
  nodeColor,
  className = "",
  density = "medium",
}: NeuralNetProps) {
  const dot = nodeColor ?? color;

  const nodes = {
    sparse: [
      { x: 40, y: 60 },
      { x: 120, y: 40 },
      { x: 180, y: 90 },
      { x: 80, y: 140 },
      { x: 160, y: 170 },
    ],
    medium: [
      { x: 30, y: 50 },
      { x: 90, y: 30 },
      { x: 160, y: 55 },
      { x: 200, y: 110 },
      { x: 130, y: 130 },
      { x: 60, y: 120 },
      { x: 40, y: 180 },
      { x: 165, y: 175 },
    ],
    dense: [
      { x: 25, y: 40 },
      { x: 70, y: 25 },
      { x: 130, y: 35 },
      { x: 180, y: 60 },
      { x: 200, y: 120 },
      { x: 160, y: 165 },
      { x: 105, y: 185 },
      { x: 55, y: 160 },
      { x: 25, y: 110 },
      { x: 90, y: 90 },
      { x: 150, y: 110 },
    ],
  }[density];

  // connections: hand-picked, curved rather than crossing chaotic straight lines
  const allConnections: Array<[number, number]> = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [0, 6],
    [1, 5],
    [2, 5],
    [3, 5],
    [0, 5],
    [1, 4],
  ];
  const connections = allConnections.filter(([a, b]) => a < nodes.length && b < nodes.length);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <g fill="none" stroke={color} strokeWidth="1" opacity="0.5">
        {connections.map(([a, b], i) => {
          const p1 = nodes[a];
          const p2 = nodes[b];
          const mx = (p1.x + p2.x) / 2 + (i % 2 === 0 ? 6 : -6);
          const my = (p1.y + p2.y) / 2 + (i % 3 === 0 ? -6 : 6);
          return (
            <path key={`${a}-${b}`} d={`M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`} />
          );
        })}
      </g>
      <g fill={dot}>
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={i === Math.floor(nodes.length / 2) ? 4 : 2.5} />
        ))}
      </g>
    </svg>
  );
}
