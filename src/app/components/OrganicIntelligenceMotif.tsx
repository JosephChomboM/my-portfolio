export function OrganicIntelligenceMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer orbit */}
      <circle
        cx="250"
        cy="250"
        r="200"
        stroke="#121212"
        strokeWidth="0.8"
        strokeOpacity="0.15"
        strokeDasharray="4 8"
      />
      {/* Mid orbit */}
      <circle
        cx="250"
        cy="250"
        r="140"
        stroke="#7A8F72"
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />
      {/* Inner orbit */}
      <circle
        cx="250"
        cy="250"
        r="80"
        stroke="#D9A07A"
        strokeWidth="0.8"
        strokeOpacity="0.25"
        strokeDasharray="3 6"
      />

      {/* Overlapping accent circle */}
      <circle
        cx="320"
        cy="200"
        r="90"
        stroke="#E4572E"
        strokeWidth="0.6"
        strokeOpacity="0.12"
      />

      {/* Curved paths across orbits */}
      <path
        d="M250 50 C350 120, 380 200, 320 280 S200 380, 250 450"
        stroke="#121212"
        strokeWidth="0.7"
        strokeOpacity="0.1"
        fill="none"
      />
      <path
        d="M50 250 C120 150, 220 140, 300 200 S400 320, 450 250"
        stroke="#7A8F72"
        strokeWidth="0.7"
        strokeOpacity="0.15"
        fill="none"
      />

      {/* Center core */}
      <circle cx="250" cy="250" r="8" fill="#121212" fillOpacity="0.8" />
      <circle cx="250" cy="250" r="3" fill="#E4572E" />

      {/* Orbit nodes */}
      <circle cx="250" cy="50" r="5" fill="#E4572E" fillOpacity="0.7" />
      <circle cx="250" cy="450" r="4" fill="#7A8F72" fillOpacity="0.6" />
      <circle cx="50" cy="250" r="4" fill="#D9A07A" fillOpacity="0.6" />
      <circle cx="450" cy="250" r="5" fill="#121212" fillOpacity="0.5" />
      <circle cx="395" cy="145" r="4" fill="#E4572E" fillOpacity="0.5" />
      <circle cx="105" cy="355" r="3.5" fill="#7A8F72" fillOpacity="0.5" />
      <circle cx="355" cy="395" r="3.5" fill="#D9A07A" fillOpacity="0.6" />
      <circle cx="145" cy="105" r="3.5" fill="#121212" fillOpacity="0.3" />

      {/* Koi-like marks on orbits */}
      <g transform="translate(250, 50) rotate(15)" opacity="0.4">
        <ellipse rx="10" ry="4" fill="#E4572E" />
        <ellipse rx="4" ry="7" cx="-9" fill="#E4572E" opacity="0.5" />
      </g>
      <g transform="translate(450, 250) rotate(-30)" opacity="0.35">
        <ellipse rx="10" ry="4" fill="#121212" />
        <ellipse rx="4" ry="7" cx="-9" fill="#121212" opacity="0.5" />
      </g>
      <g transform="translate(170, 380) rotate(45)" opacity="0.3">
        <ellipse rx="8" ry="3" fill="#7A8F72" />
        <ellipse rx="3" ry="6" cx="-7" fill="#7A8F72" opacity="0.5" />
      </g>

      {/* Thin radial lines */}
      <line x1="250" y1="250" x2="395" y2="145" stroke="#121212" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="250" y1="250" x2="105" y2="355" stroke="#7A8F72" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="250" y1="250" x2="355" y2="395" stroke="#D9A07A" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="250" y1="250" x2="145" y2="105" stroke="#E4572E" strokeWidth="0.5" strokeOpacity="0.1" />
    </svg>
  );
}
