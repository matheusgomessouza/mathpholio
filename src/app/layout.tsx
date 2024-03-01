import { Metadata } from "next";
import "../styles/globals.css";
import { Anton, Khand } from "next/font/google";
import { Providers } from "./providers";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const khand = Khand({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-khand",
});

export const metadata: Metadata = {
  title: "Mathpholio!",
  viewport: "width=device-width, initial-scale=1",
  description: "Portfolio website created by Matheus Souza",
  themeColor: [{ color: "#000", media: "(prefers-color-scheme:dark)" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      </head>
      <body className={`${anton.variable} ${khand.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
