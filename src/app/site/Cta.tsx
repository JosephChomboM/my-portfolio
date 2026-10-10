import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Download } from "lucide-react";

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

/** Copies the email for visitors without a mail client; confirms in place, then resets. */
export function CopyCta({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);
  if (!text) return null;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const t = document.createElement("textarea");
      t.value = text;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2200);
  };
  const I = copied ? Check : Copy;
  return (
    <button type="button" className={`cta cta--secondary cta--copy${copied ? " is-copied" : ""}`} onClick={copy}>
      <span className="cta__label" aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
      <I className="cta__icon" size={16} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}
