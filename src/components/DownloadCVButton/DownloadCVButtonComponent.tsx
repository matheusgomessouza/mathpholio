import React from "react";

export default function DownloadCvButtonComponent(): JSX.Element {
  return (
    <a
      className="btn inline-flex h-9 items-center justify-center rounded-full border border-primary px-4 text-xs font-semibold text-white shadow-[0_0_20px_bg-success] transition hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
      href="/api/download"
    >
      Download CV
    </a>
  );
}
