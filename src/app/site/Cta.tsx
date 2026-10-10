import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

type Kind = "primary" | "secondary";
type Icon = "next" | "out" | "down";

const icons = { next: ArrowRight, out: ArrowUpRight, down: Download };

export function Cta({
  href,
  kind = "secondary",
  icon = "next",
  children,
  external,
  download,
}: {
  href: string;
  kind?: Kind;
  icon?: Icon;
  children: ReactNode;
  external?: boolean;
  download?: boolean;
}) {
  const I = icons[icon];
  if (!href) {
    // a link Joseph has not supplied yet: shown, marked, and not clickable
    return (
      <span className={`cta cta--${kind} cta--${icon} is-pending`} aria-disabled="true" title="Link coming soon">
        <span className="cta__label">{children}</span>
        <span className="cta__pending">pending</span>
      </span>
    );
  }
  return (
    <a
      className={`cta cta--${kind} cta--${icon}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: "" } : {})}
    >
      <span className="cta__label">{children}</span>
      <I className="cta__icon" size={16} strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}
