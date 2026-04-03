import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MattBeth Residential Permit Guide",
  description: "Interactive residential permit map and guide by MattBeth Construction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
