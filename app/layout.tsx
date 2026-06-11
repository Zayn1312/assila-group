import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Assila Group",
  description:
    "AI, Games & Platforms — from concept to production. Portfolio of Anouar Assila.",
  openGraph: {
    title: "Assila Group",
    description: "AI, Games & Platforms — from concept to production.",
    url: "https://assila.group",
    siteName: "Assila Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assila Group",
    description: "AI, Games & Platforms — from concept to production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
