import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sergiorodriguez.dev"),
  title: "Sergio Rodríguez Valbuena — AI Engineer",
  description:
    "AI Engineer building intelligent systems that turn complex data into decisions. Portfolio of Sergio Rodríguez Valbuena — RAG, ML/DL, conversational AI.",
  authors: [{ name: "Sergio Rodríguez Valbuena" }],
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "Sergio Rodríguez Valbuena",
    "Portfolio",
    "Madrid",
  ],
  openGraph: {
    title: "Sergio Rodríguez Valbuena — AI Engineer",
    description:
      "AI Engineer building intelligent systems that turn complex data into decisions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${geist.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
