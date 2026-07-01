export function BranchingMotif({ className }: { className?: string }) {
  const nodes = [
    { x: 60, y: 300, label: "Inputs", color: "#121212" },
    { x: 180, y: 200, label: "Documents", color: "#4D6A72" },
    { x: 180, y: 400, label: "Rules", color: "#7A8F72" },
    { x: 310, y: 150, label: "Retrieval", color: "#E4572E" },
    { x: 310, y: 300, label: "Ranking", color: "#D1985A" },
    { x: 310, y: 450, label: "Embeddings", color: "#D9A07A" },
    { x: 440, y: 250, label: "LLM", color: "#252739" },
    { x: 440, y: 400, label: "Evaluation", color: "#7A8F72" },
    { x: 570, y: 200, label: "Review", color: "#E4572E" },
    { x: 570, y: 380, label: "Output", color: "#121212" },
  ];

  const edges: [number, number][] = [
    [0, 1], [0, 2],
    [1, 3], [1, 4],
    [2, 4], [2, 5],
    [3, 6], [4, 6], [5, 6],
    [4, 7], [5, 7],
    [6, 8], [6, 9],
    [7, 9],
    [8, 9],
  ];

  return (
    <svg
      viewBox="0 0 650 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Edges */}
      {edges.map(([from, to], i) => {
        const a = nodes[from];
        const b = nodes[to];
        const mx = (a.x + b.x) / 2;
        return (
          <path
            key={i}
            d={`M${a.x},${a.y} C${mx},${a.y} ${mx},${b.y} ${b.x},${b.y}`}
            stroke="#121212"
            strokeWidth="0.8"
            strokeOpacity="0.18"
            fill="none"
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r={i === 0 || i === nodes.length - 1 ? 10 : 7}
            fill={node.color}
            fillOpacity="0.85"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={i === 0 || i === nodes.length - 1 ? 10 : 7}
            stroke={node.color}
            strokeWidth="4"
            strokeOpacity="0.1"
            fill="none"
          />
          <text
            x={node.x}
            y={node.y + 22}
            textAnchor="middle"
            fontSize="9"
            fill="#121212"
            fillOpacity="0.6"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            letterSpacing="0.05em"
            style={{ textTransform: "uppercase" }}
          >
            {node.label}
          </text>
        </g>
      ))}

      {/* Subtle background branching lines */}
      <path
        d="M60 300 C 80 100, 200 80, 350 60"
        stroke="#7A8F72"
        strokeWidth="0.4"
        strokeOpacity="0.08"
        fill="none"
      />
      <path
        d="M60 300 C 80 500, 200 520, 350 540"
        stroke="#D9A07A"
        strokeWidth="0.4"
        strokeOpacity="0.08"
        fill="none"
      />
    </svg>
  );
}
