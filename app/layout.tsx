import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ameer Hamza | Data Scientist Portfolio",
  description:
    "Portfolio of Ameer Hamza, Data Scientist and Data Analyst specialising in machine learning, analytics, dashboards, MLOps and applied AI.",
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