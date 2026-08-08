import "@usefillo/react/styles.css";
import "./styles.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Feedback form for Next.js · Fillo starter",
  description: "A Next.js example that adds a two-question Fillo feedback form to a settings page.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
