import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PolicyEngine Marketing Materials",
  description: "Marketing materials for PolicyEngine conferences and events",
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
