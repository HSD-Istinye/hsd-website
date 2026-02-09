import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HSD - Huawei Student Developers | Istinye University",
  description: "Huawei Student Developers at Istinye University - Empowering the next generation of developers through innovation, collaboration, and cutting-edge technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body>{children}</body>
    </html>
  );
}
