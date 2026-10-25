import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const instrument = localFont({ src: "./fonts/instrument-serif.woff2", variable: "--font-instrument" });
const inter = localFont({ src: "./fonts/inter.woff2", variable: "--font-inter" });
const jetbrains = localFont({ src: "./fonts/jetbrains-mono.woff2", variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Marlowe Ian P. Jumagbas - Portfolio",
  description: "Modernized retro-inspired portfolio website of Marlowe Ian Jumagbas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrument.variable} ${inter.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
