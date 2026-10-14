
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emman De Belen | Portfolio",
  description:
    "Electronics Engineering graduate building practical solutions through software development, IoT, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
