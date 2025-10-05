import { Metadata } from "next";
import "../styles/globals.css";
import { Anton, Khand } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap", // Prevents render blocking
  preload: true,
});

const khand = Khand({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-khand",
  display: "swap", // Prevents render blocking
  preload: true,
});

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
      className="scroll-smooth dark:bg-black dark:text-white"
      style={{ scrollBehavior: "smooth" }}
    >
      <title>Mathpholio!</title>
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <link rel="preload" href="/assets/main-circle.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={`${anton.variable} ${khand.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
