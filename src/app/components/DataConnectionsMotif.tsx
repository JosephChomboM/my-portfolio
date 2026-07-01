export function DataConnectionsMotif({ className }: { className?: string }) {
  const points = [
    { x: 80, y: 180 },
    { x: 200, y: 80 },
    { x: 320, y: 140 },
    { x: 440, y: 60 },
    { x: 540, y: 160 },
    { x: 160, y: 280 },
    { x: 280, y: 240 },
    { x: 400, y: 280 },
    { x: 500, y: 300 },
    { x: 100, y: 360 },
    { x: 240, y: 380 },
    { x: 360, y: 360 },
    { x: 480, y: 400 },
    { x: 580, y: 260 },
    { x: 620, y: 140 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [1, 5], [1, 6], [2, 6],
    [2, 7], [3, 7], [4, 7], [4, 8],
    [5, 9], [5, 10], [6, 10], [6, 11],
    [7, 11], [7, 12], [8, 12], [8, 13],
    [3, 14], [4, 14], [13, 14],
    [9, 10], [10, 11], [11, 12],
  ];

  const colors = ["#E4572E", "#7A8F72", "#D9A07A", "#4D6A72", "#121212", "#D1985A"];

  return (
    <svg
      viewBox="0 0 700 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Connection lines */}
      {connections.map(([a, b], i) => (
        <line
          key={i}
          x1={points[a].x}
          y1={points[a].y}
          x2={points[b].x}
          y2={points[b].y}
          stroke="#121212"
          strokeWidth="0.6"
          strokeOpacity="0.12"
        />
      ))}

      {/* Points / nodes */}
      {points.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x}
            cy={p.y}
            r={i % 3 === 0 ? 5 : 3}
            fill={colors[i % colors.length]}
            fillOpacity="0.6"
          />
          {i % 4 === 0 && (
            <circle
              cx={p.x}
              cy={p.y}
              r={8}
              stroke={colors[i % colors.length]}
              strokeWidth="0.8"
              strokeOpacity="0.2"
              fill="none"
            />
          )}
        </g>
      ))}

      {/* Large orbit for data "clustering" effect */}
      <circle
        cx="330"
        cy="230"
        r="180"
        stroke="#4D6A72"
        strokeWidth="0.6"
        strokeOpacity="0.08"
        strokeDasharray="6 12"
      />
      <circle
        cx="330"
        cy="230"
        r="100"
        stroke="#D9A07A"
        strokeWidth="0.5"
        strokeOpacity="0.08"
        strokeDasharray="3 8"
      />
    </svg>
  );
}
