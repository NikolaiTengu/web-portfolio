import type { Metadata } from "next";
import "./globals.css";

// XP-era fonts fallback
const xpFonts = {
  tahoma: "--font-tahoma",
  msGothic: "--font-ms-gothic",
};

export const metadata: Metadata = {
  title: "Marlowe Ian Jumagbas - Portfolio [Modern Retro]",
  description: "Modernized retro-inspired portfolio website of Marlowe Ian Jumagbas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
              --font-jetbrains: 'JetBrains Mono', 'Monaco', 'Cascadia Code', monospace;
            }
          `
        }} />
      </head>
      <body className="font-inter text-primary bg-surface-card">
        {children}
      </body>
    </html>
  );
}
