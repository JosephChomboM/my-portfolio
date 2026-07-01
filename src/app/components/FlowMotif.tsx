export function FlowMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Main flow curves */}
      <path
        d="M-50 300 C100 200, 200 400, 400 250 S600 100, 850 300"
        stroke="#121212"
        strokeWidth="0.8"
        strokeOpacity="0.12"
        fill="none"
      />
      <path
        d="M-50 350 C150 250, 250 450, 450 280 S650 120, 850 350"
        stroke="#121212"
        strokeWidth="0.6"
        strokeOpacity="0.08"
        fill="none"
      />
      <path
        d="M-50 200 C200 150, 300 350, 500 200 S700 50, 900 250"
        stroke="#E4572E"
        strokeWidth="0.7"
        strokeOpacity="0.15"
        fill="none"
      />
      <path
        d="M0 450 C200 380, 350 500, 550 380 S720 280, 900 420"
        stroke="#7A8F72"
        strokeWidth="0.6"
        strokeOpacity="0.1"
        fill="none"
      />
      <path
        d="M50 150 C250 80, 400 280, 600 160 S780 60, 950 200"
        stroke="#D9A07A"
        strokeWidth="0.5"
        strokeOpacity="0.1"
        fill="none"
      />

      {/* Koi-like organic marks */}
      <KoiMark cx={180} cy={240} angle={-20} color="#E4572E" />
      <KoiMark cx={420} cy={280} angle={15} color="#121212" />
      <KoiMark cx={620} cy={180} angle={-30} color="#7A8F72" />
      <KoiMark cx={300} cy={380} angle={10} color="#D9A07A" />
      <KoiMark cx={540} cy={340} angle={-15} color="#121212" />

      {/* Sparse dots */}
      <circle cx="120" cy="290" r="2.5" fill="#E4572E" fillOpacity="0.5" />
      <circle cx="240" cy="210" r="1.5" fill="#121212" fillOpacity="0.3" />
      <circle cx="380" cy="310" r="2" fill="#7A8F72" fillOpacity="0.4" />
      <circle cx="500" cy="220" r="1.5" fill="#D9A07A" fillOpacity="0.5" />
      <circle cx="660" cy="260" r="2" fill="#121212" fillOpacity="0.2" />
      <circle cx="740" cy="350" r="1.5" fill="#E4572E" fillOpacity="0.3" />
      <circle cx="80" cy="370" r="1.5" fill="#7A8F72" fillOpacity="0.3" />
      <circle cx="460" cy="400" r="2" fill="#121212" fillOpacity="0.15" />

      {/* Thin accent lines */}
      <line x1="0" y1="520" x2="800" y2="520" stroke="#D8D0C4" strokeWidth="0.5" strokeOpacity="0.4" />
      <line x1="0" y1="80" x2="800" y2="80" stroke="#D8D0C4" strokeWidth="0.5" strokeOpacity="0.4" />
    </svg>
  );
}

function KoiMark({ cx, cy, angle, color }: { cx: number; cy: number; angle: number; color: string }) {
  return (
    <g transform={`translate(${cx}, ${cy}) rotate(${angle})`} opacity="0.35">
      <ellipse rx="14" ry="5" fill={color} />
      <ellipse rx="6" ry="9" cx={-12} fill={color} opacity="0.6" />
    </g>
  );
}
