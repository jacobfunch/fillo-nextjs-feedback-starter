import "@usefillo/react/styles.css";
import "./styles.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Native in-app feedback · Fillo Next.js starter",
  description: "A production-shaped in-app feedback card built with Next.js and Fillo.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
