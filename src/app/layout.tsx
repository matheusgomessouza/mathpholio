import { Metadata } from "next";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Mathpholio!",
  description: "Portfolio website created by Matheus Souza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-color-seven text-color-eight"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <link rel="preload" href="/assets/main-circle.png" as="image" />
      </head>
      <body className="bg-color-seven text-color-eight antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
