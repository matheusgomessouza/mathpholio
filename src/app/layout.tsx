import { Metadata } from "next";
import "../styles/globals.css";
import { Anton, Khand } from "next/font/google";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <link
          href="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${anton.variable} ${khand.variable}`}>
        {children}
        <script
          async
          type="text/javascript"
          src="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/letteranimation.min.js"
        ></script>
      </body>
    </html>
  );
}
