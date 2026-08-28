import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIH Demo | Frontend Foundation",
  description: "Premium responsive landing page for SIH Demo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
