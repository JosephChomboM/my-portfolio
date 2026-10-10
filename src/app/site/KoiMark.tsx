export function KoiMark({ size = 24, dot = true, className }: { size?: number; dot?: boolean; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      <path
        d="M18 8C50 10 80 34 84 70M18 8C12 34 22 58 46 70M84 70C74 52 56 50 48 62M48 62C42 74 44 86 52 94M60 66C64 76 64 86 58 94"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {dot && <circle cx="88" cy="14" r="6" fill="var(--accent)" />}
    </svg>
  );
}
