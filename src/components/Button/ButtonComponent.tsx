import Link from "next/link";
import React from "react";
import * as interfaces from "@/types/interfaces";

export default function ButtonComponent({
  label,
  link,
  ariaLabel,
  isMobile,
  children,
}: interfaces.ButtonComponentProps) {
  const className = isMobile
    ? "inline-flex h-10 w-36 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
    : "inline-flex h-10 w-36 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

  return (
    <Link
      aria-label={ariaLabel}
      target="_blank"
      href={link ?? ""}
      className={className}
    >
      {label}
      {children}
    </Link>
  );
}
